 "use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const router = useRouter();

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setBusy(true);
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const result = await response.json();
      if (!response.ok) {
        setError(result.message || "Unable to sign in.");
        return;
      }
      router.push("/home");
      router.refresh();
    } catch {
      setError("Connection issue. Please try again.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <form className="login-form" onSubmit={submit}>
      <label htmlFor="username">Username</label>
      <input id="username" autoComplete="username" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="e.g. ambassador1" required />
      <label htmlFor="password">Password</label>
      <input id="password" type="password" autoComplete="current-password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" required />
      {error && <p className="form-error" role="alert">{error}</p>}
      <button className="button button-primary login-button" disabled={busy}>{busy ? "Signing in..." : "Sign in"} <span>↗</span></button>
    </form>
  );
}
