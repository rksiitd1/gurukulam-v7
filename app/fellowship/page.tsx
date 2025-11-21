// app/fellowship/page.tsx
import type { Metadata } from "next"
import { FellowshipHero } from "@/components/fellowship/fellowship-hero"
import { ThePhilosophy } from "@/components/fellowship/the-philosophy"
import { EligibilityOfferings } from "@/components/fellowship/eligibility-offerings"
import { HowToApply } from "@/components/fellowship/how-to-apply"
import { CallToAction } from "@/components/call-to-action"

export const metadata: Metadata = {
    title: "Divya Bihar Mission Fellowship | Serve from the Soil",
    description: "A fellowship for those who wish to serve Bharat beyond the system. Join us to create real ground-level impact in rural Bihar.",
    openGraph: {
        title: "Divya Bihar Mission Fellowship",
        description: "Serve Beyond the System. Serve from the Soil. A call to nation builders.",
        images: ["/og-image.jpg"],
    },
}

export default function FellowshipPage() {
    return (
        <main className="min-h-screen">
            <FellowshipHero />
            <ThePhilosophy />
            <EligibilityOfferings />
            <HowToApply />
            <CallToAction />
        </main>
    )
}