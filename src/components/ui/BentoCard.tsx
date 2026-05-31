"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { spring } from "@/lib/motion";

interface BentoCardProps {
  children: ReactNode;
  className?: string;
  glow?: "teal" | "amber" | "neutral";
}

const glowStyles = {
  teal: "from-accent/8 via-transparent to-transparent",
  amber: "from-accent-warm/8 via-transparent to-transparent",
  neutral: "from-white/4 via-transparent to-transparent",
};

export function BentoCard({ children, className = "", glow = "neutral" }: BentoCardProps) {
  return (
    <motion.article
      whileHover={{ scale: 1.015 }}
      transition={spring}
      className={`group relative overflow-hidden rounded-2xl border border-border-subtle bg-bg-surface will-change-transform ${className}`}
    >
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${glowStyles[glow]}`}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 ring-1 ring-inset ring-accent/25 transition-opacity duration-500 group-hover:opacity-100"
      />
      <div className="relative z-10 h-full">{children}</div>
    </motion.article>
  );
}
