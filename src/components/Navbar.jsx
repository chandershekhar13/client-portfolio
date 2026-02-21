"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }


      if (currentScrollY > lastScrollY && currentScrollY > 200 && !isMobileMenuOpen) {
        setIsHidden(true); 
      } else {
        setIsHidden(false); 
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isMobileMenuOpen]);

  const handleScrollToSection = (e, targetId) => {
    e.preventDefault(); 
    
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }

    const targetElement = document.getElementById(targetId);
    if (!targetElement) return;

    setTimeout(() => {
      const offsetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }, 50);
  };

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "Bio", id: "bio" },
    { name: "Photos", id: "photos" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <>
      <motion.nav 
        initial={{ y: 0 }}
        animate={{ y: isHidden ? "-100%" : "0%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
          isScrolled || isMobileMenuOpen 
            ? "bg-black border-b border-white/10 py-4 shadow-2xl" 
            : "bg-transparent py-6 md:py-8"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          
          <a href="#home" className="text-white text-base md:text-lg font-bold tracking-[0.2em] uppercase">
  MARK SCHOOL OF DRUMS
</a>

          <div className="hidden md:flex items-center gap-8 md:gap-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={`#${link.id}`}
                onClick={(e) => handleScrollToSection(e, link.id)}
                className="text-gray-400 hover:text-white text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] transition-colors cursor-pointer"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="md:hidden relative z-[60]">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white focus:outline-none p-2 -mr-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 transition-transform duration-300">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                )}
              </svg>
            </button>
          </div>

        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-10%" }}
            animate={{ opacity: 1, y: "0%" }}
            exit={{ opacity: 0, y: "-10%" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 bg-black z-40 flex flex-col items-center justify-center min-h-screen"
          >
            <div className="flex flex-col items-center gap-10">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={`#${link.id}`}
                  onClick={(e) => handleScrollToSection(e, link.id)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.1, duration: 0.4, ease: "easeOut" }}
                  className="text-white text-3xl font-oswald font-bold uppercase tracking-[0.2em] hover:text-indigo-500 transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
            
            <motion.div 
             initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="absolute bottom-12 text-gray-500 text-[10px] tracking-widest uppercase"
            >
              Drummer • Producer • Educator
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}