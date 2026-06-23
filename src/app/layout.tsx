import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MindWell Africa",
  description: "Corporate Wellness Solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}