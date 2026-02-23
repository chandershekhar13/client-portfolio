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
  artistry: "Whether performing, composing, or translating complex concepts into expressive phrasing, Vardaan’s focus is always on musical depth over spectacle — crafting rhythm that is felt as much as heard."
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } }
};

export default function Faculty() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px 0px 0px 0px" });

  return (
    <section id="faculty" ref={containerRef} className="bg-black py-24 md:py-32 border-t border-white/5 relative overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-0 right-[-10%] w-[500px] h-[500px] bg-indigo-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 md:mb-24"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-[1px] bg-indigo-500"></div>
            <h2 className="text-indigo-500 font-bold tracking-[0.4em] uppercase text-[10px] md:text-xs">
              The Lineup
            </h2>
          </div>
          <h3 className="font-oswald text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-none text-white">
            Faculty.
          </h3>
        </motion.div>

        {/* The Single Editorial Spread */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-stretch">
          
          {/* Left: Massive Cinematic Portrait */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="w-full lg:w-5/12 h-[60vh] lg:h-auto min-h-[600px] rounded-2xl md:rounded-[2rem] overflow-hidden bg-zinc-900 border border-white/10 relative group shadow-[0_30px_60px_rgba(0,0,0,0.5)] flex-shrink-0"
          >
            <img 
              src={vardaan.image} 
              alt={vardaan.name}
              className="w-full h-full object-cover grayscale opacity-80 transition-all duration-1000 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"></div>
            
            {/* Subtle Name Overlay on Image */}
            <div className="absolute bottom-8 left-8">
               <span className="text-white/50 text-[10px] uppercase tracking-[0.4em] font-bold block mb-1">Featured Instructor</span>
               <span className="text-3xl font-black text-white tracking-tighter">{vardaan.name.split(' ')[0]}</span>
            </div>
          </motion.div>

          {/* Right: The Staggered Dossier Details */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="w-full lg:w-7/12 flex flex-col justify-center py-4 lg:py-10"
          >
            <motion.h3 variants={itemVariants} className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white leading-none mb-3">
              {vardaan.name}
            </motion.h3>
            
            <motion.p variants={itemVariants} className="text-indigo-400 text-[10px] md:text-xs uppercase tracking-[0.4em] font-bold mb-10">
              {vardaan.role}
            </motion.p>

            <motion.p variants={itemVariants} className="text-white/70 font-light text-base md:text-lg leading-relaxed mb-12 max-w-2xl">
              {vardaan.bio}
            </motion.p>

            {/* Path & Influence */}
            <motion.div variants={itemVariants} className="mb-12">
              <div className="flex items-center gap-4 mb-8">
                <span className="text-[10px] uppercase tracking-[0.4em] text-white/40 font-bold">Path & Influence</span>
                <div className="flex-grow h-[1px] bg-white/10"></div>
              </div>
              <ul className="space-y-5 max-w-2xl">
                {vardaan.path.map((item, i) => (
                  <li key={i} className="flex gap-4 text-white/70 font-light text-sm md:text-base">
                    <span className="text-indigo-500 text-xs mt-1">✦</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 border-l-2 border-indigo-500/30 pl-5">
                <p className="text-white/50 italic text-sm leading-relaxed max-w-xl">
                  "This blend of traditional guidance and diverse international perspective shapes his voice — where technique serves music, and rhythm becomes language."
                </p>
              </div>
            </motion.div>

            {/* Credentials & Artistry */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 pt-8 border-t border-white/10">
              <div>
                <span className="text-[10px] uppercase tracking-[0.4em] text-white/40 font-bold block mb-5">Distinction</span>
                <p className="text-white/90 font-medium text-sm md:text-base border border-white/10 bg-white/[0.03] backdrop-blur-md p-5 rounded-xl shadow-inner inline-block">
                  {vardaan.credentials}
                </p>
              </div>
              
              <div>
                <span className="text-[10px] uppercase tracking-[0.4em] text-white/40 font-bold block mb-5">The Artistry</span>
                <p className="text-white/60 font-light text-sm md:text-base leading-relaxed">
                  {vardaan.artistry}
                </p>
              </div>
            </motion.div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}