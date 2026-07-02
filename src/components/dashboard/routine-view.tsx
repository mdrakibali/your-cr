"use client";

import React, { useState } from "react";
import { Calendar, Plus, Link as LinkIcon, FileText, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import DeleteConfirmDialog from "./delete-confirm-dialog";
import RoutineSlotCard from "./routine/routine-slot-card";
import RoutineDialog from "./routine/routine-dialog";
import RescheduleDialog from "./routine/reschedule-dialog";
import { useDashboard } from "./dashboard-layout-wrapper";
import { type RoutineFormData } from "@/validation/dashboard";
import { cn } from "@/lib/utils";

const INITIAL_CLASSES = [
  // Monday
  { id: "m1", day: "Monday", code: "CSE-301", title: "DBMS", time: "09:00 AM - 10:30 AM", room: "Room 402", teacher: "Dr. Abu Sayeed", status: "ACTIVE", classType: "OFFLINE" },
  { id: "m2", day: "Monday", code: "CSE-302", title: "Networks", time: "10:45 AM - 12:15 PM", room: "Room 405", teacher: "Farhana Yasmin", status: "ACTIVE", classType: "OFFLINE" },
  { id: "m3", day: "Monday", code: "CSE-303", title: "Software Eng.", time: "12:30 PM - 02:00 PM", room: "Room 402", teacher: "Kamrul Hasan", status: "ACTIVE", classType: "ONLINE" },
  // Tuesday
  { id: "t1", day: "Tuesday", code: "CSE-302", title: "Networks", time: "09:00 AM - 10:30 AM", room: "Room 405", teacher: "Farhana Yasmin", status: "ACTIVE", classType: "OFFLINE" },
  { id: "t2", day: "Tuesday", code: "CSE-304", title: "Web Tech", time: "10:45 AM - 12:15 PM", room: "Room 402", teacher: "Naimul Islam", status: "ACTIVE", classType: "OFFLINE" },
  // Wednesday
  { id: "w1", day: "Wednesday", code: "CSE-301", title: "DBMS", time: "09:00 AM - 10:30 AM", room: "Room 402", teacher: "Dr. Abu Sayeed", status: "ACTIVE", classType: "OFFLINE" },
  { id: "w2", day: "Wednesday", code: "CSE-303", title: "Software Eng.", time: "10:45 AM - 12:15 PM", room: "Room 402", teacher: "Kamrul Hasan", status: "ACTIVE", classType: "OFFLINE" },
  { id: "w3", day: "Wednesday", code: "CSE-304", title: "Web Tech", time: "12:30 PM - 02:00 PM", room: "Room 402", teacher: "Naimul Islam", status: "ACTIVE", classType: "ONLINE" },
];

const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

export default function RoutineView() {
  const { role } = useDashboard();
  const isCR = role === "CR";
  const [classes, setClasses] = useState(INITIAL_CLASSES);
  const [activeDay, setActiveDay] = useState("Monday");

  // Routine document attachment
  const [routineDocumentUrl, setRoutineDocumentUrl] = useState("https://university.edu/cse-3rd-year-routine.pdf");
  const [editingDocUrl, setEditingDocUrl] = useState(false);
  const [newDocUrl, setNewDocUrl] = useState(routineDocumentUrl);
  
  // Dialog States
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [editingClass, setEditingClass] = useState<any | null>(null);
  const [cancellingClass, setCancellingClass] = useState<any | null>(null);
  const [reschedulingClass, setReschedulingClass] = useState<any | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const onAddSubmit = (data: RoutineFormData) => {
    setClasses([
      ...classes,
      {
        id: String(Date.now()),
        ...data,
        status: "ACTIVE",
      },
    ]);
    setIsAddOpen(false);
    toast.success("Routine slot added successfully!");
  };

  const onEditSubmit = (data: RoutineFormData) => {
    if (!editingClass) return;
    setClasses(
      classes.map((c) => (c.id === editingClass.id ? { ...c, ...data } : c))
    );
    setEditingClass(null);
    toast.success("Routine slot updated successfully!");
  };

  const confirmCancel = () => {
    if (!cancellingClass) return;
    setClasses(
      classes.map((c) =>
        c.id === cancellingClass.id ? { ...c, status: "CANCELLED" } : c
      )
    );
    setCancellingClass(null);
    toast.success("Class cancelled successfully!");
  };

  const handleRescheduleSubmit = (newTime: string, newRoom: string) => {
    if (!reschedulingClass) return;
    setClasses(
      classes.map((c) =>
        c.id === reschedulingClass.id
          ? {
              ...c,
              status: "RESCHEDULED",
              rescheduledTime: `${newTime} (${newRoom})`,
            }
          : c
      )
    );
    setReschedulingClass(null);
    toast.success("Class rescheduled successfully!");
  };

  const handleResetClass = (id: string) => {
    const original = INITIAL_CLASSES.find((c) => c.id === id);
    if (original) {
      setClasses(classes.map((c) => (c.id === id ? { ...original } : c)));
      toast.success("Class state reset to active schedule.");
    }
  };

  const confirmDelete = () => {
    if (!deletingId) return;
    setClasses(classes.filter((c) => c.id !== deletingId));
    setDeletingId(null);
    toast.success("Routine slot removed successfully!");
  };

  const saveRoutineDocument = () => {
    setRoutineDocumentUrl(newDocUrl);
    setEditingDocUrl(false);
    toast.success("Official routine reference updated!");
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-foreground font-[family-name:var(--font-besley)]">
            Class Routine
          </h2>
          <p className="text-sm text-muted-foreground mt-0.5">
            Weekly schedule routine. Reschedules and cancellations are highlighted in real-time.
          </p>
        </div>
        {isCR && (
          <Button
            onClick={() => setIsAddOpen(true)}
            className="bg-[#2459c8] text-white cursor-pointer h-10 w-full sm:w-auto rounded-md"
          >
            <Plus className="size-4 mr-1.5" /> Add Class Slot
          </Button>
        )}
      </div>

      {/* Official Routine PDF reference bar */}
      <div className="p-4 border border-border bg-white rounded-md flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="size-10 bg-primary/10 text-primary flex items-center justify-center shrink-0 rounded-md">
            <FileText className="size-5" />
          </div>
          <div className="min-w-0">
            <p className="text-xs font-semibold text-foreground">Official Routine Sheet</p>
            {routineDocumentUrl ? (
              <a
                href={routineDocumentUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#2459c8] hover:underline flex items-center gap-1.5 truncate"
              >
                <LinkIcon className="size-3" /> View routine attachment file
              </a>
            ) : (
              <p className="text-[11px] text-muted-foreground">No reference routine document uploaded yet.</p>
            )}
          </div>
        </div>

        <div>
          {isCR ? (
            editingDocUrl ? (
              <div className="flex gap-2 w-full md:w-auto">
                <Input
                  value={newDocUrl}
                  onChange={(e) => setNewDocUrl(e.target.value)}
                  placeholder="Paste routine image/PDF URL"
                  className="h-9 text-xs max-w-xs bg-white rounded-md"
                />
                <Button size="sm" onClick={saveRoutineDocument} className="bg-[#2459c8] text-white rounded-md h-9">
                  Save
                </Button>
                <Button size="sm" variant="outline" onClick={() => setEditingDocUrl(false)} className="rounded-md h-9">
                  Cancel
                </Button>
              </div>
            ) : (
              <Button size="sm" variant="outline" onClick={() => {
                setNewDocUrl(routineDocumentUrl);
                setEditingDocUrl(true);
              }} className="rounded-md flex items-center gap-1 cursor-pointer">
                <Upload className="size-3.5" /> Update Routine Attachment
              </Button>
            )
          ) : (
            routineDocumentUrl && (
              <a
                href={routineDocumentUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-border text-xs font-semibold text-foreground bg-white hover:bg-muted/10 rounded-md transition-colors"
              >
                <FileText className="size-3.5" /> Open Routine PDF
              </a>
            )
          )}
        </div>
      </div>

      {/* Day Selector Buttons */}
      <div className="flex flex-wrap gap-2 pb-2 border-b border-border">
        {DAYS.map((day) => (
          <button
            key={day}
            onClick={() => setActiveDay(day)}
            className={cn(
              "px-4 py-2 text-xs font-semibold rounded-md transition-colors border cursor-pointer",
              activeDay === day
                ? "bg-[#2459c8] border-[#2459c8] text-white"
                : "bg-white border-border text-muted-foreground hover:text-foreground"
            )}
          >
            {day}
          </button>
        ))}
      </div>

      {/* Day Timeline listing */}
      <div className="space-y-4">
        {classes
          .filter((c) => c.day === activeDay)
          .map((cls) => (
            <RoutineSlotCard
              key={cls.id}
              cls={cls}
              isCR={isCR}
              onEdit={() => setEditingClass(cls)}
              onDelete={() => setDeletingId(cls.id)}
              onReschedule={() => setReschedulingClass(cls)}
              onCancel={() => setCancellingClass(cls)}
              onReset={() => handleResetClass(cls.id)}
            />
          ))}

        {classes.filter((c) => c.day === activeDay).length === 0 && (
          <div className="text-center py-12 border border-dashed border-border rounded-md bg-white">
            <Calendar className="size-8 text-muted-foreground mx-auto mb-2" />
            <p className="text-sm font-semibold text-foreground">No classes scheduled</p>
            <p className="text-xs text-muted-foreground mt-1">Enjoy your day off!</p>
          </div>
        )}
      </div>

      {/* Add Slot Dialog */}
      <RoutineDialog
        isOpen={isAddOpen}
        onClose={() => setIsAddOpen(false)}
        onSubmit={onAddSubmit}
        title="Add Class Slot"
        description="Add a class timing block to the weekly routine."
      />

      {/* Edit Slot Dialog */}
      <RoutineDialog
        isOpen={editingClass !== null}
        onClose={() => setEditingClass(null)}
        onSubmit={onEditSubmit}
        title="Edit Class Slot"
        description="Modify course codes, timings, teacher, or class type parameters."
        defaultValues={editingClass}
      />

      {/* Reschedule Class Dialog */}
      <RescheduleDialog
        isOpen={reschedulingClass !== null}
        onClose={() => setReschedulingClass(null)}
        onSubmit={handleRescheduleSubmit}
        defaultTime={reschedulingClass?.time}
        defaultRoom={reschedulingClass?.room}
        subjectInfo={`${reschedulingClass?.code} - ${reschedulingClass?.title}`}
      />

      {/* Custom Cancel Confirmation Dialog */}
      <DeleteConfirmDialog
        isOpen={cancellingClass !== null}
        onClose={() => setCancellingClass(null)}
        onConfirm={confirmCancel}
        title="Cancel Class Session"
        confirmText="Cancel Class"
        description={`Are you sure you want to cancel the class: ${cancellingClass?.code} (${cancellingClass?.title})? This will notify sessional student updates.`}
      />

      {/* Delete Slot Confirmation Dialog */}
      <DeleteConfirmDialog
        isOpen={deletingId !== null}
        onClose={() => setDeletingId(null)}
        onConfirm={confirmDelete}
        title="Remove Routine Slot"
        description="Are you sure you want to delete this routine slot? This will permanently delete the timings from the weekly list."
      />
    </div>
  );
}
