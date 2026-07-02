"use client";

import { Dialog, DialogContent, DialogPortal, DialogOverlay, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import Sidebar from "./sidebar";
import { X } from "lucide-react";

interface MobileSidebarProps {
  role: "CR" | "STUDENT";
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileSidebar({ role, isOpen, onClose }: MobileSidebarProps) {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogPortal>
        <DialogOverlay className="z-50 bg-black/30 fixed inset-0 backdrop-blur-xs" />
        <DialogContent
          showCloseButton={false}
          className="fixed inset-y-0 left-0 top-0 translate-x-0 translate-y-0 h-full w-64 max-w-[260px] bg-white p-0 rounded-none z-50 duration-200 outline-none flex flex-col border-r border-border shadow-xl data-[open]:animate-none"
        >
          <DialogTitle className="sr-only">Mobile Navigation Menu</DialogTitle>
          <DialogDescription className="sr-only">
            List of routes for your dashboard based on your classroom role.
          </DialogDescription>

          <Sidebar role={role} className="w-full h-full border-r-0" onItemClick={onClose} />

          {/* Close button floating outside the drawer */}
          <button
            onClick={onClose}
            className="absolute top-3 right-[-48px] size-10 flex items-center justify-center bg-white rounded-r-xl border-y border-r border-border shadow-lg focus:outline-none cursor-pointer"
            aria-label="Close menu"
          >
            <X className="size-5 text-gray-700" />
          </button>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
}
