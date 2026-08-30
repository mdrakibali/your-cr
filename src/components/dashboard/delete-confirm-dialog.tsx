"use client";

import { AlertTriangle } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { DeleteConfirmDialogProps } from "@/types/common";

// Modal dialog confirming permanent item deletion
export function DeleteConfirmDialog({
  isOpen,
  onClose,
  onConfirm,
  title = "Delete Item",
  description = "Are you sure you want to delete this item? This action cannot be undone.",
  confirmText = "Delete",
  loading = false,
}: DeleteConfirmDialogProps): React.JSX.Element {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="bg-white sm:max-w-[440px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-red-600 font-[family-name:var(--font-besley)]">
            <AlertTriangle className="size-5 shrink-0" />
            <span>{title}</span>
          </DialogTitle>
          <DialogDescription className="pt-2">
            {description}
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className="mt-4">
          <Button
            type="button"
            variant="outline"
            onClick={onClose}
            disabled={loading}
            className="cursor-pointer"
          >
            Cancel
          </Button>
          <Button
            type="button"
            onClick={onConfirm}
            disabled={loading}
            className="bg-red-600 hover:bg-red-700 text-white cursor-pointer"
          >
            {loading ? (
              <>
                <span className="size-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-1.5" />
                Deleting…
              </>
            ) : (
              confirmText
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default DeleteConfirmDialog;
