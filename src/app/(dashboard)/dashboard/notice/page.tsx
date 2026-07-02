import NoticeBoard from "@/components/dashboard/notice-board";
import { getDashboardRole } from "@/lib/auth-helper";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Class Notices",
  description: "Chronological noticeboard of sessional updates",
};

export default async function NoticePage() {
  const role = await getDashboardRole();
  return <NoticeBoard role={role} />;
}
