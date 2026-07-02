import StudentsList from "@/components/dashboard/students-list";
import { getDashboardRole } from "@/lib/auth-helper";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Class Roster",
  description: "List of students registered in your class",
};

export default async function StudentsPage() {
  const role = await getDashboardRole();
  return <StudentsList role={role} />;
}
