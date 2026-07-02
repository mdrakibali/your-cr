"use client";

import React, { useState } from "react";
import { Plus, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import SearchFilterBar from "./search-filter-bar";
import DeleteConfirmDialog from "./delete-confirm-dialog";
import IssueCard from "./issues/issue-card";
import IssueDialog from "./issues/issue-dialog";
import { type IssueFormData } from "@/validation/dashboard";

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

const FILTER_OPTIONS = [
  { label: "All Issues", value: "ALL" },
  { label: "Pending", value: "PENDING" },
  { label: "In Progress", value: "IN_PROGRESS" },
  { label: "Resolved", value: "RESOLVED" },
];

export default function IssuesTracker({ role }: IssuesTrackerProps) {
  const isCR = role === "CR";
  const [issues, setIssues] = useState(INITIAL_ISSUES);
  
  // Search and Filter States
  const [searchValue, setSearchValue] = useState("");
  const [filterValue, setFilterValue] = useState("ALL");

  // Modals state
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const onSubmit = (data: IssueFormData) => {
    setIssues([
      ...issues,
      {
        id: String(Date.now()),
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
  };

  const handleUpdateIssueStatus = (id: string, newStatus: string) => {
    setIssues(
      issues.map((i) => (i.id === id ? { ...i, status: newStatus } : i))
    );
  };

  const confirmDelete = () => {
    if (!deletingId) return;
    setIssues(issues.filter((i) => i.id !== deletingId));
    setDeletingId(null);
  };

  // Client-side filtering logic
  const filteredIssues = issues.filter((i) => {
    const query = searchValue.toLowerCase().trim();
    const matchesSearch =
      !query ||
      i.title.toLowerCase().includes(query) ||
      i.description.toLowerCase().includes(query);
    const matchesFilter = filterValue === "ALL" || i.status === filterValue;
    return matchesSearch && matchesFilter;
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

      {/* Search and Filters */}
      <SearchFilterBar
        searchValue={searchValue}
        onSearchChange={setSearchValue}
        searchPlaceholder="Search issue summaries or explanations..."
        filterValue={filterValue}
        onFilterChange={setFilterValue}
        filterOptions={FILTER_OPTIONS}
        filterPlaceholder="All Statuses"
      />

      {/* Feed list */}
      {filteredIssues.length > 0 ? (
        <div className="space-y-4">
          {filteredIssues.map((issue) => (
            <IssueCard
              key={issue.id}
              issue={issue}
              isCR={isCR}
              onUpdateStatus={(newStatus) => handleUpdateIssueStatus(issue.id, newStatus)}
              onDelete={() => setDeletingId(issue.id)}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 border border-dashed border-border rounded-xl bg-white">
          <AlertCircle className="size-8 text-muted-foreground mx-auto mb-2" />
          <p className="text-sm font-semibold text-foreground">No issues found</p>
          <p className="text-xs text-muted-foreground mt-1">Class is running smoothly without issues under this query.</p>
        </div>
      )}

      {/* Add Issue Dialog */}
      <IssueDialog
        isOpen={isAddOpen}
        onClose={() => setIsAddOpen(false)}
        onSubmit={onSubmit}
      />

      {/* Delete Confirmation Dialog */}
      <DeleteConfirmDialog
        isOpen={deletingId !== null}
        onClose={() => setDeletingId(null)}
        onConfirm={confirmDelete}
        title="Remove Issue Report"
        description="Are you sure you want to delete this issue report? This action cannot be undone."
      />
    </div>
  );
}
