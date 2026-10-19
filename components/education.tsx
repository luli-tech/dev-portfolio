const education = [
  {
    institution: "University of Ibadan",
    qualification: "Bachelor of Laws (LL.B.)",
    period: "2021 – 2026",
    description:
      "Focus on Technology Law, Intellectual Property, and Digital Infrastructure Regulation.",
  },
  {
    institution: "BuildGems",
    qualification: "Software Development Mentorship",
    period: "Mar 2025 – May 2025",
    description:
      "Training in modern software development practices, system design, and database normalization.",
  },
  {
    institution: "Asdin.net",
    qualification: "Full-Stack Development Bootcamp",
    period: "Nov 2024 – Mar 2025",
    description:
      "Developed and deployed full-stack applications with JavaScript, TypeScript, and RESTful APIs.",
  },
];

export function Education() {
  return (
    <section id="education" className="scroll-mt-24 border-t border-border/50 py-8">
      <div className="mb-8 flex items-center justify-between gap-4">
        <h2 className="text-xl font-bold font-bebas tracking-wide">Education</h2>
        <span className="text-xs font-mono text-muted-foreground">Degree &amp; training</span>
      </div>

      <div className="space-y-8">
        {education.map((entry) => (
          <article key={entry.institution} className="space-y-2">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
              <h3 className="text-base font-semibold">{entry.institution}</h3>
              <p className="text-sm font-mono text-muted-foreground">{entry.period}</p>
            </div>
            <p className="text-sm font-medium">{entry.qualification}</p>
            <p className="text-sm leading-relaxed text-muted-foreground">{entry.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
