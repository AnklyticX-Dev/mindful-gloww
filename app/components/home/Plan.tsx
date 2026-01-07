"use client";

import { motion } from "framer-motion";
import { Calendar, MessageSquare, HeartHandshake, CheckCircle, Sparkles, ArrowRight } from 'lucide-react';

export default function Plan() {
  const steps = [
    {
      number: 1,
      title: "Book a consultation",
      description: "Start with a simple, confidential booking process",
      icon: <Calendar className="w-6 h-6" />,
      color: "from-[#9FB3A6]/30 to-[#8CA397]/20",
      glowColor: "rgba(159, 179, 166, 0.4)",
      delay: 0.1
    },
    {
      number: 2,
      title: "Share your experience in a safe, confidential space",
      description: "Speak freely in a judgment-free environment",
      icon: <MessageSquare className="w-6 h-6" />,
      color: "from-[#C58A4A]/30 to-[#B0793F]/20",
      glowColor: "rgba(197, 138, 74, 0.4)",
      delay: 0.3
    },
    {
      number: 3,
      title: "Receive personalised guidance and ongoing support",
      description: "Get tailored strategies and continuous care",
      icon: <HeartHandshake className="w-6 h-6" />,
      color: "from-[#E7C8B7]/30 to-[#E9E3DB]/20",
      glowColor: "rgba(231, 200, 183, 0.4)",
      delay: 0.5
    }
  ];

  return (
    <section className="relative py-32 px-6 overflow-hidden bg-gradient-to-b from-[#9FB3A6] via-[#8CA397] to-[#9FB3A6]">
      {/* Enhanced background glow effects */}
      <motion.div
        className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-white/10 rounded-full blur-[100px]"
        animate={{
          x: [0, 50, 0],
          y: [0, -60, 0],
          scale: [1, 1.15, 1]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute -bottom-40 -right-40 w-[550px] h-[550px] bg-[#E7C8B7]/15 rounded-full blur-[100px]"
        animate={{
          x: [0, -60, 0],
          y: [0, 80, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.3
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#F6F4EF]/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Floating leaf particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-[#F6F4EF]/20 text-2xl"
            style={{
              left: `${10 + i * 8}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              y: [0, -120, 0],
              rotate: [0, 180, 360],
              opacity: [0.1, 0.3, 0.1],
              scale: [0.5, 1.2, 0.5]
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeInOut"
            }}
          >
            ❖
          </motion.div>
        ))}
      </div>

      <div className="relative max-w-6xl mx-auto z-10">
        {/* Enhanced header with glow */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block relative mb-10"
            animate={{
              scale: [1, 1.03, 1]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <motion.div
              className="absolute -inset-8 bg-gradient-to-r from-white/20 to-[#8CA397]/20 rounded-full blur-2xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <h2 className="relative text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              How it works
            </h2>
          </motion.div>
          
          <motion.p
            className="text-xl text-white/90 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            A clear, compassionate path forward
          </motion.p>
        </motion.div>

        {/* Steps container with glass effect */}
        <motion.div
          className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-10 md:p-12 shadow-2xl overflow-hidden mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.01 }}
        >
          {/* Animated gradient border */}
          <motion.div
            className="absolute inset-0 rounded-3xl p-[2px]"
            animate={{
              background: [
                "linear-gradient(45deg, transparent, #FFFFFF30, transparent)",
                "linear-gradient(45deg, transparent, #9FB3A660, transparent)",
                "linear-gradient(45deg, transparent, #E7C8B760, transparent)",
                "linear-gradient(45deg, transparent, #FFFFFF30, transparent)"
              ]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/20 to-transparent" />
          </motion.div>

          <div className="relative space-y-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: step.delay, duration: 0.8 }}
                className="group relative"
              >
                {/* Connecting lines */}
                {index < steps.length - 1 && (
                  <motion.div
                    className="absolute left-20 top-full h-10 md:h-20 w-0.5 bg-gradient-to-b from-white/30 to-transparent"
                    initial={{ height: 0 }}
                    whileInView={{ height: index === 0 ? "80px" : "40px" }}
                    viewport={{ once: true }}
                    transition={{ delay: step.delay + 0.3, duration: 1 }}
                  />
                )}

                {/* Arrow between steps */}
                {index < steps.length - 1 && (
                  <motion.div
                    className="absolute left-19 top-full mt-8 md:mt-20"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: step.delay + 0.5 }}
                  >
                    <motion.div
                      animate={{
                        y: [0, 10, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <ArrowRight className="w-6 h-6 text-white/50 -rotate-90" />
                    </motion.div>
                  </motion.div>
                )}

                {/* Step card with enhanced glow */}
                <motion.div
                  className="flex items-start md:items-center gap-6 p-8 rounded-2xl backdrop-blur-lg bg-gradient-to-br from-white/15 to-white/5 border border-white/20 relative overflow-hidden"
                  whileHover={{ 
                    scale: 1.03,
                    backgroundColor: "rgba(255, 255, 255, 0.2)"
                  }}
                  animate={{
                    y: [0, -5, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.4,
                    ease: "easeInOut"
                  }}
                >
                  {/* Background glow on hover */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                    style={{
                      background: `radial-gradient(circle at center, ${step.glowColor}, transparent 70%)`,
                      filter: 'blur(20px)'
                    }}
                  />

                  {/* Step number with glow */}
                  <motion.div
                    className="relative flex-shrink-0"
                    whileHover={{ scale: 1.1 }}
                  >
                    <motion.div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} border border-white/30 flex items-center justify-center relative`}
                      animate={{
                        scale: [1, 1.08, 1],
                        rotate: [0, 5, -5, 0]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.2
                      }}
                    >
                      <motion.span
                        className="text-2xl font-bold text-white"
                        animate={{
                          scale: [1, 1.2, 1]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        {step.number}
                      </motion.span>
                      <motion.div
                        className="absolute inset-0 rounded-2xl blur-md"
                        style={{ backgroundColor: step.glowColor.replace('0.4', '0.3') }}
                        animate={{
                          opacity: [0.3, 0.6, 0.3],
                          scale: [1, 1.2, 1]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    </motion.div>
                    
                    {/* Icon in corner */}
                    <motion.div
                      className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center"
                      animate={{
                        rotate: [0, 360]
                      }}
                      transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "linear",
                        delay: index * 0.5
                      }}
                    >
                      <div className="text-white">
                        {step.icon}
                      </div>
                    </motion.div>
                  </motion.div>

                  {/* Step content */}
                  <div className="flex-1 text-left">
                    <motion.h3
                      className="text-xl md:text-2xl font-bold text-white mb-2 relative inline-block"
                      whileHover={{ scale: 1.02 }}
                    >
                      {step.title}
                      <motion.span
                        className="absolute -inset-2 bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-lg blur-sm"
                        animate={{
                          opacity: [0, 0.3, 0]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.3
                        }}
                      />
                    </motion.h3>
                    <motion.p
                      className="text-white/80 text-lg"
                      initial={{ opacity: 0.8 }}
                      whileHover={{ opacity: 1 }}
                    >
                      {step.description}
                    </motion.p>
                  </div>

                  {/* Checkmark */}
                  <motion.div
                    className="hidden md:block"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: step.delay + 0.7 }}
                    animate={{
                      rotate: [0, 10, 0]
                    }}
                   
                  >
                    <CheckCircle className="w-8 h-8 text-white/60" />
                  </motion.div>

                  {/* Floating particles */}
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {[...Array(4)].map((_, particleIndex) => (
                      <motion.div
                        key={particleIndex}
                        className="absolute w-1 h-1 bg-white/40 rounded-full"
                        initial={{
                          x: 0,
                          y: 0,
                          opacity: 0
                        }}
                        whileHover={{
                          x: Math.random() * 60 - 30,
                          y: Math.random() * 60 - 30,
                          opacity: [0, 0.8, 0]
                        }}
                        transition={{
                          duration: 1.5,
                          ease: "easeOut"
                        }}
                      />
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Decorative elements */}
          <motion.div
            className="absolute -top-8 -left-8 w-16 h-16 border-2 border-white/20 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute -bottom-6 -right-6 w-12 h-12 border border-white/15 rounded-full"
            animate={{ rotate: -360, scale: [1, 1.2, 1] }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        {/* Bottom message with enhanced glow */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <div className="relative inline-block">
            <motion.div
              className="absolute -inset-10 bg-gradient-to-r from-white/10 via-[#9FB3A6]/20 to-white/10 rounded-full blur-2xl"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <div className="relative px-12 py-8 rounded-2xl backdrop-blur-xl bg-white/15 border border-white/30">
              <motion.p
                className="text-2xl md:text-3xl font-bold text-white leading-relaxed"
                animate={{
                  textShadow: [
                    "0 0 0px rgba(255, 255, 255, 0)",
                    "0 0 15px rgba(255, 255, 255, 0.4)",
                    "0 0 0px rgba(255, 255, 255, 0)"
                  ]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                No overwhelm. No pressure.{" "}
                <motion.span
                  className="relative inline-block"
                  whileHover={{ scale: 1.05 }}
                >
                  One step at a time.
                  <motion.span
                    className="absolute -inset-2 bg-gradient-to-r from-[#E7C8B7]/30 to-[#C58A4A]/30 rounded-lg blur-sm"
                    animate={{
                      opacity: [0.2, 0.4, 0.2]
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.span>
              </motion.p>
              
              <motion.div
                className="flex items-center justify-center gap-6 mt-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.5 }}
              >
                <motion.div
                  className="flex gap-3"
                  animate={{
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-3 h-3 bg-white rounded-full"
                      animate={{
                        y: [0, -6, 0]
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: i * 0.2
                      }}
                    />
                  ))}
                </motion.div>
                <span className="text-white/80 text-lg font-medium">
                  Your pace • Your journey • Your healing
                </span>
                <motion.div
                  className="flex gap-3"
                  animate={{
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                >
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-3 h-3 bg-white rounded-full"
                      animate={{
                        y: [0, 6, 0]
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: i * 0.2
                      }}
                    />
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Additional floating sparkles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`sparkle-${i}`}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              y: [0, -40, 0],
              rotate: [0, 180, 360],
              opacity: [0, 0.6, 0],
              scale: [0, 1.2, 0]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut"
            }}
          >
            <Sparkles className="w-4 h-4 text-white/40" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}