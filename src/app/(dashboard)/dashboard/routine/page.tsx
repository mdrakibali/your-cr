import RoutineView from "@/components/dashboard/routine-view";
import { getDashboardRole } from "@/lib/auth-helper";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Class Routine",
  description: "Weekly class schedule routine tracker",
};

export default async function RoutinePage() {
  const role = await getDashboardRole();
  return <RoutineView role={role} />;
}
