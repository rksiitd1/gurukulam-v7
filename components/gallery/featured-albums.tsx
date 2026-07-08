"use client"

import { ExternalLink, Image as ImageIcon } from "lucide-react"

export function FeaturedAlbums() {
  return (
    <div className="bg-gradient-to-r from-purple-50 via-indigo-50 to-blue-50 border-y border-indigo-100/50 py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center space-x-3 text-center md:text-left">
          <div className="p-2 bg-indigo-100 text-indigo-700 rounded-lg hidden sm:block">
            <ImageIcon className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 text-sm sm:text-base">2026 Event Photo Albums</h4>
            <p className="text-xs text-gray-500 font-devanagari">विशेष आयोजन गैलरी (गूगल फोटोज)</p>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href="https://photos.app.goo.gl/WaqUzkW3H2rP4e6C8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-white hover:bg-emerald-50 border border-emerald-200 text-emerald-800 hover:text-emerald-950 rounded-full text-xs sm:text-sm font-medium shadow-sm transition-all hover:shadow hover:-translate-y-0.5"
          >
            <span>🌳 World Environment Day 2026</span>
            <ExternalLink className="w-3.5 h-3.5 ml-2 opacity-80" />
          </a>
          <a
            href="https://photos.app.goo.gl/Boe8C8HPMfeqJnCcA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-white hover:bg-orange-50 border border-orange-200 text-orange-800 hover:text-orange-950 rounded-full text-xs sm:text-sm font-medium shadow-sm transition-all hover:shadow hover:-translate-y-0.5"
          >
            <span>🧘 International Yoga Day 2026</span>
            <ExternalLink className="w-3.5 h-3.5 ml-2 opacity-80" />
          </a>
        </div>
      </div>
    </div>
  )
}
