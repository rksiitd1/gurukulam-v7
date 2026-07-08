"use client"

import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, Image as ImageIcon, Calendar, ArrowUpRight } from "lucide-react"
import Image from "next/image"

export function FeaturedAlbums() {
  const albums = [
    {
      id: 1,
      title: "World Environment Day",
      hindiTitle: "विश्व पर्यावरण दिवस",
      date: "June 5, 2026",
      description: "Witness our community's green initiatives, tree plantation drives, and environmental awareness activities aimed at nurturing mother nature.",
      image: "/images/gallery/header/planting.png",
      link: "https://photos.app.goo.gl/WaqUzkW3H2rP4e6C8",
      badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
      accentColor: "emerald"
    },
    {
      id: 2,
      title: "International Yoga Day",
      hindiTitle: "अंतरराष्ट्रीय योग दिवस",
      date: "June 21, 2026",
      description: "Explore moments of mindfulness, physical health, and spiritual alignment as our students and teachers practice yoga together.",
      image: "/images/gallery/20.jpg",
      link: "https://photos.app.goo.gl/Boe8C8HPMfeqJnCcA",
      badgeColor: "bg-orange-100 text-orange-800 border-orange-200",
      accentColor: "orange"
    }
  ]

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-4">
            <ImageIcon className="w-4 h-4 mr-2" />
            Special Event Galleries
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Featured
            <span className="text-purple-600 block sm:inline sm:ml-2">Shared Albums</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our complete high-resolution photo collections on Google Photos for these major landmark celebrations.
          </p>
          <p className="text-lg font-devanagari text-purple-700 mt-2 font-medium">विशेष आयोजन गैलरी</p>
        </div>

        {/* Albums Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {albums.map((album) => (
            <a
              key={album.id}
              href={album.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block relative rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            >
              {/* Image Container with Zoom effect */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                <Image
                  src={album.image}
                  alt={album.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                {/* Visual Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-gray-950/30 to-transparent" />
                
                {/* Floating Date Badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center shadow-sm">
                  <Calendar className="w-3.5 h-3.5 text-purple-600 mr-1.5" />
                  <span className="text-xs font-semibold text-gray-800">{album.date}</span>
                </div>

                {/* Floating Google Photos Badge */}
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1.5 rounded-full flex items-center shadow-sm text-xs font-semibold">
                  <span>Google Photos</span>
                  <ArrowUpRight className="w-3 h-3 ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>

                {/* Text Content Overlay on Image */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-1 tracking-tight flex items-center justify-between">
                    <span>{album.title}</span>
                  </h3>
                  <p className="text-sm font-devanagari text-purple-200 font-medium mb-1">{album.hindiTitle}</p>
                </div>
              </div>

              {/* Description & Action Footer */}
              <div className="p-6 bg-white">
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {album.description}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                  <span className="text-xs font-semibold tracking-wider uppercase text-purple-600 group-hover:text-purple-700 flex items-center gap-1">
                    Open Full Album
                    <ExternalLink className="w-3.5 h-3.5" />
                  </span>
                  <span className="inline-flex items-center text-xs font-medium text-gray-500 bg-gray-50 px-2.5 py-1 rounded-md border border-gray-100">
                    View Photos
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
