"use client";

import Image from "next/image";

export default function Problem() {
  return (
    <section
      id="problem"
      className="
        relative
        w-full
        overflow-hidden
        min-h-[520px]
      "
    >
      {/* ================= BACKGROUND IMAGE ================= */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg-3.png"
          alt="Soft watercolor background"
          fill
          priority
          className="object-cover object-center"
        />

        {/* LIGHT paper overlay (important) */}
       
      </div>

      {/* ================= TOP WAVE ================= */}
      <div className="absolute top-0 left-0 w-full z-10 pointer-events-none">
        <svg
          className="w-[200%] h-24"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#F8F4EE"
            d="
              M0,160
              C120,150 240,130 360,135
              C480,140 600,165 720,175
              C840,185 960,175 1080,160
              C1200,145 1320,135 1440,140
              L1440,0 L0,0 Z
            "
          />
        </svg>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-20 max-w-3xl mx-auto px-6 py-32 text-center">
        {/* Heading */}
        <h2
          className="
            font-serif
            text-3xl sm:text-4xl
            text-[#3A2E1F]
            mb-10
          "
        >
          You might be feeling…
        </h2>

        {/* Bullet list */}
        <ul className="space-y-6 max-w-xl mx-auto text-left">
          <li className="flex items-start gap-4 text-[#5D4C3B]">
            <span className="mt-2 w-3 h-3 rounded-full bg-[#9FB3A6]" />
            <p className="text-base sm:text-lg leading-relaxed">
              Questioning your reality after a toxic relationship
            </p>
          </li>

          <li className="flex items-start gap-4 text-[#5D4C3B]">
            <span className="mt-2 w-3 h-3 rounded-full bg-[#A7B7AD]" />
            <p className="text-base sm:text-lg leading-relaxed">
              Emotionally exhausted and anxious
            </p>
          </li>

          <li className="flex items-start gap-4 text-[#5D4C3B]">
            <span className="mt-2 w-3 h-3 rounded-full bg-[#9FB3A6]" />
            <p className="text-base sm:text-lg leading-relaxed">
              Struggling to understand narcissistic behaviour and abuse
            </p>
          </li>
        </ul>

        {/* Divider */}
        <div className="w-24 h-px bg-[#D8CFC3] mx-auto my-12" />

        {/* Reassurance */}
        <p
          className="
            text-base sm:text-lg
            text-[#6B4E32]
            leading-relaxed
          "
        >
          You’re not to blame for what you’ve been through.
          <br />
          <span className="italic">
            What you’re feeling makes sense.
          </span>
        </p>
      </div>

      {/* ================= BOTTOM WAVE ================= */}
      <div className="absolute bottom-0 left-0 w-full z-10 pointer-events-none">
        <svg
          className="w-[200%] h-28"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#F8F4EE"
            d="
              M0,224
              C120,210 240,190 360,185
              C480,180 600,195 720,205
              C840,215 960,210 1080,200
              C1200,190 1320,180 1440,185
              L1440,320 L0,320 Z
            "
          />
        </svg>
      </div>
    </section>
  );
}
