"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Plus, Mail, Phone, Trash2, CheckCircle2, AlertCircle } from "lucide-react";
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
import { studentInviteSchema, type StudentInviteFormData } from "@/validation/dashboard";
import { cn } from "@/lib/utils";

interface StudentsListProps {
  role: "CR" | "STUDENT";
}

const INITIAL_STUDENTS = [
  {
    id: "1",
    name: "Rakib Hossain",
    roll: "CSE-05201024",
    email: "rakib.cse@university.edu",
    phone: "+880 1711-223344",
    status: "ACTIVE", // ACTIVE or INVITED
  },
  {
    id: "2",
    name: "Afsana Mimi",
    roll: "CSE-05201025",
    email: "mimi.afsana@university.edu",
    phone: "+880 1819-334455",
    status: "ACTIVE",
  },
  {
    id: "3",
    name: "Jamil Ahmed",
    roll: "CSE-05201026",
    email: "jamil.ahmed@university.edu",
    phone: "+880 1912-556677",
    status: "INVITED",
  },
];

export default function StudentsList({ role }: StudentsListProps) {
  const isCR = role === "CR";
  const [students, setStudents] = useState(INITIAL_STUDENTS);
  const [isOpen, setIsOpen] = useState(false);

  const form = useForm<StudentInviteFormData>({
    resolver: zodResolver(studentInviteSchema),
    shouldFocusError: true,
    defaultValues: { name: "", roll: "", email: "", phone: "" },
  });

  const onSubmit = (data: StudentInviteFormData) => {
    setStudents([
      ...students,
      {
        id: String(students.length + 1),
        ...data,
        status: "INVITED",
      },
    ]);
    setIsOpen(false);
    form.reset();
  };

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to remove this student?")) {
      setStudents(students.filter((s) => s.id !== id));
    }
  };

  return (
    <div className="space-y-6">
      {/* Top action block */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-foreground font-[family-name:var(--font-besley)]">
            Class Roster
          </h2>
          <p className="text-sm text-muted-foreground mt-0.5">
            {isCR
              ? "Manage students and invite new students to join the classroom portal."
              : "List of your classmates in Section A."}
          </p>
        </div>
        {isCR && (
          <Button
            onClick={() => setIsOpen(true)}
            className="bg-[#2459c8] text-white cursor-pointer h-10 w-full sm:w-auto"
          >
            <Plus className="size-4 mr-1.5" /> Invite Student
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
                  Student Name
                </th>
                <th className="p-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Roll / ID
                </th>
                <th className="p-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Email
                </th>
                <th className="p-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Phone
                </th>
                <th className="p-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Status
                </th>
                {isCR && (
                  <th className="p-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider text-right">
                    Actions
                  </th>
                )}
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {students.map((student) => (
                <tr key={student.id} className="hover:bg-muted/10 transition-colors">
                  <td className="p-4 font-semibold text-foreground text-sm">
                    {student.name}
                  </td>
                  <td className="p-4 text-sm text-muted-foreground font-mono">
                    {student.roll}
                  </td>
                  <td className="p-4 text-sm text-foreground/80">
                    {student.email}
                  </td>
                  <td className="p-4 text-sm text-muted-foreground">
                    {student.phone}
                  </td>
                  <td className="p-4">
                    <span
                      className={cn(
                        "inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full",
                        student.status === "ACTIVE"
                          ? "bg-green-100 text-green-700"
                          : "bg-amber-100 text-amber-700"
                      )}
                    >
                      {student.status === "ACTIVE" ? (
                        <>
                          <CheckCircle2 className="size-3" /> Active
                        </>
                      ) : (
                        <>
                          <AlertCircle className="size-3" /> Invited
                        </>
                      )}
                    </span>
                  </td>
                  {isCR && (
                    <td className="p-4 text-right">
                      <Button
                        variant="ghost"
                        size="icon-sm"
                        onClick={() => handleDelete(student.id)}
                        className="text-red-500 hover:text-red-700 hover:bg-red-50 cursor-pointer"
                        disabled={student.name === "Rakib Hossain"} // disable deleting self
                      >
                        <Trash2 className="size-4" />
                      </Button>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile View */}
        <div className="grid grid-cols-1 divide-y divide-border md:hidden">
          {students.map((student) => (
            <div key={student.id} className="p-5 space-y-3 bg-white">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-bold text-foreground text-base">{student.name}</p>
                  <p className="text-xs text-muted-foreground font-mono mt-0.5">{student.roll}</p>
                </div>
                <span
                  className={cn(
                    "inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full",
                    student.status === "ACTIVE"
                      ? "bg-green-100 text-green-700"
                      : "bg-amber-100 text-amber-700"
                  )}
                >
                  {student.status === "ACTIVE" ? "Active" : "Invited"}
                </span>
              </div>

              <div className="space-y-1 text-xs sm:text-sm">
                <p className="text-muted-foreground flex items-center gap-2">
                  <Mail className="size-3.5" /> {student.email}
                </p>
                <p className="text-muted-foreground flex items-center gap-2">
                  <Phone className="size-3.5" /> {student.phone}
                </p>
              </div>

              {isCR && student.name !== "Rakib Hossain" && (
                <div className="flex justify-end pt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleDelete(student.id)}
                    className="flex items-center gap-1 text-red-600 hover:bg-red-50 border-red-200 hover:text-red-700 cursor-pointer"
                  >
                    <Trash2 className="size-3.5" /> Remove Student
                  </Button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Invite Student Dialog */}
      <Dialog open={isOpen} onOpenChange={(o) => {
        setIsOpen(o);
        if (!o) form.reset();
      }}>
        <DialogContent className="bg-white max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="font-[family-name:var(--font-besley)]">Invite Student</DialogTitle>
            <DialogDescription>
              Enter the student&apos;s details to send them a portal invitation.
            </DialogDescription>
          </DialogHeader>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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

              <DialogFooter className="pt-2">
                <Button type="button" variant="outline" onClick={() => setIsOpen(false)} className="cursor-pointer">
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
    </div>
  );
}
