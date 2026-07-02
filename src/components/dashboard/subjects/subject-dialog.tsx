"use client";

import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { subjectSchema, type SubjectFormData } from "@/validation/dashboard";

interface SubjectDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: SubjectFormData) => void;
  title: string;
  description: string;
  defaultValues?: SubjectFormData | null;
}

export default function SubjectDialog({
  isOpen,
  onClose,
  onSubmit,
  title,
  description,
  defaultValues,
}: SubjectDialogProps) {
  const form = useForm<SubjectFormData>({
    resolver: zodResolver(subjectSchema),
    shouldFocusError: true,
    defaultValues: { code: "", title: "", credits: "", teacher: "" },
  });

  useEffect(() => {
    if (isOpen) {
      if (defaultValues) {
        form.reset(defaultValues);
      } else {
        form.reset({ code: "", title: "", credits: "", teacher: "" });
      }
    }
  }, [isOpen, defaultValues, form]);

  const handleFormSubmit = (data: SubjectFormData) => {
    onSubmit(data);
    form.reset();
  };

  return (
    <Dialog open={isOpen} onOpenChange={(o) => !o && onClose()}>
      {/* Spacious dialog content container (sm:max-w-2xl) */}
      <DialogContent className="bg-white sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle className="font-[family-name:var(--font-besley)] text-lg">
            {title}
          </DialogTitle>
          <DialogDescription>
            {description}
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleFormSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="code"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel>Subject Code</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="e.g. CSE-303" aria-invalid={!!fieldState.error} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="title"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel>Subject Title</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="e.g. Software Engineering" aria-invalid={!!fieldState.error} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="credits"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel>Credit Hours</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="e.g. 3.0 or 1.5" aria-invalid={!!fieldState.error} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="teacher"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel>Assigned Instructor</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="e.g. Kamrul Hasan" aria-invalid={!!fieldState.error} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <DialogFooter className="pt-2">
              <Button type="button" variant="outline" onClick={onClose} className="cursor-pointer">
                Cancel
              </Button>
              <Button type="submit" className="bg-[#2459c8] text-white cursor-pointer">
                Save Subject
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
