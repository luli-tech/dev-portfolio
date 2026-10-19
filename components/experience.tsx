const experiences = [
  {
    company: "Nitoons Ltd",
    role: "Software Engineer",
    period: "Mar 2026 – Present",
    current: true,
    highlights: [
      "Built Antroph's Aura, an AI therapeutic companion, with response caching and request optimization to reduce redundant model calls and infrastructure costs.",
      "Developed Voya's mobile interface, backend, and automated travel workflows, and revamped the architecture and user experience of One Take, an actors app.",
      "Engineered production fintech services for a major Nigerian bank, including resilient APIs, secure authentication, business logic, and database models.",
    ],
  },
  {
    company: "Paracletus Hub",
    role: "Web Experience Lead",
    period: "Jan 2026 – Mar 2026",
    current: false,
    highlights: [
      "Led frontend architecture and UI/UX for client-facing web and mobile applications, delivering responsive, accessible interfaces and SEO-optimized MVPs.",
      "Improved page load performance, accessibility, and search visibility across client platforms.",
    ],
  },
  {
    company: "Skystudio",
    role: "Freelance Software Engineer",
    period: "Oct 2025 – Present",
    current: true,
    highlights: [
      "Turned client business and technical requirements into scalable, production-ready software.",
      "Deployed, optimized, and maintained applications in live cloud environments, supporting uptime and system stability.",
    ],
  },
  {
    company: "HNG Tech",
    role: "Backend Intern",
    period: "Oct 2025 – Dec 2025",
    current: false,
    highlights: [
      "Built NestJS and FastAPI services, breaking monolithic modules into decoupled microservices with validated REST APIs and database authorization controls.",
      "Integrated Mastra AI for automated backend workflows and AI task processing.",
    ],
  },
  {
    company: "PrymalLivestock",
    role: "Full-Stack Developer",
    period: "Feb 2025 – Aug 2025",
    current: false,
    highlights: [
      "Built an e-commerce platform with real-time inventory, user activity tracking, order management, and secure Paystack checkout.",
      "Developed analytics dashboards and optimized performance and transaction flows, increasing transaction volume by 40%.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 py-8 border-t border-border/50">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-xl font-bold font-bebas tracking-wide">Career</h2>
        <span className="text-xs font-mono text-muted-foreground">{experiences.length} roles</span>
      </div>

      <ol className="space-y-8 pl-2">
        {experiences.map((exp) => (
          <li key={exp.company} className="relative group">
            <div className="flex items-center gap-4 mb-2">
              <div aria-hidden="true" className="w-6 h-6 shrink-0 rounded-md bg-secondary text-secondary-foreground flex items-center justify-center text-xs font-bold font-mono shadow-sm border border-border/50 z-10 relative">
                {exp.company.charAt(0)}
              </div>
              <h3 className="text-base font-semibold">{exp.company}</h3>
            </div>
            <div className="pl-3 relative">
              <div aria-hidden="true" className="absolute left-[2px] top-0 bottom-0 w-[1px] bg-border group-last:bg-gradient-to-b group-last:from-border group-last:to-transparent -translate-x-[1px]"></div>
              
              <div className="pl-6 py-2 relative">
                <div aria-hidden="true" className="absolute left-0 top-6 w-4 h-[1px] bg-border"></div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                  <span className="text-sm font-mono text-muted-foreground whitespace-nowrap min-w-[120px]">
                    {exp.period}
                  </span>
                  <div className="flex flex-wrap items-center gap-2 text-sm">
                    <span className="text-foreground">{exp.role}</span>
                    {exp.current && (
                      <span className="flex items-center gap-1.5 text-xs text-primary font-medium">
                        <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                        Current
                      </span>
                    )}
                  </div>
                </div>
                <ul className="mt-3 list-disc space-y-2 pl-4 text-sm leading-relaxed text-muted-foreground marker:text-muted-foreground/60">
                  {exp.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
