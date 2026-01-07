"use client";

import { motion } from "framer-motion";

export default function Guide() {
  return (
    <section className="relative py-32 px-6 overflow-hidden bg-gradient-to-br from-[#9FB3A6] via-[#8CA397] to-[#9FB3A6]">
      {/* Enhanced background glow effects */}
      <motion.div
        className="absolute -top-32 -left-32 w-96 h-96 bg-white/10 rounded-full blur-3xl"
        animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#F6F4EF]/10 rounded-full blur-3xl"
        animate={{
          x: [0, -50, 0],
          y: [0, 40, 0],
          scale: [1, 1.15, 1]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.3
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#E7C8B7]/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.6
        }}
      />

      {/* Floating leaf particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-[#F6F4EF]/20 text-2xl"
            style={{
              left: `${10 + i * 12}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              y: [0, -100, 0],
              rotate: [0, 180, 360],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeInOut"
            }}
          >
            ❖
          </motion.div>
        ))}
      </div>

      {/* Glass morphism container */}
      <motion.div
        className="relative max-w-6xl mx-auto backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-12 shadow-2xl overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        whileHover={{ scale: 1.02 }}
      >
        {/* Animated gradient border */}
        <motion.div
          className="absolute inset-0 rounded-3xl p-[1px]"
          animate={{
            background: [
              "linear-gradient(45deg, #9FB3A6, #8CA397, #F6F4EF, #9FB3A6)",
              "linear-gradient(45deg, #8CA397, #F6F4EF, #9FB3A6, #8CA397)",
              "linear-gradient(45deg, #F6F4EF, #9FB3A6, #8CA397, #F6F4EF)"
            ]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/20 to-transparent" />
        </motion.div>

        <div className="relative z-10">
          {/* Animated heading with glow */}
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-12 text-white relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="relative inline-block">
              Meet someone who truly understands
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-white/10 to-transparent blur-xl rounded-lg"
                animate={{
                  opacity: [0.2, 0.4, 0.2]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </span>
          </motion.h2>

          {/* Content with staggered animations */}
          <div className="space-y-8">
            {/* First paragraph */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="relative"
            >
              <p className="text-xl text-white/90 leading-relaxed">
                <motion.span
                  className="inline-block"
                  whileHover={{ scale: 1.02 }}
                >
                  Mindful Gloww is guided by someone who has personally lived through
                  narcissistic behaviour and emotional abuse.
                </motion.span>
              </p>
              <motion.div
                className="absolute -left-6 top-1/2 w-3 h-3 bg-white/30 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>

            {/* Second paragraph with highlight */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative"
            >
              <div className="relative inline-block">
                <motion.p
                  className="text-xl text-white leading-relaxed p-6 rounded-2xl backdrop-blur-sm bg-white/5 border border-white/10"
                  whileHover={{ scale: 1.01 }}
                >
                  This work comes from{" "}
                  <motion.strong
                    className="text-white font-bold relative"
                    whileHover={{ scale: 1.05 }}
                  >
                    lived experience
                    <motion.span
                      className="absolute -inset-1 bg-gradient-to-r from-[#C58A4A]/20 to-[#E7C8B7]/20 rounded-lg blur-sm"
                      animate={{
                        opacity: [0.2, 0.4, 0.2]
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </motion.strong>
                  — understanding the confusion,
                  the self-blame, and the slow rebuilding of trust in yourself.
                </motion.p>
                <motion.div
                  className="absolute -top-2 -right-2 w-4 h-4 border border-white/30 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                />
              </div>
            </motion.div>

            {/* Third paragraph with floating words */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="pt-8"
            >
              <div className="flex flex-wrap justify-center gap-4 mb-6">
                {["compassion", "clarity", "emotional safety"].map((word, index) => (
                  <motion.div
                    key={word}
                    className="relative"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 + index * 0.2, duration: 0.5 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                  >
                    <div className="px-5 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
                      <span className="text-lg font-semibold text-white">
                        {word}
                      </span>
                    </div>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent rounded-full blur-md"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.2, 0.5, 0.2]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3
                      }}
                    />
                  </motion.div>
                ))}
              </div>

              <motion.p
                className="text-xl text-white/90 leading-relaxed italic"
                whileHover={{ scale: 1.01 }}
              >
                You'll be met with{" "}
                <span className="font-bold text-white">understanding</span> that
                can only come from having walked this path before.
              </motion.p>
            </motion.div>
          </div>

          {/* Decorative elements */}
          <motion.div
            className="absolute -top-8 -left-8 w-16 h-16 border-2 border-white/10 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          />
          
          <motion.div
            className="absolute -bottom-6 -right-6 w-12 h-12 border border-white/20 rounded-full"
            animate={{ rotate: -360, scale: [1, 1.2, 1] }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>

      {/* Bottom decorative line */}
      <motion.div
        className="w-48 h-1 bg-gradient-to-r from-transparent via-white/40 to-transparent mx-auto mt-16 rounded-full"
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: "12rem", opacity: 1 }}
        viewport={{ once: true }}
        animate={{
          scale: [1, 1.1, 1]
        }}
        transition={{
          delay: 1,
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Additional floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
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
    </section>
  );
}