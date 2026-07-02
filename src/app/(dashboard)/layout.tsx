import React from "react";
import { cookies } from "next/headers";
import DashboardLayoutWrapper from "@/components/dashboard/dashboard-layout-wrapper";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "YourCR - Dashboard",
  description: "Class Representative Management Portal",
};

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Read role from cookie or fallback to "CR"
  const cookieStore = await cookies();
  const roleCookie = cookieStore.get("user-role")?.value;
  const role = (roleCookie === "STUDENT" ? "STUDENT" : "CR") as "CR" | "STUDENT";

  return (
    <DashboardLayoutWrapper role={role}>
      {children}
    </DashboardLayoutWrapper>
  );
}
