import { NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(req: Request) {
  const secret = process.env.RAZORPAY_WEBHOOK_SECRET!;

  try {
    const requestBody = await req.text();
    const signature = req.headers.get("x-razorpay-signature")!;

    // 1. Create a signature using your secret
    const shasum = crypto.createHmac("sha256", secret);
    shasum.update(requestBody);
    const digest = shasum.digest("hex");

    // 2. Compare your generated signature with the one from Razorpay
    if (digest !== signature) {
      console.warn("Invalid Razorpay webhook signature.");
      return NextResponse.json({ error: "Invalid signature" }, { status: 403 });
    }

    console.log("Razorpay webhook signature verified successfully.");
    const event = JSON.parse(requestBody);

    // 3. Process the event if the signature is valid
    if (event.event === "payment.captured") {
      const payment = event.payload.payment.entity;
      console.log("Payment was successfully captured:", payment.id);
      
      // IMPORTANT: Add your business logic here
      // e.g., update your database, send a confirmation email, etc.
      // This is where you confirm the donation is complete and legitimate.
    }

    return NextResponse.json({ received: true }, { status: 200 });

  } catch (error) {
    console.error("Error processing Razorpay webhook:", error);
    return NextResponse.json(
      { error: "Webhook processing failed." },
      { status: 500 }
    );
  }
}