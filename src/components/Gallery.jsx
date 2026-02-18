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

// Duplicate 4 times for infinite illusion
const images = [...originalImages, ...originalImages, ...originalImages, ...originalImages];

export default function Gallery() {
  const scrollRef = useRef(null);
  const isPaused = useRef(false); // Using Ref instead of State for instant feedback

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let animationFrameId;

    const loop = () => {
      // 1. Only scroll if NOT paused
      if (!isPaused.current && scrollContainer) {
        scrollContainer.scrollLeft += 1; // SPEED: Change to 0.5 for slower, 2 for faster

        // 2. Infinite Loop Logic (Reset position seamlessly)
        // If we have scrolled past half the content, snap back to 0
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        }
      }
      
      // 3. Keep the loop running 60fps
      animationFrameId = requestAnimationFrame(loop);
    };

    // Start the loop
    animationFrameId = requestAnimationFrame(loop);

    // Cleanup when component unmounts
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  // EVENT HANDLERS (Directly flipping the Ref switch)
  const pause = () => { isPaused.current = true; };
  const resume = () => { 
    // Wait 1 second before resuming
    setTimeout(() => {
      isPaused.current = false;
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

      {/* SCROLL CONTAINER */}
      <div 
        ref={scrollRef}
        // PAUSE on these events
        onMouseEnter={pause}
        onTouchStart={pause}
        
        // RESUME on these events
        onMouseLeave={resume}
        onTouchEnd={resume}
        
        className="flex overflow-x-auto space-x-6 px-6 pb-12 no-scrollbar cursor-grab active:cursor-grabbing"
      >
        {images.map((src, index) => (
          <div 
            key={index}
            className="relative flex-shrink-0 w-[280px] md:w-[350px] aspect-[2/3] group overflow-hidden border border-white/10"
          >
            <img 
              src={src} 
              alt={`Portrait ${index}`}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 ease-in-out transform group-hover:scale-110 pointer-events-none select-none"
            />
          </div>
        ))}
      </div>

    </section>
  );
}