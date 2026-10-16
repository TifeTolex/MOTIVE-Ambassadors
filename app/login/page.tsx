import Link from "next/link";
import LoginForm from "./login-form";

export default function LoginPage() {
  return (
    <main className="login-shell">
      <div className="login-orb orb-one" />
      <div className="login-orb orb-two" />
      <section className="login-card">
        <Link className="wordmark login-wordmark" href="/" aria-label="Motive home">MOTIVE<span>®</span></Link>
        <p className="eyebrow">AMBASSADOR PORTAL</p>
        <h1>Your purpose.<br /><span>Your platform.</span></h1>
        <p className="muted login-intro">Sign in to view your ambassador status and commission updates.</p>
        <LoginForm />
        <p className="login-foot">DRIVEN BY PURPOSE <span>·</span> MOTIVE</p>
      </section>
    </main>
  );
}
