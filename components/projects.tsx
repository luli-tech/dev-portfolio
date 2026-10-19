import { ArrowUpRight } from "lucide-react";

type Project = {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
};

const projects: Project[] = [
  {
    title: "Real-Time Task Manager & Chat",
    description: "A full-stack task and chat platform with WebRTC video calls, backend signaling, and type-safe PostgreSQL access. Built with async Rust, client-side caching and background sync, and deployed to AWS.",
    technologies: ["Rust", "Axum", "SQLx", "React", "TanStack Query", "PostgreSQL", "WebSockets", "WebRTC", "AWS"],
  },
  {
    title: "Distributed Notification System",
    description: "An event-driven microservices system for processing asynchronous email, push, and in-app notifications using NestJS and RabbitMQ.",
    technologies: ["NestJS", "RabbitMQ", "PostgreSQL", "Redis", "Railway"],
  },
  {
    title: "EasyCaller & Callio",
    description: "Telephony platforms with custom communication backends that route internet calls to local phone networks, combining programmable APIs with open-source telephony infrastructure.",
    technologies: ["Rust", "Go", "React", "Telephony"],
  },
  {
    title: "Therapady",
    description: "A telehealth platform connecting users with licensed therapists through real-time data exchange and audio and video sessions.",
    technologies: ["Next.js", "React", "Go", "WebSockets", "WebRTC"],
  },
  {
    title: "Website Builder & Code Editor",
    description: "A visual drag-and-drop website builder with live code editing, real-time component rendering, and an optimized canvas interface.",
    technologies: ["React", "Redux Toolkit", "DnD Kit", "Monaco Editor"],
    link: "https://test-two-beige-83.vercel.app/",
  },
];

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 py-8 border-t border-border/50">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-xl font-bold font-bebas tracking-wide">Selected Work</h2>
        <span className="text-xs font-mono text-muted-foreground">{projects.length} projects</span>
      </div>

      <div className="flex flex-col">
        {projects.map((project) => (
          <article
            key={project.title}
            className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] sm:gap-6 py-6 border-b border-border/50 last:border-0"
          >
            <div>
              <h3 className="text-base font-semibold">
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-start gap-2 rounded-sm hover:underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
                  >
                    {project.title}
                    <ArrowUpRight aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-muted-foreground" />
                  </a>
                ) : project.title}
              </h3>
            </div>
            
            <div className="min-w-0 space-y-3">
              <p className="text-sm text-muted-foreground leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded border border-dashed border-border text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
