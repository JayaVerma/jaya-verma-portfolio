import { Mail, ArrowUpRight } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { MotionReveal } from "@/components/ui-bits/MotionReveal";
import { DownloadButton } from "@/components/ui-bits/DownloadButton";
import { GithubIcon, LinkedinIcon } from "@/components/ui-bits/BrandIcons";

export function Contact({ resumeHref }: { resumeHref: string }) {
  const { personal } = portfolio;

  return (
    <footer id="contact" className="px-6 pt-20 pb-12 md:pt-28">
      <div className="mx-auto max-w-5xl">
        <MotionReveal className="glass glow-card relative overflow-hidden rounded-3xl p-10 text-center md:p-16">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-fuchsia/20 blur-[100px]"
          />
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-fuchsia">
            Let&apos;s talk
          </p>
          <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
            <span className="text-cream">Building something with AI?</span>
            <br />
            <span className="text-gradient">I&apos;d love to help.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-md text-muted">
            Open to AI / ML Engineer roles and interesting collaborations. The
            fastest way to reach me is email.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${personal.email}`}
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet via-fuchsia to-cyan bg-[length:200%_auto] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_30px_-8px_rgba(192,132,252,0.6)] transition-all duration-300 hover:bg-[position:100%_center]"
            >
              <Mail className="h-4 w-4" />
              {personal.email}
            </a>
            <DownloadButton
              href={resumeHref}
              download="Jaya_Verma_Resume.pdf"
              variant="outline"
            >
              Résumé
            </DownloadButton>
          </div>

          <div className="mt-8 flex items-center justify-center gap-6">
            <FooterLink href={personal.github} icon={<GithubIcon className="h-4 w-4" />} label="GitHub" />
            <FooterLink href={personal.linkedin} icon={<LinkedinIcon className="h-4 w-4" />} label="LinkedIn" />
          </div>
        </MotionReveal>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-line pt-8 font-mono text-xs text-faint md:flex-row">
          <span>
            © {new Date().getFullYear()} {personal.name} · {personal.location}
          </span>
          <span>Built with Next.js, Tailwind &amp; Framer Motion.</span>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-accent"
    >
      {icon}
      {label}
      <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
    </a>
  );
}
