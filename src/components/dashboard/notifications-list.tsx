"use client";

import React, { useState } from "react";
import { Bell, Trash2, Calendar, ClipboardList, Megaphone, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface NotificationsListProps {
  role: "CR" | "STUDENT";
}

const INITIAL_NOTIFICATIONS = [
  {
    id: "1",
    type: "ROUTINE",
    title: "Class Rescheduled today",
    body: "Computer Networks (CSE-302) rescheduled by Farhana Yasmin to 02:30 PM (Lab 3) instead of 10:45 AM (Room 405).",
    time: "2 hours ago",
    read: false,
  },
  {
    id: "2",
    type: "ASSESSMENT",
    title: "New Assignment Posted",
    body: "CR posted sessional database assignment deadline. Due by July 15, 2026, at 11:59 PM.",
    time: "5 hours ago",
    read: false,
  },
  {
    id: "3",
    type: "NOTICE",
    title: "Sessional Fee Submission Reminder",
    body: "Please submit sessional receipt card copies to department offices by next Monday.",
    time: "1 day ago",
    read: true,
  },
];

export default function NotificationsList({ role }: NotificationsListProps) {
  const [notifications, setNotifications] = useState(INITIAL_NOTIFICATIONS);

  const handleMarkAllRead = () => {
    setNotifications(notifications.map((n) => ({ ...n, read: true })));
  };

  const handleDelete = (id: string) => {
    setNotifications(notifications.filter((n) => n.id !== id));
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "ROUTINE":
        return Calendar;
      case "ASSESSMENT":
        return ClipboardList;
      case "NOTICE":
        return Megaphone;
      default:
        return Bell;
    }
  };

  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <div className="space-y-6 max-w-3xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-foreground font-[family-name:var(--font-besley)]">
            Notifications ({unreadCount})
          </h2>
          <p className="text-sm text-muted-foreground mt-0.5">
            Log of active reminders and updates regarding classroom routines and sessional tasks.
          </p>
        </div>
        {unreadCount > 0 && (
          <Button
            variant="outline"
            size="sm"
            onClick={handleMarkAllRead}
            className="flex items-center gap-1.5 cursor-pointer h-9"
          >
            <CheckCircle2 className="size-4" /> Mark all read
          </Button>
        )}
      </div>

      {/* Notifications list feed */}
      <div className="space-y-4">
        {notifications.map((notif) => {
          const Icon = getTypeIcon(notif.type);
          return (
            <div
              key={notif.id}
              className={cn(
                "p-5 rounded-xl border flex gap-4 bg-white transition-colors",
                notif.read ? "border-border" : "border-primary/20 bg-primary/5/10"
              )}
            >
              {/* Type indicator icon */}
              <div
                className={cn(
                  "p-2.5 rounded-xl shrink-0 h-10 w-10 flex items-center justify-center",
                  notif.read ? "bg-muted text-muted-foreground" : "bg-primary/10 text-primary"
                )}
              >
                <Icon className="size-5" />
              </div>

              {/* Body details */}
              <div className="flex-1 min-w-0 space-y-1">
                <div className="flex items-start justify-between gap-3">
                  <h4 className="font-semibold text-foreground text-sm truncate leading-none">
                    {notif.title}
                  </h4>
                  <span className="text-[10px] text-muted-foreground shrink-0 mt-0.5">
                    {notif.time}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {notif.body}
                </p>
              </div>

              {/* Remove action */}
              <button
                onClick={() => handleDelete(notif.id)}
                className="text-muted-foreground hover:text-red-600 transition-colors p-1.5 shrink-0 self-start cursor-pointer hover:bg-red-50 rounded-lg"
                aria-label="Delete notification"
              >
                <Trash2 className="size-4" />
              </button>
            </div>
          );
        })}

        {notifications.length === 0 && (
          <div className="text-center py-16 border border-dashed border-border rounded-xl bg-white">
            <Bell className="size-8 text-muted-foreground mx-auto mb-2" />
            <p className="text-sm font-semibold text-foreground">All caught up!</p>
            <p className="text-xs text-muted-foreground mt-1">No notifications active right now.</p>
          </div>
        )}
      </div>
    </div>
  );
}
