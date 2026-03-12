"use client";
import { useRef } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Transmission ready for EmailJS.");
    // EmailJS wiring will go exactly here
  };

  return (
    // Adjusted top padding slightly so it anchors nicely below the Faculty section
    <section id="contact" className="w-full bg-[#050505] text-white pt-24 pb-16 md:pt-32 md:pb-24 px-6 md:px-12 relative overflow-hidden">
      
      {/* 1. THE ARCHITECTURAL WATERMARK BRIDGE */}
      {/* Massive, ultra-faint typography that fills the dead space elegantly */}
      <div className="absolute top-0 left-0 w-full overflow-hidden pointer-events-none flex justify-center select-none opacity-[0.02] mix-blend-screen">
        <h2 className="text-[18vw] font-black uppercase tracking-tighter leading-none mt-[-4vw]">
          CONTACT
        </h2>
      </div>
      
      {/* A sleek, fading horizontal line to physically separate the sections */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>


      {/* Super subtle background glow - costs 0 CPU */}
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      {/* The main grid layout (100% untouched) */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 relative z-10 items-center">

        {/* LEFT COLUMN: Professional Greeting */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-[1px] bg-indigo-500"></div>
              <span className="text-indigo-400 text-[10px] uppercase tracking-[0.4em] font-bold">Connect</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] mb-8">
              LET'S WORK.
            </h2>
            
            <p className="text-white/60 text-sm md:text-base leading-relaxed mb-12 max-w-md font-light">
              Currently accepting inquiries for studio sessions, masterclasses, global touring, and exclusive gear purchases. Fill out the form or reach out directly via email.
            </p>

            <div className="flex flex-col gap-2 border-l-2 border-white/10 pl-5 py-2">
              <span className="text-white/30 text-[9px] uppercase tracking-[0.3em] font-bold">Direct Channel</span>
              <a href="mailto:markdrumsofficial@gmail.com" className="text-lg md:text-xl font-light hover:text-indigo-400 transition-colors w-fit">
                markdrumsofficial@gmail.com
              </a>
            </div>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: The Clean, Timeless Form */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <motion.div 
            initial={{ opacity: 0, x: 20 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-10">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Name Input */}
                <div className="flex flex-col gap-3">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-white/50 font-bold">Your Name</label>
                  <input 
                    type="text" 
                    name="user_name" 
                    required 
                    className="bg-transparent border-b border-white/20 pb-3 text-white focus:outline-none focus:border-indigo-400 transition-colors text-lg font-light rounded-none" 
                  />
                </div>

                {/* Email Input */}
                <div className="flex flex-col gap-3">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-white/50 font-bold">Email Address</label>
                  <input 
                    type="email" 
                    name="user_email" 
                    required 
                    className="bg-transparent border-b border-white/20 pb-3 text-white focus:outline-none focus:border-indigo-400 transition-colors text-lg font-light rounded-none" 
                  />
                </div>
              </div>

              {/* Message Input */}
              <div className="flex flex-col gap-3">
                <label className="text-[10px] uppercase tracking-[0.2em] text-white/50 font-bold">Project / Gear Details</label>
                <textarea 
                  name="message" 
                  required 
                  rows="4" 
                  className="bg-transparent border-b border-white/20 pb-3 text-white focus:outline-none focus:border-indigo-400 transition-colors text-lg font-light resize-none rounded-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button type="submit" className="group relative px-10 py-4 bg-white text-black text-[10px] uppercase tracking-[0.3em] font-bold overflow-hidden rounded-full flex items-center gap-3 transition-transform active:scale-95 w-fit">
                  <div className="absolute inset-0 bg-indigo-500 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[0.22,1,0.36,1]"></div>
                  
                  <div className="relative z-10 flex items-center gap-3 text-black opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                    <span className="whitespace-nowrap">Send Message</span>
                    <span className="transform transition-transform duration-500 group-hover:translate-x-1">→</span>
                  </div>
                  
                  <div className="absolute inset-0 z-20 flex items-center justify-center gap-3 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <span className="whitespace-nowrap">Send Message</span>
                    <span className="transform translate-x-1">→</span>
                  </div>
                </button>
              </div>

            </form>
          </motion.div>
        </div>

      </div>
    </section>
  );
}