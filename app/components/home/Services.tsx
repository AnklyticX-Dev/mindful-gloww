"use client";

import { motion } from "framer-motion";
import { 
  HeartHandshake, 
  Brain, 
  MessageCircle, 
  CalendarCheck,
  Sparkles,
  Zap
} from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <HeartHandshake className="w-8 h-8" />,
      title: "1:1 Consultations",
      description: "A safe, confidential space to talk and gain clarity.",
      color: "from-[#E7C8B7]/20 to-[#E7C8B7]/10",
      borderColor: "border-[#E7C8B7]/30",
      hoverGlow: "#E7C8B7"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Personalised Routines",
      description: "Simple, grounding practices designed for your needs.",
      color: "from-[#9FB3A6]/20 to-[#9FB3A6]/10",
      borderColor: "border-[#9FB3A6]/30",
      hoverGlow: "#9FB3A6"
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Guided Sessions",
      description: "Focused conversations for healing and awareness.",
      color: "from-[#C58A4A]/20 to-[#C58A4A]/10",
      borderColor: "border-[#C58A4A]/30",
      hoverGlow: "#C58A4A"
    },
    {
      icon: <CalendarCheck className="w-8 h-8" />,
      title: "Follow-up Calls",
      description: "Continued support so you're not left alone.",
      color: "from-[#F6F4EF]/20 to-[#F6F4EF]/10",
      borderColor: "border-[#E9E3DB]/40",
      hoverGlow: "#8CA397"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15
      }
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 25
      }
    }
  } as const;

  return (
    <section className="relative py-32 px-6 overflow-hidden bg-gradient-to-b from-[#F6F4EF] to-white">
      <div className="relative max-w-6xl mx-auto">
        {/* Animated header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center justify-center gap-3 mb-6"
            animate={{
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Zap className="w-8 h-8 text-[#C58A4A]" />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#1F2933] via-[#4A5560] to-[#1F2933] bg-clip-text text-transparent">
              Support that meets you where you are
            </h2>
            <Zap className="w-8 h-8 text-[#C58A4A]" />
          </motion.div>
          
          <motion.p
            className="text-lg md:text-xl text-[#4A5560] max-w-2xl mx-auto mt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Tailored guidance for every step of your healing journey
          </motion.p>
        </motion.div>

        {/* Animated services grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className="relative group"
            >
              {/* Hover glow effect */}
              <motion.div
                className="absolute -inset-4 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(135deg, ${service.hoverGlow}20, transparent)`
                }}
                animate={{
                  scale: [1, 1.05, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.1
                }}
              />

              {/* Card with glass effect */}
              <div className="relative h-full p-8 rounded-2xl backdrop-blur-xl bg-gradient-to-br from-white/80 to-white/40 border border-white/50 shadow-xl overflow-hidden">
                {/* Animated gradient border */}
                <motion.div
                  className="absolute inset-0 rounded-2xl p-[1px]"
                  animate={{
                    background: [
                      `linear-gradient(45deg, transparent, ${service.hoverGlow}20, transparent)`,
                      `linear-gradient(45deg, transparent, ${service.hoverGlow}30, transparent)`,
                      `linear-gradient(45deg, transparent, ${service.hoverGlow}20, transparent)`
                    ]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/40 to-transparent" />
                </motion.div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon with glow */}
                  <motion.div
                    className={`w-16 h-16 rounded-full bg-gradient-to-br ${service.color} ${service.borderColor} border flex items-center justify-center mb-6 relative`}
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.2
                    }}
                    whileHover={{
                      scale: 1.15,
                      rotate: 0
                    }}
                  >
                    <div className="text-[#1F2933]">
                      {service.icon}
                    </div>
                    
                    {/* Icon glow */}
                    <motion.div
                      className="absolute inset-0 rounded-full blur-md"
                      style={{ backgroundColor: `${service.hoverGlow}20` }}
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

                  {/* Service number */}
                  <motion.div
                    className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm border border-white/30 flex items-center justify-center"
                    animate={{
                      scale: [1, 1.2, 1]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3
                    }}
                  >
                    <span className="text-sm font-bold text-[#4A5560]">
                      {index + 1}
                    </span>
                  </motion.div>

                  {/* Title */}
                  <motion.h3
                    className="text-xl font-bold text-[#1F2933] mb-4"
                    whileHover={{ scale: 1.05 }}
                  >
                    {service.title}
                  </motion.h3>

                  {/* Description */}
                  <motion.p
                    className="text-[#4A5560] leading-relaxed"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {service.description}
                  </motion.p>

                  {/* Animated underline */}
                  <motion.div
                    className="h-0.5 bg-gradient-to-r from-transparent via-[#9FB3A6] to-transparent mt-6"
                    initial={{ width: "0%" }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 + index * 0.1, duration: 1 }}
                  />

                  {/* Floating particles on hover */}
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {[...Array(3)].map((_, particleIndex) => (
                      <motion.div
                        key={particleIndex}
                        className="absolute w-1 h-1 rounded-full"
                        style={{ backgroundColor: service.hoverGlow }}
                        initial={{
                          x: 0,
                          y: 0,
                          opacity: 0
                        }}
                        whileHover={{
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
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-xl border border-white/30">
            <motion.div
              className="flex gap-2"
              animate={{
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="w-2 h-2 bg-[#9FB3A6] rounded-full" />
              <div className="w-2 h-2 bg-[#E7C8B7] rounded-full" />
              <div className="w-2 h-2 bg-[#C58A4A] rounded-full" />
            </motion.div>
            <span className="text-lg font-medium text-[#4A5560]">
              Each session is tailored to your unique journey
            </span>
            <motion.div
              className="flex gap-2"
              animate={{
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            >
              <div className="w-2 h-2 bg-[#C58A4A] rounded-full" />
              <div className="w-2 h-2 bg-[#E7C8B7] rounded-full" />
              <div className="w-2 h-2 bg-[#9FB3A6] rounded-full" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}