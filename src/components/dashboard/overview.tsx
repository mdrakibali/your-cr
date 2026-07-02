"use client";

import {
  Users,
  AlertCircle,
  Calendar,
  ClipboardList,
  Plus,
  ArrowRight,
  Megaphone,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

interface OverviewProps {
  role: "CR" | "STUDENT";
}

export default function Overview({ role }: OverviewProps) {
  const isCR = role === "CR";

  const stats = [
    {
      title: "Class Strength",
      value: "54",
      desc: "52 Active, 2 Invited",
      icon: Users,
    },
    {
      title: "Today's Classes",
      value: "4",
      desc: "1 class rescheduled",
      icon: Calendar,
    },
    {
      title: "Pending Tasks",
      value: "3",
      desc: "Assignments & Labs",
      icon: ClipboardList,
    },
    {
      title: "Active Issues",
      value: isCR ? "2 unresolved" : "1 reported by you",
      desc: isCR ? "Assigned to you" : "Under review by CR",
      icon: AlertCircle,
    },
  ];

  const todayClasses = [
    {
      code: "CSE-301",
      title: "Database Management Systems",
      time: "09:00 AM - 10:30 AM",
      room: "Room 402",
      instructor: "Dr. Abu Sayeed",
      status: "COMPLETED",
    },
    {
      code: "CSE-302",
      title: "Computer Networks",
      time: "10:45 AM - 12:15 PM",
      room: "Room 405",
      instructor: "Farhana Yasmin",
      status: "RESCHEDULED",
      rescheduledTime: "02:30 PM - 04:00 PM (Lab 3)",
    },
    {
      code: "CSE-303",
      title: "Software Engineering",
      time: "12:30 PM - 02:00 PM",
      room: "Room 402",
      instructor: "Kamrul Hasan",
      status: "ACTIVE",
    },
    {
      code: "CSE-304",
      title: "Web Technologies Lab",
      time: "02:30 PM - 04:30 PM",
      room: "Lab 2",
      instructor: "Naimul Islam",
      status: "CANCELLED",
    },
  ];

  const recentNotices = [
    {
      id: 1,
      title: "Rescheduling of Networks Class Today",
      body: "Please note that Farhana Yasmin ma'am has rescheduled today's computer networks class to 02:30 PM. We will meet in Lab 3 instead of Room 405.",
      date: "Today, 08:15 AM",
      priority: "URGENT",
      author: "Rakib Hossain (CR)",
    },
    {
      id: 2,
      title: "Sessional Fee Submission Deadline",
      body: "All students must submit their semester registration card copy and sessional fee receipt by next Monday to the department office.",
      date: "Yesterday, 02:00 PM",
      priority: "IMPORTANT",
      author: "Rakib Hossain (CR)",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Banner */}
      <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-foreground font-[family-name:var(--font-besley)]">
            Hello, Rakib Hossain!
          </h2>
          <p className="text-sm text-muted-foreground mt-1">
            {isCR
              ? "You are logged in as the Class Representative. Keep your class updated."
              : "Welcome to your class portal. Check schedules, notices and deadlines below."}
          </p>
        </div>

        {/* Quick Actions */}
        <div className="flex flex-wrap gap-3">
          {isCR ? (
            <>
              <Button asChild className="bg-[#2459c8] text-white cursor-pointer h-10">
                <Link href="/dashboard/notice">
                  <Plus className="size-4 mr-1.5" /> Post Notice
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-10 cursor-pointer">
                <Link href="/dashboard/routine">
                  Modify Routine
                </Link>
              </Button>
            </>
          ) : (
            <>
              <Button asChild className="bg-[#2459c8] text-white cursor-pointer h-10">
                <Link href="/dashboard/issues">
                  <AlertCircle className="size-4 mr-1.5" /> Report Issue
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-10 cursor-pointer">
                <Link href="/dashboard/routine">
                  View Full Schedule
                </Link>
              </Button>
            </>
          )}
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <Card key={i} className="rounded-xl border border-border shadow-none bg-white">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-muted-foreground">
                    {stat.title}
                  </span>
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    <Icon className="size-4" />
                  </div>
                </div>
                <div className="mt-3">
                  <span className="text-2xl font-bold text-foreground font-[family-name:var(--font-besley)]">
                    {stat.value}
                  </span>
                  <p className="text-xs text-muted-foreground mt-1">{stat.desc}</p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Two Columns Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Today's Schedule */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-foreground font-[family-name:var(--font-besley)]">
              Today&apos;s Schedule
            </h3>
            <Link
              href="/dashboard/routine"
              className="text-xs text-[#2459c8] font-semibold flex items-center gap-1 hover:underline"
            >
              Full Routine <ArrowRight className="size-3" />
            </Link>
          </div>

          <div className="space-y-4">
            {todayClasses.map((cls, i) => (
              <div
                key={i}
                className={cn(
                  "p-5 rounded-xl border flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white",
                  cls.status === "CANCELLED"
                    ? "border-red-200 bg-red-50/10"
                    : cls.status === "RESCHEDULED"
                    ? "border-amber-200 bg-amber-50/10"
                    : "border-border"
                )}
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-[#2459c8] bg-primary/10 px-2 py-0.5 rounded-full">
                      {cls.code}
                    </span>
                    <span className="text-sm font-semibold text-foreground">
                      {cls.title}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {cls.instructor} • {cls.room}
                  </p>
                  {cls.status === "RESCHEDULED" && (
                    <p className="text-xs text-amber-600 font-semibold mt-1">
                      Rescheduled to: {cls.rescheduledTime}
                    </p>
                  )}
                </div>

                <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0">
                  <span className="text-xs font-medium text-muted-foreground">
                    {cls.time}
                  </span>

                  <span
                    className={cn(
                      "text-[10px] font-bold px-2 py-1 rounded-full",
                      cls.status === "COMPLETED" && "bg-green-100 text-green-700",
                      cls.status === "RESCHEDULED" && "bg-amber-100 text-amber-700",
                      cls.status === "ACTIVE" && "bg-blue-100 text-blue-700",
                      cls.status === "CANCELLED" && "bg-red-100 text-red-700"
                    )}
                  >
                    {cls.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Notices Pinboard */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-foreground font-[family-name:var(--font-besley)]">
              Latest Notices
            </h3>
            <Link
              href="/dashboard/notice"
              className="text-xs text-[#2459c8] font-semibold flex items-center gap-1 hover:underline"
            >
              All Notices <ArrowRight className="size-3" />
            </Link>
          </div>

          <div className="space-y-4">
            {recentNotices.map((notice) => (
              <Card key={notice.id} className="rounded-xl border border-border shadow-none bg-white">
                <CardHeader className="p-4 pb-2">
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={cn(
                        "text-[9px] font-bold px-2 py-0.5 rounded-full",
                        notice.priority === "URGENT"
                          ? "bg-red-100 text-red-700"
                          : "bg-amber-100 text-amber-700"
                      )}
                    >
                      {notice.priority}
                    </span>
                    <span className="text-[10px] text-muted-foreground">{notice.date}</span>
                  </div>
                  <CardTitle className="text-sm font-semibold text-foreground mt-2">
                    {notice.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
                    {notice.body}
                  </p>
                  <p className="text-[10px] text-foreground font-semibold mt-3 text-right">
                    — {notice.author}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
