import type { Metadata } from "next";
import React from "react";
import HomePage from "@/app/(main)/page";

export const metadata: Metadata = {
  title: "Reset Password | YourCR",
  description: "Set a new password for your YourCR account",
};

// Direct reset password route matching parallel @authModal slot
export default function ResetPasswordPage(): React.JSX.Element {
  return <HomePage />;
}
