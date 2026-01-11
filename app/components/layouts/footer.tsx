"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { label: "Services", href: "#services", id: "footer-services" },
    { label: "Specialisation", href: "#specialisation", id: "footer-specialisation" },
    { label: "Book a consultation", href: "#contact", id: "footer-contact" },
  ];

  return (
    <footer 
      className="relative mt-32 overflow-hidden"
      role="contentinfo"
      aria-label="Site footer"
    >
      {/* ================= BACKGROUND IMAGE ================= */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <Image
          src="/bg.jpeg"
          alt="" // Decorative image - empty alt for screen readers
          fill
          priority
          className="object-cover"
          sizes="100vw"
          quality={85}
        />
        <div className="absolute inset-0 bg-[#F7F4EF]/85" />
      </div>

      {/* ================= CONTENT ================= */}
      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Main grid - responsive with mobile-first approach */}
        <div className="grid gap-10 md:gap-14 md:grid-cols-3 text-sm text-[#5D4C3B]">
          {/* Brand Section */}
          <div className="space-y-4">
            <h2 className="font-serif text-2xl text-[#3A2E1F] mb-4">
              <span className="sr-only">Mindful Gloww</span>
              <span aria-hidden="true">
                Mindful <span className="text-[#8B7355]">Gloww</span>
              </span>
            </h2>
            <p className="leading-relaxed text-[#5D4C3B]/80 max-w-sm">
              A calm, confidential space for healing from narcissistic behaviour,
              emotional abuse, and trauma — at your pace, in your time.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="font-medium mb-6 text-[#3A2E1F] text-base">
              Explore
            </h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-3.5">
                {navigationLinks.map(({ label, href, id }) => (
                  <li key={id}>
                    <a
                      href={href}
                      id={id}
                      className="hover:text-[#8B7355] focus:text-[#8B7355] focus:outline-none focus:ring-2 focus:ring-[#8B7355] focus:ring-offset-2 focus:ring-offset-[#F7F4EF] transition-colors duration-200 py-1 px-2 rounded"
                      aria-label={`Navigate to ${label}`}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Disclaimer Section */}
          <div>
            <h3 className="font-medium mb-6 text-[#3A2E1F] text-base">
              Important note
            </h3>
            <div className="space-y-4">
              <p className="leading-relaxed text-[#5D4C3B]/75">
                Mindful Gloww offers emotional support and guidance.
                It does not replace medical, psychological, or psychiatric care.
              </p>
              <p className="leading-relaxed text-[#5D4C3B]/75 font-medium">
                If you are in immediate danger, please seek local emergency support.
              </p>
            </div>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div 
          className="mt-16 pt-8 border-t border-[#D8CFC3]/70 text-center"
          role="separator"
          aria-orientation="horizontal"
        >
          <p className="text-xs text-[#8B7355]/80">
            © {currentYear} Mindful Gloww. All rights reserved.
          </p>
          <p className="sr-only">
            Website designed with accessibility in mind.
          </p>
        </div>
      </motion.div>

      {/* ================= SOFT TOP FADE ================= */}
      <div 
        className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#F7F4EF] to-transparent pointer-events-none"
        aria-hidden="true"
      />

      {/* Skip to main content link for keyboard navigation */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-[#3A2E1F] focus:text-white focus:px-4 focus:py-2 focus:rounded"
      >
        Skip to main content
      </a>
    </footer>
  );
}
