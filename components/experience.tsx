import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    period: "2024 — Present",
    title: "Senior Full-Stack Engineer",
    company: "TechCorp",
    description:
      "Build and maintain critical components used to construct the frontend and backend of the platform. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web development.",
    technologies: ["TypeScript", "React", "Next.js", "Node.js", "PostgreSQL"],
  },
  {
    period: "2022 — 2024",
    title: "Full-Stack Developer",
    company: "StartupXYZ",
    description:
      "Developed and shipped highly interactive web applications for both internal tools and customer-facing products. Collaborated with designers to implement pixel-perfect UIs and worked with backend teams to integrate APIs.",
    technologies: ["JavaScript", "React", "Express", "MongoDB", "AWS"],
  },
  {
    period: "2020 — 2022",
    title: "Frontend Developer",
    company: "Digital Agency",
    description:
      "Created responsive websites and web applications for various clients across different industries. Focused on performance optimization, accessibility, and modern web standards.",
    technologies: ["HTML", "CSS", "JavaScript", "Vue.js", "Sass"],
  },
]

export function Experience() {
  return (
    <section id="experience" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-balance">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                  <p className="text-primary font-semibold">{exp.company}</p>
                </div>
                <p className="text-sm text-muted-foreground font-mono mt-2 md:mt-0">{exp.period}</p>
              </div>
              <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
