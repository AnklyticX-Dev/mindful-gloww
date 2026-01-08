"use client";

import Image from "next/image";
import {
  Calendar,
  MessageSquare,
  HeartHandshake,
  ArrowRight,
} from "lucide-react";

export default function Plan() {
  const steps = [
    {
      number: "01",
      title: "Book a consultation",
      description: "Start with a simple, confidential booking process",
      icon: <Calendar className="w-6 h-6 text-[#8B7355]" />,
    },
    {
      number: "02",
      title: "Share your experience",
      description: "Speak freely in a safe, non-judgmental space",
      icon: <MessageSquare className="w-6 h-6 text-[#8B7355]" />,
    },
    {
      number: "03",
      title: "Receive guidance & support",
      description: "Personalised care, clarity, and ongoing support",
      icon: <HeartHandshake className="w-6 h-6 text-[#8B7355]" />,
    },
  ];

  return (
    <section className="relative py-28 px-6 overflow-hidden">
      {/* ================= BACKGROUND IMAGE ================= */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg.jpeg" // same paper / watercolor bg
          alt="Soft background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#F7F4EF]/65" />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="font-serif text-4xl md:text-5xl text-[#3A2E1F] mb-4">
            How it works
          </h2>
          <p className="text-lg text-[#6B5A44]">
            A gentle, step-by-step path forward
          </p>
        </div>

        {/* ================= PROCESS FLOW ================= */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-16 items-start">
          {steps.map((step, index) => (
            <div key={step.number} className="relative text-center">
              {/* Connector (desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 right-[-50%] w-full">
                  <ArrowRight className="mx-auto text-[#CFC5B8]" />
                </div>
              )}

              {/* Step number */}
              <div className="mx-auto mb-6 w-14 h-14 rounded-full bg-[#E8DFD2] flex items-center justify-center font-serif text-lg text-[#5D4C3B]">
                {step.number}
              </div>

              {/* Icon */}
              <div className="mx-auto mb-4 w-14 h-14 rounded-xl bg-[#F1ECE4] flex items-center justify-center">
                {step.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-[#3A2E1F] mb-3">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-[#6B5A44] leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* ================= FINAL LINE ================= */}
        <div className="text-center mt-20">
          <p className="text-2xl font-serif text-[#5D4C3B]">
            No pressure. No overwhelm.
          </p>
          <p className="mt-2 text-lg text-[#8B7355]">
            Just one step at a time.
          </p>
        </div>
      </div>
    </section>
  );
}
