import ProfileForm from "@/components/dashboard/profile-form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Profile",
  description: "Manage your account settings and contact details",
};

export default function ProfilePage() {
  return <ProfileForm />;
}
