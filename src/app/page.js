import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

import About from "../components/About";
import Gallery from "../components/Gallery";
import Faculty from "../components/Faculty";
import Contact from "../components/Contact"; 
import Footer from "../components/Footer";   

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <Faculty />
      <Contact /> 
      <Footer />  
    </main>
  );
}