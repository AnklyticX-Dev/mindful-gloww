"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  MessageCircle,
  HeartHandshake,
  Brain,
  RefreshCcw,
} from "lucide-react";

export default function SpecializingIn() {
  const items = [
    {
      id: 1,
      title: "Narcissistic Behaviour",
      subtitle: "Private, safe conversations",
      description: "Support for understanding and healing from narcissistic behaviour dynamics",
      icon: <MessageCircle className="w-7 h-7 text-[#5F7F8B]" aria-hidden="true" />,
      bg: "bg-[#E6EFF2]",
      color: "#5F7F8B",
      ariaLabel: "Specialization: Narcissistic Behaviour with private, safe conversations"
    },
    {
      id: 2,
      title: "Emotional Abuse",
      subtitle: "Simple, grounding routines",
      description: "Healing from emotional abuse through gentle, grounding practices",
      icon: <HeartHandshake className="w-7 h-7 text-[#6C7A5A]" aria-hidden="true" />,
      bg: "bg-[#EEF2E8]",
      color: "#6C7A5A",
      ariaLabel: "Specialization: Emotional Abuse with simple, grounding routines"
    },
    {
      id: 3,
      title: "Trauma Recovery",
      subtitle: "Focused healing sessions",
      description: "Trauma-informed recovery with focused, supportive sessions",
      icon: <Brain className="w-7 h-7 text-[#B07A3F]" aria-hidden="true" />,
      bg: "bg-[#F4EBDD]",
      color: "#B07A3F",
      ariaLabel: "Specialization: Trauma Recovery with focused healing sessions"
    },
    {
      id: 4,
      title: "Rebuilding Self-Worth",
      subtitle: "Ongoing, continuous care",
      description: "Rebuilding self-worth through consistent, compassionate support",
      icon: <RefreshCcw className="w-7 h-7 text-[#7A7A7A]" aria-hidden="true" />,
      bg: "bg-[#EFEFEF]",
      color: "#7A7A7A",
      ariaLabel: "Specialization: Rebuilding Self-Worth with ongoing, continuous care"
    },
  ];

  return (
    <section 
      id="specializations"
      className="relative py-28 px-6 overflow-hidden"
      aria-labelledby="specializations-heading"
      role="region"
      aria-label="Areas of specialization section"
    >
      {/* ================= BACKGROUND ================= */}
      <div 
        className="absolute inset-0 z-0"
        aria-hidden="true"
        role="presentation"
      >
        <Image
          src="/bg-3.png"
          alt="Soft textured background with gentle patterns"
          fill
          className="object-cover"
          priority
          aria-hidden="true"
          sizes="100vw"
        />

        {/* Soft contrast wash (palette-safe) */}
        <div 
          className="absolute inset-0 bg-[#F7F4EF]/55 md:bg-[#F7F4EF]/40"
          aria-hidden="true"
          role="presentation"
        />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Heading */}
        <h2
          id="specializations-heading"
          className="
            text-center
            font-serif
            text-3xl md:text-4xl
            text-[#3A2E1F]
            mb-16
            font-semibold
            drop-shadow-[0_2px_4px_rgba(139,115,85,0.25)]
            [text-shadow:
              0_0_10px_rgba(139,115,85,0.22),
              0_0_22px_rgba(139,115,85,0.14)
            ]
          "
          tabIndex={0}
          aria-label="Areas of specialization"
        >
          Specializing In
        </h2>

        {/* Grid */}
        <div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          role="list"
          aria-label="List of specializations"
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
                  rounded-2xl
                  bg-white/70
                  shadow-sm
                  px-6 py-8
                  text-center
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
                    const announcement = document.getElementById('specialization-announcement');
                    if (announcement) {
                      announcement.textContent = `${item.title}: ${item.description}`;
                    }
                    
                    // Navigate to next item
                    const nextIndex = index < items.length - 1 ? index + 1 : 0;
                    document.querySelectorAll('[role="listitem"]')[nextIndex]?.querySelector('div')?.focus();
                  }
                }}
              >
                {/* Icon background */}
                <div
                  className={`
                    mx-auto mb-5
                    w-16 h-16
                    rounded-xl
                    flex items-center justify-center
                    ${item.bg}
                    drop-shadow-[0_2px_6px_rgba(139,115,85,0.25)]
                  `}
                  aria-hidden="true"
                  role="presentation"
                  style={{ border: `2px solid ${item.color}20` }}
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
                  aria-label={`Specialization title: ${item.title}`}
                >
                  {item.title}
                </h3>

                {/* Subtitle */}
                <p
                  className="
                    text-sm
                    text-[#6B5A44]
                    drop-shadow-[0_1px_3px_rgba(255,255,255,0.55)]
                    mb-2
                  "
                  aria-label={`Specialization approach: ${item.subtitle}`}
                >
                  {item.subtitle}
                </p>

                {/* Hidden description for screen readers */}
                <div className="sr-only">
                  {item.description}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Live announcement region for screen readers */}
        <div 
          id="specialization-announcement"
          className="sr-only"
          aria-live="polite"
          aria-atomic="true"
        >
          {/* Dynamic content will be inserted here */}
        </div>

        {/* Hidden context for screen readers */}
        <div className="sr-only" aria-live="polite">
          <p>
            This section outlines four key areas of specialization: 
            narcissistic behaviour support, emotional abuse recovery, 
            trauma healing, and rebuilding self-worth.
          </p>
          <p>
            Each area includes specific approaches like private conversations, 
            grounding routines, focused sessions, and ongoing care.
          </p>
        </div>

        {/* Navigation instructions for keyboard users */}
        <div className="sr-only">
          <p>Press Enter or Space on any specialization card to hear more details.</p>
          <p>Use Tab to navigate between specialization cards.</p>
        </div>
      </div>
    </section>
  );
}