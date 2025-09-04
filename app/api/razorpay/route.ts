import { NextResponse } from "next/server";
import Razorpay from "razorpay";
import { z } from "zod";

// Initialize Razorpay with your keys
const razorpay = new Razorpay({
  key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
});

// Define a schema to validate the request
const orderSchema = z.object({
  amount: z.number().positive("Amount must be a positive number."),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsedBody = orderSchema.safeParse(body);

    if (!parsedBody.success) {
      return NextResponse.json(
        { error: "Invalid amount.", details: parsedBody.error.flatten() },
        { status: 400 }
      );
    }

    const { amount } = parsedBody.data;

    // Razorpay expects the amount in the smallest currency unit (e.g., paise for INR)
    const options = {
      amount: amount * 100,
      currency: "INR",
      receipt: `receipt_order_${new Date().getTime()}`,
    };

    const order = await razorpay.orders.create(options);

    if (!order) {
      return NextResponse.json(
        { error: "Failed to create order." },
        { status: 500 }
      );
    }

    // Send the order details back to the frontend
    return NextResponse.json(order, { status: 200 });
  } catch (error) {
    console.error("Razorpay API Error:", error);
    return NextResponse.json(
      { error: "An internal server error occurred." },
      { status: 500 }
    );
  }
}