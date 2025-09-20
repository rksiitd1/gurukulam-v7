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

    const successUrl = new URL('/payment-success', req.url);
    const failureUrl = new URL('/payment-failure', req.url);

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      // Use 303 redirect
      return NextResponse.redirect(failureUrl, { status: 303 });
    }

    const body = razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSignature = crypto
      .createHmac('sha256', secret)
      .update(body.toString())
      .digest('hex');

    const isAuthentic = expectedSignature === razorpay_signature;

    if (isAuthentic) {
      // Payment is authentic.
      // Use a 303 redirect to ensure the browser makes a GET request to the success page.
      return NextResponse.redirect(successUrl, { status: 303 });
    } else {
      // Payment verification failed.
      // Use 303 redirect
      return NextResponse.redirect(failureUrl, { status: 303 });
    }
  } catch (error) {
    console.error('Payment verification error:', error);
    const failureUrl = new URL('/payment-failure', req.url);
    // Use 303 redirect
    return NextResponse.redirect(failureUrl, { status: 303 });
  }
}