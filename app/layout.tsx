import type { Metadata } from "next";
import "./globals.css";
import SplashScreen from "./components/SplashScreen";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Space_Mono } from "next/font/google";

const space_mono = Space_Mono({
  subsets: ['latin'],
  weight: '400'
})

export const metadata: Metadata = {
  title: "Marlon Vergara",
  description: "Marlon Vergara's portfolio website created Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={space_mono.className}>
      <head><link rel="icon" href="/images/icon.ico" sizes="any" /></head>
      <body>{children}</body>
    </html>
  );
}
