import IssuesTracker from "@/components/dashboard/issues-tracker";
import { getDashboardRole } from "@/lib/auth-helper";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Classroom Issues",
  description: "Track and report routine conflicts or classroom sessional issues",
};

export default async function IssuesPage() {
  const role = await getDashboardRole();
  return <IssuesTracker role={role} />;
}
