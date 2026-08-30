"use client";

import React, { createContext, useContext, useState } from "react";
import { Sidebar } from "@/components/common/sidebar";
import { MobileSidebar } from "@/components/common/mobile-sidebar";
import { DashboardHeader } from "@/components/common/dashboard-header";
import { DashboardContextType, DashboardLayoutWrapperProps } from "@/types/layout";

const DashboardContext = createContext<DashboardContextType>({ role: "STUDENT" });

export const useDashboard = () => useContext(DashboardContext);

// Dashboard layout wrapping sidebar, header, and main content view
export function DashboardLayoutWrapper({
  role,
  children,
}: DashboardLayoutWrapperProps): React.JSX.Element {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <DashboardContext.Provider value={{ role }}>
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
            <div className="max-w-[1440px] mx-auto w-full px-4 py-6 sm:px-6 sm:py-7 md:px-12 md:py-8 lg:px-16 xl:px-20 2xl:px-[100px] 2xl:py-10">
              {children}
            </div>
          </main>
        </div>
      </div>
    </DashboardContext.Provider>
  );
}

export default DashboardLayoutWrapper;
