import AssessmentsList from "@/components/dashboard/assessments-list";
import { getDashboardRole } from "@/lib/auth-helper";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Assessments Deadlines",
  description: "Deadlines tracker for assignments, exams, and sessional tasks",
};

export default async function AssessmentsPage() {
  const role = await getDashboardRole();
  return <AssessmentsList role={role} />;
}
