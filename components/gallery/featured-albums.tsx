"use client"

import { ExternalLink, Image as ImageIcon } from "lucide-react"

export function FeaturedAlbums() {
  return (
    <div className="bg-gradient-to-r from-rose-50/60 via-[#FFF5F6] to-rose-50/60 border-y border-rose-100 py-14 relative overflow-hidden">
      {/* Subtle artistic light background pattern */}
      <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#721C24_1px,transparent_1px)] [background-size:16px_16px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
        <div className="flex items-center space-x-4 text-center md:text-left flex-col md:flex-row">
          <div className="p-3.5 bg-[#721C24]/10 text-[#721C24] rounded-xl border border-[#721C24]/10 shadow-sm mb-3 md:mb-0">
            <ImageIcon className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <h4 className="font-serif text-lg sm:text-xl text-[#4A0E17] font-bold tracking-wide uppercase">
              2026 Event Photo Albums
            </h4>
            <p className="text-xs sm:text-sm text-[#721C24]/80 font-devanagari font-medium tracking-wider">
              विशेष आयोजन गैलरी — उच्च रिज़ॉल्यूशन गूगल फोटोज एल्बम
            </p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full md:w-auto">
          <a
            href="https://photos.app.goo.gl/WaqUzkW3H2rP4e6C8"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center px-6 py-3 bg-white hover:bg-[#721C24] text-[#721C24] hover:text-white border border-rose-200/80 hover:border-[#721C24] rounded-full text-sm font-semibold tracking-wide shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 w-full sm:w-auto"
          >
            <span className="mr-1">🌳</span>
            <span>World Environment Day 2026</span>
            <ExternalLink className="w-4 h-4 ml-2.5 opacity-75 group-hover:opacity-100 transition-opacity" />
          </a>
          <a
            href="https://photos.app.goo.gl/Boe8C8HPMfeqJnCcA"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center px-6 py-3 bg-white hover:bg-[#721C24] text-[#721C24] hover:text-white border border-rose-200/80 hover:border-[#721C24] rounded-full text-sm font-semibold tracking-wide shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 w-full sm:w-auto"
          >
            <span className="mr-1">🧘</span>
            <span>International Yoga Day 2026</span>
            <ExternalLink className="w-4 h-4 ml-2.5 opacity-75 group-hover:opacity-100 transition-opacity" />
          </a>
        </div>
      </div>
    </div>
  )
}
