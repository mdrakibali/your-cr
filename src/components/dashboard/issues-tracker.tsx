"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AlertCircle, Plus, CheckCircle2, Loader2, MessageSquare, Trash2 } from "lucide-react";
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
import { issueSchema, type IssueFormData } from "@/validation/dashboard";
import { cn } from "@/lib/utils";

interface IssuesTrackerProps {
  role: "CR" | "STUDENT";
}

const INITIAL_ISSUES = [
  {
    id: "1",
    title: "Routine Clash: DBMS Sessional and Compiler Lab",
    description: "The Monday DBMS sessional at 12:30 PM is clashing with the rescheduled Compiler lab. We need to shift DBMS sessional.",
    category: "Routine Conflict",
    status: "PENDING", // PENDING, IN_PROGRESS, RESOLVED
    reporter: "Afsana Mimi",
    date: "July 1, 2026",
  },
  {
    id: "2",
    title: "Lab 2 AC not working properly",
    description: "The air conditioning in Lab 2 is completely shut down. It is extremely hot during the afternoon sessional slots.",
    category: "Facility/Resource",
    status: "IN_PROGRESS",
    reporter: "Jamil Ahmed",
    date: "June 29, 2026",
  },
];

export default function IssuesTracker({ role }: IssuesTrackerProps) {
  const isCR = role === "CR";
  const [issues, setIssues] = useState(INITIAL_ISSUES);
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("ALL");

  const form = useForm<IssueFormData>({
    resolver: zodResolver(issueSchema),
    shouldFocusError: true,
    defaultValues: { title: "", description: "", category: "" },
  });

  const onSubmit = (data: IssueFormData) => {
    setIssues([
      ...issues,
      {
        id: String(issues.length + 1),
        ...data,
        status: "PENDING",
        reporter: "Rakib Hossain",
        date: new Date().toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        }),
      },
    ]);
    setIsAddOpen(false);
    form.reset();
  };

  // Wait, let's fix variable name `setClasses` to `setIssues`
  const handleUpdateIssueStatus = (id: string, newStatus: string) => {
    setIssues(
      issues.map((i) => (i.id === id ? { ...i, status: newStatus } : i))
    );
  };

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to remove this issue report?")) {
      setIssues(issues.filter((i) => i.id !== id));
    }
  };

  const filteredIssues = issues.filter((i) => {
    if (activeTab === "ALL") return true;
    return i.status === activeTab;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-foreground font-[family-name:var(--font-besley)]">
            Classroom Issues
          </h2>
          <p className="text-sm text-muted-foreground mt-0.5">
            {isCR
              ? "Track, manage, and resolve routine conflicts or sessional resource complaints."
              : "Report sessional routine clashes or resources issues directly to the Class Representative."}
          </p>
        </div>
        {!isCR && (
          <Button
            onClick={() => setIsAddOpen(true)}
            className="bg-[#2459c8] text-white cursor-pointer h-10 w-full sm:w-auto"
          >
            <Plus className="size-4 mr-1.5" /> File Issue
          </Button>
        )}
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 pb-2 border-b border-border">
        {["ALL", "PENDING", "IN_PROGRESS", "RESOLVED"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={cn(
              "px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors border cursor-pointer",
              activeTab === tab
                ? "bg-[#2459c8] border-[#2459c8] text-white"
                : "bg-white border-border text-muted-foreground hover:text-foreground"
            )}
          >
            {tab === "ALL" ? "All Issues" : tab.replace("_", " ")}
          </button>
        ))}
      </div>

      {/* Feed list */}
      <div className="space-y-4">
        {filteredIssues.map((issue) => (
          <Card key={issue.id} className="rounded-xl border border-border shadow-none bg-white">
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
                <h3 className="text-base font-bold text-foreground">{issue.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{issue.description}</p>
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
                          onClick={() => handleUpdateIssueStatus(issue.id, "IN_PROGRESS")}
                          className="h-8 text-xs cursor-pointer"
                        >
                          Start Investigation
                        </Button>
                      )}
                      <Button
                        size="sm"
                        onClick={() => handleUpdateIssueStatus(issue.id, "RESOLVED")}
                        className="bg-[#2459c8] text-white h-8 text-xs cursor-pointer"
                      >
                        Mark Resolved
                      </Button>
                    </>
                  )}

                  {/* Student delete own reports */}
                  {!isCR && issue.reporter === "Rakib Hossain" && (
                    <button
                      onClick={() => handleDelete(issue.id)}
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
        ))}

        {filteredIssues.length === 0 && (
          <div className="text-center py-16 border border-dashed border-border rounded-xl bg-white">
            <AlertCircle className="size-8 text-muted-foreground mx-auto mb-2" />
            <p className="text-sm font-semibold text-foreground">No issues found</p>
            <p className="text-xs text-muted-foreground mt-1">Class is running smoothly without issues under this status.</p>
          </div>
        )}
      </div>

      {/* Add Issue Dialog */}
      <Dialog open={isAddOpen} onOpenChange={(o) => {
        setIsAddOpen(o);
        if (!o) form.reset();
      }}>
        <DialogContent className="bg-white max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="font-[family-name:var(--font-besley)]">File Classroom Issue</DialogTitle>
            <DialogDescription>
              Report a schedule conflict, class resource issue, or exam clash.
            </DialogDescription>
          </DialogHeader>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="title"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel>Short Summary</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="e.g. Reschedule Clash with Lab" aria-invalid={!!fieldState.error} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Category</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="h-10 w-full">
                          <SelectValue placeholder="Select issue category" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Routine Conflict">Routine Conflict / Clash</SelectItem>
                        <SelectItem value="Facility/Resource">Lab / Classroom Facility</SelectItem>
                        <SelectItem value="Syllabus/Course">Syllabus / Credit Hours Issues</SelectItem>
                        <SelectItem value="Others">Others</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="description"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel>Detailed Explanation</FormLabel>
                    <FormControl>
                      <Textarea {...field} rows={4} placeholder="Describe the routine conflict or problem in detail..." aria-invalid={!!fieldState.error} className="resize-none" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <DialogFooter className="pt-2">
                <Button type="button" variant="outline" onClick={() => setIsAddOpen(false)} className="cursor-pointer">
                  Cancel
                </Button>
                <Button type="submit" className="bg-[#2459c8] text-white cursor-pointer">
                  Submit Report
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
