// Navigation item interface for header links
export interface NavigationItem {
  name: string;
  href: string;
}

// Props for mobile menu drawer
export interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navigationItems: NavigationItem[];
  pathname: string;
}

