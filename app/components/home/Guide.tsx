"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Guide() {
  const pillars = [
    { title: "Compassion", desc: "Gentle understanding without judgment" },
    { title: "Clarity", desc: "Clear insights and practical guidance" },
    { title: "Emotional Safety", desc: "A secure space for healing" }
  ];

  return (
    <section 
      id="guide"
      className="relative overflow-hidden bg-[#F6F2EC]"
      aria-labelledby="guide-heading"
      role="region"
      aria-label="Guide and personal experience section"
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
          alt="Soft watercolor background with gentle textures"
          fill
          priority
          className="object-cover object-center"
          aria-hidden="true"
          sizes="100vw"
        />

        {/* Soft contrast wash (same palette) */}
        <div 
          className="absolute inset-0 bg-[#F6F2EC]/55 md:bg-[#F6F2EC]/40"
          aria-hidden="true"
          role="presentation"
        />
      </div>

      {/* ================= SUBTLE GRID ================= */}
      <div 
        className="absolute inset-0 pointer-events-none z-10"
        aria-hidden="true"
        role="presentation"
      >
        <svg className="w-full h-full opacity-[0.025]" aria-hidden="true">
          <defs>
            <pattern
              id="guide-grid"
              width="80"
              height="80"
              patternUnits="userSpaceOnUse"
            >
              <title>Decorative grid pattern</title>
              <path
                d="M 80 0 L 0 0 0 80"
                fill="none"
                stroke="#8B7355"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#guide-grid)" />
        </svg>
      </div>

      {/* ================= SOFT BLOBS ================= */}
      <div 
        className="absolute inset-0 overflow-hidden pointer-events-none z-10"
        aria-hidden="true"
        role="presentation"
      >
        <motion.div
          className="absolute -top-40 -left-40 w-[520px] h-[520px] bg-[#E8D0B3]/20 rounded-full blur-3xl"
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden="true"
        />
        <motion.div
          className="absolute -bottom-40 -right-40 w-[520px] h-[520px] bg-[#C1A580]/15 rounded-full blur-3xl"
          animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden="true"
        />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-20 max-w-6xl mx-auto px-6 py-40 space-y-24">
        {/* ===== Heading ===== */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          role="banner"
          aria-label="Section introduction"
        >
          <div 
            className="text-[#8B7355] text-sm font-semibold tracking-widest uppercase mb-4"
            tabIndex={0}
            aria-label="Category: Personal Guidance"
          >
            Personal Guidance
          </div>

          <h2
            id="guide-heading"
            className="
              font-serif
              text-4xl md:text-5xl lg:text-6xl
              text-[#3A2E1F]
              font-semibold
              drop-shadow-[0_2px_4px_rgba(139,115,85,0.25)]
              [text-shadow:
                0_0_12px_rgba(139,115,85,0.25),
                0_0_26px_rgba(139,115,85,0.18),
                0_0_52px_rgba(139,115,85,0.12)
              ]
            "
            tabIndex={0}
            aria-label="Main heading: Meet someone who truly understands"
          >
            Meet someone who truly understands
          </h2>
        </motion.div>

        {/* ===== ABOUT SECTION ===== */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start"
          role="article"
          aria-label="Personal story and background"
        >
          <div className="relative max-w-md mx-auto">
            <figure>
              <Image
                src="/ruchi.jpeg"
                alt="Ruchi, Founder of Mindful Gloww - A compassionate guide with lived experience in healing from trauma"
                width={480}
                height={620}
                className="rounded-[28px] object-cover drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)]"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <figcaption className="sr-only">
                Ruchi, Founder of Mindful Gloww, with compassionate presence and understanding gaze
              </figcaption>
            </figure>
          </div>

          <div 
            className="text-[#5D4C3B] space-y-6 text-lg leading-relaxed"
            role="article"
            aria-label="Personal journey narrative"
          >
            <p 
              className="drop-shadow-[0_1px_3px_rgba(255,255,255,0.55)]"
              tabIndex={0}
            >
              For a long time, my life was shaped by trauma—childhood sexual
              abuse and a marriage to a narcissist that lasted 24 years.
            </p>

            <p 
              className="drop-shadow-[0_1px_3px_rgba(255,255,255,0.55)]"
              tabIndex={0}
            >
              Walking away from that life was the hardest thing I have ever
              done—but it was also the beginning of my healing.
            </p>

            <p 
              className="drop-shadow-[0_1px_3px_rgba(255,255,255,0.55)]"
              tabIndex={0}
            >
              Today, I help others who feel stuck, exhausted, and emotionally
              overwhelmed find their way back to themselves.
            </p>

            <p 
              className="drop-shadow-[0_1px_3px_rgba(255,255,255,0.55)]"
              tabIndex={0}
            >
              My work is rooted in empathy, lived experience, and a deep
              understanding of trauma bonds, abuse dynamics, and emotional
              recovery.
            </p>

            <blockquote
              className="
                font-semibold
                text-[#3A2E1F]
                drop-shadow-[0_2px_6px_rgba(139,115,85,0.3)]
                [text-shadow:
                  0_0_10px_rgba(139,115,85,0.25),
                  0_0_22px_rgba(139,115,85,0.15)
                ]
                pl-6 border-l-4 border-[#8B7355]
              "
              tabIndex={0}
              aria-label="Message of hope"
            >
              <p>
                You don't have to do this alone anymore.
                <br />
                Your story matters.
                <br />
                And it's not too late to begin again.
              </p>
            </blockquote>
          </div>
        </div>

        {/* ===== SUPPORTING TEXT ===== */}
        <div className="space-y-8" role="contentinfo">
          <p
            className="
              text-lg md:text-xl
              text-[#5D4C3B]
              leading-relaxed
              text-center
              max-w-3xl
              mx-auto
              drop-shadow-[0_1px_3px_rgba(255,255,255,0.55)]
            "
            tabIndex={0}
          >
            <span
              className="
                font-semibold
                text-[#8B7355]
                drop-shadow-[0_1px_2px_rgba(139,115,85,0.3)]
              "
              aria-label="Brand: Mindful Gloww"
            >
              Mindful Gloww
            </span>{" "}
            is guided by someone who has personally lived through narcissistic
            behaviour and emotional abuse.
          </p>

          <p
            className="
              text-lg md:text-xl
              text-[#5D4C3B]
              leading-relaxed
              text-center
              max-w-3xl
              mx-auto
              drop-shadow-[0_1px_3px_rgba(255,255,255,0.55)]
            "
            tabIndex={0}
          >
            This work comes from{" "}
            <span
              className="
                font-semibold
                text-[#8B7355]
                [text-shadow:0_0_8px_rgba(139,115,85,0.25)]
              "
              aria-label="Key concept: lived experience"
            >
              lived experience
            </span>
            — understanding the confusion, the self-blame, and the slow rebuilding
            of trust in yourself.
          </p>
        </div>

        {/* ===== PILLARS ===== */}
        <div 
          className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center"
          role="list"
          aria-label="Core pillars of our approach"
        >
          {pillars.map((pillar, index) => (
            <div 
              key={pillar.title} 
              className="space-y-3"
              role="listitem"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  const nextIndex = index < pillars.length - 1 ? index + 1 : 0;
                  (document.querySelectorAll('[role="listitem"]')[nextIndex] as HTMLElement)?.focus();
                }
              }}
            >
              <h3
                className="
                  text-xl
                  font-semibold
                  text-[#8B7355]
                  drop-shadow-[0_1px_2px_rgba(139,115,85,0.25)]
                "
                aria-label={`Pillar ${index + 1}: ${pillar.title}`}
              >
                {pillar.title}
              </h3>
              <p 
                className="text-[#5D4C3B] drop-shadow-[0_1px_3px_rgba(255,255,255,0.5)]"
                aria-label={`Description: ${pillar.desc}`}
              >
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

        {/* ===== FINAL STATEMENT ===== */}
        <p
          className="
            text-xl md:text-2xl
            text-[#5D4C3B]
            text-center
            italic
            max-w-4xl
            mx-auto
            drop-shadow-[0_1px_3px_rgba(255,255,255,0.55)]
          "
          tabIndex={0}
          role="contentinfo"
          aria-label="Closing promise"
        >
          You'll be met with{" "}
          <span
            className="
              font-semibold
              text-[#8B7355]
              [text-shadow:
                0_0_10px_rgba(139,115,85,0.25),
                0_0_22px_rgba(139,115,85,0.15)
              ]
            "
            aria-label="Core value: understanding"
          >
            understanding
          </span>{" "}
          that can only come from having walked this path before.
        </p>

        {/* ===== HIDDEN CONTEXT FOR SCREEN READERS ===== */}
        <div className="sr-only" aria-live="polite">
          <p>
            This section shares the personal journey of the founder who has lived experience 
            with trauma, abuse recovery, and healing. The approach is built on compassion, 
            clarity, and emotional safety.
          </p>
        </div>
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