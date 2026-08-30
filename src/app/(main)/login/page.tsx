import type { Metadata } from "next";
import React from "react";
import HomePage from "@/app/(main)/page";
import LoginForm from "@/components/auth/login-form";
import { AuthModal } from "@/components/auth/auth-modal";

export const metadata: Metadata = {
  title: "Login | YourCR",
  description: "Sign in to your YourCR CR account",
};

// Login page rendering auth modal over landing page
export default function LoginPage(): React.JSX.Element {
  return (
    <>
      <HomePage />
      <AuthModal>
        <LoginForm />
      </AuthModal>
    </>
  );
}

