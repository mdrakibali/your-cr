"use client";

import React from "react";
import { Edit, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Subject {
  id: string;
  code: string;
  title: string;
  credits: string;
  teacher: string;
}

interface SubjectCardProps {
  subject: Subject;
  isCR: boolean;
  onEdit: () => void;
  onDelete: () => void;
}

export default function SubjectCard({
  subject,
  isCR,
  onEdit,
  onDelete,
}: SubjectCardProps) {
  return (
    <div className="bg-white border border-border rounded-xl p-5 flex flex-col justify-between hover:border-[#2459c8]/30 transition-colors">
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
      )}
    </div>
  );
}
