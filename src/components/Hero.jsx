"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">

      {/* BACKGROUND IMAGE */}
      {/* We are using a placeholder standard <img> tag for now to avoid Next.js config errors. 
          Later we will swap this for the optimized Next/Image component. */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519892300165-31a5463f0f8f?q=80&w=2070&auto=format&fit=crop')" }} 
      >
        {/* Dark Overlay - Crucial for text readability */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* ANIMATED TEXT CONTENT */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4">

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-sm md:text-xl font-light tracking-[0.3em] text-gray-300 uppercase mb-4"
        >
          Producer • Musician • Drummer
        </motion.h2>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-8xl font-bold text-white tracking-tighter"
        >
          CLIENT NAME
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-10 animate-bounce"
        >
          <span className="text-white/50 text-sm tracking-widest uppercase">Scroll Down</span>
        </motion.div>

      </div>
    </section>
  );
}