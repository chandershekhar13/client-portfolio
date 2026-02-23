"use client";
import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const facultyData = [
  {
    id: "vardaan-bhola",
    name: "VARDAAN BHOLA",
    role: "Drummer • Rhythm Explorer • Performer",
    image: "/Faculty/IMG_6646.webp", 
    bio: "From the heartbeat of Chandigarh’s music scene, Vardaan crafts rhythmic experience through intention, movement, and musical connection. Trained within a lineage of disciplined mentorship, Vardaan’s playing bridges groove-driven expression with deep rhythmic understanding.",
    path: [
      "Rooted in long-term mentorship with Mark — founder of Pitch & Pulse",
      "Personal lessons with Gino Banks and Manoj Mavely (Musictek)",
      "Continual independent study of global rhythm innovators — including Benny Greb, Matt Garstka, Jojo Mayer, Chris Coleman, Tommy Igoe, Anika Nilles, and others"
    ],
    credentials: "Trinity College London — Grade 8 Drums (98% Distinction)",
    artistry: "Whether performing, composing, or translating complex concepts into expressive phrasing, Vardaan’s focus is always on musical depth over spectacle — crafting rhythm that is felt as much as heard."
  },
  {
    id: "faculty-2",
    name: "SARAH JANE",
    role: "Jazz & Fusion Dynamics",
    image: "/Gallery/IMG_2055.webp", 
    bio: "Placeholder text for Faculty 2.",
    path: ["Studied under global jazz innovators", "Decade of touring experience"],
    credentials: "Berklee College of Music — Master's in Percussion",
    artistry: "Focuses on the spaces between the notes, bringing fluid dynamics to every session."
  },
  {
    id: "faculty-3",
    name: "DAVID PETERS",
    role: "Metal & Double Bass Technique",
    image: "/Gallery/IMG_2059.webp", 
    bio: "Placeholder text for Faculty 3.",
    path: ["Session drummer for top metal acts", "Specialist in extreme tempos"],
    credentials: "20 years of active stage experience",
    artistry: "Absolute precision and endurance, translating raw power into controlled musicality."
  },
  {
    id: "faculty-4",
    name: "ELENA ROSS",
    role: "Rudiments & Flow State",
    image: "/Gallery/IMG_2060.webp", 
    bio: "Placeholder text for Faculty 4.",
    path: ["Orchestral background", "Cross-genre rhythm fusion"],
    credentials: "First Chair Percussionist — National Symphony",
    artistry: "Bridging the gap between strict classical discipline and modern groove improvisation."
  }
];

export default function Faculty() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px 0px 0px 0px" });
  
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    handleResize(); 
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (selectedProfile) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [selectedProfile]);

  return (
    <section id="faculty" ref={containerRef} className="bg-black py-24 md:py-32 border-t border-white/5 relative overflow-hidden">
      
      <div className="absolute top-0 right-[-10%] w-[500px] h-[500px] bg-indigo-600/10 blur-[150px] rounded-full pointer-events-none" />

      {/* ========================================= */}
      {/* 1. DESKTOP UI: THE CINEMATIC REVEAL MODAL */}
      {/* ========================================= */}
      <AnimatePresence>
        {selectedProfile && isDesktop && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-10 pointer-events-none hidden md:flex">
            
            {/* Dark Blur Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}
              className="absolute inset-0 bg-black/90 backdrop-blur-2xl pointer-events-auto cursor-pointer"
              onClick={() => setSelectedProfile(null)}
            />

            {/* Main Modal Container (Pushes up smoothly) */}
            <motion.div 
              initial={{ opacity: 0, y: 40, scale: 0.98 }} 
              animate={{ opacity: 1, y: 0, scale: 1 }} 
              exit={{ opacity: 0, y: 20, scale: 0.98 }} 
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-6xl h-[80vh] flex flex-row z-10 pointer-events-auto shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)]"
            >
              
              {/* Close Button */}
              <motion.button 
                initial={{ opacity: 0, rotate: -90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: 90 }} transition={{ delay: 0.3, duration: 0.5 }}
                onClick={() => setSelectedProfile(null)}
                className="absolute -top-4 -right-12 z-[110] text-white/50 hover:text-white transition-colors"
              >
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all">✕</div>
              </motion.button>

              {/* Left Column: Image with Wipe Effect */}
              <div className="w-5/12 h-full relative flex-shrink-0 overflow-hidden rounded-l-3xl border border-white/10 border-r-0">
                {/* Slow Cinematic Zoom */}
                <motion.img 
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  src={selectedProfile.image} 
                  alt={selectedProfile.name}
                  className="w-full h-full object-cover"
                />
                {/* The "Curtain" Wipe Reveal */}
                <motion.div 
                  initial={{ x: "0%" }}
                  animate={{ x: "100%" }}
                  exit={{ x: "0%" }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 bg-zinc-950 z-10"
                />
              </div>

              {/* Right Column: Text Information */}
              <div className="w-7/12 h-full bg-zinc-950 rounded-r-3xl border border-white/10 overflow-y-auto no-scrollbar p-16 relative">
                
                {/* Staggered Text Container */}
                <motion.div 
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  <h3 className="text-6xl font-black uppercase tracking-tighter text-white leading-none mb-2">{selectedProfile.name}</h3>
                  <p className="text-indigo-400 text-xs uppercase tracking-[0.3em] font-bold mb-8">{selectedProfile.role}</p>
                  <p className="text-white/70 font-light leading-relaxed mb-10 text-base">{selectedProfile.bio}</p>

                  <div className="mb-10">
                    <div className="flex items-center gap-4 mb-6"><span className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold">Path & Influence</span><div className="flex-grow h-[1px] bg-white/5"></div></div>
                    <ul className="space-y-4">{selectedProfile.path.map((item, i) => (<li key={i} className="flex gap-4 text-white/70 font-light text-sm"><span className="text-indigo-500 text-xs mt-1">✦</span>{item}</li>))}</ul>
                    <p className="text-white/50 italic text-xs mt-6 border-l-2 border-indigo-500/30 pl-4">"This blend of traditional guidance and diverse international perspective shapes his voice — where technique serves music, and rhythm becomes language."</p>
                  </div>

                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <div className="flex items-center gap-4 mb-4"><span className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold">Distinction</span></div>
                      <p className="text-white/80 font-medium text-sm border border-white/10 bg-white/5 p-4 rounded-xl shadow-inner">{selectedProfile.credentials}</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-4 mb-4"><span className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold">The Artistry</span></div>
                      <p className="text-white/60 font-light text-sm leading-relaxed">{selectedProfile.artistry}</p>
                    </div>
                  </div>
                </motion.div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ========================================= */}
      {/* 2. MOBILE UI: THE SLIDING DRAWER          */}
      {/* ========================================= */}
      <AnimatePresence>
        {selectedProfile && !isDesktop && (
          <div className="fixed inset-0 z-[100] flex justify-end pointer-events-none md:hidden">
            
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm pointer-events-auto cursor-pointer"
              onClick={() => setSelectedProfile(null)}
            />

            <motion.div 
              initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="w-full h-full bg-zinc-950 relative z-10 pointer-events-auto overflow-y-auto no-scrollbar shadow-[-20px_0_50px_rgba(0,0,0,0.5)] flex flex-col"
            >
              <div className="absolute top-6 right-6 z-20">
                <button onClick={() => setSelectedProfile(null)} className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-md border border-white/20 flex items-center justify-center text-white/70 hover:bg-white hover:text-black hover:border-white transition-all">✕</button>
              </div>

              <div className="w-full h-[45vh] relative shrink-0">
                <img src={selectedProfile.image} alt={selectedProfile.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent"></div>
              </div>

              <div className="px-6 pb-16 -mt-10 relative z-10">
                <h3 className="text-4xl font-black uppercase tracking-tighter text-white leading-none mb-2">{selectedProfile.name}</h3>
                <p className="text-indigo-400 text-[10px] uppercase tracking-[0.3em] font-bold mb-8">{selectedProfile.role}</p>
                <p className="text-white/70 font-light leading-relaxed mb-10 text-sm">{selectedProfile.bio}</p>

                <div className="mb-10">
                  <div className="flex items-center gap-4 mb-6"><span className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold">Path & Influence</span><div className="flex-grow h-[1px] bg-white/5"></div></div>
                  <ul className="space-y-4">{selectedProfile.path.map((item, i) => (<li key={i} className="flex gap-4 text-white/70 font-light text-sm"><span className="text-indigo-500 text-xs mt-0.5">✦</span><span className="leading-relaxed">{item}</span></li>))}</ul>
                  <p className="text-white/50 italic text-xs mt-6 border-l-2 border-indigo-500/30 pl-4">"This blend of traditional guidance and diverse international perspective shapes his voice — where technique serves music, and rhythm becomes language."</p>
                </div>

                <div className="flex flex-col gap-8">
                  <div><span className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold block mb-4">Distinction</span><p className="text-white/80 font-medium text-sm border border-white/10 bg-white/5 p-4 rounded-xl">{selectedProfile.credentials}</p></div>
                  <div><span className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold block mb-4">The Artistry</span><p className="text-white/60 font-light text-sm leading-relaxed">{selectedProfile.artistry}</p></div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ========================================= */}
      {/* 3. THE MAIN PAGE GRID                     */}
      {/* ========================================= */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }} className="mb-12 md:mb-20">
          <div className="flex items-center gap-4 mb-4"><div className="w-8 h-[1px] bg-indigo-500"></div><h2 className="text-indigo-500 font-bold tracking-[0.4em] uppercase text-[10px] md:text-xs">The Lineup</h2></div>
          <h3 className="font-oswald text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-none text-white">Faculty.</h3>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {facultyData.map((member, index) => (
            <motion.div 
              key={member.id} 
              initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }} transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }} 
              onClick={() => setSelectedProfile(member)} 
              className="group relative aspect-[3/4] md:h-[60vh] rounded-2xl overflow-hidden bg-zinc-900 cursor-pointer border border-white/5"
            >
              {/* Removed layoutId to prevent lag */}
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-full object-cover transition-all duration-700 ease-out grayscale md:group-hover:grayscale-0 md:group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 w-full p-6 flex flex-col justify-end h-full">
                <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                  <h4 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter mb-1">{member.name}</h4>
                  <p className="text-indigo-400 text-[9px] uppercase tracking-[0.3em] font-bold md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 flex items-center gap-2">View Profile <span className="text-lg leading-none">→</span></p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}