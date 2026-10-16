import { requireAmbassador } from "@/lib/auth";
import { ambassadors } from "@/lib/data";
import PortalNav from "@/components/portal-nav";

export default async function PortalLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const username = await requireAmbassador();
  const ambassador = ambassadors.find((person) => person.username === username);
  return (
    <div className="portal-shell">
      <PortalNav displayName={ambassador?.displayName || "Ambassador"} />
      <main className="portal-main">{children}</main>
      <footer className="site-footer">
        <span>© {new Date().getFullYear()} MOTIVE</span>
        <span>DRIVEN BY PURPOSE</span>
        <div className="footer-socials"><a href="https://www.instagram.com/motive.brands?igsh=emQ3bmtsdzR0dHBi" target="_blank" rel="noreferrer">Instagram ↗</a><a href="https://www.tiktok.com/@motive_brands?_t=ZS-90R12PXYzsV&_r=1e" target="_blank" rel="noreferrer">TikTok ↗</a></div>
      </footer>
    </div>
  );
}
