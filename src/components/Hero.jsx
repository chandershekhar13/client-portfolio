"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black">
      
      {/* --- 1. THE BACKGROUND VIDEO --- */}
      <video
        autoPlay
        loop
        muted
        playsInline 
        className="absolute top-0 left-0 w-full h-full object-cover z-0 grayscale brightness-[0.4] contrast-125 pointer-events-none"
      >
        <source src="/mainvideo/main.mp4" type="video/mp4" />
      </video>

      {/* --- 2. THE OVERLAY BLEND --- */}
      <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-zinc-950 to-transparent z-10 pointer-events-none" />

      {/* --- 3. THE FOREGROUND CONTENT --- */}
      <div className="relative z-20 w-full flex flex-col items-center justify-center px-4 -mt-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="flex flex-col items-center w-full"
        >
          
          {/* MAIN TITLE: THE SIGNATURE ONLY */}
          <div className="relative w-full max-w-[280px] sm:max-w-[400px] md:max-w-[600px] lg:max-w-[800px] flex justify-center items-center -my-10 sm:-my-16 md:-my-32 lg:-my-48 z-10">
            <img 
              src="/signature.png" 
              alt="Mark"
              // CHANGED: opacity-95 -> opacity-90
              // This subtle drop lets the video background bleed through just enough to look "submerged".
              className="w-full h-auto object-contain invert opacity-70 drop-shadow-[0_10px_15px_rgba(0,0,0,0.8)] pointer-events-none select-none"
              draggable="false"
            />
          </div>
          
          {/* Description */}
          <div className="flex items-center gap-3 md:gap-6 text-gray-300 text-[10px] md:text-sm font-light tracking-[0.3em] uppercase drop-shadow-md relative z-20 pointer-events-none select-none">
            <span>Drummer</span>
            <span className="text-indigo-500">•</span>
            <span>Producer</span>
            <span className="text-indigo-500">•</span>
            <span>Educator</span>
          </div>
        </motion.div>
      </div>

      {/* --- 4. SCROLL INDICATOR --- */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-20 pointer-events-none select-none"
      >
        <span className="text-white/40 text-[9px] md:text-xs uppercase tracking-[0.3em]">Scroll</span>
        <div className="w-[1px] h-8 md:h-12 bg-gradient-to-b from-white/40 to-transparent" />
      </motion.div>

    </section>
  );
}