"use client";

import React, { useState } from "react";
import { Handshake } from "lucide-react";

const partners = [
  { name: "Rishihood University", domain: "rishihood.edu.in" },
  { name: "India House | Bharat Mandala", domain: null },
  { name: "Khetee Foundation", domain: "khetee.org" },
  { name: "Anaadi Foundation", domain: "anaadi.org" },
  { name: "Shivganga", domain: "shivgangajhabua.org" },
  { name: "Krida Bharati", domain: "kridabharati.org" },
  { name: "Adi Shankracharya Foundation", domain: null },
  { name: "Savera IIT Delhi", domain: "iitd.ac.in" },
  { name: "Patliputra Samvad", domain: null },
];

function PartnerLogo({ partner }: { partner: { name: string; domain: string | null } }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-w-[240px] sm:min-w-[280px] h-40 px-6 bg-white rounded-2xl shadow-sm border border-orange-100/60 hover:shadow-xl hover:border-orange-300 hover:-translate-y-1 transition-all duration-300 group cursor-default">
      {partner.domain && !imgError ? (
        <img
          src={`https://logo.clearbit.com/${partner.domain}`}
          alt={`${partner.name} logo`}
          className="max-h-16 max-w-full object-contain mb-4 filter grayscale group-hover:grayscale-0 transition-all duration-500"
          onError={() => setImgError(true)}
        />
      ) : (
        <div className="w-16 h-16 bg-gradient-to-br from-orange-50 to-yellow-50 border border-orange-100 rounded-full flex items-center justify-center mb-4 shadow-inner group-hover:scale-110 transition-transform duration-500">
          <span className="text-2xl font-bold text-orange-600 font-devanagari">{partner.name.charAt(0)}</span>
        </div>
      )}
      <span className="font-semibold text-gray-800 text-center text-sm sm:text-base group-hover:text-orange-700 transition-colors">
        {partner.name}
      </span>
    </div>
  );
}

export function PartnersSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-orange-50/30 via-white to-green-50/30">
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ea580c\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium mb-2 shadow-sm border border-orange-200">
            <Handshake className="w-4 h-4 mr-2" />
            Collaborative Network
          </div>
          
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-orange-700 font-devanagari drop-shadow-sm">
              हमारे सहयोगी
            </h2>
            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800">
              Partners in Nation Building
            </h3>
          </div>
          
          <div className="max-w-3xl mx-auto mt-8 bg-white/60 backdrop-blur-sm border border-orange-100 rounded-2xl p-6 sm:p-8 shadow-sm">
            <blockquote className="space-y-4">
              <p className="text-xl sm:text-2xl font-devanagari text-orange-800 leading-relaxed">
                "संगच्छध्वं संवदध्वं सं वो मनांसि जानताम्।"
              </p>
              <p className="text-base sm:text-lg text-gray-700 italic">
                "May we move together, may we speak together, may our minds be of one accord."
              </p>
              <footer className="text-orange-700 font-medium tracking-wide mt-2">
                — Rig Veda
              </footer>
            </blockquote>
          </div>
        </div>
        
        {/* Marquee Container */}
        <div className="relative flex overflow-hidden group gap-6 mt-12 py-4" style={{ '--gap': '1.5rem' } as React.CSSProperties}>
          {/* Gradient masks for smooth fading edges */}
          <div className="absolute inset-y-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-24 sm:w-40 bg-gradient-to-l from-white via-white/80 to-transparent z-20 pointer-events-none"></div>
          
          <div className="animate-marquee flex shrink-0 items-center gap-6 group-hover:[animation-play-state:paused]">
            {partners.map((partner, index) => (
              <PartnerLogo key={`partner-1-${index}`} partner={partner} />
            ))}
          </div>
          
          <div className="animate-marquee flex shrink-0 items-center gap-6 group-hover:[animation-play-state:paused]" aria-hidden="true">
            {partners.map((partner, index) => (
              <PartnerLogo key={`partner-2-${index}`} partner={partner} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
