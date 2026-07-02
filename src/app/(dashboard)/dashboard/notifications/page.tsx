import NotificationsList from "@/components/dashboard/notifications-list";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Notifications",
  description: "Log of active updates and reminders",
};

export default function NotificationsPage() {
  return <NotificationsList />;
}
