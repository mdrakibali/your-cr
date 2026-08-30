import type { Metadata } from "next";
import React from "react";
import HomePage from "@/app/(main)/page";
import RegisterForm from "@/components/auth/register-form";
import { AuthModal } from "@/components/auth/auth-modal";

export const metadata: Metadata = {
  title: "Register as CR | YourCR",
  description: "Create your Class Representative account on YourCR",
};

// Register page rendering auth modal over landing page
export default function RegisterPage(): React.JSX.Element {
  return (
    <>
      <HomePage />
      <AuthModal>
        <RegisterForm />
      </AuthModal>
    </>
  );
}

