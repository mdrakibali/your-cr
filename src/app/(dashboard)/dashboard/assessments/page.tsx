import AssessmentsList from "@/components/dashboard/assessments-list";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Assessments Deadlines",
  description: "Deadlines tracker for assignments, exams, and sessional tasks",
};

export default function AssessmentsPage() {
  return <AssessmentsList />;
}
