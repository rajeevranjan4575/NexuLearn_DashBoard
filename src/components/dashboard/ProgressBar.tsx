"use client";

import { motion, useReducedMotion } from "framer-motion";
import { spring } from "@/lib/motion";

interface ProgressBarProps {
  value: number;
  accent?: "teal" | "amber";
}

export function ProgressBar({ value, accent = "teal" }: ProgressBarProps) {
  const prefersReduced = useReducedMotion();
  const clamped = Math.min(100, Math.max(0, value));

  const fillClass =
    accent === "amber"
      ? "bg-gradient-to-r from-accent-warm/80 to-accent-warm"
      : "bg-gradient-to-r from-accent/70 to-accent";

  return (
    <div
      role="progressbar"
      aria-valuenow={clamped}
      aria-valuemin={0}
      aria-valuemax={100}
      className="h-1.5 w-full overflow-hidden rounded-full bg-bg-elevated"
    >
      <motion.div
        className={`h-full rounded-full ${fillClass}`}
        initial={{ width: prefersReduced ? `${clamped}%` : "0%" }}
        animate={{ width: `${clamped}%` }}
        transition={{
          ...spring,
          delay: prefersReduced ? 0 : 0.35,
        }}
      />
    </div>
  );
}
