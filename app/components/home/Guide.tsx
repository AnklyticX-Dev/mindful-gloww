"use client";

import { motion } from "framer-motion";

export default function Guide() {
  return (
    <section className="relative py-32 px-6 overflow-hidden bg-gradient-to-br from-[#F7F3E9] via-[#E8DFD2] to-[#D6C8B5]">

      {/* ================= BACKGROUND GRID ================= */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="w-full h-full opacity-[0.03]">
          <defs>
            <pattern
              id="guide-grid"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="#8B7355"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#guide-grid)" />
        </svg>
      </div>

      {/* ================= ANIMATED BLOBS (ISOLATED) ================= */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-gradient-to-br from-[#E8D0B3]/20 to-[#D4BC9A]/10 rounded-full blur-3xl"
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute -bottom-32 -right-32 w-[550px] h-[550px] bg-gradient-to-tl from-[#C1A580]/15 to-[#B29773]/5 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, 40, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* ================= STATIC CONTENT WRAPPER ================= */}
      <div className="relative z-10 max-w-6xl mx-auto">

        {/* ================= OUTER GLOW ================= */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-[#E8D0B3]/30 via-[#D4BC9A]/20 to-[#C1A580]/10 rounded-3xl blur-2xl"
          animate={{
            opacity: [0.3, 0.5, 0.3],
            scale: [1, 1.02, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* ================= MAIN CARD ================= */}
        <div className="relative backdrop-blur-xl bg-gradient-to-br from-white/20 to-white/10 border border-white/30 rounded-3xl p-8 md:p-12 lg:p-16 shadow-2xl overflow-hidden">

          {/* ===== Animated Gradient Border (ISOLATED) ===== */}
          <motion.div
            className="absolute inset-0 rounded-3xl pointer-events-none"
            style={{
              padding: "2px",
              background:
                "linear-gradient(45deg, #E8D0B3, #D4BC9A, #C1A580, #B29773, #E8D0B3)",
            }}
            animate={{
              background: [
                "linear-gradient(45deg, #E8D0B3, #D4BC9A, #C1A580, #B29773, #E8D0B3)",
                "linear-gradient(90deg, #B29773, #E8D0B3, #D4BC9A, #C1A580, #B29773)",
                "linear-gradient(135deg, #C1A580, #B29773, #E8D0B3, #D4BC9A, #C1A580)",
                "linear-gradient(45deg, #E8D0B3, #D4BC9A, #C1A580, #B29773, #E8D0B3)",
              ],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <div className="absolute inset-0.5 rounded-3xl bg-gradient-to-br from-[#F7F3E9]/90 to-[#E8DFD2]/90 backdrop-blur-sm" />
          </motion.div>

          {/* ================= CONTENT ================= */}
          <div className="relative z-10 space-y-12">

            {/* ===== Heading ===== */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-[#8B7355] text-sm font-semibold tracking-widest uppercase mb-3">
                Personal Guidance
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-[#5D4C3B] via-[#8B7355] to-[#A38966]">
                Meet someone who truly understands
              </h2>

              <div className="h-1 w-32 mx-auto mt-6 bg-gradient-to-r from-[#D4BC9A] via-[#C1A580] to-[#D4BC9A] rounded-full" />
            </motion.div>

            {/* ===== Paragraphs ===== */}
            <p className="text-lg md:text-xl text-[#5D4C3B] leading-relaxed text-center">
              <span className="font-semibold text-[#8B7355]">Mindful Gloww</span>{" "}
              is guided by someone who has personally lived through narcissistic
              behaviour and emotional abuse.
            </p>

            <div className="p-6 md:p-8 rounded-2xl bg-white/30 backdrop-blur-sm border border-white/40 text-center">
              <p className="text-lg md:text-xl text-[#5D4C3B] leading-relaxed">
                This work comes from{" "}
                <span className="font-bold text-[#8B7355]">
                  lived experience
                </span>
                — understanding the confusion, the self-blame, and the slow
                rebuilding of trust in yourself.
              </p>
            </div>

            {/* ===== Pillars ===== */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                ["Compassion", "Gentle understanding without judgment"],
                ["Clarity", "Clear insights and practical guidance"],
                ["Emotional Safety", "A secure space for healing"],
              ].map(([title, desc], i) => (
                <div
                  key={title}
                  className="p-6 bg-white/40 rounded-2xl text-center shadow-lg"
                >
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[#D4BC9A] flex items-center justify-center font-bold">
                    {i + 1}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-[#8B7355]">
                    {title}
                  </h3>
                  <p className="text-[#5D4C3B]">{desc}</p>
                </div>
              ))}
            </div>

            {/* ===== Final Statement ===== */}
            <p className="text-xl md:text-2xl text-[#5D4C3B] text-center italic">
              You'll be met with{" "}
              <span className="font-bold text-[#8B7355]">understanding</span> that
              can only come from having walked this path before.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
