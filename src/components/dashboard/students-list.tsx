"use client";

import React, { useState } from "react";
import { Plus, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import SearchFilterBar from "./search-filter-bar";
import DeleteConfirmDialog from "./delete-confirm-dialog";
import StudentCard from "./students/student-card";
import StudentDialog from "./students/student-dialog";
import { type StudentInviteFormData } from "@/validation/dashboard";

interface StudentsListProps {
  role: "CR" | "STUDENT";
}

const INITIAL_STUDENTS = [
  {
    id: "1",
    name: "Rakib Hossain",
    roll: "CSE-05201024",
    email: "rakib.cse@university.edu",
    phone: "+880 1711-223344",
    status: "ACTIVE", // ACTIVE or INVITED
  },
  {
    id: "2",
    name: "Afsana Mimi",
    roll: "CSE-05201025",
    email: "mimi.afsana@university.edu",
    phone: "+880 1819-334455",
    status: "ACTIVE",
  },
  {
    id: "3",
    name: "Jamil Ahmed",
    roll: "CSE-05201026",
    email: "jamil.ahmed@university.edu",
    phone: "+880 1912-556677",
    status: "INVITED",
  },
];

const FILTER_OPTIONS = [
  { label: "All Students", value: "ALL" },
  { label: "Active", value: "ACTIVE" },
  { label: "Invited", value: "INVITED" },
];

export default function StudentsList({ role }: StudentsListProps) {
  const isCR = role === "CR";
  const [students, setStudents] = useState(INITIAL_STUDENTS);
  
  // Search and Filter States
  const [searchValue, setSearchValue] = useState("");
  const [filterValue, setFilterValue] = useState("ALL");

  // Modals state
  const [isInviteOpen, setIsInviteOpen] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const onInviteSubmit = (data: StudentInviteFormData) => {
    setStudents([
      ...students,
      {
        id: String(Date.now()),
        ...data,
        status: "INVITED",
      },
    ]);
    setIsInviteOpen(false);
  };

  const confirmDelete = () => {
    if (!deletingId) return;
    setStudents(students.filter((s) => s.id !== deletingId));
    setDeletingId(null);
  };

  // Client-side filtering logic
  const filteredStudents = students.filter((s) => {
    const query = searchValue.toLowerCase().trim();
    const matchesSearch =
      !query ||
      s.name.toLowerCase().includes(query) ||
      s.roll.toLowerCase().includes(query);
    const matchesFilter = filterValue === "ALL" || s.status === filterValue;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="space-y-6">
      {/* Top action block */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-foreground font-[family-name:var(--font-besley)]">
            Class Roster
          </h2>
          <p className="text-sm text-muted-foreground mt-0.5">
            {isCR
              ? "Manage students and invite new students to join the classroom portal."
              : "List of your classmates in Section A."}
          </p>
        </div>
        {isCR && (
          <Button
            onClick={() => setIsInviteOpen(true)}
            className="bg-[#2459c8] text-white cursor-pointer h-10 w-full sm:w-auto"
          >
            <Plus className="size-4 mr-1.5" /> Invite Student
          </Button>
        )}
      </div>

      {/* Search and Filters */}
      <SearchFilterBar
        searchValue={searchValue}
        onSearchChange={setSearchValue}
        searchPlaceholder="Search classmates by name or roll number..."
        filterValue={filterValue}
        onFilterChange={setFilterValue}
        filterOptions={FILTER_OPTIONS}
        filterPlaceholder="All Statuses"
      />

      {/* Roster Layout */}
      <div className="bg-white border border-border rounded-xl overflow-hidden shadow-none">
        {filteredStudents.length > 0 ? (
          <>
            {/* Desktop Table View */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-muted/40 border-b border-border">
                    <th className="p-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      Student Name
                    </th>
                    <th className="p-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      Roll / ID
                    </th>
                    <th className="p-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      Email
                    </th>
                    <th className="p-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      Phone
                    </th>
                    <th className="p-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      Status
                    </th>
                    {isCR && (
                      <th className="p-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider text-right">
                        Actions
                      </th>
                    )}
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {filteredStudents.map((student) => (
                    <StudentCard
                      key={student.id}
                      student={student}
                      isCR={isCR}
                      onDelete={() => setDeletingId(student.id)}
                    />
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile View */}
            <div className="grid grid-cols-1 divide-y divide-border md:hidden">
              {filteredStudents.map((student) => (
                <StudentCard
                  key={student.id}
                  student={student}
                  isCR={isCR}
                  onDelete={() => setDeletingId(student.id)}
                />
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-12 border border-dashed border-border rounded-xl bg-white">
            <Users className="size-8 text-muted-foreground mx-auto mb-2" />
            <p className="text-sm font-semibold text-foreground">No students found</p>
            <p className="text-xs text-muted-foreground mt-1">Try matching another query or status filter.</p>
          </div>
        )}
      </div>

      {/* Invite Dialog */}
      <StudentDialog
        isOpen={isInviteOpen}
        onClose={() => setIsInviteOpen(false)}
        onSubmit={onInviteSubmit}
      />

      {/* Delete Confirmation Dialog */}
      <DeleteConfirmDialog
        isOpen={deletingId !== null}
        onClose={() => setDeletingId(null)}
        onConfirm={confirmDelete}
        title="Remove Student"
        description="Are you sure you want to remove this student? This will delete their profile from the class roster."
      />
    </div>
  );
}
