import RoutineView from "@/components/dashboard/routine-view";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Class Routine",
  description: "Weekly class schedule routine calendar",
};

export default function RoutinePage() {
  return <RoutineView />;
}
