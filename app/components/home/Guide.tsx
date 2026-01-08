"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Guide() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">

      {/* ================= BACKGROUND IMAGE ================= */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg.jpeg"
          alt="Soft watercolor background"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Paper wash */}
        <div className="absolute inset-0 bg-[#F6F2EC]/65" />
      </div>

      {/* ================= SUBTLE GRID ================= */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <svg className="w-full h-full opacity-[0.025]">
          <defs>
            <pattern
              id="guide-grid"
              width="80"
              height="80"
              patternUnits="userSpaceOnUse"
            >
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
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        <motion.div
          className="absolute -top-40 -left-40 w-[520px] h-[520px] bg-[#E8D0B3]/20 rounded-full blur-3xl"
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-40 -right-40 w-[520px] h-[520px] bg-[#C1A580]/15 rounded-full blur-3xl"
          animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-20 max-w-6xl mx-auto space-y-24">

        {/* ===== Heading ===== */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-[#8B7355] text-sm font-semibold tracking-widest uppercase mb-4">
            Personal Guidance
          </div>

          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#3A2E1F]">
            Meet someone who truly understands
          </h2>
        </motion.div>

        {/* ===== ABOUT SECTION ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Image */}
          <div className="relative max-w-md mx-auto">
            <Image
              src="/ruchi.jpeg"
              alt="Founder of Mindful Gloww"
              width={480}
              height={620}
              className="rounded-[28px] object-cover"
              priority
            />
          </div>

          {/* Text */}
          <div className="text-[#5D4C3B] space-y-6 text-lg leading-relaxed">
            <p>
              For a long time, my life was shaped by trauma—childhood sexual
              abuse and a marriage to a narcissist that lasted 24 years. I know
              what it feels like to lose yourself, to silence your needs, and
              to stay because leaving feels more terrifying than staying.
            </p>

            <p>
              Walking away from that life was the hardest thing I have ever
              done—but it was also the beginning of my healing.
            </p>

            <p>
              Today, I help others who feel stuck, exhausted, and emotionally
              overwhelmed find their way back to themselves. I believe healing
              happens when we feel seen, believed, and safe enough to tell the
              truth—without shame or judgment.
            </p>

            <p>
              My work is rooted in empathy, lived experience, and a deep
              understanding of trauma bonds, abuse dynamics, and emotional
              recovery. I don’t see you as a diagnosis. I see you as a human who
              adapted to survive—and now deserves peace.
            </p>

            <p className="font-semibold text-[#3A2E1F]">
              You don’t have to do this alone anymore.
              <br />
              Your story matters.
              <br />
              And it’s not too late to begin again.
            </p>
          </div>
        </div>

        {/* ===== SUPPORTING TEXT ===== */}
        <p className="text-lg md:text-xl text-[#5D4C3B] leading-relaxed text-center max-w-3xl mx-auto">
          <span className="font-semibold text-[#8B7355]">Mindful Gloww</span>{" "}
          is guided by someone who has personally lived through narcissistic
          behaviour and emotional abuse.
        </p>

        <p className="text-lg md:text-xl text-[#5D4C3B] leading-relaxed text-center max-w-3xl mx-auto">
          This work comes from{" "}
          <span className="font-semibold text-[#8B7355]">lived experience</span>
          — understanding the confusion, the self-blame, and the slow rebuilding
          of trust in yourself.
        </p>

        {/* ===== PILLARS (PLAIN TEXT, NO CARDS) ===== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {[
            ["Compassion", "Gentle understanding without judgment"],
            ["Clarity", "Clear insights and practical guidance"],
            ["Emotional Safety", "A secure space for healing"],
          ].map(([title, desc]) => (
            <div key={title} className="space-y-3">
              <h3 className="text-xl font-semibold text-[#8B7355]">
                {title}
              </h3>
              <p className="text-[#5D4C3B]">
                {desc}
              </p>
            </div>
          ))}
        </div>

        {/* ===== FINAL STATEMENT ===== */}
        <p className="text-xl md:text-2xl text-[#5D4C3B] text-center italic max-w-4xl mx-auto">
          You'll be met with{" "}
          <span className="font-semibold text-[#8B7355]">understanding</span>{" "}
          that can only come from having walked this path before.
        </p>
      </div>
    </section>
  );
}
