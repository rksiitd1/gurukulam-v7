import { DonateHero } from "@/components/donate/donate-hero"
import type { Metadata } from "next"
export const metadata: Metadata = {
  title: "Donate",
  description: "Support Divya Bihar Mission. 12A & 80G registered – your contribution transforms lives.",
  openGraph: { images: ["/og-image.jpg"] },
}
// import { DonationOptions } from "@/components/donate/donation-options"
// import { ImpactStories } from "@/components/donate/impact-stories"
import { DonationForm } from "@/components/donate/donation-form"
import { TaxBenefits } from "@/components/donate/tax-benefits"
// import { TransparencyReport } from "@/components/donate/transparency-report"
// import { DonorTestimonials } from "@/components/donate/donor-testimonials"
import { CallToAction } from "@/components/call-to-action"

export default function DonatePage() {
  return (
    <div className="min-h-screen">
      <DonateHero />
      {/* <DonationOptions /> */}
      {/* <ImpactStories /> */}
      <DonationForm />
      <TaxBenefits />
      {/* <TransparencyReport /> */}
      {/* <DonorTestimonials /> */}
      <CallToAction />
    </div>
  )
}
