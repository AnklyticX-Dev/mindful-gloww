"use client";

import { motion } from "framer-motion";
import {
  Calendar,
  MessageSquare,
  HeartHandshake,
  CheckCircle,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export default function Plan() {
  const steps = [
    {
      number: 1,
      title: "Book a consultation",
      description: "Start with a simple, confidential booking process",
      icon: <Calendar className="w-6 h-6" />,
      delay: 0.1,
    },
    {
      number: 2,
      title: "Share your experience in a safe, confidential space",
      description: "Speak freely in a judgment-free environment",
      icon: <MessageSquare className="w-6 h-6" />,
      delay: 0.3,
    },
    {
      number: 3,
      title: "Receive personalised guidance and ongoing support",
      description: "Get tailored strategies and continuous care",
      icon: <HeartHandshake className="w-6 h-6" />,
      delay: 0.5,
    },
  ];

  return (
    <section className="relative py-32 px-6 overflow-hidden bg-gradient-to-br from-[#F7F3E9] via-[#E8DFD2] to-[#D6C8B5]">

      {/* ================= BACKGROUND GRID ================= */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="w-full h-full opacity-[0.03]">
          <defs>
            <pattern
              id="plan-grid"
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
          <rect width="100%" height="100%" fill="url(#plan-grid)" />
        </svg>
      </div>

      {/* ================= AMBIENT BLOBS (ISOLATED) ================= */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-32 -left-32 w-[520px] h-[520px] bg-gradient-to-br from-[#E8D0B3]/25 to-[#D4BC9A]/10 rounded-full blur-3xl"
          animate={{ x: [0, 40, 0], y: [0, -30, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-32 -right-32 w-[560px] h-[560px] bg-gradient-to-tl from-[#C1A580]/20 to-[#B29773]/10 rounded-full blur-3xl"
          animate={{ x: [0, -40, 0], y: [0, 30, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 max-w-6xl mx-auto">

        {/* ================= HEADER ================= */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#5D4C3B] via-[#8B7355] to-[#A38966]">
              How it works
            </span>
          </h2>
          <p className="text-xl text-[#5D4C3B]/90">
            A clear, compassionate path forward
          </p>
        </motion.div>

        {/* ================= STEPS CARD ================= */}
        <motion.div
          className="relative backdrop-blur-xl bg-gradient-to-br from-white/40 to-white/20 border border-white/40 rounded-3xl p-10 md:p-14 shadow-2xl overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Animated border */}
          <motion.div
            className="absolute inset-0 rounded-3xl pointer-events-none"
            style={{
              padding: "2px",
              background:
                "linear-gradient(45deg, #E8D0B3, #D4BC9A, #C1A580, #B29773, #E8D0B3)",
            }}
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <div className="absolute inset-0.5 rounded-3xl bg-gradient-to-br from-[#F7F3E9]/90 to-[#E8DFD2]/90" />
          </motion.div>

          <div className="relative space-y-12 z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: step.delay, duration: 0.8 }}
                className="relative"
              >
                {/* Connector */}
                {index < steps.length - 1 && (
                  <div className="absolute left-8 top-full h-12 w-px bg-gradient-to-b from-[#C1A580]/60 to-transparent" />
                )}

                <div className="flex items-start gap-6 p-6 md:p-8 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/50 shadow-lg hover:shadow-xl transition-shadow">
                  {/* Number + icon */}
                  <div className="relative flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#E8D0B3] to-[#D4BC9A] flex items-center justify-center text-2xl font-bold text-[#5D4C3B]">
                      {step.number}
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white/80 border border-white flex items-center justify-center text-[#8B7355]">
                      {step.icon}
                    </div>
                  </div>

                  {/* Text */}
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-semibold text-[#5D4C3B] mb-2">
                      {step.title}
                    </h3>
                    <p className="text-[#5D4C3B]/80 text-lg">
                      {step.description}
                    </p>
                  </div>

                  {/* Check */}
                  <CheckCircle className="hidden md:block w-7 h-7 text-[#8B7355]/60" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ================= FINAL LINE ================= */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <p className="text-2xl md:text-3xl font-bold text-[#5D4C3B]">
            No overwhelm. No pressure.{" "}
            <span className="text-[#8B7355]">One step at a time.</span>
          </p>

          <p className="mt-6 text-[#8B7355]/80 text-lg">
            Your pace • Your journey • Your healing
          </p>
        </motion.div>
      </div>

      {/* ================= SOFT SPARKLES ================= */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0, 0.4, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut",
            }}
          >
            <Sparkles className="w-4 h-4 text-[#D4BC9A]/60" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
