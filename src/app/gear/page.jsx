"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../../components/Navbar"; 
import Footer from "../../components/Footer"; 

const products = [
  {
    id: "gear-01",
    name: "Meinl Marshmallow Pad",
    type: "6\" Practice Pad (Sea Foam)",
    price: "Inquire", 
    description: "Practice quietly and build muscle at any hour. Features a specially formulated, super-thick foam surface that provides realistic rebound with ultra-low volume.",
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
    description: "A hybrid stick designed for power and finesse. Thicker than a 5A in the shaft for heavy rimshots, but with an extended taper and a barrel tip.",
    specs: ["Hickory Wood", "Length: 16.25\"", "Diameter: 0.585\""],
    images: ["/Gallery/IMG_5889.webp"]
  },
  {
    id: "pad-03",
    name: "Reflex Practice Pad",
    type: "Training Equipment",
    price: "$65",
    description: "Dual-surface engineering. The top side offers realistic rebound for rudiment flow states, while the bottom side features high-density dead-foam.",
    specs: ["12\" Diameter", "Gum Rubber Top", "Neoprene Bottom"],
    images: ["/Gallery/IMG_5919.webp"]
  },
  {
    id: "cymbal-04",
    name: "Dark Matter Ride",
    type: "22\" Custom Wash",
    price: "$450",
    description: "Hand-hammered and unlathed. This ride delivers a dark, complex wash with a cutting bell that pierces through even the heaviest metal mixes.",
    specs: ["22\" Diameter", "Unlathed Finish", "Hand-Hammered B20"],
    images: ["/Gallery/cymbal_bg.webp"]
  },
  {
    id: "trigger-05",
    name: "Pulse Kick Trigger",
    type: "Electronic Hardware",
    price: "$120",
    description: "Ultra-fast response time with zero double-triggering. Clamps directly to any bass drum hoop for seamless hybrid acoustic/electronic tracking.",
    specs: ["Zero Latency", "Die-Cast Housing", "XLR/TRS Output"],
    images: ["/Gallery/trigger_bg.webp"]
  }
];

function ProductCard({ product, index, openModal }) {
  const [currentImage, setCurrentImage] = useState(0);
  const isEven = index % 2 === 0;

  const nextSlide = () => setCurrentImage((prev) => (prev + 1) % product.images.length);
  const prevSlide = () => setCurrentImage((prev) => (prev === 0 ? product.images.length - 1 : prev - 1));

  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full relative group"
    >
      <div className="absolute -inset-[1px] bg-gradient-to-r from-indigo-500/50 via-purple-500/50 to-indigo-500/50 rounded-[2.5rem] opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-700 pointer-events-none"></div>

      <div className={`relative bg-[#08080c] border border-white/10 rounded-[2.5rem] p-4 md:p-6 flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 overflow-hidden shadow-2xl`}>
        
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.05)_0%,transparent_50%)] pointer-events-none"></div>

        {/* 1. The Lightbox Display (Hover effects removed) */}
        <div 
          className="w-full lg:w-[55%] bg-white rounded-[1.5rem] aspect-square md:aspect-[4/3] relative flex items-center justify-center cursor-zoom-in overflow-hidden shadow-inner"
          onClick={() => openModal(product.images, currentImage)}
        >
          <AnimatePresence mode="wait">
            <motion.img 
              key={currentImage}
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}
              src={product.images[currentImage]} 
              alt={product.name}
              className="absolute inset-0 w-full h-full object-contain drop-shadow-xl" 
            />
          </AnimatePresence>

          <div className="absolute top-6 left-6 flex items-center gap-3 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full border border-black/10 z-20 shadow-sm pointer-events-none">
             <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)] animate-pulse"></div>
             <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-black">In Stock</span>
          </div>

          {product.images.length > 1 && (
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 z-20" onClick={(e) => e.stopPropagation()}>
              <div className="flex items-center bg-black/90 backdrop-blur-md border border-white/10 rounded-full p-1 shadow-2xl">
                <button onClick={prevSlide} className="w-10 h-10 rounded-full flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all">←</button>
                <div className="w-[1px] h-4 bg-white/20 mx-1"></div>
                <button onClick={nextSlide} className="w-10 h-10 rounded-full flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all">→</button>
              </div>
            </div>
          )}
        </div>

        {/* 2. The Dark Dossier */}
        <div className="w-full lg:w-[45%] flex flex-col justify-center py-4 lg:py-8 pr-4 lg:pr-8 relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-indigo-400 font-bold tracking-[0.4em] uppercase text-[9px]">Item // 0{index + 1}</span>
            <div className="h-[1px] w-12 bg-indigo-500/30"></div>
          </div>
          
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-white leading-[0.9] mb-4 drop-shadow-lg">
            {product.name}
          </h3>
          
          <p className="text-indigo-300 text-[10px] uppercase tracking-[0.4em] font-bold mb-8">
            {product.type}
          </p>
          
          <p className="text-white/70 font-light text-sm md:text-base leading-relaxed mb-10">
            {product.description}
          </p>
          
          <div className="flex flex-col gap-3 mb-10">
            {product.specs.map((spec, i) => (
              <div key={i} className="flex items-center gap-4 border-b border-white/5 pb-3">
                <span className="text-indigo-500 text-[10px]">✦</span>
                <span className="text-white/80 text-[11px] uppercase tracking-[0.1em]">{spec}</span>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-6 border-t border-white/10">
            <span className="text-3xl font-light text-white tracking-tight">{product.price}</span>
            
           <a href="/#contact" className="relative group/btn overflow-hidden rounded-full bg-white px-8 py-4 flex items-center justify-center transition-transform active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
  
  {/* The Indigo Sliding Background */}
  <div className="absolute inset-0 bg-indigo-500 translate-y-[100%] group-hover/btn:translate-y-0 transition-transform duration-500 ease-[0.22,1,0.36,1]"></div>
  
  {/* Base Layer (Black Text) - Fades OUT on hover */}
  <div className="relative z-10 flex items-center gap-3 text-black opacity-100 group-hover/btn:opacity-0 transition-opacity duration-300">
    <span className="text-[10px] uppercase tracking-[0.3em] font-bold whitespace-nowrap">Inquire To Order</span>
    {/* Arrow animates slightly to the right */}
    <span className="transform transition-transform duration-500 group-hover/btn:translate-x-1">→</span>
  </div>

  {/* Hover Layer (White Text) - Fades IN on hover */}
  <div className="absolute inset-0 z-20 flex items-center justify-center gap-3 text-white opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 pointer-events-none">
    <span className="text-[10px] uppercase tracking-[0.3em] font-bold whitespace-nowrap">Inquire To Order</span>
    {/* Arrow is pre-shifted to match the final position of the black arrow */}
    <span className="transform translate-x-1">→</span>
  </div>
  
</a>
          </div>
        </div>

      </div>
    </motion.div>
  );
}

export default function GearPage() {
  const [modalData, setModalData] = useState({ isOpen: false, images: [], currentIndex: 0 });

  const openModal = (images, startIndex) => setModalData({ isOpen: true, images, currentIndex: startIndex });
  const closeModal = () => setModalData((prev) => ({ ...prev, isOpen: false }));
  const nextModalSlide = () => setModalData((prev) => ({ ...prev, currentIndex: (prev.currentIndex + 1) % prev.images.length }));
  const prevModalSlide = () => setModalData((prev) => ({ ...prev, currentIndex: prev.currentIndex === 0 ? prev.images.length - 1 : prev.currentIndex - 1 }));

  useEffect(() => {
    if (modalData.isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";

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
    <main className="bg-[#030305] min-h-screen text-white relative">
      
      <div className="fixed inset-0 z-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,#11111a_0%,#030305_100%)]"></div>
      <div className="fixed inset-0 z-0 pointer-events-none bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_10%,transparent_100%)]"></div>

      <Navbar />
      
      <section className="relative pt-40 pb-20 md:pt-56 md:pb-32 border-b border-white/5 z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
            <h1 className="text-indigo-400 font-bold tracking-[0.5em] uppercase text-[10px] mb-6 flex items-center justify-center gap-4">
               <span className="w-8 h-[1px] bg-indigo-500/50 hidden md:block"></span>
               Exclusive Hardware
               <span className="w-8 h-[1px] bg-indigo-500/50 hidden md:block"></span>
            </h1>
            <h2 className="text-6xl md:text-8xl lg:text-[10rem] font-black uppercase tracking-tighter leading-[0.85] text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">
              THE <br className="md:hidden" /> VAULT.
            </h2>
            <p className="mt-8 text-white/40 text-xs uppercase tracking-[0.3em] max-w-lg mx-auto leading-relaxed hidden md:block">
               Studio-grade equipment. Road-tested. Inspected for precision.
             </p>
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 max-w-7xl mx-auto px-4 md:px-12 py-16 md:py-32 flex flex-col gap-12 md:gap-24">
        {products.map((product, index) => (
          <ProductCard key={product.id} product={product} index={index} openModal={openModal} />
        ))}
      </section>

      <Footer />

      <AnimatePresence>
        {modalData.isOpen && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999999] bg-[#05050a]/95 backdrop-blur-xl flex items-center justify-center p-4 cursor-zoom-out"
            onClick={closeModal}
          >
            <button onClick={(e) => { e.stopPropagation(); closeModal(); }} className="absolute top-6 right-6 md:top-10 md:right-10 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors z-[1000000]">
              ✕
            </button>
            <img src={modalData.images[modalData.currentIndex]} className="w-full h-full object-contain max-w-7xl mx-auto drop-shadow-2xl" alt="Fullscreen View" />
            
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