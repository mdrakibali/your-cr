import React from "react";
import { Navbar } from "@/components/common/navbar";
import { Footer } from "@/components/common/footer";
import { MainLayoutProps } from "@/types/layout";

// Layout wrapper for landing and marketing pages
export default function MainLayout({ children }: MainLayoutProps): React.JSX.Element {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
