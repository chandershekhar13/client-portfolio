import { Inter, Oswald } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const oswald = Oswald({ subsets: ["latin"], variable: '--font-oswald' });
import "./globals.css";


export const metadata = {
  title: "Mark Drums | Professional Drummer & Expert Lessons",
  description: "Blending the depth of Indian Classical Guru–Shishya Parampara with modern drum expression. Join the Mark School of Drums.",
};
export default function RootLayout({ children }) {
  return (
    // ADDED: className="scroll-smooth"
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${oswald.variable} font-sans`}>        

        {children}
      </body>
    </html>
  );
}
