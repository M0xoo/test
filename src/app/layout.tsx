import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OpenBoard - AI-Powered Kanban for Code Review & Testing",
  description: "Streamline your development workflow with intelligent agent-powered code review and testing boards.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
