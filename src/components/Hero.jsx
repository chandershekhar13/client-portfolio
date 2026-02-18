"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      
      {/* THE VIDEO BACKGROUND */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        // This is a backup link from a different source
        src="https://www.w3schools.com/html/mov_bbb.mp4" 
      >
        Your browser does not support the video tag.
      </video>

      {/* THE DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* TEXT CONTENT */}
      <div className="relative z-20 flex h-full flex-col items-center justify-center text-center px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-sm md:text-xl font-light tracking-[0.3em] text-gray-300 uppercase mb-4"
        >
          Producer • Musician • Drummer
        </motion.h2>
<motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1, delay: 0.4 }}
  className="relative z-20 mb-8"
>
  <img 
    src="/signature.png" // Replace with your exact filename
    alt="Sahil Sarin Signature"
    className="h-32 md:h-56 w-auto mx-auto"
  />
</motion.div>

      </div>
    </section>
  );
}