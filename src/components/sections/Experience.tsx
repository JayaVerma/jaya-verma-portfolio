"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolio, type Experience as Exp } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui-bits/SectionHeading";
import { cn } from "@/lib/cn";

export function Experience() {
  const experiences = portfolio.experiences;
  const [open, setOpen] = useState<Record<string, boolean>>(
    Object.fromEntries(experiences.map((e) => [e.id, e.is_current]))
  );

  return (
    <section id="experience" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          index="02"
          label="Experience"
          title="Where I've shipped."
          blurb="From a current AI Engineer role to research and early ML internships — the work that taught me to make systems dependable."
        />

        <div className="relative">
          {/* gradient timeline rail */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-violet via-fuchsia to-cyan md:left-[9px]" />
          <ul className="space-y-10">
            {experiences.map((exp) => (
              <ExperienceItem
                key={exp.id}
                exp={exp}
                open={!!open[exp.id]}
                onToggle={() =>
                  setOpen((s) => ({ ...s, [exp.id]: !s[exp.id] }))
                }
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function ExperienceItem({
  exp,
  open,
  onToggle,
}: {
  exp: Exp;
  open: boolean;
  onToggle: () => void;
}) {
  const stackItems = exp.stack
    ? exp.stack.split("·").map((s) => s.trim()).filter(Boolean)
    : [];

  return (
    <motion.li
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="relative pl-8 md:pl-10"
    >
      {/* node */}
      <span
        className={cn(
          "absolute left-0 top-1.5 h-4 w-4 rounded-full border-2 md:h-5 md:w-5",
          exp.is_current
            ? "border-fuchsia bg-fuchsia/40 shadow-[0_0_16px_2px_rgba(225,81,232,0.6)]"
            : "border-line-2 bg-base"
        )}
      />

      <button
        onClick={onToggle}
        className="group flex w-full items-start justify-between gap-4 text-left"
      >
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="font-serif text-2xl text-cream">
              {exp.title}{" "}
              <span className="text-gradient">{exp.company}</span>
            </h3>
            {exp.is_current && (
              <span className="rounded-full border border-fuchsia/40 bg-fuchsia/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-fuchsia">
                Current
              </span>
            )}
          </div>
          {exp.subtitle && (
            <p className="mt-1 text-sm text-muted">{exp.subtitle}</p>
          )}
          <p className="mt-0.5 font-mono text-xs text-faint">
            {exp.location} · {exp.dates}
          </p>
        </div>
        <ChevronDown
          className={cn(
            "mt-2 h-5 w-5 shrink-0 text-muted transition-transform duration-300 group-hover:text-fuchsia",
            open && "rotate-180"
          )}
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            {exp.summary && (
              <p className="mt-4 rounded-xl border-l-2 border-violet/60 bg-white/[0.03] px-4 py-3 text-[15px] leading-relaxed text-cream/90">
                {exp.summary}
              </p>
            )}

            <ul className="mt-5 space-y-3">
              {exp.bullets.map((b) => {
                const high = b.tags.strength === "high";
                return (
                  <li key={b.id} className="flex items-start gap-3">
                    <span
                      className={cn(
                        "mt-2 h-1.5 w-1.5 shrink-0 rounded-full",
                        high
                          ? "bg-gradient-to-r from-violet to-cyan"
                          : "bg-faint"
                      )}
                    />
                    <p
                      className={cn(
                        "text-[15px] leading-relaxed",
                        high ? "text-cream/90" : "text-muted"
                      )}
                    >
                      {b.text}
                    </p>
                  </li>
                );
              })}
            </ul>

            {stackItems.length > 0 && (
              <div className="mt-5 flex flex-wrap gap-2">
                {stackItems.map((s, i) => (
                  <span
                    key={s}
                    className={cn(
                      "rounded-md border px-2.5 py-1 font-mono text-[11px]",
                      i % 3 === 0 && "border-violet/25 bg-violet/10 text-violet",
                      i % 3 === 1 && "border-cyan/25 bg-cyan/10 text-cyan",
                      i % 3 === 2 &&
                        "border-fuchsia/25 bg-fuchsia/10 text-fuchsia"
                    )}
                  >
                    {s}
                  </span>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.li>
  );
}
