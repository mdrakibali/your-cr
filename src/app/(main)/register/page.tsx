import type { Metadata } from "next";
import React from "react";
import HomePage from "@/app/(main)/page";

export const metadata: Metadata = {
  title: "Register as CR | YourCR",
  description: "Create your Class Representative account on YourCR",
};

// Direct register route matching parallel @authModal slot
export default function RegisterPage(): React.JSX.Element {
  return <HomePage />;
}
