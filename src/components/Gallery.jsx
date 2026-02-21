

"use client";
import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";

const originalImages = [
  "/Gallery/IMG_2037.jpg",
  "/Gallery/IMG_2039.jpg",
  "/Gallery/IMG_2040.jpg",
  "/Gallery/IMG_2055.jpg",
  "/Gallery/IMG_2057.png",
  "/Gallery/IMG_2059.jpg",
  "/Gallery/IMG_2060.jpg",
  "/Gallery/IMG_1359.jpg",
  "/Gallery/IMG_2038.jpg",
  "/Gallery/IMG_2063.jpg",
];

const images = [...originalImages, ...originalImages, ...originalImages, ...originalImages];

export default function Gallery() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px 0px 0px 0px" });

  const scrollRef = useRef(null);
  const isDragging = useRef(false);
  const isTouching = useRef(false);
  const startX = useRef(0);
  const scrollLeftStart = useRef(0);

  useEffect(() => {
    if (!isInView) return;

    const scrollContainer = scrollRef.current;
    let animationFrameId;

    const loop = () => {
      if (!scrollContainer) return;

      if (!isDragging.current && !isTouching.current) {
        scrollContainer.scrollLeft += 1.5; 
      }

     /* THE FIX: Infinite scroll in BOTH directions without breaking the mouse drag math */
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft -= scrollContainer.scrollWidth / 2;
        if (isDragging.current) scrollLeftStart.current -= scrollContainer.scrollWidth / 2;
      } else if (scrollContainer.scrollLeft <= 0) {
        scrollContainer.scrollLeft += scrollContainer.scrollWidth / 2;
        if (isDragging.current) scrollLeftStart.current += scrollContainer.scrollWidth / 2;
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
  }, [isInView]); 

  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeftStart.current = scrollRef.current.scrollLeft;
    scrollRef.current.style.scrollBehavior = 'auto'; 
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 2; 
    scrollRef.current.scrollLeft = scrollLeftStart.current - walk;
  };

  const handleMouseUp = () => { isDragging.current = false; };

  const handleTouchStart = () => { isTouching.current = true; };
  const handleTouchEnd = () => { 
    setTimeout(() => { isTouching.current = false; }, 1000);
  };

  return (
    <section id="photos" ref={containerRef} className="bg-black py-24 md:py-32 overflow-hidden border-t border-white/5">
      
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
          className="flex items-center overflow-x-auto gap-4 md:gap-8 px-8 pt-10 pb-16 no-scrollbar cursor-grab active:cursor-grabbing"
        >
          {images.map((src, index) => (
            <div 
              key={index}
              /* THE FIX: Cranked the height up to 550px on desktop (400px on mobile) to restore the massive scale. */
              className="relative flex-shrink-0 h-[400px] md:h-[550px] w-fit rounded-2xl border border-white/5 overflow-hidden bg-zinc-900 group transition-all duration-500"
            >
              <img 
                src={src} 
                alt={`Gallery photo ${index + 1}`}
                /* THE FIX: h-full and w-auto ensures landscape photos just grow wider to match the 550px height without cropping! */
                className="h-full w-auto max-w-none object-cover transition-all duration-700 ease-out 
                           grayscale md:group-hover:grayscale-0 md:group-hover:scale-105 pointer-events-none select-none"
                draggable="false" 
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700 pointer-events-none hidden md:block"></div>
            </div>
          ))}
        </div>
      </motion.div>

    </section>
  );
}