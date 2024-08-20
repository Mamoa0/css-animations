
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/navbar";
import 'aos/dist/aos.css';
import { AOSInit } from "@/components/shared/aos-init";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CSS Animations",
  description: "CSS animations Hub! Discover a wide range of CSS animations and transitions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AOSInit/>
        <Navbar/>
        {children}</body>
    </html>
  );
}
