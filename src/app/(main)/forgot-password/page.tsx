import type { Metadata } from "next";
import React from "react";
import HomePage from "@/app/(main)/page";

export const metadata: Metadata = {
  title: "Forgot Password | YourCR",
  description: "Recover your YourCR account password",
};

// Direct forgot password route matching parallel @authModal slot
export default function ForgotPasswordPage(): React.JSX.Element {
  return <HomePage />;
}
