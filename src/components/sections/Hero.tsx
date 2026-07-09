import Image from "next/image";
import { ArrowDown, Mail, MapPin } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { getProfileImage } from "@/lib/assets";
import { DownloadButton } from "@/components/ui-bits/DownloadButton";
import { GithubIcon, LinkedinIcon } from "@/components/ui-bits/BrandIcons";
import { Spotlight } from "@/components/ui-bits/Spotlight";
import { AnimatedCounter } from "@/components/ui-bits/AnimatedCounter";

const stats = [
  { target: 1000, suffix: "+", label: "commits · 3 months", color: "text-violet" },
  { target: 150, suffix: "+", label: "PRs merged", color: "text-cyan" },
  { target: 40, suffix: "+", label: "repositories", color: "text-fuchsia" },
  { target: 6, suffix: "+", label: "production AI systems", color: "text-amber" },
];

export function Hero({ resumeHref }: { resumeHref: string }) {
  const { personal } = portfolio;
  const photo = getProfileImage();
  const current = portfolio.experiences.find((e) => e.is_current);

  return (
    <section
      id="top"
      className="relative overflow-hidden px-6 pt-32 pb-20 md:pt-44 md:pb-28"
    >
      <Spotlight />

      {/* floating color orbs */}
      <div
        aria-hidden
        className="animate-float pointer-events-none absolute -left-10 top-32 h-56 w-56 rounded-full bg-violet/30 blur-[90px]"
      />
      <div
        aria-hidden
        className="animate-float pointer-events-none absolute right-0 top-20 h-64 w-64 rounded-full bg-cyan/20 blur-[100px]"
        style={{ animationDelay: "2s" }}
      />
      <div
        aria-hidden
        className="animate-float pointer-events-none absolute bottom-0 left-1/3 h-52 w-52 rounded-full bg-fuchsia/20 blur-[90px]"
        style={{ animationDelay: "4s" }}
      />

      <div className="relative mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-[1.45fr_1fr]">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-line-2 bg-white/5 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.18em] text-cream backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald" />
            </span>
            Available for AI / ML Engineer roles
          </p>

          <h1 className="mt-6 font-serif text-6xl leading-[1.02] md:text-8xl">
            <span className="text-gradient">{personal.name}</span>
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted md:text-xl">
            <span className="font-semibold text-cream">AI Engineer</span>
            {current ? ` @ ${current.company}` : ""}. I build production{" "}
            <span className="font-semibold text-violet">LLM</span>,{" "}
            <span className="font-semibold text-fuchsia">agentic</span>, and{" "}
            <span className="font-semibold text-cyan">RAG</span> systems —
            shipping real pipelines on GCP, the Anthropic API, and Next.js.
            Still learning, always building.
          </p>

          <p className="mt-5 inline-flex items-center gap-2 font-mono text-xs text-faint">
            <MapPin className="h-3.5 w-3.5 text-fuchsia" />
            USA
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <DownloadButton href={resumeHref} download="Jaya_Verma_Resume.pdf">
              Download Résumé
            </DownloadButton>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full border border-line-2 px-5 py-2.5 text-sm font-semibold text-cream transition-colors hover:border-cyan hover:text-cyan"
            >
              View Work <ArrowDown className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-8 flex items-center gap-5">
            <SocialLink href={personal.github} label="GitHub">
              <GithubIcon className="h-5 w-5" />
            </SocialLink>
            <SocialLink href={personal.linkedin} label="LinkedIn">
              <LinkedinIcon className="h-5 w-5" />
            </SocialLink>
            <SocialLink href={`mailto:${personal.email}`} label="Email">
              <Mail className="h-5 w-5" />
            </SocialLink>
          </div>
        </div>

        {/* Portrait — transparent cutout floating over a color glow */}
        <div className="order-first md:order-last">
          {photo ? (
            <div className="relative mx-auto w-60 md:w-full md:max-w-sm">
              {/* soft colorful glow behind the cutout */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-4 bottom-0 top-8 rounded-[40%] bg-gradient-to-br from-violet/40 via-fuchsia/30 to-cyan/30 blur-3xl"
              />
              <Image
                src={photo}
                alt={personal.name}
                width={777}
                height={1295}
                priority
                sizes="(max-width: 768px) 15rem, 24rem"
                className="relative mx-auto h-auto w-full max-h-[460px] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
              />
            </div>
          ) : (
            <div className="relative mx-auto w-48 md:w-full md:max-w-xs">
              <div className="absolute -inset-1 rounded-[1.75rem] bg-gradient-to-br from-violet via-fuchsia to-cyan opacity-70 blur-md" />
              <div className="relative flex aspect-square flex-col items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-surface text-center">
                <span className="font-serif text-7xl text-gradient">JV</span>
                <span className="mt-2 px-4 font-mono text-[10px] uppercase tracking-widest text-faint">
                  add photo → public/images/profile.png
                </span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Stats strip */}
      <div className="relative mx-auto mt-16 grid max-w-5xl grid-cols-2 gap-4 md:grid-cols-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className="glass glow-card rounded-2xl px-5 py-6 transition-transform duration-300 hover:-translate-y-1"
          >
            <div className={`font-serif text-4xl ${s.color}`}>
              <AnimatedCounter target={s.target} suffix={s.suffix} />
            </div>
            <div className="mt-1 font-mono text-[11px] uppercase tracking-wider text-muted">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noopener noreferrer"
      aria-label={label}
      className="text-muted transition-all duration-200 hover:-translate-y-0.5 hover:text-fuchsia"
    >
      {children}
    </a>
  );
}
