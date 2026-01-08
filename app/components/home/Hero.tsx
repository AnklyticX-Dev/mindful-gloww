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
      aria-label="Hero section: Find clarity and feel safe again"
    >
      {/* ================= BACKGROUND IMAGE ================= */}
      <div 
        className="absolute inset-0 z-0"
        aria-hidden="true"
        role="presentation"
      >
        <Image
          src="/bg.png"
          alt="Soft textured background with gentle patterns for Mindful Gloww"
          fill
          priority
          className="object-cover object-left"
          aria-hidden="true"
          sizes="100vw"
        />

        {/* Soft contrast wash (same palette, improves text clarity) */}
        <div 
          className="absolute inset-0 bg-[#F8F7F5]/60 md:bg-[#F8F7F5]/40"
          aria-hidden="true"
          role="presentation"
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
        role="main"
      >
        {/* ================= MAIN HEADLINE ================= */}
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
          tabIndex={0}
          aria-label="Main message: Find clarity. Feel safe again."
        >
          Find clarity. Feel safe again.
        </motion.h1>

        {/* ================= SUB HEADLINE ================= */}
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
            [text-shadow:
              0_0_10px_rgba(179,106,76,0.22),
              0_0_20px_rgba(179,106,76,0.14)
            ]
          "
          tabIndex={0}
          aria-label="Invitation: Come back to yourself."
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
            drop-shadow-[0_1px_3px_rgba(255,255,255,0.6)]
          "
          tabIndex={0}
        >
          If you're feeling emotionally drained, confused, or stuck,
          <span className="sr-only">Mindful Gloww</span>
          <span aria-hidden="true"> Mindful Gloww </span>
          is here to guide you towards healing.
        </motion.p>

        {/* ================= CTA BUTTON ================= */}
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
              drop-shadow-[0_6px_18px_rgba(179,106,76,0.45)]
              hover:drop-shadow-[0_10px_30px_rgba(179,106,76,0.55)]
              focus:outline-none focus:ring-2 focus:ring-[#B36A4C] focus:ring-offset-4
              focus:ring-offset-[#F8F7F5]
            "
            aria-label="Book a Confidential Consultation. Opens contact section on same page."
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Book a Confidential Consultation
          </motion.a>
          <div className="sr-only" aria-live="polite">
            Press Enter or Space to navigate to the contact section.
          </div>
        </motion.div>

        {/* ================= HIDDEN CONTEXT FOR SCREEN READERS ================= */}
        <div className="sr-only" aria-live="polite">
          <p>
            Welcome to Mindful Gloww. This is a safe space for healing from emotional exhaustion,
            confusion, and trauma. We provide compassionate guidance to help you find clarity
            and feel safe again.
          </p>
        </div>
      </div>

      {/* ================= BOTTOM WAVE (CONSISTENT SYSTEM) ================= */}
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
          <title id="bottom-wave-title">Decorative bottom wave transition</title>
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

      {/* ================= SKIP TO MAIN CONTENT LINK (FOR KEYBOARD USERS) ================= */}
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
          focus:outline-none focus:ring-2 focus:ring-[#B36A4C] focus:ring-offset-2
        "
      >
        Skip to main content
      </a>
    </section>
  );
}