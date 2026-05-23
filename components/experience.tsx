import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    company: "HNG13",
    role: "Backend Developer Intern",
    period: "Oct 2025 — Dec 2025",
    type: "Internship",
    current: true,
  },
  {
    company: "SkyStudio",
    role: "Software Engineer",
    period: "2025",
    type: "Remote",
    current: false,
  },
  {
    company: "Buildgems",
    role: "Software Engineer Mentee",
    period: "Jan 2025 — Apr 2025",
    type: "Mentorship",
    current: false,
  },
  {
    company: "PrymalLivestock",
    role: "Backend Developer",
    period: "Apr 2025",
    type: "Freelancer",
    current: false,
  },
  {
    company: "Gista",
    role: "Frontend Developer",
    period: "Jan 2025 — Apr 2025",
    type: "Remote",
    current: false,
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-8 border-t border-border/50">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-xl font-bold font-bebas tracking-wide">Career</h2>
        <a href="#experience" className="text-sm text-primary font-medium hover:underline flex items-center gap-1">
          View all <span aria-hidden="true">-&gt;</span>
        </a>
      </div>

      <div className="space-y-6 pl-2">
        {experiences.map((exp, index) => (
          <div key={index} className="relative group">
            <div className="flex items-center gap-4 mb-2">
              <div className="w-6 h-6 rounded-md bg-secondary text-secondary-foreground flex items-center justify-center text-xs font-bold font-mono shadow-sm border border-border/50 z-10 relative">
                {exp.company.charAt(0)}
              </div>
              <h3 className="text-base font-semibold">{exp.company}</h3>
              {exp.type && (
                <span className="text-[10px] font-medium uppercase tracking-wider px-2 py-0.5 rounded-full bg-primary/10 text-primary hidden md:inline-block">
                  {exp.type}
                </span>
              )}
            </div>
            <div className="pl-3 relative">
              <div className="absolute left-[2px] top-0 bottom-0 w-[1px] bg-border group-last:bg-gradient-to-b group-last:from-border group-last:to-transparent -translate-x-[1px]"></div>
              
              <div className="pl-6 py-2 relative">
                <div className="absolute left-0 top-6 w-4 h-[1px] bg-border"></div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                  <span className="text-sm font-mono text-muted-foreground whitespace-nowrap min-w-[120px]">
                    {exp.period}
                  </span>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-muted-foreground/80">{exp.role}</span>
                    {exp.current && (
                      <span className="flex items-center gap-1.5 text-xs text-primary font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                        Now
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
