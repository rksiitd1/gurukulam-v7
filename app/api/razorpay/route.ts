// app/api/razorpay/route.ts
export const dynamic = 'force-dynamic';

import { NextResponse } from "next/server";
import Razorpay from "razorpay";
import { z } from "zod";
import { getDb } from "@/lib/firebase/admin";

let razorpay: any;
function getRazorpay() {
  if (!razorpay) {
    razorpay = new Razorpay({
      key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
      key_secret: process.env.RAZORPAY_KEY_SECRET!,
    });
  }
  return razorpay;
}

const orderSchema = z.object({
  amount: z.number().positive("Amount must be a positive number."),
  name: z.string().min(1, "Name is required."),
  email: z.string().email("Invalid email address."),
  phone: z.string().optional(),
  pan: z.string().optional(),
  address: z.string().optional(),
  message: z.string().optional(),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsedBody = orderSchema.safeParse(body);

    if (!parsedBody.success) {
      return NextResponse.json(
        { error: "Invalid input.", details: parsedBody.error.flatten() },
        { status: 400 }
      );
    }

    const { amount, name, email, phone, pan, address, message } = parsedBody.data;

    const options = {
      amount: amount * 100,
      currency: "INR",
      receipt: `receipt_order_${new Date().getTime()}`,
    };
    const order = await getRazorpay().orders.create(options);

    if (!order) {
      return NextResponse.json({ error: "Failed to create Razorpay order." }, { status: 500 });
    }

    // Save donation record to Firestore with 'pending' status
    try {
      await getDb().collection('donations').add({
        name,
        email,
        phone: phone || null,
        pan_number: pan || null,
        address: address || null,
        amount,
        message: message || null,
        razorpay_order_id: order.id,
        status: 'pending',
        created_at: new Date(),
      });
    } catch (firestoreError) {
      console.error("Firestore insert error:", firestoreError);
      return NextResponse.json({ error: "Failed to save donation record before payment." }, { status: 500 });
    }

    return NextResponse.json(order, { status: 200 });

  } catch (error) {
    console.error("API Error in /api/razorpay:", error);
    return NextResponse.json({ error: "An internal server error occurred." }, { status: 500 });
  }
}