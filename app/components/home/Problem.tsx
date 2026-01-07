"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState, useRef } from "react";

export default function Problem() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [inView, setInView] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 50]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );
    
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    
    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const problemItems = [
    {
      text: "Questioning your reality after difficult relationships",
      emotion: "Confusion",
      icon: "❓"
    },
    {
      text: "Feeling emotionally exhausted or constantly on edge",
      emotion: "Exhaustion",
      icon: "⚡"
    },
    {
      text: "Struggling to understand narcissistic behaviour or abuse",
      emotion: "Isolation",
      icon: "🌀"
    },
    {
      text: "Wanting to heal but unsure where to begin",
      emotion: "Uncertainty",
      icon: "🌱"
    }
  ];

  return (
    <section 
      ref={containerRef}
      className="relative w-full overflow-hidden bg-gradient-to-b from-[#F6F4EF] via-white to-[#E9E3DB]/30 py-32 px-4 md:px-6"
    >
      {/* Animated Background Elements */}
      <motion.div 
        className="absolute inset-0 overflow-hidden"
        style={{ y: backgroundY }}
      >
        {/* Floating glow orbs */}
        <motion.div
          className="absolute top-1/4 left-10 w-64 h-64 bg-[#9FB3A6] rounded-full blur-3xl"
          initial={{ scale: 0, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 0.15 } : { scale: 0, opacity: 0 }}
          transition={{ delay: 0 * 0.3, duration: 1.5, ease: "easeOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-10 w-80 h-80 bg-[#E7C8B7] rounded-full blur-3xl"
          initial={{ scale: 0, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 0.15 } : { scale: 0, opacity: 0 }}
          transition={{ delay: 1 * 0.3, duration: 1.5, ease: "easeOut" }}
        />
        <motion.div
          className="absolute top-2/3 left-1/3 w-48 h-48 bg-[#C58A4A]/20 rounded-full blur-3xl"
          initial={{ scale: 0, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 0.15 } : { scale: 0, opacity: 0 }}
          transition={{ delay: 2 * 0.3, duration: 1.5, ease: "easeOut" }}
        />

        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-px bg-[#1F2933]"
              style={{ 
                top: `${i * 5}%`, 
                width: "100%",
                x: useTransform(scrollYProgress, [0, 1], [0, i % 2 === 0 ? 20 : -20])
              }}
            />
          ))}
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-px bg-[#1F2933]"
              style={{ 
                left: `${i * 5}%`, 
                height: "100%",
                y: useTransform(scrollYProgress, [0, 1], [0, i % 2 === 0 ? -20 : 20])
              }}
            />
          ))}
        </div>
      </motion.div>

      <div className="relative max-w-6xl mx-auto z-10">
        {/* Section Header with Glow Effect */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="inline-block mb-6"
            initial={{ scale: 1 }}
            animate={inView ? { scale: [1, 1.05, 1] } : {}}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="relative">
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-[#9FB3A6]/30 to-[#E7C8B7]/30 blur-xl rounded-full"
                animate={inView ? {
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3]
                } : {}}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <h2 className="relative text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#1F2933] via-[#4A5560] to-[#1F2933] bg-clip-text text-transparent">
                You might be feeling this way
              </h2>
            </div>
          </motion.div>

          <motion.p
            className="text-lg md:text-xl text-[#4A5560] max-w-2xl mx-auto mt-4"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Recognizing these feelings is the first step toward healing
          </motion.p>
        </motion.div>

        {/* Animated Problem Cards Container */}
        <motion.div
          className="relative"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Glass morphism container */}
          <div className="relative rounded-3xl overflow-hidden backdrop-blur-xl bg-white/80 border border-white/20 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-[#9FB3A6]/10 via-[#E7C8B7]/10 to-[#9FB3A6]/10 rounded-3xl" />
            
            {/* Inner content */}
            <div className="relative p-8 md:p-12 lg:p-16">
              <ul className="grid md:grid-cols-2 gap-8">
                {problemItems.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20, filter: "blur(4px)" }}
                    animate={inView ? { 
                      opacity: 1, 
                      x: 0, 
                      filter: "blur(0px)" 
                    } : {}}
                    transition={{ 
                      delay: 0.5 + (index * 0.15), 
                      duration: 0.8, 
                      ease: "easeOut" 
                    }}
                    whileHover={{ scale: 1.03 }}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className="relative group"
                  >
                    {/* Hover glow effect */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#9FB3A6]/10 to-[#E7C8B7]/10 opacity-0 group-hover:opacity-100 blur-md"
                      initial={false}
                      animate={{
                        scale: hoveredIndex === index ? 1.1 : 1,
                        opacity: hoveredIndex === index ? 0.8 : 0
                      }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    {/* Card content */}
                    <div className="relative p-6 md:p-8 rounded-2xl bg-gradient-to-br from-white/80 to-white/40 border border-white/50 backdrop-blur-sm">
                      {/* Animated emotion indicator */}
                      <motion.div
                        className="absolute -top-3 -left-3 w-12 h-12 rounded-full bg-gradient-to-br from-[#9FB3A6] to-[#8CA397] flex items-center justify-center text-white text-xl shadow-lg"
                        animate={{
                          rotate: hoveredIndex === index ? 360 : 0,
                          scale: hoveredIndex === index ? 1.2 : 1
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        {item.icon}
                      </motion.div>

                      {/* Emotion label */}
                      <motion.span
                        className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-[#9FB3A6] bg-[#9FB3A6]/10 mb-4"
                        animate={{
                          backgroundColor: hoveredIndex === index 
                            ? "rgba(159, 179, 166, 0.2)" 
                            : "rgba(159, 179, 166, 0.1)"
                        }}
                      >
                        {item.emotion}
                      </motion.span>

                      {/* Problem text */}
                      <motion.p
                        className="text-lg md:text-xl text-[#1F2933] font-medium leading-relaxed pl-2"
                        animate={{
                          color: hoveredIndex === index ? "#1F2933" : "#4A5560"
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        {item.text}
                      </motion.p>

                      {/* Animated underline */}
                      <motion.div
                        className="h-0.5 bg-gradient-to-r from-transparent via-[#9FB3A6] to-transparent mt-4"
                        initial={{ width: "0%" }}
                        animate={{ 
                          width: hoveredIndex === index ? "100%" : "0%"
                        }}
                        transition={{ duration: 0.3 }}
                      />

                      {/* Floating particles on hover */}
                      {hoveredIndex === index && (
                        <>
                          {[1, 2, 3].map((particle) => (
                            <motion.div
                              key={particle}
                              className="absolute w-1 h-1 bg-[#9FB3A6] rounded-full"
                              initial={{
                                x: 0,
                                y: 0,
                                opacity: 0
                              }}
                              animate={{
                                x: Math.random() * 40 - 20,
                                y: Math.random() * 40 - 20,
                                opacity: [0, 1, 0]
                              }}
                              transition={{
                                duration: 1,
                                ease: "easeOut"
                              }}
                            />
                          ))}
                        </>
                      )}
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Animated Reassurance Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <div className="relative inline-block max-w-3xl">
            {/* Glowing background for text */}
            <motion.div
              className="absolute -inset-6 bg-gradient-to-r from-[#9FB3A6]/10 via-[#E7C8B7]/10 to-[#9FB3A6]/10 blur-xl rounded-3xl"
              animate={inView ? {
                scale: [1, 1.05, 1],
                opacity: [0.3, 0.5, 0.3]
              } : {}}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <div className="relative p-8 rounded-2xl backdrop-blur-sm bg-white/30 border border-white/20">
              <motion.p
                className="text-xl md:text-2xl text-[#4A5560] leading-relaxed"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 1.3, duration: 0.8 }}
              >
                Many people blame themselves —{" "}
                <span className="font-bold text-[#1F2933] bg-gradient-to-r from-[#9FB3A6] to-[#C58A4A] bg-clip-text text-transparent">
                  but what you're feeling makes complete sense.
                </span>
              </motion.p>
              
              <motion.div
                className="flex items-center justify-center gap-4 mt-6"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 1.5 }}
              >
                <motion.div
                  className="w-2 h-2 bg-[#9FB3A6] rounded-full"
                  animate={inView ? { scale: [1, 1.5, 1] } : {}}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
                <span className="text-sm text-[#4A5560] font-medium">
                  Your feelings are valid • Your healing is possible • You are not alone
                </span>
                <motion.div
                  className="w-2 h-2 bg-[#9FB3A6] rounded-full"
                  animate={inView ? { scale: [1, 1.5, 1] } : {}}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating particles in background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#9FB3A6]/30 rounded-full"
            initial={{
              x: Math.random() * 100 + "vw",
              y: Math.random() * 100 + "vh"
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
              ease: "easeInOut" as const
            }}
          />
        ))}
      </div>
    </section>
  );
}