import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GigaWorks — Hire Students for Gigs",
  description: "Hyperlocal, verified student workforce for tasks and freelance work."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
