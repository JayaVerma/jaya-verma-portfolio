import { cn } from "@/lib/cn";

/** Vibrant per-chip color cycle so skill clouds read colorful, not monotone. */
const palettes = [
  "border-violet/30 bg-violet/10 text-violet hover:bg-violet/20",
  "border-cyan/30 bg-cyan/10 text-cyan hover:bg-cyan/20",
  "border-fuchsia/30 bg-fuchsia/10 text-fuchsia hover:bg-fuchsia/20",
  "border-emerald/30 bg-emerald/10 text-emerald hover:bg-emerald/20",
  "border-amber/30 bg-amber/10 text-amber hover:bg-amber/20",
  "border-sky/30 bg-sky/10 text-sky hover:bg-sky/20",
  "border-rose/30 bg-rose/10 text-rose hover:bg-rose/20",
];

function hash(str: string) {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) | 0;
  return Math.abs(h);
}

export function TechChip({
  children,
  index,
}: {
  children: React.ReactNode;
  /** optional explicit index; otherwise color is derived from the label */
  index?: number;
}) {
  const key = index ?? hash(String(children));
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 font-mono text-xs tracking-tight transition-all duration-200 hover:-translate-y-0.5",
        palettes[key % palettes.length]
      )}
    >
      {children}
    </span>
  );
}
