"use client";

import React, { useState } from "react";
import Sidebar from "@/components/common/sidebar";
import MobileSidebar from "@/components/common/mobile-sidebar";
import DashboardHeader from "@/components/common/dashboard-header";

interface DashboardLayoutWrapperProps {
  role: "CR" | "STUDENT";
  children: React.ReactNode;
}

export default function DashboardLayoutWrapper({
  role,
  children,
}: DashboardLayoutWrapperProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50 text-foreground">
      {/* Desktop Sidebar (hidden on mobile, visible on lg) */}
      <Sidebar role={role} className="hidden lg:flex shrink-0 h-full" />

      {/* Mobile Drawer Sidebar */}
      <MobileSidebar
        role={role}
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        {/* Header */}
        <DashboardHeader
          role={role}
          onMenuClick={() => setMobileMenuOpen(true)}
        />

        {/* Dynamic Page Scroll Content */}
        <main className="flex-1 overflow-y-auto focus:outline-none">
          {/* Dashboard Outer Container following max-width rules */}
          <div className="max-w-[1440px] mx-auto w-full px-4 py-6 sm:px-12 sm:py-8 md:px-24 md:py-10">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
