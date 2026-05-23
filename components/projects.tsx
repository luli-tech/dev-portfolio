import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Law-lift Portal",
    description: "A fullstack law-school scholarship application website",
    technologies: ["Next.js", "TypeScript", "TailwindCSS"],
    link: "https://law-lift-portal.vercel.app/",
  },
  {
    title: "Website Builder",
    description: "Collaborative website builder application with text editor built with monaco, team workspaces, drag-and-drop interface and notifications.",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Redux"],
    link: "https://test-two-beige-83.vercel.app/",
  },
  {
    title: "Blueking Fashion",
    description: "E-commerce website for clothing and apparel with order tracking.",
    technologies: ["Reactjs", "TypeScript", "Supabase", "TailwindCss"],
    link: "https://blueking-fashion.vercel.app/",
  },
  {
    title: "Taskpadi",
    description: "A powerful fullstack web app designed for task management, with chat functionality and AI integration.",
    technologies: ["Next.js", "Rust", "Axum", "Socket.io", "Mastra AI"],
    link: "https://taskpadi.vercel.app",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-16 border-t border-border/50">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-xl font-bold font-bebas tracking-wide">Selected Work</h2>
        <a href="#projects" className="text-sm text-primary font-medium hover:underline flex items-center gap-1">
          View all <span aria-hidden="true">-&gt;</span>
        </a>
      </div>

      <div className="flex flex-col">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-6 py-6 border-b border-border/50 last:border-0 hover:bg-muted/50 transition-colors -mx-4 px-4 rounded-xl"
          >
            <div className="sm:w-1/3 flex items-center justify-between sm:justify-start gap-2">
              <h3 className="text-base font-semibold group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
            </div>
            
            <div className="sm:w-2/3 space-y-3">
              <p className="text-sm text-muted-foreground leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded border border-border text-muted-foreground group-hover:border-primary/30 group-hover:text-primary transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
