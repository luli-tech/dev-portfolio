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

  const skills = [
    "TypeScript", "JavaScript", "Rust", "Go", "Node.js", "NestJS", "Express",
    "React", "Next.js", "React Native", "TailwindCSS", "PostgreSQL", "MongoDB", "Redis",
    "AWS", "Microservices", "GraphQL", "Socket.io", "BullMQ",
    "Mobile", "Microservice Applications", "AI-Driven", "System-Level",
    "Claude", "Codex"
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

        {/* About Me — inline under typewriter */}
        <div className="space-y-4 text-sm md:text-base leading-relaxed text-muted-foreground">
          <p>
            I'm Olabode Micheal Ayomikun, a passionate Full-Stack Software Engineer specializing in scalable,
            high-performance applications across the entire stack. From crafting beautiful, responsive frontends
            with React and Next.js to building <strong className="text-foreground">mobile apps</strong> with React Native,
            I ship products that feel right on every screen.
          </p>
          <p>
            My backend expertise covers <strong className="text-foreground">microservice architectures</strong>,
            <strong className="text-foreground"> AI-driven applications</strong>, and
            <strong className="text-foreground"> system-level engineering</strong> with Rust and Node.js —
            delivering solutions that are performant, fault-tolerant, and built to scale.
          </p>
        </div>

        {/* Core Technologies */}
        <div>
          <h3 className="text-sm font-semibold mb-3 text-foreground">Core Technologies</h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="text-xs font-mono px-3 py-1.5 rounded-md border border-dashed border-border text-muted-foreground hover:border-primary/50 hover:text-foreground transition-colors cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4 pt-2">
          <span className="text-sm font-semibold mr-2">Curious? Let's go deeper</span>
          <Button variant="outline" className="rounded-full gap-2 px-6 shadow-sm hover:shadow-md transition-all border-dashed">
            <Mail className="h-4 w-4" />
            Email Me
          </Button>
          <Button variant="outline" className="rounded-full gap-2 px-6 shadow-sm hover:shadow-md transition-all border-dashed">
            <FileText className="h-4 w-4" />
            Resume
          </Button>
        </div>

        <div className="pt-4">
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
