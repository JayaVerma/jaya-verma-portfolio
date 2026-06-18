import { MotionReveal } from "./MotionReveal";

interface SectionHeadingProps {
  index: string;
  label: string;
  title: string;
  blurb?: string;
}

export function SectionHeading({
  index,
  label,
  title,
  blurb,
}: SectionHeadingProps) {
  return (
    <MotionReveal className="mb-12 md:mb-16">
      <div className="flex items-center gap-3 font-mono text-xs font-semibold uppercase tracking-[0.25em]">
        <span className="text-gradient">{index}</span>
        <span className="h-px w-10 bg-gradient-to-r from-violet to-cyan" />
        <span className="text-muted">{label}</span>
      </div>
      <h2 className="mt-4 font-serif text-4xl leading-tight md:text-6xl">
        <span className="text-gradient">{title}</span>
      </h2>
      {blurb && (
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
          {blurb}
        </p>
      )}
    </MotionReveal>
  );
}
