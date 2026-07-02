import LoginForm from "@/components/auth/login-form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
  description: "Sign in to your YourCR CR account",
};

const Login = () =>{
  return <LoginForm />
}

export default Login;
