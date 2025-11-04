import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono, Pacifico } from "next/font/google"
import { Suspense } from "react"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-handwriting",
})

export const metadata: Metadata = {
  title: "Software Engineer Portfolio",
  description: "Full-stack software engineer specializing in modern web technologies",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`font-sans ${inter.variable} ${jetbrainsMono.variable} ${pacifico.variable} antialiased`}>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
      </body>
    </html>
  )
}
