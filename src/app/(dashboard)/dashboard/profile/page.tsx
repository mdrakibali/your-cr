import ProfileForm from "@/components/dashboard/profile-form";
import { getDashboardRole } from "@/lib/auth-helper";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Profile",
  description: "Manage your account settings and contact details",
};

export default async function ProfilePage() {
  const role = await getDashboardRole();
  return <ProfileForm role={role} />;
}
