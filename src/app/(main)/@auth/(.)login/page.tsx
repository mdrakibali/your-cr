import React from "react";
import LoginForm from "@/components/auth/login-form";
import { AuthModal } from "@/components/auth/auth-modal";

// Intercepted login modal route
export default function InterceptedLoginPage(): React.JSX.Element {
  return (
    <AuthModal>
      <LoginForm />
    </AuthModal>
  );
}

