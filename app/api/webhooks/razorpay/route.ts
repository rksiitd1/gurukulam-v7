// app/api/webhooks/razorpay/route.ts
export const dynamic = 'force-dynamic';

import { NextResponse } from "next/server";
import crypto from "crypto";
import { getDb } from "@/lib/firebase/admin";

export async function POST(req: Request) {
  const secret = process.env.RAZORPAY_WEBHOOK_SECRET!;

  try {
    const requestBody = await req.text();
    const signature = req.headers.get("x-razorpay-signature")!;

    // 1. Verify the webhook signature for security
    const shasum = crypto.createHmac("sha256", secret);
    shasum.update(requestBody);
    const digest = shasum.digest("hex");

    if (digest !== signature) {
      console.warn("Invalid Razorpay webhook signature received.");
      return NextResponse.json({ error: "Invalid signature" }, { status: 403 });
    }
    
    console.log("Webhook signature verified successfully.");
    const event = JSON.parse(requestBody);

    // 2. Handle the 'payment.captured' event (successful payment)
    if (event.event === "payment.captured") {
      const payment = event.payload.payment.entity;
      const orderId = payment.order_id;
      const paymentId = payment.id;

      // Find the donation by razorpay_order_id and update status
      const snapshot = await getDb().collection('donations')
        .where('razorpay_order_id', '==', orderId)
        .limit(1)
        .get();

      if (snapshot.empty) {
        console.error(`No donation found for Order ID: ${orderId}`);
        return NextResponse.json({ error: "Donation record not found." }, { status: 404 });
      }

      try {
        await snapshot.docs[0].ref.update({
          status: 'successful',
          razorpay_payment_id: paymentId,
          updated_at: new Date(),
        });
        console.log("Successfully updated donation record to 'successful' for Order ID:", orderId);
      } catch (error) {
        console.error("Firestore update error (payment.captured):", error);
        return NextResponse.json({ error: "Failed to update donation status in database." }, { status: 500 });
      }
    }
    // 3. Handle the 'payment.failed' event
    else if (event.event === "payment.failed") {
      const payment = event.payload.payment.entity;
      const orderId = payment.order_id;
      
      const snapshot = await getDb().collection('donations')
        .where('razorpay_order_id', '==', orderId)
        .limit(1)
        .get();

      if (!snapshot.empty) {
        try {
          await snapshot.docs[0].ref.update({
            status: 'failed',
            updated_at: new Date(),
          });
          console.log(`Marked donation as 'failed' for Order ID: ${orderId}`);
        } catch (error) {
          console.error("Firestore update error (payment.failed):", error);
        }
      }
    }
    
    // Acknowledge receipt of the webhook
    return NextResponse.json({ received: true }, { status: 200 });

  } catch (error) {
    console.error("Error processing Razorpay webhook:", error);
    return NextResponse.json({ error: "Webhook processing failed." }, { status: 500 });
  }
}