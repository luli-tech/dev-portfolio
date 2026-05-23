export function About() {
  const skills = [
    "TypeScript", "JavaScript", "Rust", "Node.js", "NestJS", "Express", 
    "React", "Next.js", "TailwindCSS", "PostgreSQL", "MongoDB", "Redis", 
    "AWS", "Microservices", "GraphQL", "Socket.io", "BullMQ"
  ];

  return (
    <section id="about" className="py-16 border-t border-border/50">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-xl font-bold font-bebas tracking-wide">About Me</h2>
      </div>
      
      <div className="space-y-6 text-sm md:text-base leading-relaxed text-muted-foreground">
        <p>
          I'm Olabode Micheal Ayomikun, a passionate Full-Stack Software Engineer dedicated to crafting scalable,
          high-performance applications. My expertise spans across the entire development spectrum—from building
          beautiful, responsive frontends with React and Next.js to architecting robust backends with Rust, Node.js,
          NestJS, and Express.
        </p>
        <p>
          With a deep understanding of modern web technologies and a commitment to excellence, I focus on creating
          solutions that are not only functionally sound but also performant, scalable, and accessible.
        </p>
      </div>

      <div className="mt-10">
        <h3 className="text-sm font-semibold mb-4 text-foreground">Core Technologies</h3>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="text-xs font-mono px-3 py-1.5 rounded-md border border-border text-muted-foreground hover:border-primary/50 hover:text-foreground transition-colors cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
