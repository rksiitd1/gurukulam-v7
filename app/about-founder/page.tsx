import { AboutHero } from "@/components/about-founder/about-hero"
import type { Metadata } from "next"
export const metadata: Metadata = {
  title: "About the Founder",
  description:
    "Meet our founder, Mukund Agrawal – the journey from IIT Delhi to rural education and nation building.",
  openGraph: { images: ["/og-image.jpg"] },
}
import { Biography } from "@/components/about-founder/biography"
import { Journey } from "@/components/about-founder/journey"
import { ShreyasVerse } from "@/components/about-founder/ShreyasVerse"
import { CallToAction } from "@/components/call-to-action"

export default function AboutFounderPage() {
  return (
    <main>
      <AboutHero />
      <Biography />
      <Journey />
      <ShreyasVerse />
      <CallToAction />
    </main>
  )
}
