"use client";

import Image from "next/image";
import {
  MessageCircle,
  HeartHandshake,
  Brain,
  RefreshCcw,
} from "lucide-react";

export default function Specialisation() {
  const items = [
    {
      title: "Narcissistic Behaviour",
      subtitle: "Private, safe conversations",
      icon: <MessageCircle className="w-6 h-6 text-[#5F7F8B]" />,
      blob: "bg-[#E6EFF2]",
    },
    {
      title: "Emotional Abuse",
      subtitle: "Simple, grounding routines",
      icon: <HeartHandshake className="w-6 h-6 text-[#6C7A5A]" />,
      blob: "bg-[#EEF2E8]",
    },
    {
      title: "Trauma Recovery",
      subtitle: "Focused healing sessions",
      icon: <Brain className="w-6 h-6 text-[#B07A3F]" />,
      blob: "bg-[#F4EBDD]",
    },
    {
      title: "Rebuilding Self-Worth",
      subtitle: "Ongoing for continuous care",
      icon: <RefreshCcw className="w-6 h-6 text-[#7A7A7A]" />,
      blob: "bg-[#EFEFEF]",
    },
  ];

  return (
    <section className="relative py-28 px-6 overflow-hidden">
      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg.jpeg" // same watercolor/paper background
          alt="Soft background"
          fill
          priority
          className="object-cover"
        />
     
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Heading */}
        <div className="flex items-center justify-center gap-6 mb-16">
          <div className="hidden sm:block flex-1 h-px bg-[#D8CFC3]" />
          <h2 className="font-serif text-3xl md:text-4xl text-[#3A2E1F] whitespace-nowrap">
            Specializing In
          </h2>
          <div className="hidden sm:block flex-1 h-px bg-[#D8CFC3]" />
        </div>

        {/* Tiles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item) => (
            <div
              key={item.title}
              className="bg-white/70 rounded-2xl px-6 py-8 text-center shadow-sm"
            >
              {/* Icon blob */}
              <div
                className={`mx-auto mb-5 w-16 h-16 rounded-xl flex items-center justify-center ${item.blob}`}
              >
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-[#3A2E1F] mb-2">
                {item.title}
              </h3>

              {/* Subtitle */}
              <p className="text-sm text-[#6B5A44] leading-relaxed">
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
