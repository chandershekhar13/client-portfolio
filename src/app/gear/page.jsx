"use client";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence, useInView } from "framer-motion";
import Navbar from "../../components/Navbar"; 
import Footer from "../../components/Footer"; 

const products = [
  {
    id: "gear-01",
    name: "Meinl Marshmallow Pad",
    type: "6\" Practice Pad (Sea Foam)",
    price: "Inquire", 
    color: "bg-teal-600",
    description: "Practice quietly and build muscle at any hour. Features a specially formulated, super-thick foam surface that provides realistic rebound with ultra-low volume. Work on rudiments without disturbing anyone around you.",
    specs: ["6\" Diameter", "Marshmallow Foam Top", "Cymbal Stand Mountable", "Non-slip Composite Base"],
    images: [
      "/gears/gear1/1.webp",
      "/gears/gear1/2.webp",
      "/gears/gear1/3.webp",
      "/gears/gear1/4.webp"
    ]
  },
  {
    id: "sticks-02",
    name: "Mark x Vic Firth",
    type: "Custom Artist Series",
    price: "$24",
    color: "bg-rose-600",
    description: "A hybrid stick designed for power and finesse. Thicker than a 5A in the shaft for heavy rimshots, but with an extended taper and a barrel tip.",
    specs: ["Hickory Wood", "Length: 16.25\"", "Diameter: 0.585\""],
    images: ["/Gallery/IMG_5889.webp"]
  },
  {
    id: "pad-03",
    name: "Reflex Practice Pad",
    type: "Training Equipment",
    price: "$65",
    color: "bg-emerald-600",
    description: "Dual-surface engineering. The top side offers realistic rebound for rudiment flow states, while the bottom side features high-density dead-foam.",
    specs: ["12\" Diameter", "Gum Rubber Top", "Neoprene Bottom"],
    images: ["/Gallery/IMG_5919.webp"]
  },
  {
    id: "cymbal-04",
    name: "Dark Matter Ride",
    type: "22\" Custom Wash",
    price: "$450",
    color: "bg-amber-600",
    description: "Hand-hammered and unlathed. This ride delivers a dark, complex wash with a cutting bell that pierces through even the heaviest metal mixes.",
    specs: ["22\" Diameter", "Unlathed Finish", "Hand-Hammered B20"],
    images: ["/Gallery/cymbal_bg.webp"]
  },
  {
    id: "trigger-05",
    name: "Pulse Kick Trigger",
    type: "Electronic Hardware",
    price: "$120",
    color: "bg-cyan-600",
    description: "Ultra-fast response time with zero double-triggering. Clamps directly to any bass drum hoop for seamless hybrid acoustic/electronic tracking.",
    specs: ["Zero Latency", "Die-Cast Housing", "XLR/TRS Output"],
    images: ["/Gallery/trigger_bg.webp"]
  }
];

function ProductSection({ product, index, openModal }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 }); 
  
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const [currentImage, setCurrentImage] = useState(0);

  const isEven = index % 2 === 0;
  const textX = useTransform(scrollYProgress, [0, 1], isEven ? ["5%", "-15%"] : ["-15%", "5%"]);
  const glowOpacity = useTransform(scrollYProgress, [0.3, 0.5, 0.7], [0, 0.4, 0]);

  const nextSlide = () => setCurrentImage((prev) => (prev + 1) % product.images.length);
  const prevSlide = () => setCurrentImage((prev) => (prev === 0 ? product.images.length - 1 : prev - 1));

  // Local Keyboard navigation for the in-line slider
  useEffect(() => {
    const handleKeyDown = (e) => {
      // If modal is open, let the modal handle the keys!
      if (!isInView || document.body.style.overflow === "hidden") return;
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isInView, product.images.length]);

  return (
    <div id={product.id} ref={ref} className="relative w-full min-h-screen flex items-center py-24 md:py-32 overflow-hidden scroll-mt-24">
      
      <motion.div style={{ opacity: glowOpacity }} className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] md:w-[40vw] md:h-[40vw] rounded-full blur-[120px] pointer-events-none z-0 ${product.color}`} />
      <motion.div style={{ x: textX }} className="absolute top-1/2 -translate-y-1/2 whitespace-nowrap z-0 pointer-events-none opacity-40 mix-blend-overlay">
        <h2 className="text-[25vw] font-black uppercase tracking-tighter text-transparent select-none" style={{ WebkitTextStroke: "2px rgba(255,255,255,0.15)" }}>
          {product.name} • {product.name}
        </h2>
      </motion.div>

      <div className={`max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-0 relative z-10`}>
        
        {/* The White Product Display Box */}
        <div className="w-full md:w-[60%] h-[50vh] md:h-[75vh] overflow-hidden rounded-[2rem] bg-white relative group shadow-[0_30px_60px_rgba(0,0,0,0.6)] z-10 flex items-center justify-center p-8 md:p-16">
          <div className="relative w-full h-full cursor-zoom-in" onClick={() => openModal(product.images, currentImage)}>
            <AnimatePresence mode="wait">
              <motion.img 
                key={currentImage}
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}
                loading={currentImage === 0 ? "eager" : "lazy"}
                src={product.images[currentImage]} 
                alt={`${product.name}`} 
                className="absolute inset-0 w-full h-full object-contain drop-shadow-xl" 
              />
            </AnimatePresence>
          </div>
          
          <div className={`absolute top-6 md:top-8 ${isEven ? 'left-6 md:left-8' : 'right-6 md:right-8'} flex items-center gap-3 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full border border-black/10 z-20 shadow-sm pointer-events-none`}>
             <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
             <span className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-bold text-black">In Stock</span>
          </div>

          {/* HUD Control Pill */}
          {product.images.length > 1 && (
            <div className={`absolute bottom-6 md:bottom-8 ${isEven ? 'left-6 md:left-8' : 'right-6 md:right-8'} flex items-center gap-4 z-20`} onClick={(e) => e.stopPropagation()}>
              <div className="flex items-center bg-black/90 backdrop-blur-xl border border-white/10 rounded-full p-1 shadow-2xl">
                <button onClick={prevSlide} className="w-10 h-10 rounded-full flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all">←</button>
                <div className="w-[1px] h-4 bg-white/20 mx-1"></div>
                <button onClick={nextSlide} className="w-10 h-10 rounded-full flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all">→</button>
              </div>
              <div className="flex gap-2">
                {product.images.map((_, i) => (
                  <button key={i} onClick={() => setCurrentImage(i)} className={`h-1.5 rounded-full transition-all duration-300 ${i === currentImage ? 'w-8 bg-indigo-600' : 'w-2 bg-black/20 hover:bg-black/40'}`} />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* FIX 2: True Dark Frosted Glass. Highly blurred, translucent, and expensive-looking. */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className={`w-full md:w-[50%] mt-8 md:mt-0 bg-black/30 backdrop-blur-2xl border border-white/10 p-8 md:p-14 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] relative z-20 ${isEven ? 'md:-ml-[10%]' : 'md:-mr-[10%]'}`}
        >
          <div className="flex items-center gap-4 mb-6 drop-shadow-md"><span className="text-indigo-400 font-bold tracking-[0.4em] uppercase text-[9px] md:text-[10px]">Item // 0{index + 1}</span><div className="h-[1px] w-12 bg-indigo-500/50"></div></div>
          <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white leading-[0.9] mb-4 drop-shadow-lg">{product.name}</h3>
          <p className="text-white/60 text-[10px] md:text-xs uppercase tracking-[0.4em] font-bold mb-8 drop-shadow-md">{product.type}</p>
          <p className="text-white/90 font-light text-sm md:text-base leading-relaxed mb-10 drop-shadow-md">{product.description}</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {product.specs.map((spec, i) => (<div key={i} className="flex items-start gap-3 border-b border-white/5 pb-2 drop-shadow-md"><span className="text-indigo-500 text-[10px] mt-0.5">✧</span><span className="text-white/90 text-[10px] md:text-[11px] uppercase tracking-[0.1em]">{spec}</span></div>))}
          </div>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-8 border-t border-white/10">
            <span className="text-4xl md:text-5xl font-light text-white tracking-tight drop-shadow-md">{product.price}</span>
            <a href="/#contact" className="w-full sm:w-auto relative group overflow-hidden rounded-full bg-white text-black px-8 py-4 flex items-center justify-center gap-3 transition-transform active:scale-95 shadow-lg">
              <span className="relative z-10 text-[10px] uppercase tracking-[0.3em] font-bold whitespace-nowrap">Inquire To Order</span>
              <span className="relative z-10 transform group-hover:translate-x-1 transition-transform">→</span>
              <div className="absolute inset-0 bg-indigo-500 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[0.22,1,0.36,1]"></div>
              <span className="absolute z-20 text-[10px] uppercase tracking-[0.3em] font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center gap-3 w-full h-full left-0 top-0 justify-center">Inquire To Order →</span>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}


export default function GearPage() {
  const [modalData, setModalData] = useState({ isOpen: false, images: [], currentIndex: 0 });

  const openModal = (images, startIndex) => {
    setModalData({ isOpen: true, images, currentIndex: startIndex });
  };

  const closeModal = () => setModalData((prev) => ({ ...prev, isOpen: false }));
  const nextModalSlide = () => setModalData((prev) => ({ ...prev, currentIndex: (prev.currentIndex + 1) % prev.images.length }));
  const prevModalSlide = () => setModalData((prev) => ({ ...prev, currentIndex: prev.currentIndex === 0 ? prev.images.length - 1 : prev.currentIndex - 1 }));

  useEffect(() => {
    if (modalData.isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    const handleKeyDown = (e) => {
      if (!modalData.isOpen) return;
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowRight") nextModalSlide();
      if (e.key === "ArrowLeft") prevModalSlide();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [modalData.isOpen, modalData.images.length]);

  return (
    <main className="bg-[#05050a] min-h-screen text-white relative">
      
      {/* ========================================= */}
      {/* BOLD BACKGROUND: THE BLUEPRINT & AURORA   */}
      {/* ========================================= */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden flex items-center justify-center">
        
        {/* 1. The Breathing Aurora Orbs */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }} 
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} 
          className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-indigo-600 blur-[150px] rounded-full mix-blend-screen" 
        />
        <motion.div 
          animate={{ scale: [1, 1.3, 1], opacity: [0.05, 0.15, 0.05] }} 
          transition={{ duration: 10, repeat: Infinity, delay: 2, ease: "easeInOut" }} 
          className="absolute bottom-[-20%] right-[-10%] w-[70vw] h-[70vw] bg-rose-600 blur-[150px] rounded-full mix-blend-screen" 
        />

        {/* 2. The Architectural Blueprint Grid (Highly visible, structured tech vibe) */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:6rem_6rem]"></div>
        
        {/* 3. Vignette Shadow (Darkens the edges so the products in the center pop) */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#05050a_100%)]"></div>
      </div>
      {/* ========================================= */}

      <Navbar />
      
      <section className="relative h-[65vh] md:h-[80vh] flex flex-col items-center justify-center overflow-hidden border-b border-white/10 pt-20">
        <div className="relative z-20 text-center px-4 w-full">
           <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}>
             <h1 className="text-indigo-400 font-bold tracking-[0.6em] uppercase text-[9px] md:text-xs mb-6 flex items-center justify-center gap-4">
               <span className="w-8 h-[1px] bg-indigo-500/50 hidden md:block"></span>
               Exclusive Hardware
               <span className="w-8 h-[1px] bg-indigo-500/50 hidden md:block"></span>
             </h1>
             <h2 className="text-6xl md:text-8xl lg:text-[11rem] font-black uppercase tracking-tighter leading-[0.85] text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">
               THE <br className="md:hidden" /> VAULT.
             </h2>
             <p className="mt-8 text-white/40 text-xs uppercase tracking-[0.3em] max-w-lg mx-auto leading-relaxed hidden md:block">
               Studio-grade equipment. Road-tested. Inspected for precision.
             </p>
           </motion.div>
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }} className="absolute bottom-12 flex flex-col items-center gap-4 z-20">
          <span className="text-[9px] uppercase tracking-[0.4em] text-white/30 font-bold">Scroll to Inspect</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/30 to-transparent"></div>
        </motion.div>
      </section>

      {/* Main Content Sections */}
      <section className="flex flex-col relative z-20">
        {products.map((product, index) => (
          <ProductSection key={product.id} product={product} index={index} openModal={openModal} />
        ))}
      </section>

      <Footer />

      {/* THE ROOT FULLSCREEN MODAL */}
      <AnimatePresence>
        {modalData.isOpen && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999999] bg-[#05050a]/95 backdrop-blur-xl flex items-center justify-center p-4 cursor-zoom-out"
            onClick={closeModal}
          >
            <button 
              onClick={(e) => { e.stopPropagation(); closeModal(); }} 
              className="absolute top-6 right-6 md:top-10 md:right-10 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors z-[1000000]"
            >
              ✕
            </button>
            
            <img 
              src={modalData.images[modalData.currentIndex]} 
              className="w-full h-full object-contain max-w-7xl mx-auto drop-shadow-2xl" 
              alt="Fullscreen View" 
            />
            
            {modalData.images.length > 1 && (
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-4 z-[1000000]" onClick={(e) => e.stopPropagation()}>
                <button onClick={prevModalSlide} className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all">←</button>
                <button onClick={nextModalSlide} className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all">→</button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
