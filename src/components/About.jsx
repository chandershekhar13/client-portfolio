"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="bio" className="min-h-screen bg-black text-white py-20 px-4 md:px-10 flex items-center">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE: THE IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative h-[400px] md:h-[600px] w-full rounded-lg overflow-hidden"
        >
           {/* Using a different placeholder style - Black & White vibe */}
          <div 
            className="absolute inset-0 bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-500"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1514525253440-b393452e8d26?q=80&w=1974&auto=format&fit=crop')" }}
          />
        </motion.div>

        {/* RIGHT SIDE: THE TEXT */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
            THE BEAT GOES ON.
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed">
            "Drumming isn't just about keeping time; it's about painting with sound."
          </p>

          <p className="text-gray-300 leading-relaxed">
            Sahil has been a driving force in the independent music scene for over a decade. 
            From intense studio sessions to sold-out stadium tours, his rhythmic versatility 
            bridges the gap between rock, fusion, and electronic music.
          </p>

          <div className="pt-4">
            <button className="px-8 py-3 border border-white text-white hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-widest text-sm">
              Read Full Bio
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}