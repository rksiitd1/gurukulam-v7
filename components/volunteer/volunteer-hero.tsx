import { Button } from "@/components/ui/button"
import { Heart, Users, ArrowDown } from "lucide-react"
import Link from "next/link"

export function VolunteerHero() {
  return (
    <section className="relative bg-gradient-to-br from-green-50 via-orange-50 to-yellow-50 py-20 overflow-hidden">
      <div className="absolute inset-0 opacity-10 z-0">
        <div className="absolute top-10 left-10 w-24 h-24 text-green-300 animate-pulse">
            <Heart className="w-full h-full" />
        </div>
        <div className="absolute bottom-10 right-10 w-32 h-32 text-orange-300 animate-bounce">
            <Users className="w-full h-full" />
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-yellow-100 text-orange-800 rounded-full text-sm font-medium mb-4 shadow-sm">
                <Heart className="w-4 h-4 mr-2 text-orange-600" />
                Join Our Seva Yajna
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Be the Hands that
                <span className="text-green-600 block">Serve and Uplift</span>
            </h1>
            <p className="mt-4 text-3xl lg:text-5xl font-devanagari text-orange-700">
                सेवा परमो धर्मः
            </p>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-600 leading-relaxed">
                Your time, skills, and compassion can create ripples of change in rural Bihar. Become a part of a movement that is rebuilding communities through education, sustainability, and cultural pride.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="#opportunities">
                    <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white w-full sm:w-auto">
                        <ArrowDown className="w-5 h-5 mr-2" />
                        View Opportunities
                    </Button>
                </Link>
                <Link href="#apply">
                    <Button size="lg" variant="outline" className="border-orange-600 text-orange-700 hover:bg-orange-50 w-full sm:w-auto">
                        <Users className="w-5 h-5 mr-2" />
                        Apply Now
                    </Button>
                </Link>
            </div>
        </div>
      </div>
    </section>
  )
}