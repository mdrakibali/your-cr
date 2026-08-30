"use client";

import { useRouter } from "next/navigation";
import React, { useCallback } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { AuthModalProps } from "@/types/auth";

// Intercepted modal container wrapping authentication forms using Dialog
export function AuthModal({ children }: AuthModalProps): React.JSX.Element {
  const router = useRouter();

  // Dismiss modal and navigate back to the previous page / home
  const handleOpenChange = useCallback(
    (open: boolean) => {
      if (!open) {
        if (window.history.length > 1) {
          router.back();
        } else {
          router.push("/");
        }
      }
    },
    [router]
  );

  return (
    <Dialog open onOpenChange={handleOpenChange}>
      <DialogContent
        className="w-full max-w-[460px] sm:max-w-[500px] p-0 border border-border bg-white rounded-2xl shadow-2xl max-h-[88vh] overflow-y-auto flex flex-col"
        showCloseButton={true}
      >
        <DialogTitle className="sr-only">Authentication</DialogTitle>
        <DialogDescription className="sr-only">
          Sign in or register for YourCR Class Representative account
        </DialogDescription>
        <div className="w-full">
          {children}
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default AuthModal;
