"use client";

import React from "react";
import { AlertCircle, Loader2, CheckCircle2, Trash2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Issue {
  id: string;
  title: string;
  description: string;
  category: string;
  status: string;
  reporter: string;
  date: string;
}

interface IssueCardProps {
  issue: Issue;
  isCR: boolean;
  onUpdateStatus: (newStatus: string) => void;
  onDelete: () => void;
}

export default function IssueCard({
  issue,
  isCR,
  onUpdateStatus,
  onDelete,
}: IssueCardProps) {
  return (
    <Card className="rounded-xl border border-border shadow-none bg-white">
      <CardContent className="p-6 space-y-4">
        {/* Header meta */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground font-semibold">
              Category: <span className="text-foreground">{issue.category}</span>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span
              className={cn(
                "inline-flex items-center gap-1 text-[10px] font-bold px-2.5 py-0.5 rounded-full tracking-wider",
                issue.status === "PENDING" && "bg-amber-100 text-amber-700",
                issue.status === "IN_PROGRESS" && "bg-blue-100 text-blue-700",
                issue.status === "RESOLVED" && "bg-green-100 text-green-700"
              )}
            >
              {issue.status === "PENDING" && <AlertCircle className="size-3" />}
              {issue.status === "IN_PROGRESS" && <Loader2 className="size-3 animate-spin" />}
              {issue.status === "RESOLVED" && <CheckCircle2 className="size-3" />}
              {issue.status.replace("_", " ")}
            </span>
          </div>
        </div>

        {/* Title & Desc */}
        <div className="space-y-2">
          <h3 className="text-base font-bold text-foreground font-[family-name:var(--font-besley)]">
            {issue.title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {issue.description}
          </p>
        </div>

        {/* Actions & Footer */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-3 border-t border-muted/60">
          <div className="text-xs text-muted-foreground">
            Reported by: <span className="font-semibold text-foreground">{issue.reporter}</span> • {issue.date}
          </div>

          <div className="flex items-center justify-between sm:justify-end gap-2.5">
            {/* CR Actions */}
            {isCR && issue.status !== "RESOLVED" && (
              <>
                {issue.status === "PENDING" && (
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => onUpdateStatus("IN_PROGRESS")}
                    className="h-8 text-xs cursor-pointer"
                  >
                    Start Investigation
                  </Button>
                )}
                <Button
                  size="sm"
                  onClick={() => onUpdateStatus("RESOLVED")}
                  className="bg-[#2459c8] text-white h-8 text-xs cursor-pointer"
                >
                  Mark Resolved
                </Button>
              </>
            )}

            {/* Student delete own reports */}
            {!isCR && issue.reporter === "Rakib Hossain" && (
              <button
                onClick={onDelete}
                className="text-muted-foreground hover:text-red-600 transition-colors p-1.5 rounded-lg cursor-pointer hover:bg-red-50"
                aria-label="Remove issue report"
              >
                <Trash2 className="size-4" />
              </button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
