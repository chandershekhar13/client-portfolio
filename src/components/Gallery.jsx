"use client";
import { motion } from "framer-motion";

const images = [
  "https://images.unsplash.com/photo-1519892300165-31a5463f0f8f?q=80&w=800",
  "https://images.unsplash.com/photo-1533174072545-e8d4aa97edf9?q=80&w=800",
  "https://images.unsplash.com/photo-1485579149621-3123dd979885?q=80&w=800",
  "https://images.unsplash.com/photo-1514525253440-b393452e8d26?q=80&w=800",
  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=800",
  "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800"
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