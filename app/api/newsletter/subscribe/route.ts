// app/api/newsletter/subscribe/route.ts
import { NextResponse } from "next/server";
import { z } from "zod";
import { supabaseAdmin } from "@/lib/supabase/server";

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

    const { error } = await supabaseAdmin
      .from('newsletter_subscriptions')
      .insert({ email: email });

    if (error) {
      // This specifically handles the case where the email is already in the database
      if (error.code === '23505') { // Unique constraint violation
        return NextResponse.json({ error: "This email is already subscribed." }, { status: 409 });
      }
      console.error("Supabase insert error:", error);
      return NextResponse.json({ error: "Could not subscribe at this time." }, { status: 500 });
    }

    return NextResponse.json({ message: "Successfully subscribed!" }, { status: 200 });

  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ error: "An internal server error occurred." }, { status: 500 });
  }
}