"use client";

import { motion } from "framer-motion";

export default function Empathy() {
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
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-8 text-[#1F2933] relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          You're not broken — and you're not alone
          <motion.div
            className="absolute -inset-4 bg-gradient-to-r from-[#E7C8B7]/20 to-[#9FB3A6]/20 blur-xl rounded-lg opacity-0 hover:opacity-50 transition-opacity duration-500"
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.h2>

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

          <motion.p
            className="text-xl md:text-2xl text-[#4A5560] leading-relaxed relative z-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Healing isn't about quick advice or being told to "move on."
            
            <br /><br />
            
            <span className="inline-flex flex-wrap justify-center gap-2 md:gap-4 my-4">
              {["heard", "understood", "supported without judgment"].map((word, index) => (
                <motion.span
                  key={word}
                  className="relative inline-block"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.2, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <strong className="text-[#1F2933] font-bold px-3 py-1 relative z-10">
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
                      delay: index * 0.3
                    }}
                  />
                </motion.span>
              ))}
            </span>
            
            <br /><br />
            
            <motion.span
              className="inline-block"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.3, duration: 0.8 }}
              viewport={{ once: true }}
            >
              At{" "}
              <motion.strong
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
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.strong>
              , you're allowed to take your time.
            </motion.span>
          </motion.p>

          {/* Animated decorative elements */}
          <motion.div
            className="absolute -top-4 -right-4 w-12 h-12 border-2 border-[#E7C8B7]/30 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          
          <motion.div
            className="absolute -bottom-4 -left-4 w-8 h-8 border border-[#9FB3A6]/20 rounded-full"
            animate={{ rotate: -360, scale: [1, 1.2, 1] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[#E7C8B7]/40 rounded-full"
              initial={{
                x: Math.random() * 100 + "%",
                y: Math.random() * 100 + "%"
              }}
              animate={{
                y: [null, `-${20 + Math.random() * 40}px`, `${20 + Math.random() * 40}px`],
                x: [null, `${10 + Math.random() * 20}px`, `-${10 + Math.random() * 20}px`],
                opacity: [0.2, 0.6, 0.2]
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}