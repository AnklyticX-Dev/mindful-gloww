"use client";

import { motion } from "framer-motion";
import { Target, Brain, ShieldCheck, Heart, Sparkles } from 'lucide-react';

export default function Specialisation() {
  const specialisations = [
    {
      text: "Narcissistic behaviour and abuse dynamics",
      icon: <Target className="w-5 h-5" />,
      color: "text-[#C58A4A]",
      bgColor: "bg-[#C58A4A]/10",
      borderColor: "border-[#C58A4A]/20",
      delay: 0.1
    },
    {
      text: "Emotional and psychological abuse",
      icon: <Brain className="w-5 h-5" />,
      color: "text-[#9FB3A6]",
      bgColor: "bg-[#9FB3A6]/10",
      borderColor: "border-[#9FB3A6]/20",
      delay: 0.2
    },
    {
      text: "Trauma-informed healing",
      icon: <Heart className="w-5 h-5" />,
      color: "text-[#E7C8B7]",
      bgColor: "bg-[#E7C8B7]/10",
      borderColor: "border-[#E7C8B7]/20",
      delay: 0.3
    },
    {
      text: "Rebuilding self-trust and emotional safety",
      icon: <ShieldCheck className="w-5 h-5" />,
      color: "text-[#8CA397]",
      bgColor: "bg-[#8CA397]/10",
      borderColor: "border-[#8CA397]/20",
      delay: 0.4
    }
  ];

  return (
    <section className="relative py-32 px-6 overflow-hidden bg-gradient-to-b from-[#F6F4EF] via-[#E9E3DB] to-[#F6F4EF]">
      {/* Background glow effects */}
      <motion.div
        className="absolute -top-32 left-10 w-80 h-80 bg-[#E7C8B7]/20 rounded-full blur-3xl"
        animate={{
          x: [0, 30, 0],
          y: [0, -40, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute -bottom-32 right-10 w-96 h-96 bg-[#9FB3A6]/10 rounded-full blur-3xl"
        animate={{
          x: [0, -40, 0],
          y: [0, 50, 0],
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
        className="absolute top-1/2 left-1/3 w-64 h-64 bg-[#C58A4A]/5 rounded-full blur-3xl"
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

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-[#E7C8B7]/20 text-xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 180, 360],
              opacity: [0.1, 0.4, 0.1],
              scale: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 8 + Math.random() * 5,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut"
            }}
          >
            ✦
          </motion.div>
        ))}
      </div>

      <div className="relative max-w-5xl mx-auto z-10">
        {/* Header with glow effect */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block relative mb-8"
            animate={{
              scale: [1, 1.02, 1]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <motion.div
              className="absolute -inset-6 bg-gradient-to-r from-[#E7C8B7]/20 to-[#9FB3A6]/20 rounded-full blur-xl"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <h2 className="relative text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#1F2933] via-[#4A5560] to-[#1F2933] bg-clip-text text-transparent">
              Areas of special focus
            </h2>
          </motion.div>

          <motion.p
            className="text-lg text-[#4A5560] max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Dedicated expertise in sensitive healing journeys
          </motion.p>
        </motion.div>

        {/* Glass morphism container */}
        <motion.div
          className="relative backdrop-blur-xl bg-gradient-to-br from-white/60 to-white/30 border border-white/40 rounded-3xl p-10 md:p-12 shadow-2xl overflow-hidden mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.01 }}
        >
          {/* Animated gradient border */}
          <motion.div
            className="absolute inset-0 rounded-3xl p-[1px]"
            animate={{
              background: [
                "linear-gradient(45deg, #E7C8B7, #9FB3A6, #F6F4EF, #E7C8B7)",
                "linear-gradient(45deg, #9FB3A6, #F6F4EF, #E7C8B7, #9FB3A6)",
                "linear-gradient(45deg, #F6F4EF, #E7C8B7, #9FB3A6, #F6F4EF)"
              ]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/40 to-transparent" />
          </motion.div>

          {/* Specialisations list */}
          <div className="relative space-y-5">
            {specialisations.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: item.delay, duration: 0.6 }}
                className="group"
              >
                <motion.div
                  className="flex items-center gap-4 p-5 rounded-2xl backdrop-blur-sm bg-white/40 border border-white/40 hover:border-white/60 transition-all duration-300 relative overflow-hidden"
                  whileHover={{ 
                    scale: 1.02,
                    backgroundColor: "rgba(255, 255, 255, 0.6)"
                  }}
                  animate={{
                    y: [0, -2, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.2,
                    ease: "easeInOut"
                  }}
                >
                  {/* Background glow on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 blur-sm"
                    animate={{
                      x: ["-100%", "100%"]
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "linear",
                      delay: index * 0.1
                    }}
                  />

                  {/* Icon container */}
                  <motion.div
                    className={`w-12 h-12 rounded-xl ${item.bgColor} ${item.borderColor} border flex items-center justify-center relative`}
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, 0]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.3
                    }}
                    whileHover={{
                      scale: 1.2,
                      rotate: 0
                    }}
                  >
                    <div className={item.color}>
                      {item.icon}
                    </div>
                    <motion.div
                      className="absolute inset-0 rounded-xl blur-md"
                      style={{ backgroundColor: item.color.replace('text-', '') + '20' }}
                      animate={{
                        opacity: [0.3, 0.6, 0.3]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </motion.div>

                  {/* Text */}
                  <motion.span
                    className="text-lg md:text-xl font-medium text-[#1F2933] flex-1 text-left"
                    whileHover={{ scale: 1.01 }}
                  >
                    {item.text}
                  </motion.span>

                  {/* Animated dot */}
                  <motion.div
                    className={`w-2 h-2 rounded-full ${item.bgColor.replace('bg-', 'bg-').replace('/10', '/40')}`}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.2
                    }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Decorative elements */}
          <motion.div
            className="absolute -top-6 -left-6 w-12 h-12 border-2 border-[#E7C8B7]/30 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute -bottom-4 -right-4 w-8 h-8 border border-[#9FB3A6]/20 rounded-full"
            animate={{ rotate: -360, scale: [1, 1.2, 1] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        {/* Bottom message with enhanced effects */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <div className="relative inline-block max-w-2xl">
            <motion.div
              className="absolute -inset-8 bg-gradient-to-r from-[#E7C8B7]/10 via-[#9FB3A6]/10 to-[#E7C8B7]/10 rounded-full blur-xl"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <div className="relative p-8 rounded-2xl backdrop-blur-sm bg-white/30 border border-white/40">
              <motion.p
                className="text-xl md:text-2xl text-[#4A5560] leading-relaxed font-medium relative"
                animate={{
                  textShadow: [
                    "0 0 0px rgba(255, 255, 255, 0)",
                    "0 0 10px rgba(255, 255, 255, 0.3)",
                    "0 0 0px rgba(255, 255, 255, 0)"
                  ]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                This space is about{" "}
                <motion.span
                  className="font-bold text-[#1F2933] relative inline-block"
                  whileHover={{ scale: 1.05 }}
                >
                  understanding
                  <motion.span
                    className="absolute -inset-1 bg-gradient-to-r from-[#E7C8B7]/20 to-[#9FB3A6]/20 rounded-lg blur-sm"
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
                {" "}— not labeling or judging.
              </motion.p>
              
              <motion.div
                className="flex items-center justify-center gap-4 mt-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.2 }}
              >
                <motion.div
                  className="flex gap-2"
                  animate={{
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-2 h-2 bg-[#E7C8B7] rounded-full"
                      animate={{
                        y: [0, -4, 0]
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: i * 0.2
                      }}
                    />
                  ))}
                </motion.div>
                <span className="text-sm text-[#4A5560] font-medium">
                  Compassion • Expertise • Confidentiality
                </span>
                <motion.div
                  className="flex gap-2"
                  animate={{
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                >
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-2 h-2 bg-[#9FB3A6] rounded-full"
                      animate={{
                        y: [0, 4, 0]
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
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={`sparkle-${i}`}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 180, 360],
              opacity: [0, 0.5, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut"
            }}
          >
            <Sparkles className="w-3 h-3 text-[#C58A4A]/30" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}