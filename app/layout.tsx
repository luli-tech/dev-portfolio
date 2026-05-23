import type React from "react";
import type { Metadata } from "next";
import { Figtree, Iceberg, Pacifico } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-sans",
});

const iceberg = Iceberg({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-iceberg",
});

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-handwriting",
});

export const metadata: Metadata = {
  title: "PHOENIX | Software Engineer",
  description: "Software engineer building software that moves the needle.",
  icons: {
    icon: "fav.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`font-sans ${figtree.variable} ${iceberg.variable} ${pacifico.variable} antialiased selection:bg-primary/20 selection:text-primary max-w-3xl mx-auto px-6 md:px-12 py-12 md:py-24`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Suspense fallback={<div>Loading...</div>}>
            <div className="relative z-20">{children}</div>
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  );
}
