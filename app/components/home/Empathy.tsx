"use client";

import Image from "next/image";

export default function Empathy() {
  const wordItems = ["heard", "understood", "supported without judgment"];

  return (
    <section
      id="empathy"
      className="relative w-full overflow-hidden"
      aria-labelledby="empathy-heading"
      role="region"
      aria-label="Empathy and support section"
    >
      {/* ================= TOP WAVE (FIXED – NO SLAB) ================= */}
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

      {/* ================= BACKGROUND IMAGE ================= */}
      <div 
        className="absolute inset-0 z-0"
        aria-hidden="true"
        role="presentation"
      >
        <Image
          src="/bg.jpeg"
          alt="Gentle textured background with soft patterns"
          fill
          priority
          className="object-cover object-center"
          aria-hidden="true"
          sizes="100vw"
        />

        {/* Soft contrast overlay (no color change) */}
        <div 
          className="absolute inset-0 bg-[#F6F2EC]/70 md:bg-[#F6F2EC]/45"
          aria-hidden="true"
          role="presentation"
        />
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 pt-32 pb-32 text-center">
        {/* ================= HEADING WITH EMPATHY GLOW ================= */}
        <h2
          id="empathy-heading"
          className="
            font-serif
            text-3xl sm:text-4xl md:text-5xl
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
          tabIndex={0}
          aria-label="Message: You're not broken — and you're not alone"
        >
          You're not broken — and you're not alone
        </h2>

        {/* ================= SUPPORTING TEXT ================= */}
        <p
          className="
            text-lg sm:text-xl
            text-[#5D4C3B]
            leading-relaxed
            mb-8
            max-w-3xl
            mx-auto
            drop-shadow-[0_1px_3px_rgba(255,255,255,0.6)]
          "
          tabIndex={0}
        >
          Healing isn't about quick advice or being told to "move on."
        </p>

        {/* ================= EMPATHY WORD PILLS ================= */}
        <div 
          className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-10"
          role="list"
          aria-label="Ways you will feel in our care"
        >
          {wordItems.map((word, index) => (
            <span
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
              role="listitem"
              tabIndex={0}
              aria-label={`You will feel ${word}`}
              onKeyDown={(e) => {
                // Allow keyboard navigation through items
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  // Optionally add focus management for keyboard users
                  const nextIndex = index < wordItems.length - 1 ? index + 1 : 0;
                  (document.querySelectorAll('[role="listitem"]')[nextIndex] as HTMLElement)?.focus();
                }
              }}
            >
              {word}
            </span>
          ))}
        </div>

        {/* ================= BRAND LINE ================= */}
        <p
          className="
            text-lg sm:text-xl
            text-[#5D4C3B]
            leading-relaxed
            max-w-3xl
            mx-auto
            drop-shadow-[0_1px_3px_rgba(255,255,255,0.5)]
          "
          tabIndex={0}
        >
          At{" "}
          <span
            className="
              font-semibold
              text-[#3A2E1F]
              drop-shadow-[0_1px_2px_rgba(139,115,85,0.25)]
              [text-shadow:0_0_8px_rgba(139,115,85,0.2)]
            "
            aria-label="Brand name: Mindful Gloww"
          >
            Mindful Gloww
          </span>
          , you're allowed to take your time.
        </p>

        {/* ================= HIDEN CONTEXT FOR SCREEN READERS ================= */}
        <div className="sr-only" aria-live="polite">
          <p>
            This section emphasizes that healing is a personal journey where you will be heard, 
            understood, and supported without judgment.
          </p>
          <p>
            At Mindful Gloww, we believe in compassionate support at your own pace.
          </p>
        </div>
      </div>

      {/* ================= BOTTOM WAVE (MATCHED) ================= */}
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