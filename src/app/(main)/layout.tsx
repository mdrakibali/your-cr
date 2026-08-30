import React from "react";
import { Navbar } from "@/components/common/navbar";
import { Footer } from "@/components/common/footer";
import { MainLayoutProps } from "@/types/layout";

// Layout wrapper for landing, marketing pages, and parallel auth modal slot
export default function MainLayout({
  children,
  auth,
}: MainLayoutProps): React.JSX.Element {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      {auth}
    </div>
  );
}
