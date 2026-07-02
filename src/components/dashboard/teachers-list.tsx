"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Plus, Mail, Phone, Edit, Trash2, ShieldAlert } from "lucide-react";
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
import { teacherSchema, type TeacherFormData } from "@/validation/dashboard";

interface TeachersListProps {
  role: "CR" | "STUDENT";
}

const INITIAL_TEACHERS = [
  {
    id: "1",
    name: "Dr. Abu Sayeed",
    designation: "Professor & Head",
    email: "sayeed.cse@university.edu",
    phone: "+880 1711-223344",
    subject: "Database Management Systems (CSE-301)",
  },
  {
    id: "2",
    name: "Farhana Yasmin",
    designation: "Assistant Professor",
    email: "farhana.cse@university.edu",
    phone: "+880 1819-334455",
    subject: "Computer Networks (CSE-302)",
  },
  {
    id: "3",
    name: "Kamrul Hasan",
    designation: "Senior Lecturer",
    email: "hasan.kamrul@university.edu",
    phone: "+880 1912-556677",
    subject: "Software Engineering (CSE-303)",
  },
];

export default function TeachersList({ role }: TeachersListProps) {
  const isCR = role === "CR";
  const [teachers, setTeachers] = useState(INITIAL_TEACHERS);
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [editingTeacher, setEditingTeacher] = useState<TeacherFormData & { id: string } | null>(null);

  const form = useForm<TeacherFormData>({
    resolver: zodResolver(teacherSchema),
    shouldFocusError: true,
    defaultValues: { name: "", designation: "", email: "", phone: "", subject: "" },
  });

  const onAddSubmit = (data: TeacherFormData) => {
    setTeachers([
      ...teachers,
      {
        id: String(teachers.length + 1),
        ...data,
      },
    ]);
    setIsAddOpen(false);
    form.reset();
  };

  const onEditSubmit = (data: TeacherFormData) => {
    if (!editingTeacher) return;
    setTeachers(
      teachers.map((t) => (t.id === editingTeacher.id ? { ...t, ...data } : t))
    );
    setEditingTeacher(null);
  };

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to remove this teacher?")) {
      setTeachers(teachers.filter((t) => t.id !== id));
    }
  };

  return (
    <div className="space-y-6">
      {/* Top action block */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-foreground font-[family-name:var(--font-besley)]">
            Class Instructors
          </h2>
          <p className="text-sm text-muted-foreground mt-0.5">
            Contact directory of teachers taking classes in the current term.
          </p>
        </div>
        {isCR && (
          <Button
            onClick={() => setIsAddOpen(true)}
            className="bg-[#2459c8] text-white cursor-pointer h-10 w-full sm:w-auto"
          >
            <Plus className="size-4 mr-1.5" /> Add Teacher
          </Button>
        )}
      </div>

      {/* Roster Layout (Desktop Table, Mobile Cards) */}
      <div className="bg-white border border-border rounded-xl overflow-hidden shadow-none">
        {/* Desktop View */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-muted/40 border-b border-border">
                <th className="p-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Instructor Info
                </th>
                <th className="p-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Subject / Course
                </th>
                <th className="p-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Email
                </th>
                <th className="p-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Phone
                </th>
                {isCR && (
                  <th className="p-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider text-right">
                    Actions
                  </th>
                )}
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {teachers.map((teacher) => (
                <tr key={teacher.id} className="hover:bg-muted/10 transition-colors">
                  <td className="p-4">
                    <p className="font-semibold text-foreground text-sm">{teacher.name}</p>
                    <p className="text-xs text-muted-foreground">{teacher.designation}</p>
                  </td>
                  <td className="p-4 text-sm text-foreground font-medium">
                    {teacher.subject}
                  </td>
                  <td className="p-4 text-sm text-[#2459c8]">
                    <a href={`mailto:${teacher.email}`} className="hover:underline flex items-center gap-1.5">
                      <Mail className="size-3.5" /> {teacher.email}
                    </a>
                  </td>
                  <td className="p-4 text-sm text-muted-foreground">
                    <a href={`tel:${teacher.phone}`} className="hover:text-foreground flex items-center gap-1.5">
                      <Phone className="size-3.5" /> {teacher.phone}
                    </a>
                  </td>
                  {isCR && (
                    <td className="p-4 text-right">
                      <div className="flex items-center justify-end gap-1.5">
                        <Button
                          variant="ghost"
                          size="icon-sm"
                          onClick={() => {
                            setEditingTeacher(teacher);
                            form.reset(teacher);
                          }}
                          className="text-muted-foreground hover:text-foreground cursor-pointer"
                        >
                          <Edit className="size-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon-sm"
                          onClick={() => handleDelete(teacher.id)}
                          className="text-red-500 hover:text-red-700 hover:bg-red-50 cursor-pointer"
                        >
                          <Trash2 className="size-4" />
                        </Button>
                      </div>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile View */}
        <div className="grid grid-cols-1 divide-y divide-border md:hidden">
          {teachers.map((teacher) => (
            <div key={teacher.id} className="p-5 space-y-4 bg-white">
              <div>
                <p className="font-bold text-foreground text-base">{teacher.name}</p>
                <p className="text-xs text-muted-foreground">{teacher.designation}</p>
                <span className="inline-block mt-2 text-xs font-semibold text-[#2459c8] bg-primary/10 px-2 py-0.5 rounded-full">
                  {teacher.subject}
                </span>
              </div>

              <div className="space-y-2 text-sm">
                <a href={`mailto:${teacher.email}`} className="flex items-center gap-2 text-[#2459c8] hover:underline">
                  <Mail className="size-4" /> {teacher.email}
                </a>
                <a href={`tel:${teacher.phone}`} className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
                  <Phone className="size-4" /> {teacher.phone}
                </a>
              </div>

              {isCR && (
                <div className="flex justify-end gap-3 pt-2 border-t border-muted/60">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setEditingTeacher(teacher);
                      form.reset(teacher);
                    }}
                    className="flex items-center gap-1 cursor-pointer"
                  >
                    <Edit className="size-3.5" /> Edit
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleDelete(teacher.id)}
                    className="flex items-center gap-1 text-red-600 hover:bg-red-50 border-red-200 hover:text-red-700 cursor-pointer"
                  >
                    <Trash2 className="size-3.5" /> Delete
                  </Button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Add Teacher Dialog */}
      <Dialog open={isAddOpen} onOpenChange={(o) => {
        setIsAddOpen(o);
        if (!o) form.reset();
      }}>
        <DialogContent className="bg-white max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="font-[family-name:var(--font-besley)]">Add New Instructor</DialogTitle>
            <DialogDescription>
              Provide basic contact details to add this teacher to the classroom directory.
            </DialogDescription>
          </DialogHeader>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onAddSubmit)} className="space-y-4">
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
                      <Input {...field} placeholder="e.g. Software Engineering (CSE-303)" aria-invalid={!!fieldState.error} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

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
                <Button type="button" variant="outline" onClick={() => setIsAddOpen(false)} className="cursor-pointer">
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

      {/* Edit Teacher Dialog */}
      <Dialog open={editingTeacher !== null} onOpenChange={(o) => {
        if (!o) setEditingTeacher(null);
      }}>
        <DialogContent className="bg-white max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="font-[family-name:var(--font-besley)]">Edit Instructor</DialogTitle>
            <DialogDescription>
              Update the contact details or assigned course parameters.
            </DialogDescription>
          </DialogHeader>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onEditSubmit)} className="space-y-4">
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
                      <Input {...field} placeholder="e.g. Software Engineering (CSE-303)" aria-invalid={!!fieldState.error} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

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
                <Button type="button" variant="outline" onClick={() => setEditingTeacher(null)} className="cursor-pointer">
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
