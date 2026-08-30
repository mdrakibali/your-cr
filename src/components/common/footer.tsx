import { Mail } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Logo } from "@/components/common/logo";
import { GithubIcon, TwitterIcon } from "@/components/shared/icons/social-icons";
import {
  FOOTER_FEATURES_LINKS,
  FOOTER_LEGAL_LINKS,
  FOOTER_SUPPORT_LINKS,
} from "@/lib/mock-data/landing";

// Footer component with brand overview, quick navigation links, and social links
export function Footer(): React.JSX.Element {
  return (
    <footer className="w-full border-t border-gray-100 bg-gray-50/50 py-8 sm:py-10 2xl:py-12">
      <div className="container grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-4">
        {/* Brand Column */}
        <div className="flex flex-col gap-3 sm:gap-4">
          <Logo />
          <p className="text-xs sm:text-sm text-gray-500 leading-relaxed max-w-sm">
            An all-in-one student management and class representative
            coordination tool designed for modern classrooms.
          </p>
          <div className="flex items-center gap-3.5 sm:gap-4 mt-1 sm:mt-2">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              <GithubIcon className="size-4.5 sm:size-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter profile"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              <TwitterIcon className="size-4.5 sm:size-5" />
            </a>
            <a
              href="mailto:support@yourcr.com"
              aria-label="Email support"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              <Mail className="size-4.5 sm:size-5" />
            </a>
          </div>
        </div>

        {/* Features Column */}
        <div>
          <h3 className="text-xs 2xl:text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3 sm:mb-4">
            Features
          </h3>
          <ul className="space-y-2 sm:space-y-2.5">
            {FOOTER_FEATURES_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-xs 2xl:text-sm text-gray-500 hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Support Column */}
        <div>
          <h3 className="text-xs 2xl:text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3 sm:mb-4">
            Support
          </h3>
          <ul className="space-y-2 sm:space-y-2.5">
            {FOOTER_SUPPORT_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-xs 2xl:text-sm text-gray-500 hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal Column */}
        <div>
          <h3 className="text-xs 2xl:text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3 sm:mb-4">
            Legal
          </h3>
          <ul className="space-y-2 sm:space-y-2.5">
            {FOOTER_LEGAL_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-xs 2xl:text-sm text-gray-500 hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container mt-8 sm:mt-10 2xl:mt-12 pt-6 sm:pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4">
        <p className="text-[11px] sm:text-xs text-gray-400">
          &copy; {new Date().getFullYear()} YourCR. All rights reserved.
        </p>
        <p className="text-[11px] sm:text-xs text-gray-400">
          Built with Next.js & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
