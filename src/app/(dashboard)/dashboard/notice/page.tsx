import NoticeBoard from "@/components/dashboard/notice-board";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Class Notices",
  description: "Chronological noticeboard of sessional updates",
};

export default function NoticePage() {
  return <NoticeBoard />;
}
