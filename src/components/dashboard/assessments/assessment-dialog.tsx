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
import { assessmentSchema, type AssessmentFormData } from "@/validation/dashboard";

interface AssessmentDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: AssessmentFormData) => void;
}

export default function AssessmentDialog({
  isOpen,
  onClose,
  onSubmit,
}: AssessmentDialogProps) {
  const form = useForm<AssessmentFormData>({
    resolver: zodResolver(assessmentSchema),
    shouldFocusError: true,
    defaultValues: { title: "", subject: "", type: "ASSIGNMENT", dueDate: "", dueTime: "", description: "" },
  });

  useEffect(() => {
    if (isOpen) {
      form.reset({ title: "", subject: "", type: "ASSIGNMENT", dueDate: "", dueTime: "", description: "" });
    }
  }, [isOpen, form]);

  const handleFormSubmit = (data: AssessmentFormData) => {
    onSubmit(data);
    form.reset();
  };

  return (
    <Dialog open={isOpen} onOpenChange={(o) => !o && onClose()}>
      {/* Spacious dialog content container (sm:max-w-2xl) */}
      <DialogContent className="bg-white sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle className="font-[family-name:var(--font-besley)] text-lg">
            Create Sessional Assessment
          </DialogTitle>
          <DialogDescription>
            Assign new tasks, quizzes, or exams with deadlines.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleFormSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel>Assessment Title</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="e.g. Lab Project submission" aria-invalid={!!fieldState.error} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="subject"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel>Course / Subject</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="e.g. CSE-301 (DBMS)" aria-invalid={!!fieldState.error} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Assessment Type</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="h-10 w-full">
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="ASSIGNMENT">Assignment</SelectItem>
                        <SelectItem value="QUIZ">Quiz / MCQ Test</SelectItem>
                        <SelectItem value="EXAM">Midterm / Exam</SelectItem>
                        <SelectItem value="LAB">Lab Sessional Task</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="dueDate"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel>Deadline Date</FormLabel>
                    <FormControl>
                      <Input {...field} type="date" aria-invalid={!!fieldState.error} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="dueTime"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel>Deadline Time</FormLabel>
                    <FormControl>
                      <Input {...field} type="time" aria-invalid={!!fieldState.error} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="description"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel>Instructions (Optional)</FormLabel>
                  <FormControl>
                    <Textarea {...field} rows={3} placeholder="Syllabus chapters or reference submission guidelines..." aria-invalid={!!fieldState.error} className="resize-none" />
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
                Save Deadline
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
