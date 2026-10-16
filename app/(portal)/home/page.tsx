import Link from "next/link";
import { requireAmbassador } from "@/lib/auth";
import { ambassadors } from "@/lib/data";

export default async function HomePage() {
  const username = await requireAmbassador();
  const ambassador = ambassadors.find((person) => person.username === username)!;
  return (
    <div className="page-content">
      <section className="hero-panel">
        <div className="hero-copy">
          <p className="eyebrow">THE MOTIVE AMBASSADOR COMMUNITY</p>
          <h1>Welcome,<br /><span>{ambassador.displayName}.</span></h1>
          <p className="hero-description">You represent more than a brand. You represent a mindset — a community of young people choosing purpose, showing up, and inspiring others to move forward.</p>
          <Link className="button button-primary" href="/status">View my status <span>↗</span></Link>
        </div>
        <div className="hero-mark" aria-hidden="true"><span>M</span><i /><b>DRIVEN BY PURPOSE</b></div>
        <div className="hero-index">01 <span>/</span> MOTIVE AMBASSADORS</div>
      </section>
      <section className="section-block">
        <div className="section-heading"><div><p className="eyebrow">YOUR ROLE</p><h2>Purpose in <span>motion.</span></h2></div><p className="section-note">Small actions. Real influence. A community that moves together.</p></div>
        <div className="feature-grid">
          <article className="feature-card"><span className="feature-number">01</span><div className="feature-icon">↗</div><h3>Represent</h3><p>Share the Motive message authentically and let your everyday choices reflect what the brand stands for.</p></article>
          <article className="feature-card"><span className="feature-number">02</span><div className="feature-icon">◎</div><h3>Connect</h3><p>Build genuine connections, introduce people to the brand, and grow a community around shared purpose.</p></article>
          <article className="feature-card"><span className="feature-number">03</span><div className="feature-icon">✳</div><h3>Keep moving</h3><p>Stay consistent, take initiative, and look for meaningful ways to contribute to the Motive journey.</p></article>
        </div>
      </section>
      <section className="quote-strip"><span className="quote-mark">“</span><p>Driven by purpose. Defined by what you do with it.</p><span className="quote-tag">MOTIVE / COMMUNITY</span></section>
    </div>
  );
}
