"use client";

import React, { useState, useEffect } from "react";
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

interface RescheduleDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (newTime: string, newRoom: string) => void;
  classNameTitle?: string;
  defaultTime?: string;
  defaultRoom?: string;
  subjectInfo?: string;
}

export default function RescheduleDialog({
  isOpen,
  onClose,
  onSubmit,
  defaultTime = "",
  defaultRoom = "",
  subjectInfo = "",
}: RescheduleDialogProps) {
  const [newTime, setNewTime] = useState("");
  const [newRoom, setNewRoom] = useState("");

  useEffect(() => {
    if (isOpen) {
      setNewTime(defaultTime);
      setNewRoom(defaultRoom);
    }
  }, [isOpen, defaultTime, defaultRoom]);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTime && newRoom) {
      onSubmit(newTime, newRoom);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(o) => !o && onClose()}>
      {/* Spacious dialog content container (max-w-2xl) */}
      <DialogContent className="bg-white max-w-2xl">
        <DialogHeader>
          <DialogTitle className="font-[family-name:var(--font-besley)] text-lg">
            Reschedule Class
          </DialogTitle>
          <DialogDescription>
            Adjust schedule values for sessional course: <span className="font-semibold text-foreground">{subjectInfo}</span>.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleFormSubmit} className="space-y-4">
          <div className="space-y-1.5">
            <Label htmlFor="reschedule-time">New Timings</Label>
            <Input
              id="reschedule-time"
              value={newTime}
              onChange={(e) => setNewTime(e.target.value)}
              placeholder="e.g. 02:30 PM - 04:00 PM"
              required
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="reschedule-room">New Room / Location</Label>
            <Input
              id="reschedule-room"
              value={newRoom}
              onChange={(e) => setNewRoom(e.target.value)}
              placeholder="e.g. Lab 3 or Room 402"
              required
            />
          </div>

          <DialogFooter className="pt-2">
            <Button type="button" variant="outline" onClick={onClose} className="cursor-pointer">
              Cancel
            </Button>
            <Button type="submit" disabled={!newTime || !newRoom} className="bg-[#2459c8] text-white cursor-pointer">
              Update Schedule
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
