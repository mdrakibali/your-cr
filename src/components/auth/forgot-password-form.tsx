"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft, ArrowRight, CheckCircle, Mail } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  forgotPasswordSchema,
  type ForgotPasswordFormData,
} from "@/validation/auth";

export default function ForgotPasswordForm() {
  const [sent, setSent] = useState(false);

  const form = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema),
    shouldFocusError: true,
    defaultValues: { email: "" },
  });

  const { isSubmitting } = form.formState;

  const onSubmit = async (_data: ForgotPasswordFormData) => {
    // TODO: call forgot-password API
    await new Promise((r) => setTimeout(r, 1500));
    setSent(true);
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
              Forgot your password?
            </h1>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Enter your email and we&apos;ll send you a password reset link.
            </p>
          </div>

          {sent ? (
            /* ── Success state ── */
            <div className="space-y-5">
              <div className="flex gap-3 bg-green-50 border border-green-200 rounded-xl p-4">
                <CheckCircle className="size-5 text-green-600 shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-green-800">
                    Reset link sent!
                  </p>
                  <p className="text-xs text-green-700 mt-0.5 leading-relaxed">
                    Check your inbox. The link expires in 30 minutes. Also
                    check your spam folder.
                  </p>
                </div>
              </div>
              <Button
                asChild
                variant="outline"
                className="w-full h-10 cursor-pointer"
              >
                <Link href="/login">
                  <ArrowLeft className="size-4" /> Back to Sign In
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
                  name="email"
                  render={({ field, fieldState }) => (
                    <FormItem>
                      <FormLabel>Email address</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground pointer-events-none z-10" />
                          <Input
                            {...field}
                            id="forgot-email"
                            type="email"
                            placeholder="you@example.com"
                            autoComplete="email"
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
                  id="forgot-submit"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-10 bg-[#2459c8] text-white font-semibold cursor-pointer disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <>
                      <span className="size-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      Send Reset Link <ArrowRight className="size-4" />
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
