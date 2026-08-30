import type { Metadata } from "next";
import React from "react";
import HomePage from "@/app/(main)/page";

export const metadata: Metadata = {
  title: "Login | YourCR",
  description: "Sign in to your YourCR CR account",
};

// Direct login route matching parallel @authModal slot
export default function LoginPage(): React.JSX.Element {
  return <HomePage />;
}
