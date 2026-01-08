import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "./components/layouts/navbar";
import Footer from "./components/layouts/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mindful Gloww | Gentle Healing & Emotional Safety",
  description:
    "Mindful Gloww offers calm, compassionate, non-judgemental support for healing from narcissistic behaviour, emotional abuse, and trauma.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#F8F7F5] text-[#2F2F2F]`}
      >
        <Navbar />

        {/* MAIN CONTENT WRAPPER (prevents margin-collapse into footer) */}
        <main className="relative overflow-hidden">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
