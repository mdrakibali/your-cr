"use client";

import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import { MobileMenuProps } from "@/types/navigation";

// Mobile navigation dropdown drawer
export function MobileMenu({
  isOpen,
  onClose,
  navigationItems,
  pathname,
}: MobileMenuProps): React.JSX.Element | null {
  if (!isOpen) return null;

  return (
    <div className="absolute left-0 right-0 top-16 border-b border-gray-100 bg-white p-5 animate-in slide-in-from-top duration-200 md:hidden z-40">
      <nav className="flex flex-col gap-4">
        {navigationItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className={`text-base font-semibold transition-colors py-2 border-b border-gray-50 ${
                isActive ? "text-primary" : "text-gray-600"
              }`}
            >
              {item.name}
            </Link>
          );
        })}
        {/* Mobile Action Buttons inside drawer */}
        <div className="flex flex-col gap-3 pt-2">
          <Link href="/login" onClick={onClose} className="w-full">
            <Button
              variant="default"
              className="w-full font-bold text-primary bg-white border border-primary rounded-md h-11 text-sm transition-all hover:bg-primary hover:text-white cursor-pointer"
            >
              Login
            </Button>
          </Link>
          <Link href="/register" onClick={onClose} className="w-full">
            <Button className="w-full font-bold bg-primary text-white rounded-md h-11 text-sm transition-all cursor-pointer">
              Register as CR
            </Button>
          </Link>
        </div>
      </nav>
    </div>
  );
}
