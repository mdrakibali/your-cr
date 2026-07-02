"use client";

import React, { useState } from "react";
import { Plus, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import SearchFilterBar from "./search-filter-bar";
import DeleteConfirmDialog from "./delete-confirm-dialog";
import SubjectCard from "./subjects/subject-card";
import SubjectDialog from "./subjects/subject-dialog";
import { type SubjectFormData } from "@/validation/dashboard";

const INITIAL_SUBJECTS = [
  {
    id: "1",
    code: "CSE-301",
    title: "Database Management Systems",
    credits: "3.0",
    teacher: "Dr. Abu Sayeed",
  },
  {
    id: "2",
    code: "CSE-302",
    title: "Computer Networks",
    credits: "3.0",
    teacher: "Farhana Yasmin",
  },
  {
    id: "3",
    code: "CSE-303",
    title: "Software Engineering",
    credits: "3.0",
    teacher: "Kamrul Hasan",
  },
];

import { useDashboard } from "./dashboard-layout-wrapper";

export default function SubjectsList() {
  const { role } = useDashboard();
  const isCR = role === "CR";
  const [subjects, setSubjects] = useState(INITIAL_SUBJECTS);
  const [searchValue, setSearchValue] = useState("");

  // Modals state
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [editingSubject, setEditingSubject] = useState<any | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const onAddSubmit = (data: SubjectFormData) => {
    setSubjects([
      ...subjects,
      {
        id: String(Date.now()),
        ...data,
      },
    ]);
    setIsAddOpen(false);
  };

  const onEditSubmit = (data: SubjectFormData) => {
    if (!editingSubject) return;
    setSubjects(
      subjects.map((s) => (s.id === editingSubject.id ? { ...s, ...data } : s))
    );
    setEditingSubject(null);
  };

  const confirmDelete = () => {
    if (!deletingId) return;
    setSubjects(subjects.filter((s) => s.id !== deletingId));
    setDeletingId(null);
  };

  // Client-side filtering logic
  const filteredSubjects = subjects.filter((s) => {
    const query = searchValue.toLowerCase().trim();
    if (!query) return true;
    return (
      s.title.toLowerCase().includes(query) ||
      s.code.toLowerCase().includes(query) ||
      s.teacher.toLowerCase().includes(query)
    );
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-foreground font-[family-name:var(--font-besley)]">
            Course Curriculum
          </h2>
          <p className="text-sm text-muted-foreground mt-0.5">
            Overview of courses, credit values, and assigned teachers in the current semester.
          </p>
        </div>
        {isCR && (
          <Button
            onClick={() => setIsAddOpen(true)}
            className="bg-[#2459c8] text-white cursor-pointer h-10 w-full sm:w-auto"
          >
            <Plus className="size-4 mr-1.5" /> Add Subject
          </Button>
        )}
      </div>

      {/* Search Bar */}
      <SearchFilterBar
        searchValue={searchValue}
        onSearchChange={setSearchValue}
        searchPlaceholder="Search curriculum by subject title, code, or instructor name..."
      />

      {/* Grid of subjects */}
      {filteredSubjects.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSubjects.map((subject) => (
            <SubjectCard
              key={subject.id}
              subject={subject}
              isCR={isCR}
              onEdit={() => setEditingSubject(subject)}
              onDelete={() => setDeletingId(subject.id)}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 border border-dashed border-border rounded-xl bg-white">
          <BookOpen className="size-8 text-muted-foreground mx-auto mb-2" />
          <p className="text-sm font-semibold text-foreground">No subjects found</p>
          <p className="text-xs text-muted-foreground mt-1">Try matching another query search term.</p>
        </div>
      )}

      {/* Add Subject Dialog */}
      <SubjectDialog
        isOpen={isAddOpen}
        onClose={() => setIsAddOpen(false)}
        onSubmit={onAddSubmit}
        title="Add New Subject"
        description="Add a new course curriculum code and assign an instructor to it."
      />

      {/* Edit Subject Dialog */}
      <SubjectDialog
        isOpen={editingSubject !== null}
        onClose={() => setEditingSubject(null)}
        onSubmit={onEditSubmit}
        title="Edit Subject"
        description="Update course curriculum settings or change the assigned teacher."
        defaultValues={editingSubject}
      />

      {/* Delete Confirmation Dialog */}
      <DeleteConfirmDialog
        isOpen={deletingId !== null}
        onClose={() => setDeletingId(null)}
        onConfirm={confirmDelete}
        title="Delete Subject"
        description="Are you sure you want to delete this subject? This will remove the course curriculum details from the classes listing."
      />
    </div>
  );
}
