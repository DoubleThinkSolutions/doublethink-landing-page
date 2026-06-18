import type { Metadata } from "next";
import { League_Spartan, Manrope } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { AudioProvider } from "./context/AudioContext";
import { ThemeProvider } from "./context/ThemeProvider";

/**
 * THE MONOLITH: League Spartan (Google Fonts)
 * Architectural, bold, geometric. Used for headings.
 */
const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["700", "800"],
});

/**
 * THE SYSTEM VOICE: Manrope (Google Fonts)
 * Modern, technical, precise. Used for body text.
 */
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
});

/**
 * INSTITUTIONAL TRUST: Cooper Hewitt (Local Font)
 * Note: Download the .woff2 files and place them in your /public/fonts folder.
 * If you don't have them, you can use 'Public_Sans' from Google Fonts as a fallback.
 */
const cooperHewitt = localFont({
  src: [
    {
      path: '../public/fonts/cooperhewitt-medium-webfont.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/cooperhewitt-bold-webfont.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-cooper',
});

export const metadata: Metadata = {
  title: {
    template: "%s | Doublethink Solutions",
    default: "Doublethink Solutions",
  },
  description:
    "A tech company building the Open Source Panopticon to prevent misinformation and safeguard trust.",
  keywords: ["Doublethink Solutions", "Open Source Panopticon", "Cognitive Agency", "Digital Privacy", "Project Guy"],
  openGraph: {
    title: "Doublethink Solutions",
    description: "A tech company building the Open Source Panopticon to prevent misinformation and safeguard trust.",
    siteName: "Doublethink Solutions",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${leagueSpartan.variable} 
          ${manrope.variable} 
          ${cooperHewitt.variable} 
          antialiased
        `}
      >
        <AudioProvider>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </AudioProvider>
      </body>
    </html>
  );
}
