"use client";

import React, { useState } from "react";
import { Plus, AlertTriangle, XCircle, Calendar, RefreshCw, Clock, MapPin, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

interface RoutineViewProps {
  role: "CR" | "STUDENT";
}

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

export default function RoutineView({ role }: RoutineViewProps) {
  const isCR = role === "CR";
  const [classes, setClasses] = useState(INITIAL_CLASSES);
  const [activeDay, setActiveDay] = useState("Monday");
  const [cancellingClass, setCancellingClass] = useState<any | null>(null);
  const [reschedulingClass, setReschedulingClass] = useState<any | null>(null);

  // Form states for reschedule
  const [newTime, setNewTime] = useState("");
  const [newRoom, setNewRoom] = useState("");

  const handleCancelClass = () => {
    if (!cancellingClass) return;
    setClasses(
      classes.map((c) =>
        c.id === cancellingClass.id ? { ...c, status: "CANCELLED" } : c
      )
    );
    setCancellingClass(null);
  };

  const handleRescheduleClass = () => {
    if (!reschedulingClass || !newTime || !newRoom) return;
    setClasses(
      classes.map((c) =>
        c.id === reschedulingClass.id
          ? {
              ...c,
              status: "RESCHEDULED",
              time: newTime,
              room: newRoom,
            }
          : c
      )
    );
    setReschedulingClass(null);
    setNewTime("");
    setNewRoom("");
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

      {/* Day Selector Buttons for Responsive/Mobile view and Grid filtering */}
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

      {/* Day Timeline listing (Responsive) */}
      <div className="space-y-4">
        {classes
          .filter((c) => c.day === activeDay)
          .map((cls) => (
            <div
              key={cls.id}
              className={cn(
                "p-5 rounded-xl border flex flex-col md:flex-row md:items-center justify-between gap-6 transition-colors bg-white",
                cls.status === "CANCELLED"
                  ? "border-red-200 bg-red-50/5 hover:bg-red-50/10"
                  : cls.status === "RESCHEDULED"
                  ? "border-amber-200 bg-amber-50/5 hover:bg-amber-50/10"
                  : "border-border hover:border-primary/20"
              )}
            >
              {/* Routine metadata info */}
              <div className="space-y-2.5">
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className={cn(
                      "text-xs font-bold px-2 py-0.5 rounded-full",
                      cls.status === "CANCELLED"
                        ? "bg-red-100 text-red-700"
                        : cls.status === "RESCHEDULED"
                        ? "bg-amber-100 text-amber-700"
                        : "bg-primary/10 text-[#2459c8]"
                    )}
                  >
                    {cls.code}
                  </span>
                  <span className="text-sm font-semibold text-foreground">
                    {cls.title}
                  </span>
                  <span
                    className={cn(
                      "text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider",
                      cls.status === "ACTIVE" && "bg-green-100 text-green-700",
                      cls.status === "CANCELLED" && "bg-red-100 text-red-700",
                      cls.status === "RESCHEDULED" && "bg-amber-100 text-amber-700"
                    )}
                  >
                    {cls.status}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <Clock className="size-3.5 shrink-0" />
                    <span>{cls.time}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="size-3.5 shrink-0" />
                    <span>{cls.room}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <User className="size-3.5 shrink-0" />
                    <span>{cls.teacher}</span>
                  </div>
                </div>
              </div>

              {/* Actions row for CR */}
              {isCR && (
                <div className="flex items-center gap-2 pt-4 border-t border-muted/50 md:pt-0 md:border-t-0 justify-end">
                  {cls.status === "ACTIVE" ? (
                    <>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => {
                          setReschedulingClass(cls);
                          setNewTime(cls.time);
                          setNewRoom(cls.room);
                        }}
                        className="text-amber-600 hover:text-amber-700 hover:bg-amber-50 border-amber-200 cursor-pointer h-9"
                      >
                        <RefreshCw className="size-3.5 mr-1" /> Reschedule
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => setCancellingClass(cls)}
                        className="text-red-600 hover:text-red-700 hover:bg-red-50 border-red-200 cursor-pointer h-9"
                      >
                        <XCircle className="size-3.5 mr-1" /> Cancel
                      </Button>
                    </>
                  ) : (
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleResetClass(cls.id)}
                      className="text-muted-foreground hover:text-foreground cursor-pointer h-9"
                    >
                      Reset State
                    </Button>
                  )}
                </div>
              )}
            </div>
          ))}

        {classes.filter((c) => c.day === activeDay).length === 0 && (
          <div className="text-center py-12 border border-dashed border-border rounded-xl bg-white">
            <Calendar className="size-8 text-muted-foreground mx-auto mb-2" />
            <p className="text-sm font-semibold text-foreground">No classes scheduled</p>
            <p className="text-xs text-muted-foreground mt-1">Enjoy your day off!</p>
          </div>
        )}
      </div>

      {/* Cancel Class Dialog */}
      <Dialog open={cancellingClass !== null} onOpenChange={(o) => !o && setCancellingClass(null)}>
        <DialogContent className="bg-white max-w-[400px]">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-red-600 font-[family-name:var(--font-besley)]">
              <AlertTriangle className="size-5" /> Cancel Class?
            </DialogTitle>
            <DialogDescription className="pt-2">
              Are you sure you want to cancel the sessional class{" "}
              <strong>{cancellingClass?.code} ({cancellingClass?.title})</strong>?
              This will notify all students immediately.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="mt-4">
            <Button variant="outline" onClick={() => setCancellingClass(null)} className="cursor-pointer">
              No, Keep
            </Button>
            <Button onClick={handleCancelClass} className="bg-red-600 hover:bg-red-700 text-white cursor-pointer">
              Yes, Cancel Class
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Reschedule Class Dialog */}
      <Dialog open={reschedulingClass !== null} onOpenChange={(o) => !o && setReschedulingClass(null)}>
        <DialogContent className="bg-white max-w-[440px]">
          <DialogHeader>
            <DialogTitle className="font-[family-name:var(--font-besley)]">Reschedule Class</DialogTitle>
            <DialogDescription>
              Adjust schedule values for <strong>{reschedulingClass?.code} ({reschedulingClass?.title})</strong>.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-3">
            <div className="space-y-1.5">
              <Label htmlFor="reschedule-time">New Timings</Label>
              <Input
                id="reschedule-time"
                value={newTime}
                onChange={(e) => setNewTime(e.target.value)}
                placeholder="e.g. 02:30 PM - 04:00 PM"
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="reschedule-room">New Room / Location</Label>
              <Input
                id="reschedule-room"
                value={newRoom}
                onChange={(e) => setNewRoom(e.target.value)}
                placeholder="e.g. Lab 3 or Room 402"
              />
            </div>
          </div>

          <DialogFooter className="pt-2">
            <Button variant="outline" onClick={() => setReschedulingClass(null)} className="cursor-pointer">
              Cancel
            </Button>
            <Button onClick={handleRescheduleClass} disabled={!newTime || !newRoom} className="bg-[#2459c8] text-white cursor-pointer">
              Update Schedule
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
