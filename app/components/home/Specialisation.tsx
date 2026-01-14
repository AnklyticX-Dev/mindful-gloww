"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  MessageCircle,
  HeartHandshake,
  Brain,
  RefreshCcw,
} from "lucide-react";

export default function Specialisation() {
  const items = [
    {
      id: 1,
      title: "Narcissistic Behaviour",
      subtitle: "Private, safe conversations",
      description: "Understanding and healing from narcissistic behaviour through confidential, supportive conversations",
      icon: <MessageCircle className="w-6 h-6 text-[#5F7F8B]" aria-hidden="true" />,
      blob: "bg-[#E6EFF2]",
      color: "#5F7F8B",
      ariaLabel: "Specialisation: Narcissistic Behaviour with private, safe conversations"
    },
    {
      id: 2,
      title: "Emotional Abuse",
      subtitle: "Simple, grounding routines",
      description: "Recovery from emotional abuse using gentle, grounding practices and routines",
      icon: <HeartHandshake className="w-6 h-6 text-[#6C7A5A]" aria-hidden="true" />,
      blob: "bg-[#EEF2E8]",
      color: "#6C7A5A",
      ariaLabel: "Specialisation: Emotional Abuse with simple, grounding routines"
    },
    {
      id: 3,
      title: "Trauma Recovery",
      subtitle: "Focused healing sessions",
      description: "Trauma-informed recovery through focused, supportive healing sessions",
      icon: <Brain className="w-6 h-6 text-[#B07A3F]" aria-hidden="true" />,
      blob: "bg-[#F4EBDD]",
      color: "#B07A3F",
      ariaLabel: "Specialisation: Trauma Recovery with focused healing sessions"
    },
    {
      id: 4,
      title: "Rebuilding Self-Worth",
      subtitle: "Ongoing for continuous care",
      description: "Rebuilding self-esteem and self-worth through ongoing, continuous support",
      icon: <RefreshCcw className="w-6 h-6 text-[#7A7A7A]" aria-hidden="true" />,
      blob: "bg-[#EFEFEF]",
      color: "#7A7A7A",
      ariaLabel: "Specialisation: Rebuilding Self-Worth with ongoing continuous care"
    },
  ];

  return (
    <section 
      id="specialisations"
      className="relative overflow-hidden bg-[#F6F2EC]"
      aria-labelledby="specialisations-heading"
      role="region"
      aria-label="Areas of specialisation section"
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
          <title id="top-wave-title">Decorative top wave transition</title>
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
      <div 
        className="absolute inset-0 z-0"
        aria-hidden="true"
        role="presentation"
      >
        <Image
          src="/bg.jpeg"
          alt="Soft textured background with gentle patterns"
          fill
          priority
          className="object-cover"
          aria-hidden="true"
          sizes="100vw"
        />

        {/* Paper wash for readability (palette-safe) */}
        <div 
          className="absolute inset-0 bg-[#F6F2EC]/75"
          aria-hidden="true"
          role="presentation"
        />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32">
        {/* Heading section with decorative dividers */}
        <div 
          className="flex items-center justify-center gap-6 mb-16"
          role="banner"
          aria-label="Section heading"
        >
          <div 
            className="hidden sm:block flex-1 h-px bg-[#D8CFC3] drop-shadow-[0_1px_2px_rgba(139,115,85,0.25)]"
            aria-hidden="true"
            role="presentation"
          />

      <h4
  id="specialisations-heading"
  className="
    font-serif
    lg:text-6xl sm:text-5xl
    text-[#3A2E1F]
    whitespace-nowrap
    font-semibold
    drop-shadow-[0_2px_4px_rgba(139,115,85,0.25)]
    [text-shadow:
      0_0_10px_rgba(139,115,85,0.22),
      0_0_22px_rgba(139,115,85,0.14)
    ]
  "
  tabIndex={0}
  aria-label="Areas of specialisation"
>
  Specializing In
</h4>


          <div 
            className="hidden sm:block flex-1 h-px bg-[#D8CFC3] drop-shadow-[0_1px_2px_rgba(139,115,85,0.25)]"
            aria-hidden="true"
            role="presentation"
          />
        </div>

        {/* Tiles Grid */}
        <div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          role="list"
          aria-label="List of specialisation areas"
        >
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              role="listitem"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div
                className="
                  bg-white/70
                  rounded-2xl
                  px-6 py-8
                  text-center
                  shadow-sm
                  drop-shadow-[0_6px_18px_rgba(139,115,85,0.18)]
                  focus-within:outline-none
                  focus-within:ring-2 focus-within:ring-[#8B7355] focus-within:ring-offset-2
                  hover:shadow-lg
                  transition-all duration-300
                  cursor-default
                "
                tabIndex={0}
                aria-label={item.ariaLabel}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    // Announce item details to screen readers
                    const announcement = document.getElementById('specialisation-announcement');
                    if (announcement) {
                      announcement.textContent = `${item.title}: ${item.description}`;
                    }
                    
                    // Navigate to next item
                    const nextIndex = index < items.length - 1 ? index + 1 : 0;
                    const nextItem = document.querySelectorAll('[role="listitem"]')[nextIndex];
                    if (nextItem) {
                      const focusableDiv = nextItem.querySelector('div');
                      focusableDiv?.focus();
                    }
                  }
                }}
              >
                {/* Icon container */}
                <div
                  className={`
                    mx-auto mb-5
                    w-16 h-16
                    rounded-xl
                    flex items-center justify-center
                    ${item.blob}
                    drop-shadow-[0_2px_6px_rgba(139,115,85,0.25)]
                  `}
                  aria-hidden="true"
                  role="presentation"
                  style={{ 
                    border: `2px solid ${item.color}20`,
                    outline: 'none'
                  }}
                >
                  {item.icon}
                </div>

                {/* Title */}
                <h3
                  className="
                    text-lg
                    font-semibold
                    text-[#3A2E1F]
                    mb-2
                    drop-shadow-[0_1px_3px_rgba(139,115,85,0.25)]
                  "
                  aria-label={`Specialisation title: ${item.title}`}
                >
                  {item.title}
                </h3>

                {/* Subtitle */}
                <p
                  className="
                    text-sm
                    text-[#6B5A44]
                    leading-relaxed
                    drop-shadow-[0_1px_3px_rgba(255,255,255,0.55)]
                    mb-2
                  "
                  aria-label={`Specialisation approach: ${item.subtitle}`}
                >
                  {item.subtitle}
                </p>

                {/* Hidden description for screen readers */}
                <div className="sr-only">
                  {item.description}
                </div>

                {/* Hidden instruction for keyboard users */}
                <div className="sr-only">
                  Press Enter or Space to hear more details about this specialisation.
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Live announcement region for screen readers */}
        <div 
          id="specialisation-announcement"
          className="sr-only"
          aria-live="polite"
          aria-atomic="true"
        >
          {/* Dynamic content will be inserted here */}
        </div>

        {/* Hidden context for screen readers */}
        <div className="sr-only" aria-live="polite">
          <p>
            This section describes four key areas of specialisation in emotional support and healing.
          </p>
          <p>
            Each area combines professional expertise with compassionate, practical approaches.
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
          <title id="bottom-wave-title">Decorative bottom wave transition</title>
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