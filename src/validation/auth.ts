import { z } from "zod";

/* ─────────────────────────────── Login ─────────────────────────────── */

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Enter a valid email address"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(6, "Password must be at least 6 characters"),
  remember: z.boolean().optional(),
});

export type LoginFormData = z.infer<typeof loginSchema>;

/* ─────────────────────────── Register Step 1 ───────────────────────── */

export const registerStep1Schema = z
  .object({
    firstName: z
      .string()
      .min(1, "First name is required")
      .min(2, "First name must be at least 2 characters")
      .max(50, "First name is too long"),
    lastName: z
      .string()
      .min(1, "Last name is required")
      .min(2, "Last name must be at least 2 characters")
      .max(50, "Last name is too long"),
    email: z
      .string()
      .min(1, "Email is required")
      .email("Enter a valid email address"),
    phone: z
      .string()
      .min(1, "Phone number is required")
      .min(5, "Enter a valid phone number"),
    password: z
      .string()
      .min(1, "Password is required")
      .min(8, "Password must be at least 8 characters")
      .regex(/[A-Z]/, "Include at least one uppercase letter")
      .regex(/[0-9]/, "Include at least one number"),
    confirmPassword: z.string().min(1, "Please confirm your password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type RegisterStep1Data = z.infer<typeof registerStep1Schema>;

/* ─────────────────────────── Register Step 2 ───────────────────────── */

export const registerStep2Schema = z.object({
  instituteType: z.enum(["COLLEGE", "DIPLOMA", "UNIVERSITY"], {
    required_error: "Please select your institution type",
  }),
  instituteName: z
    .string()
    .min(1, "Institution name is required")
    .min(3, "Institution name must be at least 3 characters"),
  program: z
    .string()
    .min(1, "Program / Course is required")
    .min(2, "Program name must be at least 2 characters"),
  department: z
    .string()
    .min(1, "Department / Group is required")
    .min(2, "Department must be at least 2 characters"),
});

export type RegisterStep2Data = z.infer<typeof registerStep2Schema>;

/* ─────────────────────────── Register Step 3 ───────────────────────── */

export const registerStep3Schema = z.object({
  batch: z
    .string()
    .min(1, "Batch / Year is required")
    .min(2, "Enter a valid batch identifier"),
  section: z
    .string()
    .min(1, "Section / Shift is required")
    .min(1, "Enter a valid section name"),
  termType: z.enum(["SEMESTER", "YEAR"], {
    required_error: "Please select the term system",
  }),
  currentTerm: z
    .string()
    .min(1, "Current term is required"),
});

export type RegisterStep3Data = z.infer<typeof registerStep3Schema>;

/* ─────────────────────────── Register Step 4 ───────────────────────── */

export const registerStep4Schema = z.object({
  idCard: z
    .custom<FileList>()
    .refine((files) => files && files.length > 0, "ID card is required")
    .refine(
      (files) => files && files[0] && files[0].size <= 5 * 1024 * 1024,
      "File size must be under 5 MB"
    )
    .refine(
      (files) =>
        files &&
        files[0] &&
        ["image/jpeg", "image/png", "application/pdf"].includes(files[0].type),
      "Only JPG, PNG or PDF files are allowed"
    ),
  studentId: z
    .custom<FileList>()
    .refine((files) => files && files.length > 0, "Student ID is required")
    .refine(
      (files) => files && files[0] && files[0].size <= 5 * 1024 * 1024,
      "File size must be under 5 MB"
    )
    .refine(
      (files) =>
        files &&
        files[0] &&
        ["image/jpeg", "image/png", "application/pdf"].includes(files[0].type),
      "Only JPG, PNG or PDF files are allowed"
    ),
  terms: z.boolean().refine((v) => v === true, {
    message: "You must agree to the Terms of Service",
  }),
});

export type RegisterStep4Data = z.infer<typeof registerStep4Schema>;

/* ─────────────────────── Forgot Password ───────────────────────────── */

export const forgotPasswordSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Enter a valid email address"),
});

export type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>;

/* ─────────────────────── Reset Password ────────────────────────────── */

export const resetPasswordSchema = z
  .object({
    password: z
      .string()
      .min(1, "Password is required")
      .min(8, "Password must be at least 8 characters")
      .regex(/[A-Z]/, "Include at least one uppercase letter")
      .regex(/[0-9]/, "Include at least one number"),
    confirmPassword: z.string().min(1, "Please confirm your password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type ResetPasswordFormData = z.infer<typeof resetPasswordSchema>;
