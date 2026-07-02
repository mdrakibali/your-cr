"use client";

import { usePathname } from "next/navigation";
import { Menu, Bell, User as UserIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NAV_ITEMS } from "./sidebar";
import Link from "next/link";

interface DashboardHeaderProps {
  role: "CR" | "STUDENT";
  onMenuClick: () => void;
}

export default function DashboardHeader({ role, onMenuClick }: DashboardHeaderProps) {
  const pathname = usePathname();

  // Find active nav item name
  const activeNavItem = NAV_ITEMS.find((item) => item.href === pathname);
  const pageTitle = activeNavItem ? activeNavItem.name : "Dashboard";

  return (
    <header className="h-16 border-b border-border bg-white flex items-center justify-between px-4 sm:px-6 md:px-8 shrink-0">
      {/* Left side: Hamburger & Title */}
      <div className="flex items-center gap-3 sm:gap-4">
        <button
          onClick={onMenuClick}
          className="lg:hidden p-2 rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground focus:outline-none cursor-pointer"
          aria-label="Open menu"
        >
          <Menu className="size-5" />
        </button>

        <h1 className="text-lg sm:text-xl font-semibold text-foreground font-[family-name:var(--font-besley)]">
          {pageTitle}
        </h1>
      </div>

      {/* Right side: Notifications & User profile */}
      <div className="flex items-center gap-3 sm:gap-4">
        {/* Notifications Icon Link */}
        <Link
          href="/dashboard/notifications"
          className="relative p-2 rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground cursor-pointer"
        >
          <Bell className="size-5" />
          <span className="absolute top-1 right-1 size-2 bg-red-500 rounded-full" />
        </Link>

        {/* User Info Card */}
        <div className="flex items-center gap-2 border-l border-border pl-3 sm:pl-4">
          <div className="hidden sm:block text-right">
            <p className="text-xs font-semibold text-foreground leading-none">
              Rakib Hossain
            </p>
            <p className="text-[10px] text-muted-foreground leading-none mt-1">
              Class of 2026 • Section A
            </p>
          </div>
          <Link
            href="/dashboard/profile"
            className="size-8 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors cursor-pointer"
          >
            <UserIcon className="size-4" />
          </Link>
        </div>
      </div>
    </header>
  );
}
