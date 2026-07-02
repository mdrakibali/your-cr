"use client";

import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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
  FormDescription,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { noticeSchema, type NoticeFormData } from "@/validation/dashboard";

interface NoticeDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: NoticeFormData) => void;
}

export default function NoticeDialog({
  isOpen,
  onClose,
  onSubmit,
}: NoticeDialogProps) {
  const form = useForm<NoticeFormData>({
    resolver: zodResolver(noticeSchema),
    shouldFocusError: true,
    defaultValues: { title: "", body: "", priority: "NORMAL", attachmentUrl: "" },
  });

  useEffect(() => {
    if (isOpen) {
      form.reset({ title: "", body: "", priority: "NORMAL", attachmentUrl: "" });
    }
  }, [isOpen, form]);

  const handleFormSubmit = (data: NoticeFormData) => {
    onSubmit(data);
    form.reset();
  };

  return (
    <Dialog open={isOpen} onOpenChange={(o) => !o && onClose()}>
      {/* Spacious dialog content container (max-w-2xl) */}
      <DialogContent className="bg-white max-w-2xl">
        <DialogHeader>
          <DialogTitle className="font-[family-name:var(--font-besley)] text-lg">
            Publish Notice
          </DialogTitle>
          <DialogDescription>
            Broadcast an announcement to the sessional class feed.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleFormSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel>Notice Title</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="e.g. Schedule Change or Fee submission" aria-invalid={!!fieldState.error} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="priority"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Priority Level</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="h-10 w-full">
                        <SelectValue placeholder="Select priority" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="NORMAL">Normal — General Updates</SelectItem>
                      <SelectItem value="IMPORTANT">Important — Submission deadlines</SelectItem>
                      <SelectItem value="URGENT">Urgent — Immediate cancellations/reschedules</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="body"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel>Notice Content</FormLabel>
                  <FormControl>
                    <Textarea {...field} rows={5} placeholder="Provide details regarding this notice..." aria-invalid={!!fieldState.error} className="resize-none" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="attachmentUrl"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel>Attachment / Reference Link (Optional)</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="e.g. https://drive.google.com/..." aria-invalid={!!fieldState.error} />
                  </FormControl>
                  <FormDescription>Google Drive link, spreadsheet format, or notice PDF.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <DialogFooter className="pt-2">
              <Button type="button" variant="outline" onClick={onClose} className="cursor-pointer">
                Cancel
              </Button>
              <Button type="submit" className="bg-[#2459c8] text-white cursor-pointer">
                Publish Notice
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
