"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function Footer() {
  const [time, setTime] = useState("");
  const dockRef = useRef(null);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", second: "2-digit" }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const handleMouseMove = (e) => {
    if (!dockRef.current) return;
    const rect = dockRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    dockRef.current.style.setProperty('--mouse-x', `${x}px`);
    dockRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <footer className="relative bg-black text-white pt-12 pb-8 overflow-hidden">
      
      {/* THE MARQUEE */}
      <div className="relative w-full flex whitespace-nowrap overflow-hidden mb-12 md:mb-16 opacity-60 md:opacity-30 md:hover:opacity-100 transition-opacity duration-1000 select-none cursor-default">
        <motion.div className="flex whitespace-nowrap text-[3.5rem] md:text-[6rem] font-black uppercase tracking-tighter" animate={{ x: ["0%", "-50%"] }} transition={{ repeat: Infinity, ease: "linear", duration: 30 }}>
          <span className="pr-12 text-transparent" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.4)" }}>MARK SCHOOL OF DRUMS</span>
          <span className="pr-12 text-indigo-500">LET'S CREATE SOUND</span>
          <span className="pr-12 text-transparent" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.4)" }}>HIGH-END TRACKING</span>
          <span className="pr-12 text-indigo-500">LET'S CREATE SOUND</span>
          <span className="pr-12 text-transparent" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.4)" }}>MARK SCHOOL OF DRUMS</span>
          <span className="pr-12 text-indigo-500">LET'S CREATE SOUND</span>
          <span className="pr-12 text-transparent" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.4)" }}>HIGH-END TRACKING</span>
          <span className="pr-12 text-indigo-500">LET'S CREATE SOUND</span>
        </motion.div>
      </div>

      {/* THE GLASS DOCK */}
      <div className="max-w-[92%] md:max-w-6xl mx-auto relative z-10">
        <div ref={dockRef} onMouseMove={handleMouseMove} className="bg-gradient-to-br from-white/[0.04] to-transparent backdrop-blur-3xl border border-white/5 rounded-3xl p-8 md:p-12 flex flex-col gap-10 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)] relative overflow-hidden transition-all duration-700 group">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-indigo-500/15 blur-[80px] rounded-full pointer-events-none md:hidden"></div>
          <div className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 hidden md:block z-0" style={{ background: 'radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(99,102,241,0.15), transparent 40%)' }}></div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent opacity-60 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-700 z-0"></div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-0 relative z-10">
            <div className="flex items-center gap-4">
              <span className="text-2xl md:text-3xl font-black text-white tracking-tighter">MARK</span>
              <div className="border-l-[2px] border-indigo-500 pl-3 py-0.5 flex flex-col justify-center">
                <span className="text-[8px] md:text-[9px] text-white/90 md:text-white/70 font-semibold tracking-[0.3em] uppercase leading-none mb-1">School Of</span>
                <span className="text-[10px] md:text-xs text-indigo-400 font-black tracking-[0.4em] uppercase leading-none">Drums</span>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white/5 md:bg-black/40 border border-white/10 px-4 py-2.5 rounded-full backdrop-blur-md">
              <div className="relative flex items-center justify-center w-2 h-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75 animate-ping"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
              </div>
              <p className="text-[9px] uppercase tracking-[0.2em] font-medium text-white/90 md:text-white/80">
                <span className="text-white/50 mr-2">Local Time /</span> {time}
              </p>
            </div>
          </div>

          <div className="w-full h-[1px] bg-white/[0.08] md:bg-white/[0.03] relative z-10"></div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-0 text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-medium relative z-10">
            <div className="flex flex-wrap gap-6 md:gap-10">
              {["Home", "Biography", "Visuals", "Contact"].map((link) => (
                <a key={link} href={link === "Visuals" ? "#photos" : `#${link.toLowerCase()}`} className="text-white/70 md:text-white/40 hover:text-white transition-colors">{link}</a>
              ))}
            </div>
            <div className="flex items-center gap-8 w-full md:w-auto justify-between md:justify-end">
               <div className="flex gap-6">
                 <a href="#" className="text-indigo-300 md:text-white/30 hover:text-indigo-400 transition-colors">IG</a>
                 <a href="#" className="text-indigo-300 md:text-white/30 hover:text-indigo-400 transition-colors">YT</a>
                 <a href="#" className="text-indigo-300 md:text-white/30 hover:text-indigo-400 transition-colors">SP</a>
               </div>
               <button onClick={scrollToTop} className="w-10 h-10 rounded-full bg-white/10 md:bg-white/5 border border-white/20 md:border-white/10 flex items-center justify-center text-white/80 md:text-white/50 hover:bg-white hover:text-black hover:border-white transition-all duration-500 group/btn">
                 <span className="group-hover/btn:-translate-y-1 transition-transform duration-300">↑</span>
               </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6 px-4 md:px-8 text-[9px] uppercase tracking-[0.3em] text-white/50 md:text-white/30 font-medium">
          <p>© {new Date().getFullYear()} MARK SIR.</p>
          <a href="mailto:booking@marksir.com" className="hover:text-white transition-colors">booking@marksir.com</a>
        </div>
      </div>
    </footer>
  );
}