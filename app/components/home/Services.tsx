"use client";

import Image from "next/image";
import {
  MessageCircle,
  HeartHandshake,
  Brain,
  RefreshCcw,
} from "lucide-react";

export default function SpecializingIn() {
  const items = [
    {
      title: "Narcissistic Behaviour",
      subtitle: "Private, safe conversations",
      icon: <MessageCircle className="w-7 h-7 text-[#5F7F8B]" />,
      bg: "bg-[#E6EFF2]",
    },
    {
      title: "Emotional Abuse",
      subtitle: "Simple, grounding routines",
      icon: <HeartHandshake className="w-7 h-7 text-[#6C7A5A]" />,
      bg: "bg-[#EEF2E8]",
    },
    {
      title: "Trauma Recovery",
      subtitle: "Focused healing sessions",
      icon: <Brain className="w-7 h-7 text-[#B07A3F]" />,
      bg: "bg-[#F4EBDD]",
    },
    {
      title: "Rebuilding Self-Worth",
      subtitle: "Ongoing, continuous care",
      icon: <RefreshCcw className="w-7 h-7 text-[#7A7A7A]" />,
      bg: "bg-[#EFEFEF]",
    },
  ];

  return (
    <section className="relative py-28 px-6 overflow-hidden">
      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg-3.png" // same watercolor/paper background
          alt="Soft background"
          fill
          className="object-cover"
          priority
        />
     
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-center font-serif text-3xl md:text-4xl text-[#3A2E1F] mb-16">
          Specializing In
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl bg-white/70 shadow-sm px-6 py-8 text-center"
            >
              {/* Icon background */}
              <div
                className={`mx-auto mb-5 w-16 h-16 rounded-xl flex items-center justify-center ${item.bg}`}
              >
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-[#3A2E1F] mb-2">
                {item.title}
              </h3>

              {/* Subtitle */}
              <p className="text-sm text-[#6B5A44]">
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
