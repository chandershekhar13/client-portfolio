import { Inter, Oswald } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const oswald = Oswald({ subsets: ["latin"], variable: '--font-oswald' });
import "./globals.css";
import Navbar from "../components/Navbar"; 

export const metadata = {
  title: "Musician Portfolio",
  description: "Official Portfolio",
};

export default function RootLayout({ children }) {
  return (
    // ADDED: className="scroll-smooth"
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${oswald.variable} font-sans`}>        
        <Navbar /> 
        {children}
      </body>
    </html>
  );
}