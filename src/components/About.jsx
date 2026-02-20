"use client";
import { motion } from "framer-motion";

export default function About() {
  const cardVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.2, ease: "easeOut" } }
  };

  return (
    <section id="bio" className="bg-black text-white py-24 md:py-32 px-4 sm:px-6 overflow-hidden border-t border-white/5 relative">
      
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-900/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* --- HEADER --- */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="mb-12 md:mb-20"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-[1px] bg-indigo-500"></div>
            <h2 className="text-indigo-500 font-bold tracking-[0.4em] uppercase text-[10px] md:text-xs">
              Behind the Rhythm
            </h2>
          </div>
          <h3 className="font-oswald text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-none text-white">
            A Life In Beats.
          </h3>
        </motion.div>

        {/* --- THE BENTO GRID --- */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          transition={{ staggerChildren: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6"
        >
          
          {/* CARD 1: THE FOUNDATION */}
          <motion.div variants={cardVariants} className="md:col-span-2 bg-zinc-950/80 backdrop-blur-sm border border-white/5 rounded-[2rem] p-8 md:p-12 flex flex-col justify-center hover:bg-zinc-900 hover:border-indigo-500/30 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(79,70,229,0.15)] transition-all duration-500 group">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-4 h-4 rounded-sm bg-indigo-500/20 flex items-center justify-center">
                 <div className="w-1.5 h-1.5 bg-indigo-500 rounded-sm"></div>
              </div>
              <h4 className="text-indigo-400 uppercase tracking-widest text-[10px] font-bold">The Foundation</h4>
            </div>
            <p className="text-gray-400 text-lg md:text-2xl font-light leading-relaxed">
              Started in a church at age 6. Deeply rooted in the <span className="text-gray-200 italic font-normal">Guru-Shishya Parampara</span>, training in Tabla under Guru Rajneesh Dhiman Ji & Pt. Biplab Bhattacharya Ji.
            </p>
          </motion.div>

          {/* CARD 2: THE PERFECT SCORE */}
          <motion.div variants={cardVariants} className="md:col-span-1 bg-zinc-950/80 backdrop-blur-sm border border-white/5 rounded-[2rem] p-8 md:p-10 flex flex-col justify-between hover:bg-zinc-900 hover:border-indigo-500/30 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(79,70,229,0.15)] transition-all duration-500 group relative overflow-hidden">
            <div className="relative z-10">
              <h4 className="text-gray-500 uppercase tracking-widest text-[10px] font-bold mb-4">Trinity College</h4>
              <div className="flex items-baseline text-7xl md:text-8xl font-oswald font-bold tracking-tighter text-white whitespace-nowrap">
                100<span className="text-indigo-500 text-3xl md:text-4xl">/100</span>
              </div>
              <p className="text-gray-400 text-xs md:text-sm mt-4 font-light tracking-wide uppercase">Grade 8 Drums Examination</p>
            </div>
            
            <motion.div 
              animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.05, 1] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-16 -right-12 text-[14rem] font-oswald font-bold text-white/[0.02] select-none pointer-events-none"
            >
              8
            </motion.div>
          </motion.div>

          {/* CARD 3: ACADEMICS (Reverted to classic flex-wrap) */}
          <motion.div variants={cardVariants} className="md:col-span-1 bg-zinc-950/80 backdrop-blur-sm border border-white/5 rounded-[2rem] p-8 md:p-10 hover:bg-zinc-900 hover:border-indigo-500/30 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(79,70,229,0.15)] transition-all duration-500">
            <h4 className="text-gray-500 uppercase tracking-widest text-[10px] font-bold mb-8">Academics</h4>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 rounded-full border border-white/10 text-[11px] text-gray-400 tracking-wide hover:border-white/30 hover:text-white transition-all cursor-default">
                Master’s in Vocals
              </span>
              <span className="px-4 py-2 rounded-full border border-white/10 text-[11px] text-gray-400 tracking-wide hover:border-white/30 hover:text-white transition-all cursor-default">
                Visharad in Vocals
              </span>
              <span className="px-4 py-2 rounded-full border border-white/10 text-[11px] text-gray-400 tracking-wide hover:border-white/30 hover:text-white transition-all cursor-default">
                Visharad in Tabla
              </span>
              <span className="px-4 py-2 rounded-full border border-indigo-500/30 text-[11px] text-indigo-400 tracking-wide bg-indigo-500/10 hover:bg-indigo-500/20 transition-all cursor-default">
                Studying Konnakol
              </span>
            </div>
          </motion.div>

          {/* CARD 4: THE MENTORS */}
          <motion.div variants={cardVariants} className="md:col-span-2 bg-zinc-950/80 backdrop-blur-sm border border-white/5 rounded-[2rem] p-8 md:p-12 hover:bg-zinc-900 hover:border-indigo-500/30 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(79,70,229,0.15)] transition-all duration-500 relative overflow-hidden group">
            <h4 className="text-gray-500 uppercase tracking-widest text-[10px] font-bold mb-8">The Masters & Mentors</h4>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-16 relative z-10">
              <div>
                <p className="text-white text-xs font-bold mb-3 tracking-[0.2em]">STUDIED UNDER</p>
                <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed">Daio (Africa), Guru Vishal Mehta Ji <span className="text-gray-500 text-xs">(Disciple of Pt. Suresh Talwalkar Ji)</span>, & Gino Banks (Mumbai).</p>
              </div>
              <div>
                <p className="text-white text-xs font-bold mb-3 tracking-[0.2em]">MASTERCLASSES</p>
                <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed">Jojo Mayer, Benny Greb, Chris Coleman, & Justin Scott.</p>
              </div>
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
          </motion.div>

          {/* CARD 5: THE LEGACY (With the new Mobile Stat Widget) */}
          <motion.div variants={cardVariants} className="md:col-span-3 bg-gradient-to-br from-indigo-950/30 to-black border border-indigo-500/20 rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-10 hover:border-indigo-500/50 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(79,70,229,0.2)] transition-all duration-500 group relative overflow-hidden">
            
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none"></div>

            <div className="relative z-10 w-full md:w-auto">
              <h4 className="text-indigo-400 uppercase tracking-widest text-[10px] font-bold mb-6">Current Era</h4>
              
              <div className="flex md:items-center gap-8 md:gap-6 text-white font-oswald uppercase tracking-wide">
                <div className="flex flex-col md:flex-row md:items-center md:gap-2">
                  <span className="text-4xl md:text-4xl font-bold">12+</span>
                  <span className="text-[10px] md:text-3xl text-gray-400 md:text-white mt-1 md:mt-0 tracking-[0.2em] md:tracking-wide">Years <br className="md:hidden"/>Teaching</span>
                </div>
                
                <div className="w-[1px] h-12 bg-white/10 md:hidden"></div>
                <span className="text-indigo-500/50 hidden md:inline">•</span>
                
                <div className="flex flex-col md:flex-row md:items-center md:gap-2">
                  <span className="text-4xl md:text-4xl font-bold">8+</span>
                  <span className="text-[10px] md:text-3xl text-gray-400 md:text-white mt-1 md:mt-0 tracking-[0.2em] md:tracking-wide">Years <br className="md:hidden"/>Live</span>
                </div>
              </div>
            </div>
            
            <div className="relative z-10 flex flex-col gap-3 text-gray-300 font-light text-sm md:text-base border-l border-indigo-500/30 pl-6 md:pl-8 mt-4 md:mt-0">
              <span className="text-white font-bold flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full shrink-0"></span>
                Mark School of Drums (Founder)
              </span>
              <span className="text-gray-400">Educator at SSM</span>
              <span className="text-gray-400">Educator at Bridge Academy</span>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}