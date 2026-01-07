"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-[#F7F3E9] via-[#E8DFD2] to-[#D6C8B5] mt-10">
      {/* Animated Canvas Background */}
      <div className="absolute inset-0">
        <svg className="w-full h-full opacity-5">
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="#8B7355"
                strokeWidth="0.5"
                strokeOpacity="0.2"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Dynamic Fluid Background */}
      <motion.div 
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-[#F0E6D6]/30 via-[#E8DFD2]/20 to-[#D6C8B5]/10"
          animate={{
            background: [
              "linear-gradient(45deg, #F0E6D6 0%, #E8DFD2 50%, #D6C8B5 100%)",
              "linear-gradient(135deg, #F0E6D6 0%, #E8DFD2 50%, #D6C8B5 100%)",
              "linear-gradient(225deg, #F0E6D6 0%, #E8DFD2 50%, #D6C8B5 100%)",
              "linear-gradient(315deg, #F0E6D6 0%, #E8DFD2 50%, #D6C8B5 100%)",
            ]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>

      {/* Animated Morphing Shapes */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-[#E8D0B3]/20 to-[#D4BC9A]/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          borderRadius: ["50%", "40% 60% 70% 30% / 40% 50%", "50%"],
          rotate: [0, 180, 360]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          repeatType: "reverse"
        }}
      />

      <motion.div
        className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-gradient-to-tr from-[#C1A580]/15 to-[#B29773]/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.15, 1],
          borderRadius: ["50%", "60% 40% 30% 70% / 60% 30%", "50%"],
          rotate: [0, -180, -360]
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
          repeatType: "reverse",
          delay: 0.5
        }}
      />

      {/* Floating Orbs with Unique Beige Shades */}
      {[
        { color: "#F0E6D6", size: "w-32 h-32", pos: "top-1/4 right-1/5", delay: 0 },
        { color: "#E8D0B3", size: "w-24 h-24", pos: "top-1/3 left-1/6", delay: 0.3 },
        { color: "#D4BC9A", size: "w-28 h-28", pos: "bottom-1/4 left-1/3", delay: 0.6 },
        { color: "#C1A580", size: "w-20 h-20", pos: "bottom-1/3 right-1/6", delay: 0.9 },
        { color: "#B29773", size: "w-36 h-36", pos: "top-2/3 right-2/5", delay: 1.2 },
        { color: "#A38966", size: "w-16 h-16", pos: "top-1/2 left-2/5", delay: 1.5 }
      ].map((orb, index) => (
        <motion.div
          key={index}
          className={`absolute ${orb.pos} ${orb.size} rounded-full blur-2xl`}
          style={{ backgroundColor: orb.color, opacity: 0.15 }}
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 8 + index,
            repeat: Infinity,
            ease: "easeInOut",
            delay: orb.delay
          }}
        />
      ))}

      {/* Particle System */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              backgroundColor: `#${["F0E6D6", "E8D0B3", "D4BC9A", "C1A580"][i % 4]}`
            }}
            initial={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
              scale: 0
            }}
            animate={{
              scale: [0, 1, 0],
              x: [null, `calc(${Math.random() * 100}% + ${Math.random() * 100 - 50}px)`],
              y: [null, `calc(${Math.random() * 100}% + ${Math.random() * 100 - 50}px)`],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              delay: i * 0.1,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full min-h-screen flex flex-col items-center justify-center px-4 md:px-6 py-12">
        <div className="w-full max-w-5xl mx-auto">
          {/* Enhanced Headline with Text Reveal */}
          <div className="mb-8 md:mb-12 text-center">
            <div className="relative inline-block overflow-hidden rounded-lg px-2">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#E8D0B3]/20 via-[#D4BC9A]/10 to-[#C1A580]/20"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 1.5, delay: 0.5 }}
              />
              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-snug md:leading-tight text-[#2C2416] mb-4 relative"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#8B7355] via-[#A38966] to-[#B29773]">
                  Find clarity.
                </span>
              </motion.h1>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
              whileHover={{ scale: 1.01 }}
              className="relative"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#2C2416] mb-4 md:mb-6 relative inline-block">
                <span className="relative">
                  Feel safe again.
                  <motion.span
                    className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#D4BC9A] to-transparent"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                  />
                </span>
              </h2>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 1.2, type: "spring" }}
              whileHover={{ scale: 1.02 }}
              className="relative inline-block"
            >
              <p className="text-xl sm:text-2xl md:text-3xl font-light text-[#5D4C3B] italic relative">
                <span className="relative z-10">Come back to yourself.</span>
                <motion.span
                  className="absolute -inset-4 bg-gradient-to-r from-[#F0E6D6]/20 via-[#E8D0B3]/10 to-[#F0E6D6]/20 rounded-full blur-xl"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
              </p>
            </motion.div>
          </div>

          {/* Animated Separator with Wave Effect */}
          <motion.div
            className="w-24 h-2 mx-auto mb-8 md:mb-10 relative"
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "6rem" }}
            transition={{ delay: 0.9, duration: 1 }}
            whileHover={{ scale: 1.1 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#E8D0B3] via-[#D4BC9A] to-[#C1A580] rounded-full"
              animate={{ 
                opacity: [0.5, 1, 0.5],
                scale: [1, 1.05, 1]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent rounded-full"
              animate={{ 
                x: ["-100%", "100%"]
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity, 
                ease: "linear"
              }}
            />
          </motion.div>

          {/* Description Section with Card Flip Effect */}
          <motion.div
            className="max-w-2xl mx-auto mb-8 md:mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.9 }}
          >
            <motion.p
              className="text-base sm:text-lg md:text-xl text-[#5D4C3B] leading-relaxed mb-6 text-center"
              whileHover={{ scale: 1.01 }}
            >
              If you're feeling emotionally drained, confused, or stuck in unhealthy
              patterns, you don't have to figure it out alone.
            </motion.p>
            
            <motion.div
              className="relative group"
              whileHover={{ 
                scale: 1.02,
                transition: { type: "spring", stiffness: 300 }
              }}
            >
              <motion.div
                className="bg-gradient-to-br from-white/70 to-white/40 backdrop-blur-sm border border-[#E8DFD2] rounded-2xl px-4 md:px-6 py-4 mb-6 mx-4 sm:mx-6 md:mx-0 shadow-lg"
                whileHover={{ 
                  boxShadow: "0 20px 40px rgba(139, 115, 85, 0.15)" 
                }}
              >
                <motion.div
                  className="absolute -inset-0.5 bg-gradient-to-r from-[#F0E6D6] via-[#E8D0B3] to-[#D4BC9A] rounded-2xl opacity-0 group-hover:opacity-30 blur transition-opacity duration-500"
                />
                <p className="text-base sm:text-lg md:text-xl text-[#2C2416] text-center relative z-10">
                  <motion.span 
                    className="font-semibold relative inline-block"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#8B7355] to-[#B29773]">
                      Mindful Gloww
                    </span>
                  </motion.span>{" "}
                  offers gentle, supportive guidance to help
                  you understand what you're experiencing and move forward with confidence.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Quote Section with Animated Borders */}
          <motion.div
            className="max-w-xl mx-auto mb-8 md:mb-12 px-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="relative p-6 rounded-2xl">
              <motion.div
                className="absolute inset-0 border-2 border-transparent rounded-2xl"
                animate={{
                  borderColor: ["#E8D0B3", "#D4BC9A", "#C1A580", "#E8D0B3"],
                  borderWidth: ["2px", "3px", "2px"]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <div className="relative">
                <motion.div
                  className="absolute -left-2 sm:-left-4 top-0 text-2xl sm:text-3xl text-[#8B7355]"
                  animate={{ 
                    rotate: [0, 10, 0],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  "
                </motion.div>
                <p className="italic text-lg sm:text-xl text-[#5D4C3B] px-4 sm:px-6 text-center">
                  You deserve peace — not constant self-doubt.
                </p>
                <motion.div
                  className="absolute -right-2 sm:-right-4 bottom-0 text-2xl sm:text-3xl text-[#8B7355]"
                  animate={{ 
                    rotate: [0, -10, 0],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                >
                  "
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Enhanced CTA Button with Ripple Effect */}
          <motion.div
            className="flex justify-center mb-12 md:mb-16"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.7, type: "spring", stiffness: 200, damping: 15 }}
          >
            <motion.a
              href="#contact"
              className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-br from-[#8B7355] via-[#A38966] to-[#B29773] text-white px-8 md:px-10 py-4 md:py-5 rounded-full text-lg font-semibold overflow-hidden shadow-lg min-w-[280px]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              animate={{ 
                boxShadow: [
                  "0 10px 30px rgba(139, 115, 85, 0.4)",
                  "0 15px 40px rgba(139, 115, 85, 0.6)",
                  "0 10px 30px rgba(139, 115, 85, 0.4)"
                ]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            >
              {/* Ripple Effect */}
              <motion.span
                className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"
                initial={{ scale: 0, opacity: 1 }}
                animate={{ scale: 3, opacity: 0 }}
                transition={{ 
                  duration: 1.5,
                  repeat: Infinity,
                  repeatDelay: 2
                }}
              />
              
              {/* Inner Glow */}
              <motion.div
                className="absolute inset-0.5 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-sm"
                animate={{ 
                  opacity: [0.3, 0.7, 0.3]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity 
                }}
              />
              
              <span className="relative z-10">Book a confidential consultation</span>
              
              <motion.svg
                className="w-5 h-5 relative z-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={{ 
                  x: [0, 5, 0]
                }}
                transition={{ 
                  duration: 1, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </motion.svg>
            </motion.a>
          </motion.div>

          {/* Trust Indicators with Typing Effect */}
          <motion.div
            className="mt-8 md:mt-16 pt-8 md:pt-12 border-t border-[#E8DFD2] max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.0, duration: 1 }}
          >
            <motion.div
              className="relative overflow-hidden inline-block mx-auto"
              initial={{ width: 0 }}
              animate={{ width: "auto" }}
              transition={{ delay: 2.2, duration: 1 }}
            >
              <p className="text-[#5D4C3B] text-xs sm:text-sm tracking-widest uppercase mb-4 text-center">
                A Safe Space for Healing
              </p>
            </motion.div>
            
            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
              {["Confidential", "Professional Guidance", "Personalized Support"].map((text, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.4 + index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="flex items-center gap-2 bg-gradient-to-r from-[#F0E6D6]/20 to-[#E8D0B3]/20 px-4 py-2 rounded-full backdrop-blur-sm">
                    <motion.svg
                      className="w-4 h-4 text-[#8B7355]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      animate={{ 
                        scale: [1, 1.2, 1],
                        rotate: [0, 10, 0]
                      }}
                      transition={{ 
                        duration: 1,
                        repeat: Infinity,
                        delay: index * 0.2
                      }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </motion.svg>
                    <span className="text-sm text-[#5D4C3B] whitespace-nowrap">{text}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Pattern Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <svg className="w-full h-full">
          <defs>
            <pattern
              id="dots"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="2" cy="2" r="1" fill="#8B7355" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>
    </section>
  );
}