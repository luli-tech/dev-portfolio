"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Mail, Github, Linkedin, Twitter, Loader2, CheckCircle, Download } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (!response.ok) throw new Error("Failed to send message")

      setSubmitted(true)
      setFormData({ name: "", email: "", message: "" })
      setTimeout(() => setSubmitted(false), 5000)
    } catch (err) {
      setError("Failed to send message. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-12 sm:py-20 bg-background"
    >
      <div className="container mx-auto max-w-2xl text-center w-full">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-balance">Get In Touch</h2>
        <p className="text-base sm:text-lg text-muted-foreground mb-8 sm:mb-12 leading-relaxed">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel
          free to reach out!
        </p>
        <Card className="p-4 sm:p-8 bg-card/50 backdrop-blur-sm border-2 border-primary/20 hover:border-primary/40 transition-all duration-300">
          <div className="space-y-6">
            <div className="flex justify-center mb-6">
              <Button
                asChild
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-6 py-2 rounded-lg transition-all duration-300 hover:scale-105 flex items-center gap-2 shadow-lg hover:shadow-xl"
              >
                <a href="/cv.pdf" download>
                  <Download className="h-4 w-4" />
                  Download CV
                </a>
              </Button>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-4">Send Me a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm sm:text-base transition-all duration-300"
                  />
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm sm:text-base transition-all duration-300"
                  />
                </div>
                <textarea
                  placeholder="Your message..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm sm:text-base resize-none transition-all duration-300"
                />
                <Button
                  type="submit"
                  disabled={loading || submitted}
                  className="w-full hover:scale-105 transition-all duration-300"
                >
                  {loading ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : submitted ? (
                    <CheckCircle className="h-4 w-4" />
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </form>
              {error && <p className="text-red-500 text-xs sm:text-sm mt-2">{error}</p>}
              {submitted && (
                <p className="text-green-500 text-xs sm:text-sm mt-2">
                  Thanks for reaching out! I'll get back to you soon.
                </p>
              )}
            </div>

            <div className="pt-6 border-t border-border">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Email</h3>
              <a
                href="mailto:hello@example.com"
                className="text-primary hover:underline text-base sm:text-lg transition-all duration-300"
              >
                hello@example.com
              </a>
            </div>
            <div className="pt-6 border-t border-border">
              <h3 className="text-lg sm:text-xl font-semibold mb-4">Connect</h3>
              <div className="flex items-center justify-center gap-2 sm:gap-4 flex-wrap">
                <Button
                  variant="outline"
                  size="icon"
                  asChild
                  className="h-10 w-10 sm:h-12 sm:w-12 bg-transparent hover:scale-110 transition-all duration-300"
                >
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 sm:h-5 sm:w-5" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  asChild
                  className="h-10 w-10 sm:h-12 sm:w-12 bg-transparent hover:scale-110 transition-all duration-300"
                >
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  asChild
                  className="h-10 w-10 sm:h-12 sm:w-12 bg-transparent hover:scale-110 transition-all duration-300"
                >
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <Twitter className="h-4 w-4 sm:h-5 sm:w-5" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  asChild
                  className="h-10 w-10 sm:h-12 sm:w-12 bg-transparent hover:scale-110 transition-all duration-300"
                >
                  <a href="mailto:hello@example.com">
                    <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </Card>
        <p className="text-xs sm:text-sm text-muted-foreground mt-8 sm:mt-12">
          © 2025 Portfolio. Built with Next.js and Tailwind CSS.
        </p>
      </div>
    </section>
  )
}
