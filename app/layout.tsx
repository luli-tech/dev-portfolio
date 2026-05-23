import type React from "react";
import type { Metadata } from "next";
import { Inter, Bebas_Neue, Pacifico } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
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
        className={`font-sans ${inter.variable} ${bebasNeue.variable} ${pacifico.variable} antialiased selection:bg-primary/20 selection:text-primary max-w-3xl mx-auto px-6 md:px-12 py-12 md:py-24`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        </ThemeProvider>
      </body>
    </html>
  );
}
