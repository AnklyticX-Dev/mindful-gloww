"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen overflow-hidden"
      aria-labelledby="hero-heading"
      role="banner"
    >
      {/* ================= BACKGROUND IMAGE ================= */}
      <div
        className="absolute inset-0 z-0"
        aria-hidden="true"
      >
        <Image
          src="/bg.png"
          alt=""
          fill
          priority
          className="object-cover object-left"
          sizes="100vw"
        />

        {/* MOBILE ONLY contrast overlay */}
        <div
          className="absolute inset-0 bg-[#F8F7F5]/65 md:hidden"
          aria-hidden="true"
        />
      </div>

      {/* ================= HERO CONTENT ================= */}
      <div
        className="
          relative z-10
          flex flex-col items-center
          text-center
          px-6
          pt-[var(--navbar-height-mobile)]
          lg:pt-[var(--navbar-height-desktop)]
          min-h-screen
          justify-start
          translate-y-[12vh]
          lg:translate-y-[14vh]
          lg:pl-[10%]
        "
      >
        {/* ================= MAIN HEADING (ONLY H1) ================= */}
        <motion.h1
          id="hero-heading"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="
            font-serif
            text-4xl sm:text-5xl lg:text-6xl
            text-[#3A2E1F]
            leading-tight
            mb-6
            max-w-[720px]
            font-semibold
            drop-shadow-[0_2px_4px_rgba(179,106,76,0.35)]
            [text-shadow:
              0_0_14px_rgba(179,106,76,0.35),
              0_0_28px_rgba(179,106,76,0.22),
              0_0_56px_rgba(179,106,76,0.14)
            ]
          "
        >
          Find clarity. Feel safe again.
        </motion.h1>

        {/* ================= SUB HEADING ================= */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="
            text-xl sm:text-2xl
            text-[#6B4E32]
            italic
            mb-6
            max-w-[520px]
            drop-shadow-[0_1px_3px_rgba(179,106,76,0.25)]
          "
        >
          Come back to yourself.
        </motion.p>

        {/* ================= SUPPORTING COPY ================= */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="
            text-base sm:text-lg
            text-[#6B4E32]
            max-w-[640px]
            mb-10
            leading-relaxed
          "
        >
          If you're feeling emotionally drained, confused, or stuck,
          <span className="sr-only"> Mindful Gloww </span>
          is here to guide you towards healing.
        </motion.p>

        {/* ================= CTA ================= */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.45 }}
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="
              inline-block
              bg-[#B36A4C]
              text-white
              px-10 py-4
              rounded-lg
              font-medium
              shadow-lg
              hover:bg-[#9E5C41]
              transition
              focus:outline-none
              focus:ring-2
              focus:ring-[#B36A4C]
              focus:ring-offset-4
              focus:ring-offset-[#F8F7F5]
            "
          >
            Book a Confidential Consultation
          </motion.a>
        </motion.div>

        {/* ================= SCREEN READER CONTEXT ================= */}
        <div className="sr-only" aria-live="polite">
          Welcome to Mindful Gloww. This is a safe space for emotional healing,
          clarity, and trauma-informed support.
        </div>
      </div>

      {/* ================= DECORATIVE WAVE ================= */}
      <div
        className="absolute bottom-0 left-0 w-full z-20 pointer-events-none"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          className="w-full h-[80px]"
          focusable="false"
        >
          <path
            fill="#F8F7F5"
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

      {/* ================= SKIP LINK ================= */}
      <a
        href="#main-content"
        className="
          sr-only
          focus:not-sr-only
          absolute top-4 left-4
          bg-[#B36A4C]
          text-white
          px-4 py-2
          rounded
          z-50
        "
      >
        Skip to main content
      </a>
    </section>
  );
}
