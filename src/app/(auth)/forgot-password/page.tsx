import ForgotPasswordForm from "@/components/auth/forgot-password-form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Forgot Password",
  description: "Reset your YourCR account password",
};

const ForgotPassword = () => <ForgotPasswordForm />;

export default ForgotPassword;
