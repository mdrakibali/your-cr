import SubjectsList from "@/components/dashboard/subjects-list";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Semester Subjects",
  description: "Semester course list and credit hours overview",
};

export default function SubjectsPage() {
  return <SubjectsList />;
}
