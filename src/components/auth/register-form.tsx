"use client";

import {
  ArrowLeft,
  ArrowRight,
  Building2,
  CheckCircle2,
  FileText,
  Hash,
  Info,
  Lock,
  Mail,
  Phone,
  ShieldCheck,
  Upload,
  User,
} from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

/* ─── Shared styles ─── */
const inputCls =
  "w-full px-3 py-2.5 text-sm border border-[oklch(0.922_0_0)] rounded-lg text-gray-900 placeholder:text-gray-400 bg-white outline-none focus:border-[#2459c8] transition-colors";

const selectCls =
  "w-full px-3 py-2.5 text-sm border border-[oklch(0.922_0_0)] rounded-lg text-gray-900 bg-white outline-none focus:border-[#2459c8] transition-colors cursor-pointer";

/* ─── Field wrapper ─── */
function Field({
  id,
  label,
  required,
  hint,
  children,
}: {
  id?: string;
  label: string;
  required?: boolean;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1.5">
        {label}
        {required && <span className="text-red-500 ml-0.5">*</span>}
      </label>
      {children}
      {hint && <p className="mt-1 text-[11px] text-gray-400">{hint}</p>}
    </div>
  );
}

/* ─── Step Indicator ─── */
const STEPS = [
  { number: 1, label: "Personal" },
  { number: 2, label: "Institution" },
  { number: 3, label: "Batch & Section" },
  { number: 4, label: "Documents" },
];

function StepIndicator({ current }: { current: number }) {
  return (
    <div className="flex items-center w-full mb-8">
      {STEPS.map((step, i) => {
        const done = step.number < current;
        const active = step.number === current;
        return (
          <React.Fragment key={step.number}>
            <div className="flex flex-col items-center shrink-0">
              <div
                className={`size-8 rounded-full flex items-center justify-center text-xs font-semibold border transition-colors ${
                  done
                    ? "bg-[#2459c8] border-[#2459c8] text-white"
                    : active
                    ? "bg-white border-[#2459c8] text-[#2459c8]"
                    : "bg-white border-[oklch(0.922_0_0)] text-gray-400"
                }`}
              >
                {done ? <CheckCircle2 className="size-4" /> : step.number}
              </div>
              <span
                className={`mt-1.5 text-[10px] font-medium whitespace-nowrap ${
                  active ? "text-[#2459c8]" : done ? "text-gray-600" : "text-gray-400"
                }`}
              >
                {step.label}
              </span>
            </div>
            {i < STEPS.length - 1 && (
              <div
                className={`flex-1 h-px mx-2 mb-5 transition-colors ${
                  done ? "bg-[#2459c8]" : "bg-[oklch(0.922_0_0)]"
                }`}
              />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}

/* ─── Step 1 — Personal Info ─── */
function Step1({ onNext }: { onNext: () => void }) {
  return (
    <div className="space-y-5">
      <div className="grid grid-cols-2 gap-4">
        <Field id="reg-first-name" label="First Name" required>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
              <User className="size-4 text-gray-400" />
            </span>
            <input
              id="reg-first-name"
              type="text"
              name="firstName"
              placeholder="John"
              required
              className={`${inputCls} pl-10`}
            />
          </div>
        </Field>
        <Field id="reg-last-name" label="Last Name" required>
          <input
            id="reg-last-name"
            type="text"
            name="lastName"
            placeholder="Doe"
            required
            className={inputCls}
          />
        </Field>
      </div>

      <Field id="reg-email" label="Email Address" required>
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
            <Mail className="size-4 text-gray-400" />
          </span>
          <input
            id="reg-email"
            type="email"
            name="email"
            placeholder="you@example.com"
            required
            autoComplete="email"
            className={`${inputCls} pl-10`}
          />
        </div>
      </Field>

      <Field id="reg-phone" label="Phone Number" required>
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
            <Phone className="size-4 text-gray-400" />
          </span>
          <input
            id="reg-phone"
            type="tel"
            name="phone"
            placeholder="+880 1700-000000"
            required
            className={`${inputCls} pl-10`}
          />
        </div>
      </Field>

      <Field id="reg-password" label="Password" required hint="Minimum 8 characters">
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
            <Lock className="size-4 text-gray-400" />
          </span>
          <input
            id="reg-password"
            type="password"
            name="password"
            placeholder="••••••••"
            required
            minLength={8}
            className={`${inputCls} pl-10`}
          />
        </div>
      </Field>

      <Field id="reg-confirm-password" label="Confirm Password" required>
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
            <ShieldCheck className="size-4 text-gray-400" />
          </span>
          <input
            id="reg-confirm-password"
            type="password"
            name="confirmPassword"
            placeholder="••••••••"
            required
            className={`${inputCls} pl-10`}
          />
        </div>
      </Field>

      <button
        type="button"
        onClick={onNext}
        className="w-full py-2.5 bg-[#2459c8] text-white text-sm font-semibold rounded-lg flex items-center justify-center gap-2 cursor-pointer transition-colors"
      >
        Continue <ArrowRight className="size-4" />
      </button>
    </div>
  );
}

/* ─── Step 2 — Institution ─── */
function Step2({ onNext, onBack }: { onNext: () => void; onBack: () => void }) {
  return (
    <div className="space-y-5">
      <Field
        id="reg-institute-type"
        label="Institution Type"
        required
        hint="Select the type that matches your institution"
      >
        <select id="reg-institute-type" name="instituteType" required className={selectCls}>
          <option value="" disabled>Select type</option>
          <option value="COLLEGE">College (HSC / Alim)</option>
          <option value="DIPLOMA">Diploma</option>
          <option value="UNIVERSITY">University</option>
        </select>
      </Field>

      <Field
        id="reg-institute-name"
        label="Institution Name"
        required
        hint='Type your institution name. If it does not exist it will be created automatically.'
      >
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
            <Building2 className="size-4 text-gray-400" />
          </span>
          <input
            id="reg-institute-name"
            type="text"
            name="instituteName"
            placeholder="Search or type your institution"
            required
            className={`${inputCls} pl-10`}
          />
        </div>
      </Field>

      <Field
        id="reg-program"
        label="Program / Course"
        required
        hint="e.g. HSC, B.Sc Engineering, BBA, Diploma in Engineering"
      >
        <input
          id="reg-program"
          type="text"
          name="program"
          placeholder="e.g. B.Sc in CSE"
          required
          className={inputCls}
        />
      </Field>

      <Field
        id="reg-department"
        label="Department / Group / Technology"
        required
        hint="e.g. Science, CSE, EEE, Computer Technology"
      >
        <input
          id="reg-department"
          type="text"
          name="department"
          placeholder="e.g. Computer Science & Engineering"
          required
          className={inputCls}
        />
      </Field>

      <div className="flex gap-3">
        <button
          type="button"
          onClick={onBack}
          className="flex-1 py-2.5 bg-white border border-[oklch(0.922_0_0)] text-gray-700 text-sm font-semibold rounded-lg flex items-center justify-center gap-2 cursor-pointer transition-colors"
        >
          <ArrowLeft className="size-4" /> Back
        </button>
        <button
          type="button"
          onClick={onNext}
          className="flex-1 py-2.5 bg-[#2459c8] text-white text-sm font-semibold rounded-lg flex items-center justify-center gap-2 cursor-pointer transition-colors"
        >
          Continue <ArrowRight className="size-4" />
        </button>
      </div>
    </div>
  );
}

/* ─── Step 3 — Batch & Section ─── */
function Step3({ onNext, onBack }: { onNext: () => void; onBack: () => void }) {
  return (
    <div className="space-y-5">
      <Field
        id="reg-batch"
        label="Batch / Year"
        required
        hint="e.g. 2023-2027, Batch-52, Summer 2025"
      >
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
            <Hash className="size-4 text-gray-400" />
          </span>
          <input
            id="reg-batch"
            type="text"
            name="batch"
            placeholder="e.g. 2023-2027"
            required
            className={`${inputCls} pl-10`}
          />
        </div>
      </Field>

      <Field
        id="reg-section"
        label="Section / Shift"
        required
        hint="e.g. Section A, 1st Shift - A, Sec-B"
      >
        <input
          id="reg-section"
          type="text"
          name="section"
          placeholder="e.g. Section A"
          required
          className={inputCls}
        />
      </Field>

      <Field
        id="reg-term-type"
        label="Academic Term System"
        required
        hint="How does your institution track academic progress?"
      >
        <select id="reg-term-type" name="termType" required className={selectCls}>
          <option value="" disabled>Select term system</option>
          <option value="SEMESTER">Semester (1st Sem, 2nd Sem…) — University / Diploma</option>
          <option value="YEAR">Yearly (1st Year, 2nd Year…) — College / National University</option>
        </select>
      </Field>

      <Field
        id="reg-current-term"
        label="Current Term / Year"
        required
        hint="Which semester or year is your class currently in?"
      >
        <select id="reg-current-term" name="currentTerm" required className={selectCls}>
          <option value="" disabled>Select current term</option>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
            <option key={n} value={n}>
              {n === 1 ? "1st" : n === 2 ? "2nd" : n === 3 ? "3rd" : `${n}th`}
            </option>
          ))}
        </select>
      </Field>

      <div className="flex gap-3">
        <button
          type="button"
          onClick={onBack}
          className="flex-1 py-2.5 bg-white border border-[oklch(0.922_0_0)] text-gray-700 text-sm font-semibold rounded-lg flex items-center justify-center gap-2 cursor-pointer transition-colors"
        >
          <ArrowLeft className="size-4" /> Back
        </button>
        <button
          type="button"
          onClick={onNext}
          className="flex-1 py-2.5 bg-[#2459c8] text-white text-sm font-semibold rounded-lg flex items-center justify-center gap-2 cursor-pointer transition-colors"
        >
          Continue <ArrowRight className="size-4" />
        </button>
      </div>
    </div>
  );
}

/* ─── Step 4 — Documents ─── */
function Step4({
  onBack,
  loading,
}: {
  onBack: () => void;
  loading: boolean;
}) {
  return (
    <div className="space-y-5">
      {/* Info banner */}
      <div className="flex gap-3 bg-[#2459c8]/6 border border-[#2459c8]/20 rounded-lg p-4">
        <Info className="size-4 text-[#2459c8] shrink-0 mt-0.5" />
        <div>
          <p className="text-sm font-medium text-[#2459c8]">Admin review required</p>
          <p className="text-xs text-gray-600 mt-0.5 leading-relaxed">
            An admin will review your documents before approving your CR account.
          </p>
        </div>
      </div>

      {/* NID / Birth Cert */}
      <Field
        id="reg-id-card"
        label="National ID Card / Birth Certificate"
        required
        hint="Clear photo or scan. JPG, PNG or PDF — max 5 MB."
      >
        <label
          htmlFor="reg-id-card"
          className="flex flex-col items-center justify-center w-full border border-dashed border-[oklch(0.922_0_0)] rounded-lg py-7 px-4 cursor-pointer bg-white transition-colors"
        >
          <Upload className="size-6 text-gray-400 mb-2" />
          <span className="text-sm text-gray-500 font-medium">
            Click to upload NID / Birth Certificate
          </span>
          <span className="text-xs text-gray-400 mt-1">JPG, PNG, PDF — up to 5 MB</span>
          <input
            id="reg-id-card"
            type="file"
            name="idCard"
            accept=".jpg,.jpeg,.png,.pdf"
            required
            className="sr-only"
          />
        </label>
      </Field>

      {/* Student ID */}
      <Field
        id="reg-student-id"
        label="Student ID Card"
        required
        hint="Your institution-issued student ID card."
      >
        <label
          htmlFor="reg-student-id"
          className="flex flex-col items-center justify-center w-full border border-dashed border-[oklch(0.922_0_0)] rounded-lg py-7 px-4 cursor-pointer bg-white transition-colors"
        >
          <FileText className="size-6 text-gray-400 mb-2" />
          <span className="text-sm text-gray-500 font-medium">
            Click to upload Student ID Card
          </span>
          <span className="text-xs text-gray-400 mt-1">JPG, PNG, PDF — up to 5 MB</span>
          <input
            id="reg-student-id"
            type="file"
            name="studentId"
            accept=".jpg,.jpeg,.png,.pdf"
            required
            className="sr-only"
          />
        </label>
      </Field>

      {/* Terms */}
      <div className="flex items-start gap-2.5">
        <input
          id="reg-terms"
          type="checkbox"
          name="terms"
          required
          className="size-4 mt-0.5 rounded border-gray-300 accent-[#2459c8] cursor-pointer shrink-0"
        />
        <label
          htmlFor="reg-terms"
          className="text-xs text-gray-600 cursor-pointer select-none leading-relaxed"
        >
          I agree to the{" "}
          <Link href="/terms" className="text-[#2459c8] font-medium">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link href="/privacy" className="text-[#2459c8] font-medium">
            Privacy Policy
          </Link>
          . I confirm the uploaded documents are genuine.
        </label>
      </div>

      <div className="flex gap-3">
        <button
          type="button"
          onClick={onBack}
          className="flex-1 py-2.5 bg-white border border-[oklch(0.922_0_0)] text-gray-700 text-sm font-semibold rounded-lg flex items-center justify-center gap-2 cursor-pointer transition-colors"
        >
          <ArrowLeft className="size-4" /> Back
        </button>
        <button
          id="reg-submit"
          type="submit"
          disabled={loading}
          className="flex-1 py-2.5 bg-[#2459c8] text-white text-sm font-semibold rounded-lg flex items-center justify-center gap-2 cursor-pointer transition-colors disabled:opacity-60"
        >
          {loading ? (
            <>
              <span className="size-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Submitting…
            </>
          ) : (
            <>
              Submit Application <ArrowRight className="size-4" />
            </>
          )}
        </button>
      </div>
    </div>
  );
}

/* ─── Step headings ─── */
const HEADINGS: Record<number, { title: string; subtitle: string }> = {
  1: { title: "Create your CR account", subtitle: "Start with your personal information" },
  2: { title: "Your institution", subtitle: "Tell us about your college, diploma, or university" },
  3: { title: "Batch & section details", subtitle: "Help us identify your class accurately" },
  4: { title: "Upload your documents", subtitle: "Required for admin verification before approval" },
};

/* ─── Main Register Form ─── */
export default function RegisterForm() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const next = () => setStep((s) => Math.min(s + 1, 4));
  const back = () => setStep((s) => Math.max(s - 1, 1));

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // TODO: handle registration submission
    setTimeout(() => setLoading(false), 2000);
  };

  const heading = HEADINGS[step];

  return (
    <div className="w-full max-w-[440px]">
      {/* Logo */}
      <Link href="/" className="block mb-8">
        <span className="text-[#2459c8] font-bold text-xl font-[family-name:var(--font-besley)]">
          YourCR
        </span>
      </Link>

      {/* Header */}
      <div className="mb-7">
        <div className="inline-flex items-center gap-2 bg-[#2459c8]/8 rounded-full px-3 py-1 mb-4">
          <span className="size-1.5 rounded-full bg-[#2459c8]" />
          <span className="text-[#2459c8] text-xs font-semibold">CR Registration</span>
        </div>
        <h1 className="text-2xl font-medium text-gray-900 mb-1 font-[family-name:var(--font-besley)]">
          {heading.title}
        </h1>
        <p className="text-sm text-gray-500">{heading.subtitle}</p>
      </div>

      {/* Step indicator */}
      <StepIndicator current={step} />

      {/* Step content */}
      <form onSubmit={handleSubmit}>
        {step === 1 && <Step1 onNext={next} />}
        {step === 2 && <Step2 onNext={next} onBack={back} />}
        {step === 3 && <Step3 onNext={next} onBack={back} />}
        {step === 4 && <Step4 onBack={back} loading={loading} />}
      </form>

      {/* Login link */}
      <p className="text-center text-sm text-gray-500 mt-7">
        Already have an account?{" "}
        <Link href="/login" className="text-[#2459c8] font-semibold">
          Sign in
        </Link>
      </p>
    </div>
  );
}
