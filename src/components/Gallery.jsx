"use client";

import { useRef, useEffect, useState } from "react";
import {
  motion,
  useInView,
  AnimatePresence,
  LayoutGroup,
  MotionConfig
} from "framer-motion";

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
  "/Gallery/IMG_5934.webp", "/Gallery/IMG_5935.webp", "/Gallery/IMG_4445.webp",
  "/Gallery/IMG_4446.webp", "/Gallery/IMG_4448.webp", "/Gallery/IMG_4449.webp",
  "/Gallery/IMG_4450.webp", "/Gallery/IMG_4451.webp", "/Gallery/IMG_4453.webp",
  "/Gallery/IMG_4454.webp", "/Gallery/IMG_4455.webp", "/Gallery/IMG_4456.webp",
  "/Gallery/IMG_5935.webp", "/Gallery/IMG_4457.webp", "/Gallery/IMG_4458.webp",
  "/Gallery/IMG_4459.webp"
];

const images = [...originalImages, ...originalImages, ...originalImages];

export default function Gallery() {
  const containerRef = useRef(null);
  const scrollRef = useRef(null);

  const isDragging = useRef(false);
  const hasDragged = useRef(false);
  const isTouching = useRef(false);

  const startX = useRef(0);
  const scrollLeftStart = useRef(0);

  const [activeIndex, setActiveIndex] = useState(null);

  const isInView = useInView(containerRef, {
    once: true,
    margin: "-100px 0px 0px 0px"
  });

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

      if (activeIndex !== null) {
        animationFrameId = requestAnimationFrame(loop);
        return;
      }

      if (!isDragging.current && !isTouching.current) {
        scrollContainer.scrollLeft += 1.5;
      }

      const halfWidth = scrollContainer.scrollWidth / 2;

      if (scrollContainer.scrollLeft >= halfWidth) {
        scrollContainer.scrollLeft -= halfWidth;
        if (isDragging.current) {
          scrollLeftStart.current -= halfWidth;
        }
      } else if (scrollContainer.scrollLeft <= 0) {
        scrollContainer.scrollLeft += halfWidth;
        if (isDragging.current) {
          scrollLeftStart.current += halfWidth;
        }
      }

      // APPLE-GRADE CONTINUOUS MOBILE PHYSICS
      if (window.innerWidth < 768) {
         const centerPoint = scrollContainer.scrollLeft + (window.innerWidth / 2);
         const imageNodes = scrollContainer.children;

         for (let i = 0; i < imageNodes.length; i++) {
           const container = imageNodes[i];
           const img = container.querySelector('img');
           
           if (container) {
             const imgCenter = container.offsetLeft + (container.offsetWidth / 2);
             const distance = Math.abs(centerPoint - imgCenter);
             
             // The "Focus Zone" is 250px wide. 
             const focusZone = 250; 
             // Calculate a value from 0 to 1 based on how close it is to dead center
             let progress = 1 - (distance / focusZone);
             progress = Math.max(0, Math.min(1, progress)); // Clamp between 0 and 1

             // Apply an easing curve so it doesn't feel linear
             const easeProgress = progress === 1 ? 1 : 1 - Math.pow(1 - progress, 2);

             // Map the curve to physical properties
             const scale = 0.85 + (easeProgress * 0.2); // Scales smoothly from 0.85 to 1.05
             const opacity = 0.3 + (easeProgress * 0.7); // Fades from 30% to 100%
             const grayscale = 100 - (easeProgress * 100); // Transitions from 100% gray to full color

             // Apply instantly without CSS transitions fighting it
             container.style.transform = `scale(${scale})`;
             container.style.opacity = opacity.toString();
             container.style.zIndex = Math.round(progress * 10).toString();
             
             if (img) {
               img.style.filter = `grayscale(${grayscale}%)`;
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
    scrollRef.current.style.scrollBehavior = "auto";
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

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleTouchStart = () => {
    isTouching.current = true;
    hasDragged.current = false;
  };

  const handleTouchEnd = () => {
    setTimeout(() => {
      isTouching.current = false;
    }, 500);
  };

  return (
    <MotionConfig
      transition={{
        type: "spring",
        stiffness: 220,
        damping: 32,
        mass: 0.7
      }}
    >
      <LayoutGroup>
        <section
          id="photos"
          ref={containerRef}
          className="bg-black py-24 md:py-32 overflow-hidden border-t border-white/5 relative"
        >
          {/* LIGHTBOX */}
          <AnimatePresence initial={false}>
            {activeIndex !== null && (
              <motion.div
                className="fixed inset-0 z-[99999] flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.18,
                  ease: [0.22, 1, 0.36, 1]
                }}
              >
                {/* BACKDROP */}
                <motion.div
                  className="absolute inset-0 bg-black/92"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 0.2
                  }}
                  onClick={() => setActiveIndex(null)}
                  style={{
                    backdropFilter: "blur(20px)",
                    WebkitBackdropFilter: "blur(20px)",
                    willChange: "opacity"
                  }}
                />

                {/* EXPANDED IMAGE */}
                <motion.img
                  layoutId={`gallery-image-${activeIndex}`}
                  src={images[activeIndex]}
                  alt="Expanded"
                  draggable="false"
                  onLayoutAnimationStart={() => {
                    document.body.style.pointerEvents = "none";
                  }}
                  onLayoutAnimationComplete={() => {
                    document.body.style.pointerEvents = "auto";
                  }}
                  className="
                    relative
                    z-[100005]
                    max-w-[92vw]
                    max-h-[88vh]
                    object-contain
                    rounded-[1.5rem]
                    shadow-[0_40px_120px_rgba(0,0,0,0.95)]
                    pointer-events-auto
                    select-none
                  "
                  style={{
                    willChange: "transform",
                    transform: "translateZ(0)",
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden"
                  }}
                />

                {/* INFO */}
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={{ duration: 0.16 }}
                  className="absolute bottom-8 left-8 md:bottom-12 md:left-12 z-[100010] pointer-events-none"
                >
                  <p className="text-indigo-500 text-[9px] uppercase tracking-[0.4em] font-bold mb-2">
                    Visual Archive
                  </p>
                  <p className="text-white font-serif italic text-xl md:text-3xl opacity-80">
                    Capture {String((activeIndex % originalImages.length) + 1).padStart(2, "0")}
                  </p>
                </motion.div>

                {/* CLOSE BUTTON */}
                <motion.button
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.16 }}
                  onClick={() => setActiveIndex(null)}
                  className="absolute top-6 right-6 md:top-10 md:right-10 z-[100010] group flex items-center gap-4"
                >
                  <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/40 group-hover:text-white transition-colors duration-500 hidden md:block">
                    Close
                  </span>
                  <div className="w-11 h-11 md:w-12 md:h-12 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-xl flex items-center justify-center group-hover:bg-white transition-all duration-500">
                    <span className="text-white/60 group-hover:text-black transition-colors text-lg">
                      ✕
                    </span>
                  </div>
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* HEADER */}
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

          {/* GALLERY */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            style={{
              WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)"
            }}
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
                    if (!hasDragged.current) {
                      setActiveIndex(index);
                    }
                  }}
                  className="
                    relative
                    flex-shrink-0
                    h-[350px]
                    md:h-[550px]
                    w-[250px] md:w-fit 
                    rounded-2xl
                    overflow-hidden
                    border
                    border-white/5
                    bg-zinc-900
                    group
                    cursor-pointer
                    md:transition-transform
                    md:duration-500
                    md:hover:-translate-y-1
                  "
                >
                  <motion.img
                    layoutId={`gallery-image-${index}`}
                    src={src}
                    alt={`Gallery photo ${index + 1}`}
                    draggable="false"
                    loading="lazy"
                    className="
                      h-full
                      w-full md:w-auto
                      max-w-none
                      object-cover
                      grayscale
                      md:transition-all
                      md:duration-700
                      ease-out
                      md:group-hover:grayscale-0
                      md:group-hover:scale-[1.03]
                      pointer-events-none
                      select-none
                    "
                    style={{
                      willChange: "transform",
                      transform: "translateZ(0)",
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden"
                    }}
                  />

                  <div
                    className={`
                      absolute
                      inset-0
                      bg-black/20
                      md:transition-opacity
                      md:duration-700
                      pointer-events-none
                      hidden
                      md:block
                      ${
                        activeIndex !== null
                          ? "opacity-0"
                          : "opacity-100 group-hover:opacity-0"
                      }
                    `}
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </section>
      </LayoutGroup>
    </MotionConfig>
  );
}
