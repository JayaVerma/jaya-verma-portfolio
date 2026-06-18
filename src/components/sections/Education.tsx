import { GraduationCap } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui-bits/SectionHeading";
import { MotionReveal } from "@/components/ui-bits/MotionReveal";

export function Education() {
  return (
    <section id="education" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading index="06" label="Education" title="Foundations." />

        <div className="grid gap-6 md:grid-cols-2">
          {portfolio.education.map((edu, i) => (
            <MotionReveal key={edu.institution} delay={i * 0.1}>
              <div className="glass glow-card flex h-full flex-col rounded-2xl p-6">
                <div className="flex items-center justify-between">
                  <span className="rounded-xl bg-gradient-to-br from-fuchsia to-violet p-2.5 text-white">
                    <GraduationCap className="h-5 w-5" />
                  </span>
                  <span className="font-mono text-xs text-faint">
                    {edu.dates}
                  </span>
                </div>
                <h3 className="mt-4 font-serif text-xl leading-snug text-cream">
                  {edu.degree}
                </h3>
                <p className="mt-1 text-sm text-cyan">
                  {edu.institution}
                </p>
                <p className="mt-0.5 font-mono text-xs text-faint">
                  {edu.location} · GPA {edu.gpa}
                </p>

                {edu.activities && (
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    <span className="text-cream">Activities & societies — </span>
                    {edu.activities}
                  </p>
                )}

                <div className="mt-4">
                  <p className="font-mono text-xs uppercase tracking-wider text-muted">
                    Key coursework
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {edu.courses.map((c) => (
                      <span
                        key={c}
                        className="rounded-md border border-line bg-white/[0.03] px-2.5 py-1 text-xs text-muted"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
