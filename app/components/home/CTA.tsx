"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden"
      aria-labelledby="cta-heading"
      role="region"
      aria-label="Call to Action section"
    >
      {/* ================= TOP WAVE ================= */}
      <div
        className="absolute top-0 left-0 w-full z-20 pointer-events-none"
        aria-hidden="true"
        role="presentation"
      >
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          className="w-full h-[80px]"
          aria-hidden="true"
          focusable="false"
          role="presentation"
        >
          <title id="top-wave-title">Decorative top wave</title>
          <path
            fill="#F7F4EF"
            d="
              M0,28
              C120,8 240,2 360,6
              C480,10 600,26 720,30
              C840,34 960,26 1080,18
              C1200,10 1320,6 1440,10
              L1440,0 L0,0 Z
            "
          />
        </svg>
      </div>

      {/* ================= BACKGROUND IMAGE ================= */}
      <div 
        className="absolute inset-0 z-0" 
        aria-hidden="true"
        role="presentation"
      >
        <Image
          src="/bg.jpeg"
          alt="Decorative background texture"
          fill
          priority
          className="object-cover"
          aria-hidden="true"
          sizes="100vw"
        />

        {/* Contrast overlay */}
        <div
          className="
            absolute inset-0
            bg-[#F7F4EF]/80
            md:bg-[#F7F4EF]/55
          "
          aria-hidden="true"
          role="presentation"
        />
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 pt-[calc(10rem+80px)] pb-[calc(10rem+80px)] text-center">
        {/* ================= HEADING ================= */}
        <motion.h2
          id="cta-heading"
          className="
            font-serif
             text-3xl sm:text-4xl
            font-semibold
            text-[#3A2E1F]
            mb-8
            relative
          "
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          tabIndex={0}
          aria-label="Message: You don't have to do this alone"
        >
         <span
  className="
    relative z-10
    font-serif
    lg:text-6xl sm:text-5xl
    drop-shadow-[0_2px_4px_rgba(139,115,85,0.25)]
    [text-shadow:
      0_0_10px_rgba(139,115,85,0.25),
      0_0_24px_rgba(139,115,85,0.18),
      0_0_48px_rgba(139,115,85,0.12)
    ]
  "
>
  You don&apos;t have to do this alone
</span>

        </motion.h2>

        {/* ================= TEXT CONTENT ================= */}
        <motion.div
          className="space-y-6 max-w-2xl mx-auto mb-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          role="region"
          aria-label="Support message"
        >
          <p
            className="
              text-base sm:text-lg md:text-xl
              text-[#5D4C3B]
              leading-relaxed
              drop-shadow-[0_1px_3px_rgba(255,255,255,0.6)]
            "
            tabIndex={0}
          >
            If something in you is saying,
            <span className="italic font-medium"> "I need support,"</span>
            please listen to it.
          </p>

          <p
            className="
              text-xl md:text-2xl
              font-semibold
              text-[#3A2E1F]
              drop-shadow-[0_2px_6px_rgba(139,115,85,0.25)]
              [text-shadow:
                0_0_8px_rgba(139,115,85,0.25),
                0_0_20px_rgba(139,115,85,0.15)
              ]
            "
            tabIndex={0}
            aria-label="Important: Your healing matters and it can begin today"
          >
            Your healing matters - and it can begin today.
          </p>
        </motion.div>

        {/* ================= CTA BUTTON ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          role="region"
          aria-label="Action section"
        >
          <a
            href="#booking-form"
            className="
              inline-flex items-center gap-3
              px-12 py-4
              rounded-full
              bg-[#8B7355]
              text-white
              text-lg font-semibold
              hover:bg-[#7A644A]
              transition-all duration-300
              focus:outline-none focus:ring-2 focus:ring-[#8B7355] focus:ring-offset-4
              drop-shadow-[0_6px_18px_rgba(139,115,85,0.35)]
              hover:drop-shadow-[0_10px_30px_rgba(139,115,85,0.45)]
              hover:scale-[1.02]
            "
            aria-label="Book your consultation. Opens booking form"
            aria-describedby="cta-description"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                document.getElementById('booking-form')?.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            <span className="sr-only">Take action: </span>
            Book your consultation
            <ArrowRight className="w-5 h-5" aria-hidden="true" />
          </a>
          <div id="cta-description" className="sr-only">
            Navigates to the booking form section on the same page
          </div>
        </motion.div>

        {/* ================= FOOTNOTE ================= */}
        <motion.div
          className="
            mt-10
            text-[#6B5A44]
            text-base
            font-medium
            drop-shadow-[0_1px_3px_rgba(255,255,255,0.5)]
          "
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          role="region"
          aria-label="Service qualities"
          tabIndex={0}
        >
          <p className="sr-only">Our service is characterized by: </p>
          <div 
            className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8"
            role="list"
            aria-label="Service attributes"
          >
            <span className="inline-block" role="listitem">Confidential</span>
            <span className="inline-block" role="listitem">Compassionate</span>
            <span className="inline-block" role="listitem">At your pace</span>
          </div>
        </motion.div>
      </div>

      {/* ================= BOTTOM WAVE ================= */}
      <div
        className="absolute bottom-0 left-0 w-full z-20 pointer-events-none"
        aria-hidden="true"
        role="presentation"
      >
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          className="w-full h-[80px]"
          aria-hidden="true"
          focusable="false"
          role="presentation"
        >
          <title id="bottom-wave-title">Decorative bottom wave</title>
          <path
            fill="#F7F4EF"
            d="
              M0,52
              C120,70 240,78 360,74
              C480,70 600,52 720,46
              C840,40 960,46 1080,58
              C1200,70 1320,78 1440,74
              L1440,80 L0,80 Z
            "
          />
        </svg>
      </div>
    </section>
  );
}