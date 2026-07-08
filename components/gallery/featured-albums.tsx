"use client"

import { ExternalLink, Image as ImageIcon } from "lucide-react"

export function FeaturedAlbums() {
  return (
    <div className="bg-gradient-to-r from-rose-50/60 via-[#FFF5F6] to-rose-50/60 border-y border-rose-100 py-8 md:py-12 relative overflow-hidden">
      {/* Subtle artistic light background pattern */}
      <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#721C24_1px,transparent_1px)] [background-size:16px_16px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-8 relative z-10">
        {/* Title and Icon Area */}
        <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-3.5">
          <div className="p-3 bg-[#721C24]/10 text-[#721C24] rounded-xl border border-[#721C24]/15 shadow-sm shrink-0">
            <ImageIcon className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <div>
            <h4 className="text-base sm:text-lg text-[#4A0E17] font-semibold tracking-tight">
              Featured 2026 Shared Albums
            </h4>
            <p className="text-xs sm:text-sm text-[#721C24]/80 font-devanagari font-medium mt-0.5">
              गूगल फोटोज पर विशेष 2026 एल्बम
            </p>
          </div>
        </div>
        
        {/* Mobile-optimized Button Links */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full lg:w-auto">
          <a
            href="https://photos.app.goo.gl/WaqUzkW3H2rP4e6C8"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center px-5 py-3 bg-white hover:bg-[#721C24] text-[#721C24] hover:text-white border border-rose-200/80 hover:border-[#721C24] rounded-full text-xs sm:text-sm font-semibold tracking-wide shadow-sm hover:shadow transition-all duration-300 hover:-translate-y-0.5 w-full sm:w-auto"
          >
            <span className="mr-1.5 text-sm sm:text-base">🌳</span>
            <span>World Environment Day 2026</span>
            <ExternalLink className="w-3.5 h-3.5 ml-2.5 opacity-75 group-hover:opacity-100 transition-opacity" />
          </a>
          <a
            href="https://photos.app.goo.gl/Boe8C8HPMfeqJnCcA"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center px-5 py-3 bg-white hover:bg-[#721C24] text-[#721C24] hover:text-white border border-rose-200/80 hover:border-[#721C24] rounded-full text-xs sm:text-sm font-semibold tracking-wide shadow-sm hover:shadow transition-all duration-300 hover:-translate-y-0.5 w-full sm:w-auto"
          >
            <span className="mr-1.5 text-sm sm:text-base">🧘</span>
            <span>International Yoga Day 2026</span>
            <ExternalLink className="w-3.5 h-3.5 ml-2.5 opacity-75 group-hover:opacity-100 transition-opacity" />
          </a>
        </div>
      </div>
    </div>
  )
}
