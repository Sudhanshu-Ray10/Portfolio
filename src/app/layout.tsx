import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sudhanshu Ray | Full Stack Web Developer & DSA Enthusiast",
  description: "Highly interactive, cinematic portfolio of Sudhanshu Ray, a passionate full-stack developer and DSA enthusiast building scalable web applications.",
  keywords: ["Sudhanshu Ray", "Full Stack Developer", "DSA Enthusiast", "Next.js", "React", "Portfolio", "Web Development"],
  authors: [{ name: "Sudhanshu Ray" }],
  openGraph: {
    title: "Sudhanshu Ray | Portfolio",
    description: "Cinematic portfolio of a modern full-stack developer.",
    type: "website",
  }
};

import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="bg-background text-foreground selection:bg-cinematic-red selection:text-white">
        <LenisProvider>
          <Navbar />
          <CustomCursor />
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
