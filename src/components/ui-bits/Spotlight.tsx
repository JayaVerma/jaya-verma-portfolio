"use client";

import { useEffect, useRef } from "react";

/**
 * A soft radial glow that follows the cursor across its parent container.
 * Drop inside a `relative overflow-hidden` element. Pointer-events disabled.
 */
export function Spotlight({ color = "rgba(168,85,247,0.18)" }: { color?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const parent = el.parentElement;
    if (!parent) return;

    const onMove = (e: MouseEvent) => {
      const rect = parent.getBoundingClientRect();
      el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
      el.style.setProperty("--my", `${e.clientY - rect.top}px`);
      el.style.opacity = "1";
    };
    const onLeave = () => {
      el.style.opacity = "0";
    };

    parent.addEventListener("mousemove", onMove);
    parent.addEventListener("mouseleave", onLeave);
    return () => {
      parent.removeEventListener("mousemove", onMove);
      parent.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-0 opacity-0 transition-opacity duration-300"
      style={{
        background: `radial-gradient(420px circle at var(--mx, 50%) var(--my, 50%), ${color}, transparent 70%)`,
      }}
    />
  );
}
