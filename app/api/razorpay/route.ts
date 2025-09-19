// app/api/razorpay/route.ts
import { NextResponse } from "next/server";
import Razorpay from "razorpay";
import { z } from "zod";
import { supabaseAdmin } from "@/lib/supabase/server"; // Using the secure admin client

const razorpay = new Razorpay({
  key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
});

// This schema now validates all the fields from your form
const orderSchema = z.object({
  amount: z.number().positive("Amount must be a positive number."),
  name: z.string().min(1, "Name is required."),
  email: z.string().email("Invalid email address."),
  phone: z.string().optional(),
  pan: z.string().optional(),
  address: z.string().optional(),
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

    const { amount, name, email, phone, pan, address } = parsedBody.data;

    // 1. Create the Razorpay order first
    const options = {
      amount: amount * 100, // Amount in paise
      currency: "INR",
      receipt: `receipt_order_${new Date().getTime()}`,
    };
    const order = await razorpay.orders.create(options);

    if (!order) {
      return NextResponse.json({ error: "Failed to create Razorpay order." }, { status: 500 });
    }

    // 2. Insert a new 'pending' record into the Supabase 'donations' table
    const { error: supabaseError } = await supabaseAdmin
      .from('donations')
      .insert({
        name: name,
        email: email,
        phone: phone,
        pan_number: pan,
        address: address,
        amount: amount,
        razorpay_order_id: order.id, // Link our record to the Razorpay order
        status: 'pending'
      });

    if (supabaseError) {
      console.error("Supabase insert error:", supabaseError);
      // If the database insert fails, we should not proceed with payment.
      return NextResponse.json({ error: "Failed to save donation record before payment." }, { status: 500 });
    }

    // 3. Send the order details to the frontend to open the payment modal
    return NextResponse.json(order, { status: 200 });

  } catch (error) {
    console.error("API Error in /api/razorpay:", error);
    return NextResponse.json({ error: "An internal server error occurred." }, { status: 500 });
  }
}