"use client";

import React, { useState } from "react";
import { Plus, Megaphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import SearchFilterBar from "./search-filter-bar";
import DeleteConfirmDialog from "./delete-confirm-dialog";
import NoticeCard from "./notice/notice-card";
import NoticeDialog from "./notice/notice-dialog";
import { type NoticeFormData } from "@/validation/dashboard";

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

const FILTER_OPTIONS = [
  { label: "All Notices", value: "ALL" },
  { label: "Urgent", value: "URGENT" },
  { label: "Important", value: "IMPORTANT" },
  { label: "Normal", value: "NORMAL" },
];

import { useDashboard } from "./dashboard-layout-wrapper";

export default function NoticeBoard() {
  const { role } = useDashboard();
  const isCR = role === "CR";
  const [notices, setNotices] = useState(INITIAL_NOTICES);
  const [searchValue, setSearchValue] = useState("");
  const [filterValue, setFilterValue] = useState("ALL");

  // Modals state
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const onSubmit = (data: NoticeFormData) => {
    setNotices([
      {
        id: String(Date.now()),
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
  };

  const confirmDelete = () => {
    if (!deletingId) return;
    setNotices(notices.filter((n) => n.id !== deletingId));
    setDeletingId(null);
  };

  // Client-side filtering logic
  const filteredNotices = notices.filter((n) => {
    const query = searchValue.toLowerCase().trim();
    const matchesSearch =
      !query ||
      n.title.toLowerCase().includes(query) ||
      n.body.toLowerCase().includes(query);
    const matchesFilter = filterValue === "ALL" || n.priority === filterValue;
    return matchesSearch && matchesFilter;
  });

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

      {/* Search and Filters */}
      <SearchFilterBar
        searchValue={searchValue}
        onSearchChange={setSearchValue}
        searchPlaceholder="Search notices by title or content..."
        filterValue={filterValue}
        onFilterChange={setFilterValue}
        filterOptions={FILTER_OPTIONS}
        filterPlaceholder="All Priorities"
      />

      {/* Notices Feed */}
      {filteredNotices.length > 0 ? (
        <div className="space-y-5">
          {filteredNotices.map((notice) => (
            <NoticeCard
              key={notice.id}
              notice={notice}
              isCR={isCR}
              onDelete={() => setDeletingId(notice.id)}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 border border-dashed border-border rounded-xl bg-white">
          <Megaphone className="size-8 text-muted-foreground mx-auto mb-2" />
          <p className="text-sm font-semibold text-foreground">No notices found</p>
          <p className="text-xs text-muted-foreground mt-1">Try matching another query or priority filter.</p>
        </div>
      )}

      {/* Add Notice Dialog */}
      <NoticeDialog
        isOpen={isAddOpen}
        onClose={() => setIsAddOpen(false)}
        onSubmit={onSubmit}
      />

      {/* Delete Confirmation Dialog */}
      <DeleteConfirmDialog
        isOpen={deletingId !== null}
        onClose={() => setDeletingId(null)}
        onConfirm={confirmDelete}
        title="Remove Notice"
        description="Are you sure you want to delete this notice? This action will permanently remove it from the sessional board."
      />
    </div>
  );
}
