"use client";

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ClipboardList, Plus, Trash2, Calendar, CheckSquare, Square, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
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
import { cn } from "@/lib/utils";

interface AssessmentsListProps {
  role: "CR" | "STUDENT";
}

const INITIAL_ASSESSMENTS = [
  {
    id: "1",
    title: "Database Sessional Group Project",
    subject: "CSE-301 (DBMS)",
    type: "ASSIGNMENT", // ASSIGNMENT, QUIZ, EXAM, LAB
    dueDate: "2026-07-15",
    dueTime: "23:59",
    description: "Submit sessional database schema diagram and normalization design document via drive.",
  },
  {
    id: "2",
    title: "Computer Networks MCQ Test",
    subject: "CSE-302 (Networks)",
    type: "QUIZ",
    dueDate: "2026-07-08",
    dueTime: "11:00",
    description: "Chapters 1-3. Quiz duration 30 minutes in Room 405.",
  },
  {
    id: "3",
    title: "Software Engineering Midterm",
    subject: "CSE-303 (SE)",
    type: "EXAM",
    dueDate: "2026-07-20",
    dueTime: "10:00",
    description: "Written theoretical test. Complete syllabus up to software process models.",
  },
];

export default function AssessmentsList({ role }: AssessmentsListProps) {
  const isCR = role === "CR";
  const [assessments, setAssessments] = useState(INITIAL_ASSESSMENTS);
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [checkedIds, setCheckedIds] = useState<string[]>([]);

  const form = useForm<AssessmentFormData>({
    resolver: zodResolver(assessmentSchema),
    shouldFocusError: true,
    defaultValues: { title: "", subject: "", type: "ASSIGNMENT", dueDate: "", dueTime: "", description: "" },
  });

  const onSubmit = (data: AssessmentFormData) => {
    setAssessments([
      ...assessments,
      {
        id: String(assessments.length + 1),
        ...data,
        description: data.description ?? "",
      },
    ]);
    setIsAddOpen(false);
    form.reset();
  };

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to remove this assessment?")) {
      setAssessments(assessments.filter((a) => a.id !== id));
    }
  };

  const toggleCheck = (id: string) => {
    if (checkedIds.includes(id)) {
      setCheckedIds(checkedIds.filter((x) => x !== id));
    } else {
      setCheckedIds([...checkedIds, id]);
    }
  };

  // Helper to calculate days remaining
  const getDaysRemaining = (dueDateStr: string) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const due = new Date(dueDateStr);
    due.setHours(0, 0, 0, 0);
    
    const diffTime = due.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays < 0) return "Overdue";
    if (diffDays === 0) return "Today";
    if (diffDays === 1) return "Tomorrow";
    return `${diffDays} days left`;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-foreground font-[family-name:var(--font-besley)]">
            Assessments Tracker
          </h2>
          <p className="text-sm text-muted-foreground mt-0.5">
            {isCR
              ? "Publish sessional deadlines, lab tasks, or midterm exams."
              : "Check your active assignments and countdowns. Mark items done when submitted."}
          </p>
        </div>
        {isCR && (
          <Button
            onClick={() => setIsAddOpen(true)}
            className="bg-[#2459c8] text-white cursor-pointer h-10 w-full sm:w-auto"
          >
            <Plus className="size-4 mr-1.5" /> Add Assessment
          </Button>
        )}
      </div>

      {/* Grid of assessments */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {assessments.map((a) => {
          const isDone = checkedIds.includes(a.id);
          const daysLeft = getDaysRemaining(a.dueDate);
          const isOverdue = daysLeft === "Overdue";

          return (
            <Card
              key={a.id}
              className={cn(
                "rounded-xl border shadow-none transition-all",
                isDone
                  ? "border-green-200 bg-green-50/5 opacity-75"
                  : isOverdue
                  ? "border-red-200 bg-red-50/5"
                  : "border-border hover:border-[#2459c8]/20 bg-white"
              )}
            >
              <CardContent className="p-6 space-y-4">
                {/* Meta details */}
                <div className="flex items-center justify-between gap-3">
                  <span
                    className={cn(
                      "text-[9px] font-bold px-2 py-0.5 rounded-full tracking-wider",
                      a.type === "ASSIGNMENT" && "bg-blue-100 text-blue-700",
                      a.type === "QUIZ" && "bg-purple-100 text-purple-700",
                      a.type === "EXAM" && "bg-red-100 text-red-700",
                      a.type === "LAB" && "bg-amber-100 text-amber-700"
                    )}
                  >
                    {a.type}
                  </span>

                  <span
                    className={cn(
                      "text-[10px] font-bold px-2 py-0.5 rounded-full",
                      isDone
                        ? "bg-green-100 text-green-700"
                        : isOverdue
                        ? "bg-red-100 text-red-700 animate-pulse"
                        : "bg-muted text-muted-foreground"
                    )}
                  >
                    {isDone ? "Done" : daysLeft}
                  </span>
                </div>

                {/* Title / Info */}
                <div className="flex items-start gap-3">
                  {/* Mark done checkbox for student */}
                  {!isCR && (
                    <button
                      onClick={() => toggleCheck(a.id)}
                      className="text-muted-foreground hover:text-[#2459c8] mt-1 transition-colors shrink-0 cursor-pointer"
                      aria-label="Toggle completion status"
                    >
                      {isDone ? (
                        <CheckSquare className="size-5 text-green-600 fill-green-50/50" />
                      ) : (
                        <Square className="size-5" />
                      )}
                    </button>
                  )}

                  <div className="space-y-1">
                    <h4
                      className={cn(
                        "text-base font-bold text-foreground leading-snug",
                        isDone && "line-through text-muted-foreground"
                      )}
                    >
                      {a.title}
                    </h4>
                    <p className="text-xs font-semibold text-[#2459c8]">{a.subject}</p>
                  </div>
                </div>

                {/* Description */}
                {a.description && (
                  <p className="text-xs text-muted-foreground leading-relaxed pl-0 sm:pl-8">
                    {a.description}
                  </p>
                )}

                {/* Footer timings */}
                <div className="flex items-center justify-between gap-4 pt-3 border-t border-muted/60 pl-0 sm:pl-8">
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Calendar className="size-3.5" />
                    <span>Due: {a.dueDate}</span>
                    <Clock className="size-3.5 ml-1.5" />
                    <span>{a.dueTime}</span>
                  </div>

                  {isCR && (
                    <button
                      onClick={() => handleDelete(a.id)}
                      className="text-muted-foreground hover:text-red-600 transition-colors p-1.5 rounded-lg cursor-pointer hover:bg-red-50"
                      aria-label="Remove assessment"
                    >
                      <Trash2 className="size-4" />
                    </button>
                  )}
                </div>
              </CardContent>
            </Card>
          );
        })}

        {assessments.length === 0 && (
          <div className="text-center py-16 border border-dashed border-border rounded-xl bg-white col-span-2">
            <ClipboardList className="size-8 text-muted-foreground mx-auto mb-2" />
            <p className="text-sm font-semibold text-foreground">No assessments listed</p>
            <p className="text-xs text-muted-foreground mt-1">There are no assignments, quizzes, or exams scheduled.</p>
          </div>
        )}
      </div>

      {/* Add Assessment Dialog */}
      <Dialog open={isAddOpen} onOpenChange={(o) => {
        setIsAddOpen(o);
        if (!o) form.reset();
      }}>
        <DialogContent className="bg-white max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="font-[family-name:var(--font-besley)]">Create Sessional Assessment</DialogTitle>
            <DialogDescription>
              Assign new tasks, quizzes, or exams with deadlines.
            </DialogDescription>
          </DialogHeader>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
                <Button type="button" variant="outline" onClick={() => setIsAddOpen(false)} className="cursor-pointer">
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
    </div>
  );
}
