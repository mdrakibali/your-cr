import React from "react";
import { AuthModal } from "@/components/auth/auth-modal";

interface AuthModalLayoutProps {
  children: React.ReactNode;
}

// Modal wrapper layout for all auth parallel routes
export default function AuthModalLayout({
  children,
}: AuthModalLayoutProps): React.JSX.Element {
  return <AuthModal>{children}</AuthModal>;
}

