"use client";

import React, { useState } from "react";
import { Plus, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import SearchFilterBar from "./search-filter-bar";
import DeleteConfirmDialog from "./delete-confirm-dialog";
import TeacherCard from "./teachers/teacher-card";
import TeacherDialog from "./teachers/teacher-dialog";
import { type TeacherFormData } from "@/validation/dashboard";

const INITIAL_TEACHERS = [
  {
    id: "1",
    name: "Dr. Abu Sayeed",
    designation: "Professor & Head",
    email: "sayeed.cse@university.edu",
    phone: "+880 1711-223344",
    subject: "Database Management Systems (CSE-301)",
  },
  {
    id: "2",
    name: "Farhana Yasmin",
    designation: "Assistant Professor",
    email: "farhana.cse@university.edu",
    phone: "+880 1819-334455",
    subject: "Computer Networks (CSE-302)",
  },
  {
    id: "3",
    name: "Kamrul Hasan",
    designation: "Senior Lecturer",
    email: "hasan.kamrul@university.edu",
    phone: "+880 1912-556677",
    subject: "Software Engineering (CSE-303)",
  },
];

import { useDashboard } from "./dashboard-layout-wrapper";

export default function TeachersList() {
  const { role } = useDashboard();
  const isCR = role === "CR";
  const [teachers, setTeachers] = useState(INITIAL_TEACHERS);
  const [searchValue, setSearchValue] = useState("");
  
  // Modals state
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [editingTeacher, setEditingTeacher] = useState<any | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const onAddSubmit = (data: TeacherFormData) => {
    setTeachers([
      ...teachers,
      {
        id: String(Date.now()),
        ...data,
      },
    ]);
    setIsAddOpen(false);
  };

  const onEditSubmit = (data: TeacherFormData) => {
    if (!editingTeacher) return;
    setTeachers(
      teachers.map((t) => (t.id === editingTeacher.id ? { ...t, ...data } : t))
    );
    setEditingTeacher(null);
  };

  const confirmDelete = () => {
    if (!deletingId) return;
    setTeachers(teachers.filter((t) => t.id !== deletingId));
    setDeletingId(null);
  };

  // Client-side filtering logic
  const filteredTeachers = teachers.filter((t) => {
    const query = searchValue.toLowerCase().trim();
    if (!query) return true;
    return (
      t.name.toLowerCase().includes(query) ||
      t.designation.toLowerCase().includes(query) ||
      t.subject.toLowerCase().includes(query)
    );
  });

  return (
    <div className="space-y-6">
      {/* Top action block */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-foreground font-[family-name:var(--font-besley)]">
            Class Instructors
          </h2>
          <p className="text-sm text-muted-foreground mt-0.5">
            Contact directory of teachers taking classes in the current term.
          </p>
        </div>
        {isCR && (
          <Button
            onClick={() => setIsAddOpen(true)}
            className="bg-[#2459c8] text-white cursor-pointer h-10 w-full sm:w-auto"
          >
            <Plus className="size-4 mr-1.5" /> Add Teacher
          </Button>
        )}
      </div>

      {/* Search Bar */}
      <SearchFilterBar
        searchValue={searchValue}
        onSearchChange={setSearchValue}
        searchPlaceholder="Search instructors by name, designation, or course..."
      />

      {/* Roster Layout */}
      <div className="bg-white border border-border rounded-md overflow-hidden shadow-none">
        {filteredTeachers.length > 0 ? (
          <>
            {/* Desktop Table View */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-muted/40 border-b border-border">
                    <th className="p-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      Instructor Info
                    </th>
                    <th className="p-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      Subject / Course
                    </th>
                    <th className="p-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      Email
                    </th>
                    <th className="p-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      Phone
                    </th>
                    {isCR && (
                      <th className="p-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider text-right">
                        Actions
                      </th>
                    )}
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {filteredTeachers.map((teacher) => (
                    <TeacherCard
                      key={teacher.id}
                      teacher={teacher}
                      isCR={isCR}
                      onEdit={() => setEditingTeacher(teacher)}
                      onDelete={() => setDeletingId(teacher.id)}
                    />
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile View */}
            <div className="grid grid-cols-1 divide-y divide-border md:hidden">
              {filteredTeachers.map((teacher) => (
                <TeacherCard
                  key={teacher.id}
                  teacher={teacher}
                  isCR={isCR}
                  onEdit={() => setEditingTeacher(teacher)}
                  onDelete={() => setDeletingId(teacher.id)}
                />
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-12 border border-dashed border-border rounded-md bg-white">
            <GraduationCap className="size-8 text-muted-foreground mx-auto mb-2" />
            <p className="text-sm font-semibold text-foreground">No instructors found</p>
            <p className="text-xs text-muted-foreground mt-1">Try matching another query search.</p>
          </div>
        )}
      </div>

      {/* Add Dialog */}
      <TeacherDialog
        isOpen={isAddOpen}
        onClose={() => setIsAddOpen(false)}
        onSubmit={onAddSubmit}
        title="Add New Instructor"
        description="Provide basic contact details to add this teacher to the classroom directory."
      />

      {/* Edit Dialog */}
      <TeacherDialog
        isOpen={editingTeacher !== null}
        onClose={() => setEditingTeacher(null)}
        onSubmit={onEditSubmit}
        title="Edit Instructor"
        description="Update the contact details or assigned course parameters."
        defaultValues={editingTeacher}
      />

      {/* Delete Confirmation Dialog */}
      <DeleteConfirmDialog
        isOpen={deletingId !== null}
        onClose={() => setDeletingId(null)}
        onConfirm={confirmDelete}
        title="Remove Instructor"
        description="Are you sure you want to remove this instructor? This will delete their profile from the class directory."
      />
    </div>
  );
}
