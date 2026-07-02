"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Presentation, Plus, Edit, Trash2, ShieldAlert, Award, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
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
import { toast } from "sonner";
import { useDashboard } from "./dashboard-layout-wrapper";
import DeleteConfirmDialog from "./delete-confirm-dialog";

const classParamsSchema = z.object({
  department: z.string().min(1, "Department is required"),
  program: z.string().min(1, "Program / Course is required"),
  batch: z.string().min(1, "Batch / intake year is required"),
  section: z.string().min(1, "Section / shift is required"),
  term: z.string().min(1, "Current term is required"),
});

type ClassParamsFormData = z.infer<typeof classParamsSchema>;

const INITIAL_CLASSES = [
  {
    id: "1",
    department: "Computer Science & Engineering",
    program: "B.Sc in CSE",
    batch: "2023-2027",
    section: "Section A",
    term: "6th Semester",
  },
  {
    id: "2",
    department: "Computer Science & Engineering",
    program: "B.Sc in CSE",
    batch: "2023-2027",
    section: "Section B",
    term: "6th Semester",
  },
];

export default function ClassesView() {
  const { role } = useDashboard();
  const isCR = role === "CR";

  const [classesList, setClassesList] = useState(INITIAL_CLASSES);
  const [activeClassId, setActiveClassId] = useState("1");
  
  // Modals state
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [editingClass, setEditingClass] = useState<any | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const form = useForm<ClassParamsFormData>({
    resolver: zodResolver(classParamsSchema),
    shouldFocusError: true,
    defaultValues: { department: "", program: "", batch: "", section: "", term: "" },
  });

  const onAddSubmit = (data: ClassParamsFormData) => {
    const newClass = {
      id: String(Date.now()),
      ...data,
    };
    setClassesList([...classesList, newClass]);
    setIsAddOpen(false);
    toast.success("New classroom profile created!");
  };

  const onEditSubmit = (data: ClassParamsFormData) => {
    if (!editingClass) return;
    setClassesList(
      classesList.map((c) => (c.id === editingClass.id ? { ...c, ...data } : c))
    );
    setEditingClass(null);
    toast.success("Classroom parameters updated!");
  };

  const confirmDelete = () => {
    if (!deletingId) return;
    if (deletingId === activeClassId) {
      toast.error("Cannot delete the active selected classroom!");
      setDeletingId(null);
      return;
    }
    setClassesList(classesList.filter((c) => c.id !== deletingId));
    setDeletingId(null);
    toast.success("Classroom profile removed!");
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-foreground font-[family-name:var(--font-besley)]">
            Classroom Profiles
          </h2>
          <p className="text-sm text-muted-foreground mt-0.5">
            Manage sessional batches and toggle active classroom scopes.
          </p>
        </div>
        {isCR && (
          <Button
            onClick={() => {
              form.reset({ department: "", program: "", batch: "", section: "", term: "" });
              setIsAddOpen(true);
            }}
            className="bg-[#2459c8] text-white cursor-pointer h-10 w-full sm:w-auto rounded-md"
          >
            <Plus className="size-4 mr-1.5" /> Create Class Profile
          </Button>
        )}
      </div>

      {/* Grid of Class Profiles */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {classesList.map((cls) => {
          const isActive = cls.id === activeClassId;
          return (
            <Card
              key={cls.id}
              className={`rounded-md border shadow-none transition-all cursor-pointer bg-white ${
                isActive
                  ? "border-[#2459c8] ring-1 ring-[#2459c8]/20"
                  : "border-border hover:border-primary/20"
              }`}
              onClick={() => setActiveClassId(cls.id)}
            >
              <CardHeader className="p-5 pb-2">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-2.5">
                    <div className={`size-8 rounded-md flex items-center justify-center ${isActive ? 'bg-primary/10 text-primary' : 'bg-muted text-muted-foreground'}`}>
                      <Presentation className="size-4.5" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-foreground leading-none">{cls.section}</p>
                      <p className="text-[11px] text-muted-foreground mt-1">{cls.program}</p>
                    </div>
                  </div>
                  {isActive && (
                    <span className="text-[9px] font-bold px-2 py-0.5 bg-green-100 text-green-700 rounded-md">
                      Active View
                    </span>
                  )}
                </div>
              </CardHeader>
              <CardContent className="p-5 pt-2 space-y-3">
                <div className="space-y-1 text-xs text-muted-foreground">
                  <p>Department: <span className="font-semibold text-foreground">{cls.department}</span></p>
                  <p>Academic Term: <span className="font-semibold text-foreground">{cls.term}</span></p>
                  <p>Batch Scope: <span className="font-semibold text-foreground">{cls.batch}</span></p>
                </div>

                {isCR && (
                  <div className="flex justify-end gap-2 pt-2 border-t border-muted/50" onClick={(e) => e.stopPropagation()}>
                    <Button
                      variant="ghost"
                      size="icon-sm"
                      onClick={() => {
                        form.reset(cls);
                        setEditingClass(cls);
                      }}
                      className="text-muted-foreground hover:text-foreground cursor-pointer rounded-md"
                    >
                      <Edit className="size-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon-sm"
                      onClick={() => setDeletingId(cls.id)}
                      disabled={isActive}
                      className="text-red-500 hover:text-red-700 hover:bg-red-50 cursor-pointer rounded-md"
                    >
                      <Trash2 className="size-4" />
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>

      {!isCR && (
        <div className="flex gap-2.5 bg-muted/40 border border-border rounded-md p-3.5 text-xs text-muted-foreground leading-normal items-start max-w-2xl">
          <ShieldAlert className="size-4 text-muted-foreground shrink-0 mt-0.5" />
          <span>
            Only Class Representatives have write access to create or modify active classroom settings profiles.
          </span>
        </div>
      )}

      {/* Add Dialog */}
      <Dialog open={isAddOpen} onOpenChange={(o) => !o && setIsAddOpen(false)}>
        <DialogContent className="bg-white sm:max-w-xl rounded-md">
          <DialogHeader>
            <DialogTitle className="font-[family-name:var(--font-besley)]">Create Class Profile</DialogTitle>
            <DialogDescription>
              Configure section parameters, batch ranges, and term indexes.
            </DialogDescription>
          </DialogHeader>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onAddSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="department"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel>Department Name</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="e.g. Computer Science & Engineering" aria-invalid={!!fieldState.error} className="rounded-md" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="program"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel>Program / Course</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="e.g. B.Sc in CSE" aria-invalid={!!fieldState.error} className="rounded-md" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="batch"
                  render={({ field, fieldState }) => (
                    <FormItem>
                      <FormLabel>Batch / Intake Year</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="e.g. 2023-2027" aria-invalid={!!fieldState.error} className="rounded-md" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="section"
                  render={({ field, fieldState }) => (
                    <FormItem>
                      <FormLabel>Section / shift</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="e.g. Section A" aria-invalid={!!fieldState.error} className="rounded-md" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="term"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel>Current Term Index</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="e.g. 6th Semester" aria-invalid={!!fieldState.error} className="rounded-md" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <DialogFooter className="pt-2">
                <Button type="button" variant="outline" onClick={() => setIsAddOpen(false)} className="rounded-md cursor-pointer">
                  Cancel
                </Button>
                <Button type="submit" className="bg-[#2459c8] text-white rounded-md cursor-pointer">
                  Create Profile
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>

      {/* Edit Dialog */}
      <Dialog open={editingClass !== null} onOpenChange={(o) => !o && setEditingClass(null)}>
        <DialogContent className="bg-white sm:max-w-xl rounded-md">
          <DialogHeader>
            <DialogTitle className="font-[family-name:var(--font-besley)]">Edit Class Profile</DialogTitle>
            <DialogDescription>
              Modify configuration variables for this classroom profile.
            </DialogDescription>
          </DialogHeader>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onEditSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="department"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel>Department Name</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="e.g. Computer Science & Engineering" aria-invalid={!!fieldState.error} className="rounded-md" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="program"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel>Program / Course</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="e.g. B.Sc in CSE" aria-invalid={!!fieldState.error} className="rounded-md" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="batch"
                  render={({ field, fieldState }) => (
                    <FormItem>
                      <FormLabel>Batch / Intake Year</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="e.g. 2023-2027" aria-invalid={!!fieldState.error} className="rounded-md" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="section"
                  render={({ field, fieldState }) => (
                    <FormItem>
                      <FormLabel>Section / shift</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="e.g. Section A" aria-invalid={!!fieldState.error} className="rounded-md" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="term"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel>Current Term Index</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="e.g. 6th Semester" aria-invalid={!!fieldState.error} className="rounded-md" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <DialogFooter className="pt-2">
                <Button type="button" variant="outline" onClick={() => setEditingClass(null)} className="rounded-md cursor-pointer">
                  Cancel
                </Button>
                <Button type="submit" className="bg-[#2459c8] text-white rounded-md cursor-pointer">
                  Save Changes
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <DeleteConfirmDialog
        isOpen={deletingId !== null}
        onClose={() => setDeletingId(null)}
        onConfirm={confirmDelete}
        title="Remove Classroom Profile"
        description="Are you sure you want to remove this classroom profile? This action will permanently delete all metadata config."
      />
    </div>
  );
}
