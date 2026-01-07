"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-[#F6F4EF] via-[#E9E3DB] to-[#D8CBBE]">
      {/* Enhanced Background Glass Layer with Gradient Animation */}
      <motion.div 
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-[#F6F4EF]/5 via-transparent to-[#F6F4EF]/5 backdrop-blur-[1px]"
          animate={{
            background: [
              "linear-gradient(to bottom, rgba(246, 244, 239, 0.05) 0%, transparent 50%, rgba(246, 244, 239, 0.05) 100%)",
              "linear-gradient(to bottom, rgba(246, 244, 239, 0.08) 0%, transparent 50%, rgba(246, 244, 239, 0.08) 100%)",
              "linear-gradient(to bottom, rgba(246, 244, 239, 0.05) 0%, transparent 50%, rgba(246, 244, 239, 0.05) 100%)",
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
      
      {/* Enhanced Ambient Shapes with Warm Beige Glow */}
      <motion.div
        className="absolute top-20 left-10 md:top-1/4 md:left-1/4 w-64 h-64 md:w-72 md:h-72 bg-gradient-to-br from-[#E7C8B7]/20 to-[#D4B09C]/10 rounded-full blur-3xl"
        animate={{ 
          x: [0, 30, 0],
          y: [0, -20, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          ease: "easeInOut",
          repeatType: "reverse"
        }}
        whileHover={{ scale: 1.2, opacity: 0.2 }}
      />
      <motion.div
        className="absolute bottom-20 right-10 md:bottom-1/4 md:right-1/4 w-72 h-72 md:w-80 md:h-80 bg-gradient-to-br from-[#C58A4A]/10 to-[#B0793F]/5 rounded-full blur-3xl"
        animate={{ 
          x: [0, -40, 0],
          y: [0, 30, 0],
          scale: [1, 1.05, 1]
        }}
        transition={{ 
          duration: 25, 
          repeat: Infinity, 
          ease: "easeInOut",
          repeatType: "reverse",
          delay: 0.5
        }}
        whileHover={{ scale: 1.3, opacity: 0.15 }}
      />
      <motion.div
        className="absolute top-2/3 left-1/3 w-48 h-48 md:w-64 md:h-64 bg-gradient-to-br from-[#9FB3A6]/10 to-transparent rounded-full blur-3xl"
        animate={{ 
          x: [0, 20, -10, 0],
          y: [0, 10, -15, 0]
        }}
        transition={{ 
          duration: 30, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        whileHover={{ scale: 1.15 }}
      />

      {/* Additional Floating Glow Orbs - Beige Theme */}
      <motion.div
        className="absolute top-1/3 right-10 w-32 h-32 bg-gradient-to-br from-[#B0793F]/5 to-[#C58A4A]/5 rounded-full blur-3xl"
        animate={{
          y: [0, -15, 0],
          x: [0, 10, 0],
          opacity: [0.05, 0.1, 0.05]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/3 left-1/4 w-24 h-24 bg-gradient-to-br from-[#F6F4EF]/20 to-transparent rounded-full blur-2xl"
        animate={{
          y: [0, 20, 0],
          x: [0, -15, 0],
          opacity: [0.03, 0.07, 0.03]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
      />

      {/* Animated Gradient Mesh Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #C58A4A 0%, transparent 40%),
                          radial-gradient(circle at 75% 75%, #9FB3A6 0%, transparent 40%),
                          radial-gradient(circle at 50% 50%, #E7C8B7 0%, transparent 50%)`
        }} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full min-h-screen flex flex-col items-center justify-center px-4 md:px-6 py-12">
        <div className="w-full max-w-5xl mx-auto">
          {/* Enhanced Headline Section with Text Glow */}
          <div className="mb-8 md:mb-12 text-center">
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-snug md:leading-tight text-[#1F2933] mb-4 relative"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              whileHover={{ 
                textShadow: "0 0 20px rgba(197, 138, 74, 0.3)" 
              }}
            >
              <span className="relative inline-block">
                Find clarity.
                <motion.span
                  className="absolute -inset-1 bg-gradient-to-r from-[#C58A4A]/10 to-[#E7C8B7]/10 blur-md rounded-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 0.5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                />
              </span>
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
              whileHover={{ scale: 1.01 }}
              className="relative"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#1F2933] mb-4 md:mb-6 relative inline-block">
                Feel safe again.
                <motion.span
                  className="absolute -inset-1 bg-gradient-to-r from-[#9FB3A6]/15 to-transparent blur-md rounded-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 0.3, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 2 }}
                />
              </h2>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1.2 }}
              whileHover={{ scale: 1.02 }}
              className="relative inline-block"
            >
              <p className="text-xl sm:text-2xl md:text-3xl font-light text-[#4A5560] italic">
                Come back to yourself.
                <motion.div
                  className="absolute -inset-2 bg-gradient-to-r from-transparent via-[#E7C8B7]/20 to-transparent blur-sm rounded-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 0.4, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 3 }}
                />
              </p>
            </motion.div>
          </div>

          {/* Enhanced Animated Separator with Glow */}
          <motion.div
            className="w-24 h-1 mx-auto mb-8 md:mb-10 rounded-full relative overflow-hidden"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "6rem", opacity: 1 }}
            transition={{ delay: 0.9, duration: 1, ease: "easeOut" }}
            whileHover={{ scale: 1.1 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#C58A4A]/40 to-[#E7C8B7]/40" />
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent"
              animate={{ 
                x: ["-100%", "100%"]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: 1
              }}
            />
          </motion.div>

          {/* Enhanced Description Section */}
          <motion.div
            className="max-w-2xl mx-auto mb-8 md:mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.9 }}
          >
            <motion.p
              className="text-base sm:text-lg md:text-xl text-[#4A5560] leading-relaxed mb-6 text-center"
              whileHover={{ scale: 1.01 }}
            >
              If you're feeling emotionally drained, confused, or stuck in unhealthy
              patterns, you don't have to figure it out alone.
            </motion.p>
            
            {/* Enhanced Mindful Gloww Highlight with Beige Glow */}
            <motion.div
              className="bg-gradient-to-br from-white/60 to-white/40 backdrop-blur-sm border border-[#E9E3DB] rounded-xl px-4 md:px-6 py-4 mb-6 mx-4 sm:mx-6 md:mx-0 relative overflow-hidden group"
              whileHover={{ 
                scale: 1.02, 
                boxShadow: "0 20px 40px rgba(197, 138, 74, 0.15)" 
              }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              {/* Animated gradient border */}
              <motion.div
                className="absolute -inset-[1px] bg-gradient-to-r from-transparent via-[#C58A4A]/30 to-transparent rounded-xl"
                animate={{
                  x: ["-100%", "100%"]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "linear",
                  delay: 1.5
                }}
              />
              <div className="absolute inset-[1px] bg-gradient-to-br from-[#F6F4EF]/80 to-white/60 rounded-xl" />
              
              <p className="text-base sm:text-lg md:text-xl text-[#1F2933] text-center relative z-10">
                <motion.span 
                  className="font-semibold relative inline-block text-[#C58A4A]"
                  whileHover={{ scale: 1.05 }}
                >
                  Mindful Gloww
                  <motion.span
                    className="absolute -inset-1 bg-gradient-to-r from-[#C58A4A]/20 to-[#E7C8B7]/20 blur-sm rounded-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 0.3, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.span>{" "}
                offers gentle, supportive guidance to help
                you understand what you're experiencing and move forward with confidence.
              </p>
            </motion.div>
          </motion.div>

          {/* Enhanced Quote Section with Beige Theme */}
          <motion.div
            className="max-w-xl mx-auto mb-8 md:mb-12 px-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="relative">
              <motion.div
                className="absolute -left-2 sm:-left-4 top-0 text-2xl sm:text-3xl text-[#C58A4A]/40"
                animate={{ rotate: [0, 5, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 2 }}
              >
                "
              </motion.div>
              <p className="italic text-lg sm:text-xl text-[#4A5560] px-4 sm:px-6 text-center relative">
                You deserve peace — not constant self-doubt.
                <motion.span
                  className="absolute -inset-4 bg-gradient-to-r from-[#E7C8B7]/10 to-transparent blur-lg rounded-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 0.2, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 2.5 }}
                />
              </p>
              <motion.div
                className="absolute -right-2 sm:-right-4 bottom-0 text-2xl sm:text-3xl text-[#C58A4A]/40"
                animate={{ rotate: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 2.2 }}
              >
                "
              </motion.div>
            </div>
          </motion.div>

          {/* Enhanced CTA Button Section with Beige Glow */}
          <motion.div
            className="flex justify-center mb-12 md:mb-16"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.7, type: "spring", stiffness: 200, damping: 15 }}
          >
            <motion.a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 sm:gap-3 bg-gradient-to-r from-[#C58A4A] to-[#B0793F] hover:from-[#B0793F] hover:to-[#A56E37] text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-full text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden relative min-w-[200px] sm:min-w-[280px]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              animate={{ 
                boxShadow: [
                  "0 10px 30px rgba(197, 138, 74, 0.4)",
                  "0 15px 40px rgba(197, 138, 74, 0.6)",
                  "0 10px 30px rgba(197, 138, 74, 0.4)"
                ]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            >
              {/* Enhanced Button Glow Effect */}
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-[#C58A4A] to-[#B0793F] opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0, 0.3, 0]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              
              {/* Outer glow ring */}
              <motion.div
                className="absolute -inset-2 bg-gradient-to-r from-[#C58A4A]/30 to-[#B0793F]/30 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                animate={{
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              
              <span className="relative z-10">Book a confidential consultation</span>
              
              {/* Enhanced Animated Arrow Icon */}
              <motion.svg
                className="w-4 h-4 sm:w-5 sm:h-5 relative z-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={{ 
                  x: [0, 5, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </motion.svg>
            </motion.a>
          </motion.div>

          {/* Enhanced Trust Indicator Section with Beige Theme */}
          <motion.div
            className="mt-8 md:mt-16 pt-6 md:pt-8 border-t border-[#E9E3DB] max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.0, duration: 1 }}
            whileHover={{ y: -5 }}
          >
            <motion.p
              className="text-[#4A5560] text-xs sm:text-sm tracking-wider uppercase mb-2 text-center"
              animate={{ 
                textShadow: ["0 0 0px rgba(159, 179, 166, 0)", "0 0 8px rgba(159, 179, 166, 0.3)", "0 0 0px rgba(159, 179, 166, 0)"]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              A Safe Space for Healing
            </motion.p>
            <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 md:gap-6 text-[#4A5560] text-xs sm:text-sm">
              {["Confidential", "Professional Guidance", "Personalized Support"].map((text, index) => (
                <motion.span
                  key={index}
                  className="whitespace-nowrap relative"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.2 + index * 0.1 }}
                  whileHover={{ 
                    color: "#C58A4A",
                    scale: 1.05 
                  }}
                >
                  ✓ {text}
                  {index < 2 && (
                    <>
                      <span className="hidden sm:inline"> •</span>
                      <span className="sm:hidden mx-1">|</span>
                    </>
                  )}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Floating Elements with Beige Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              background: `radial-gradient(circle, ${i % 3 === 0 ? '#C58A4A' : i % 3 === 1 ? '#E7C8B7' : '#9FB3A6'}, transparent)`,
              opacity: 0.4
            }}
            initial={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
            }}
            animate={{
              y: [null, -20, 10, -20],
              x: [null, 10, -5, 10],
              opacity: [0.3, 0.7, 0.3]
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut"
            }}
          />
        ))}
        
        {/* Sparkle Particles with Beige Colors */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`sparkle-${i}`}
            className="absolute w-[2px] h-[2px] rounded-full"
            style={{
              background: i % 2 === 0 ? '#C58A4A' : '#E7C8B7'
            }}
            initial={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
              opacity: 0
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0]
            }}
            transition={{
              duration: 1.5 + Math.random(),
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </section>
  );
}