"use client";

import React from "react";
import { CheckSquare, Square, Calendar, Clock, Trash2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface Assessment {
  id: string;
  title: string;
  subject: string;
  type: string;
  dueDate: string;
  dueTime: string;
  description: string;
}

interface AssessmentCardProps {
  assessment: Assessment;
  isCR: boolean;
  isDone: boolean;
  isOverdue: boolean;
  daysLeft: string;
  onToggleCheck: () => void;
  onDelete: () => void;
}

export default function AssessmentCard({
  assessment,
  isCR,
  isDone,
  isOverdue,
  daysLeft,
  onToggleCheck,
  onDelete,
}: AssessmentCardProps) {
  return (
    <Card
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
              assessment.type === "ASSIGNMENT" && "bg-blue-100 text-blue-700",
              assessment.type === "QUIZ" && "bg-purple-100 text-purple-700",
              assessment.type === "EXAM" && "bg-red-100 text-red-700",
              assessment.type === "LAB" && "bg-amber-100 text-amber-700"
            )}
          >
            {assessment.type}
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
              onClick={onToggleCheck}
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
                "text-base font-bold text-foreground leading-snug font-[family-name:var(--font-besley)]",
                isDone && "line-through text-muted-foreground"
              )}
            >
              {assessment.title}
            </h4>
            <p className="text-xs font-semibold text-[#2459c8]">{assessment.subject}</p>
          </div>
        </div>

        {/* Description */}
        {assessment.description && (
          <p className="text-xs text-muted-foreground leading-relaxed pl-0 sm:pl-8">
            {assessment.description}
          </p>
        )}

        {/* Footer timings */}
        <div className="flex items-center justify-between gap-4 pt-3 border-t border-muted/60 pl-0 sm:pl-8">
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Calendar className="size-3.5" />
            <span>Due: {assessment.dueDate}</span>
            <Clock className="size-3.5 ml-1.5" />
            <span>{assessment.dueTime}</span>
          </div>

          {isCR && (
            <button
              onClick={onDelete}
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
}
