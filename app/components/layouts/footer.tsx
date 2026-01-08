"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative mt-32 overflow-hidden">
      {/* ================= BACKGROUND IMAGE ================= */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg.jpeg" // same watercolor / paper texture
          alt="Soft paper background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#F7F4EF]/85" />
      </div>

      {/* ================= CONTENT ================= */}
      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-6 py-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Main grid */}
        <div className="grid gap-14 md:grid-cols-3 text-sm text-[#5D4C3B]">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl text-[#3A2E1F] mb-4">
              Mindful <span className="text-[#8B7355]">Gloww</span>
            </h3>
            <p className="leading-relaxed text-[#5D4C3B]/80 max-w-sm">
              A calm, confidential space for healing from narcissistic behaviour,
              emotional abuse, and trauma — at your pace, in your time.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-medium mb-4 text-[#3A2E1F]">
              Explore
            </h4>
            <ul className="space-y-3">
              {[
                ["Services", "#services"],
                ["Specialisation", "#specialisation"],
                ["Book a consultation", "#contact"],
              ].map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    className="hover:text-[#8B7355] transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Disclaimer */}
          <div>
            <h4 className="font-medium mb-4 text-[#3A2E1F]">
              Important note
            </h4>
            <p className="leading-relaxed text-[#5D4C3B]/75">
              Mindful Gloww offers emotional support and guidance.
              It does not replace medical, psychological, or psychiatric care.
              If you are in immediate danger, please seek local emergency support.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-16 pt-8 border-t border-[#D8CFC3]/70 text-center">
          <p className="text-xs text-[#8B7355]/80">
            © {new Date().getFullYear()} Mindful Gloww. All rights reserved.
          </p>
        </div>
      </motion.div>

      {/* ================= SOFT TOP FADE ================= */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#F7F4EF] to-transparent" />
    </footer>
  );
}
