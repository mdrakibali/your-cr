"use client";

import React, { useState } from "react";
import { School, Award, Layers, Shuffle, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useDashboard } from "./dashboard-layout-wrapper";

const HISTORICAL_BATCHES = [
  { id: "b1", name: "Batch of 2023-2027 (Current)", code: "B23", active: true, department: "CSE", studentCount: 54 },
  { id: "b2", name: "Batch of 2022-2026", code: "B22", active: false, department: "CSE", studentCount: 60 },
  { id: "b3", name: "Batch of 2021-2025", code: "B21", active: false, department: "CSE", studentCount: 58 },
  { id: "b4", name: "Batch of 2020-2024", code: "B20", active: false, department: "CSE", studentCount: 62 },
];

export default function AcademicInfo() {
  const { role } = useDashboard();
  const [batches, setBatches] = useState(HISTORICAL_BATCHES);
  
  const activeBatch = batches.find((b) => b.active) || batches[0];

  const handleSwitchBatch = (id: string) => {
    setBatches(
      batches.map((b) => ({
        ...b,
        active: b.id === id,
      }))
    );
    const target = batches.find((b) => b.id === id);
    if (target) {
      toast.success(`Switched active academic scope to ${target.name}!`);
    }
  };

  return (
    <div className="space-y-6 max-w-3xl mx-auto">
      {/* Header */}
      <div>
        <h2 className="text-xl font-bold text-foreground font-[family-name:var(--font-besley)]">
          Academic Profile
        </h2>
        <p className="text-sm text-muted-foreground mt-0.5">
          Verify institutional enrollments, active sessional batches, and historic term schedules.
        </p>
      </div>

      {/* Primary Institution Info Card */}
      <Card className="rounded-md border border-border shadow-none bg-white">
        <CardHeader className="p-6">
          <div className="flex items-center gap-3">
            <div className="size-12 bg-primary/10 text-primary flex items-center justify-center shrink-0 rounded-md">
              <School className="size-6" />
            </div>
            <div>
              <CardTitle className="text-base font-bold">Dhaka Institute of Technology</CardTitle>
              <CardDescription className="text-xs">
                Affiliated under Ministry of Education • Institution ID: DIT-837
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6 pt-0 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-muted/60 text-xs sm:text-sm">
            <div className="space-y-1">
              <span className="text-xs text-muted-foreground">Active Department</span>
              <p className="font-semibold text-foreground">Computer Science & Engineering</p>
            </div>
            <div className="space-y-1">
              <span className="text-xs text-muted-foreground">Current Affiliated Batch</span>
              <p className="font-semibold text-[#2459c8] flex items-center gap-1.5">
                <Award className="size-4 shrink-0" /> {activeBatch.name}
              </p>
            </div>
            <div className="space-y-1">
              <span className="text-xs text-muted-foreground">Enrolled Program</span>
              <p className="font-semibold text-foreground">B.Sc in Computer Science (4-Year Sessional)</p>
            </div>
            <div className="space-y-1">
              <span className="text-xs text-muted-foreground">Role Scope</span>
              <p className="font-semibold text-foreground uppercase">{role}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Batch Switching List */}
      <div className="space-y-4">
        <div>
          <h3 className="text-base font-bold text-foreground">Switch Academic Batch</h3>
          <p className="text-xs text-muted-foreground mt-0.5">
            Switch your dashboard scope to retrieve historical notices, routine setups, or schedules under previous intakes.
          </p>
        </div>

        <div className="space-y-3">
          {batches.map((b) => (
            <div
              key={b.id}
              className={`p-4 border rounded-md bg-white flex items-center justify-between gap-4 transition-all ${
                b.active
                  ? "border-[#2459c8] ring-1 ring-[#2459c8]/20"
                  : "border-border hover:border-primary/20"
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`size-9 flex items-center justify-center shrink-0 rounded-md ${b.active ? 'bg-primary/10 text-primary' : 'bg-muted text-muted-foreground'}`}>
                  <Layers className="size-4.5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-foreground">{b.name}</h4>
                  <p className="text-[10px] text-muted-foreground mt-0.5">
                    Dept: {b.department} • Code: {b.code} • Total students: {b.studentCount}
                  </p>
                </div>
              </div>

              <div>
                {b.active ? (
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-green-700 bg-green-100 px-2.5 py-1 rounded-md">
                    <CheckCircle className="size-3.5" /> Active
                  </span>
                ) : (
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleSwitchBatch(b.id)}
                    className="text-xs hover:bg-[#2459c8] hover:text-white rounded-md cursor-pointer h-8 flex items-center gap-1"
                  >
                    <Shuffle className="size-3" /> Switch
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
