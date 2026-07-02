import SubjectsList from "@/components/dashboard/subjects-list";
import { getDashboardRole } from "@/lib/auth-helper";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Course Subjects",
  description: "Curriculum subjects registered in the current term",
};

export default async function SubjectsPage() {
  const role = await getDashboardRole();
  return <SubjectsList role={role} />;
}
