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

  return (
    <>
      {/* Desktop row layout inside table */}
      <tr className="hidden md:table-row hover:bg-muted/10 transition-colors">
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
