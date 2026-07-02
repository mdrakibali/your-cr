"use client";

import React, { useState } from "react";
import { Plus, ClipboardList } from "lucide-react";
import { Button } from "@/components/ui/button";
import SearchFilterBar from "./search-filter-bar";
import DeleteConfirmDialog from "./delete-confirm-dialog";
import AssessmentCard from "./assessments/assessment-card";
import AssessmentDialog from "./assessments/assessment-dialog";
import { type AssessmentFormData } from "@/validation/dashboard";

interface AssessmentsListProps {
  role: "CR" | "STUDENT";
}

const INITIAL_ASSESSMENTS = [
  {
    id: "1",
    title: "Database Sessional Group Project",
    subject: "CSE-301 (DBMS)",
    type: "ASSIGNMENT", // ASSIGNMENT, QUIZ, EXAM, LAB
    dueDate: "2026-07-15",
    dueTime: "23:59",
    description: "Submit sessional database schema diagram and normalization design document via drive.",
  },
  {
    id: "2",
    title: "Computer Networks MCQ Test",
    subject: "CSE-302 (Networks)",
    type: "QUIZ",
    dueDate: "2026-07-08",
    dueTime: "11:00",
    description: "Chapters 1-3. Quiz duration 30 minutes in Room 405.",
  },
  {
    id: "3",
    title: "Software Engineering Midterm",
    subject: "CSE-303 (SE)",
    type: "EXAM",
    dueDate: "2026-07-20",
    dueTime: "10:00",
    description: "Written theoretical test. Complete syllabus up to software process models.",
  },
];

const FILTER_OPTIONS = [
  { label: "All Tasks", value: "ALL" },
  { label: "Assignments", value: "ASSIGNMENT" },
  { label: "Quizzes", value: "QUIZ" },
  { label: "Exams", value: "EXAM" },
  { label: "Labs", value: "LAB" },
];

export default function AssessmentsList({ role }: AssessmentsListProps) {
  const isCR = role === "CR";
  const [assessments, setAssessments] = useState(INITIAL_ASSESSMENTS);
  const [searchValue, setSearchValue] = useState("");
  const [filterValue, setFilterValue] = useState("ALL");

  // Local state checklist
  const [checkedIds, setCheckedIds] = useState<string[]>([]);

  // Modals state
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const onSubmit = (data: AssessmentFormData) => {
    setAssessments([
      ...assessments,
      {
        id: String(Date.now()),
        ...data,
        description: data.description ?? "",
      },
    ]);
    setIsAddOpen(false);
  };

  const confirmDelete = () => {
    if (!deletingId) return;
    setAssessments(assessments.filter((a) => a.id !== deletingId));
    setDeletingId(null);
  };

  const toggleCheck = (id: string) => {
    if (checkedIds.includes(id)) {
      setCheckedIds(checkedIds.filter((x) => x !== id));
    } else {
      setCheckedIds([...checkedIds, id]);
    }
  };

  // Helper to calculate days remaining
  const getDaysRemaining = (dueDateStr: string) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const due = new Date(dueDateStr);
    due.setHours(0, 0, 0, 0);
    
    const diffTime = due.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays < 0) return "Overdue";
    if (diffDays === 0) return "Today";
    if (diffDays === 1) return "Tomorrow";
    return `${diffDays} days left`;
  };

  // Client-side filtering logic
  const filteredAssessments = assessments.filter((a) => {
    const query = searchValue.toLowerCase().trim();
    const matchesSearch =
      !query ||
      a.title.toLowerCase().includes(query) ||
      a.subject.toLowerCase().includes(query) ||
      (a.description && a.description.toLowerCase().includes(query));
    const matchesFilter = filterValue === "ALL" || a.type === filterValue;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-foreground font-[family-name:var(--font-besley)]">
            Assessments Tracker
          </h2>
          <p className="text-sm text-muted-foreground mt-0.5">
            {isCR
              ? "Publish sessional deadlines, lab tasks, or midterm exams."
              : "Check your active assignments and countdowns. Mark items done when submitted."}
          </p>
        </div>
        {isCR && (
          <Button
            onClick={() => setIsAddOpen(true)}
            className="bg-[#2459c8] text-white cursor-pointer h-10 w-full sm:w-auto"
          >
            <Plus className="size-4 mr-1.5" /> Add Assessment
          </Button>
        )}
      </div>

      {/* Search and Filters */}
      <SearchFilterBar
        searchValue={searchValue}
        onSearchChange={setSearchValue}
        searchPlaceholder="Search assessments by title, subject, or description..."
        filterValue={filterValue}
        onFilterChange={setFilterValue}
        filterOptions={FILTER_OPTIONS}
        filterPlaceholder="All Types"
      />

      {/* Grid of assessments */}
      {filteredAssessments.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredAssessments.map((a) => {
            const isDone = checkedIds.includes(a.id);
            const daysLeft = getDaysRemaining(a.dueDate);
            const isOverdue = daysLeft === "Overdue";

            return (
              <AssessmentCard
                key={a.id}
                assessment={a}
                isCR={isCR}
                isDone={isDone}
                isOverdue={isOverdue}
                daysLeft={daysLeft}
                onToggleCheck={() => toggleCheck(a.id)}
                onDelete={() => setDeletingId(a.id)}
              />
            );
          })}
        </div>
      ) : (
        <div className="text-center py-16 border border-dashed border-border rounded-xl bg-white col-span-2">
          <ClipboardList className="size-8 text-muted-foreground mx-auto mb-2" />
          <p className="text-sm font-semibold text-foreground">No assessments found</p>
          <p className="text-xs text-muted-foreground mt-1">Try matching another query or assessment type filter.</p>
        </div>
      )}

      {/* Add Assessment Dialog */}
      <AssessmentDialog
        isOpen={isAddOpen}
        onClose={() => setIsAddOpen(false)}
        onSubmit={onSubmit}
      />

      {/* Delete Confirmation Dialog */}
      <DeleteConfirmDialog
        isOpen={deletingId !== null}
        onClose={() => setDeletingId(null)}
        onConfirm={confirmDelete}
        title="Remove Assessment"
        description="Are you sure you want to remove this assessment? This will permanently delete the deadline from the class tracker."
      />
    </div>
  );
}
