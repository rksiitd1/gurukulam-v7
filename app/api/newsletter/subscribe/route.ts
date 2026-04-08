// app/api/newsletter/subscribe/route.ts
export const dynamic = 'force-dynamic';

import { NextResponse } from "next/server";
import { z } from "zod";
import { getDb } from "@/lib/firebase/admin";

const subscribeSchema = z.object({
  email: z.string().email("A valid email is required."),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsedBody = subscribeSchema.safeParse(body);

    if (!parsedBody.success) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }

    const { email } = parsedBody.data;

    // Check for duplicate email (replaces Postgres unique constraint)
    const existing = await getDb().collection('newsletter_subscriptions')
      .where('email', '==', email)
      .limit(1)
      .get();

    if (!existing.empty) {
      return NextResponse.json({ error: "This email is already subscribed." }, { status: 409 });
    }

    // Insert new subscription
    try {
      await getDb().collection('newsletter_subscriptions').add({
        email,
        subscribed_at: new Date(),
      });
    } catch (firestoreError) {
      console.error("Firestore insert error:", firestoreError);
      return NextResponse.json({ error: "Could not subscribe at this time." }, { status: 500 });
    }

    return NextResponse.json({ message: "Successfully subscribed!" }, { status: 200 });

  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ error: "An internal server error occurred." }, { status: 500 });
  }
}