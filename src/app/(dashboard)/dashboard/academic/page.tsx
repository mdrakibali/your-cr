import AcademicInfo from "@/components/dashboard/academic-info";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Academic Information",
  description: "View sessional batch statistics and switch academic intakes",
};

export default function AcademicPage() {
  return <AcademicInfo />;
}
