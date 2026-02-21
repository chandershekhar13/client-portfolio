"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="relative w-full min-h-[100dvh] flex items-center justify-center bg-black overflow-hidden">
      
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-[25%_center] md:object-center grayscale brightness-[0.4] contrast-125 scale-[1.05]"
        >
          <source src="/mainvideo/main.webm" type="video/webm" />
          <source src="/mainvideo/main.mp4" type="video/mp4" />
        </video>
        
        <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-black via-transparent to-transparent z-10 pointer-events-none" />
      </div>

      <div className="relative z-20 w-full max-w-7xl mx-auto flex flex-col items-center justify-center px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center w-full"
        >
          <div className="relative w-full aspect-square max-w-[300px] sm:max-w-[450px] md:max-w-[650px] flex justify-center items-center -mb-8 sm:-mb-16 md:-mb-24 lg:-mb-32">
            <img 
              src="/signature.png" 
              alt="Mark Signature"
              className="w-full h-full object-contain invert opacity-90 drop-shadow-[0_20px_40px_rgba(0,0,0,0.9)]"
              draggable="false"
            />
          </div>
          
          <div className="flex items-center gap-4 md:gap-8 text-white/60 text-[10px] md:text-xs font-light tracking-[0.4em] uppercase">
            <span>Drummer</span>
            <span className="w-1 h-1 bg-indigo-500 rounded-full" />
            <span>Educator</span>
            <span className="w-1 h-1 bg-indigo-500 rounded-full" />
            <span>Performer</span>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1.5 }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-20"
      >
        <span className="text-white/30 text-[9px] uppercase tracking-[0.5em]">Scroll</span>

        <div className="w-[1px] h-16 bg-gradient-to-b from-white/30 to-transparent" />
      </motion.div>

    </section>
  );
}
