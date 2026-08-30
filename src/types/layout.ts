import React from "react";
import { Role } from "@/types/navigation";

// Main marketing layout props including parallel authModal slot
export interface MainLayoutProps {
  children: React.ReactNode;
  authModal?: React.ReactNode;
}

// Dashboard context type
export interface DashboardContextType {
  role: Role;
}

// Dashboard layout wrapper props
export interface DashboardLayoutWrapperProps {
  role: Role;
  children: React.ReactNode;
}

// Dashboard top header props
export interface DashboardHeaderProps {
  role?: Role;
  onMenuClick: () => void;
}

// Global error page props
export interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}
