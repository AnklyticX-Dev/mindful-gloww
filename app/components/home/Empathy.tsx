"use client";

import Image from "next/image";

export default function Empathy() {
  const wordItems = ["heard", "understood", "supported without judgment"];

  return (
    <section
      id="empathy"
      className="relative w-full overflow-hidden"
      aria-labelledby="empathy-heading"
    >
      {/* ================= TOP WAVE ================= */}
      <div
        className="absolute top-0 left-0 w-full z-20 pointer-events-none"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          className="w-full h-[80px]"
          focusable="false"
        >
          <path
            fill="#F6F2EC"
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

      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <Image
          src="/bg.jpeg"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-[#F6F2EC]/70 md:bg-[#F6F2EC]/45"
          aria-hidden="true"
        />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 pt-32 pb-32 text-center">
        {/* ================= HEADING (H3 – SAME VISUAL SIZE) ================= */}
    <h3
  id="empathy-heading"
  className="
    font-serif
    lg:text-6xl sm:text-5xl
    text-[#3A2E1F]
    mb-10
    font-semibold
    drop-shadow-[0_2px_4px_rgba(139,115,85,0.25)]
    [text-shadow:
      0_0_10px_rgba(139,115,85,0.25),
      0_0_22px_rgba(139,115,85,0.18),
      0_0_44px_rgba(139,115,85,0.12)
    ]
  "
>
  You're not broken – and you're not alone
</h3>


        {/* ================= SUPPORTING TEXT ================= */}
        <p className="text-lg sm:text-xl text-[#5D4C3B] leading-relaxed mb-8 max-w-3xl mx-auto">
          Healing isn't about quick advice or being told to “move on.”
        </p>

        {/* ================= EMPATHY LIST ================= */}
        <ul className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-10">
          {wordItems.map((word) => (
            <li
              key={word}
              className="
                px-4 py-2
                rounded-full
                bg-[#EFE8DC]
                text-[#3A2E1F]
                font-medium
                text-sm sm:text-base
                drop-shadow-[0_2px_6px_rgba(139,115,85,0.25)]
              "
            >
              {word}
            </li>
          ))}
        </ul>

        {/* ================= BRAND LINE ================= */}
        <p className="text-lg sm:text-xl text-[#5D4C3B] leading-relaxed max-w-3xl mx-auto">
          At <span className="font-semibold text-[#3A2E1F]">Mindful Gloww</span>
          , you're allowed to take your time.
        </p>

        {/* ================= SCREEN READER CONTEXT ================= */}
        <div className="sr-only" aria-live="polite">
          This section reassures visitors that healing happens through empathy,
          patience, and non-judgmental support.
        </div>
      </div>

      {/* ================= BOTTOM WAVE ================= */}
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
            fill="#F6F2EC"
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
