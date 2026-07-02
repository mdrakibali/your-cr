"use client";

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Upload, X, User } from "lucide-react";
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
  const [imagePreview, setImagePreview] = useState<string>("");

  const form = useForm<StudentInviteFormData>({
    resolver: zodResolver(studentInviteSchema),
    shouldFocusError: true,
    defaultValues: { name: "", roll: "", email: "", phone: "", avatar: "" },
  });

  useEffect(() => {
    if (isOpen) {
      form.reset({ name: "", roll: "", email: "", phone: "", avatar: "" });
      setImagePreview("");
    }
  }, [isOpen, form]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setImagePreview(base64String);
        form.setValue("avatar", base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  const clearImage = () => {
    setImagePreview("");
    form.setValue("avatar", "");
  };

  const handleFormSubmit = (data: StudentInviteFormData) => {
    onSubmit(data);
    form.reset();
  };

  return (
    <Dialog open={isOpen} onOpenChange={(o) => !o && onClose()}>
      {/* Spacious dialog content container (sm:max-w-3xl) */}
      <DialogContent className="bg-white sm:max-w-3xl">
        <DialogHeader>
          <DialogTitle className="font-[family-name:var(--font-besley)] text-lg">
            Invite Student
          </DialogTitle>
          <DialogDescription>
            Enter the student&apos;s details to send them a portal invitation.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleFormSubmit)} className="space-y-6">
            
            {/* Student Image Uploader */}
            <div className="flex flex-col sm:flex-row items-center gap-4 p-4 border border-border rounded-xl bg-muted/10">
              <div className="relative size-20 rounded-full border border-border bg-white flex items-center justify-center overflow-hidden shrink-0">
                {imagePreview ? (
                  <img src={imagePreview} alt="Preview" className="size-full object-cover" />
                ) : (
                  <User className="size-8 text-muted-foreground" />
                )}
              </div>
              <div className="flex-1 space-y-2 text-center sm:text-left">
                <p className="text-xs font-semibold text-foreground">Student Profile Picture</p>
                <p className="text-[11px] text-muted-foreground">JPG, PNG under 1MB recommended.</p>
                <div className="flex items-center justify-center sm:justify-start gap-2">
                  <label className="cursor-pointer inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#2459c8] hover:bg-[#1a44a1] text-white text-xs font-semibold rounded-lg transition-colors">
                    <Upload className="size-3.5" /> Upload Photo
                    <input type="file" accept="image/*" className="hidden" onChange={handleImageChange} />
                  </label>
                  {imagePreview && (
                    <Button type="button" variant="outline" size="sm" onClick={clearImage} className="h-8 text-red-600 hover:text-red-700 cursor-pointer">
                      <X className="size-3.5" /> Clear
                    </Button>
                  )}
                </div>
              </div>
            </div>

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
