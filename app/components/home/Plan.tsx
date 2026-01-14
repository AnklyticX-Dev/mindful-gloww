"use client";

import Image from "next/image";
import {
  Calendar,
  MessageSquare,
  HeartHandshake,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Plan() {
  const steps = [
    {
      number: "01",
      title: "Book a consultation",
      description: "Start with a simple, confidential booking process",
      icon: <Calendar className="w-6 h-6 text-[#8B7355]" aria-hidden="true" />,
      ariaLabel: "Step 1: Booking consultation"
    },
    {
      number: "02",
      title: "Share your experience",
      description: "Speak freely in a safe, non-judgmental space",
      icon: <MessageSquare className="w-6 h-6 text-[#8B7355]" aria-hidden="true" />,
      ariaLabel: "Step 2: Sharing your experience"
    },
    {
      number: "03",
      title: "Receive guidance & support",
      description: "Personalised care, clarity, and ongoing support",
      icon: <HeartHandshake className="w-6 h-6 text-[#8B7355]" aria-hidden="true" />,
      ariaLabel: "Step 3: Receiving guidance and support"
    },
  ];

  return (
    <section 
      id="process"
      className="relative overflow-hidden bg-[#F7F4EF]"
      aria-labelledby="process-heading"
      role="region"
      aria-label="How it works process section"
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
            fill="#F7F4EF"
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
          alt="Soft textured background with gentle patterns"
          fill
          priority
          className="object-cover"
          aria-hidden="true"
          sizes="100vw"
        />

        {/* Soft contrast wash (same palette) */}
        <div 
          className="absolute inset-0 bg-[#F7F4EF]/65 md:bg-[#F7F4EF]/45"
          aria-hidden="true"
          role="presentation"
        />
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-[calc(8rem+80px)]">
        {/* Heading */}
        <div 
          className="text-center mb-20"
          role="banner"
          aria-label="Section introduction"
        >
        <h4
  id="process-heading"
  className="
    font-serif
    text-6xl sm:text-5xl
    text-[#3A2E1F]
    mb-4
    font-semibold
    drop-shadow-[0_2px_4px_rgba(139,115,85,0.25)]
    [text-shadow:
      0_0_10px_rgba(139,115,85,0.22),
      0_0_22px_rgba(139,115,85,0.14)
    ]
  "
  tabIndex={0}
>
  How it works
</h4>

          <p 
            className="text-lg text-[#6B5A44] drop-shadow-[0_1px_3px_rgba(255,255,255,0.55)]"
            tabIndex={0}
          >
            A gentle, step-by-step path forward
          </p>
        </div>

        {/* ================= PROCESS FLOW ================= */}
        <div 
          className="relative grid grid-cols-1 md:grid-cols-3 gap-16 items-start"
          role="list"
          aria-label="Three-step process for getting support"
        >
          {steps.map((step, index) => (
            <motion.div 
              key={step.number} 
              className="relative text-center"
              role="listitem"
              aria-label={step.ariaLabel}
              tabIndex={0}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  const nextIndex = index < steps.length - 1 ? index + 1 : 0;
                  (document.querySelectorAll('[role="listitem"]')[nextIndex] as HTMLElement)?.focus();
                }
              }}
            >
              {/* Connection arrow for desktop */}
              {index < steps.length - 1 && (
                <div 
                  className="hidden md:block absolute top-10 right-[-50%] w-full"
                  aria-hidden="true"
                  role="presentation"
                >
                  <ArrowRight 
                    className="mx-auto text-[#CFC5B8] drop-shadow-[0_1px_2px_rgba(139,115,85,0.25)]" 
                    aria-hidden="true"
                  />
                </div>
              )}

              {/* Step number indicator */}
              <div
                className="
                  mx-auto mb-6
                  w-14 h-14
                  rounded-full
                  bg-[#E8DFD2]
                  flex items-center justify-center
                  font-serif text-lg
                  text-[#5D4C3B]
                  drop-shadow-[0_2px_6px_rgba(139,115,85,0.25)]
                "
                aria-label={`Step ${parseInt(step.number)}`}
                role="status"
              >
                <span className="sr-only">Step </span>
                {step.number}
              </div>

              {/* Icon container */}
              <div
                className="
                  mx-auto mb-4
                  w-14 h-14
                  rounded-xl
                  bg-[#F1ECE4]
                  flex items-center justify-center
                  drop-shadow-[0_2px_6px_rgba(139,115,85,0.25)]
                "
                aria-hidden="true"
              >
                {step.icon}
              </div>

              {/* Step title */}
              <h3
                className="
                  text-xl
                  font-semibold
                  text-[#3A2E1F]
                  mb-3
                  drop-shadow-[0_1px_3px_rgba(139,115,85,0.25)]
                "
                aria-label={`Step ${parseInt(step.number)} title: ${step.title}`}
              >
                {step.title}
              </h3>

              {/* Step description */}
              <p
                className="
                  text-[#6B5A44]
                  leading-relaxed
                  max-w-xs
                  mx-auto
                  drop-shadow-[0_1px_3px_rgba(255,255,255,0.55)]
                "
                aria-label={`Step ${parseInt(step.number)} description: ${step.description}`}
              >
                {step.description}
              </p>

              {/* Hidden description for screen readers */}
              <div className="sr-only">
                {index === 0 && "This is the first step in the process."}
                {index === 1 && "This is the second step in the process."}
                {index === 2 && "This is the final step in the process."}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ================= FINAL LINE ================= */}
        <div 
          className="text-center mt-20"
          role="contentinfo"
          aria-label="Process reassurance"
        >
          <p
            className="
              text-2xl
              font-serif
              text-[#5D4C3B]
              drop-shadow-[0_1px_3px_rgba(139,115,85,0.25)]
            "
            tabIndex={0}
            aria-label="Process reassurance: No pressure. No overwhelm."
          >
            No pressure. No overwhelm.
          </p>
          <p
            className="
              mt-2
              text-lg
              text-[#8B7355]
              drop-shadow-[0_1px_2px_rgba(139,115,85,0.25)]
            "
            tabIndex={0}
            aria-label="Process pace: Just one step at a time."
          >
            Just one step at a time.
          </p>
        </div>

        {/* ================= HIDDEN CONTEXT FOR SCREEN READERS ================= */}
        <div className="sr-only" aria-live="polite">
          <p>
            This section outlines a simple three-step process for getting support: 
            First, book a consultation. Second, share your experience in a safe space. 
            Third, receive personalized guidance and ongoing support.
          </p>
          <p>
            The process is designed to be gentle and manageable, focusing on one step at a time.
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
            fill="#F7F4EF"
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

      {/* ================= VISUAL PROGRESS INDICATOR FOR SCREEN READERS ================= */}
      <div className="sr-only">
        <progress 
          id="process-progress" 
          value="0" 
          max="3" 
          aria-label="Process progress indicator"
        >
          Step 0 of 3
        </progress>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              document.addEventListener('DOMContentLoaded', function() {
                const steps = document.querySelectorAll('[role="listitem"]');
                const progressBar = document.getElementById('process-progress');
                
                steps.forEach((step, index) => {
                  step.addEventListener('focus', function() {
                    progressBar.value = index + 1;
                    progressBar.setAttribute('aria-label', 'Step ' + (index + 1) + ' of 3');
                  });
                });
              });
            `
          }}
        />
      </div>
    </section>
  );
}