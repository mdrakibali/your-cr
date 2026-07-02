import ClassesView from "@/components/dashboard/classes-view";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Classroom Configurations",
  description: "Active class metadata configurations",
};

export default function ClassesPage() {
  return <ClassesView />;
}
