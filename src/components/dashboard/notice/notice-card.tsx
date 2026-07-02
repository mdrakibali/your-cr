"use client";

import React from "react";
import { Link as LinkIcon, Calendar, Trash2, Pin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface Notice {
  id: string;
  title: string;
  body: string;
  date: string;
  priority: string;
  attachmentUrl: string;
  author: string;
}

interface NoticeCardProps {
  notice: Notice;
  isCR: boolean;
  onDelete: () => void;
}

export default function NoticeCard({
  notice,
  isCR,
  onDelete,
}: NoticeCardProps) {
  return (
    <Card className="rounded-md border border-border shadow-none bg-white">
      <CardContent className="p-6 space-y-4">
        {/* Card Meta info */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span
              className={cn(
                "text-[9px] font-bold px-2 py-0.5 rounded-md tracking-wider",
                notice.priority === "URGENT"
                  ? "bg-red-100 text-red-700"
                  : notice.priority === "IMPORTANT"
                  ? "bg-amber-100 text-amber-700"
                  : "bg-blue-100 text-blue-700"
              )}
            >
              {notice.priority}
            </span>
            {notice.priority === "URGENT" && (
              <Pin className="size-3 text-red-500 fill-red-500" />
            )}
          </div>

          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Calendar className="size-3.5" />
            <span>{notice.date}</span>
          </div>
        </div>

        {/* Title & Body */}
        <div className="space-y-2">
          <h3 className="text-base font-bold text-foreground font-[family-name:var(--font-besley)]">
            {notice.title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
            {notice.body}
          </p>
        </div>

        {/* Attachments / Footer */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-3 border-t border-muted/60">
          <div>
            {notice.attachmentUrl ? (
              <a
                href={notice.attachmentUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[#2459c8] font-semibold hover:underline"
              >
                <LinkIcon className="size-3.5" /> View Reference File
              </a>
            ) : (
              <span className="text-xs text-muted-foreground/70">No attachments linked</span>
            )}
          </div>

          <div className="flex items-center justify-between sm:justify-end gap-4">
            <span className="text-xs font-semibold text-foreground">
              Posted by: {notice.author}
            </span>

            {isCR && (
              <button
                onClick={onDelete}
                className="text-muted-foreground hover:text-red-600 transition-colors p-1 rounded-md cursor-pointer hover:bg-red-50"
                aria-label="Remove notice"
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
