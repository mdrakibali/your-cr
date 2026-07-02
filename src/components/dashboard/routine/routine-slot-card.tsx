"use client";

import React from "react";
import { Clock, MapPin, User, RefreshCw, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ClassSlot {
  id: string;
  day: string;
  code: string;
  title: string;
  time: string;
  room: string;
  teacher: string;
  status: string;
  rescheduledTime?: string;
}

interface RoutineSlotCardProps {
  cls: ClassSlot;
  isCR: boolean;
  onReschedule: () => void;
  onCancel: () => void;
  onReset: () => void;
}

export default function RoutineSlotCard({
  cls,
  isCR,
  onReschedule,
  onCancel,
  onReset,
}: RoutineSlotCardProps) {
  return (
    <div
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

        {cls.status === "RESCHEDULED" && cls.rescheduledTime && (
          <p className="text-xs text-amber-600 font-semibold mt-1">
            Rescheduled to: {cls.rescheduledTime}
          </p>
        )}
      </div>

      {/* Actions row for CR */}
      {isCR && (
        <div className="flex items-center gap-2 pt-4 border-t border-muted/50 md:pt-0 md:border-t-0 justify-end">
          {cls.status === "ACTIVE" ? (
            <>
              <Button
                size="sm"
                variant="outline"
                onClick={onReschedule}
                className="text-amber-600 hover:text-amber-700 hover:bg-amber-50 border-amber-200 cursor-pointer h-9"
              >
                <RefreshCw className="size-3.5 mr-1" /> Reschedule
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={onCancel}
                className="text-red-600 hover:text-red-700 hover:bg-red-50 border-red-200 cursor-pointer h-9"
              >
                <XCircle className="size-3.5 mr-1" /> Cancel
              </Button>
            </>
          ) : (
            <Button
              size="sm"
              variant="outline"
              onClick={onReset}
              className="text-muted-foreground hover:text-foreground cursor-pointer h-9"
            >
              Reset State
            </Button>
          )}
        </div>
      )}
    </div>
  );
}
