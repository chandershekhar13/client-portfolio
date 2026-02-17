import { Instagram, Youtube, Twitter, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">

        {/* Left: Copyright */}
        <div className="mb-4 md:mb-0">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Client Name. All rights reserved.
          </p>
        </div>

        {/* Right: Social Icons */}
        <div className="flex space-x-6">
          <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram size={20} /></a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors"><Youtube size={20} /></a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter size={20} /></a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors"><Mail size={20} /></a>
        </div>

      </div>
    </footer>
  );
}