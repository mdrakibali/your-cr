"use client";

import { X } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useCallback, useEffect } from "react";
import { AuthModalProps } from "@/types/auth";

// Intercepted modal container wrapping authentication forms on top of the landing page
export function AuthModal({ children }: AuthModalProps): React.JSX.Element {
  const router = useRouter();

  // Dismiss modal and navigate back to the previous page / home
  const handleClose = useCallback(() => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push("/");
    }
  }, [router]);

  // Handle ESC key press to dismiss modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto">
      {/* Backdrop overlay */}
      <div
        role="presentation"
        onClick={handleClose}
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
      />

      {/* Modal Dialog Content Box */}
      <div className="relative z-10 w-full max-w-[460px] sm:max-w-[500px] my-auto max-h-[88vh] overflow-y-auto rounded-2xl bg-white shadow-2xl border border-gray-100 animate-in zoom-in-95 duration-200">
        {/* Close Button positioned in top-right */}
        <button
          type="button"
          onClick={handleClose}
          className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 z-30 size-8 sm:size-8.5 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-900 transition-colors flex items-center justify-center cursor-pointer focus:outline-none"
          aria-label="Close dialog"
        >
          <X className="size-4 sm:size-4.5" />
        </button>

        {children}
      </div>
    </div>
  );
}

export default AuthModal;
