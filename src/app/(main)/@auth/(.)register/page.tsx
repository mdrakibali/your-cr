import React from "react";
import RegisterForm from "@/components/auth/register-form";
import { AuthModal } from "@/components/auth/auth-modal";

// Intercepted registration modal route
export default function InterceptedRegisterPage(): React.JSX.Element {
  return (
    <AuthModal>
      <RegisterForm />
    </AuthModal>
  );
}

