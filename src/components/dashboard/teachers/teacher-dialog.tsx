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
import { teacherSchema, type TeacherFormData } from "@/validation/dashboard";

interface TeacherDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: TeacherFormData) => void;
  title: string;
  description: string;
  defaultValues?: TeacherFormData | null;
}

export default function TeacherDialog({
  isOpen,
  onClose,
  onSubmit,
  title,
  description,
  defaultValues,
}: TeacherDialogProps) {
  const form = useForm<TeacherFormData>({
    resolver: zodResolver(teacherSchema),
    shouldFocusError: true,
    defaultValues: { name: "", designation: "", email: "", phone: "", subject: "" },
  });

  // Reset form when dialog opens or defaults change
  useEffect(() => {
    if (isOpen) {
      if (defaultValues) {
        form.reset(defaultValues);
      } else {
        form.reset({ name: "", designation: "", email: "", phone: "", subject: "" });
      }
    }
  }, [isOpen, defaultValues, form]);

  const handleFormSubmit = (data: TeacherFormData) => {
    onSubmit(data);
    form.reset();
  };

  return (
    <Dialog open={isOpen} onOpenChange={(o) => !o && onClose()}>
      {/* Spacious dialog content container (max-w-2xl) */}
      <DialogContent className="bg-white max-w-2xl">
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
              name="name"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="e.g. Dr. Abu Sayeed" aria-invalid={!!fieldState.error} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="designation"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel>Designation</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="e.g. Professor, Assistant Professor" aria-invalid={!!fieldState.error} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="subject"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel>Assigned Course</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="e.g. Database Management Systems (CSE-301)" aria-invalid={!!fieldState.error} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input {...field} type="email" placeholder="instructor@university.edu" aria-invalid={!!fieldState.error} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input {...field} type="tel" placeholder="+880 1700-000000" aria-invalid={!!fieldState.error} />
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
                Save Instructor
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
