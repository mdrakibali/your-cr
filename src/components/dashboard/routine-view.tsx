"use client";

import React, { useState } from "react";
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import DeleteConfirmDialog from "./delete-confirm-dialog";
import RoutineSlotCard from "./routine/routine-slot-card";
import RescheduleDialog from "./routine/reschedule-dialog";
import { cn } from "@/lib/utils";

const INITIAL_CLASSES = [
  // Monday
  { id: "m1", day: "Monday", code: "CSE-301", title: "DBMS", time: "09:00 AM - 10:30 AM", room: "Room 402", teacher: "Dr. Abu Sayeed", status: "ACTIVE" },
  { id: "m2", day: "Monday", code: "CSE-302", title: "Networks", time: "10:45 AM - 12:15 PM", room: "Room 405", teacher: "Farhana Yasmin", status: "ACTIVE" },
  { id: "m3", day: "Monday", code: "CSE-303", title: "Software Eng.", time: "12:30 PM - 02:00 PM", room: "Room 402", teacher: "Kamrul Hasan", status: "ACTIVE" },
  // Tuesday
  { id: "t1", day: "Tuesday", code: "CSE-302", title: "Networks", time: "09:00 AM - 10:30 AM", room: "Room 405", teacher: "Farhana Yasmin", status: "ACTIVE" },
  { id: "t2", day: "Tuesday", code: "CSE-304", title: "Web Tech", time: "10:45 AM - 12:15 PM", room: "Room 402", teacher: "Naimul Islam", status: "ACTIVE" },
  // Wednesday
  { id: "w1", day: "Wednesday", code: "CSE-301", title: "DBMS", time: "09:00 AM - 10:30 AM", room: "Room 402", teacher: "Dr. Abu Sayeed", status: "ACTIVE" },
  { id: "w2", day: "Wednesday", code: "CSE-303", title: "Software Eng.", time: "10:45 AM - 12:15 PM", room: "Room 402", teacher: "Kamrul Hasan", status: "ACTIVE" },
  { id: "w3", day: "Wednesday", code: "CSE-304", title: "Web Tech", time: "12:30 PM - 02:00 PM", room: "Room 402", teacher: "Naimul Islam", status: "ACTIVE" },
];

const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

import { useDashboard } from "./dashboard-layout-wrapper";

export default function RoutineView() {
  const { role } = useDashboard();
  const isCR = role === "CR";
  const [classes, setClasses] = useState(INITIAL_CLASSES);
  const [activeDay, setActiveDay] = useState("Monday");
  
  // Dialog States
  const [cancellingClass, setCancellingClass] = useState<any | null>(null);
  const [reschedulingClass, setReschedulingClass] = useState<any | null>(null);

  const confirmCancel = () => {
    if (!cancellingClass) return;
    setClasses(
      classes.map((c) =>
        c.id === cancellingClass.id ? { ...c, status: "CANCELLED" } : c
      )
    );
    setCancellingClass(null);
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
  };

  const handleResetClass = (id: string) => {
    const original = INITIAL_CLASSES.find((c) => c.id === id);
    if (original) {
      setClasses(classes.map((c) => (c.id === id ? { ...original } : c)));
    }
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
      </div>

      {/* Day Selector Buttons */}
      <div className="flex flex-wrap gap-2 pb-2 border-b border-border">
        {DAYS.map((day) => (
          <button
            key={day}
            onClick={() => setActiveDay(day)}
            className={cn(
              "px-4 py-2 text-xs font-semibold rounded-lg transition-colors border cursor-pointer",
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
              onReschedule={() => setReschedulingClass(cls)}
              onCancel={() => setCancellingClass(cls)}
              onReset={() => handleResetClass(cls.id)}
            />
          ))}

        {classes.filter((c) => c.day === activeDay).length === 0 && (
          <div className="text-center py-12 border border-dashed border-border rounded-xl bg-white">
            <Calendar className="size-8 text-muted-foreground mx-auto mb-2" />
            <p className="text-sm font-semibold text-foreground">No classes scheduled</p>
            <p className="text-xs text-muted-foreground mt-1">Enjoy your day off!</p>
          </div>
        )}
      </div>

      {/* Custom Cancel Confirmation Dialog */}
      <DeleteConfirmDialog
        isOpen={cancellingClass !== null}
        onClose={() => setCancellingClass(null)}
        onConfirm={confirmCancel}
        title="Cancel Class Session"
        confirmText="Cancel Class"
        description={`Are you sure you want to cancel the class: ${cancellingClass?.code} (${cancellingClass?.title})? This will notify sessional student updates.`}
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
    </div>
  );
}
