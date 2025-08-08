import { AgricultureHero } from "@/components/programs/agriculture/agriculture-hero"
import type { Metadata } from "next"
export const metadata: Metadata = {
  title: "Agriculture & Gaushala",
  description:
    "Organic farming, agroforestry and Gaushala-based sustainable livelihoods – training and demonstration.",
  openGraph: { images: ["/images/programs/agro-gaushala.jpg"] },
}
import { AgriculturePrograms } from "@/components/programs/agriculture/agriculture-programs"
import { AgricultureTraining } from "@/components/programs/agriculture/agriculture-training"
import { AgricultureResults } from "@/components/programs/agriculture/agriculture-results"
import { CallToAction } from "@/components/call-to-action"

export default function AgriculturePage() {
  return (
    <main>
      <AgricultureHero />
      <AgriculturePrograms />
      <AgricultureTraining />
      <AgricultureResults />
      <CallToAction />
    </main>
  )
}
