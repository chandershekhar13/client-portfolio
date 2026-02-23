"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "../../components/Navbar"; // Adjust path if needed
import Footer from "../../components/Footer"; // Adjust path if needed

const products = [
  {
    id: "01",
    name: "The Obsidian Snare",
    type: "Signature Hardware",
    price: "$850",
    description: "Machined from a single block of aircraft-grade aluminum. The Obsidian delivers a cracking, explosive attack with a completely controlled, dry decay. Engineered specifically for high-end studio tracking.",
    specs: ["14\" x 6.5\" Custom Shell", "Die-Cast Hoops", "42-Strand Wires", "Matte Black Anodized Finish"],
    image: "/Gallery/IMG_2039.webp", // Swap with actual snare photo
  },
  {
    id: "02",
    name: "Mark x Vic Firth",
    type: "Custom Artist Series",
    price: "$24",
    description: "A hybrid stick designed for power and finesse. Thicker than a 5A in the shaft for heavy rimshots, but with an extended taper and a barrel tip for articulate, glassy ride cymbal definition.",
    specs: ["Hickory Wood", "Length: 16.25\"", "Diameter: 0.585\"", "Tear-Drop Barrel Tip"],
    image: "/Gallery/IMG_5889.webp", // Swap with actual sticks photo
  },
  {
    id: "03",
    name: "Reflex Practice Pad",
    type: "Training Equipment",
    price: "$65",
    description: "Dual-surface engineering. The top side offers realistic rebound for rudiment flow states, while the bottom side features high-density dead-foam to build raw wrist strength and endurance.",
    specs: ["12\" Diameter", "Gum Rubber Top", "Neoprene Bottom", "Snare Stand Mountable"],
    image: "/Gallery/IMG_5919.webp", // Swap with actual pad photo
  }
];

// Sub-component for each massive product row
function ProductSection({ product, index }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Parallax Text Magic: Moves left or right depending on if it's an even or odd row
  const isEven = index % 2 === 0;
  const textX = useTransform(scrollYProgress, [0, 1], isEven ? ["10%", "-20%"] : ["-20%", "10%"]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div ref={ref} className="relative w-full min-h-screen flex items-center py-32 overflow-hidden border-t border-white/5">
      
      {/* 1. The Massive Parallax Watermark */}
      <motion.div 
        style={{ x: textX }}
        className="absolute top-1/2 -translate-y-1/2 whitespace-nowrap z-0 pointer-events-none opacity-[0.03]"
      >
        <h2 className="text-[15vw] font-black uppercase tracking-tighter text-white select-none">
          {product.name} • {product.name} • 
        </h2>
      </motion.div>

      <div className={`max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-16 lg:gap-32 relative z-10`}>
        
        {/* 2. The Cinematic Image Container */}
        <div className="w-full md:w-1/2 h-[60vh] md:h-[80vh] overflow-hidden rounded-2xl md:rounded-[2rem] bg-zinc-900 border border-white/10 relative group shadow-2xl">
          <motion.img 
            style={{ y: imageY }}
            src={product.image} 
            alt={product.name}
            className="w-full h-[120%] object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
          />
          {/* Subtle inner shadow/vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          <div className="absolute bottom-6 left-6 flex items-center gap-3">
             <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
             <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-white shadow-black drop-shadow-md">In Stock</span>
          </div>
        </div>

        {/* 3. The Editorial Sticky Details */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          
          <div className="flex items-center gap-4 mb-6">
            <span className="text-indigo-500 font-bold tracking-[0.4em] uppercase text-[10px]">
              Item // {product.id}
            </span>
            <div className="h-[1px] w-12 bg-indigo-500/50"></div>
          </div>

          <h3 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white leading-[0.9] mb-4">
            {product.name}
          </h3>
          
          <p className="text-white/40 text-xs md:text-sm uppercase tracking-[0.3em] font-medium mb-10">
            {product.type}
          </p>

          <p className="text-white/70 font-light text-base md:text-lg leading-relaxed mb-12 max-w-lg">
            {product.description}
          </p>

          {/* Specs Grid */}
          <div className="grid grid-cols-2 gap-4 mb-12 max-w-lg">
            {product.specs.map((spec, i) => (
              <div key={i} className="border-l-2 border-indigo-500/30 pl-3 py-1">
                <span className="text-white/80 text-[10px] md:text-xs uppercase tracking-[0.1em]">{spec}</span>
              </div>
            ))}
          </div>

          {/* Price & Action Button */}
          <div className="flex items-center gap-8 border-t border-white/10 pt-8 mt-auto">
            <span className="text-3xl md:text-4xl font-light text-white tracking-tight">
              {product.price}
            </span>
            
            <button className="relative group overflow-hidden rounded-full bg-white text-black px-8 py-4 flex items-center gap-3 transition-transform active:scale-95">
              <span className="relative z-10 text-[10px] uppercase tracking-[0.3em] font-bold">Acquire Hardware</span>
              <span className="relative z-10 transform group-hover:translate-x-1 transition-transform">→</span>
              {/* Button Hover Glow */}
              <div className="absolute inset-0 bg-indigo-400 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[0.22,1,0.36,1]"></div>
              <span className="absolute z-20 text-[10px] uppercase tracking-[0.3em] font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center gap-3 w-full h-full left-0 top-0 justify-center">
                Acquire Hardware →
              </span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default function GearPage() {
  return (
    <main className="bg-black min-h-screen text-white">
      <Navbar />
      
      {/* PAGE HERO */}
      <section className="relative pt-48 pb-24 md:pt-64 md:pb-32 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
        {/* Subtle Background Glow */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[80vw] h-[300px] bg-indigo-600/20 blur-[150px] pointer-events-none rounded-full" />
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 flex flex-col items-center text-center"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-[1px] bg-indigo-500"></div>
            <h1 className="text-indigo-500 font-bold tracking-[0.5em] uppercase text-[10px] md:text-xs">
              The Vault
            </h1>
            <div className="w-12 h-[1px] bg-indigo-500"></div>
          </div>
          
          <h2 className="font-oswald text-6xl md:text-8xl lg:text-[10rem] font-black uppercase tracking-tighter leading-none text-white mb-8">
            Studio <br className="md:hidden"/> Gear.
          </h2>
          
          <p className="text-white/50 font-light text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Every piece of hardware here is road-tested, studio-approved, and built to the exact specifications required for high-end professional tracking. No compromises.
          </p>
        </motion.div>
      </section>

      {/* PRODUCT LIST */}
      <section className="flex flex-col">
        {products.map((product, index) => (
          <ProductSection key={product.id} product={product} index={index} />
        ))}
      </section>

      <Footer />
    </main>
  );
}