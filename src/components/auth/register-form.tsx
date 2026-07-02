"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  FileText,
  Hash,
  Info,
  Lock,
  Mail,
  Phone,
  Plus,
  ShieldCheck,
  Upload,
  User,
} from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

import Logo from "@/components/common/logo";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import {
  registerStep1Schema,
  registerStep2Schema,
  registerStep3Schema,
  registerStep4Schema,
  type RegisterStep1Data,
  type RegisterStep2Data,
  type RegisterStep3Data,
  type RegisterStep4Data,
} from "@/validation/auth";

/* ─── Mock institution list ─── */
const INSTITUTIONS = [
  "Dhaka University",
  "BUET",
  "BRAC University",
  "North South University",
  "AIUB",
  "East West University",
  "Rajshahi University",
  "Chittagong University",
  "Khulna University",
  "KUET",
  "CUET",
  "RUET",
  "Notre Dame College",
  "Dhaka College",
  "Rajshahi College",
  "Dhaka Polytechnic Institute",
  "Chittagong Polytechnic Institute",
  "Rajshahi Polytechnic Institute",
];

/* ─── Step indicator ─── */
const STEPS = [
  { number: 1, label: "Personal" },
  { number: 2, label: "Institution" },
  { number: 3, label: "Batch & Section" },
  { number: 4, label: "Documents" },
];

function StepIndicator({ current }: { current: number }) {
  return (
    <div className="flex items-center w-full mb-8">
      {STEPS.map((step, i) => {
        const done = step.number < current;
        const active = step.number === current;
        return (
          <React.Fragment key={step.number}>
            <div className="flex flex-col items-center shrink-0">
              <div
                className={cn(
                  "size-8 rounded-full flex items-center justify-center text-xs font-semibold border-2 transition-all",
                  done && "bg-[#2459c8] border-[#2459c8] text-white",
                  active && "bg-white border-[#2459c8] text-[#2459c8]",
                  !done && !active && "bg-white border-border text-muted-foreground"
                )}
              >
                {done ? <CheckCircle2 className="size-4" /> : step.number}
              </div>
              <span
                className={cn(
                  "mt-1.5 text-[10px] font-medium whitespace-nowrap hidden xs:block",
                  active && "text-[#2459c8]",
                  done && "text-foreground",
                  !done && !active && "text-muted-foreground"
                )}
              >
                {step.label}
              </span>
            </div>
            {i < STEPS.length - 1 && (
              <div
                className={cn(
                  "flex-1 h-[2px] mx-2 mb-4 xs:mb-7 rounded-full transition-all",
                  done ? "bg-[#2459c8]" : "bg-border"
                )}
              />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}

/* ─── Institution Combobox ─── */
function InstitutionCombobox({
  value,
  onChange,
  hasError,
}: {
  value: string;
  onChange: (v: string) => void;
  hasError?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  const filtered = INSTITUTIONS.filter((inst) =>
    inst.toLowerCase().includes(search.toLowerCase())
  );

  const showCreateNew =
    search.trim().length > 1 &&
    !INSTITUTIONS.some((i) => i.toLowerCase() === search.trim().toLowerCase());

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          type="button"
          role="combobox"
          aria-expanded={open}
          aria-invalid={hasError}
          className={cn(
            "flex h-10 w-full items-center justify-between rounded-lg border bg-transparent px-3 py-2 text-sm text-left transition-colors outline-none",
            "focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50",
            hasError
              ? "border-rose-500 focus-visible:border-rose-500 focus-visible:ring-3 focus-visible:ring-rose-500/20"
              : "border-input focus-visible:border-ring"
          )}
        >
          <span className={cn("truncate", !value && "text-muted-foreground")}>
            {value || "Search or type institution name"}
          </span>
          <ChevronDown className="size-4 shrink-0 text-muted-foreground ml-2" />
        </button>
      </PopoverTrigger>
      <PopoverContent
        className="w-[var(--radix-popover-trigger-width)] p-1 bg-popover text-popover-foreground shadow-md border border-border rounded-lg"
        align="start"
        sideOffset={4}
      >
        <Command shouldFilter={false} className="bg-transparent">
          <CommandInput
            placeholder="Search institution…"
            value={search}
            onValueChange={setSearch}
          />
          <CommandList className="max-h-60 overflow-y-auto p-1 space-y-1">
            {showCreateNew && (
              <CommandGroup heading="Create new" className="px-1.5 py-1 text-xs font-medium text-muted-foreground">
                <CommandItem
                  onSelect={() => {
                    onChange(search.trim());
                    setSearch("");
                    setOpen(false);
                  }}
                  className="gap-2 text-[#2459c8] cursor-pointer rounded-md py-1.5 px-3 text-sm data-selected:bg-accent data-selected:text-accent-foreground"
                >
                  <Plus className="size-4 shrink-0" />
                  <span>
                    Add &quot;<strong>{search.trim()}</strong>&quot;
                  </span>
                </CommandItem>
              </CommandGroup>
            )}
            {filtered.length > 0 && (
              <CommandGroup heading="Institutions" className="px-1.5 py-1 text-xs font-medium text-muted-foreground">
                {filtered.slice(0, 10).map((inst) => (
                  <CommandItem
                    key={inst}
                    value={inst}
                    onSelect={() => {
                      onChange(inst);
                      setSearch("");
                      setOpen(false);
                    }}
                    data-checked={value === inst}
                    className="cursor-pointer rounded-md py-1.5 px-3 text-sm data-selected:bg-accent data-selected:text-accent-foreground"
                  >
                    {inst}
                  </CommandItem>
                ))}
              </CommandGroup>
            )}
            {filtered.length === 0 && !showCreateNew && (
              <CommandEmpty>No institution found.</CommandEmpty>
            )}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

/* ─── Shared nav buttons ─── */
/* NOTE: Continue/Submit is always type="submit" so the parent <form>
   triggers handleSubmit → zod validation → onNext only if valid */
function NavButtons({
  onBack,
  loading,
  submitLabel = "Continue",
}: {
  onBack?: () => void;
  loading?: boolean;
  submitLabel?: string;
}) {
  return (
    <div className={cn("flex gap-3 pt-2", !onBack && "justify-end")}>
      {onBack && (
        <Button
          type="button"
          onClick={onBack}
          variant="outline"
          className="flex-1 h-10 cursor-pointer"
        >
          <ArrowLeft className="size-4" /> Back
        </Button>
      )}
      <Button
        type="submit"
        disabled={loading}
        className={cn(
          "h-10 bg-[#2459c8] text-white font-semibold cursor-pointer disabled:opacity-60",
          onBack ? "flex-1" : "w-full"
        )}
      >
        {loading ? (
          <>
            <span className="size-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Submitting…
          </>
        ) : (
          <>
            {submitLabel} <ArrowRight className="size-4" />
          </>
        )}
      </Button>
    </div>
  );
}

/* ─── Reusable icon-prefixed input ─── */
function IconInput({
  icon: Icon,
  hasError,
  ...props
}: React.ComponentProps<typeof Input> & {
  icon: React.ElementType;
  hasError?: boolean;
}) {
  return (
    <div className="relative">
      <Icon className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground pointer-events-none z-10" />
      <Input
        {...props}
        aria-invalid={hasError}
        className={cn("pl-9 h-10 w-full", props.className)}
      />
    </div>
  );
}

/* ══════════════════════════════════════
   STEP 1 — Personal Info
══════════════════════════════════════ */
function Step1({ onNext }: { onNext: () => void }) {
  const form = useForm<RegisterStep1Data>({
    resolver: zodResolver(registerStep1Schema),
    shouldFocusError: true,
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onNext)} className="space-y-4" noValidate>
        {/* First + Last name */}
        <div className="grid grid-cols-1 xs:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <IconInput
                    {...field}
                    icon={User}
                    placeholder="John"
                    hasError={!!fieldState.error}
                    autoComplete="given-name"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Doe"
                    aria-invalid={!!fieldState.error}
                    className="h-10 w-full"
                    autoComplete="family-name"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="email"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <IconInput
                  {...field}
                  icon={Mail}
                  type="email"
                  placeholder="you@example.com"
                  hasError={!!fieldState.error}
                  autoComplete="email"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <IconInput
                  {...field}
                  icon={Phone}
                  type="tel"
                  placeholder="01700-000000"
                  hasError={!!fieldState.error}
                  autoComplete="tel"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <IconInput
                  {...field}
                  icon={Lock}
                  type="password"
                  placeholder="••••••••"
                  hasError={!!fieldState.error}
                  autoComplete="new-password"
                />
              </FormControl>
              <FormDescription>
                Min 8 characters, 1 uppercase letter, 1 number
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <IconInput
                  {...field}
                  icon={ShieldCheck}
                  type="password"
                  placeholder="••••••••"
                  hasError={!!fieldState.error}
                  autoComplete="new-password"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <NavButtons submitLabel="Continue" />
      </form>
    </Form>
  );
}

/* ══════════════════════════════════════
   STEP 2 — Institution
══════════════════════════════════════ */
function Step2({ onNext, onBack }: { onNext: () => void; onBack: () => void }) {
  const form = useForm<RegisterStep2Data>({
    resolver: zodResolver(registerStep2Schema),
    shouldFocusError: true,
    defaultValues: {
      instituteType: undefined,
      instituteName: "",
      program: "",
      department: "",
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onNext)} className="space-y-4" noValidate>
        <FormField
          control={form.control}
          name="instituteType"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel>Institution Type</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger
                    className={cn(
                      "h-10 w-full",
                      fieldState.error &&
                        "border-destructive focus-visible:border-destructive focus-visible:ring-destructive/20"
                    )}
                  >
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="COLLEGE">College (HSC / Alim)</SelectItem>
                  <SelectItem value="DIPLOMA">Diploma</SelectItem>
                  <SelectItem value="UNIVERSITY">University</SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>
                Select the type that matches your institution
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="instituteName"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel>Institution Name</FormLabel>
              <FormControl>
                <InstitutionCombobox
                  value={field.value}
                  onChange={field.onChange}
                  hasError={!!fieldState.error}
                />
              </FormControl>
              <FormDescription>
                Search from the list or type a new name to add it
              </FormDescription>
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
                <Input
                  {...field}
                  placeholder="e.g. B.Sc in CSE, HSC, BBA"
                  aria-invalid={!!fieldState.error}
                  className="h-10 w-full"
                />
              </FormControl>
              <FormDescription>
                e.g. HSC, B.Sc Engineering, BBA, Diploma in Engineering
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="department"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel>Department / Group / Technology</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="e.g. CSE, Science, Computer Technology"
                  aria-invalid={!!fieldState.error}
                  className="h-10 w-full"
                />
              </FormControl>
              <FormDescription>
                e.g. Science, CSE, EEE, Computer Technology
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <NavButtons onBack={onBack} submitLabel="Continue" />
      </form>
    </Form>
  );
}

/* ══════════════════════════════════════
   STEP 3 — Batch & Section
══════════════════════════════════════ */
function Step3({ onNext, onBack }: { onNext: () => void; onBack: () => void }) {
  const form = useForm<RegisterStep3Data>({
    resolver: zodResolver(registerStep3Schema),
    shouldFocusError: true,
    defaultValues: {
      batch: "",
      section: "",
      termType: undefined,
      currentTerm: "",
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onNext)} className="space-y-4" noValidate>
        <FormField
          control={form.control}
          name="batch"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel>Batch / Year</FormLabel>
              <FormControl>
                <IconInput
                  {...field}
                  icon={Hash}
                  placeholder="e.g. 2023-2027, Batch-52, Summer 2025"
                  hasError={!!fieldState.error}
                />
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
                <Input
                  {...field}
                  placeholder="e.g. Section A, 1st Shift - A"
                  aria-invalid={!!fieldState.error}
                  className="h-10 w-full"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="termType"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel>Academic Term System</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger
                    className={cn(
                      "h-10 w-full",
                      fieldState.error &&
                        "border-destructive focus-visible:border-destructive focus-visible:ring-destructive/20"
                    )}
                  >
                    <SelectValue placeholder="Select term system" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="SEMESTER">
                    Semester — University / Diploma
                  </SelectItem>
                  <SelectItem value="YEAR">
                    Yearly — College / National University
                  </SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>
                Semester: 1st Sem, 2nd Sem… — Yearly: 1st Year, 2nd Year…
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="currentTerm"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel>Current Term / Year</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger
                    className={cn(
                      "h-10 w-full",
                      fieldState.error &&
                        "border-destructive focus-visible:border-destructive focus-visible:ring-destructive/20"
                    )}
                  >
                    <SelectValue placeholder="Select current term" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                    <SelectItem key={n} value={String(n)}>
                      {n === 1 ? "1st" : n === 2 ? "2nd" : n === 3 ? "3rd" : `${n}th`}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <NavButtons onBack={onBack} submitLabel="Continue" />
      </form>
    </Form>
  );
}

/* ══════════════════════════════════════
   STEP 4 — Documents
══════════════════════════════════════ */
function Step4({
  onBack,
  onSubmitFinal,
  loading,
}: {
  onBack: () => void;
  onSubmitFinal: () => void;
  loading: boolean;
}) {
  const form = useForm<RegisterStep4Data>({
    resolver: zodResolver(registerStep4Schema),
    shouldFocusError: true,
    defaultValues: { terms: false },
  });

  const [idCardName, setIdCardName] = useState("");
  const [studentIdName, setStudentIdName] = useState("");

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmitFinal)}
        className="space-y-4"
        noValidate
      >
        {/* Info banner */}
        <div className="flex gap-3 bg-primary/5 border border-primary/20 rounded-xl p-4">
          <Info className="size-4 text-[#2459c8] shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-medium text-[#2459c8]">
              Admin review required
            </p>
            <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
              An admin will review your documents before approving your CR account.
            </p>
          </div>
        </div>

        {/* NID */}
        <FormField
          control={form.control}
          name="idCard"
          render={({ field: { onChange, value: _v, ...field }, fieldState }) => (
            <FormItem>
              <FormLabel>National ID Card / Birth Certificate</FormLabel>
              <FormControl>
                <label
                  htmlFor="reg-id-card"
                  className={cn(
                    "flex flex-col items-center justify-center w-full border-2 border-dashed rounded-xl py-6 px-4 cursor-pointer transition-colors",
                    fieldState.error ? "border-destructive" : "border-border"
                  )}
                >
                  <Upload className="size-6 text-muted-foreground mb-2" />
                  {idCardName ? (
                    <span className="text-sm text-[#2459c8] font-medium text-center break-all">
                      {idCardName}
                    </span>
                  ) : (
                    <>
                      <span className="text-sm text-muted-foreground font-medium text-center">
                        Click to upload NID / Birth Certificate
                      </span>
                      <span className="text-xs text-muted-foreground/60 mt-1">
                        JPG, PNG, PDF — up to 5 MB
                      </span>
                    </>
                  )}
                  <input
                    {...field}
                    id="reg-id-card"
                    type="file"
                    accept=".jpg,.jpeg,.png,.pdf"
                    className="sr-only"
                    onChange={(e) => {
                      onChange(e.target.files);
                      setIdCardName(e.target.files?.[0]?.name ?? "");
                    }}
                  />
                </label>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Student ID */}
        <FormField
          control={form.control}
          name="studentId"
          render={({ field: { onChange, value: _v, ...field }, fieldState }) => (
            <FormItem>
              <FormLabel>Student ID Card</FormLabel>
              <FormControl>
                <label
                  htmlFor="reg-student-id"
                  className={cn(
                    "flex flex-col items-center justify-center w-full border-2 border-dashed rounded-xl py-6 px-4 cursor-pointer transition-colors",
                    fieldState.error ? "border-destructive" : "border-border"
                  )}
                >
                  <FileText className="size-6 text-muted-foreground mb-2" />
                  {studentIdName ? (
                    <span className="text-sm text-[#2459c8] font-medium text-center break-all">
                      {studentIdName}
                    </span>
                  ) : (
                    <>
                      <span className="text-sm text-muted-foreground font-medium text-center">
                        Click to upload Student ID Card
                      </span>
                      <span className="text-xs text-muted-foreground/60 mt-1">
                        JPG, PNG, PDF — up to 5 MB
                      </span>
                    </>
                  )}
                  <input
                    {...field}
                    id="reg-student-id"
                    type="file"
                    accept=".jpg,.jpeg,.png,.pdf"
                    className="sr-only"
                    onChange={(e) => {
                      onChange(e.target.files);
                      setStudentIdName(e.target.files?.[0]?.name ?? "");
                    }}
                  />
                </label>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Terms */}
        <FormField
          control={form.control}
          name="terms"
          render={({ field }) => (
            <FormItem className="flex items-start gap-3 space-y-0">
              <FormControl>
                <Checkbox
                  id="reg-terms"
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  className="mt-0.5"
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel
                  htmlFor="reg-terms"
                  className="text-xs text-muted-foreground font-normal leading-relaxed cursor-pointer"
                >
                  I agree to the{" "}
                  <Link href="/terms" className="text-[#2459c8] font-medium">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy" className="text-[#2459c8] font-medium">
                    Privacy Policy
                  </Link>
                  . I confirm the uploaded documents are genuine.
                </FormLabel>
                <FormMessage />
              </div>
            </FormItem>
          )}
        />

        <NavButtons onBack={onBack} submitLabel="Submit Application" loading={loading} />
      </form>
    </Form>
  );
}

/* ─── Headings ─── */
const HEADINGS: Record<number, { title: string; subtitle: string }> = {
  1: { title: "Create your CR account", subtitle: "Start with your personal information" },
  2: { title: "Your institution", subtitle: "Tell us about your college, diploma, or university" },
  3: { title: "Batch & section details", subtitle: "Help us identify your class accurately" },
  4: { title: "Upload your documents", subtitle: "Required for admin verification before approval" },
};

/* ══════════════════════════════════════
   MAIN
══════════════════════════════════════ */
export default function RegisterForm() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const next = () => setStep((s) => Math.min(s + 1, 4));
  const back = () => setStep((s) => Math.max(s - 1, 1));

  const handleFinalSubmit = async () => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 2000));
    setLoading(false);
  };

  const heading = HEADINGS[step];

  return (
    <div className="w-full max-w-[560px] mx-auto">
      <Card className="w-full rounded-2xl ring-1 ring-border shadow-none">
        <CardContent className="p-5 xs:p-6 sm:p-8">
          {/* Logo */}
          <div className="mb-7 flex justify-center">
            <Logo />
          </div>

          {/* Header */}
          <div className="mb-7">
            <div className="inline-flex items-center gap-2 bg-primary/8 rounded-full px-3 py-1 mb-4">
              <span className="size-1.5 rounded-full bg-[#2459c8]" />
              <span className="text-[#2459c8] text-xs font-semibold">
                CR Registration
              </span>
            </div>
            <h1 className="text-xl sm:text-2xl font-medium text-foreground mb-1 font-[family-name:var(--font-besley)]">
              {heading.title}
            </h1>
            <p className="text-sm text-muted-foreground">{heading.subtitle}</p>
          </div>

          <StepIndicator current={step} />

          {step === 1 && <Step1 onNext={next} />}
          {step === 2 && <Step2 onNext={next} onBack={back} />}
          {step === 3 && <Step3 onNext={next} onBack={back} />}
          {step === 4 && (
            <Step4 onBack={back} onSubmitFinal={handleFinalSubmit} loading={loading} />
          )}

          <p className="text-center text-sm text-muted-foreground mt-7">
            Already have an account?{" "}
            <Link href="/login" className="text-[#2459c8] font-semibold">
              Sign in
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
