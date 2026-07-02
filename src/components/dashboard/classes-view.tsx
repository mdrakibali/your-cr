"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Presentation, Save, Edit3, Settings, ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";

interface ClassesViewProps {
  role: "CR" | "STUDENT";
}

const classParamsSchema = z.object({
  department: z.string().min(1, "Department is required"),
  program: z.string().min(1, "Program / Course is required"),
  batch: z.string().min(1, "Batch / intake year is required"),
  section: z.string().min(1, "Section / shift is required"),
  term: z.string().min(1, "Current term is required"),
});

type ClassParamsFormData = z.infer<typeof classParamsSchema>;

export default function ClassesView({ role }: ClassesViewProps) {
  const isCR = role === "CR";

  const form = useForm<ClassParamsFormData>({
    resolver: zodResolver(classParamsSchema),
    shouldFocusError: true,
    defaultValues: {
      department: "Computer Science & Engineering",
      program: "B.Sc in CSE",
      batch: "2023-2027",
      section: "Section A",
      term: "6th Semester",
    },
  });

  const { isSubmitting } = form.formState;

  const onSubmit = async (_data: ClassParamsFormData) => {
    await new Promise((r) => setTimeout(r, 1000));
    toast.success("Class parameters updated successfully!");
  };

  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      <div>
        <h2 className="text-xl font-bold text-foreground font-[family-name:var(--font-besley)]">
          Class Settings
        </h2>
        <p className="text-sm text-muted-foreground mt-0.5">
          General parameters and metadata configuration for the active classroom.
        </p>
      </div>

      <Card className="rounded-xl border border-border shadow-none bg-white">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="size-10 bg-primary/10 text-primary rounded-xl flex items-center justify-center">
              <Presentation className="size-5" />
            </div>
            <div>
              <CardTitle className="text-sm font-semibold">Classroom Configuration</CardTitle>
              <CardDescription className="text-xs">
                Active Section Profile: <span className="font-semibold text-foreground">B.Sc in CSE • Sec A</span>
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              <FormField
                control={form.control}
                name="department"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel>Department / Group</FormLabel>
                    <FormControl>
                      <Input {...field} disabled={!isCR} placeholder="e.g. Science, CSE" aria-invalid={!!fieldState.error} className="h-10 w-full" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="program"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel>Program / Course</FormLabel>
                    <FormControl>
                      <Input {...field} disabled={!isCR} placeholder="e.g. HSC, B.Sc" aria-invalid={!!fieldState.error} className="h-10 w-full" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="batch"
                  render={({ field, fieldState }) => (
                    <FormItem>
                      <FormLabel>Batch / Intake Year</FormLabel>
                      <FormControl>
                        <Input {...field} disabled={!isCR} placeholder="e.g. 2023-2027" aria-invalid={!!fieldState.error} className="h-10 w-full" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="section"
                  render={({ field, fieldState }) => (
                    <FormItem>
                      <FormLabel>Section / Shift</FormLabel>
                      <FormControl>
                        <Input {...field} disabled={!isCR} placeholder="e.g. Sec A, Shift 1" aria-invalid={!!fieldState.error} className="h-10 w-full" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="term"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel>Current Academic Term</FormLabel>
                    <FormControl>
                      <Input {...field} disabled={!isCR} placeholder="e.g. 6th Semester or 2nd Year" aria-invalid={!!fieldState.error} className="h-10 w-full" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {!isCR && (
                <div className="flex gap-2.5 bg-muted/40 border border-border rounded-lg p-3 text-xs text-muted-foreground leading-normal items-start">
                  <ShieldAlert className="size-4 text-muted-foreground shrink-0 mt-0.5" />
                  <span>
                    Only the Class Representative (CR) has permission to edit class parameters.
                  </span>
                </div>
              )}

              {isCR && (
                <div className="pt-2">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#2459c8] text-white cursor-pointer h-10 flex items-center justify-center gap-1.5 font-semibold"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="size-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Saving…
                      </>
                    ) : (
                      <>
                        <Save className="size-4" /> Save Class Parameters
                      </>
                    )}
                  </Button>
                </div>
              )}
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
