import { cookies } from "next/headers";

export async function getDashboardRole(): Promise<"CR" | "STUDENT"> {
  const cookieStore = await cookies();
  const roleCookie = cookieStore.get("user-role")?.value;
  return (roleCookie === "STUDENT" ? "STUDENT" : "CR") as "CR" | "STUDENT";
}
