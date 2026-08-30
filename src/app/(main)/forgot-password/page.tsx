import type { Metadata } from "next";
import React from "react";
import HomePage from "@/app/(main)/page";
import ForgotPasswordForm from "@/components/auth/forgot-password-form";
import { AuthModal } from "@/components/auth/auth-modal";

export const metadata: Metadata = {
  title: "Forgot Password | YourCR",
  description: "Recover your YourCR account password",
};

// Forgot password page rendering auth modal over landing page
export default function ForgotPasswordPage(): React.JSX.Element {
  return (
    <>
      <HomePage />
      <AuthModal>
        <ForgotPasswordForm />
      </AuthModal>
    </>
  );
}

