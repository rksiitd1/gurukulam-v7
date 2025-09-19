// app/api/webhooks/razorpay/route.ts
import { NextResponse } from "next/server";
import crypto from "crypto";
import { supabaseAdmin } from "@/lib/supabase/server"; // Using the secure admin client

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

    // 2. Handle the 'payment.captured' event (this means a successful payment)
    if (event.event === "payment.captured") {
      const payment = event.payload.payment.entity;
      const orderId = payment.order_id;
      const paymentId = payment.id;

      // Update the donation status from 'pending' to 'successful' in Supabase
      const { data, error } = await supabaseAdmin
        .from('donations')
        .update({
          status: 'successful',
          razorpay_payment_id: paymentId // Store the final payment ID for reference
        })
        .eq('razorpay_order_id', orderId) // Find the correct record using the order ID
        .select();

      if (error) {
        console.error("Supabase update error (payment.captured):", error);
        // Return a 500 error so Razorpay might try sending the webhook again
        return NextResponse.json({ error: "Failed to update donation status in database." }, { status: 500 });
      }
      console.log("Successfully updated donation record to 'successful':", data);
    }
    // 3. Handle the 'payment.failed' event
    else if (event.event === "payment.failed") {
        const payment = event.payload.payment.entity;
        const orderId = payment.order_id;
        
        const { error } = await supabaseAdmin
            .from('donations')
            .update({ status: 'failed' })
            .eq('razorpay_order_id', orderId);

        if (error) {
            console.error("Supabase update error (payment.failed):", error);
        } else {
            console.log(`Marked donation as 'failed' for Order ID: ${orderId}`);
        }
    }
    
    // Acknowledge receipt of the webhook
    return NextResponse.json({ received: true }, { status: 200 });

  } catch (error) {
    console.error("Error processing Razorpay webhook:", error);
    return NextResponse.json({ error: "Webhook processing failed." }, { status: 500 });
  }
}