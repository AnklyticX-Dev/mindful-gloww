"use client";

import { motion } from "framer-motion";

export default function Empathy() {
  // Pre-defined positions to avoid hydration mismatch
  const particlePositions = Array.from({ length: 12 }, (_, i) => ({
    x: `${(i * 8) % 100}%`,
    y: `${(i * 10) % 100}%`,
    delay: i * 0.2,
    duration: 4 + (i % 3),
    yOffset1: 20 + (i % 3) * 10,
    yOffset2: 20 + (i % 4) * 10,
    xOffset1: 10 + (i % 2) * 10,
    xOffset2: 10 + (i % 3) * 10,
  }));

  const wordItems = ["heard", "understood", "supported without judgment"];

  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F6F4EF] via-[#E9E3DB] to-[#F6F4EF]" />
      
      {/* Animated glow orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-80 h-80 bg-[#E7C8B7]/20 rounded-full blur-3xl"
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#9FB3A6]/10 rounded-full blur-3xl"
        animate={{
          x: [0, -40, 0],
          y: [0, 30, 0],
          scale: [1, 1.05, 1]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      />

      <div className="relative max-w-4xl mx-auto text-center z-10">
        {/* Animated heading with glow effect */}
        <motion.div
          className="relative mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1F2933]">
            You're not broken — and you're not alone
          </h2>
          <motion.div
            className="absolute -inset-4 bg-gradient-to-r from-[#E7C8B7]/20 to-[#9FB3A6]/20 blur-xl rounded-lg"
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          />
        </motion.div>

        {/* Glass morphism container with animations */}
        <motion.div
          className="relative backdrop-blur-xl bg-white/30 border border-white/40 rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
        >
          {/* Animated gradient border */}
          <motion.div
            className="absolute inset-0 rounded-3xl p-[1px]"
            style={{
              background: "linear-gradient(45deg, #E7C8B7, #9FB3A6, #E9E3DB, #E7C8B7)"
            }}
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/40 to-transparent" />
          </motion.div>

          <div className="relative z-10">
            <motion.div
              className="text-xl md:text-2xl text-[#4A5560] leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="mb-6">Healing isn't about quick advice or being told to "move on."</p>
              
              <div className="flex flex-wrap justify-center gap-2 md:gap-4 my-6">
                {wordItems.map((word, index) => (
                  <motion.div
                    key={word}
                    className="relative inline-block"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 + index * 0.2, duration: 0.5 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="relative">
                      <strong className="text-[#1F2933] font-bold px-3 py-1 relative z-10 block">
                        {word}
                      </strong>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-[#E7C8B7]/30 to-[#9FB3A6]/30 rounded-full blur-md"
                        animate={{
                          scale: [1, 1.1, 1],
                          opacity: [0.3, 0.6, 0.3]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.3,
                          ease: "easeInOut"
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <motion.div
                className="mt-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1.3, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <p>
                  At{" "}
                  <motion.span
                    className="text-[#1F2933] font-bold relative inline-block"
                    whileHover={{ scale: 1.05 }}
                  >
                    Mindful Gloww
                    <motion.div
                      className="absolute -inset-2 bg-gradient-to-r from-[#C58A4A]/20 to-[#B0793F]/20 rounded-lg blur-sm"
                      animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.2, 0.4, 0.2]
                      }}
                      transition={{ 
                        duration: 2.5, 
                        repeat: Infinity, 
                        ease: "easeInOut" 
                      }}
                    />
                  </motion.span>
                  , you're allowed to take your time.
                </p>
              </motion.div>
            </motion.div>
          </div>

          {/* Animated decorative elements */}
          <motion.div
            className="absolute -top-4 -right-4 w-12 h-12 border-2 border-[#E7C8B7]/30 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          
          <motion.div
            className="absolute -bottom-4 -left-4 w-8 h-8 border border-[#9FB3A6]/20 rounded-full"
            animate={{ 
              rotate: -360, 
              scale: [1, 1.2] 
            }}
            transition={{ 
              duration: 15, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          />
        </motion.div>

        {/* Floating particles with deterministic positions */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {particlePositions.map((particle, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[#E7C8B7]/40 rounded-full"
              style={{
                left: particle.x,
                top: particle.y,
              }}
              initial={{ opacity: 0.2 }}
              animate={{
                y: [0, `-${particle.yOffset1}px`, `${particle.yOffset2}px`],
                x: [0, `${particle.xOffset1}px`, `-${particle.xOffset2}px`],
                opacity: [0.2, 0.6, 0.2]
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                delay: particle.delay,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}