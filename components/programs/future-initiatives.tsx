"use client";

import { motion } from "framer-motion";
import { Library, Microscope, Users, Heart, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function FutureInitiatives() {
  const initiatives = [
    {
      id: "iks",
      title: "Indian Knowledge System",
      subtitle: "भारतीय ज्ञान प्रणाली (IKS)",
      description: "Integrating ancient Vedic wisdom, traditional sciences, and holistic practices with modern education.",
      icon: <Library className="w-8 h-8 text-amber-400" />,
      image: "/images/gallery/header/cultural-program.png",
      span: "md:col-span-2 md:row-span-2",
      link: "#iks",
      gradient: "from-amber-500/20 to-orange-600/20",
    },
    {
      id: "research",
      title: "DBM Research",
      subtitle: "अनुसंधान",
      description: "Data-driven studies in rural economics and agricultural innovation.",
      icon: <Microscope className="w-6 h-6 text-indigo-400" />,
      image: "/images/gallery/agriculture/1.jpg",
      span: "md:col-span-1 md:row-span-1",
      link: "#research",
      gradient: "from-indigo-500/20 to-blue-600/20",
    },
    {
      id: "fellowship",
      title: "Fellowship & Internship",
      subtitle: "फेलोशिप और इंटर्नशिप",
      description: "Immersive grassroots leadership experiences for passionate youth.",
      icon: <Users className="w-6 h-6 text-teal-400" />,
      image: "/images/gallery/classroom/classroom-1.jpg",
      span: "md:col-span-1 md:row-span-1",
      link: "/internship",
      gradient: "from-teal-500/20 to-emerald-600/20",
    },
    {
      id: "volunteering",
      title: "Global Volunteering",
      subtitle: "स्वयंसेवा",
      description: "Contribute your skills globally or locally to drive rural transformation.",
      icon: <Heart className="w-6 h-6 text-pink-400" />,
      image: "/images/gallery/header/community-events.png",
      span: "md:col-span-3 md:row-span-1",
      link: "/volunteer",
      gradient: "from-pink-500/20 to-rose-600/20",
    }
  ];

  return (
    <section className="relative py-24 bg-slate-950 overflow-hidden">
      {/* Background Mesh Gradients */}
      <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-purple-600/30 rounded-full blur-[120px] mix-blend-screen" />
      <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-blue-600/30 rounded-full blur-[120px] mix-blend-screen" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/3 h-1/3 bg-amber-600/20 rounded-full blur-[100px] mix-blend-screen" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 bg-white/5 border border-white/10 text-slate-300 rounded-full text-sm font-medium mb-6 backdrop-blur-md"
          >
            <span className="mr-2 text-amber-400">✨</span>
            Expanding Horizons
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight"
          >
            New Initiatives & <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400">Global Engagement</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg lg:text-xl text-slate-400 max-w-3xl mx-auto"
          >
            Join our expanding ecosystem of research, ancient wisdom, and grassroots action. Discover new pathways to contribute to rural empowerment.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:auto-rows-[250px]">
          {initiatives.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-white/20 transition-all duration-500 flex flex-col justify-end min-h-[250px] ${item.span}`}
            >
              {/* Background Image with Overlay */}
              <div className="absolute inset-0 z-0">
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  fill 
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover opacity-40 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700 ease-out"
                />
                <div className={`absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950/80 to-slate-950`} />
                <div className={`absolute inset-0 bg-gradient-to-tr ${item.gradient} opacity-50 group-hover:opacity-70 transition-opacity duration-500`} />
              </div>

              {/* Content */}
              <div className="relative z-10 p-6 md:p-8 flex flex-col h-full justify-between">
                <div className="flex justify-between items-start">
                  <div className={`p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 shadow-xl`}>
                    {item.icon}
                  </div>
                  <Link href={item.link}>
                    <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-white/20 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0 cursor-pointer">
                      <ArrowRight className="w-5 h-5 text-white" />
                    </div>
                  </Link>
                </div>
                
                <div className="mt-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <h3 className={`font-bold text-white mb-1 group-hover:text-amber-400 transition-colors ${item.id === 'iks' ? 'text-3xl' : 'text-2xl'}`}>{item.title}</h3>
                  <p className="text-amber-400/80 font-devanagari text-sm mb-3">{item.subtitle}</p>
                  <p className="text-slate-300 text-sm md:text-base opacity-80 group-hover:opacity-100 transition-all duration-500 ease-out line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
              
              {/* Make entire card clickable */}
              <Link href={item.link} className="absolute inset-0 z-20">
                <span className="sr-only">Learn more about {item.title}</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
