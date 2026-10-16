import Link from "next/link";
import { motiveSiteUrl } from "@/lib/data";

export default function AboutPage() {
  return (
    <div className="page-content inner-page">
      <section className="about-hero">
        <p className="eyebrow">MORE THAN A TITLE</p><h1>Thank you for<br /><span>being Motive.</span></h1>
        <p className="about-lead">Every community is shaped by the people who believe in it. Thank you for lending your voice, energy, creativity, and time to the Motive journey.</p>
        <div className="about-stamp">M</div>
      </section>
      <section className="about-columns">
        <article><p className="eyebrow">01 / THE MISSION</p><h2>Driven by purpose.</h2><p>Motive is a youth-focused lifestyle brand built around intention, self-expression, and forward movement. Our ambassadors help carry that message beyond clothing — into conversations, creativity, and everyday life.</p></article>
        <article><p className="eyebrow">02 / THE APPRECIATION</p><h2>You make the difference.</h2><p>Your support matters. Whether you introduce someone to Motive, create content, share a story, or encourage another young person, you help the community grow. Keep showing up with authenticity and respect.</p></article>
      </section>
      <section className="about-cta"><div><p className="eyebrow">EXPLORE THE BRAND</p><h2>Meet Motive beyond this portal.</h2><p>Visit our main site to explore the brand and what we are building.</p></div><a className="button button-primary" href={motiveSiteUrl} target="_blank" rel="noreferrer">Visit Motive site <span>↗</span></a></section>
      <p className="about-signoff">MOTIVE AMBASSADORS <span>—</span> ONE PURPOSE. MANY VOICES.</p>
    </div>
  );
}
