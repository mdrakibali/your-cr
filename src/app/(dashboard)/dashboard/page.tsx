import Overview from "@/components/dashboard/overview";
import { getDashboardRole } from "@/lib/auth-helper";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard Overview",
  description: "Overview of your class statistics, routine adjustments, and notices",
};

export default async function DashboardPage() {
  const role = await getDashboardRole();
  return <Overview role={role} />;
}
