"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  Lock,
  ShieldAlert,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
  resetPasswordSchema,
  type ResetPasswordFormData,
} from "@/validation/auth";

export default function ResetPasswordForm({ token }: { token: string }) {
  const [success, setSuccess] = useState(false);
  const hasToken = Boolean(token);

  const form = useForm<ResetPasswordFormData>({
    resolver: zodResolver(resetPasswordSchema),
    shouldFocusError: true,
    defaultValues: { password: "", confirmPassword: "" },
  });

  const { isSubmitting } = form.formState;

  const onSubmit = async (_data: ResetPasswordFormData) => {
    // TODO: call reset-password API with token
    await new Promise((r) => setTimeout(r, 1500));
    setSuccess(true);
  };

  return (
    <div className="w-full max-w-[520px] mx-auto">
      <Card className="w-full rounded-2xl ring-1 ring-border shadow-none">
        <CardContent className="p-5 xs:p-6 sm:p-8">
          {/* Logo */}
          <Link href="/" className="block mb-7">
            <span className="text-[#2459c8] font-bold text-xl font-[family-name:var(--font-besley)]">
              YourCR
            </span>
          </Link>

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-2xl font-medium text-foreground mb-1.5 font-[family-name:var(--font-besley)]">
              Create a new password
            </h1>
            <p className="text-sm text-muted-foreground">
              Choose a strong password for your YourCR account.
            </p>
          </div>

          {/* Invalid token */}
          {!hasToken && (
            <div className="mb-6 flex gap-3 bg-destructive/5 border border-destructive/20 rounded-xl p-4">
              <ShieldAlert className="size-5 text-destructive shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-destructive">
                  Invalid or expired link
                </p>
                <p className="text-xs text-destructive/80 mt-0.5">
                  This reset link is missing or has expired.{" "}
                  <Link
                    href="/forgot-password"
                    className="font-semibold underline"
                  >
                    Request a new one.
                  </Link>
                </p>
              </div>
            </div>
          )}

          {success ? (
            /* ── Success ── */
            <div className="space-y-5">
              <div className="flex gap-3 bg-green-50 border border-green-200 rounded-xl p-4">
                <CheckCircle className="size-5 text-green-600 shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-green-800">
                    Password updated!
                  </p>
                  <p className="text-xs text-green-700 mt-0.5">
                    Your password has been changed successfully.
                  </p>
                </div>
              </div>
              <Button
                asChild
                className="w-full h-10 bg-[#2459c8] text-white font-semibold cursor-pointer"
              >
                <Link href="/login">
                  Go to Sign In <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          ) : (
            /* ── Form ── */
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-5"
                noValidate
              >
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field, fieldState }) => (
                    <FormItem>
                      <FormLabel>New Password</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground pointer-events-none z-10" />
                          <Input
                            {...field}
                            id="reset-password"
                            type="password"
                            placeholder="••••••••"
                            disabled={!hasToken}
                            aria-invalid={!!fieldState.error}
                            className="pl-9 h-10 w-full"
                          />
                        </div>
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
                      <FormLabel>Confirm New Password</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <ShieldCheck className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground pointer-events-none z-10" />
                          <Input
                            {...field}
                            id="reset-confirm"
                            type="password"
                            placeholder="••••••••"
                            disabled={!hasToken}
                            aria-invalid={!!fieldState.error}
                            className="pl-9 h-10 w-full"
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  id="reset-submit"
                  type="submit"
                  disabled={!hasToken || isSubmitting}
                  className="w-full h-10 bg-[#2459c8] text-white font-semibold cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <span className="size-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Updating…
                    </>
                  ) : (
                    <>
                      Update Password <ArrowRight className="size-4" />
                    </>
                  )}
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="w-full h-10 cursor-pointer"
                >
                  <Link href="/login">
                    <ArrowLeft className="size-4" /> Back to Sign In
                  </Link>
                </Button>
              </form>
            </Form>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
