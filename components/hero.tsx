import { Github, Linkedin, Mail, FileText, Twitter } from "lucide-react";
import Image from "next/image";
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
    "React", "Next.js", "React Native", "Flutter", "TailwindCSS", "PostgreSQL", "MongoDB", "Redis",
    "AWS", "Microservices", "GraphQL", "Socket.io", "BullMQ",
    "Mobile", "Microservice Applications", "AI-Driven", "System-Level",
    "Claude", "Codex"
  ];

  return (
    <section id="home" className="grid scroll-mt-24 gap-6 pt-8 pb-8 sm:flow-root sm:pt-12">
      <Image
        src="/fav.ico"
        alt="Olabode Micheal Ayomikun"
        width={288}
        height={384}
        priority
        className="hidden h-auto rounded-2xl border border-border shadow-sm sm:block sm:float-right sm:mt-24 sm:mb-6 sm:ml-8 sm:w-56 xl:w-72"
      />
      <div className="contents sm:block sm:space-y-6">
        <div className="row-start-1 space-y-6">
          <p className="whitespace-nowrap text-muted-foreground font-mono text-sm">
            Hey it's me <span className="text-xl">👋</span>
          </p>

          <div className="space-y-1">
            <h1 className="text-4xl min-[400px]:text-5xl sm:text-7xl md:text-8xl font-bold font-bebas tracking-tight uppercase">
              Micheal
            </h1>
            <div className="flex items-center gap-2 text-muted-foreground text-xs font-mono h-6 sm:text-sm">
              <span>I am a</span>
              <span className="max-w-full text-primary font-medium">
                <Typewriter texts={titles} />
              </span>
            </div>
          </div>
        </div>

        {/* About Me — inline under typewriter */}
        <div id="about" className="flow-root scroll-mt-24 text-sm md:text-base leading-relaxed text-muted-foreground sm:block">
          <Image
            src="/fav.ico"
            alt="Olabode Micheal Ayomikun"
            width={288}
            height={384}
            priority
            className="float-right ml-4 block w-[48%] max-w-56 h-auto rounded-2xl border border-border shadow-sm sm:hidden"
          />
          <div className="space-y-4">
            <p>
              I'm Olabode Micheal Ayomikun, a Full-Stack Software Engineer building web, mobile, and backend
              applications. I create responsive web experiences with React and Next.js, and
              <strong className="text-foreground"> cross-platform mobile apps with Flutter and React Native</strong>.
            </p>
            <p>
              My work spans <strong className="text-foreground">microservices</strong>, real-time systems, and
              <strong className="text-foreground"> AI applications</strong>. Using Node.js, Go, and Rust, I build
              secure APIs, connect distributed services, and integrate AI agents and automated workflows into
              products. I focus on software that is reliable, maintainable, and built to scale.
            </p>
          </div>
        </div>

        {/* Core Technologies */}
        <div id="technologies" className="scroll-mt-24">
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
          <Button asChild variant="outline" className="cursor-pointer rounded-full gap-2 px-6 shadow-sm hover:shadow-md transition-all border-dashed">
            <a href="/Olabode_Micheal_Ayomikun_Resume.pdf" target="_blank" rel="noopener noreferrer">
              <FileText className="h-4 w-4" aria-hidden="true" />
              Resume
            </a>
          </Button>
        </div>

        <div id="connect" className="scroll-mt-24 pt-4">
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
