"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, Lock, Mail } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import Logo from "@/components/common/logo";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { loginSchema, type LoginFormData } from "@/validation/auth";

export default function LoginForm() {
  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    shouldFocusError: true,
    defaultValues: { email: "", password: "", remember: false },
  });

  const { isSubmitting } = form.formState;

  const onSubmit = async (_data: LoginFormData) => {
    // TODO: handle login
    await new Promise((r) => setTimeout(r, 1500));
  };

  return (
    <div className="w-full max-w-[520px] mx-auto">
      <Card className="w-full rounded-2xl ring-1 ring-border shadow-none">
        <CardContent className="p-5 xs:p-6 sm:p-8">
          {/* Logo */}
          <div className="mb-7 flex justify-center">
            <Logo />
          </div>

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-2xl font-medium text-foreground mb-1.5 font-[family-name:var(--font-besley)]">
              Welcome back
            </h1>
            <p className="text-sm text-muted-foreground">
              Sign in to your CR account to continue
            </p>
          </div>

          {/* Form */}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              {/* Email */}
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
                          id="login-email"
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

              {/* Password */}
              <FormField
                control={form.control}
                name="password"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <div className="flex items-center justify-between">
                      <FormLabel>Password</FormLabel>
                      <Link
                        href="/forgot-password"
                        className="text-xs text-[#2459c8] font-medium"
                      >
                        Forgot password?
                      </Link>
                    </div>
                    <FormControl>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground pointer-events-none z-10" />
                        <Input
                          {...field}
                          id="login-password"
                          type="password"
                          placeholder="••••••••"
                          autoComplete="current-password"
                          aria-invalid={!!fieldState.error}
                          className="pl-9 h-10 w-full"
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Remember me */}
              <FormField
                control={form.control}
                name="remember"
                render={({ field }) => (
                  <FormItem className="flex items-center gap-2.5 space-y-0">
                    <FormControl>
                      <Checkbox
                        id="login-remember"
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormLabel
                      htmlFor="login-remember"
                      className="text-sm text-muted-foreground font-normal cursor-pointer"
                    >
                      Keep me signed in
                    </FormLabel>
                  </FormItem>
                )}
              />

              {/* Submit */}
              <Button
                id="login-submit"
                type="submit"
                disabled={isSubmitting}
                className="w-full h-10 bg-[#2459c8] text-white font-semibold cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <span className="size-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Signing in…
                  </>
                ) : (
                  <>
                    Sign In <ArrowRight className="size-4" />
                  </>
                )}
              </Button>
            </form>
          </Form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border" />
            </div>
            <div className="relative flex justify-center">
              <span className="bg-card px-3 text-xs text-muted-foreground">
                or
              </span>
            </div>
          </div>

          {/* Register link */}
          <div className="text-center border border-border rounded-xl py-4 px-5">
            <p className="text-sm text-muted-foreground">
              Want to join as a Class Representative?
            </p>
            <Link
              href="/register"
              className="inline-flex items-center gap-1.5 text-[#2459c8] text-sm font-semibold mt-1"
            >
              Register as CR <ArrowRight className="size-3.5" />
            </Link>
          </div>
        </CardContent>
      </Card>

      <p className="text-center text-xs text-muted-foreground mt-5 leading-relaxed">
        Only approved CRs can sign in to this portal.
      </p>
    </div>
  );
}
