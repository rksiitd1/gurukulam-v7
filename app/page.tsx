import Hero from "@/components/hero"
import type { Metadata } from "next"
export const metadata: Metadata = {
  title: "Home",
  description:
    "Empowering Bihar through education with yogic values, sustainable farming, and cultural values.",
  openGraph: { images: ["/og-image.jpg"] },
}
import { About } from "@/components/about"
import { Programs } from "@/components/programs"
import { CallToAction } from "@/components/call-to-action"
import { WhyWeExistSection } from "@/components/why-we-exist-section"
import { GetInvolvedSection } from "@/components/get-involved-section"
import UpanishadVerse from "@/components/UpanishadVerse"
import { HomepageTestimonials } from "@/components/homepage-testimonials"

export default function HomePage() {
  return (
    <main>
      <Hero />
      <WhyWeExistSection />
      <About />
      <Programs />
      <HomepageTestimonials />
      <GetInvolvedSection />
      <UpanishadVerse />
      <CallToAction />
    </main>
  )
}
