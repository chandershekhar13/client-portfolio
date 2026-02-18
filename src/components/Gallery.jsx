"use client";
import { useRef, useEffect } from "react";

const originalImages = [
  "/Gallery/IMG_2037.jpg",
  "/Gallery/IMG_2039.jpg",
  "/Gallery/IMG_2040.jpg",
  "/Gallery/IMG_2055.jpg",
  "/Gallery/IMG_2057.png",
  "/Gallery/IMG_2059.jpg",
  "/Gallery/IMG_2060.jpg",
  "/Gallery/IMG_2038.jpg",
  "/Gallery/IMG_2063.jpg",
];

// Duplicate 4 times for infinite loop
const images = [...originalImages, ...originalImages, ...originalImages, ...originalImages];

export default function Gallery() {
  const scrollRef = useRef(null);
  
  // Refs for logic
  const isDragging = useRef(false); // For Desktop Click & Drag
  const isTouching = useRef(false); // For Mobile Touch interaction
  const startX = useRef(0);
  const scrollLeftStart = useRef(0);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let animationFrameId;

    const loop = () => {
      if (!scrollContainer) return;

      // 1. AUTO-SCROLL LOGIC
      // Only move if user is NOT Dragging (Desktop) AND NOT Touching (Mobile)
      if (!isDragging.current && !isTouching.current) {
        scrollContainer.scrollLeft += 1.5; // Speed
      }

      // 2. INFINITE LOOP RESET
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0;
      }

      // 3. VISUAL LOGIC (Mobile Spotlight)
      if (window.innerWidth < 768) {
         const centerPoint = scrollContainer.scrollLeft + (window.innerWidth / 2);
         const imageNodes = scrollContainer.children;

         for (let i = 0; i < imageNodes.length; i++) {
           const container = imageNodes[i];
           const img = container.querySelector('img');
           if (img) {
             const imgCenter = container.offsetLeft + (container.offsetWidth / 2);
             const distance = Math.abs(centerPoint - imgCenter);
             
             if (distance < 150) {
               img.style.filter = "grayscale(0%)";
               img.style.transform = "scale(1.1)";
               img.style.zIndex = "10";
             } else {
               img.style.filter = "grayscale(100%)";
               img.style.transform = "scale(1)";
               img.style.zIndex = "0";
             }
           }
         }
      } else {
         // DESKTOP CLEANUP
         const imageNodes = scrollContainer.children;
         for (let i = 0; i < imageNodes.length; i++) {
            const img = imageNodes[i].querySelector('img');
            if (img && img.style.filter) {
               img.style.filter = "";
               img.style.transform = "";
            }
         }
      }

      animationFrameId = requestAnimationFrame(loop);
    };

    animationFrameId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  // --- DESKTOP MOUSE HANDLERS (Manual Drag Math) ---
  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeftStart.current = scrollRef.current.scrollLeft;
    // Disable smooth scroll for instant drag response
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

  // --- MOBILE TOUCH HANDLERS (Native Scroll Support) ---
  // We DO NOT calculate math here. We just pause the auto-scroll 
  // and let the phone's native physics handle the movement.
  const handleTouchStart = () => { isTouching.current = true; };
  const handleTouchEnd = () => { 
    // Wait a tiny bit before resuming auto-scroll so momentum can finish
    setTimeout(() => {
      isTouching.current = false; 
    }, 1000);
  };

  return (
    <section id="photos" className="bg-black py-24 border-t border-white/10">
      
      <div className="px-6 mb-8 max-w-7xl mx-auto">
        <h2 className="font-oswald text-4xl md:text-6xl font-bold uppercase text-white tracking-tighter">
          Gallery
        </h2>
        <div className="h-1 w-20 bg-white mt-4" />
      </div>

      <div 
        ref={scrollRef}
        
        // DESKTOP EVENTS (Manual Drag)
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onMouseMove={handleMouseMove}
        
        // MOBILE EVENTS (Native Scroll Pause/Resume)
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        
        // CSS CHANGES:
        // 1. overflow-x-auto: Enables Native Scroll (Smooth Mobile)
        // 2. no-scrollbar: Hides the bar
        // 3. cursor-grab: Shows hand icon on desktop
        className="flex overflow-x-auto space-x-6 px-6 pb-12 no-scrollbar cursor-grab active:cursor-grabbing"
      >
        {images.map((src, index) => (
          <div 
            key={index}
            className="relative flex-shrink-0 w-[280px] md:w-[350px] aspect-[2/3] group"
          >
            <img 
              src={src} 
              alt={`Portrait ${index}`}
              className="w-full h-full object-cover transition-all duration-500 ease-out 
                         grayscale md:hover:grayscale-0 md:hover:scale-110"
              draggable="false" 
            />
          </div>
        ))}
      </div>
    </section>
  );
}