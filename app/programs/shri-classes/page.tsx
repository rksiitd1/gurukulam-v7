import { ShriClassesHero } from "@/components/programs/shri-classes/shri-classes-hero"
import type { Metadata } from "next"
export const metadata: Metadata = {
  title: "Shri Classes | DBG Gurukulam",
  description:
    "Class 10 Bihar Board Mathematics, taught concept-first by an IIT Delhi engineer in Raghopur, Supaul — built around a daily DPP practice system.",
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
