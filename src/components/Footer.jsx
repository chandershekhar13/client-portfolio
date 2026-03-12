"use client";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#050505] text-white pt-16 pb-12 px-6 md:px-12 border-t border-white/5 relative">
      

      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row justify-between items-start md:items-end gap-12 md:gap-16">
        
        
        <div className="flex flex-col gap-4 md:gap-6">
          <span className="text-white/30 text-[9px] uppercase tracking-[0.5em] font-bold">
            External Channel
          </span>
          <a 
            href="#" 
            target="_blank" 
            rel="noreferrer"
            className="text-2xl md:text-3xl font-light uppercase tracking-[0.2em] text-white/50 hover:text-indigo-400 md:hover:translate-x-2 transition-all duration-300 w-fit flex items-center gap-4 group"
          >
            Instagram 
        
            <span className="text-lg opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300">↗</span>
          </a>
        </div>


<div className="flex flex-col items-start md:items-end gap-10 md:gap-16 w-full md:w-auto pt-8 md:pt-0 border-t border-white/10 md:border-none mt-4 md:mt-0">
          
          <button 
            onClick={scrollToTop} 

            className="group flex flex-row md:flex-col items-center md:items-end gap-4 md:gap-3 text-white/50 hover:text-white transition-colors"
          >
            <span className="text-[9px] uppercase tracking-[0.4em] font-bold group-hover:text-indigo-400 transition-colors order-2 md:order-1">
              Return to Origin
            </span>
            <span className="text-xl md:text-2xl font-light transform group-hover:-translate-y-2 transition-all duration-300 order-1 md:order-2">
              ↑
            </span>
          </button>

          <div className="text-left md:text-right flex flex-col gap-2">
             <span className="text-white/20 text-[9px] uppercase tracking-[0.4em] leading-relaxed">
              © {new Date().getFullYear()} Mark Drums. <br className="block sm:hidden" /> All Rights Reserved.
             </span>
          </div>

        </div>

      </div>
    </footer>
  );
}