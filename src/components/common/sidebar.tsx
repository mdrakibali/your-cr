"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  GraduationCap,
  Users,
  BookOpen,
  Calendar,
  User,
  Bell,
  Megaphone,
  AlertCircle,
  Presentation,
  ClipboardList,
  LogOut,
  School,
} from "lucide-react";

type Role = "CR" | "STUDENT";

interface SidebarProps {
  role: Role;
  className?: string;
  onItemClick?: () => void;
}

export const NAV_ITEMS = [
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

export default function Sidebar({ role, className, onItemClick }: SidebarProps) {
  const pathname = usePathname();

  const filteredItems = NAV_ITEMS.filter((item) => item.roles.includes(role));

  return (
    <aside
      className={cn(
        "flex flex-col w-64 bg-white border-r border-border h-full min-h-screen",
        className
      )}
    >
      {/* Brand Header */}
      <div className="h-16 flex items-center px-6 border-b border-border">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-[#2459c8] font-bold text-xl font-[family-name:var(--font-besley)]">
            YourCR
          </span>
          <span className="text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded-full font-semibold">
            {role}
          </span>
        </Link>
      </div>

      {/* Nav Links */}
      <nav className="flex-1 px-4 py-6 space-y-1.5 overflow-y-auto">
        {filteredItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onItemClick}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors cursor-pointer",
                isActive
                  ? "bg-[#2459c8] text-white"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              <Icon className="size-4 shrink-0" />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* Sidebar Footer / Logout */}
      <div className="p-4 border-t border-border">
        <button
          onClick={() => {
            // handle logout
            window.location.href = "/login";
          }}
          className="flex w-full items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-red-600 hover:bg-red-50 hover:text-red-700 transition-colors cursor-pointer"
        >
          <LogOut className="size-4 shrink-0" />
          <span>Sign Out</span>
        </button>
      </div>
    </aside>
  );
}
