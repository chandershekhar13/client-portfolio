"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [activeTab, setActiveTab] = useState("Touring");
  const tabs = ["Touring", "Studio", "Masterclass", "Other"];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Transmission sent for:", activeTab);
    // Wire to EmailJS here
  };

  return (
    <section id="contact" className="relative w-full min-h-screen bg-black text-white flex justify-center items-center py-24 md:py-32 overflow-hidden px-4 sm:px-6 md:px-12">
      
      {/* Cinematic Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] max-w-[1000px] max-h-[1000px] bg-indigo-600/15 rounded-full blur-[120px] md:blur-[180px] pointer-events-none opacity-60" />

      {/* The Bento Grid Container */}
      <div className="w-full max-w-6xl relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6">
        
        {/* Cell 1: Massive Header & Intent (Top Left) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-8 bg-white/[0.02] backdrop-blur-2xl border border-white/[0.05] rounded-3xl p-8 md:p-12 lg:p-16 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden group"
        >
          {/* Subtle top glass edge glare */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          
          <div>
            <p className="text-indigo-400 text-[10px] uppercase tracking-[0.5em] mb-4 font-bold">Initiate</p>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9]">
              Let's <br /> Create.
            </h2>
          </div>

          {/* The Segmented Control */}
          <div className="mt-12 flex flex-wrap gap-2 bg-white/[0.02] p-2 rounded-2xl border border-white/[0.05] w-fit">
            {tabs.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`relative px-4 md:px-6 py-3 rounded-xl text-[10px] md:text-xs uppercase tracking-widest font-medium transition-colors duration-300 ${
                  activeTab === tab ? "text-white" : "text-white/40 hover:text-white/80"
                }`}
              >
                {activeTab === tab && (
                  <motion.div 
                    layoutId="bentoTab"
                    className="absolute inset-0 bg-indigo-500/20 border border-indigo-500/50 rounded-xl"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Cell 2: Direct Comms (Top Right) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="lg:col-span-4 grid grid-cols-1 gap-4 md:gap-6"
        >
          <div className="bg-white/[0.02] backdrop-blur-2xl border border-white/[0.05] rounded-3xl p-8 md:p-10 flex flex-col justify-center h-full shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden group">
             <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
             <span className="text-white/30 text-[10px] uppercase tracking-[0.4em] mb-4">Direct Channel</span>
             <a href="mailto:booking@marksir.com" className="text-lg md:text-xl font-light hover:text-indigo-400 transition-colors tracking-wide">
               booking@marksir.com
             </a>
          </div>
          
          <div className="bg-white/[0.02] backdrop-blur-2xl border border-white/[0.05] rounded-3xl p-8 md:p-10 flex flex-col justify-center h-full shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden group">
             <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
             <span className="text-white/30 text-[10px] uppercase tracking-[0.4em] mb-4">Base of Operations</span>
             <span className="text-lg md:text-xl font-light tracking-wide text-white/80">Global / Studio Based</span>
          </div>
        </motion.div>

        {/* Cell 3: The Inputs & Submit (Bottom Full Width) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="lg:col-span-12 bg-white/[0.02] backdrop-blur-2xl border border-white/[0.05] rounded-3xl p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden group"
        >
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          
          <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row gap-10 md:gap-12 items-end">
            
            <div className="relative group w-full lg:w-1/3 pt-6">
              <input 
                type="text" 
                required
                className="w-full bg-transparent border-b border-white/10 pb-4 text-xl font-light text-white focus:outline-none focus:border-indigo-400 transition-colors peer placeholder-transparent"
                placeholder="Name"
              />
              <label className="absolute left-0 -top-1 text-[10px] text-white/40 uppercase tracking-[0.2em] transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-6 peer-focus:-top-1 peer-focus:text-[10px] peer-focus:text-indigo-400">
                Your Name
              </label>
            </div>

            <div className="relative group w-full lg:w-1/3 pt-6">
              <input 
                type="email" 
                required
                className="w-full bg-transparent border-b border-white/10 pb-4 text-xl font-light text-white focus:outline-none focus:border-indigo-400 transition-colors peer placeholder-transparent"
                placeholder="Email"
              />
              <label className="absolute left-0 -top-1 text-[10px] text-white/40 uppercase tracking-[0.2em] transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-6 peer-focus:-top-1 peer-focus:text-[10px] peer-focus:text-indigo-400">
                Email Address
              </label>
            </div>

            <div className="relative group w-full lg:w-1/3 pt-6">
              <textarea 
                rows="1"
                required
                className="w-full bg-transparent border-b border-white/10 pb-4 text-xl font-light text-white focus:outline-none focus:border-indigo-400 transition-colors peer placeholder-transparent resize-none overflow-hidden"
                placeholder="Details"
                onInput={(e) => {
                  e.target.style.height = 'auto';
                  e.target.style.height = e.target.scrollHeight + 'px';
                }}
              ></textarea>
              <label className="absolute left-0 -top-1 text-[10px] text-white/40 uppercase tracking-[0.2em] transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-6 peer-focus:-top-1 peer-focus:text-[10px] peer-focus:text-indigo-400">
                Project Details
              </label>
            </div>

            <div className="w-full lg:w-auto shrink-0 mt-4 lg:mt-0 pb-1">
              <button 
                type="submit"
                className="w-full lg:w-auto group relative px-10 py-5 bg-white text-black rounded-2xl overflow-hidden flex justify-center items-center transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <div className="absolute inset-0 bg-indigo-500 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] rounded-2xl" />
                <span className="relative z-10 text-[10px] uppercase tracking-[0.4em] font-bold group-hover:text-white transition-colors duration-500 whitespace-nowrap">
                  Transmit
                </span>
              </button>
            </div>

          </form>
        </motion.div>

      </div>
    </section>
  );
}