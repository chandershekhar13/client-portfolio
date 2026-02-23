"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  // Notice Home is now /#home so the math engine can target the Hero section
  const navLinks = [
    { name: "Home", href: "/#home" },
    { name: "Biography", href: "/#bio" },
    { name: "Visuals", href: "/#photos" },
    { name: "Faculty", href: "/#faculty" },
    { name: "Gear", href: "/gear" }, 
    { name: "Contact", href: "/#contact" }
  ];

  // THE CUSTOM SCROLL ENGINE
  const handleNavClick = (e, href) => {
    // 1. If clicking the Gear page, let the browser load the new page normally
    if (href === "/gear") return;

    // 2. If we are already on the homepage, intercept the click for smooth scrolling
    if (window.location.pathname === "/") {
      e.preventDefault(); // Stop the harsh page jump
      
      const targetId = href.replace("/#", "");
      const element = document.getElementById(targetId);
      
      if (element) {
        setIsMobileMenuOpen(false); // Close the mobile menu automatically
        
        // Math: Find the element, calculate its position, and subtract 90px for the Navbar height
        const offset = 90; 
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
          
          <a href="/#home" onClick={(e) => handleNavClick(e, "/#home")} className="flex items-center gap-3 relative z-[110] group">
            <span className="text-xl md:text-2xl font-black text-white tracking-tighter group-hover:text-indigo-400 transition-colors duration-500">MARK</span>
            <div className="border-l-[2px] border-indigo-500 pl-3 py-0.5 flex flex-col justify-center">
              <span className="text-[7px] md:text-[8px] text-white/70 font-semibold tracking-[0.3em] uppercase leading-none mb-1 group-hover:text-white transition-colors">School Of</span>
              <span className="text-[9px] md:text-[10px] text-indigo-400 font-black tracking-[0.4em] uppercase leading-none">Drums</span>
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