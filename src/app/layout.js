import { Inter, Oswald } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const oswald = Oswald({ subsets: ["latin"], variable: '--font-oswald' });import "./globals.css";
import Navbar from "../components/Navbar"; // IMPORT THIS



export const metadata = {
  title: "Musician Portfolio",
  description: "Official Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
<body className={`${inter.variable} ${oswald.variable} font-sans`}>        <Navbar />  {/* ADD THIS HERE */}
        {children}
      </body>
    </html>
  );
}