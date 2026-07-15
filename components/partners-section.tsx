"use client";

import React, { useState } from "react";

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
    <div className="flex flex-col items-center justify-center min-w-[220px] sm:min-w-[280px] h-36 px-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-orange-100/50 hover:shadow-md hover:border-orange-200 transition-all">
      {partner.domain && !imgError ? (
        <img
          src={`https://logo.clearbit.com/${partner.domain}`}
          alt={`${partner.name} logo`}
          className="max-h-16 max-w-full object-contain mb-3"
          onError={() => setImgError(true)}
        />
      ) : (
        <div className="w-14 h-14 bg-gradient-to-br from-orange-100 to-orange-50 rounded-full flex items-center justify-center mb-3 shadow-inner">
          <span className="text-2xl font-bold text-orange-600">{partner.name.charAt(0)}</span>
        </div>
      )}
      <span className="font-semibold text-gray-800 text-center text-sm sm:text-base">{partner.name}</span>
    </div>
  );
}

export function PartnersSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-orange-50/50 via-white to-blue-50/50 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-orange-700 font-devanagari">हमारे सहयोगी</h2>
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">Our Partners</h3>
      </div>
      
      {/* Marquee Container */}
      <div 
        className="relative flex overflow-hidden group gap-6" 
        style={{ '--gap': '1.5rem' } as React.CSSProperties}
      >
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
    </section>
  );
}
