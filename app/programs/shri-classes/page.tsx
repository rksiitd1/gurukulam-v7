import { ShriClassesHero } from "@/components/programs/shri-classes/shri-classes-hero"
import type { Metadata } from "next"
export const metadata: Metadata = {
  title: "Shri Classes | DBG Gurukulam",
  description:
    "A modern Gurukul in Raghopur, Supaul for Classes IX–XII — Mathematics, Science and English taught concept-first, anchored by our Class 10 Bihar Board Mathematics DPP program.",
  openGraph: { images: ["/images/programs/shri-classes.jpg"] },
}
import { ShriClassesFaculty } from "@/components/programs/shri-classes/shri-classes-faculty"
import { ShriClassesCurriculum } from "@/components/programs/shri-classes/shri-classes-curriculum"
import { ShriClassesResults } from "@/components/programs/shri-classes/shri-classes-results"
import { ShriClassesAdmission } from "@/components/programs/shri-classes/shri-classes-admission"

export default function ShriClassesPage() {
  return (
    <main>
      <ShriClassesHero />
      <ShriClassesFaculty />
      <ShriClassesCurriculum />
      <ShriClassesResults />
      <ShriClassesAdmission />
    </main>
  )
}
