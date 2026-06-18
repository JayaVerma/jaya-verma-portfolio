import { portfolio, skillGroupLabels, skillGroupOrder } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui-bits/SectionHeading";
import { MotionReveal } from "@/components/ui-bits/MotionReveal";
import { TechChip } from "@/components/ui-bits/TechChip";

const dotColors = [
  "bg-violet",
  "bg-cyan",
  "bg-fuchsia",
  "bg-emerald",
  "bg-amber",
  "bg-sky",
];

export function Skills() {
  const { skills } = portfolio;

  return (
    <section id="skills" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          index="04"
          label="Skills"
          title="The toolkit."
          blurb="Grouped by where it lives in the stack. Heaviest on the ML/AI and cloud side — the rest supports shipping it."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {skillGroupOrder.map((key, i) => (
            <MotionReveal key={key} delay={(i % 2) * 0.08} className="h-full">
              <div className="glass glow-card h-full rounded-2xl p-6">
                <h3 className="flex items-center gap-3 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-cream">
                  <span
                    className={`h-2.5 w-2.5 rounded-full ${dotColors[i % dotColors.length]}`}
                  />
                  {skillGroupLabels[key]}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {skills[key].map((s) => (
                    <TechChip key={s}>{s}</TechChip>
                  ))}
                </div>
              </div>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
