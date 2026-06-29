"use client";

import { ArrowRight, Lock, Mail } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const inputCls =
  "w-full px-3 py-2.5 text-sm border border-[oklch(0.922_0_0)] rounded-lg text-gray-900 placeholder:text-gray-400 bg-white outline-none focus:border-[#2459c8] transition-colors";

export default function LoginForm() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // TODO: handle login logic
    setTimeout(() => setLoading(false), 1500);
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
          Welcome back
        </h1>
        <p className="text-sm text-gray-500">
          Sign in to your CR account to continue
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Email */}
        <div>
          <label
            htmlFor="login-email"
            className="block text-sm font-medium text-gray-700 mb-1.5"
          >
            Email address
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
              <Mail className="size-4 text-gray-400" />
            </span>
            <input
              id="login-email"
              type="email"
              name="email"
              placeholder="you@example.com"
              autoComplete="email"
              required
              className={`${inputCls} pl-10`}
            />
          </div>
        </div>

        {/* Password */}
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label
              htmlFor="login-password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <Link
              href="/forgot-password"
              className="text-xs text-[#2459c8] font-medium"
            >
              Forgot password?
            </Link>
          </div>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
              <Lock className="size-4 text-gray-400" />
            </span>
            <input
              id="login-password"
              type="password"
              name="password"
              placeholder="••••••••"
              autoComplete="current-password"
              required
              className={`${inputCls} pl-10`}
            />
          </div>
        </div>

        {/* Remember me */}
        <div className="flex items-center gap-2.5">
          <input
            id="login-remember"
            type="checkbox"
            name="remember"
            className="size-4 rounded border-gray-300 accent-[#2459c8] cursor-pointer"
          />
          <label
            htmlFor="login-remember"
            className="text-sm text-gray-600 cursor-pointer select-none"
          >
            Keep me signed in
          </label>
        </div>

        {/* Submit */}
        <button
          id="login-submit"
          type="submit"
          disabled={loading}
          className="w-full py-2.5 bg-[#2459c8] text-white text-sm font-semibold rounded-lg flex items-center justify-center gap-2 cursor-pointer transition-colors disabled:opacity-60"
        >
          {loading ? (
            <>
              <span className="size-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Signing in…
            </>
          ) : (
            <>
              Sign In <ArrowRight className="size-4" />
            </>
          )}
        </button>
      </form>

      {/* Divider */}
      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-[oklch(0.922_0_0)]" />
        </div>
        <div className="relative flex justify-center">
          <span className="bg-white px-3 text-xs text-gray-400">or</span>
        </div>
      </div>

      {/* Register link */}
      <div className="text-center border border-[oklch(0.922_0_0)] rounded-lg py-4 px-5">
        <p className="text-sm text-gray-600">Want to join as a Class Representative?</p>
        <Link
          href="/register"
          className="inline-flex items-center gap-1.5 text-[#2459c8] text-sm font-semibold mt-1"
        >
          Register as CR <ArrowRight className="size-3.5" />
        </Link>
      </div>

      <p className="text-center text-xs text-gray-400 mt-5 leading-relaxed">
        Only approved CRs can sign in to this portal.
      </p>
    </div>
  );
}
