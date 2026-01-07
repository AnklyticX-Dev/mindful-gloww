"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden bg-gradient-to-br from-[#F7F3E9] via-[#E8DFD2] to-[#EDE6DA] px-6 py-20">

      {/* Soft background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-[420px] h-[420px] bg-[#E8D0B3]/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-[480px] h-[480px] bg-[#C1A580]/20 rounded-full blur-3xl" />
      </div>

      <motion.div
        className="relative max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Main content */}
        <div className="grid gap-12 md:grid-cols-3 text-sm text-[#5D4C3B]">

          {/* Brand */}
          <div>
            <h3 className="text-xl font-semibold text-[#2F2A25] mb-4">
              Mindful <span className="text-[#8B7355]">Gloww</span>
            </h3>
            <p className="leading-relaxed text-[#5D4C3B]/80 max-w-sm">
              A calm, confidential space for healing from narcissistic behaviour,
              emotional abuse, and trauma.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-medium mb-4 text-[#2F2A25]">
              Explore
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#services"
                  className="hover:text-[#8B7355] transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#specialisation"
                  className="hover:text-[#8B7355] transition-colors"
                >
                  Specialisation
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-[#8B7355] transition-colors"
                >
                  Book Consultation
                </a>
              </li>
            </ul>
          </div>

          {/* Disclaimer */}
          <div>
            <h4 className="font-medium mb-4 text-[#2F2A25]">
              Important Note
            </h4>
            <p className="leading-relaxed text-[#5D4C3B]/75">
              Mindful Gloww offers emotional support and guidance.
              It does not replace medical or psychiatric care.
              If you are in immediate danger, please seek local emergency support.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-16 border-t border-[#D6C8B5]/60 pt-8 text-center">
          <p className="text-xs text-[#8B7355]/80">
            © {new Date().getFullYear()} Mindful Gloww. All rights reserved.
          </p>
        </div>
      </motion.div>
    </footer>
  );
}
