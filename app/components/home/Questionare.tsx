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

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    // Email validation if provided
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);

      // Focus on first error field
      const firstError = Object.keys(validationErrors)[0];
      const errorElement = document.querySelector(
        `[name="${firstError}"]`
      ) as HTMLElement;
      if (errorElement) {
        errorElement.focus();
      }

      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      console.log("Form submitted:", form);
      setIsSubmitted(true);
      setIsSubmitting(false);

      // Announce success to screen readers
      const announcement = document.getElementById("form-announcement");
      if (announcement) {
        announcement.textContent =
          "Form submitted successfully. Thank you for sharing.";
      }
    }, 1500);
  };

  return (
    <section
      id="questionnaire"
      className="relative overflow-hidden bg-[#F6F2EC]"
      aria-labelledby="questionnaire-heading"
      role="region"
      aria-label="Questionnaire form section"
    >
      {/* ================= TOP WAVE ================= */}
      <div
        className="absolute top-0 left-0 w-full z-20 pointer-events-none"
        aria-hidden="true"
        role="presentation"
      >
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          className="w-full h-[80px]"
          aria-hidden="true"
          focusable="false"
          role="presentation"
        >
          <title id="top-wave-title">Decorative top wave</title>
          <path
            fill="#F6F2EC"
            d="
              M0,28
              C120,8 240,2 360,6
              C480,10 600,26 720,30
              C840,34 960,26 1080,18
              C1200,10 1320,6 1440,10
              L1440,0 L0,0 Z
            "
          />
        </svg>
      </div>

      {/* ================= BACKGROUND ================= */}
      <div
        className="absolute inset-0 z-0"
        aria-hidden="true"
        role="presentation"
      >
        <Image
          src="/bg.jpeg"
          alt="Soft textured background for questionnaire section"
          fill
          priority
          className="object-cover"
          aria-hidden="true"
          sizes="100vw"
        />

        {/* Soft contrast wash */}
        <div
          className="absolute inset-0 bg-[#F6F2EC]/65 md:bg-[#F6F2EC]/45"
          aria-hidden="true"
          role="presentation"
        />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 py-40">
        {/* Live announcement for screen readers */}
        <div
          id="form-announcement"
          className="sr-only"
          aria-live="polite"
          aria-atomic="true"
        >
          {isSubmitted
            ? "Form submitted successfully"
            : "Form ready for completion"}
        </div>

        {/* Intro */}
        <div className="text-center mb-20">
          <h4
            id="questionnaire-heading"
            className="
    lg:text-6xl sm:text-5xl
    font-serif
    text-[#2C2416]
    mb-6
    font-semibold
    drop-shadow-[0_2px_4px_rgba(139,115,85,0.25)]
    [text-shadow:
      0_0_10px_rgba(139,115,85,0.22),
      0_0_22px_rgba(139,115,85,0.14)
    ]
  "
            tabIndex={0}
          >
            Before we begin
          </h4>

          <p
            className="text-lg text-[#5D4C3B] leading-relaxed drop-shadow-[0_1px_3px_rgba(255,255,255,0.55)]"
            tabIndex={0}
          >
            These questions help me understand how to support you.
            <br />
            <span className="font-medium" aria-label="Important note:">
              Answer only what feels comfortable.
            </span>
          </p>
        </div>

        {/* Success Message */}
        {isSubmitted ? (
          <div
            className="text-center p-8 bg-[#E8DFD2]/50 rounded-xl border border-[#D6C8B5]"
            role="alert"
            aria-live="polite"
          >
            <h3 className="text-2xl font-serif text-[#2C2416] mb-4">
              Thank you for sharing
            </h3>
            <p className="text-[#5D4C3B] mb-6">
              I'll review your responses and be in touch soon.
            </p>
            <p className="text-sm text-[#8B7355] italic">
              Your privacy and comfort are always my priority.
            </p>
          </div>
        ) : (
          /* ================= FORM ================= */
          <form
            className="space-y-16"
            onSubmit={handleSubmit}
            noValidate
            aria-label="Questionnaire form"
          >
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm mb-3 text-[#5D4C3B] font-medium"
              >
                Your name
                <span className="text-xs text-[#9E8F7C] ml-2 font-normal">
                  (Optional)
                </span>
              </label>
              <input
                id="name"
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Optional"
                className="
                  w-full
                  bg-[#F6F2EC]/85
                  backdrop-blur-sm
                  border-b border-[#D6C8B5]
                  py-3 px-1
                  text-lg text-[#2C2416]
                  placeholder-[#9E8F7C]
                  focus:outline-none
                  focus:border-[#B36A4C]
                  focus:bg-[#F6F2EC]
                  transition-colors
                  focus:ring-2 focus:ring-[#B36A4C] focus:ring-opacity-30
                  rounded-t
                "
                aria-describedby="name-description"
                aria-invalid={errors.name ? "true" : "false"}
              />
              <div id="name-description" className="sr-only">
                Optional field for your name
              </div>
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm mb-3 text-[#5D4C3B] font-medium"
              >
                Email address
                <span className="text-xs text-[#9E8F7C] ml-2 font-normal">
                  (Required for contact)
                </span>
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Where I can reach you"
                className={`
                  w-full
                  bg-[#F6F2EC]/85
                  backdrop-blur-sm
                  border-b border-[#D6C8B5]
                  py-3 px-1
                  text-lg text-[#2C2416]
                  placeholder-[#9E8F7C]
                  focus:outline-none
                  focus:border-[#B36A4C]
                  focus:bg-[#F6F2EC]
                  transition-colors
                  focus:ring-2 focus:ring-[#B36A4C] focus:ring-opacity-30
                  rounded-t
                  ${errors.email ? "border-red-300" : ""}
                `}
                aria-describedby={
                  errors.email
                    ? "email-error email-description"
                    : "email-description"
                }
                aria-invalid={errors.email ? "true" : "false"}
                aria-required="true"
                required
              />
              <div id="email-description" className="sr-only">
                Required field for contact purposes
              </div>
              {errors.email && (
                <p
                  id="email-error"
                  className="text-sm text-red-500 mt-2"
                  role="alert"
                  aria-live="polite"
                >
                  {errors.email}
                </p>
              )}
            </div>

            {/* Support type */}
            <div>
              <label
                htmlFor="support"
                className="block text-sm mb-3 text-[#5D4C3B] font-medium"
              >
                What best describes what you're seeking support for?
              </label>
              <select
                id="support"
                name="support"
                value={form.support}
                onChange={handleChange}
                className="
                  w-full
                  bg-[#F6F2EC]/85
                  backdrop-blur-sm
                  border-b border-[#D6C8B5]
                  py-3 px-1
                  text-lg text-[#2C2416]
                  focus:outline-none
                  focus:border-[#B36A4C]
                  focus:bg-[#F6F2EC]
                  transition-colors
                  focus:ring-2 focus:ring-[#B36A4C] focus:ring-opacity-30
                  rounded-t
                  appearance-none
                  cursor-pointer
                "
                aria-describedby="support-description"
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
                <option value="clarity">Clarity and emotional support</option>
              </select>
              <div id="support-description" className="sr-only">
                Select the primary reason you are seeking support
              </div>
            </div>

            {/* Notes */}
            <div>
              <label
                htmlFor="notes"
                className="block text-sm mb-3 text-[#5D4C3B] font-medium"
              >
                Anything you'd like me to know before we talk?
                <span className="text-xs text-[#9E8F7C] ml-2 font-normal">
                  (Optional)
                </span>
              </label>
              <textarea
                id="notes"
                name="notes"
                value={form.notes}
                onChange={handleChange}
                rows={4}
                placeholder="You can share as much or as little as you want"
                className="
                  w-full
                  bg-[#F6F2EC]/85
                  backdrop-blur-sm
                  border-b border-[#D6C8B5]
                  py-3 px-1
                  text-lg text-[#2C2416]
                  placeholder-[#9E8F7C]
                  resize-none
                  focus:outline-none
                  focus:border-[#B36A4C]
                  focus:bg-[#F6F2EC]
                  transition-colors
                  focus:ring-2 focus:ring-[#B36A4C] focus:ring-opacity-30
                  rounded-t
                "
                aria-describedby="notes-description"
              />
              <div id="notes-description" className="sr-only">
                Optional field for additional information you'd like to share
              </div>
            </div>

            {/* Reassurance */}
            <p
              className="text-center text-sm text-[#8B7355] italic pt-6"
              tabIndex={0}
              aria-label="Reassurance message"
            >
              You're not expected to have everything figured out.
            </p>

            {/* Submit */}
            <div className="flex justify-center pt-8">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`
                  px-10 py-4
                  rounded-full
                  bg-[#B36A4C]
                  text-white
                  text-lg
                  font-medium
                  hover:bg-[#9E5C41]
                  transition
                  drop-shadow-[0_6px_18px_rgba(179,106,76,0.45)]
                  hover:drop-shadow-[0_10px_30px_rgba(179,106,76,0.55)]
                  focus:outline-none
                  focus:ring-2 focus:ring-[#B36A4C] focus:ring-offset-4
                  focus:ring-offset-[#F6F2EC]
                  disabled:opacity-50
                  disabled:cursor-not-allowed
                  min-w-[180px]
                `}
                aria-label={
                  isSubmitting ? "Submitting form..." : "Submit questionnaire"
                }
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    Submitting...
                  </span>
                ) : (
                  "Continue"
                )}
              </button>
            </div>

            {/* Form instructions for screen readers */}
            <div className="sr-only">
              <p>
                This form has 4 fields. Press Tab to navigate between fields.
              </p>
              <p>The email field is required for contact purposes.</p>
              <p>All other fields are optional.</p>
            </div>
          </form>
        )}
      </div>

      {/* ================= BOTTOM WAVE ================= */}
      <div
        className="absolute bottom-0 left-0 w-full z-20 pointer-events-none"
        aria-hidden="true"
        role="presentation"
      >
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          className="w-full h-[80px]"
          aria-hidden="true"
          focusable="false"
          role="presentation"
        >
          <title id="bottom-wave-title">Decorative bottom wave</title>
          <path
            fill="#F6F2EC"
            d="
              M0,52
              C120,70 240,78 360,74
              C480,70 600,52 720,46
              C840,40 960,46 1080,58
              C1200,70 1320,78 1440,74
              L1440,80 L0,80 Z
            "
          />
        </svg>
      </div>
    </section>
  );
}
