"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { User, Mail, Phone, Lock, Save } from "lucide-react";
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

interface ProfileFormProps {
  role: "CR" | "STUDENT";
}

const profileSchema = z.object({
  name: z.string().min(1, "Name is required").min(2, "Name must be at least 2 characters"),
  email: z.string().min(1, "Email is required").email("Enter a valid email address"),
  phone: z.string().min(1, "Phone number is required").min(5, "Enter a valid phone number"),
  password: z.string().optional().or(z.literal("")),
});

type ProfileFormData = z.infer<typeof profileSchema>;

export default function ProfileForm({ role }: ProfileFormProps) {
  const isCR = role === "CR";

  const form = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
    shouldFocusError: true,
    defaultValues: {
      name: "Rakib Hossain",
      email: "rakib.cse@university.edu",
      phone: "+880 1711-223344",
      password: "",
    },
  });

  const { isSubmitting } = form.formState;

  const onSubmit = async (_data: ProfileFormData) => {
    await new Promise((r) => setTimeout(r, 1000));
    toast.success("Profile updated successfully!");
  };

  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      <div>
        <h2 className="text-xl font-bold text-foreground font-[family-name:var(--font-besley)]">
          My Profile
        </h2>
        <p className="text-sm text-muted-foreground mt-0.5">
          Manage your account credentials and contact details.
        </p>
      </div>

      <Card className="rounded-xl border border-border shadow-none bg-white">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="size-10 bg-primary/10 text-primary rounded-xl flex items-center justify-center font-bold text-lg font-[family-name:var(--font-besley)]">
              R
            </div>
            <div>
              <CardTitle className="text-sm font-semibold">Profile Settings</CardTitle>
              <CardDescription className="text-xs">
                Role: <span className="font-bold text-primary">{role}</span>
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              <FormField
                control={form.control}
                name="name"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground pointer-events-none z-10" />
                        <Input {...field} placeholder="Rakib Hossain" aria-invalid={!!fieldState.error} className="pl-9 h-10 w-full" />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground pointer-events-none z-10" />
                        <Input {...field} type="email" placeholder="you@university.edu" aria-invalid={!!fieldState.error} className="pl-9 h-10 w-full" />
                      </div>
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
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground pointer-events-none z-10" />
                        <Input {...field} type="tel" placeholder="+880 1700-000000" aria-invalid={!!fieldState.error} className="pl-9 h-10 w-full" />
                      </div>
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
                    <FormLabel>New Password</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground pointer-events-none z-10" />
                        <Input {...field} type="password" placeholder="Leave blank to keep current" aria-invalid={!!fieldState.error} className="pl-9 h-10 w-full" />
                      </div>
                    </FormControl>
                    <FormDescription>Minimum 8 characters with numbers.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

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
                      <Save className="size-4" /> Save Profile
                    </>
                  )}
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
