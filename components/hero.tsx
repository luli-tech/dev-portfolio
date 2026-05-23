import { Github, Linkedin, Mail, FileText, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Typewriter } from "./typewriter";

export function Hero() {
  const titles = [
    "Software Engineer",
    "Frontend Developer",
    "Backend Developer",
    "Mobile Developer",
    "Full-Stack Engineer",
    "System Designer"
  ];

  return (
    <section className="pt-12 pb-8">
      <div className="space-y-6">
        <p className="text-muted-foreground font-mono text-sm">
          Hey it's me <span className="text-xl">👋</span>
        </p>

        <div className="space-y-1">
          <h1 className="text-7xl md:text-8xl font-bold font-bebas tracking-tight uppercase">
            Micheal
          </h1>
          <div className="flex items-center gap-2 text-muted-foreground text-sm font-mono h-6">
            <span>I am a</span>
            <span className="text-primary font-medium">
              <Typewriter texts={titles} />
            </span>
          </div>
        </div>

        <div className="max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed space-y-4">
          <p>
            I engineer software that scales, from <strong className="text-foreground font-semibold">AI-powered products</strong> to <strong className="text-foreground font-semibold">cloud-native systems</strong> and everything in between. I care about craft: <strong className="text-foreground font-semibold">clean APIs</strong>, thoughtful architecture, and interfaces that feel right.
          </p>

          <p>
            Currently building at the intersection of <strong className="text-foreground font-semibold">AI, Web3, and modern web</strong>, turning ambitious ideas into production-ready reality. Whether it's designing <strong className="text-foreground font-semibold">distributed backends</strong> that handle real traffic, building <strong className="text-foreground font-semibold">developer tools</strong> that save teams hours, or shipping full-stack products end to end, I bring the same standard: it should work well, read well, and hold up over time.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4 pt-4">
          <span className="text-sm font-semibold mr-2">Curious? Let's go deeper</span>
          <Button variant="outline" className="rounded-full gap-2 px-6 shadow-sm hover:shadow-md transition-all">
            <Mail className="h-4 w-4" />
            Email Me
          </Button>
          <Button variant="outline" className="rounded-full gap-2 px-6 shadow-sm hover:shadow-md transition-all">
            <FileText className="h-4 w-4" />
            Resume
          </Button>
        </div>

        <div className="pt-8">
          <h3 className="text-base font-bold mb-4">Connect</h3>
          <div className="flex flex-wrap gap-4">
            <a href="https://github.com/luli-tech" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a href="https://twitter.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <Twitter className="h-4 w-4" /> X
            </a>
            <a href="www.linkedin.com/in/micheal-olabode-3336341ba" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
