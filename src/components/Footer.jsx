"use client";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#050505] text-white pt-16 pb-12 px-6 md:px-12 border-t border-white/5 relative">
      
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row justify-between items-end gap-16">
        
        {/* Left Side: The Only Exit (Instagram) */}
        <div className="flex flex-col gap-6">
          <span className="text-white/30 text-[9px] uppercase tracking-[0.5em] font-bold">
            External Channel
          </span>
          <a 
            href="https://www.instagram.com/mark_official99?igsh=MXZncWIybTlwZWYzcQ" 
            target="_blank" 
            rel="noreferrer"
            className="text-xl md:text-3xl font-light uppercase tracking-[0.2em] text-white/50 hover:text-indigo-400 hover:translate-x-2 transition-all duration-300 w-fit flex items-center gap-3 group"
          >
            Instagram 
            <span className="text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">↗</span>
          </a>
        </div>

        {/* Right Side: Back to Top & Legal */}
        <div className="flex flex-col items-start md:items-end gap-16">
          
          <button 
            onClick={scrollToTop} 
            className="group flex flex-col items-start md:items-end gap-3 text-white/50 hover:text-white transition-colors"
          >
            <span className="text-[9px] uppercase tracking-[0.4em] font-bold group-hover:text-indigo-400 transition-colors">
              Return to Origin
            </span>
            <span className="text-2xl font-light transform group-hover:-translate-y-2 transition-all duration-300">
              ↑
            </span>
          </button>

          <div className="text-left md:text-right flex flex-col gap-2">
             <span className="text-white/20 text-[9px] uppercase tracking-[0.4em]">
              © {new Date().getFullYear()} Mark Drums. All Rights Reserved.
             </span>
          </div>

        </div>

      </div>
    </footer>
  );
}