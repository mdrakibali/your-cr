"use client";

import { ArrowLeft, ArrowRight, Lock, ShieldCheck } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const inputCls =
  "w-full pl-10 pr-4 py-2.5 text-sm border border-[oklch(0.922_0_0)] rounded-lg text-gray-900 placeholder:text-gray-400 bg-white outline-none focus:border-[#2459c8] transition-colors disabled:opacity-50 disabled:cursor-not-allowed";

export default function ResetPasswordForm({ token }: { token: string }) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const hasToken = Boolean(token);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // TODO: call reset-password API with token
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
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
          Create a new password
        </h1>
        <p className="text-sm text-gray-500">
          Choose a strong password for your YourCR account.
        </p>
      </div>

      {/* Invalid token warning */}
      {!hasToken && (
        <div className="mb-6 flex gap-3 bg-red-50 border border-red-200 rounded-lg p-4">
          <ShieldCheck className="size-4 text-red-500 shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-medium text-red-700">Invalid or expired link</p>
            <p className="text-xs text-red-500 mt-0.5">
              This reset link is missing or has expired.{" "}
              <Link href="/forgot-password" className="font-semibold underline">
                Request a new one.
              </Link>
            </p>
          </div>
        </div>
      )}

      {/* Success state */}
      {success ? (
        <div className="space-y-5">
          <div className="flex gap-3 bg-green-50 border border-green-200 rounded-lg p-4">
            <span className="size-4 rounded-full bg-green-500 shrink-0 mt-0.5 flex items-center justify-center">
              <svg viewBox="0 0 12 12" fill="none" className="size-3">
                <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <div>
              <p className="text-sm font-medium text-green-800">Password updated!</p>
              <p className="text-xs text-green-600 mt-0.5">
                Your password has been changed. You can now sign in.
              </p>
            </div>
          </div>
          <Link
            href="/login"
            className="w-full py-2.5 bg-[#2459c8] text-white text-sm font-semibold rounded-lg flex items-center justify-center gap-2 cursor-pointer transition-colors"
          >
            Go to Sign In <ArrowRight className="size-4" />
          </Link>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="reset-password"
              className="block text-sm font-medium text-gray-700 mb-1.5"
            >
              New Password
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
                <Lock className="size-4 text-gray-400" />
              </span>
              <input
                id="reset-password"
                type="password"
                name="password"
                placeholder="••••••••"
                required
                minLength={8}
                disabled={!hasToken}
                className={inputCls}
              />
            </div>
            <p className="mt-1 text-[11px] text-gray-400">Minimum 8 characters</p>
          </div>

          <div>
            <label
              htmlFor="reset-confirm"
              className="block text-sm font-medium text-gray-700 mb-1.5"
            >
              Confirm New Password
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
                <ShieldCheck className="size-4 text-gray-400" />
              </span>
              <input
                id="reset-confirm"
                type="password"
                name="confirmPassword"
                placeholder="••••••••"
                required
                disabled={!hasToken}
                className={inputCls}
              />
            </div>
          </div>

          <ul className="text-xs text-gray-400 space-y-1 list-disc list-inside">
            <li>At least 8 characters long</li>
            <li>Use a mix of letters, numbers and symbols</li>
            <li>Avoid using your email or name</li>
          </ul>

          <button
            id="reset-submit"
            type="submit"
            disabled={!hasToken || loading}
            className="w-full py-2.5 bg-[#2459c8] text-white text-sm font-semibold rounded-lg flex items-center justify-center gap-2 cursor-pointer transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <span className="size-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Updating…
              </>
            ) : (
              <>
                Update Password <ArrowRight className="size-4" />
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
