import StudentsList from "@/components/dashboard/students-list";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Class Roster",
  description: "Roster of student profiles and contact information",
};

export default function StudentsPage() {
  return <StudentsList />;
}
