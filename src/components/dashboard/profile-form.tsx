"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { User, Mail, Phone, Lock, Save, Upload, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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

import { useDashboard } from "./dashboard-layout-wrapper";

const profileSchema = z.object({
  name: z.string().min(1, "Name is required").min(2, "Name must be at least 2 characters"),
  email: z.string().min(1, "Email is required").email("Enter a valid email address"),
  phone: z.string().min(1, "Phone number is required").min(5, "Enter a valid phone number"),
  password: z.string().optional().or(z.literal("")),
  avatar: z.string().optional(),
});

type ProfileFormData = z.infer<typeof profileSchema>;

export default function ProfileForm() {
  const { role } = useDashboard();
  const [imagePreview, setImagePreview] = useState<string>("");

  const form = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
    shouldFocusError: true,
    defaultValues: {
      name: "Rakib Hossain",
      email: "rakib.cse@university.edu",
      phone: "+880 1711-223344",
      password: "",
      avatar: "",
    },
  });

  const { isSubmitting } = form.formState;

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setImagePreview(base64String);
        form.setValue("avatar", base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  const clearImage = () => {
    setImagePreview("");
    form.setValue("avatar", "");
  };

  const onSubmit = async (_data: ProfileFormData) => {
    await new Promise((r) => setTimeout(r, 1000));
    toast.success("Profile updated successfully!");
  };

  const initials = form.getValues("name")
    ?.split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase() || "CR";

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

      <Card className="rounded-md border border-border shadow-none bg-white">
        <CardHeader>
          <div className="flex items-center gap-3">
            {imagePreview ? (
              <img
                src={imagePreview}
                alt="Profile Avatar"
                className="size-12 rounded-full object-cover border border-border shrink-0"
              />
            ) : (
              <div className="size-12 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold text-base font-[family-name:var(--font-besley)] shrink-0">
                {initials}
              </div>
            )}
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
              
              {/* Profile Image Upload Box */}
              <div className="flex flex-col sm:flex-row items-center gap-4 p-4 border border-border rounded-md bg-muted/10">
                <div className="relative size-16 rounded-full border border-border bg-white flex items-center justify-center overflow-hidden shrink-0">
                  {imagePreview ? (
                    <img src={imagePreview} alt="Preview" className="size-full object-cover" />
                  ) : (
                    <User className="size-6 text-muted-foreground" />
                  )}
                </div>
                <div className="flex-1 space-y-1.5 text-center sm:text-left">
                  <p className="text-xs font-semibold text-foreground">Upload Avatar Profile</p>
                  <div className="flex items-center justify-center sm:justify-start gap-2">
                    <label className="cursor-pointer inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#2459c8] hover:bg-[#1a44a1] text-white text-[11px] font-semibold rounded-md transition-colors">
                      <Upload className="size-3" /> Select Image
                      <input type="file" accept="image/*" className="hidden" onChange={handleImageChange} />
                    </label>
                    {imagePreview && (
                      <Button type="button" variant="outline" size="sm" onClick={clearImage} className="h-7 text-[11px] text-red-600 hover:text-red-700 cursor-pointer">
                        <X className="size-3" /> Clear
                      </Button>
                    )}
                  </div>
                </div>
              </div>

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
