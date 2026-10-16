import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Motive Ambassadors",
  description: "Motive Ambassador Portal — Driven by purpose.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
