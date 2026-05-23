export function About() {
  const skills = [
    "TypeScript", "JavaScript", "Rust", "Go", "Node.js", "NestJS", "Express",
    "React", "Next.js", "React Native", "TailwindCSS", "PostgreSQL", "MongoDB", "Redis",
    "AWS", "Microservices", "GraphQL", "Socket.io", "BullMQ",
    "Mobile", "Microservice Applications", "AI-Driven", "System-Level",
    "Claude", "Codex"
  ];

  return (
    <section id="about" className="py-8 border-t border-border/50">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-xl font-bold font-bebas tracking-wide">About Me</h2>
      </div>
      
      <div className="space-y-6 text-sm md:text-base leading-relaxed text-muted-foreground">
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

      <div className="mt-10">
        <h3 className="text-sm font-semibold mb-4 text-foreground">Core Technologies</h3>
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
    </section>
  )
}
