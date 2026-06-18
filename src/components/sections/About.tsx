import { SectionHeading } from "@/components/ui-bits/SectionHeading";
import { MotionReveal } from "@/components/ui-bits/MotionReveal";
import { portfolio } from "@/data/portfolio";

const focusAreas = [
  { text: "LLM systems & prompt architecture", color: "bg-violet" },
  { text: "Agentic AI (LangChain · LangGraph · MCP)", color: "bg-fuchsia" },
  { text: "Retrieval-Augmented Generation", color: "bg-cyan" },
  { text: "Cloud data pipelines on GCP & AWS", color: "bg-emerald" },
  { text: "Full-stack delivery (Next.js · FastAPI)", color: "bg-amber" },
];

export function About() {
  const ms = portfolio.education[0];

  return (
    <section id="about" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          index="01"
          label="About"
          title="Builder first, learner always."
        />

        <div className="grid gap-12 md:grid-cols-[1.6fr_1fr]">
          <MotionReveal className="space-y-5 text-lg leading-relaxed text-muted">
            <p>
              I&apos;m an AI Engineer who likes the unglamorous middle of the
              stack — where a clever LLM idea has to survive real data, real
              cost, and real users. At{" "}
              <span className="font-semibold text-violet">FEDCON</span> I design
              and own LLM scoring pipelines, automated content generation, and
              the data infrastructure that feeds them.
            </p>
            <p>
              My background blends an{" "}
              <span className="text-cream">{ms.degree}</span> from{" "}
              {ms.institution} with hands-on research extracting scientific data
              at scale. I care about systems that are measurable, reproducible,
              and actually maintained — not demos that break the moment they
              leave a notebook.
            </p>
            <p className="font-serif text-2xl italic">
              <span className="text-gradient">
                &ldquo;The fun part isn&apos;t the model — it&apos;s making it
                dependable.&rdquo;
              </span>
            </p>
          </MotionReveal>

          <MotionReveal delay={0.15}>
            <div className="glass glow-card rounded-2xl p-6">
              <h3 className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-cream">
                What I focus on
              </h3>
              <ul className="mt-4 space-y-3">
                {focusAreas.map((f) => (
                  <li
                    key={f.text}
                    className="flex items-start gap-3 text-sm text-muted"
                  >
                    <span
                      className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${f.color}`}
                    />
                    {f.text}
                  </li>
                ))}
              </ul>
            </div>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
}
