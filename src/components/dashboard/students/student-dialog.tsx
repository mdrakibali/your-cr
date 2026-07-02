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
import { studentInviteSchema, type StudentInviteFormData } from "@/validation/dashboard";

interface StudentDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: StudentInviteFormData) => void;
}

export default function StudentDialog({
  isOpen,
  onClose,
  onSubmit,
}: StudentDialogProps) {
  const form = useForm<StudentInviteFormData>({
    resolver: zodResolver(studentInviteSchema),
    shouldFocusError: true,
    defaultValues: { name: "", roll: "", email: "", phone: "" },
  });

  useEffect(() => {
    if (isOpen) {
      form.reset({ name: "", roll: "", email: "", phone: "" });
    }
  }, [isOpen, form]);

  const handleFormSubmit = (data: StudentInviteFormData) => {
    onSubmit(data);
    form.reset();
  };

  return (
    <Dialog open={isOpen} onOpenChange={(o) => !o && onClose()}>
      {/* Spacious dialog content container (max-w-2xl) */}
      <DialogContent className="bg-white max-w-2xl">
        <DialogHeader>
          <DialogTitle className="font-[family-name:var(--font-besley)] text-lg">
            Invite Student
          </DialogTitle>
          <DialogDescription>
            Enter the student&apos;s details to send them a portal invitation.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleFormSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel>Student Name</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="e.g. Jamil Ahmed" aria-invalid={!!fieldState.error} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="roll"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel>Student Roll / ID</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="e.g. CSE-05201026" aria-invalid={!!fieldState.error} />
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
                      <Input {...field} type="email" placeholder="student.name@university.edu" aria-invalid={!!fieldState.error} />
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
                Send Invitation
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
