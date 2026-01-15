"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

/* ===================== MAIN COMPONENT ===================== */

export default function Questionnaire() {
  const [form, setForm] = useState<Record<string, any>>({});
  const [step, setStep] = useState(1);
  const totalSteps = 6;
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [emailStatus, setEmailStatus] = useState<{
    sent: boolean;
    message: string;
    error?: string;
    details?: any;
  } | null>(null);

  // Scroll to top of form when step changes
  useEffect(() => {
    if (formRef.current && !isSubmitted) {
      formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [step, isSubmitted]);

  const handleChange = (e: any) => {
    const { name, value, type } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleYesNo = (name: string, value: string) => {
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleYesNoWithDetails = (name: string, value: string, detailsName: string, detailsValue?: string) => {
    setForm((prev) => ({ 
      ...prev, 
      [name]: value,
      ...(detailsValue && { [detailsName]: detailsValue })
    }));
  };

  const next = () => setStep((s) => Math.min(s + 1, totalSteps));
  const prev = () => setStep((s) => Math.max(s - 1, 1));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setEmailStatus(null);
    
    console.log("MSE DATA:", form);
    
    try {
      // Prepare data for API
      const submissionData = {
        ...form,
        submissionTime: new Date().toISOString(),
        // Ensure all scale values are numbers
        overthinking: Number(form.overthinking) || 5,
        stress: Number(form.stress) || 5,
        tirednessScale: Number(form.tirednessScale) || 5,
        irritation: Number(form.irritation) || 5,
        anger: Number(form.anger) || 5,
        mood: Number(form.mood) || 5,
        panicIntensity: Number(form.panicIntensity) || 5,
      };

      // Send to API
      const response = await fetch('/api/send-evaluation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      });

      const result = await response.json();
      
      if (response.ok) {
        setEmailStatus({
          sent: result.success,
          message: result.message,
          details: result.details,
          error: result.errors?.join(', ')
        });
        setIsSubmitted(true);
      } else {
        setEmailStatus({
          sent: false,
          message: result.message || 'Failed to submit evaluation',
          error: result.error,
        });
        setIsSubmitted(true); // Still show results
      }
    } catch (error: any) {
      console.error('Submission error:', error);
      setEmailStatus({
        sent: false,
        message: 'Network error while submitting',
        error: error.message,
      });
      setIsSubmitted(true); // Still show results
    } finally {
      setIsSending(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const resetForm = () => {
    setForm({});
    setStep(1);
    setIsSubmitted(false);
    setEmailStatus(null);
  };

  return (
    <section className="relative overflow-hidden bg-[#F6F2EC] min-h-screen">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image src="/bg.jpeg" alt="Background" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-[#F6F2EC]/60" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <h4 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#2C2416] mb-4">
            Mental State Evaluation Form (MSE)
          </h4>
          <p className="text-[#5D4C3B] text-base sm:text-lg">
            Take your time. There are no right or wrong answers.
          </p>
          {!isSubmitted && (
            <p className="mt-4 text-sm text-[#8B7355]">
              Step {step} of {totalSteps} — You're doing okay 🌿
            </p>
          )}
        </div>

        {/* Scale Legend */}
        {!isSubmitted && step >= 2 && (
          <div className="mb-6 sm:mb-8 p-4 bg-[#E8DFD2]/60 rounded-lg border border-[#D6C8B5]">
            <h5 className="font-semibold text-[#2C2416] mb-2 text-center">Evaluation Scale:</h5>
            <div className="grid grid-cols-4 gap-2 text-center text-xs sm:text-sm">
              <div className="p-2 bg-[#F6F2EC] rounded">
                <span className="font-medium">1-3</span><br />
                <span className="text-[#5D4C3B]">Low</span>
              </div>
              <div className="p-2 bg-[#F6F2EC] rounded">
                <span className="font-medium">4-6</span><br />
                <span className="text-[#5D4C3B]">Medium</span>
              </div>
              <div className="p-2 bg-[#F6F2EC] rounded">
                <span className="font-medium">7-8</span><br />
                <span className="text-[#5D4C3B]">High</span>
              </div>
              <div className="p-2 bg-[#F6F2EC] rounded">
                <span className="font-medium">9-10</span><br />
                <span className="text-[#5D4C3B]">Very High</span>
              </div>
            </div>
          </div>
        )}

        {isSubmitted ? (
          <div className="space-y-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
              <h3 className="text-2xl font-serif text-[#2C2416] text-center sm:text-left">
                Evaluation Results
              </h3>
              <button
                onClick={resetForm}
                className="px-6 py-2 rounded-full bg-[#B36A4C] text-white hover:bg-[#9C5A3C] transition-colors"
              >
                New Evaluation
              </button>
            </div>
            
            {/* Email Status Notification */}
            {emailStatus && (
              <div className={`p-6 rounded-xl border-2 ${emailStatus.sent ? 'bg-green-50 border-green-200' : 'bg-yellow-50 border-yellow-200'}`}>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <div className={`p-3 rounded-full ${emailStatus.sent ? 'bg-green-100 text-green-600' : 'bg-yellow-100 text-yellow-600'}`}>
                    {emailStatus.sent ? (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                      </svg>
                    )}
                  </div>
                  <div className="flex-1">
                    <h4 className={`font-semibold text-lg ${emailStatus.sent ? 'text-green-800' : 'text-yellow-800'}`}>
                      {emailStatus.message}
                    </h4>
                    {emailStatus.details && (
                      <div className="mt-2 text-sm text-gray-600">
                        <p>Submission ID: {emailStatus.details.submissionId || 'N/A'}</p>
                        <p>Emails sent to: {emailStatus.details.clientEmail} and admin</p>
                      </div>
                    )}
                    {emailStatus.error && (
                      <p className="text-sm text-red-600 mt-2">
                        <strong>Note:</strong> {emailStatus.error}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )}
            
            <div className="text-center bg-[#E8DFD2]/60 p-8 sm:p-10 rounded-xl">
              <h3 className="text-2xl font-serif text-[#2C2416] mb-4">
                Thank you for sharing 🌿
              </h3>
              <p className="text-[#5D4C3B] mb-6">
                Your responses have been recorded with care and confidentiality.
              </p>
              <button
                onClick={resetForm}
                className="px-8 py-3 rounded-full border-2 border-[#B36A4C] text-[#B36A4C] hover:bg-[#B36A4C] hover:text-white transition-colors"
              >
                Submit Another Response
              </button>
            </div>
            
            <ResultAnalysis data={form} />
          </div>
        ) : (
          <div ref={formRef}>
            <form onSubmit={handleSubmit} className="space-y-8 sm:space-y-12">

              {/* ================= STEP 1 ================= */}
              {step === 1 && (
                <Section
                  title="About You"
                  subtitle="Basic details to help me understand you better"
                >
                  <div className="space-y-6">
                    <Input label="Name of the Client" name="name" onChange={handleChange} value={form.name || ''} />
                    <Input label="Age" name="age" onChange={handleChange} value={form.age || ''} />
                    <Input label="Date" name="date" type="date" onChange={handleChange} value={form.date || ''} />
                    <Input 
                      label="Email Address (for sending report)" 
                      name="email" 
                      type="email"
                      onChange={handleChange} 
                      value={form.email || ''} 
                      placeholder="your.email@example.com"
                    />
                    <Select
                      label="Gender"
                      name="gender"
                      onChange={handleChange}
                      value={form.gender || ''}
                      options={["Male", "Female", "Other"]}
                    />
                    <Textarea label="Pre-existing medical conditions" name="medical" onChange={handleChange} value={form.medical || ''} />
                    <Textarea label="Taken consultation before (if yes share Details)" name="consultation" onChange={handleChange} value={form.consultation || ''} />
                    <Textarea label="Taking medications" name="medications" onChange={handleChange} value={form.medications || ''} />
                    <Textarea label="Previous diagnosis" name="previousDiagnosis" onChange={handleChange} value={form.previousDiagnosis || ''} />
                  </div>
                </Section>
              )}

              {/* ================= STEP 2 ================= */}
              {step === 2 && (
                <Section
                  title="Stress & Thinking"
                  subtitle="How heavy or busy your mind feels lately"
                >
                  <div className="space-y-8">
                    <EmotionSlider 
                      label="Overthinking / Negative thinking (1–10)" 
                      name="overthinking" 
                      onChange={handleChange} 
                      value={form.overthinking || 5} 
                    />
                    <EmotionSlider 
                      label="Stress levels (1–10)" 
                      name="stress" 
                      onChange={handleChange} 
                      value={form.stress || 5} 
                    />
                    <div className="space-y-4">
                      <p className="text-sm text-[#5D4C3B]">Unexplained aches</p>
                      <div className="flex gap-3 mb-2">
                        {["Yes", "No"].map((opt) => (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => handleYesNo("achesYesNo", opt)}
                            className={`px-4 sm:px-6 py-1.5 sm:py-2 rounded-full border transition-colors ${
                              form.achesYesNo === opt 
                                ? "bg-[#B36A4C] text-white border-[#B36A4C]" 
                                : "border-[#D6C8B5] hover:bg-[#E8DFD2] text-[#5D4C3B]"
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                      {form.achesYesNo === "Yes" && (
                        <Textarea 
                          label="Location of aches" 
                          name="achesLocation" 
                          onChange={handleChange} 
                          value={form.achesLocation || ''} 
                          placeholder="e.g., Migraine, Neck, Back, shoulders"
                        />
                      )}
                    </div>
                    
                    <div className="space-y-4">
                      <p className="text-sm text-[#5D4C3B]">Tiredness / Exhausted</p>
                      <div className="flex gap-3 mb-2">
                        {["Yes", "No"].map((opt) => (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => handleYesNoWithDetails("tirednessYesNo", opt, "tirednessScale", opt === "Yes" ? "8" : "")}
                            className={`px-4 sm:px-6 py-1.5 sm:py-2 rounded-full border transition-colors ${
                              form.tirednessYesNo === opt 
                                ? "bg-[#B36A4C] text-white border-[#B36A4C]" 
                                : "border-[#D6C8B5] hover:bg-[#E8DFD2] text-[#5D4C3B]"
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                      {form.tirednessYesNo === "Yes" && (
                        <div className="space-y-3">
                          <label className="block text-sm text-[#5D4C3B]">Level of tiredness (1-10)</label>
                          <EmotionSlider 
                            name="tirednessScale" 
                            onChange={handleChange} 
                            value={form.tirednessScale || 8} 
                            showLabel={false}
                          />
                          <Textarea 
                            label="Additional details" 
                            name="tirednessDetails" 
                            onChange={handleChange} 
                            value={form.tirednessDetails || ''} 
                            placeholder="e.g., Mostly"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </Section>
              )}

              {/* ================= STEP 3 ================= */}
              {step === 3 && (
                <Section
                  title="Emotions & Mood"
                  subtitle="Your emotional responses and patterns"
                >
                  <div className="space-y-8">
                    <div className="bg-[#F6F2EC]/50 p-4 rounded-lg">
                      <h5 className="font-medium text-[#2C2416] mb-4">Depression (5 minimum symptoms to exist simultaneously)</h5>
                      <div className="space-y-6">
                        <YesNoWithDetails 
                          label="Unable to focus" 
                          name="focus" 
                          onChange={handleYesNo} 
                          value={form.focus || ''} 
                        />
                        <YesNoWithDetails 
                          label="Forgetfulness / Brain fog" 
                          name="brainFog" 
                          onChange={handleYesNo} 
                          value={form.brainFog || ''} 
                        />
                        <EmotionSlider label="Irritation (1–10)" name="irritation" onChange={handleChange} value={form.irritation || 5} />
                        <EmotionSlider label="Anger outbursts – Frequency & Intensity (1–10)" name="anger" onChange={handleChange} value={form.anger || 5} />
                        <div className="space-y-3">
                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                            <label className="block text-sm text-[#5D4C3B]">Mood swings (1–10)</label>
                            {form.mood && (
                              <span className={`text-sm font-medium px-3 py-1 rounded-full ${
                                form.mood <= 3 ? "bg-green-100 text-green-800" :
                                form.mood <= 6 ? "bg-yellow-100 text-yellow-800" :
                                form.mood <= 8 ? "bg-orange-100 text-orange-800" :
                                "bg-red-100 text-red-800"
                              }`}>
                                {form.mood} ({getScaleCategory(Number(form.mood))})
                              </span>
                            )}
                          </div>
                          <input 
                            type="range" 
                            min={1} 
                            max={10} 
                            step={1}
                            value={form.mood || 5} 
                            name="mood" 
                            onChange={handleChange} 
                            className="w-full h-2 bg-[#D6C8B5] rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#B36A4C]"
                          />
                          <div className="flex justify-between text-xs text-[#9E8F7C] mt-1">
                            {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
                              <span key={num} className={form.mood == num ? 'text-[#B36A4C] font-bold' : ''}>
                                {num}
                              </span>
                            ))}
                          </div>
                        </div>
                        <YesNoWithDetails 
                          label="Emotionally disconnected" 
                          name="disconnected" 
                          onChange={handleYesNo} 
                          value={form.disconnected || ''} 
                        />
                        <div className="space-y-4">
                          <p className="text-sm text-[#5D4C3B]">Change in appetite</p>
                          <div className="flex gap-3 mb-2">
                            {["Yes", "No"].map((opt) => (
                              <button
                                key={opt}
                                type="button"
                                onClick={() => handleYesNoWithDetails("appetiteYesNo", opt, "appetiteDetails", opt === "Yes" ? "eating less" : "")}
                                className={`px-4 sm:px-6 py-1.5 sm:py-2 rounded-full border transition-colors ${
                                  form.appetiteYesNo === opt 
                                    ? "bg-[#B36A4C] text-white border-[#B36A4C]" 
                                    : "border-[#D6C8B5] hover:bg-[#E8DFD2] text-[#5D4C3B]"
                                }`}
                              >
                                {opt}
                              </button>
                            ))}
                          </div>
                          {form.appetiteYesNo === "Yes" && (
                            <Textarea 
                              label="Details" 
                              name="appetiteDetails" 
                              onChange={handleChange} 
                              value={form.appetiteDetails || 'eating less'} 
                            />
                          )}
                        </div>
                        <YesNoWithDetails 
                          label="Reduced social connect / Challenges in socializing" 
                          name="social" 
                          onChange={handleYesNo} 
                          value={form.social || ''} 
                        />
                        <div className="space-y-4">
                          <p className="text-sm text-[#5D4C3B]">Sleeplessness / Disrupted sleep / Sleeping a lot / Brain chatter</p>
                          <div className="flex gap-3 mb-2">
                            {["Yes", "No"].map((opt) => (
                              <button
                                key={opt}
                                type="button"
                                onClick={() => handleYesNoWithDetails("sleepYesNo", opt, "sleepDetails", opt === "Yes" ? "unable" : "")}
                                className={`px-4 sm:px-6 py-1.5 sm:py-2 rounded-full border transition-colors ${
                                  form.sleepYesNo === opt 
                                    ? "bg-[#B36A4C] text-white border-[#B36A4C]" 
                                    : "border-[#D6C8B5] hover:bg-[#E8DFD2] text-[#5D4C3B]"
                                }`}
                              >
                                {opt}
                              </button>
                            ))}
                          </div>
                          {form.sleepYesNo === "Yes" && (
                            <Textarea 
                              label="Details" 
                              name="sleepDetails" 
                              onChange={handleChange} 
                              value={form.sleepDetails || 'unable'} 
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </Section>
              )}

              {/* ================= STEP 4 ================= */}
              {step === 4 && (
                <Section
                  title="Anxiety & Body"
                  subtitle="Physical or anxious responses you may notice"
                >
                  <div className="space-y-6">
                    <YesNoWithDetails 
                      label="Suffocation / Breathlessness / Rapid breathing" 
                      name="breathing" 
                      onChange={handleYesNo} 
                      value={form.breathing || ''} 
                    />
                    <YesNoWithDetails 
                      label="Upset stomach / Heaviness" 
                      name="stomach" 
                      onChange={handleYesNo} 
                      value={form.stomach || ''} 
                    />
                    <YesNoWithDetails 
                      label="Restlessness" 
                      name="restlessness" 
                      onChange={handleYesNo} 
                      value={form.restlessness || ''} 
                    />
                    <YesNoWithDetails 
                      label="Rapid heartbeat" 
                      name="heartbeat" 
                      onChange={handleYesNo} 
                      value={form.heartbeat || ''} 
                    />
                    <YesNoWithDetails 
                      label="Heaviness in the chest" 
                      name="chest" 
                      onChange={handleYesNo} 
                      value={form.chest || ''} 
                    />
                    <div className="space-y-4">
                      <p className="text-sm text-[#5D4C3B]">Shivering / Sweating / Cold feet or hands / Legs Shaking</p>
                      <div className="flex gap-3 mb-2">
                        {["Yes", "No"].map((opt) => (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => handleYesNoWithDetails("shiveringYesNo", opt, "shiveringDetails", opt === "Yes" ? "shivering" : "")}
                            className={`px-4 sm:px-6 py-1.5 sm:py-2 rounded-full border transition-colors ${
                              form.shiveringYesNo === opt 
                                ? "bg-[#B36A4C] text-white border-[#B36A4C]" 
                                : "border-[#D6C8B5] hover:bg-[#E8DFD2] text-[#5D4C3B]"
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                      {form.shiveringYesNo === "Yes" && (
                        <Textarea 
                          label="Details" 
                          name="shiveringDetails" 
                          onChange={handleChange} 
                          value={form.shiveringDetails || 'shivering'} 
                        />
                      )}
                    </div>
                    <YesNoWithDetails 
                      label="Vomiting / Nausea / dizziness" 
                      name="vomiting" 
                      onChange={handleYesNo} 
                      value={form.vomiting || ''} 
                    />
                    <YesNoWithDetails 
                      label="Social Anxiety" 
                      name="socialAnxiety" 
                      onChange={handleYesNo} 
                      value={form.socialAnxiety || ''} 
                    />
                    <div className="space-y-4">
                      <p className="text-sm text-[#5D4C3B]">Panic attacks (with frequency)</p>
                      <div className="flex gap-3 mb-2">
                        {["Yes", "No"].map((opt) => (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => handleYesNoWithDetails("panicYesNo", opt, "panicFrequency", opt === "Yes" ? "Once a month" : "")}
                            className={`px-4 sm:px-6 py-1.5 sm:py-2 rounded-full border transition-colors ${
                              form.panicYesNo === opt 
                                ? "bg-[#B36A4C] text-white border-[#B36A4C]" 
                                : "border-[#D6C8B5] hover:bg-[#E8DFD2] text-[#5D4C3B]"
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                      {form.panicYesNo === "Yes" && (
                        <Textarea 
                          label="Frequency" 
                          name="panicFrequency" 
                          onChange={handleChange} 
                          value={form.panicFrequency || 'Once a month'} 
                        />
                      )}
                      {form.panicYesNo === "Yes" && (
                        <EmotionSlider 
                          label="Panic attacks – Intensity / Frequency (1–10)" 
                          name="panicIntensity" 
                          onChange={handleChange} 
                          value={form.panicIntensity || 5} 
                        />
                      )}
                    </div>
                  </div>
                </Section>
              )}

              {/* ================= STEP 5 ================= */}
              {step === 5 && (
                <Section
                  title="Fears / Phobia / PTSD / Depression"
                  subtitle="Only share what feels safe for you"
                >
                  <div className="space-y-6">
                    <YesNoWithDetails 
                      label="Feeling hopeless / stuck" 
                      name="hopeless" 
                      onChange={handleYesNo} 
                      value={form.hopeless || ''} 
                    />
                    <YesNoWithDetails 
                      label="Fear of being alone" 
                      name="aloneFear" 
                      onChange={handleYesNo} 
                      value={form.aloneFear || ''} 
                    />
                    <YesNoWithDetails 
                      label="Trust / commitment issues" 
                      name="trust" 
                      onChange={handleYesNo} 
                      value={form.trust || ''} 
                    />
                    <YesNoWithDetails 
                      label="Fear of dying / Health fears" 
                      name="healthFear" 
                      onChange={handleYesNo} 
                      value={form.healthFear || ''} 
                    />
                    <div className="space-y-4">
                      <p className="text-sm text-[#5D4C3B]">Fearful memories from the childhood</p>
                      <div className="flex gap-3 mb-2">
                        {["Yes", "No"].map((opt) => (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => handleYesNoWithDetails("childhoodTraumaYesNo", opt, "childhoodTraumaDetails", opt === "Yes" ? "2 incidents" : "")}
                            className={`px-4 sm:px-6 py-1.5 sm:py-2 rounded-full border transition-colors ${
                              form.childhoodTraumaYesNo === opt 
                                ? "bg-[#B36A4C] text-white border-[#B36A4C]" 
                                : "border-[#D6C8B5] hover:bg-[#E8DFD2] text-[#5D4C3B]"
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                      {form.childhoodTraumaYesNo === "Yes" && (
                        <Textarea 
                          label="Details" 
                          name="childhoodTraumaDetails" 
                          onChange={handleChange} 
                          value={form.childhoodTraumaDetails || '2 incidents'} 
                        />
                      )}
                    </div>
                    <YesNoWithDetails 
                      label="Perfectionism / Idealism (fear of failure)" 
                      name="perfectionism" 
                      onChange={handleYesNo} 
                      value={form.perfectionism || ''} 
                    />
                    <div className="space-y-4">
                      <p className="text-sm text-[#5D4C3B]">Bullying (incident)</p>
                      <div className="flex gap-3 mb-2">
                        {["Yes", "No"].map((opt) => (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => handleYesNo("bullyingYesNo", opt)}
                            className={`px-4 sm:px-6 py-1.5 sm:py-2 rounded-full border transition-colors ${
                              form.bullyingYesNo === opt 
                                ? "bg-[#B36A4C] text-white border-[#B36A4C]" 
                                : "border-[#D6C8B5] hover:bg-[#E8DFD2] text-[#5D4C3B]"
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-4">
                      <p className="text-sm text-[#5D4C3B]">Sexual harassment / Abuse / Bad touch (incident)</p>
                      <div className="flex gap-3 mb-2">
                        {["Yes", "No"].map((opt) => (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => handleYesNoWithDetails("abuseYesNo", opt, "abuseDetails", opt === "Yes" ? "once in 10th" : "")}
                            className={`px-4 sm:px-6 py-1.5 sm:py-2 rounded-full border transition-colors ${
                              form.abuseYesNo === opt 
                                ? "bg-[#B36A4C] text-white border-[#B36A4C]" 
                                : "border-[#D6C8B5] hover:bg-[#E8DFD2] text-[#5D4C3B]"
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                      {form.abuseYesNo === "Yes" && (
                        <Textarea 
                          label="Details" 
                          name="abuseDetails" 
                          onChange={handleChange} 
                          value={form.abuseDetails || 'once in 10th'} 
                        />
                      )}
                    </div>
                  </div>
                </Section>
              )}

              {/* ================= STEP 6 ================= */}
           

              {/* ================= NAVIGATION ================= */}
              <div className="flex justify-between pt-6 sm:pt-8">
                {step > 1 ? (
                  <button 
                    type="button" 
                    onClick={prev}
                    className="px-6 py-2 sm:px-8 sm:py-3 rounded-full border border-[#D6C8B5] text-[#5D4C3B] hover:bg-[#E8DFD2] transition-colors"
                  >
                    ← Back
                  </button>
                ) : (
                  <div></div> // Empty div to maintain flex spacing
                )}

                {step < totalSteps ? (
                  <button
                    type="button"
                    onClick={next}
                    className="px-6 py-2 sm:px-8 sm:py-3 rounded-full bg-[#B36A4C] text-white hover:bg-[#9C5A3C] transition-colors"
                  >
                    Continue
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isSending}
                    className="px-6 py-2 sm:px-10 sm:py-4 rounded-full bg-[#B36A4C] text-white hover:bg-[#9C5A3C] transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSending ? 'Submitting...' : 'Submit Evaluation'}
                  </button>
                )}
              </div>
            </form>
          </div>
        )}
      </div>
    </section>
  );
}

/* ===================== UI COMPONENTS ===================== */

function Section({ title, subtitle, children }: any) {
  return (
    <div className="bg-[#F6F2EC]/80 border border-[#D6C8B5] rounded-xl p-6 sm:p-8 space-y-6 sm:space-y-8">
      <div>
        <h4 className="font-serif text-xl sm:text-2xl font-semibold text-[#2C2416]">
          {title}
        </h4>
        {subtitle && <p className="text-sm text-[#8B7355] mt-1">{subtitle}</p>}
      </div>
      {children}
    </div>
  );
}

function Input({ label, type = "text", ...props }: any) {
  return (
    <div>
      <label className="block text-sm mb-2 text-[#5D4C3B]">{label}</label>
      <input 
        type={type}
        {...props} 
        className="w-full bg-transparent border-b border-[#D6C8B5] py-2 sm:py-3 text-base sm:text-lg focus:border-[#B36A4C] focus:outline-none transition-colors" 
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
        className="w-full bg-transparent border-b border-[#D6C8B5] py-2 sm:py-3 text-base sm:text-lg focus:border-[#B36A4C] focus:outline-none transition-colors"
      >
        {options.map((o: string) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
    </div>
  );
}

function EmotionSlider({ label, name, value, onChange, showLabel = true }: any) {
  const getScaleCategory = (val: number) => {
    if (val <= 3) return "Low";
    if (val <= 6) return "Medium";
    if (val <= 8) return "High";
    return "Very High";
  };

  return (
    <div className="space-y-3">
      {showLabel && (
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
          <label className="block text-sm text-[#5D4C3B]">{label}</label>
          {value && (
            <span className={`text-sm font-medium px-3 py-1 rounded-full ${
              value <= 3 ? "bg-green-100 text-green-800" :
              value <= 6 ? "bg-yellow-100 text-yellow-800" :
              value <= 8 ? "bg-orange-100 text-orange-800" :
              "bg-red-100 text-red-800"
            }`}>
              {value} ({getScaleCategory(Number(value))})
            </span>
          )}
        </div>
      )}
      
      <div className="relative">
        <input 
          type="range" 
          min={1} 
          max={10} 
          step={1}
          value={value || 5} 
          name={name} 
          onChange={onChange} 
          className="w-full h-2 bg-[#D6C8B5] rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#B36A4C]"
        />
        
        {/* Number markers */}
        <div className="flex justify-between mt-1 px-1">
          {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
            <div key={num} className="flex flex-col items-center">
              <div 
                className={`w-px h-2 ${value == num ? 'bg-[#B36A4C]' : 'bg-[#D6C8B5]'}`}
              ></div>
              <span 
                className={`text-xs mt-1 ${value == num ? 'text-[#B36A4C] font-bold' : 'text-[#9E8F7C]'}`}
              >
                {num}
              </span>
            </div>
          ))}
        </div>
      </div>
      
      {showLabel && (
        <div className="flex justify-between text-xs text-[#9E8F7C] mt-4">
          <span>Low (1-3)</span>
          <span>Medium (4-6)</span>
          <span>High (7-8)</span>
          <span>Very High (9-10)</span>
        </div>
      )}
    </div>
  );
}

function YesNoWithDetails({ label, name, value, onChange }: any) {
  return (
    <div className="space-y-3">
      <p className="text-sm text-[#5D4C3B]">{label}</p>
      <div className="flex gap-3">
        {["Yes", "No"].map((opt) => (
          <button
            key={opt}
            type="button"
            onClick={() => onChange(name, opt)}
            className={`px-4 sm:px-6 py-1.5 sm:py-2 rounded-full border transition-colors ${
              value === opt 
                ? "bg-[#B36A4C] text-white border-[#B36A4C]" 
                : "border-[#D6C8B5] hover:bg-[#E8DFD2] text-[#5D4C3B]"
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}

function Textarea({ label, rows = 3, ...props }: any) {
  return (
    <div>
      {label && <label className="block text-sm mb-2 text-[#5D4C3B]">{label}</label>}
      <textarea 
        {...props} 
        rows={rows}
        className="w-full bg-transparent border-b border-[#D6C8B5] py-2 sm:py-3 text-base sm:text-lg focus:border-[#B36A4C] focus:outline-none transition-colors resize-none" 
      />
    </div>
  );
}

/* ===================== RESULT ANALYSIS ===================== */

function ResultAnalysis({ data }: { data: Record<string, any> }) {
  // Group all responses by category
  const allResponses = [
    // Personal Information
    { label: "Name", value: data.name, category: "personal" },
    { label: "Age", value: data.age, category: "personal" },
    { label: "Date", value: data.date, category: "personal" },
    { label: "Gender", value: data.gender, category: "personal" },
    { label: "Email", value: data.email, category: "personal" },
    { label: "Pre-existing medical conditions", value: data.medical, category: "personal" },
    { label: "Taken consultation before", value: data.consultation, category: "personal" },
    { label: "Taking medications", value: data.medications, category: "personal" },
    { label: "Previous diagnosis", value: data.previousDiagnosis, category: "personal" },
    
    // Stress & Thinking
    { label: "Overthinking / Negative thinking", value: data.overthinking, category: "stress", isScale: true },
    { label: "Stress levels", value: data.stress, category: "stress", isScale: true },
    { label: "Unexplained aches", value: data.achesYesNo, category: "stress", details: data.achesLocation },
    { label: "Tiredness / Exhausted", value: data.tirednessYesNo, category: "stress", 
      details: data.tirednessScale ? `Level: ${data.tirednessScale}/10${data.tirednessDetails ? `, ${data.tirednessDetails}` : ''}` : null },
    
    // Depression Symptoms
    { label: "Unable to focus", value: data.focus, category: "depression" },
    { label: "Forgetfulness / Brain fog", value: data.brainFog, category: "depression" },
    { label: "Irritation", value: data.irritation, category: "depression", isScale: true },
    { label: "Anger outbursts", value: data.anger, category: "depression", isScale: true },
    { label: "Mood swings", value: data.mood, category: "depression", isScale: true },
    { label: "Emotionally disconnected", value: data.disconnected, category: "depression" },
    { label: "Change in appetite", value: data.appetiteYesNo, category: "depression", details: data.appetiteDetails },
    { label: "Reduced social connect", value: data.social, category: "depression" },
    { label: "Sleep issues", value: data.sleepYesNo, category: "depression", details: data.sleepDetails },
    
    // Anxiety Symptoms
    { label: "Suffocation / Breathlessness", value: data.breathing, category: "anxiety" },
    { label: "Upset stomach / Heaviness", value: data.stomach, category: "anxiety" },
    { label: "Restlessness", value: data.restlessness, category: "anxiety" },
    { label: "Rapid heartbeat", value: data.heartbeat, category: "anxiety" },
    { label: "Heaviness in chest", value: data.chest, category: "anxiety" },
    { label: "Shivering / Sweating", value: data.shiveringYesNo, category: "anxiety", details: data.shiveringDetails },
    { label: "Vomiting / Nausea / Dizziness", value: data.vomiting, category: "anxiety" },
    { label: "Social Anxiety", value: data.socialAnxiety, category: "anxiety" },
    { label: "Panic attacks", value: data.panicYesNo, category: "anxiety", 
      details: data.panicFrequency ? `Frequency: ${data.panicFrequency}${data.panicIntensity ? `, Intensity: ${data.panicIntensity}/10` : ''}` : null },
    
    // Fears & Trauma
    { label: "Feeling hopeless / stuck", value: data.hopeless, category: "trauma" },
    { label: "Fear of being alone", value: data.aloneFear, category: "trauma" },
    { label: "Trust / commitment issues", value: data.trust, category: "trauma" },
    { label: "Fear of dying / Health fears", value: data.healthFear, category: "trauma" },
    { label: "Fearful childhood memories", value: data.childhoodTraumaYesNo, category: "trauma", details: data.childhoodTraumaDetails },
    { label: "Perfectionism / Fear of failure", value: data.perfectionism, category: "trauma" },
    { label: "Bullying experiences", value: data.bullyingYesNo, category: "trauma" },
    { label: "Sexual harassment / Abuse", value: data.abuseYesNo, category: "trauma", details: data.abuseDetails },
    
    // Final Notes
    { label: "Observations", value: data.observations, category: "notes" },
    { label: "Tentative Diagnosis", value: data.diagnosis, category: "notes" },
    { label: "Additional notes", value: data.notes, category: "notes" },
  ];

  // Filter responses that have values
  const responsesWithValues = allResponses.filter(item => 
    item.value !== undefined && item.value !== null && item.value !== '' && item.value !== "Select diagnosis"
  );

  // Count symptoms for analysis
  const depressionSymptoms = [
    data.focus === "Yes",
    data.brainFog === "Yes",
    Number(data.irritation) >= 7,
    Number(data.anger) >= 7,
    Number(data.mood) >= 7,
    data.disconnected === "Yes",
    data.appetiteYesNo === "Yes",
    data.social === "Yes",
    data.sleepYesNo === "Yes"
  ].filter(Boolean).length;

  const anxietySymptoms = [
    data.breathing === "Yes",
    data.stomach === "Yes",
    data.restlessness === "Yes",
    data.heartbeat === "Yes",
    data.chest === "Yes",
    data.shiveringYesNo === "Yes",
    data.vomiting === "Yes",
    data.socialAnxiety === "Yes",
    data.panicYesNo === "Yes"
  ].filter(Boolean).length;

  const traumaSymptoms = [
    data.hopeless === "Yes",
    data.aloneFear === "Yes",
    data.trust === "Yes",
    data.healthFear === "Yes",
    data.childhoodTraumaYesNo === "Yes",
    data.perfectionism === "Yes",
    data.bullyingYesNo === "Yes",
    data.abuseYesNo === "Yes"
  ].filter(Boolean).length;

  // Group responses by category
  const groupedResponses: Record<string, any[]> = {};
  responsesWithValues.forEach(item => {
    if (!groupedResponses[item.category]) {
      groupedResponses[item.category] = [];
    }
    groupedResponses[item.category].push(item);
  });

  const categoryTitles: Record<string, string> = {
    "personal": "Personal Information",
    "stress": "Stress & Thinking",
    "depression": "Depression Symptoms",
    "anxiety": "Anxiety Symptoms",
    "trauma": "Fears & Trauma",
    "notes": "Final Notes & Diagnosis"
  };

  return (
    <div className="bg-[#F6F2EC]/90 border border-[#D6C8B5] rounded-xl p-6 sm:p-8 space-y-8">
      <h4 className="font-serif text-xl sm:text-2xl font-semibold text-[#2C2416]">
        Complete Evaluation Results
      </h4>

      <div className="space-y-8">
        {/* Symptom Summary */}
        <div className="bg-[#F6F2EC] p-4 rounded-lg">
          <h5 className="font-medium text-[#2C2416] mb-4 text-center">Symptom Summary</h5>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 bg-white rounded-lg text-center">
              <div className="text-3xl font-bold text-[#B36A4C]">{depressionSymptoms}</div>
              <div className="text-sm text-[#5D4C3B] font-medium">Depression Symptoms</div>
              <div className={`text-xs mt-2 px-3 py-1 rounded-full ${depressionSymptoms >= 5 ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                {depressionSymptoms >= 5 ? "✅ Clinical threshold met" : "⚠️ Needs assessment"}
              </div>
            </div>
            <div className="p-4 bg-white rounded-lg text-center">
              <div className="text-3xl font-bold text-[#B36A4C]">{anxietySymptoms}</div>
              <div className="text-sm text-[#5D4C3B] font-medium">Anxiety Symptoms</div>
              <div className="text-xs text-[#8B7355] mt-2">Out of 9 possible</div>
            </div>
            <div className="p-4 bg-white rounded-lg text-center">
              <div className="text-3xl font-bold text-[#B36A4C]">{traumaSymptoms}</div>
              <div className="text-sm text-[#5D4C3B] font-medium">Trauma Indicators</div>
              <div className="text-xs text-[#8B7355] mt-2">Out of 8 possible</div>
            </div>
          </div>
        </div>

        {/* All Responses by Category */}
        {Object.keys(groupedResponses).map((category) => (
          <div key={category} className="space-y-4">
            <h5 className="font-medium text-[#2C2416] border-b border-[#D6C8B5] pb-2">
              {categoryTitles[category] || category}
            </h5>
            <div className="space-y-3">
              {groupedResponses[category].map((item, index) => (
                <div key={index} className="p-3 bg-[#F6F2EC]/50 rounded hover:bg-[#F6F2EC]/70 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-2">
                    <div className="sm:w-2/5">
                      <span className="text-sm font-medium text-[#5D4C3B]">{item.label}:</span>
                    </div>
                    <div className="sm:w-3/5">
                      {item.isScale ? (
                        <div className="flex items-center gap-3">
                          <span className={`font-medium px-3 py-1 rounded-full text-sm ${
                            Number(item.value) <= 3 ? "bg-green-100 text-green-800" :
                            Number(item.value) <= 6 ? "bg-yellow-100 text-yellow-800" :
                            Number(item.value) <= 8 ? "bg-orange-100 text-orange-800" :
                            "bg-red-100 text-red-800"
                          }`}>
                            {item.value}/10 ({getScaleCategory(Number(item.value))})
                          </span>
                        </div>
                      ) : (
                        <div>
                          <span className={`font-medium ${item.value === "Yes" ? "text-[#B36A4C]" : "text-[#5D4C3B]"}`}>
                            {item.value}
                          </span>
                          {item.details && (
                            <div className="mt-1 text-sm text-[#2C2416] bg-[#F6F2EC] p-2 rounded">
                              <span className="text-[#8B7355]">Details: </span>
                              {item.details}
                            </div>
                          )}
                          {!item.details && typeof item.value === 'string' && item.value.length > 100 && (
                            <div className="mt-1 text-sm text-[#2C2416] bg-[#F6F2EC] p-2 rounded">
                              {item.value}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Scale Reference */}
        <div className="bg-[#F6F2EC] p-4 rounded-lg border border-[#D6C8B5]">
          <h5 className="font-medium text-[#2C2416] mb-3">Scale Reference:</h5>
          <div className="grid grid-cols-4 gap-2 text-center">
            <div className="p-2 bg-green-50 rounded">
              <div className="font-medium">1-3</div>
              <div className="text-sm text-[#5D4C3B]">Low</div>
            </div>
            <div className="p-2 bg-yellow-50 rounded">
              <div className="font-medium">4-6</div>
              <div className="text-sm text-[#5D4C3B]">Medium</div>
            </div>
            <div className="p-2 bg-orange-50 rounded">
              <div className="font-medium">7-8</div>
              <div className="text-sm text-[#5D4C3B]">High</div>
            </div>
            <div className="p-2 bg-red-50 rounded">
              <div className="font-medium">9-10</div>
              <div className="text-sm text-[#5D4C3B]">Very High</div>
            </div>
          </div>
        </div>

        {/* Clinical Insights */}
        <div className="bg-[#F6F2EC]/80 p-4 rounded-lg border border-[#D6C8B5]">
          <h5 className="font-medium text-[#2C2416] mb-3">Clinical Insights:</h5>
          <ul className="list-disc list-inside text-[#5D4C3B] space-y-2">
            {data.stress >= 7 && <li>Elevated stress levels detected ({data.stress}/10)</li>}
            {data.overthinking >= 7 && <li>Significant cognitive overload present ({data.overthinking}/10)</li>}
            {data.irritation >= 7 && <li>High emotional reactivity observed ({data.irritation}/10)</li>}
            {data.anger >= 7 && <li>Anger regulation challenges noted ({data.anger}/10)</li>}
            {data.mood >= 7 && <li>Mood instability reported ({data.mood}/10)</li>}
            {data.panicYesNo === "Yes" && <li>Panic symptoms present {data.panicFrequency && `(${data.panicFrequency})`}</li>}
            {depressionSymptoms >= 5 && <li className="font-medium text-[#B36A4C]">⚠️ Clinical depression indicators detected (5+ symptoms)</li>}
            {anxietySymptoms >= 5 && <li className="font-medium text-[#B36A4C]">⚠️ Multiple anxiety symptoms present ({anxietySymptoms}/9)</li>}
            {traumaSymptoms >= 3 && <li className="font-medium text-[#B36A4C]">⚠️ Trauma history indicators noted ({traumaSymptoms}/8)</li>}
            {data.tirednessYesNo === "Yes" && data.tirednessScale >= 7 && <li>Significant fatigue impacting functioning</li>}
            {data.sleepYesNo === "Yes" && <li>Sleep disturbances reported</li>}
            {data.social === "Yes" && <li>Social withdrawal patterns observed</li>}
          </ul>
        </div>

        <div className="text-center pt-4 border-t border-[#D6C8B5]">
          <p className="text-sm text-[#8B7355] italic">
            This comprehensive report includes all your submitted responses. Remember that this is a self-assessment tool and not a clinical diagnosis. Please consult with a qualified mental health professional for proper evaluation and treatment planning.
          </p>
          <p className="text-xs text-[#8B7355] mt-3">
            Total Responses Submitted: {responsesWithValues.length} items
          </p>
        </div>
      </div>
    </div>
  );
}

// Helper function for scale categories
function getScaleCategory(val: number): string {
  if (val <= 3) return "Low";
  if (val <= 6) return "Medium";
  if (val <= 8) return "High";
  return "Very High";
}