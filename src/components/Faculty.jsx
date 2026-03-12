"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const vardaan = {
  name: "VARDAAN BHOLA",
  role: "Drummer • Rhythm Explorer • Performer",
  image: "/Faculty/IMG_6646.webp",
  bio: "From the heartbeat of Chandigarh’s music scene, Vardaan crafts rhythmic experience through intention, movement, and musical connection. Trained within a lineage of disciplined mentorship, Vardaan’s playing bridges groove-driven expression with deep rhythmic understanding.",
  path: [
    "Rooted in long-term mentorship with Mark — founder of Pitch & Pulse",
    "Personal lessons with Gino Banks and Manoj Mavely (Musictek)",
    "Continual independent study of global rhythm innovators — including Benny Greb, Matt Garstka, Jojo Mayer, Chris Coleman, Tommy Igoe, Anika Nilles"
  ],
  credentials: "Trinity College London — Grade 8 Drums (98% Distinction)",
  artistry: "Whether performing, composing, or translating complex concepts into expressive phrasing, Vardaan’s focus is always on musical depth over spectacle — crafting rhythm that is felt as much as heard.",
  instagram: "https://www.instagram.com/vardaanbhola?igsh=MTl2aW1lcnpmMTJuMg=="
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

export default function Faculty() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px 0px 0px 0px" });

  return (
    <section id="faculty" ref={containerRef} className="bg-[#05050a] py-24 md:py-32 relative overflow-hidden">
      
      {/* Background Ambient Glow (Matches the Gear page Aurora) */}
      <div className="absolute top-0 right-[-10%] w-[40vw] h-[40vw] bg-indigo-600/10 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[30vw] h-[30vw] bg-rose-600/5 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 md:mb-24"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-[1px] bg-indigo-500/50"></div>
            <h2 className="text-indigo-400 font-bold tracking-[0.5em] uppercase text-[10px] md:text-xs">
              The Lineup
            </h2>
          </div>
          {/* Extremely heavy typography to match the 'VAULT' vibe */}
          <h3 className="text-6xl md:text-8xl lg:text-[7rem] font-black uppercase tracking-[-0.04em] leading-none text-white drop-shadow-2xl">
            FACULTY.
          </h3>
        </motion.div>

        {/* The Single Editorial Spread */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-stretch">
          
          {/* Left: Massive Cinematic Portrait */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="w-full lg:w-5/12 h-[60vh] lg:h-auto min-h-[600px] rounded-2xl md:rounded-[2rem] overflow-hidden bg-zinc-900 border border-white/10 relative group shadow-[0_30px_60px_rgba(0,0,0,0.6)] flex-shrink-0"
          >
            <img 
              src={vardaan.image} 
              alt={vardaan.name}
              // THE FIX: Full color on mobile, grayscale on desktop until hover!
              className="absolute inset-0 w-full h-full object-cover grayscale-0 md:grayscale transition-all duration-1000 md:group-hover:grayscale-0 md:group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none"></div>
            
            <div className="absolute bottom-8 left-8 md:bottom-10 md:left-10 z-20 pointer-events-none">
               <span className="text-white/50 text-[9px] uppercase tracking-[0.4em] font-bold block mb-2 drop-shadow-md">Featured Instructor</span>
               <span className="text-4xl md:text-5xl font-black text-white tracking-tighter drop-shadow-lg">{vardaan.name.split(' ')[0]}</span>
            </div>
          </motion.div>

          {/* Right: The Staggered Dossier Details */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="w-full lg:w-7/12 flex flex-col justify-center py-4 lg:py-8"
          >
            {/* The Heavyweight Name */}
            <motion.h3 variants={itemVariants} className="text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter text-white leading-[0.9] mb-6 drop-shadow-lg">
              {vardaan.name}
            </motion.h3>
            
            {/* THE FIX: Architecture Flexbox for Role + Instagram Link */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 border-b border-white/10 pb-6">
              <p className="text-indigo-400 text-[10px] md:text-xs uppercase tracking-[0.4em] font-bold">
                {vardaan.role}
              </p>
              
              <a 
                href={vardaan.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group/ig flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2 rounded-full transition-all duration-300 w-fit backdrop-blur-md"
              >
                <span className="text-[9px] text-white/70 group-hover/ig:text-white uppercase tracking-[0.3em] font-bold transition-colors">Connect</span>
                <span className="text-xs text-indigo-400 transform group-hover/ig:translate-x-1 group-hover/ig:-translate-y-1 transition-transform duration-300">↗</span>
              </a>
            </motion.div>

            <motion.p variants={itemVariants} className="text-white/80 font-light text-base md:text-lg leading-relaxed mb-12 max-w-2xl drop-shadow-md">
              {vardaan.bio}
            </motion.p>

            {/* Path & Influence */}
            <motion.div variants={itemVariants} className="mb-14">
              <div className="flex items-center gap-4 mb-8">
                <span className="text-[10px] uppercase tracking-[0.4em] text-white/40 font-bold">Path & Influence</span>
                <div className="flex-grow h-[1px] bg-white/10"></div>
              </div>
              <ul className="space-y-6 max-w-2xl">
                {vardaan.path.map((item, i) => (
                  <li key={i} className="flex gap-4 text-white/70 font-light text-sm md:text-base group">
                    <span className="text-indigo-500 text-[10px] mt-1.5 transition-transform duration-300 group-hover:scale-125">✧</span>
                    <span className="leading-relaxed drop-shadow-sm">{item}</span>
                  </li>
                ))}
              </ul>
              
              {/* Cinematic Blockquote */}
              <div className="mt-10 border-l-[3px] border-indigo-500/50 pl-6 relative">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-indigo-500/5 to-transparent pointer-events-none"></div>
                <p className="text-white/60 italic text-sm md:text-base leading-relaxed max-w-xl font-light">
                  "{vardaan.artistry.split(' — ')[1] || "Where technique serves music, and rhythm becomes language."}"
                </p>
              </div>
            </motion.div>

            {/* UPGRADE: Glassmorphism Bento Boxes for Details */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              
              <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] p-6 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.4)] hover:bg-white/[0.04] transition-colors duration-500">
                <span className="text-[9px] uppercase tracking-[0.4em] text-indigo-400 font-bold block mb-4">Distinction</span>
                <p className="text-white/90 font-medium text-sm leading-relaxed">
                  {vardaan.credentials}
                </p>
              </div>
              
              <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] p-6 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.4)] hover:bg-white/[0.04] transition-colors duration-500">
                <span className="text-[9px] uppercase tracking-[0.4em] text-indigo-400 font-bold block mb-4">The Artistry</span>
                <p className="text-white/60 font-light text-sm leading-relaxed">
                  {vardaan.artistry.split(' — ')[0]}
                </p>
              </div>

            </motion.div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}