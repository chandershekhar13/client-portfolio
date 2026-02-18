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
  
  // Refs for logic (Instant updates, no re-renders)
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeftStart = useRef(0);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let animationFrameId;

    const loop = () => {
      if (!scrollContainer) return;

      // 1. AUTO-SCROLL (Only if NOT dragging)
      if (!isDragging.current) {
        scrollContainer.scrollLeft += 1.5; // Speed
      }

      // 2. INFINITE LOOP RESET
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0;
      }

      // 3. VISUAL LOGIC
      // Check if we are on mobile
      if (window.innerWidth < 768) {
         const centerPoint = scrollContainer.scrollLeft + (window.innerWidth / 2);
         const imageNodes = scrollContainer.children;

         for (let i = 0; i < imageNodes.length; i++) {
           const container = imageNodes[i];
           const img = container.querySelector('img');
           
           if (img) {
             const imgCenter = container.offsetLeft + (container.offsetWidth / 2);
             const distance = Math.abs(centerPoint - imgCenter);

             // Mobile Center Spotlight
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
         // DESKTOP: CLEANUP
         // Ensure we strip inline styles so CSS hover works
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

  // --- DRAG HANDLERS (MOUSE + TOUCH) ---

  const handleDragStart = (e) => {
    isDragging.current = true;
    
    // Get X position based on Mouse or Touch
    const pageX = e.touches ? e.touches[0].pageX : e.pageX;
    
    startX.current = pageX - scrollRef.current.offsetLeft;
    scrollLeftStart.current = scrollRef.current.scrollLeft;
  };

  const handleDragMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault(); // Stop browser from doing weird native swipe things

    const pageX = e.touches ? e.touches[0].pageX : e.pageX;
    const x = pageX - scrollRef.current.offsetLeft;
    
    // Multiplier * 2 makes the drag feel faster/more responsive
    const walk = (x - startX.current) * 2; 
    scrollRef.current.scrollLeft = scrollLeftStart.current - walk;
  };

  const handleDragEnd = () => {
    isDragging.current = false;
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
        
        // MOUSE EVENTS
        onMouseDown={handleDragStart}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onMouseMove={handleDragMove}
        
        // TOUCH EVENTS
        onTouchStart={handleDragStart}
        onTouchEnd={handleDragEnd}
        onTouchMove={handleDragMove}
        
        // CSS: overflow-hidden is CRITICAL here. 
        // It forces the user to rely on our JS drag logic (no fighting with native scroll)
        className="flex overflow-hidden space-x-6 px-6 pb-12 cursor-grab active:cursor-grabbing"
        style={{ touchAction: 'pan-y' }} 
      >
        {images.map((src, index) => (
          <div 
            key={index}
            className="relative flex-shrink-0 w-[280px] md:w-[350px] aspect-[2/3]"
          >
            <img 
              src={src} 
              alt={`Portrait ${index}`}
              className="w-full h-full object-cover transition-all duration-500 ease-out 
                         grayscale md:hover:grayscale-0 md:hover:scale-110"
              draggable="false" // Stops the "ghost image" when dragging
            />
          </div>
        ))}
      </div>
    </section>
  );
}