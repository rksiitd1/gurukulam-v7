"use client"

import { ExternalLink, Image as ImageIcon } from "lucide-react"

export function FeaturedAlbums() {
  return (
    <div className="bg-gradient-to-r from-[#4A0E17] via-[#721C24] to-[#4A0E17] border-y border-[#F3C68F]/25 py-14 shadow-inner relative overflow-hidden">
      {/* Decorative subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#F3C68F_1px,transparent_1px)] [background-size:16px_16px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
        <div className="flex items-center space-x-4 text-center md:text-left flex-col md:flex-row">
          <div className="p-3.5 bg-white/10 text-[#F3C68F] rounded-xl border border-white/10 shadow-lg mb-3 md:mb-0">
            <ImageIcon className="w-6 h-6 animate-pulse" />
          </div>
          <div className="space-y-1">
            <h4 className="font-serif text-lg sm:text-xl text-[#F3C68F] font-bold tracking-wide uppercase">
              2026 Event Photo Albums
            </h4>
            <p className="text-xs sm:text-sm text-gray-200/80 font-devanagari font-light tracking-wider">
              विशेष आयोजन गैलरी — उच्च रिज़ॉल्यूशन गूगल फोटोज एल्बम
            </p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full md:w-auto">
          <a
            href="https://photos.app.goo.gl/WaqUzkW3H2rP4e6C8"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center px-6 py-3 bg-white/5 hover:bg-white text-white hover:text-[#4A0E17] border border-white/20 hover:border-white rounded-full text-sm font-semibold tracking-wide shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 w-full sm:w-auto"
          >
            <span className="mr-1">🌳</span>
            <span>World Environment Day 2026</span>
            <ExternalLink className="w-4 h-4 ml-2.5 opacity-75 group-hover:opacity-100 transition-opacity" />
          </a>
          <a
            href="https://photos.app.goo.gl/Boe8C8HPMfeqJnCcA"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center px-6 py-3 bg-white/5 hover:bg-white text-white hover:text-[#4A0E17] border border-white/20 hover:border-white rounded-full text-sm font-semibold tracking-wide shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 w-full sm:w-auto"
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
