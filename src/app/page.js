import Hero from "../components/Hero";
import About from "../components/About";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact"; // NEW
import Footer from "../components/Footer";   // NEW

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <Hero />
      <About />
      <Gallery />
      <Contact /> {/* Added */}
      <Footer />  {/* Added */}
    </main>
  );
}