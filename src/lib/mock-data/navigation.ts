import {
  AlertCircle,
  Bell,
  BookOpen,
  Calendar,
  ClipboardList,
  GraduationCap,
  LayoutDashboard,
  Megaphone,
  Presentation,
  School,
  User,
  Users,
} from "lucide-react";
import { DashboardNavItem } from "@/types/navigation";

// Dashboard navigation menu items
export const DASHBOARD_NAV_ITEMS: DashboardNavItem[] = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
    roles: ["CR", "STUDENT"],
  },
  {
    name: "Routine",
    href: "/dashboard/routine",
    icon: Calendar,
    roles: ["CR", "STUDENT"],
  },
  {
    name: "Assessments",
    href: "/dashboard/assessments",
    icon: ClipboardList,
    roles: ["CR", "STUDENT"],
  },
  {
    name: "Notice",
    href: "/dashboard/notice",
    icon: Megaphone,
    roles: ["CR", "STUDENT"],
  },
  {
    name: "Issues",
    href: "/dashboard/issues",
    icon: AlertCircle,
    roles: ["CR", "STUDENT"],
  },
  {
    name: "Teachers",
    href: "/dashboard/teachers",
    icon: GraduationCap,
    roles: ["CR", "STUDENT"],
  },
  {
    name: "Students",
    href: "/dashboard/students",
    icon: Users,
    roles: ["CR", "STUDENT"],
  },
  {
    name: "Subjects",
    href: "/dashboard/subjects",
    icon: BookOpen,
    roles: ["CR", "STUDENT"],
  },
  {
    name: "Classes",
    href: "/dashboard/classes",
    icon: Presentation,
    roles: ["CR", "STUDENT"],
  },
  {
    name: "Academic Info",
    href: "/dashboard/academic",
    icon: School,
    roles: ["CR", "STUDENT"],
  },
  {
    name: "Notifications",
    href: "/dashboard/notifications",
    icon: Bell,
    roles: ["CR", "STUDENT"],
  },
  {
    name: "Profile",
    href: "/dashboard/profile",
    icon: User,
    roles: ["CR", "STUDENT"],
  },
];

// Alias for compatibility
export const NAV_ITEMS = DASHBOARD_NAV_ITEMS;

