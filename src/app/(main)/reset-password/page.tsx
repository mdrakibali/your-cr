import type { Metadata } from "next";
import React from "react";
import HomePage from "@/app/(main)/page";
import ResetPasswordForm from "@/components/auth/reset-password-form";
import { AuthModal } from "@/components/auth/auth-modal";

export const metadata: Metadata = {
  title: "Reset Password | YourCR",
  description: "Set a new password for your YourCR account",
};

// Reset password page rendering auth modal over landing page
export default function ResetPasswordPage(): React.JSX.Element {
  return (
    <>
      <HomePage />
      <AuthModal>
        <ResetPasswordForm />
      </AuthModal>
    </>
  );
}

