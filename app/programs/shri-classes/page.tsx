import { ShriClassesHero } from "@/components/programs/shri-classes/shri-classes-hero"
import type { Metadata } from "next"
export const metadata: Metadata = {
  title: "Shri Classes",
  description:
    "Coaching for Grades 9–12 with a focus on Science, Mathematics and competitive exams (JEE/NEET).",
  openGraph: { images: ["/images/programs/shri-classes.jpg"] },
}
import { ShriClassesCurriculum } from "@/components/programs/shri-classes/shri-classes-curriculum"
import { ShriClassesResults } from "@/components/programs/shri-classes/shri-classes-results"
import { ShriClassesAdmission } from "@/components/programs/shri-classes/shri-classes-admission"
import { CallToAction } from "@/components/call-to-action"

export default function ShriClassesPage() {
  return (
    <main>
      <ShriClassesHero />
      <ShriClassesCurriculum />
      <ShriClassesResults />
      <ShriClassesAdmission />
      <CallToAction />
    </main>
  )
}
