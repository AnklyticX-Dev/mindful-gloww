"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <motion.section
      id="contact"
      className="relative min-h-screen py-32 px-6 overflow-hidden bg-gradient-to-b from-[#F6F4EF] via-white to-[#E9E3DB]/50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Enhanced background glow effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-gradient-to-br from-[#E7C8B7]/30 to-transparent rounded-full blur-[120px]"
          animate={{
            x: [0, 40, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-[650px] h-[650px] bg-gradient-to-tr from-[#9FB3A6]/25 to-transparent rounded-full blur-[120px]"
          animate={{
            x: [0, -30, 0],
            y: [0, 40, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-[#C58A4A]/15 via-transparent to-[#B0793F]/15 rounded-full blur-[100px]"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Geometric glow patterns */}
        <motion.div
          className="absolute top-20 left-20 w-64 h-64 border-2 border-[#E7C8B7]/10 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-32 right-32 w-48 h-48 border border-[#9FB3A6]/15 rounded-3xl"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
            delay: 0.3
          }}
        />
      </div>

      {/* Main content container */}
      <div className="relative flex items-center justify-center min-h-[80vh]">
        {/* Multi-layer glass effect container */}
        <div className="relative w-full max-w-6xl">
          {/* Outer glow ring */}
          <motion.div
            className="absolute inset-0 rounded-[40px] blur-2xl"
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              background: "linear-gradient(135deg, rgba(246, 244, 239, 0.4), rgba(233, 227, 219, 0.4), rgba(159, 179, 166, 0.2))"
            }}
          />

          {/* Glass morphism main container */}
          <motion.div
            className="relative z-10 backdrop-blur-2xl bg-gradient-to-br from-white/80 via-white/60 to-white/40 border border-white/50 rounded-[32px] p-12 md:p-16 shadow-2xl"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.01 }}
          >
            {/* Inner glow layers */}
            <div className="absolute inset-0 rounded-[32px] overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent"
                animate={{
                  backgroundPosition: ["0% 0%", "100% 100%"],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.1),transparent_50%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(231,200,183,0.05),transparent_50%)]" />
            </div>

            {/* Content */}
            <div className="relative z-20">
              {/* Heading with enhanced glow */}
              <motion.div
                className="mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <motion.div
                  className="inline-block relative mb-6"
                  animate={{
                    scale: [1, 1.02, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <motion.div
                    className="absolute -inset-8 bg-gradient-to-r from-white/30 via-transparent to-white/30 rounded-full blur-xl"
                    animate={{
                      opacity: [0.3, 0.6, 0.3],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <h2 className="relative text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#1F2933] via-[#4A5560] to-[#1F2933] bg-clip-text text-transparent">
                    You don&apos;t have to do this alone
                  </h2>
                </motion.div>
              </motion.div>

              {/* Message section with staggered animation */}
              <motion.div
                className="max-w-3xl mx-auto mb-16 space-y-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {/* First paragraph */}
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <motion.p
                    className="text-xl md:text-2xl text-[#4A5560] leading-relaxed text-center"
                    whileHover={{ scale: 1.01 }}
                  >
                    <span className="relative inline-block">
                      If something in you is saying, &ldquo;I need support,&rdquo; listen to it.
                      <motion.div
                        className="absolute -inset-2 bg-gradient-to-r from-transparent via-[#E7C8B7]/10 to-transparent rounded-lg blur-sm"
                        animate={{
                          opacity: [0, 0.2, 0],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    </span>
                  </motion.p>
                </motion.div>

                {/* Second paragraph with stronger emphasis */}
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  <motion.div
                    className="inline-block relative"
                    whileHover={{ scale: 1.02 }}
                  >
                    <motion.div
                      className="absolute -inset-6 bg-gradient-to-r from-[#9FB3A6]/10 via-[#E7C8B7]/10 to-[#9FB3A6]/10 rounded-full blur-lg"
                      animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.3, 0.5, 0.3],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    <p className="relative text-2xl md:text-3xl font-semibold text-[#1F2933] text-center leading-relaxed px-8 py-6">
                      Your healing matters — and it can begin today.
                    </p>
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Enhanced CTA Button */}
              <motion.div
                className="flex justify-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <motion.a
                  href="#"
                  className="group relative inline-flex items-center justify-center gap-4 bg-gradient-to-r from-[#C58A4A] via-[#B0793F] to-[#C58A4A] text-white px-14 py-5 rounded-full text-lg md:text-xl font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden min-w-[280px]"
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  animate={{
                    boxShadow: [
                      "0 15px 40px rgba(197, 138, 74, 0.4)",
                      "0 20px 60px rgba(197, 138, 74, 0.7)",
                      "0 15px 40px rgba(197, 138, 74, 0.4)"
                    ],
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  style={{
                    backgroundSize: "200% 200%"
                  }}
                >
                  {/* Multi-layer glow effects */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#C58A4A] to-[#B0793F] opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500"
                    animate={{
                      scale: [1, 1.3, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <motion.div
                    className="absolute -inset-4 bg-gradient-to-r from-[#C58A4A]/30 to-[#B0793F]/30 rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"
                    animate={{
                      rotate: [0, 180, 360],
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />

                  {/* Button content */}
                  <span className="relative z-10 flex items-center gap-3">
                    Book your consultation
                    <motion.svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      animate={{
                        x: [0, 8, 0],
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </motion.svg>
                  </span>

                  {/* Animated border */}
                  <motion.div
                    className="absolute -inset-[1px] rounded-full bg-gradient-to-r from-white/50 via-transparent to-white/50"
                    animate={{
                      backgroundPosition: ["0% 0%", "100% 100%"],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                </motion.a>
              </motion.div>

              {/* Additional reassurance text */}
              <motion.div
                className="mt-16 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.1, duration: 0.8 }}
              >
                <div className="inline-flex items-center gap-6 px-8 py-4 rounded-full bg-white/30 backdrop-blur-sm border border-white/40">
                  <motion.div
                    className="flex gap-2"
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {["✓", "✓", "✓"].map((check, i) => (
                      <motion.span
                        key={i}
                        className="text-[#9FB3A6] font-bold"
                        animate={{
                          y: [0, -3, 0],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          delay: i * 0.2
                        }}
                      >
                        {check}
                      </motion.span>
                    ))}
                  </motion.div>
                  <span className="text-[#4A5560] font-medium">
                    Confidential • Compassionate • Committed to Your Healing
                  </span>
                  <motion.div
                    className="flex gap-2"
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  >
                    {["✓", "✓", "✓"].map((check, i) => (
                      <motion.span
                        key={i}
                        className="text-[#E7C8B7] font-bold"
                        animate={{
                          y: [0, 3, 0],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          delay: i * 0.2
                        }}
                      >
                        {check}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* Floating decorative elements */}
            <motion.div
              className="absolute -top-8 -left-8 w-16 h-16 border-2 border-[#9FB3A6]/20 rounded-full"
              animate={{
                rotate: 360,
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <motion.div
              className="absolute -bottom-6 -right-6 w-12 h-12 border border-[#E7C8B7]/30 rounded-full"
              animate={{
                rotate: -360,
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </div>
      </div>

      {/* Enhanced floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-[#E7C8B7]/40 to-[#9FB3A6]/40 rounded-full"
            initial={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
            }}
            animate={{
              y: [null, `-${30 + Math.random() * 50}px`, `${30 + Math.random() * 50}px`],
              x: [null, `${15 + Math.random() * 20}px`, `-${15 + Math.random() * 20}px`],
              opacity: [0.2, 0.8, 0.2],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: 5 + Math.random() * 4,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Geometric pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={`h-${i}`}
            className="absolute h-px bg-[#1F2933]"
            style={{ top: `${(i + 1) * 6}%`, width: "100%" }}
            animate={{
              opacity: [0.02, 0.05, 0.02],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.1
            }}
          />
        ))}
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={`v-${i}`}
            className="absolute w-px bg-[#1F2933]"
            style={{ left: `${(i + 1) * 6}%`, height: "100%" }}
            animate={{
              opacity: [0.02, 0.05, 0.02],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.1 + 0.5
            }}
          />
        ))}
      </div>
    </motion.section>
  );
}