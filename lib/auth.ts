import "server-only";
import { createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const COOKIE_NAME = "motive_ambassador_session";

function secret() {
  const value = process.env.SESSION_SECRET;
  if (!value || value.length < 32) {
    throw new Error("SESSION_SECRET must be set to a random string of at least 32 characters.");
  }
  return value;
}

function signature(username: string) {
  return createHmac("sha256", secret()).update(username).digest("hex");
}

export function createSessionToken(username: string) {
  return `${username}.${signature(username)}`;
}

export function verifySessionToken(token?: string) {
  if (!token) return null;
  const splitAt = token.lastIndexOf(".");
  if (splitAt < 1) return null;
  const username = token.slice(0, splitAt);
  const supplied = token.slice(splitAt + 1);
  const expected = signature(username);
  if (supplied.length !== expected.length) return null;
  try {
    if (!timingSafeEqual(Buffer.from(supplied), Buffer.from(expected))) return null;
  } catch {
    return null;
  }
  return username;
}

export async function getCurrentUsername() {
  const jar = await cookies();
  return verifySessionToken(jar.get(COOKIE_NAME)?.value);
}

export async function requireAmbassador() {
  const username = await getCurrentUsername();
  if (!username) redirect("/login");
  return username;
}

export { COOKIE_NAME };
