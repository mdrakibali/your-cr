"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Plus, BookOpen, Edit, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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

interface SubjectsListProps {
  role: "CR" | "STUDENT";
}

const INITIAL_SUBJECTS = [
  {
    id: "1",
    code: "CSE-301",
    title: "Database Management Systems",
    credits: "3.0",
    teacher: "Dr. Abu Sayeed",
  },
  {
    id: "2",
    code: "CSE-302",
    title: "Computer Networks",
    credits: "3.0",
    teacher: "Farhana Yasmin",
  },
  {
    id: "3",
    code: "CSE-303",
    title: "Software Engineering",
    credits: "3.0",
    teacher: "Kamrul Hasan",
  },
];

export default function SubjectsList({ role }: SubjectsListProps) {
  const isCR = role === "CR";
  const [subjects, setSubjects] = useState(INITIAL_SUBJECTS);
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [editingSubject, setEditingSubject] = useState<SubjectFormData & { id: string } | null>(null);

  const form = useForm<SubjectFormData>({
    resolver: zodResolver(subjectSchema),
    shouldFocusError: true,
    defaultValues: { code: "", title: "", credits: "", teacher: "" },
  });

  const onAddSubmit = (data: SubjectFormData) => {
    setSubjects([
      ...subjects,
      {
        id: String(subjects.length + 1),
        ...data,
      },
    ]);
    setIsAddOpen(false);
    form.reset();
  };

  const onEditSubmit = (data: SubjectFormData) => {
    if (!editingSubject) return;
    setSubjects(
      subjects.map((s) => (s.id === editingSubject.id ? { ...s, ...data } : s))
    );
    setEditingSubject(null);
  };

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this subject?")) {
      setSubjects(subjects.filter((s) => s.id !== id));
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-foreground font-[family-name:var(--font-besley)]">
            Course Curriculum
          </h2>
          <p className="text-sm text-muted-foreground mt-0.5">
            Overview of courses, credit values, and assigned teachers in the current semester.
          </p>
        </div>
        {isCR && (
          <Button
            onClick={() => setIsAddOpen(true)}
            className="bg-[#2459c8] text-white cursor-pointer h-10 w-full sm:w-auto"
          >
            <Plus className="size-4 mr-1.5" /> Add Subject
          </Button>
        )}
      </div>

      {/* Grid structure (Responsive) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {subjects.map((subject) => (
          <div
            key={subject.id}
            className="bg-white border border-border rounded-xl p-5 flex flex-col justify-between hover:border-[#2459c8]/30 transition-colors"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-bold text-[#2459c8] bg-primary/10 px-2 py-0.5 rounded-full">
                  {subject.code}
                </span>
                <span className="text-xs text-muted-foreground font-semibold">
                  {subject.credits} Credits
                </span>
              </div>

              <div>
                <h4 className="font-semibold text-foreground text-sm line-clamp-1">
                  {subject.title}
                </h4>
                <p className="text-xs text-muted-foreground mt-1">
                  Instructor: <span className="font-medium text-foreground">{subject.teacher}</span>
                </p>
              </div>
            </div>

            {isCR && (
              <div className="flex justify-end gap-2 mt-5 pt-3 border-t border-muted/60">
                <Button
                  variant="ghost"
                  size="icon-sm"
                  onClick={() => {
                    setEditingSubject(subject);
                    form.reset(subject);
                  }}
                  className="text-muted-foreground hover:text-foreground cursor-pointer"
                >
                  <Edit className="size-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon-sm"
                  onClick={() => handleDelete(subject.id)}
                  className="text-red-500 hover:text-red-700 hover:bg-red-50 cursor-pointer"
                >
                  <Trash2 className="size-4" />
                </Button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Add Subject Dialog */}
      <Dialog open={isAddOpen} onOpenChange={(o) => {
        setIsAddOpen(o);
        if (!o) form.reset();
      }}>
        <DialogContent className="bg-white max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="font-[family-name:var(--font-besley)]">Add New Subject</DialogTitle>
            <DialogDescription>
              Add a new course curriculum code and assign an instructor to it.
            </DialogDescription>
          </DialogHeader>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onAddSubmit)} className="space-y-4">
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
                <Button type="button" variant="outline" onClick={() => setIsAddOpen(false)} className="cursor-pointer">
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

      {/* Edit Subject Dialog */}
      <Dialog open={editingSubject !== null} onOpenChange={(o) => {
        if (!o) setEditingSubject(null);
      }}>
        <DialogContent className="bg-white max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="font-[family-name:var(--font-besley)]">Edit Subject</DialogTitle>
            <DialogDescription>
              Update course curriculum settings or change the assigned teacher.
            </DialogDescription>
          </DialogHeader>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onEditSubmit)} className="space-y-4">
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
                <Button type="button" variant="outline" onClick={() => setEditingSubject(null)} className="cursor-pointer">
                  Cancel
                </Button>
                <Button type="submit" className="bg-[#2459c8] text-white cursor-pointer">
                  Save Changes
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
