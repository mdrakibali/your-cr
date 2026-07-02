"use client";

import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { routineSchema, type RoutineFormData } from "@/validation/dashboard";

interface RoutineDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: RoutineFormData) => void;
  title: string;
  description: string;
  defaultValues?: RoutineFormData | null;
}

export default function RoutineDialog({
  isOpen,
  onClose,
  onSubmit,
  title,
  description,
  defaultValues,
}: RoutineDialogProps) {
  const form = useForm<RoutineFormData>({
    resolver: zodResolver(routineSchema),
    shouldFocusError: true,
    defaultValues: {
      code: "",
      title: "",
      day: "Monday",
      time: "",
      room: "",
      teacher: "",
      classType: "OFFLINE",
    },
  });

  useEffect(() => {
    if (isOpen) {
      if (defaultValues) {
        form.reset(defaultValues);
      } else {
        form.reset({
          code: "",
          title: "",
          day: "Monday",
          time: "",
          room: "",
          teacher: "",
          classType: "OFFLINE",
        });
      }
    }
  }, [isOpen, defaultValues, form]);

  const handleFormSubmit = (data: RoutineFormData) => {
    onSubmit(data);
    form.reset();
  };

  return (
    <Dialog open={isOpen} onOpenChange={(o) => !o && onClose()}>
      {/* Spacious Dialog using rounded-md and sm:max-w-xl */}
      <DialogContent className="bg-white sm:max-w-xl rounded-md">
        <DialogHeader>
          <DialogTitle className="font-[family-name:var(--font-besley)] text-lg">
            {title}
          </DialogTitle>
          <DialogDescription>
            {description}
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleFormSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="code"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel>Course Code</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="e.g. CSE-301" aria-invalid={!!fieldState.error} className="rounded-md" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="title"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel>Course Title</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="e.g. DBMS" aria-invalid={!!fieldState.error} className="rounded-md" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="day"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Weekly Day</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="h-10 w-full rounded-md">
                          <SelectValue placeholder="Select day" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="rounded-md">
                        <SelectItem value="Monday">Monday</SelectItem>
                        <SelectItem value="Tuesday">Tuesday</SelectItem>
                        <SelectItem value="Wednesday">Wednesday</SelectItem>
                        <SelectItem value="Thursday">Thursday</SelectItem>
                        <SelectItem value="Friday">Friday</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="classType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Delivery Format</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="h-10 w-full rounded-md">
                          <SelectValue placeholder="Select format" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="rounded-md">
                        <SelectItem value="OFFLINE">Offline (In-Person)</SelectItem>
                        <SelectItem value="ONLINE">Online (Virtual)</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="time"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel>Class Timings</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="e.g. 09:00 AM - 10:30 AM" aria-invalid={!!fieldState.error} className="rounded-md" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="room"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel>Room / Location</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="e.g. Room 402, Lab 3" aria-invalid={!!fieldState.error} className="rounded-md" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="teacher"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel>Instructor</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="e.g. Dr. Abu Sayeed" aria-invalid={!!fieldState.error} className="rounded-md" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <DialogFooter className="pt-2">
              <Button type="button" variant="outline" onClick={onClose} className="cursor-pointer rounded-md">
                Cancel
              </Button>
              <Button type="submit" className="bg-[#2459c8] text-white cursor-pointer rounded-md">
                Save Class Slot
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
