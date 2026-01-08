"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section
      id="contact"
      className="relative py-32 px-6 overflow-hidden"
    >
      {/* ================= BACKGROUND IMAGE ================= */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg.jpeg" // same watercolor / paper background
          alt="Soft background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#F7F4EF]/75" />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          className="font-serif text-4xl md:text-5xl text-[#3A2E1F] mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          You don’t have to do this alone
        </motion.h2>

        {/* Message */}
        <motion.div
          className="space-y-6 max-w-2xl mx-auto mb-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <p className="text-lg md:text-xl text-[#5D4C3B] leading-relaxed">
            If something in you is saying,
            <span className="italic"> “I need support,”</span>
            please listen to it.
          </p>

          <p className="text-xl md:text-2xl font-semibold text-[#3A2E1F]">
            Your healing matters — and it can begin today.
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <a
            href="#"
            className="
              inline-flex items-center gap-3
              px-12 py-4
              rounded-full
              bg-[#8B7355]
              text-white
              text-lg font-semibold
              hover:bg-[#7A644A]
              transition-colors
            "
          >
            Book your consultation
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>

        {/* Reassurance line */}
        <motion.p
          className="mt-10 text-[#6B5A44] text-base"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          Confidential • Compassionate • At your pace
        </motion.p>
      </div>

      {/* ================= SOFT BOTTOM FADE ================= */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#F7F4EF] to-transparent" />
    </section>
  );
}
