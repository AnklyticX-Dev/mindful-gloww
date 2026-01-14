"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Problem() {
  const feelings = [
    {
      id: 1,
      text: "Questioning your reality after a toxic relationship",
      color: "#9FB3A6",
    },
    {
      id: 2,
      text: "Emotionally exhausted and anxious",
      color: "#A7B7AD",
    },
    {
      id: 3,
      text: "Struggling to understand narcissistic behaviour and abuse",
      color: "#9FB3A6",
    },
  ];

  return (
    <section
      id="problem"
      className="relative w-full overflow-hidden"
      aria-labelledby="problem-heading"
    >
      {/* ================= BACKGROUND IMAGE ================= */}
      <div
        className="absolute inset-0 z-0"
        aria-hidden="true"
      >
        <Image
          src="/bg.jpeg"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />

        <div
          className="absolute inset-0 bg-[#F8F4EE]/65 md:bg-[#F8F4EE]/45"
          aria-hidden="true"
        />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 pt-40 pb-40 text-center">
        {/* ================= SECTION HEADING (H2) ================= */}
       <h2
  id="problem-heading"
  className="
    font-serif
    lg:text-6xl sm:text-5xl
    text-[#3A2E1F]
    mb-10
    font-semibold
    drop-shadow-[0_2px_4px_rgba(139,115,85,0.25)]
    [text-shadow:
      0_0_10px_rgba(139,115,85,0.22),
      0_0_22px_rgba(139,115,85,0.14)
    ]
  "
>
  You might feel like…
</h2>


        {/* ================= LIST OF FEELINGS ================= */}
        <ul className="space-y-6 max-w-xl mx-auto text-left">
          {feelings.map((feeling, index) => (
            <motion.li
              key={feeling.id}
              className="flex items-start gap-4 text-[#5D4C3B]"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Decorative bullet */}
              <span
                className="mt-2 w-3 h-3 rounded-full flex-shrink-0"
                style={{ backgroundColor: feeling.color }}
                aria-hidden="true"
              />

              {/* Feeling text */}
              <p
                className="
                  text-base sm:text-lg
                  leading-relaxed
                  drop-shadow-[0_1px_3px_rgba(255,255,255,0.6)]
                "
              >
                {feeling.text}
              </p>
            </motion.li>
          ))}
        </ul>

        {/* ================= DIVIDER ================= */}
        <div
          className="w-24 h-px bg-[#D8CFC3] mx-auto my-12"
          aria-hidden="true"
        />

        {/* ================= REASSURANCE ================= */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="
            text-base sm:text-lg
            text-[#6B4E32]
            leading-relaxed
            drop-shadow-[0_1px_3px_rgba(255,255,255,0.55)]
          "
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
          >
            What you're feeling makes sense.
          </span>
        </motion.p>

        {/* ================= SCREEN READER CONTEXT ================= */}
        <div className="sr-only" aria-live="polite">
          This section acknowledges common emotional experiences following
          difficult or abusive relationships and reassures visitors that
          their feelings are valid and understandable.
        </div>
      </div>

      {/* ================= DECORATIVE WAVE ================= */}
      <div
        className="absolute bottom-0 left-0 w-full z-20 pointer-events-none"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="w-full h-[120px]"
          focusable="false"
        >
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
