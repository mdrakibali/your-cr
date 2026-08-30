import React from "react";
import ForgotPasswordForm from "@/components/auth/forgot-password-form";
import { AuthModal } from "@/components/auth/auth-modal";

// Intercepted forgot password modal route
export default function InterceptedForgotPasswordPage(): React.JSX.Element {
  return (
    <AuthModal>
      <ForgotPasswordForm />
    </AuthModal>
  );
}

