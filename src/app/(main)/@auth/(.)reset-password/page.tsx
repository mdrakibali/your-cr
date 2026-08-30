import React from "react";
import ResetPasswordForm from "@/components/auth/reset-password-form";
import { AuthModal } from "@/components/auth/auth-modal";

// Intercepted password reset modal route
export default function InterceptedResetPasswordPage(): React.JSX.Element {
  return (
    <AuthModal>
      <ResetPasswordForm />
    </AuthModal>
  );
}

