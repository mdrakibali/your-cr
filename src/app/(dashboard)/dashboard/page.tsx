import Overview from "@/components/dashboard/overview";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard Overview",
  description: "Overview of your class statistics, routine adjustments, and notices",
};

export default function DashboardPage() {
  return <Overview />;
}
