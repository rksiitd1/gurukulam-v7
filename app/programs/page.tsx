import { ProgramsOverview } from "@/components/programs/programs-overview"
import type { Metadata } from "next"
export const metadata: Metadata = {
  title: "Programs",
  description: "Explore our four pillars: Gurukulam, Shri Classes, Agriculture & Gaushala, and Udyamita.",
  openGraph: { images: ["/og-image.jpg"] },
}
import { ProgramsGrid } from "@/components/programs/programs-grid"
import { FutureInitiatives } from "@/components/programs/future-initiatives"
import { CallToAction } from "@/components/call-to-action"
import { CommunityEngagementSection } from "@/components/programs/community-engagement-section"
import KathaUpanishadVerse from "@/components/programs/KathaUpanishadVerse"

export default function ProgramsPage() {
  return (
    <main>
      <ProgramsOverview />
      <ProgramsGrid />
      <FutureInitiatives />
      <CommunityEngagementSection />
      <KathaUpanishadVerse />
      <CallToAction />
    </main>
  )
}
