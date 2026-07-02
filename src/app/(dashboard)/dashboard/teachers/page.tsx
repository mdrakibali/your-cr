import TeachersList from "@/components/dashboard/teachers-list";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Teachers Directory",
  description: "Directory of class instructors and professors",
};

export default function TeachersPage() {
  return <TeachersList />;
}
