import { UdyamitaHero } from "@/components/programs/udyamita/udyamita-hero"
import type { Metadata } from "next"
export const metadata: Metadata = {
  title: "Udyamita Program",
  description:
    "Entrepreneurship development for women and youth – skills, incubation and market linkage support.",
  openGraph: { images: ["/images/programs/udyamita.jpg"] },
}
import { UdyamitaPrograms } from "@/components/programs/udyamita/udyamita-programs"
import { UdyamitaTraining } from "@/components/programs/udyamita/udyamita-training"
import { UdyamitaSuccess } from "@/components/programs/udyamita/udyamita-success"
import { CallToAction } from "@/components/call-to-action"

export default function UdyamitaPage() {
  return (
    <main>
      <UdyamitaHero />
      <UdyamitaPrograms />
      <UdyamitaTraining />
      <UdyamitaSuccess />
      <CallToAction />
    </main>
  )
}
