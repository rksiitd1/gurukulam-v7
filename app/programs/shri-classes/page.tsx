import type { Metadata } from "next"
import { ShriClassesHero } from "@/components/programs/shri-classes/shri-classes-hero"
import { ShriClassesFaculty } from "@/components/programs/shri-classes/shri-classes-faculty"
import { ShriClassesSchedule } from "@/components/programs/shri-classes/shri-classes-schedule"
import { ShriClassesCurriculum } from "@/components/programs/shri-classes/shri-classes-curriculum"
import { ShriClassesResults } from "@/components/programs/shri-classes/shri-classes-results"
import { ShriClassesAdmission } from "@/components/programs/shri-classes/shri-classes-admission"
import { sourceSerif, plexMono } from "@/components/programs/shri-classes/shri-classes-fonts"

export const metadata: Metadata = {
  title: "Shri Classes | DBG Gurukulam",
  description:
    "A modern Gurukul in Raghopur, Supaul for Classes IX–XII — Mathematics, Science, English, Hindi, Sanskrit and Social Science, taught concept-first by seven real teachers.",
  openGraph: { images: ["/images/programs/shri-classes.jpg"] },
}

export default function ShriClassesPage() {
  return (
    <main className={`${sourceSerif.variable} ${plexMono.variable}`}>
      <ShriClassesHero />
      <ShriClassesFaculty />
      <ShriClassesSchedule />
      <ShriClassesCurriculum />
      <ShriClassesResults />
      <ShriClassesAdmission />
    </main>
  )
}
