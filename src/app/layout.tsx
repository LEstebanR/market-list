"use client";

import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextUIProvider } from "@nextui-org/react";
import { Footer } from "@/components/UI/Footer";
import { Header } from "@/components/UI/Header";
import { ThemeProvider } from "next-themes";
import Logo from "@/components/UI/Logo";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Market List</title>
        <meta name="description" content="An app to make market lists" />
        <link
          rel="icon"
          href="https://cdn-icons-png.flaticon.com/512/869/869687.png"
        />
      </head>
      <body
        className={`${inter.className} flex min-h-screen w-screen flex-col items-center bg-light dark:bg-dark`}
      >
        <ThemeProvider attribute="class">
          <NextUIProvider>
            <main className="flex min-h-screen w-screen flex-col items-center justify-between  p-2">
              <Header />
              {children}
              <Footer />
            </main>
          </NextUIProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
