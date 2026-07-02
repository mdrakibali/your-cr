import NotificationsList from "@/components/dashboard/notifications-list";
import { getDashboardRole } from "@/lib/auth-helper";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Notifications",
  description: "Log of active updates and reminders",
};

export default async function NotificationsPage() {
  const role = await getDashboardRole();
  return <NotificationsList role={role} />;
}
