"use client";

import { motion } from "framer-motion";
import { Flame } from "lucide-react";
import { BentoCard } from "@/components/ui/BentoCard";
import { spring, tileEnter } from "@/lib/motion";

interface HeroTileProps {
  name?: string;
  streak?: number;
}

export function HeroTile({ name = "Rajeev Ranjan", streak = 12 }: HeroTileProps) {
  const hour = new Date().getHours();
  const greeting =
    hour < 12 ? "Good morning" : hour < 17 ? "Good afternoon" : "Good evening";

  return (
    <motion.div variants={tileEnter} transition={spring}>
      <BentoCard glow="teal" className="min-h-[168px] p-6 md:min-h-[192px] md:p-8">
        <header className="flex h-full flex-col justify-between gap-6">
          <div>
            <p className="text-sm font-medium tracking-wide text-text-secondary uppercase">
              {greeting}
            </p>
            <h1 className="mt-1 font-display text-3xl font-semibold tracking-tight text-text-primary md:text-4xl">
              Welcome back, {name}
            </h1>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-text-muted">
              You&apos;re on track this week. Pick up where you left off.
            </p>
          </div>

          <div className="flex items-center gap-3 self-start rounded-xl border border-border-subtle bg-bg-elevated/60 px-4 py-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-warm-dim">
              <Flame className="h-4 w-4 text-accent-warm" aria-hidden />
            </span>
            <div>
              <p className="text-xs text-text-muted">Daily streak</p>
              <p className="font-display text-lg font-semibold tabular-nums text-text-primary">
                {streak} days
              </p>
            </div>
          </div>
        </header>

        {/* ambient mesh */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-accent/6 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-10 left-1/3 h-40 w-40 rounded-full bg-accent-warm/5 blur-3xl"
        />
      </BentoCard>
    </motion.div>
  );
}
