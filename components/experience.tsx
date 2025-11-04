import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    period: "2025 — Present",
    title: "Full-Stack Engineer",
    company: "PrymalLivestock",
    description:
      "Build and maintain critical components used to construct the frontend and backend of the platform. Built e-commerce website which increased sales by 60%. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web development.",
    technologies: [
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "mongodb",
      "graphql",
    ],
  },
  {
    period: "january,2025 — april,2025",
    title: "frontend developer",
    company: "Gista",
    description:
      "Built a stunning user interface in collaboration with other frontend devlopers,UI/UX designers",
    technologies: [
      "JavaScript",
      "React",
      "typescript",
      "tailwindcss",
      "shadcn",
    ],
  },
  {
    period: "october,2025 — present",
    title: "Backend developer intern",
    company: "HNG13",
    description:
      "Created worked on tasks from stage 0-stage 10. BUillt different system from basic website to websites powered by Ai agents. Collaborated with other people from diffferent stack tracks",
    technologies: [
      "Express",
      "nodejs",
      "typescript",
      "nodejs",
      "nestjs",
      "Mastra",
      "SQlite",
      "Prisma",
      "postgress",
    ],
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-balance">
          Experience
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                  <p className="text-[green] font-semibold">{exp.company}</p>
                </div>
                <p className="text-sm text-muted-foreground font-mono mt-2 md:mt-0">
                  {exp.period}
                </p>
              </div>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {exp.description}
              </p>
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
  );
}
