"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface MotionRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** vertical offset to slide from, in px */
  y?: number;
  as?: "div" | "li" | "section";
}

/**
 * Fade + gentle slide-in when the element scrolls into view.
 * Respects prefers-reduced-motion via Framer's built-in handling.
 */
export function MotionReveal({
  children,
  className,
  delay = 0,
  y = 18,
}: MotionRevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
