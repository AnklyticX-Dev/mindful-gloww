"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen overflow-hidden bg-[#F8F7F5]"
    >
      {/* ================= BACKGROUND IMAGE ================= */}
  {/* ================= BACKGROUND IMAGE ================= */}
<div className="absolute inset-0 z-0">
  <Image
    src="/bg.png"
    alt="Mindful Gloww background"
    fill
    priority
    className="object-cover object-left"
  />

  {/* Directional overlay — left clear, right faded */}
  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 " />
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

          /* 🔽 placement tuning (ONLY CHANGE) */
          justify-start
          translate-y-[12vh]
          lg:translate-y-[14vh]
          lg:pl-[10%]
        "
      >
        <motion.h1
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
          "
        >
          Find clarity. Feel safe again.
        </motion.h1>

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
          "
        >
          Come back to yourself.
        </motion.p>

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
          Mindful Gloww is here to guide you towards healing.
        </motion.p>

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
            shadow-md
            hover:bg-[#9E5C41]
            transition
          "
        >
          Book a Confidential Consultation
        </motion.a>
      </div>

      {/* ================= WATER COLOR WAVES ================= */}
      <div className="absolute bottom-0 left-0 w-full z-20 pointer-events-none">
        {/* Wave 1 */}
        <svg
          className="w-[200%] h-32"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#F4EDE2"
            d="
              M0,224
              C120,210 240,180 360,176
              C480,172 600,196 720,208
              C840,220 960,220 1080,208
              C1200,196 1320,172 1440,176
              L1440,320 L0,320 Z
            "
          />
        </svg>

        {/* Wave 2 */}
        <svg
          className="absolute bottom-0 left-0 w-[200%] h-40 opacity-60"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#EFE6D8"
            d="
              M0,256
              C180,230 360,210 540,216
              C720,222 900,248 1080,246
              C1260,244 1380,224 1440,216
              L1440,320 L0,320 Z
            "
          />
        </svg>
      </div>
    </section>
  );
}
