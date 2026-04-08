// app/api/internship/apply/route.ts
export const dynamic = 'force-dynamic';

import { NextResponse } from "next/server";
import { z } from "zod";
import { getDb } from "@/lib/firebase/admin";

// Schema to validate the incoming application data
const applicationSchema = z.object({
  fullName: z.string().min(1, "Full name is required."),
  email: z.string().email("A valid email is required."),
  college: z.string().optional(),
  gradYear: z.coerce.number().optional(),
  linkedin: z.string().url().optional().or(z.literal('')),
  portfolio: z.string().url().optional().or(z.literal('')),
  role: z.string().min(1, "Role selection is required."),
  problemSolving: z.string().min(1, "This essay is required."),
  whyUs: z.string().min(1, "This essay is required."),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsedBody = applicationSchema.safeParse(body);

    if (!parsedBody.success) {
      console.error("Validation Error:", parsedBody.error.flatten());
      return NextResponse.json(
        { error: "Invalid input.", details: parsedBody.error.flatten() },
        { status: 400 }
      );
    }

    const { fullName, email, college, gradYear, linkedin, portfolio, role, problemSolving, whyUs } = parsedBody.data;

    try {
      await getDb().collection('internship_applications').add({
        full_name: fullName,
        email,
        college: college || null,
        graduation_year: gradYear || null,
        linkedin_profile: linkedin || null,
        portfolio_link: portfolio || null,
        preferred_role: role,
        problem_solving_essay: problemSolving,
        why_us_essay: whyUs,
        applied_at: new Date(),
      });
    } catch (firestoreError) {
      console.error("Firestore insert error:", firestoreError);
      return NextResponse.json({ error: "Could not save application." }, { status: 500 });
    }

    return NextResponse.json({ message: "Application submitted successfully!" }, { status: 200 });

  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ error: "An internal server error occurred." }, { status: 500 });
  }
}