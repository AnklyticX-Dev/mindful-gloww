"use client";

import Image from "next/image";
import { useState } from "react";

/* ===================== MAIN COMPONENT ===================== */

export default function Questionnaire() {
  const [form, setForm] = useState<Record<string, any>>({});
  const [step, setStep] = useState(1);
  const totalSteps = 6;
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const next = () => setStep((s) => Math.min(s + 1, totalSteps));
  const prev = () => setStep((s) => Math.max(s - 1, 1));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("MSE DATA:", form);
    setIsSubmitted(true);
  };

  return (
    <section className="relative overflow-hidden bg-[#F6F2EC]">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg.jpeg"
          alt="Background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#F6F2EC]/60" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 py-32">
        {/* Header */}
        <div className="text-center mb-16">
<h4
  className="
    font-serif
    text-6xl sm:text-5xl
    font-semibold
    text-[#2C2416]
    mb-4
    drop-shadow-[0_2px_4px_rgba(139,115,85,0.25)]
    [text-shadow:
      0_0_10px_rgba(139,115,85,0.25),
      0_0_22px_rgba(139,115,85,0.18),
      0_0_44px_rgba(139,115,85,0.12)
    ]
  "
>
  Mental State Evaluation
</h4>



          <p className="text-[#5D4C3B] text-lg">
            Take your time. There are no right or wrong answers.
          </p>

          {/* Progress */}
          <p className="mt-4 text-sm text-[#8B7355]">
            Step {step} of {totalSteps} — You’re doing okay 🌿
          </p>
        </div>

        {isSubmitted ? (
          <Success />
        ) : (
          <form onSubmit={handleSubmit} className="space-y-12">
            {step === 1 && (
              <Section
                title="About You"
                subtitle="Basic details to help me understand you better"
              >
                <Input
                  label="Name (optional)"
                  name="name"
                  onChange={handleChange}
                />
                <Input label="Age" name="age" onChange={handleChange} />
                <Select
                  label="Gender"
                  name="gender"
                  onChange={handleChange}
                  options={["Male", "Female", "Other"]}
                />
              </Section>
            )}

            {step === 2 && (
              <Section
                title="Stress & Thinking"
                subtitle="How heavy or busy your mind feels lately"
              >
                <EmotionSlider
                  label="Overthinking / Negative thinking"
                  name="overthinking"
                  onChange={handleChange}
                />
                <EmotionSlider
                  label="Stress levels"
                  name="stress"
                  onChange={handleChange}
                />
              </Section>
            )}

            {step === 3 && (
              <Section
                title="Emotions & Mood"
                subtitle="Your emotional responses and patterns"
              >
                <EmotionSlider
                  label="Irritation"
                  name="irritation"
                  onChange={handleChange}
                />
                <EmotionSlider
                  label="Anger outbursts"
                  name="anger"
                  onChange={handleChange}
                />
                <EmotionSlider
                  label="Mood swings"
                  name="mood"
                  onChange={handleChange}
                />
              </Section>
            )}

            {step === 4 && (
              <Section
                title="Anxiety & Body"
                subtitle="Physical or anxious responses you may notice"
              >
                <YesNo
                  label="Sleep disturbance"
                  name="sleep"
                  onChange={handleChange}
                />
                <YesNo
                  label="Anxiety symptoms"
                  name="anxiety"
                  onChange={handleChange}
                />
                <YesNo
                  label="Panic attacks"
                  name="panic"
                  onChange={handleChange}
                />
              </Section>
            )}

            {step === 5 && (
              <Section
                title="Past Experiences"
                subtitle="Only share what feels safe for you"
              >
                <Textarea
                  label="Any childhood or past experiences impacting you?"
                  name="trauma"
                  onChange={handleChange}
                />
              </Section>
            )}

            {step === 6 && (
              <Section
                title="Anything Else"
                subtitle="This space is completely yours"
              >
                <Textarea
                  label="Anything you'd like me to know before we talk"
                  name="notes"
                  onChange={handleChange}
                />
              </Section>
            )}

            {/* Navigation */}
            <div className="flex justify-between pt-8">
              {step > 1 && (
                <button type="button" onClick={prev} className="text-[#8B7355]">
                  ← Back
                </button>
              )}

              {step < totalSteps ? (
                <button
                  type="button"
                  onClick={next}
                  className="ml-auto px-8 py-3 rounded-full bg-[#B36A4C] text-white"
                >
                  Continue
                </button>
              ) : (
                <button
                  type="submit"
                  className="ml-auto px-10 py-4 rounded-full bg-[#B36A4C] text-white"
                >
                  Submit Evaluation
                </button>
              )}
            </div>
          </form>
        )}
      </div>
    </section>
  );
}

/* ===================== UI COMPONENTS ===================== */

function Section({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[#F6F2EC]/80 border border-[#D6C8B5] rounded-xl p-8 space-y-8">
      <div>
        {/* ✅ H4 — correct hierarchy, same size */}
        <h4
          className="
    font-serif
    text-2xl
    font-semibold
    text-[#2C2416]
    drop-shadow-[0_2px_4px_rgba(139,115,85,0.25)]
    [text-shadow:
      0_0_8px_rgba(139,115,85,0.22),
      0_0_18px_rgba(139,115,85,0.14)
    ]
  "
        >
          {title}
        </h4>

        {subtitle && <p className="text-sm text-[#8B7355] mt-1">{subtitle}</p>}
      </div>

      {children}
    </div>
  );
}

function Input({ label, ...props }: any) {
  return (
    <div>
      <label className="block text-sm mb-2 text-[#5D4C3B]">{label}</label>
      <input
        {...props}
        className="w-full bg-transparent border-b border-[#D6C8B5] py-3 text-lg focus:outline-none focus:border-[#B36A4C]"
      />
    </div>
  );
}

function Select({ label, options, ...props }: any) {
  return (
    <div>
      <label className="block text-sm mb-2 text-[#5D4C3B]">{label}</label>
      <select
        {...props}
        className="w-full bg-transparent border-b border-[#D6C8B5] py-3 text-lg"
      >
        <option value="">Select</option>
        {options.map((o: string) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </div>
  );
}

function EmotionSlider({ label, name, onChange }: any) {
  return (
    <div>
      <label className="block text-sm mb-3 text-[#5D4C3B]">{label}</label>
      <input
        type="range"
        min={1}
        max={10}
        defaultValue={5}
        name={name}
        onChange={onChange}
        className="w-full accent-[#B36A4C]"
      />
      <div className="flex justify-between text-xs text-[#9E8F7C] mt-1">
        <span>Very Low</span>
        <span>Moderate</span>
        <span>Very High</span>
      </div>
    </div>
  );
}

function YesNo({ label, name, onChange }: any) {
  return (
    <div>
      <p className="text-sm text-[#5D4C3B] mb-3">{label}</p>
      <div className="flex gap-4">
        {["Yes", "No"].map((opt) => (
          <button
            key={opt}
            type="button"
            onClick={() => onChange({ target: { name, value: opt } })}
            className="px-6 py-2 rounded-full border border-[#D6C8B5] hover:bg-[#B36A4C] hover:text-white"
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}

function Textarea({ label, ...props }: any) {
  return (
    <div>
      <label className="block text-sm mb-2 text-[#5D4C3B]">{label}</label>
      <textarea
        {...props}
        rows={4}
        className="w-full bg-transparent border-b border-[#D6C8B5] py-3 text-lg resize-none focus:outline-none focus:border-[#B36A4C]"
      />
    </div>
  );
}

function Success() {
  return (
    <div className="text-center bg-[#E8DFD2]/60 p-10 rounded-xl">
      <h3 className="text-2xl font-serif text-[#2C2416] mb-4">
        Thank you for sharing 🌿
      </h3>
      <p className="text-[#5D4C3B]">
        Your responses have been recorded with care and confidentiality.
      </p>
    </div>
  );
}
