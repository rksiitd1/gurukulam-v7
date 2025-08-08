import { ContactHero } from "@/components/contact/contact-hero"
import type { Metadata } from "next"
export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Divya Bihar Mission – address, phone, email and visiting information.",
  openGraph: { images: ["/og-image.jpg"] },
}
import { ContactForm } from "@/components/contact/contact-form"
import { LocationMap } from "@/components/contact/location-map"
import { VisitingInfo } from "@/components/contact/visiting-info"
import { FAQ } from "@/components/contact/faq"
import { CallToAction } from "@/components/call-to-action"

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <ContactForm />
      <LocationMap />
      <VisitingInfo />
      <FAQ />
      <CallToAction />
    </main>
  )
}
