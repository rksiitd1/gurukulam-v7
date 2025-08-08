import { GalleryHero } from "@/components/gallery/gallery-hero"
import type { Metadata } from "next"
export const metadata: Metadata = {
  title: "Gallery",
  description: "Photos and videos from our Gurukulam, classes, and community programs.",
  openGraph: { images: ["/og-image.jpg"] },
}
import { PhotoGallery } from "@/components/gallery/photo-gallery"
import { VideoGallery } from "@/components/gallery/video-gallery"
import { EventHighlights } from "@/components/gallery/event-highlights"
import { StudentShowcase } from "@/components/gallery/student-showcase"
import { CallToAction } from "@/components/call-to-action"

export default function GalleryPage() {
  return (
    <main>
      <GalleryHero />
      <PhotoGallery />
      <VideoGallery />
      <CallToAction />
    </main>
  )
}
