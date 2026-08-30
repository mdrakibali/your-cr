import { LucideIcon } from "lucide-react";
// User role type
export type Role = "CR" | "STUDENT";

// Navigation item interface for marketing header links
export interface NavigationItem {
  name: string;
  href: string;
}

// Props for mobile marketing menu drawer
export interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navigationItems: NavigationItem[];
  pathname: string;
}

// Dashboard navigation item interface
export interface DashboardNavItem {
  name: string;
  href: string;
  icon: LucideIcon;
  roles: Role[];
}

// Dashboard desktop sidebar props
export interface SidebarProps {
  role: Role;
  className?: string;
  onItemClick?: () => void;
}

// Dashboard mobile sidebar props
export interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  role: Role;
}
