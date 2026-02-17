"use client";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="bg-black text-white py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-5xl font-bold uppercase tracking-widest mb-4"
        >
          Get in Touch
        </motion.h2>

        <p className="text-gray-400 mb-12">
          For bookings, studio sessions, or collaborations.
        </p>

        <motion.form 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="space-y-8 text-left max-w-xl mx-auto"
        >
          {/* Name Input */}
          <div>
            <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Name</label>
            <input 
              type="text" 
              className="w-full bg-transparent border-b border-gray-700 py-2 text-white focus:outline-none focus:border-white transition-colors duration-300"
              placeholder="Enter your name"
            />
          </div>

          {/* Email Input */}
          <div>
            <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Email</label>
            <input 
              type="email" 
              className="w-full bg-transparent border-b border-gray-700 py-2 text-white focus:outline-none focus:border-white transition-colors duration-300"
              placeholder="Enter your email"
            />
          </div>

          {/* Message Input */}
          <div>
            <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Message</label>
            <textarea 
              rows="4"
              className="w-full bg-transparent border-b border-gray-700 py-2 text-white focus:outline-none focus:border-white transition-colors duration-300 resize-none"
              placeholder="Tell me about your project"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center pt-8">
            <button className="px-10 py-3 border border-white text-white hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-widest text-sm">
              Send Message
            </button>
          </div>

        </motion.form>
      </div>
    </section>
  );
}