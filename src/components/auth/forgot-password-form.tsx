"use client";

import { ArrowLeft, ArrowRight, Mail } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

export default function ForgotPasswordForm() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // TODO: call forgot-password API
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 1500);
  };

  return (
    <div className="w-full max-w-[420px]">
      {/* Logo */}
      <Link href="/" className="block mb-8">
        <span className="text-[#2459c8] font-bold text-xl font-[family-name:var(--font-besley)]">
          YourCR
        </span>
      </Link>

      {/* Header */}
      <div className="mb-7">
        <h1 className="text-2xl font-medium text-gray-900 mb-1.5 font-[family-name:var(--font-besley)]">
          Forgot your password?
        </h1>
        <p className="text-sm text-gray-500 leading-relaxed">
          Enter your email and we&apos;ll send you a password reset link.
        </p>
      </div>

      {/* Success state */}
      {sent ? (
        <div className="space-y-5">
          <div className="flex gap-3 bg-green-50 border border-green-200 rounded-lg p-4">
            <span className="size-4 rounded-full bg-green-500 shrink-0 mt-0.5 flex items-center justify-center">
              <svg viewBox="0 0 12 12" fill="none" className="size-3">
                <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <div>
              <p className="text-sm font-medium text-green-800">Reset link sent!</p>
              <p className="text-xs text-green-600 mt-0.5">
                Check your inbox. The link expires in 30 minutes.
              </p>
            </div>
          </div>
          <Link
            href="/login"
            className="w-full py-2.5 bg-white border border-[oklch(0.922_0_0)] text-gray-700 text-sm font-semibold rounded-lg flex items-center justify-center gap-2 cursor-pointer transition-colors"
          >
            <ArrowLeft className="size-4" /> Back to Sign In
          </Link>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="forgot-email"
              className="block text-sm font-medium text-gray-700 mb-1.5"
            >
              Email address
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
                <Mail className="size-4 text-gray-400" />
              </span>
              <input
                id="forgot-email"
                type="email"
                name="email"
                placeholder="you@example.com"
                autoComplete="email"
                required
                className="w-full pl-10 pr-4 py-2.5 text-sm border border-[oklch(0.922_0_0)] rounded-lg text-gray-900 placeholder:text-gray-400 bg-white outline-none focus:border-[#2459c8] transition-colors"
              />
            </div>
          </div>

          <button
            id="forgot-submit"
            type="submit"
            disabled={loading}
            className="w-full py-2.5 bg-[#2459c8] text-white text-sm font-semibold rounded-lg flex items-center justify-center gap-2 cursor-pointer transition-colors disabled:opacity-60"
          >
            {loading ? (
              <>
                <span className="size-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Sending…
              </>
            ) : (
              <>
                Send Reset Link <ArrowRight className="size-4" />
              </>
            )}
          </button>

          <Link
            href="/login"
            className="w-full py-2.5 bg-white border border-[oklch(0.922_0_0)] text-gray-700 text-sm font-semibold rounded-lg flex items-center justify-center gap-2 cursor-pointer transition-colors"
          >
            <ArrowLeft className="size-4" /> Back to Sign In
          </Link>
        </form>
      )}
    </div>
  );
}
