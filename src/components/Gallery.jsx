"use client";
import { motion } from "framer-motion";

const images = [
  "https://picsum.photos/id/237/800/1200", // Dog (Tall)
  "https://picsum.photos/id/1/800/600",    // Laptop (Wide)
  "https://picsum.photos/id/10/800/800",   // Forest (Square)
  "https://picsum.photos/id/20/800/1000",  // Notebook (Tall)
  "https://picsum.photos/id/30/800/700",   // Mug (Wide)
  "https://picsum.photos/id/40/800/900",   // Cat (Tall)
];

export default function Gallery() {
  return (
    <section id="photos" className="bg-black py-20 px-4">
      <div className="max-w-7xl mx-auto">

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-5xl font-bold text-white mb-12 text-center uppercase tracking-widest"
        >
          Gallery
        </motion.h2>

        {/* MASONRY GRID */}
        <div className="columns-1 md:columns-3 gap-4 space-y-4">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="break-inside-avoid overflow-hidden rounded-lg"
            >
              <img 
                src={src} 
                alt={`Gallery image ${index + 1}`}
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500 ease-in-out"
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}