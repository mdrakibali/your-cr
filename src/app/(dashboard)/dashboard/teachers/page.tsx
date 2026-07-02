import TeachersList from "@/components/dashboard/teachers-list";
import { getDashboardRole } from "@/lib/auth-helper";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Teachers Directory",
  description: "Directory of class instructors and professors",
};

export default async function TeachersPage() {
  const role = await getDashboardRole();
  return <TeachersList role={role} />;
}
