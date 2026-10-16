 "use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/home", label: "Home" },
  { href: "/status", label: "Status" },
  { href: "/commission", label: "Commission" },
  { href: "/about", label: "About" },
];

export default function PortalNav({ displayName }: { displayName: string }) {
  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  async function logout() {
    await fetch("/api/logout", { method: "POST" });
    router.push("/login");
    router.refresh();
  }

  return (
    <header className="topbar">
      <Link href="/home" className="wordmark">MOTIVE</Link>
      <button className="mobile-menu" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? "✕" : "☰"}</button>
      <nav className={menuOpen ? "nav-links nav-open" : "nav-links"}>
        {links.map((link) => <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className={pathname === link.href ? "nav-link active" : "nav-link"}>{link.label}</Link>)}
      </nav>
      <div className="nav-user"><span className="user-dot" /><span>{displayName}</span><button onClick={logout} className="logout-button">Log out ↗</button></div>
    </header>
  );
}
