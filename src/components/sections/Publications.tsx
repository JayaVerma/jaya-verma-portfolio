import Image from "next/image";
import { FileText, BookOpen } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui-bits/SectionHeading";
import { MotionReveal } from "@/components/ui-bits/MotionReveal";
import { DownloadButton } from "@/components/ui-bits/DownloadButton";
import { getResearchPaper, getPaperPages } from "@/lib/assets";

export function Publications() {
  const { achievements } = portfolio;
  const paperHref = getResearchPaper();
  const pages = getPaperPages();

  return (
    <section id="publications" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          index="05"
          label="Writing & Research"
          title="Published work."
        />

        <div className="space-y-5">
          {achievements.map((a, i) => (
            <MotionReveal key={a.id} delay={i * 0.1}>
              <div className="glass glow-card flex flex-col gap-5 rounded-2xl p-6 md:flex-row md:items-center md:justify-between">
                <div className="flex items-start gap-4">
                  <span className="mt-0.5 rounded-xl bg-gradient-to-br from-violet to-cyan p-3 text-white">
                    <BookOpen className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-base leading-relaxed text-cream">
                      {a.text}
                    </p>
                    {a.tags.keywords && (
                      <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs text-cyan/70">
                        {a.tags.keywords.map((k) => (
                          <span key={k}>#{k.replace(/\s+/g, "-")}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {paperHref ? (
                  <DownloadButton
                    href={paperHref}
                    download="Jaya_Verma_Research_Paper.pdf"
                    variant="outline"
                    className="shrink-0"
                  >
                    Read Paper
                  </DownloadButton>
                ) : (
                  <span className="inline-flex shrink-0 items-center gap-2 rounded-full border border-dashed border-line-2 px-4 py-2 font-mono text-xs text-faint">
                    <FileText className="h-3.5 w-3.5" />
                    paper PDF coming soon
                  </span>
                )}
              </div>
            </MotionReveal>
          ))}
        </div>

        {/* First 6 pages of the paper, in a row */}
        <MotionReveal delay={0.1} className="mt-6">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-muted">
            Paper preview · first 6 pages
          </p>
          <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
            {pages.length > 0
              ? pages.map((src, idx) => (
                  <a
                    key={src}
                    href={paperHref ?? src}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glow-card group relative aspect-[3/4] overflow-hidden rounded-lg border border-line bg-white"
                  >
                    <Image
                      src={src}
                      alt={`Paper page ${idx + 1}`}
                      fill
                      sizes="(max-width: 640px) 30vw, 15vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </a>
                ))
              : Array.from({ length: 6 }).map((_, idx) => (
                  <div
                    key={idx}
                    className="glass flex aspect-[3/4] flex-col items-center justify-center rounded-lg border border-dashed border-line-2 text-center"
                  >
                    <FileText className="h-5 w-5 text-faint" />
                    <span className="mt-1 font-mono text-[10px] text-faint">
                      pg {idx + 1}
                    </span>
                  </div>
                ))}
          </div>
          {pages.length === 0 && (
            <p className="mt-2 font-mono text-[11px] text-faint">
              Drop the paper PDF in <code>public/papers/</code> (or page images
              as <code>public/papers/pages/page-1.png…page-6.png</code>) to fill
              these in.
            </p>
          )}
        </MotionReveal>
      </div>
    </section>
  );
}
