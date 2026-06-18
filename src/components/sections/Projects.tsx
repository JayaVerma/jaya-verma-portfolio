import { ArrowUpRight } from "lucide-react";
import { portfolio, type Project } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui-bits/SectionHeading";
import { MotionReveal } from "@/components/ui-bits/MotionReveal";
import { TechChip } from "@/components/ui-bits/TechChip";
import { GithubIcon } from "@/components/ui-bits/BrandIcons";

const gradients = [
  "from-violet/40 via-fuchsia/20 to-transparent",
  "from-cyan/40 via-sky/20 to-transparent",
  "from-fuchsia/40 via-pink/20 to-transparent",
  "from-emerald/40 via-cyan/20 to-transparent",
  "from-amber/40 via-rose/20 to-transparent",
  "from-sky/40 via-violet/20 to-transparent",
];

export function Projects() {
  return (
    <section id="projects" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          index="03"
          label="Projects"
          title="Things I've built."
          blurb="A mix of agentic systems, production RAG, and applied ML. Code on GitHub — screenshots coming soon."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {portfolio.projects.map((p, i) => (
            <MotionReveal key={p.id} delay={(i % 2) * 0.1}>
              <ProjectCard project={p} colorIndex={i} />
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  colorIndex,
}: {
  project: Project;
  colorIndex: number;
}) {
  const techs = project.tech.split("·").map((t) => t.trim()).filter(Boolean);
  const isGithub = project.url.includes("github.com");
  const featured = project.bullets.some((b) => b.tags.strength === "high");

  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="glass glow-card group flex h-full flex-col overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1.5"
    >
      {/* gradient banner with the full project title */}
      <div
        className={`relative flex min-h-[9rem] flex-col justify-end overflow-hidden border-b border-white/5 bg-gradient-to-br p-5 ${gradients[colorIndex % gradients.length]}`}
      >
        {featured && (
          <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/30 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-white backdrop-blur">
            ★ Featured
          </span>
        )}
        <span className="absolute right-4 top-4 text-white/70 transition-colors group-hover:text-white">
          {isGithub ? (
            <GithubIcon className="h-5 w-5" />
          ) : (
            <ArrowUpRight className="h-5 w-5" />
          )}
        </span>
        <h3 className="mt-8 font-serif text-3xl leading-tight text-white drop-shadow-sm transition-transform duration-300 group-hover:translate-x-0.5 md:text-4xl">
          {project.title}
        </h3>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="flex-1 text-sm leading-relaxed text-muted">
          {project.bullets[0]?.text}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {techs.slice(0, 6).map((t, i) => (
            <TechChip key={t} index={i}>
              {t}
            </TechChip>
          ))}
        </div>
      </div>
    </a>
  );
}
