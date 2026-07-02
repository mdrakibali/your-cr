"use client";

import React from "react";
import { Trash2, CheckCircle2, AlertCircle, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Student {
  id: string;
  name: string;
  roll: string;
  email: string;
  phone: string;
  status: string;
  avatar?: string;
}

interface StudentCardProps {
  student: Student;
  isCR: boolean;
  onDelete: () => void;
}

export default function StudentCard({
  student,
  isCR,
  onDelete,
}: StudentCardProps) {
  const isSelf = student.name === "Rakib Hossain";
  const initials = student.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <>
      {/* Desktop row layout inside table */}
      <tr className="hidden md:table-row hover:bg-muted/10 transition-colors">
        <td className="p-4">
          <div className="flex items-center gap-3">
            {student.avatar ? (
              <img
                src={student.avatar}
                alt={student.name}
                className="size-10 rounded-full object-cover border border-border shrink-0"
              />
            ) : (
              <div className="size-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xs shrink-0">
                {initials}
              </div>
            )}
            <span className="font-semibold text-foreground text-sm">{student.name}</span>
          </div>
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
              onClick={onDelete}
              className="text-red-500 hover:text-red-700 hover:bg-red-50 cursor-pointer"
              disabled={isSelf} // disable deleting self
            >
              <Trash2 className="size-4" />
            </Button>
          </td>
        )}
      </tr>

      {/* Mobile Card Layout */}
      <div className="p-5 space-y-3 bg-white border-b border-border md:hidden">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {student.avatar ? (
              <img
                src={student.avatar}
                alt={student.name}
                className="size-12 rounded-full object-cover border border-border shrink-0"
              />
            ) : (
              <div className="size-12 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-base shrink-0">
                {initials}
              </div>
            )}
            <div>
              <p className="font-bold text-foreground text-base">{student.name}</p>
              <p className="text-xs text-muted-foreground font-mono mt-0.5">{student.roll}</p>
            </div>
          </div>
          <span
            className={cn(
              "inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0",
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

        {isCR && !isSelf && (
          <div className="flex justify-end pt-2">
            <Button
              variant="outline"
              size="sm"
              onClick={onDelete}
              className="flex items-center gap-1 text-red-600 hover:bg-red-50 border-red-200 hover:text-red-700 cursor-pointer"
            >
              <Trash2 className="size-3.5" /> Remove Student
            </Button>
          </div>
        )}
      </div>
    </>
  );
}
