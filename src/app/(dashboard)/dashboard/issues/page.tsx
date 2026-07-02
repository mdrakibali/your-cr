import IssuesTracker from "@/components/dashboard/issues-tracker";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Classroom Issues",
  description: "Track and report routine conflicts or classroom sessional issues",
};

export default function IssuesPage() {
  return <IssuesTracker />;
}
