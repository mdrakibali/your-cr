import RegisterForm from "@/components/auth/register-form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register as CR",
  description: "Create your Class Representative account on YourCR",
};

const Register = () =>{
  return <RegisterForm />
};

export default Register;
