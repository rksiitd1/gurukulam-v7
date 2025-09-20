// app/api/razorpay/route.ts
import { NextResponse } from "next/server";
import Razorpay from "razorpay";
import { z } from "zod";
import { supabaseAdmin } from "@/lib/supabase/server";

const razorpay = new Razorpay({
  key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
});

// 1. ADD 'message' TO THE SCHEMA
const orderSchema = z.object({
  amount: z.number().positive("Amount must be a positive number."),
  name: z.string().min(1, "Name is required."),
  email: z.string().email("Invalid email address."),
  phone: z.string().optional(),
  pan: z.string().optional(),
  address: z.string().optional(),
  message: z.string().optional(), // <-- ADDED THIS LINE
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

    // 2. GET 'message' FROM THE PARSED BODY
    const { amount, name, email, phone, pan, address, message } = parsedBody.data; // <-- ADDED 'message' HERE

    const options = {
      amount: amount * 100,
      currency: "INR",
      receipt: `receipt_order_${new Date().getTime()}`,
    };
    const order = await razorpay.orders.create(options);

    if (!order) {
      return NextResponse.json({ error: "Failed to create Razorpay order." }, { status: 500 });
    }

    // 3. INSERT 'message' INTO THE SUPABASE RECORD
    const { error: supabaseError } = await supabaseAdmin
      .from('donations')
      .insert({
        name: name,
        email: email,
        phone: phone,
        pan_number: pan,
        address: address,
        amount: amount,
        razorpay_order_id: order.id,
        status: 'pending',
        message: message // <-- ADDED THIS LINE
      });

    if (supabaseError) {
      console.error("Supabase insert error:", supabaseError);
      return NextResponse.json({ error: "Failed to save donation record before payment." }, { status: 500 });
    }

    return NextResponse.json(order, { status: 200 });

  } catch (error) {
    console.error("API Error in /api/razorpay:", error);
    return NextResponse.json({ error: "An internal server error occurred." }, { status: 500 });
  }
}