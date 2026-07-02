import ClassesView from "@/components/dashboard/classes-view";
import { getDashboardRole } from "@/lib/auth-helper";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Classroom Configurations",
  description: "Active class metadata configurations",
};

export default async function ClassesPage() {
  const role = await getDashboardRole();
  return <ClassesView role={role} />;
}
