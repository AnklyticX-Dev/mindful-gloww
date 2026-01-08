"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Problem() {
  const feelings = [
    {
      id: 1,
      text: "Questioning your reality after a toxic relationship",
      color: "#9FB3A6",
      ariaLabel: "Feeling: Questioning your reality after a toxic relationship"
    },
    {
      id: 2,
      text: "Emotionally exhausted and anxious",
      color: "#A7B7AD",
      ariaLabel: "Feeling: Emotionally exhausted and anxious"
    },
    {
      id: 3,
      text: "Struggling to understand narcissistic behaviour and abuse",
      color: "#9FB3A6",
      ariaLabel: "Feeling: Struggling to understand narcissistic behaviour and abuse"
    }
  ];

  return (
    <section
      id="problem"
      className="relative w-full overflow-hidden"
      aria-labelledby="problem-heading"
      role="region"
      aria-label="Common feelings and experiences section"
    >
      {/* ================= BACKGROUND IMAGE ================= */}
      <div 
        className="absolute inset-0 z-0"
        aria-hidden="true"
        role="presentation"
      >
        <Image
          src="/bg.jpeg"
          alt="Soft watercolor background with gentle textures"
          fill
          priority
          className="object-cover object-center"
          aria-hidden="true"
          sizes="100vw"
        />

        {/* Soft contrast wash (same palette, improves readability) */}
        <div 
          className="absolute inset-0 bg-[#F8F4EE]/65 md:bg-[#F8F4EE]/45"
          aria-hidden="true"
          role="presentation"
        />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 pt-40 pb-40 text-center">
        {/* ================= HEADING ================= */}
        <h2
          id="problem-heading"
          className="
            font-serif
            text-3xl sm:text-4xl
            text-[#3A2E1F]
            mb-10
            font-semibold
            drop-shadow-[0_2px_4px_rgba(139,115,85,0.25)]
            [text-shadow:
              0_0_10px_rgba(139,115,85,0.22),
              0_0_22px_rgba(139,115,85,0.14)
            ]
          "
          tabIndex={0}
          aria-label="You might be feeling these common experiences"
        >
          You might be feeling…
        </h2>

        {/* ================= LIST ================= */}
        <ul 
          className="space-y-6 max-w-xl mx-auto text-left"
          role="list"
          aria-label="List of common feelings and experiences"
        >
          {feelings.map((feeling, index) => (
            <motion.li 
              key={feeling.id}
              className="flex items-start gap-4 text-[#5D4C3B]"
              role="listitem"
              tabIndex={0}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  const nextIndex = index < feelings.length - 1 ? index + 1 : 0;
                  (document.querySelectorAll('[role="listitem"]')[nextIndex] as HTMLElement)?.focus();
                }
              }}
            >
              {/* Bullet point */}
              <span 
                className="mt-2 w-3 h-3 rounded-full flex-shrink-0"
                style={{ backgroundColor: feeling.color }}
                aria-hidden="true"
                role="presentation"
              >
                <span className="sr-only">Bullet point</span>
              </span>
              
              {/* Feeling text */}
              <p 
                className="
                  text-base sm:text-lg 
                  leading-relaxed 
                  drop-shadow-[0_1px_3px_rgba(255,255,255,0.6)]
                "
                aria-label={feeling.ariaLabel}
              >
                {feeling.text}
              </p>
            </motion.li>
          ))}
        </ul>

        {/* ================= DIVIDER ================= */}
        <div 
          className="w-24 h-px bg-[#D8CFC3] mx-auto my-12 drop-shadow-[0_1px_2px_rgba(139,115,85,0.25)]"
          aria-hidden="true"
          role="presentation"
        />

        {/* ================= REASSURANCE ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          role="contentinfo"
          aria-label="Reassurance message"
        >
          <p
            className="
              text-base sm:text-lg
              text-[#6B4E32]
              leading-relaxed
              drop-shadow-[0_1px_3px_rgba(255,255,255,0.55)]
            "
            tabIndex={0}
          >
            You're not to blame for what you've been through.
            <br />
            <span
              className="
                italic
                [text-shadow:
                  0_0_8px_rgba(139,115,85,0.25),
                  0_0_18px_rgba(139,115,85,0.15)
                ]
              "
              aria-label="Important reassurance: What you're feeling makes sense."
            >
              What you're feeling makes sense.
            </span>
          </p>
        </motion.div>

        {/* ================= HIDDEN CONTEXT FOR SCREEN READERS ================= */}
        <div className="sr-only" aria-live="polite">
          <p>
            This section acknowledges common feelings people experience after difficult relationships,
            including questioning reality, emotional exhaustion, and struggling to understand abuse dynamics.
          </p>
          <p>
            The message emphasizes that these feelings are valid and understandable responses to trauma.
          </p>
        </div>
      </div>

      {/* ================= BOTTOM WAVE (SECTION END) ================= */}
      <div 
        className="absolute bottom-0 left-0 w-full z-20 pointer-events-none"
        aria-hidden="true"
        role="presentation"
      >
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="w-full h-[120px]"
          aria-hidden="true"
          focusable="false"
          role="presentation"
        >
          <title id="bottom-wave-title">Decorative bottom wave transition</title>
          <path
            fill="#F8F4EE"
            d="
              M0,80
              C120,100 240,110 360,104
              C480,98 600,80 720,72
              C840,64 960,70 1080,84
              C1200,98 1320,110 1440,104
              L1440,120 L0,120 Z
            "
          />
        </svg>
      </div>
    </section>
  );
}