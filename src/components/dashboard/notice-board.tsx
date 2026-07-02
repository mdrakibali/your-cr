"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Megaphone, Plus, Link as LinkIcon, Calendar, Info, Trash2, Pin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
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
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { noticeSchema, type NoticeFormData } from "@/validation/dashboard";
import { cn } from "@/lib/utils";

interface NoticeBoardProps {
  role: "CR" | "STUDENT";
}

const INITIAL_NOTICES = [
  {
    id: "1",
    title: "Rescheduling of Networks Class Today",
    body: "Please note that Farhana Yasmin ma'am has rescheduled today's computer networks class to 02:30 PM. We will meet in Lab 3 instead of Room 405.",
    date: "July 2, 2026",
    priority: "URGENT",
    attachmentUrl: "",
    author: "Rakib Hossain (CR)",
  },
  {
    id: "2",
    title: "Sessional Fee Submission Deadline",
    body: "All students must submit their semester registration card copy and sessional fee receipt by next Monday to the department office.",
    date: "July 1, 2026",
    priority: "IMPORTANT",
    attachmentUrl: "https://university.edu/receipt-format.pdf",
    author: "Rakib Hossain (CR)",
  },
  {
    id: "3",
    title: "Project Guidelines & Groupings",
    body: "Here are the database project grouping guidelines and initial syllabus parameters. Prepare your group of 3-4 members.",
    date: "June 28, 2026",
    priority: "NORMAL",
    attachmentUrl: "https://drive.google.com/db-groups-format",
    author: "Rakib Hossain (CR)",
  },
];

export default function NoticeBoard({ role }: NoticeBoardProps) {
  const isCR = role === "CR";
  const [notices, setNotices] = useState(INITIAL_NOTICES);
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [filter, setFilter] = useState("ALL");

  const form = useForm<NoticeFormData>({
    resolver: zodResolver(noticeSchema),
    shouldFocusError: true,
    defaultValues: { title: "", body: "", priority: "NORMAL", attachmentUrl: "" },
  });

  const onSubmit = (data: NoticeFormData) => {
    setNotices([
      {
        id: String(notices.length + 1),
        ...data,
        date: new Date().toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        }),
        author: "Rakib Hossain (CR)",
      },
      ...notices,
    ]);
    setIsAddOpen(false);
    form.reset();
  };

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to remove this notice?")) {
      setNotices(notices.filter((n) => n.id !== id));
    }
  };

  const filteredNotices = notices.filter((n) =>
    filter === "ALL" ? true : n.priority === filter
  );

  return (
    <div className="space-y-6">
      {/* Top action block */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-foreground font-[family-name:var(--font-besley)]">
            Announcements noticeboard
          </h2>
          <p className="text-sm text-muted-foreground mt-0.5">
            General alerts, updates, and notices published for sessional classes.
          </p>
        </div>
        {isCR && (
          <Button
            onClick={() => setIsAddOpen(true)}
            className="bg-[#2459c8] text-white cursor-pointer h-10 w-full sm:w-auto"
          >
            <Plus className="size-4 mr-1.5" /> Publish Notice
          </Button>
        )}
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 pb-2 border-b border-border">
        {["ALL", "URGENT", "IMPORTANT", "NORMAL"].map((priority) => (
          <button
            key={priority}
            onClick={() => setFilter(priority)}
            className={cn(
              "px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors border cursor-pointer",
              filter === priority
                ? "bg-[#2459c8] border-[#2459c8] text-white"
                : "bg-white border-border text-muted-foreground hover:text-foreground"
            )}
          >
            {priority === "ALL" ? "All Notices" : priority}
          </button>
        ))}
      </div>

      {/* Notices Feed */}
      <div className="space-y-5">
        {filteredNotices.map((notice) => (
          <Card key={notice.id} className="rounded-xl border border-border shadow-none bg-white">
            <CardContent className="p-6 space-y-4">
              {/* Card Meta info */}
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <span
                    className={cn(
                      "text-[9px] font-bold px-2 py-0.5 rounded-full tracking-wider",
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
                <h3 className="text-base font-bold text-foreground">
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
                      onClick={() => handleDelete(notice.id)}
                      className="text-muted-foreground hover:text-red-600 transition-colors p-1 rounded-lg cursor-pointer hover:bg-red-50"
                      aria-label="Remove notice"
                    >
                      <Trash2 className="size-4" />
                    </button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}

        {filteredNotices.length === 0 && (
          <div className="text-center py-16 border border-dashed border-border rounded-xl bg-white">
            <Megaphone className="size-8 text-muted-foreground mx-auto mb-2" />
            <p className="text-sm font-semibold text-foreground">No notices found</p>
            <p className="text-xs text-muted-foreground mt-1">There are no updates listed under this priority.</p>
          </div>
        )}
      </div>

      {/* Add Notice Dialog */}
      <Dialog open={isAddOpen} onOpenChange={(o) => {
        setIsAddOpen(o);
        if (!o) form.reset();
      }}>
        <DialogContent className="bg-white max-w-[540px]">
          <DialogHeader>
            <DialogTitle className="font-[family-name:var(--font-besley)]">Publish Notice</DialogTitle>
            <DialogDescription>
              Broadcast an announcement to the sessional class feed.
            </DialogDescription>
          </DialogHeader>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="title"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel>Notice Title</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="e.g. Schedule Change or Fee submission" aria-invalid={!!fieldState.error} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 gap-4">
                <FormField
                  control={form.control}
                  name="priority"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Priority Level</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="h-10 w-full">
                            <SelectValue placeholder="Select priority" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="NORMAL">Normal — General Updates</SelectItem>
                          <SelectItem value="IMPORTANT">Important — Submission deadlines</SelectItem>
                          <SelectItem value="URGENT">Urgent — Immediate cancellations/reschedules</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="body"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel>Notice Content</FormLabel>
                    <FormControl>
                      <Textarea {...field} rows={5} placeholder="Provide details regarding this notice..." aria-invalid={!!fieldState.error} className="resize-none" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="attachmentUrl"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel>Attachment / Reference Link (Optional)</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="e.g. https://drive.google.com/..." aria-invalid={!!fieldState.error} />
                    </FormControl>
                    <FormDescription>Google Drive link, spreadsheet format, or notice PDF.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <DialogFooter className="pt-2">
                <Button type="button" variant="outline" onClick={() => setIsAddOpen(false)} className="cursor-pointer">
                  Cancel
                </Button>
                <Button type="submit" className="bg-[#2459c8] text-white cursor-pointer">
                  Publish Notice
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
