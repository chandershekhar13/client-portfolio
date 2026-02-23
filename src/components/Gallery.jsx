"use client";
import { useRef, useEffect, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const originalImages = [
  "/Gallery/IMG_2039.webp", "/Gallery/IMG_1359.webp", "/Gallery/IMG_5889.webp",
  "/Gallery/IMG_2057.webp", "/Gallery/IMG_1128.webp", "/Gallery/IMG_5919.webp",
  "/Gallery/IMG_1276.webp", "/Gallery/IMG_2040.webp", "/Gallery/IMG_1340.webp",
  "/Gallery/IMG_2063.webp", "/Gallery/IMG_5892.webp", "/Gallery/IMG_1342.webp",
  "/Gallery/IMG_4214.webp", "/Gallery/IMG_2038.webp", "/Gallery/IMG_1224.webp",
  "/Gallery/IMG_5897.webp", "/Gallery/IMG_2055.webp", "/Gallery/IMG_1363.webp",
  "/Gallery/IMG_5933.webp", "/Gallery/IMG_1343.webp", "/Gallery/IMG_5895.webp",
  "/Gallery/IMG_2059.webp", "/Gallery/IMG_1142.webp", "/Gallery/IMG_1401.webp",
  "/Gallery/IMG_5890.webp", "/Gallery/IMG_2037.webp", "/Gallery/IMG_5923.webp",
  "/Gallery/IMG_1341.webp", "/Gallery/IMG_5931.webp", "/Gallery/IMG_2060.webp",
  "/Gallery/IMG_5934.webp", "/Gallery/IMG_5935.webp"
];

const images = [...originalImages, ...originalImages, ...originalImages];

export default function Gallery() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px 0px 0px 0px" });

  // Tracking the exact index to power the Shared Element Transition
  const [activeIndex, setActiveIndex] = useState(null);

  const scrollRef = useRef(null);
  const isDragging = useRef(false);
  const hasDragged = useRef(false); 
  const isTouching = useRef(false);
  const startX = useRef(0);
  const scrollLeftStart = useRef(0);

  useEffect(() => {
    if (activeIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [activeIndex]);

  useEffect(() => {
    if (!isInView) return;
    const scrollContainer = scrollRef.current;
    if (scrollContainer.scrollLeft === 0) {
      scrollContainer.scrollLeft = scrollContainer.scrollWidth / 2;
    }

    let animationFrameId;

    const loop = () => {
      if (!scrollContainer) return;

      // Pause scroll when lightbox is open
      if (!isDragging.current && !isTouching.current && activeIndex === null) {
        scrollContainer.scrollLeft += 1.5; 
      }

      const halfWidth = scrollContainer.scrollWidth / 2;

      if (scrollContainer.scrollLeft >= halfWidth) {
        scrollContainer.scrollLeft -= halfWidth;
        if (isDragging.current) scrollLeftStart.current -= halfWidth;
      } else if (scrollContainer.scrollLeft <= 0) {
        scrollContainer.scrollLeft += halfWidth;
        if (isDragging.current) scrollLeftStart.current += halfWidth;
      }

      if (window.innerWidth < 768) {
         const centerPoint = scrollContainer.scrollLeft + (window.innerWidth / 2);
         const imageNodes = scrollContainer.children;

         for (let i = 0; i < imageNodes.length; i++) {
           const container = imageNodes[i];
           const img = container.querySelector('img');
           
           if (container) {
             const imgCenter = container.offsetLeft + (container.offsetWidth / 2);
             const distance = Math.abs(centerPoint - imgCenter);
             
             if (distance < 150) {
               container.style.transform = "scale(1.05)";
               container.style.opacity = "1";
               container.style.zIndex = "10";
               if (img) img.style.filter = "grayscale(0%)";
             } else {
               container.style.transform = "scale(0.95)";
               container.style.opacity = "0.4";
               container.style.zIndex = "0";
               if (img) img.style.filter = "grayscale(100%)";
             }
           }
         }
      } else {
         const imageNodes = scrollContainer.children;
         for (let i = 0; i < imageNodes.length; i++) {
            const container = imageNodes[i];
            const img = container.querySelector('img');
            container.style.transform = "";
            container.style.opacity = "";
            container.style.zIndex = "";
            if (img) img.style.filter = "";
         }
      }

      animationFrameId = requestAnimationFrame(loop);
    };

    animationFrameId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isInView, activeIndex]); 

  const handleMouseDown = (e) => {
    isDragging.current = true;
    hasDragged.current = false;
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeftStart.current = scrollRef.current.scrollLeft;
    scrollRef.current.style.scrollBehavior = 'auto'; 
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 2; 
    if (Math.abs(walk) > 5) {
      hasDragged.current = true;
    }
    scrollRef.current.scrollLeft = scrollLeftStart.current - walk;
  };

  const handleMouseUp = () => { isDragging.current = false; };
  const handleTouchStart = () => { isTouching.current = true; hasDragged.current = false; };
  const handleTouchEnd = () => { setTimeout(() => { isTouching.current = false; }, 1000); };

  return (
    <section id="photos" ref={containerRef} className="bg-black py-24 md:py-32 overflow-hidden border-t border-white/5 relative">
      
      {/* THE AWWWARDS SHARED-ELEMENT LIGHTBOX */}
      <AnimatePresence>
        {activeIndex !== null && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-none">
            
            {/* 1. Cinematic Background Blur */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="absolute inset-0 bg-black/95 backdrop-blur-xl pointer-events-auto cursor-pointer"
              onClick={() => setActiveIndex(null)}
            />

            {/* 2. Editorial Typography (Fades in over the blur) */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="absolute bottom-8 left-8 md:bottom-12 md:left-12 z-[110] pointer-events-none"
            >
              <p className="text-indigo-500 text-[9px] uppercase tracking-[0.4em] font-bold mb-2">Visual Archive</p>
              <p className="text-white font-serif italic text-xl md:text-3xl opacity-80">Capture {String((activeIndex % originalImages.length) + 1).padStart(2, '0')}</p>
            </motion.div>

            {/* Rotating Close Button */}
            <motion.button 
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ delay: 0.2, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => setActiveIndex(null)}
              className="absolute top-6 right-6 md:top-10 md:right-10 z-[110] group pointer-events-auto flex items-center gap-4"
            >
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/50 group-hover:text-white transition-colors hidden md:block">Close</span>
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white transition-colors duration-500">
                <span className="text-white/60 group-hover:text-black transition-colors font-light text-xl">✕</span>
              </div>
            </motion.button>

            {/* 3. The Flying Image (layoutId creates the physics) */}
            <motion.img 
              layoutId={`gallery-image-${activeIndex}`}
              src={images[activeIndex]} 
              alt="Expanded"
              transition={{ type: "spring", stiffness: 200, damping: 25, mass: 1 }}
              className="relative z-[105] max-w-[90vw] max-h-[85vh] object-contain drop-shadow-[0_30px_80px_rgba(0,0,0,0.8)] pointer-events-auto"
              draggable="false"
            />
          </div>
        )}
      </AnimatePresence>

      {/* STANDARD GALLERY STRUCTURE */}
      <div className="max-w-7xl mx-auto px-6 mb-12 md:mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-[1px] bg-indigo-500"></div>
            <h2 className="text-indigo-500 font-bold tracking-[0.4em] uppercase text-[10px] md:text-xs">
              Visuals
            </h2>
          </div>
          <h3 className="font-oswald text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-none text-white">
            In Action.
          </h3>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1.5, delay: 0.2 }}
        style={{ WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}
      >
        <div 
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="flex items-center overflow-x-auto gap-4 md:gap-8 px-8 pt-10 pb-16 no-scrollbar cursor-grab active:cursor-grabbing transform-gpu"
        >
          {images.map((src, index) => (
            <div 
              key={index}
              onClick={() => {
                if (!hasDragged.current) setActiveIndex(index);
              }}
              className="relative flex-shrink-0 h-[350px] md:h-[550px] w-fit rounded-2xl border border-white/5 overflow-hidden bg-zinc-900 group transition-all duration-500 cursor-pointer"
            >
              {/* The Thumbnail (Tied to the layoutId) */}
              <motion.img 
                layoutId={`gallery-image-${index}`}
                src={src} 
                alt={`Gallery photo ${index + 1}`}
                className="h-full w-auto max-w-none object-cover transition-all duration-700 ease-out 
                           grayscale md:group-hover:grayscale-0 md:group-hover:scale-105 pointer-events-none select-none"
                draggable="false" 
                loading="lazy"
              />
              <div className={`absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700 pointer-events-none hidden md:block ${activeIndex !== null ? 'opacity-0' : 'opacity-100'}`}></div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}