"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "a nextjs powered frontend designed for law school scholarship application ",
    technologies: ["Next.js", "TypeScript,tailwindcss"],
    github: "https://github.com/luli-tech/law-lift-portal",
    demo: "https://law-lift-portal.vercel.app/",
    preview: "https://law-lift-portal.vercel.app/",
    screenshot: "/reginal-aziza.png",
  },
  {
    title: "website builder Site",
    description:
      "Collaborative task management application with real-time updates, team workspaces, and project tracking. Features drag-and-drop interface and notifications.",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
    github: "https://github.com",
    demo: "https://test-two-beige-83.vercel.app/",
    preview: "https://test-two-beige-83.vercel.app/",
    screenshot: "/skystudio.png",
  },
  {
    title: "Weather Dashboard",
    description:
      "Beautiful weather dashboard with location-based forecasts, interactive maps, and historical data visualization. Responsive design for all devices.",
    technologies: ["Vue.js", "Express", "Chart.js", "OpenWeather API"],
    github: "https://github.com",
    demo: "https://example.com",
    preview: "https://example.com",
    screenshot: "/weather-dashboard-forecast-charts.jpg",
  },
  {
    title: "Portfolio CMS",
    description:
      "Content management system for creative professionals to showcase their work. Features custom themes, SEO optimization, and analytics integration.",
    technologies: ["Next.js", "Sanity", "Tailwind CSS", "Vercel"],
    github: "https://github.com",
    demo: "https://example.com",
    preview: "https://example.com",
    screenshot: "/portfolio-cms-admin-interface.jpg",
  },
];

export function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [previewProject, setPreviewProject] = useState<number | null>(null);

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-balance">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 hover:scale-[1.02] border-2 hover:border-primary/50"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative h-48 overflow-hidden bg-muted">
                <img
                  src={project.screenshot || "/placeholder.svg"}
                  alt={`${project.title} screenshot`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />
                <div
                  className={`absolute inset-0 bg-primary/10 backdrop-blur-sm flex items-center justify-center gap-3 transition-opacity duration-300 ${
                    hoveredProject === index ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Button variant="secondary" size="sm" asChild>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => setPreviewProject(index)}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Preview
                  </Button>
                </div>
              </div>
              <div className="p-6 flex flex-col">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-primary/10 text-primary border-primary/20"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {previewProject !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <Card className="w-full max-w-4xl h-[80vh] flex flex-col border-2 shadow-2xl">
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="text-xl font-bold">
                {projects[previewProject].title} - Live Preview
              </h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setPreviewProject(null)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex-1 overflow-hidden">
              <iframe
                src={projects[previewProject].preview}
                className="w-full h-full border-0"
                title={`${projects[previewProject].title} preview`}
              />
            </div>
            <div className="p-4 border-t flex gap-2 justify-end">
              <Button variant="outline" onClick={() => setPreviewProject(null)}>
                Close
              </Button>
              <Button asChild>
                <a
                  href={projects[previewProject].demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Open Full Site
                </a>
              </Button>
            </div>
          </Card>
        </div>
      )}
    </section>
  );
}
