"use client";
import "./globals.css";
import "./xlstyle.css";
import "./responsive.css";
import "./tabs.css";
import "./mobcss.css";
import "./smmob.css";
import "./contact.css";
import { useEffect } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    if ("caches" in window) {
      caches.keys().then((names) => {
        names.forEach((name) => caches.delete(name));
      });
    }
  }, []);
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
