// app/api/internship/apply/route.ts
import { NextResponse } from "next/server";
import { z } from "zod";
import { supabaseAdmin } from "@/lib/supabase/server";

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

    const { error } = await supabaseAdmin
      .from('internship_applications')
      .insert({
        full_name: fullName,
        email: email,
        college: college,
        graduation_year: gradYear,
        linkedin_profile: linkedin,
        portfolio_link: portfolio,
        preferred_role: role,
        problem_solving_essay: problemSolving,
        why_us_essay: whyUs,
      });

    if (error) {
      console.error("Supabase insert error:", error);
      return NextResponse.json({ error: "Could not save application." }, { status: 500 });
    }

    return NextResponse.json({ message: "Application submitted successfully!" }, { status: 200 });

  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ error: "An internal server error occurred." }, { status: 500 });
  }
}