"use client";

import Image from "next/image";

export default function Empathy() {
  const wordItems = ["heard", "understood", "supported without judgment"];

  return (
    <section
      id="empathy"
      className="relative w-full overflow-hidden"
    >
      {/* ================= BACKGROUND IMAGE ================= */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg.jpeg"   /* soft watercolor / paper background */
          alt="Gentle background"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Very light paper wash */}
        <div className="absolute inset-0 bg-[#F6F2EC]/55" />
      </div>

      {/* ================= TOP WAVE ================= */}
      <div className="absolute top-0 left-0 w-full z-10 pointer-events-none">
        <svg
          className="w-[200%] h-24"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#F6F2EC"
            d="
              M0,160
              C120,150 240,130 360,135
              C480,140 600,165 720,175
              C840,185 960,175 1080,160
              C1200,145 1320,135 1440,140
              L1440,0 L0,0 Z
            "
          />
        </svg>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-20 max-w-4xl mx-auto px-6 py-36 text-center">
        {/* Heading */}
        <h2
          className="
            font-serif
            text-3xl sm:text-4xl md:text-5xl
            text-[#3A2E1F]
            mb-10
          "
        >
          You're not broken — and you're not alone
        </h2>

        {/* Body text */}
        <p className="text-lg sm:text-xl text-[#5D4C3B] leading-relaxed mb-8 max-w-3xl mx-auto">
          Healing isn't about quick advice or being told to “move on.”
        </p>

        {/* Emphasis words (inline, not card) */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-10">
          {wordItems.map((word) => (
            <span
              key={word}
              className="
                px-4 py-2
                rounded-full
                bg-[#EFE8DC]/80
                text-[#3A2E1F]
                font-medium
                text-sm sm:text-base
              "
            >
              {word}
            </span>
          ))}
        </div>

        {/* Closing line */}
        <p className="text-lg sm:text-xl text-[#5D4C3B] leading-relaxed max-w-3xl mx-auto">
          At{" "}
          <span className="font-semibold text-[#3A2E1F]">
            Mindful Gloww
          </span>
          , you're allowed to take your time.
        </p>
      </div>

      {/* ================= BOTTOM WAVE ================= */}
      <div className="absolute bottom-0 left-0 w-full z-10 pointer-events-none">
        <svg
          className="w-[200%] h-28"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#F6F2EC"
            d="
              M0,224
              C120,210 240,190 360,185
              C480,180 600,195 720,205
              C840,215 960,210 1080,200
              C1200,190 1320,180 1440,185
              L1440,320 L0,320 Z
            "
          />
        </svg>
      </div>
    </section>
  );
}
