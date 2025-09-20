// app/api/payment-verification/route.ts
import { NextResponse } from 'next/server';
import crypto from 'crypto';

export async function POST(req: Request) {
  const secret = process.env.RAZORPAY_KEY_SECRET!;

  try {
    const formData = await req.formData();
    const razorpay_order_id = formData.get('razorpay_order_id') as string;
    const razorpay_payment_id = formData.get('razorpay_payment_id') as string;
    const razorpay_signature = formData.get('razorpay_signature') as string;

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return NextResponse.redirect(new URL('/payment-failure', req.url));
    }

    const body = razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSignature = crypto
      .createHmac('sha256', secret)
      .update(body.toString())
      .digest('hex');

    const isAuthentic = expectedSignature === razorpay_signature;

    if (isAuthentic) {
      // Payment is authentic, redirect to the success page.
      // We don't need to update Supabase here because the webhook will handle that reliably.
      return NextResponse.redirect(new URL('/payment-success', req.url));
    } else {
      // Payment verification failed, redirect to a failure page.
      return NextResponse.redirect(new URL('/payment-failure', req.url));
    }
  } catch (error) {
    console.error('Payment verification error:', error);
    return NextResponse.redirect(new URL('/payment-failure', req.url));
  }
}