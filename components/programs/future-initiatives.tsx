"use client";

import { Users, Heart, Microscope, Library, ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function FutureInitiatives() {
  return (
    <section className="relative py-32 bg-[#0F172A] overflow-hidden text-white border-y border-white/10">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-indigo-500/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-orange-500/20 rounded-full blur-[120px]"></div>
        <div className="absolute top-[40%] left-[40%] w-[20%] h-[20%] bg-teal-500/20 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-5 py-2 rounded-full mb-6 backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-orange-400" />
            <span className="text-sm font-semibold tracking-widest text-orange-200 uppercase">The Next Horizon</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
            Expanding Our Impact
          </h2>
          <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed">
            Beyond our core pillars, we are launching new frontiers in research, traditional wisdom, and global collaboration to accelerate rural transformation.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          
          {/* Item 1: Fellowships & Internships (Large span) */}
          <div className="md:col-span-2 group relative bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:bg-white/[0.07] transition-all duration-500 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="flex flex-col md:flex-row h-full">
              <div className="p-8 md:p-12 md:w-3/5 flex flex-col justify-center relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-teal-500/20 flex items-center justify-center mb-6 border border-teal-500/30">
                  <Users className="w-7 h-7 text-teal-400" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Fellowship & Internship</h3>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  Immerse yourself in rural development. Join our grassroots initiatives, gain hands-on experience in social entrepreneurship, and drive tangible impact under expert mentorship.
                </p>
                <Link href="/internship" className="inline-flex items-center text-teal-400 font-semibold hover:text-teal-300 transition-colors">
                  View Opportunities <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              <div className="md:w-2/5 relative h-64 md:h-auto overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A] via-[#0F172A]/50 to-transparent z-10 hidden md:block"></div>
                <Image 
                  src="/images/gallery/classroom/classroom-1.jpg" 
                  alt="Fellowship" 
                  fill 
                  className="object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* Item 2: Volunteering (Small) */}
          <div className="group relative bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:bg-white/[0.07] transition-all duration-500 p-8 flex flex-col justify-between min-h-[300px] shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-pink-500/20 flex items-center justify-center mb-6 border border-pink-500/30">
                <Heart className="w-6 h-6 text-pink-400" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Volunteering</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                Contribute your time and specialized skills to our mission. Whether online or on-ground, your efforts help scale our impact.
              </p>
            </div>
            <Link href="/volunteer" className="inline-flex items-center text-pink-400 font-semibold hover:text-pink-300 transition-colors relative z-10">
              Join the Movement <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Item 3: DBM Research (Small) */}
          <div className="group relative bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:bg-white/[0.07] transition-all duration-500 p-8 flex flex-col justify-between min-h-[300px] shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 flex items-center justify-center mb-6 border border-indigo-500/30">
                <Microscope className="w-6 h-6 text-indigo-400" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">DBM Research Hub</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                A dedicated wing focusing on empirical studies in rural economics, innovative pedagogy, and data-driven development models.
              </p>
            </div>
            <Link href="#" className="inline-flex items-center text-indigo-400 font-semibold hover:text-indigo-300 transition-colors relative z-10">
              Explore Research <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Item 4: IKS (Large span) */}
          <div className="md:col-span-2 group relative bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:bg-white/[0.07] transition-all duration-500 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-bl from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="flex flex-col md:flex-row-reverse h-full">
              <div className="p-8 md:p-12 md:w-3/5 flex flex-col justify-center relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-amber-500/20 flex items-center justify-center mb-6 border border-amber-500/30">
                  <Library className="w-7 h-7 text-amber-400" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Indian Knowledge System (IKS)</h3>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  Reviving ancient Indian wisdom for modern education. Our initiative integrates Vedic mathematics, traditional sciences, Ayurveda, and manuscript preservation into our curriculum.
                </p>
                <Link href="#" className="inline-flex items-center text-amber-400 font-semibold hover:text-amber-300 transition-colors">
                  Discover Our Roots <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              <div className="md:w-2/5 relative h-64 md:h-auto overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-l from-[#0F172A] via-[#0F172A]/50 to-transparent z-10 hidden md:block"></div>
                <Image 
                  src="/images/gallery/header/cultural-program.png" 
                  alt="IKS" 
                  fill 
                  className="object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
