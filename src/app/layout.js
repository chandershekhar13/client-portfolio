import { Inter, Oswald } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const oswald = Oswald({ subsets: ["latin"], variable: '--font-oswald' });

export const metadata = {
  // The Title is the most important SEO element. It must contain the exact search phrase.
  title: "Best Drumming Classes in Chandigarh | Mark School of Drums",
  
  // The Description shows under the link on Google. It needs the keywords + a reason to click.
  description: "Looking for the best drumming classes in Chandigarh? We blend the depth of Indian Classical Guru-Shishya Parampara with modern drum expression. Join Mark School of Drums today!",
  
  // Keywords help tell search engines exactly what this page is about.
  keywords: [
    "Drumming classes in Chandigarh",
    "Best drumming classes in Chandigarh",
    "Drum lessons in Chandigarh",
    "Learn drums in Chandigarh",
    "Mark School of Drums",
    "Drumming instructor Tricity",
    "Mohali drum classes",
    "Panchkula drum classes"
  ],
  
  // OpenGraph helps your SEO when your link is shared on WhatsApp, Facebook, or Instagram.
  openGraph: {
    title: "Best Drumming Classes in Chandigarh | Mark School of Drums",
    description: "Professional drum lessons blending traditional Guru-Shishya parampara with modern drumming. Book your class in Chandigarh today.",
    url: "https://markschoolofdrums.com",
    siteName: "Mark School of Drums",
    locale: "en_IN",
    type: "website",
  },
  
  // Canonical URL prevents Google from penalizing you if your site loads with both www and non-www
  alternates: {
    canonical: "https://markschoolofdrums.com",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${oswald.variable} font-sans`}>        
        {children}
      </body>
    </html>
  );
}