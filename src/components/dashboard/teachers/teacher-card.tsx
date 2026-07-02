"use client";

import React from "react";
import { Mail, Phone, Edit, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Teacher {
  id: string;
  name: string;
  designation: string;
  email: string;
  phone: string;
  subject: string;
}

interface TeacherCardProps {
  teacher: Teacher;
  isCR: boolean;
  onEdit: () => void;
  onDelete: () => void;
}

export default function TeacherCard({
  teacher,
  isCR,
  onEdit,
  onDelete,
}: TeacherCardProps) {
  return (
    <>
      {/* Desktop row layout inside a table */}
      <tr className="hidden md:table-row hover:bg-muted/10 transition-colors">
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
                onClick={onEdit}
                className="text-muted-foreground hover:text-foreground cursor-pointer"
              >
                <Edit className="size-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon-sm"
                onClick={onDelete}
                className="text-red-500 hover:text-red-700 hover:bg-red-50 cursor-pointer"
              >
                <Trash2 className="size-4" />
              </Button>
            </div>
          </td>
        )}
      </tr>

      {/* Mobile Card Layout */}
      <div className="p-5 space-y-4 bg-white border-b border-border md:hidden">
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
              onClick={onEdit}
              className="flex items-center gap-1 cursor-pointer"
            >
              <Edit className="size-3.5" /> Edit
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={onDelete}
              className="flex items-center gap-1 text-red-600 hover:bg-red-50 border-red-200 hover:text-red-700 cursor-pointer"
            >
              <Trash2 className="size-3.5" /> Delete
            </Button>
          </div>
        )}
      </div>
    </>
  );
}
