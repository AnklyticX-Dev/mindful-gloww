"use client";

import Image from "next/image";
import { useState } from "react";

export default function Questionnaire() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    support: "",
    notes: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <section
      id="questionnaire"
      className="relative overflow-hidden py-32 px-6"
    >
      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0">
        <Image
          src="/bg.jpeg"
          alt="Soft background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#F6F2EC]/45" />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 max-w-3xl mx-auto">
        {/* Intro */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-serif text-[#2C2416] mb-6">
            Before we begin
          </h2>
          <p className="text-lg text-[#5D4C3B] leading-relaxed">
            These questions help me understand how to support you.
            <br />
            Answer only what feels comfortable.
          </p>
        </div>

        {/* ================= FORM ================= */}
        <form className="space-y-16">

          {/* Name */}
          <div>
            <label className="block text-sm mb-3 text-[#5D4C3B]">
              Your name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Optional"
              className="
                w-full bg-transparent
                border-b border-[#D6C8B5]
                py-3
                text-lg text-[#2C2416]
                placeholder-[#9E8F7C]
                focus:outline-none
                focus:border-[#B36A4C]
              "
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm mb-3 text-[#5D4C3B]">
              Email address
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Where I can reach you"
              className="
                w-full bg-transparent
                border-b border-[#D6C8B5]
                py-3
                text-lg text-[#2C2416]
                placeholder-[#9E8F7C]
                focus:outline-none
                focus:border-[#B36A4C]
              "
            />
          </div>

          {/* Support type */}
          <div>
            <label className="block text-sm mb-3 text-[#5D4C3B]">
              What best describes what you’re seeking support for?
            </label>
            <select
              name="support"
              value={form.support}
              onChange={handleChange}
              className="
                w-full bg-transparent
                border-b border-[#D6C8B5]
                py-3
                text-lg text-[#2C2416]
                focus:outline-none
                focus:border-[#B36A4C]
              "
            >
              <option value="">Please choose</option>
              <option value="narcissistic-abuse">
                Narcissistic behaviour or emotional abuse
              </option>
              <option value="trauma-healing">
                Trauma or emotional healing
              </option>
              <option value="self-worth">
                Rebuilding self-worth and confidence
              </option>
              <option value="clarity">
                Clarity and emotional support
              </option>
            </select>
          </div>

          {/* Notes */}
          <div>
            <label className="block text-sm mb-3 text-[#5D4C3B]">
              Anything you’d like me to know before we talk?
            </label>
            <textarea
              name="notes"
              value={form.notes}
              onChange={handleChange}
              rows={4}
              placeholder="You can share as much or as little as you want"
              className="
                w-full bg-transparent
                border-b border-[#D6C8B5]
                py-3
                text-lg text-[#2C2416]
                placeholder-[#9E8F7C]
                resize-none
                focus:outline-none
                focus:border-[#B36A4C]
              "
            />
          </div>

          {/* Reassurance */}
          <p className="text-center text-sm text-[#8B7355] italic pt-6">
            You’re not expected to have everything figured out.
          </p>

          {/* Submit */}
          <div className="flex justify-center pt-8">
            <button
              type="submit"
              className="
                px-10 py-4
                rounded-full
                bg-[#B36A4C]
                text-white
                text-lg
                font-medium
                hover:bg-[#9E5C41]
                transition
              "
            >
              Continue
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
