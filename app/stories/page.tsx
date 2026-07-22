import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Sparkles,
  ArrowLeft,
  BookOpen,
  Sprout,
  Users,
  Feather,
  BookMarked
} from "lucide-react"
import { Newsletter } from "@/components/blog/newsletter"

export const metadata: Metadata = {
  title: "Stories of Impact - Coming Soon",
  description: "Inspiring stories, educational insights, and community updates from Divya Bihar Mission are coming soon.",
  openGraph: { images: ["/og-image.jpg"] },
}

export default function StoriesPage() {
  const storyPreviews = [
    {
      title: "Echoes from the Gurukulam",
      titleHindi: "गुरुकुलम की गूँज",
      description: "Follow the journey of our students as they blend modern scientific inquiry with ancient Vedic wisdom, transforming their lives and communities.",
      icon: <BookOpen className="w-8 h-8 text-blue-600" />,
      color: "blue"
    },
    {
      title: "Harvest of Hope",
      titleHindi: "उम्मीद की फसल",
      description: "Unfiltered realities from the fields of Bihar. Read how local farmers are returning to their roots through organic farming and sustainable agriculture.",
      icon: <Sprout className="w-8 h-8 text-green-600" />,
      color: "green"
    },
    {
      title: "The Udyamita Tales",
      titleHindi: "उद्यमिता की कहानियाँ",
      description: "Chronicles of resilience and courage. Discover how rural women and youth are breaking barriers to build micro-enterprises and become job creators.",
      icon: <Users className="w-8 h-8 text-orange-600" />,
      color: "orange"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, string> = {
      blue: "bg-blue-50 border-blue-200 group-hover:border-blue-400 group-hover:shadow-blue-100",
      green: "bg-green-50 border-green-200 group-hover:border-green-400 group-hover:shadow-green-100",
      orange: "bg-orange-50 border-orange-200 group-hover:border-orange-400 group-hover:shadow-orange-100",
    };
    return colors[color] || colors.blue;
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 lg:pt-28 lg:pb-24 overflow-hidden border-b border-orange-100">
        {/* Artistic Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-orange-50/80 via-white to-white z-0" />
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 pointer-events-none select-none opacity-[0.03] z-0">
          <span className="text-[30rem] font-bold leading-none text-orange-900 font-devanagari">
            कथा
          </span>
        </div>

        {/* Floating background blobs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-200/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-20 w-96 h-96 bg-red-200/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white border border-orange-200 text-orange-800 px-5 py-2 rounded-full text-sm font-semibold mb-8 shadow-sm">
            <Feather className="w-4 h-4 text-orange-600" />
            <span className="tracking-widest uppercase text-xs">In the Making</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6 font-serif">
            The Unwritten Chapters of <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
              Rural Bihar
            </span>
          </h1>

          {/* Cultural Quote Block */}
          <div className="max-w-2xl mx-auto mb-8 bg-gradient-to-r from-orange-50 to-red-50 border-l-4 border-orange-500 p-6 rounded-r-2xl shadow-sm text-left">
            <p className="text-xl sm:text-2xl font-devanagari text-orange-900 mb-2 font-medium">
              "जो मिट्टी से जुड़े हैं, उनकी कहानियाँ आसमान छूती हैं।"
            </p>
            <p className="text-sm sm:text-base text-orange-700 italic">
              "Those connected to the soil, their stories touch the sky."
            </p>
          </div>

          {/* Description */}
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-10 max-w-2xl mx-auto">
            We are quietly documenting authentic, ground-level journeys of transformation. Real voices from our Gurukulam, our farms, and our villages are preparing to be heard.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-semibold px-8 shadow-lg shadow-orange-600/20 transition-all hover:-translate-y-0.5"
            >
              <Link href="/blog">
                <BookMarked className="w-5 h-5 mr-2" />
                Read Our Blog Meanwhile
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-orange-200 text-orange-700 hover:bg-orange-50 font-semibold px-8 transition-all hover:-translate-y-0.5"
            >
              <Link href="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Sneak Peek Section */}
      <section className="py-20 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">A Glimpse of What's Coming</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Behind the scenes, we are curating stories that capture the true essence of 'Seva' and 'Sanskars'.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {storyPreviews.map((preview, idx) => (
              <Card
                key={idx}
                className={`group border-2 transition-all duration-300 hover:-translate-y-2 overflow-hidden ${getColorClasses(preview.color)}`}
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    {preview.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{preview.title}</h3>
                  <p className="text-lg font-devanagari text-gray-500 mb-4">{preview.titleHindi}</p>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {preview.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Integration */}
      <Newsletter />

    </main>
  )
}