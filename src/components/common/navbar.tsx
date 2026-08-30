"use client";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "./logo";
import MobileMenu from "./mobile-menu";

const navigationItems = [
  { name: "Home", href: "/" },
  { name: "Features", href: "/#features" },
  { name: "How It Works", href: "/#how-it-works" },
  { name: "FAQ", href: "/#faq" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white">
      <div className="container flex h-16 lg:h-18 2xl:h-20 items-center justify-between gap-3 sm:gap-4">
        {/* Logo */}
        <Logo />
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-6 2xl:gap-8">
          {navigationItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-xs lg:text-sm 2xl:text-base font-medium 2xl:font-semibold transition-colors hover:text-primary ${
                  isActive ? "text-primary font-bold" : "text-gray-600"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Action Buttons */}
        <div className="hidden md:flex items-center gap-2.5 lg:gap-3.5 2xl:gap-4 shrink-0">
          <Link href="/login">
            <Button
              variant="default"
              className="font-semibold 2xl:font-bold text-primary bg-white border border-primary rounded-md px-4 lg:px-6 2xl:px-8 h-9 lg:h-10 2xl:h-11 text-xs lg:text-xs 2xl:text-sm transition-all hover:bg-white cursor-pointer"
            >
              Login
            </Button>
          </Link>
          <Link href="/register">
            <Button className="font-semibold 2xl:font-bold bg-primary text-white rounded-md px-3.5 lg:px-4.5 2xl:px-5 h-9 lg:h-10 2xl:h-11 text-xs lg:text-xs 2xl:text-sm transition-all cursor-pointer">
              Register as CR
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="flex items-center justify-center text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer md:hidden shrink-0"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="size-6" />
          ) : (
            <Menu className="size-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navigationItems={navigationItems}
        pathname={pathname}
      />
    </header>
  );
}
