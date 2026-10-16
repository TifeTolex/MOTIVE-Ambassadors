import { redirect } from "next/navigation";
import { getCurrentUsername } from "@/lib/auth";

export default async function IndexPage() {
  const username = await getCurrentUsername();
  redirect(username ? "/home" : "/login");
}
