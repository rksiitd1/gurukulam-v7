import { GurukulamHero } from "@/components/programs/gurukulam/gurukulam-hero"
import type { Metadata } from "next"
export const metadata: Metadata = {
  title: "Divya Bihar Global Gurukulam",
  description:
    "K-12 residential Gurukulam in Raghopur, Supaul – NCERT curriculum with Sanskrit, Yoga and Indian values.",
  openGraph: { images: ["/images/programs/gurukulam.jpg"] },
}
import { GurukulamCurriculum } from "@/components/programs/gurukulam/gurukulam-curriculum"
import { GurukulamFacilities } from "@/components/programs/gurukulam/gurukulam-facilities"
import { GurukulamAdmission } from "@/components/programs/gurukulam/gurukulam-admission"
import { GurukulamTestimonials } from "@/components/programs/gurukulam/gurukulam-testimonials"
import { CallToAction } from "@/components/call-to-action"

export default function GurukulamPage() {
  return (
    <main>
      <GurukulamHero />
      <GurukulamCurriculum />
      <GurukulamFacilities />
      <GurukulamAdmission />
      <GurukulamTestimonials />
      <CallToAction />
    </main>
  )
}
