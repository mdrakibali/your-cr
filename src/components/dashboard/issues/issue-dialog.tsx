"use client";

import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { issueSchema, type IssueFormData } from "@/validation/dashboard";

interface IssueDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: IssueFormData) => void;
}

export default function IssueDialog({
  isOpen,
  onClose,
  onSubmit,
}: IssueDialogProps) {
  const form = useForm<IssueFormData>({
    resolver: zodResolver(issueSchema),
    shouldFocusError: true,
    defaultValues: { title: "", description: "", category: "" },
  });

  useEffect(() => {
    if (isOpen) {
      form.reset({ title: "", description: "", category: "" });
    }
  }, [isOpen, form]);

  const handleFormSubmit = (data: IssueFormData) => {
    onSubmit(data);
    form.reset();
  };

  return (
    <Dialog open={isOpen} onOpenChange={(o) => !o && onClose()}>
      {/* Spacious dialog content container (sm:max-w-2xl) */}
      <DialogContent className="bg-white sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle className="font-[family-name:var(--font-besley)] text-lg">
            File Classroom Issue
          </DialogTitle>
          <DialogDescription>
            Report a schedule conflict, class resource issue, or exam clash.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleFormSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel>Short Summary</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="e.g. Reschedule Clash with Lab" aria-invalid={!!fieldState.error} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="h-10 w-full">
                        <SelectValue placeholder="Select issue category" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Routine Conflict">Routine Conflict / Clash</SelectItem>
                      <SelectItem value="Facility/Resource">Lab / Classroom Facility</SelectItem>
                      <SelectItem value="Syllabus/Course">Syllabus / Credit Hours Issues</SelectItem>
                      <SelectItem value="Others">Others</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel>Detailed Explanation</FormLabel>
                  <FormControl>
                    <Textarea {...field} rows={4} placeholder="Describe the routine conflict or problem in detail..." aria-invalid={!!fieldState.error} className="resize-none" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <DialogFooter className="pt-2">
              <Button type="button" variant="outline" onClick={onClose} className="cursor-pointer">
                Cancel
              </Button>
              <Button type="submit" className="bg-[#2459c8] text-white cursor-pointer">
                Submit Report
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
// Let's resolve the `DialogProps &` type definition type checking issue by removing unused types from imports/parameters.
