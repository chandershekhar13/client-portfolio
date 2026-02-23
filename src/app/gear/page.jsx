"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "../../components/Navbar"; // Adjust path if needed
import Footer from "../../components/Footer"; // Adjust path if needed

// Expanded to 5 products as requested!
const products = [
  {
    id: "snare-01",
    name: "The Obsidian Snare",
    type: "Signature Hardware",
    price: "$850",
    color: "bg-indigo-600",
    description: "Machined from a single block of aircraft-grade aluminum. The Obsidian delivers a cracking, explosive attack with a completely controlled, dry decay.",
    specs: ["14\" x 6.5\" Custom Shell", "Die-Cast Hoops", "42-Strand Wires"],
    image: "/Gallery/IMG_2039.webp", // Used for the background/context shot
    transparentImage: "/Gallery/IMG_2039_transparent.png", // The cutout for the Hero stack
  },
  {
    id: "sticks-02",
    name: "Mark x Vic Firth",
    type: "Custom Artist Series",
    price: "$24",
    color: "bg-rose-600",
    description: "A hybrid stick designed for power and finesse. Thicker than a 5A in the shaft for heavy rimshots, but with an extended taper and a barrel tip.",
    specs: ["Hickory Wood", "Length: 16.25\"", "Diameter: 0.585\""],
    image: "/Gallery/IMG_5889.webp",
    transparentImage: "/Gallery/IMG_5889_transparent.png",
  },
  {
    id: "pad-03",
    name: "Reflex Practice Pad",
    type: "Training Equipment",
    price: "$65",
    color: "bg-emerald-600",
    description: "Dual-surface engineering. The top side offers realistic rebound for rudiment flow states, while the bottom side features high-density dead-foam.",
    specs: ["12\" Diameter", "Gum Rubber Top", "Neoprene Bottom"],
    image: "/Gallery/IMG_5919.webp",
    transparentImage: "/Gallery/IMG_5919_transparent.png",
  },
  {
    id: "cymbal-04",
    name: "Dark Matter Ride",
    type: "22\" Custom Wash",
    price: "$450",
    color: "bg-amber-600",
    description: "Hand-hammered and unlathed. This ride delivers a dark, complex wash with a cutting bell that pierces through even the heaviest metal mixes.",
    specs: ["22\" Diameter", "Unlathed Finish", "Hand-Hammered B20"],
    image: "/Gallery/cymbal_bg.webp", 
    transparentImage: "/Gallery/cymbal_transparent.png",
  },
  {
    id: "trigger-05",
    name: "Pulse Kick Trigger",
    type: "Electronic Hardware",
    price: "$120",
    color: "bg-cyan-600",
    description: "Ultra-fast response time with zero double-triggering. Clamps directly to any bass drum hoop for seamless hybrid acoustic/electronic tracking.",
    specs: ["Zero Latency", "Die-Cast Housing", "XLR/TRS Output"],
    image: "/Gallery/trigger_bg.webp",
    transparentImage: "/Gallery/trigger_transparent.png",
  }
];

// Sub-component for each massive product row (Kept your favorite design!)
function ProductSection({ product, index }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  const isEven = index % 2 === 0;
  const textX = useTransform(scrollYProgress, [0, 1], isEven ? ["5%", "-15%"] : ["-15%", "5%"]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const glowOpacity = useTransform(scrollYProgress, [0.3, 0.5, 0.7], [0, 0.4, 0]);

  return (
    <div id={product.id} ref={ref} className="relative w-full min-h-screen flex items-center py-24 md:py-32 overflow-hidden scroll-mt-24">
      <motion.div style={{ opacity: glowOpacity }} className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] md:w-[40vw] md:h-[40vw] rounded-full blur-[120px] pointer-events-none z-0 ${product.color}`} />

      <motion.div style={{ x: textX }} className="absolute top-1/2 -translate-y-1/2 whitespace-nowrap z-0 pointer-events-none opacity-40 mix-blend-overlay">
        <h2 className="text-[25vw] font-black uppercase tracking-tighter text-transparent select-none" style={{ WebkitTextStroke: "2px rgba(255,255,255,0.15)" }}>
          {product.name} • {product.name}
        </h2>
      </motion.div>

      <div className={`max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-0 relative z-10`}>
        <div className="w-full md:w-[60%] h-[50vh] md:h-[75vh] overflow-hidden rounded-[2rem] bg-zinc-900 border border-white/10 relative group shadow-[0_30px_60px_rgba(0,0,0,0.6)] z-10">
          <motion.img style={{ y: imageY }} src={product.image} alt={product.name} className="w-full h-[130%] object-cover grayscale opacity-80 transition-all duration-1000 group-hover:grayscale-0 group-hover:opacity-100" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"></div>
          <div className="absolute top-6 left-6 md:top-8 md:left-8 flex items-center gap-3 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
             <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
             <span className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-bold text-white">In Stock</span>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className={`w-full md:w-[50%] mt-8 md:mt-0 bg-white/[0.03] backdrop-blur-2xl border border-white/10 p-8 md:p-14 rounded-3xl shadow-2xl relative z-20 ${isEven ? 'md:-ml-[10%]' : 'md:-mr-[10%]'}`}
        >
          <div className="flex items-center gap-4 mb-6"><span className="text-indigo-400 font-bold tracking-[0.4em] uppercase text-[9px] md:text-[10px]">Item // 0{index + 1}</span><div className="h-[1px] w-12 bg-indigo-500/50"></div></div>
          <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white leading-[0.9] mb-4 drop-shadow-lg">{product.name}</h3>
          <p className="text-white/40 text-[10px] md:text-xs uppercase tracking-[0.4em] font-bold mb-8">{product.type}</p>
          <p className="text-white/70 font-light text-sm md:text-base leading-relaxed mb-10">{product.description}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {product.specs.map((spec, i) => (<div key={i} className="flex items-start gap-3 border-b border-white/5 pb-2"><span className="text-indigo-500 text-[10px] mt-0.5">✧</span><span className="text-white/60 text-[10px] md:text-[11px] uppercase tracking-[0.1em]">{spec}</span></div>))}
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-8 border-t border-white/10">
            <span className="text-4xl md:text-5xl font-light text-white tracking-tight">{product.price}</span>
            <button className="w-full sm:w-auto relative group overflow-hidden rounded-full bg-white text-black px-8 py-4 flex items-center justify-center gap-3 transition-transform active:scale-95">
              <span className="relative z-10 text-[10px] uppercase tracking-[0.3em] font-bold">Acquire Now</span><span className="relative z-10 transform group-hover:translate-x-1 transition-transform">→</span>
              <div className="absolute inset-0 bg-indigo-500 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[0.22,1,0.36,1]"></div>
              <span className="absolute z-20 text-[10px] uppercase tracking-[0.3em] font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center gap-3 w-full h-full left-0 top-0 justify-center">Acquire Now →</span>
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default function GearPage() {
  
  const scrollToProduct = (id) => {
    const element = document.getElementById(id);
    if (element) {
      // Offset by 90px to account for the fixed Navbar
      const offset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  // Pre-calculated fan physics for the 5 products
  const stackPhysics = [
    { rotate: -20, x: -200, y: 40, zIndex: 10 },
    { rotate: -10, x: -100, y: 15, zIndex: 20 },
    { rotate: 0, x: 0, y: 0, zIndex: 30 },
    { rotate: 10, x: 100, y: 15, zIndex: 40 },
    { rotate: 20, x: 200, y: 40, zIndex: 50 },
  ];

  return (
    <main className="bg-black min-h-screen text-white">
      {/* Explicitly adding Navbar back to ensure it loads */}
      <Navbar />
      
      {/* MASSIVE INTERACTIVE HERO STACK */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden border-b border-white/10 pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.1)_0%,transparent_60%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)] pointer-events-none" />

        <div className="relative z-20 text-center mb-16">
           <h1 className="text-indigo-400 font-bold tracking-[0.6em] uppercase text-[10px] md:text-xs mb-4">Select Your Weapon</h1>
           <p className="text-white/40 text-xs uppercase tracking-widest">Click to inspect hardware</p>
        </div>

        {/* The Interactive Fan */}
        <div className="relative w-full max-w-3xl h-[400px] flex items-center justify-center group/stack">
          {products.map((product, index) => {
            const physics = stackPhysics[index];
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 200, scale: 0.5 }}
                animate={{ 
                  opacity: 1, 
                  y: physics.y, 
                  x: physics.x, 
                  rotate: physics.rotate,
                  scale: 1
                }}
                transition={{ 
                  type: "spring", 
                  stiffness: 100, 
                  damping: 15, 
                  delay: index * 0.1 
                }}
                whileHover={{ 
                  y: physics.y - 40, 
                  scale: 1.1, 
                  rotate: 0, 
                  zIndex: 100,
                  transition: { duration: 0.3 }
                }}
                onClick={() => scrollToProduct(product.id)}
                className="absolute w-[200px] md:w-[280px] aspect-[3/4] cursor-pointer drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
                style={{ zIndex: physics.zIndex }}
              >
                {/* Transparent Product Image Container */}
                <div className="w-full h-full bg-zinc-900/40 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center p-4 overflow-hidden relative">
                  {/* Glowing backdrop behind the transparent image */}
                  <div className={`absolute inset-0 opacity-30 blur-2xl ${product.color}`}></div>
                  
                  {/* IMPORTANT: Ensure transparentImage points to a PNG with no background */}
                  <img 
                    src={product.transparentImage} 
                    alt={product.name}
                    className="w-full h-full object-contain relative z-10 drop-shadow-2xl"
                  />
                  
                  {/* Subtle Text Tag at the bottom of the card */}
                  <div className="absolute bottom-4 left-0 w-full text-center z-20">
                    <span className="bg-black/80 backdrop-blur text-white text-[9px] uppercase tracking-[0.2em] font-bold px-3 py-1.5 rounded-full border border-white/10 shadow-lg">
                      {product.name}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* THE LOOKBOOK FEED */}
      <section className="flex flex-col relative z-20">
        {products.map((product, index) => (
          <ProductSection key={product.id} product={product} index={index} />
        ))}
      </section>

      {/* Explicitly adding Footer back */}
      <Footer />
    </main>
  );
}