import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sparkles, ArrowLeft, BookOpen, Heart, Compass } from "lucide-react"

export const metadata: Metadata = {
  title: "Stories - Coming Soon",
  description: "Inspiring stories, educational insights, and community updates from Divya Bihar Mission are coming soon.",
  openGraph: { images: ["/og-image.jpg"] },
}

export default function StoriesPage() {
  return (
    <main className="min-h-[80vh] flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-orange-50/50 via-white to-orange-100/30 px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
      {/* Subtle Decorative Background Elements */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-orange-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-amber-200/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-2xl mx-auto text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center space-x-2 bg-orange-100/80 border border-orange-200/80 text-orange-800 px-4 py-1.5 rounded-full text-sm font-medium mb-8 backdrop-blur-sm shadow-sm">
          <Sparkles className="w-4 h-4 text-orange-600 animate-pulse" />
          <span>Real Stories in the Making</span>
        </div>

        {/* Hero Icon */}
        <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-amber-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg shadow-orange-500/25 transform hover:scale-105 transition-transform duration-300">
          <BookOpen className="w-10 h-10 text-white" />
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
          Stories of Impact <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-amber-600">
            Coming Soon...
          </span>
        </h1>

        {/* Description */}
        <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8 max-w-xl mx-auto">
          We are currently gathering authentic ground-level journeys, student growth stories, and rural transformation updates directly from Bihar villages.
        </p>

        {/* Key Highlight Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 text-left">
          <div className="p-4 rounded-xl bg-white/70 border border-orange-100 shadow-sm backdrop-blur-sm">
            <div className="flex items-center space-x-3 mb-1">
              <Heart className="w-5 h-5 text-orange-600" />
              <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Real Voices</h3>
            </div>
            <p className="text-xs sm:text-sm text-gray-600">
              Unfiltered reflections and experiences from our students, farmers, and volunteers.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white/70 border border-orange-100 shadow-sm backdrop-blur-sm">
            <div className="flex items-center space-x-3 mb-1">
              <Compass className="w-5 h-5 text-orange-600" />
              <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Ground Reality</h3>
            </div>
            <p className="text-xs sm:text-sm text-gray-600">
              Transparent updates on the impact of our educational and agricultural initiatives.
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            asChild
            className="w-full sm:w-auto bg-orange-600 hover:bg-orange-700 text-white font-medium px-6 py-3 rounded-lg shadow-md shadow-orange-600/20 transition-all"
          >
            <Link href="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="w-full sm:w-auto border-orange-200 text-orange-700 hover:bg-orange-50 font-medium px-6 py-3 rounded-lg transition-all"
          >
            <Link href="/programs">
              Explore Our Programs
            </Link>
          </Button>
        </div>
      </div>
    </main>
  )
}
