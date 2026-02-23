"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation"; // NEW: Detects cross-page navigation

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // 1. Background blur effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  // 2. THE CROSS-PAGE HASH FIX (Gear -> Home)
  useEffect(() => {
    // When navigating back from /gear to the homepage, we wait a split second 
    // for Framer Motion to render the sections, then calculate the exact pixel to scroll to.
    if (pathname === "/" && window.location.hash) {
      const targetId = window.location.hash.replace("#", "");
      
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          const offset = 50; // TIGHTENED: Prevents the massive black gap above Faculty
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - offset;
          window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }
      }, 400); // 400ms delay ensures perfect accuracy after images load
    }
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/#home" },
    { name: "Biography", href: "/#bio" },
    { name: "Faculty", href: "/#faculty" },
    { name: "Visuals", href: "/#photos" },
    { name: "Gear", href: "/gear" }, 
    { name: "Contact", href: "/#contact" }
  ];

  // 3. THE SAME-PAGE SCROLL ENGINE
  const handleNavClick = (e, href) => {
    if (href === "/gear") return; // Let the browser route normally

    // If we are already on the homepage, intercept for smooth scrolling
    if (pathname === "/") {
      e.preventDefault();
      const targetId = href.replace("/#", "");
      const element = document.getElementById(targetId);
      
      if (element) {
        setIsMobileMenuOpen(false);
        const offset = 50; // TIGHTENED: Keeps the headers snug against the Navbar
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - offset;
  
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled ? "bg-black/80 backdrop-blur-xl border-b border-white/5 py-4" : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          
          {/* FIXED: Scaled the Logo back up to its massive, premium size */}
          {/* HIGH-IMPACT BRUTALIST LOGO */}
<a href="/#home" onClick={(e) => handleNavClick(e, "/#home")} className="flex items-center gap-3 md:gap-4 relative z-[110] group">
  
  {/* The Massive Primary Mark */}
  <span className="text-4xl md:text-[3.25rem] font-black text-white tracking-[-0.06em] leading-none group-hover:text-indigo-400 transition-colors duration-500 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
    MARK
  </span>
  
  {/* The Engineered Divider (Taller, gradient fade) */}
  <div className="w-[3px] h-10 md:h-12 bg-gradient-to-b from-indigo-500 via-indigo-500/50 to-transparent"></div>
  
  {/* The Micro-Typography Subtext */}
  <div className="flex flex-col justify-center">
    <span className="text-[8px] md:text-[9px] text-white/50 font-bold tracking-[0.5em] uppercase leading-none mb-2 group-hover:text-white transition-colors duration-300">
      School Of
    </span>
    <span className="text-[10px] md:text-xs text-indigo-400 font-black tracking-[0.6em] uppercase leading-none">
      Drums
    </span>
  </div>
</a>

          <div className="hidden md:flex items-center gap-8 lg:gap-12 text-[10px] uppercase tracking-[0.2em] font-medium">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`transition-colors duration-300 ${link.name === "Gear" ? "text-indigo-400 font-bold hover:text-indigo-300" : "text-white/50 hover:text-white"}`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden relative z-[110] w-10 h-10 flex flex-col justify-center items-center gap-[5px]"
          >
            <span className={`w-6 h-[2px] bg-white transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-[7px]" : ""}`}></span>
            <span className={`w-6 h-[2px] bg-white transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`}></span>
            <span className={`w-6 h-[2px] bg-white transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}></span>
          </button>

        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[100] bg-zinc-950 flex flex-col justify-center items-center px-6"
          >
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + (i * 0.1), duration: 0.5 }}
                  className={`text-3xl font-black uppercase tracking-tighter transition-colors ${link.name === "Gear" ? "text-indigo-500" : "text-white hover:text-indigo-400"}`}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
              className="absolute bottom-12 text-center"
            >
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-bold mb-4">Direct Inquiries</p>
              <a href="mailto:booking@marksir.com" className="text-white/70 text-sm tracking-widest">booking@marksir.com</a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}