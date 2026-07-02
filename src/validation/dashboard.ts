import { z } from "zod";

export const teacherSchema = z.object({
  name: z.string().min(1, "Instructor name is required").min(2, "Name must be at least 2 characters"),
  designation: z.string().min(1, "Designation is required"),
  email: z.string().min(1, "Email is required").email("Enter a valid email address"),
  phone: z.string().min(1, "Phone number is required").min(5, "Enter a valid phone number"),
  subject: z.string().min(1, "Assigned subject is required"),
  avatar: z.string().optional(),
});

export type TeacherFormData = z.infer<typeof teacherSchema>;

export const studentInviteSchema = z.object({
  name: z.string().min(1, "Student name is required"),
  roll: z.string().min(1, "Roll / ID is required"),
  email: z.string().min(1, "Email is required").email("Enter a valid email"),
  phone: z.string().min(1, "Phone is required").min(5, "Enter a valid phone number"),
  avatar: z.string().optional(),
});

export type StudentInviteFormData = z.infer<typeof studentInviteSchema>;

export const subjectSchema = z.object({
  code: z.string().min(1, "Subject code is required"),
  title: z.string().min(1, "Subject title is required"),
  credits: z.string().min(1, "Credit hours are required"),
  teacher: z.string().min(1, "Assigned instructor is required"),
});

export type SubjectFormData = z.infer<typeof subjectSchema>;

export const noticeSchema = z.object({
  title: z.string().min(1, "Title is required").min(3, "Title must be at least 3 characters"),
  body: z.string().min(1, "Notice body is required").min(10, "Notice body must be at least 10 characters"),
  priority: z.enum(["NORMAL", "IMPORTANT", "URGENT"], {
    required_error: "Priority level is required",
  }),
  attachmentUrl: z.string().url("Enter a valid URL").or(z.literal("")),
});

export type NoticeFormData = z.infer<typeof noticeSchema>;

export const issueSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Please provide a detailed description").min(10, "Must be at least 10 characters"),
  category: z.string().min(1, "Please select a category"),
});

export type IssueFormData = z.infer<typeof issueSchema>;

export const assessmentSchema = z.object({
  title: z.string().min(1, "Title is required"),
  subject: z.string().min(1, "Please select a subject"),
  type: z.enum(["ASSIGNMENT", "QUIZ", "EXAM", "LAB"], {
    required_error: "Assessment type is required",
  }),
  dueDate: z.string().min(1, "Due date is required"),
  dueTime: z.string().min(1, "Due time is required"),
  description: z.string().optional(),
});

export const routineSchema = z.object({
  code: z.string().min(1, "Course code is required"),
  title: z.string().min(1, "Course title is required"),
  day: z.string().min(1, "Select day is required"),
  time: z.string().min(1, "Class timing is required"),
  room: z.string().min(1, "Room/Location is required"),
  teacher: z.string().min(1, "Teacher/Instructor is required"),
  classType: z.enum(["ONLINE", "OFFLINE"], {
    required_error: "Class type is required",
  }),
});

export type RoutineFormData = z.infer<typeof routineSchema>;
