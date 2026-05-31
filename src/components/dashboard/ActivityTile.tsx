"use client";

import { motion } from "framer-motion";
import { BentoCard } from "@/components/ui/BentoCard";
import { spring, tileEnter } from "@/lib/motion";

const WEEKS = 12;
const DAYS = 7;

// seeded pseudo-random so the chart looks consistent between renders
function activityLevel(week: number, day: number): number {
  const seed = week * 7 + day;
  return ((seed * 17 + 31) % 5);
}

const levelOpacity = ["opacity-15", "opacity-30", "opacity-50", "opacity-70", "opacity-100"];

export function ActivityTile() {
  return (
    <motion.div
      variants={tileEnter}
      transition={spring}
      className="h-full min-h-[280px] lg:min-h-0"
    >
      <BentoCard glow="neutral" className="flex h-full flex-col p-5 md:p-6">
        <header className="mb-5 flex items-end justify-between">
          <div>
            <h2 className="font-display text-lg font-semibold text-text-primary">
              Learning activity
            </h2>
            <p className="mt-0.5 text-xs text-text-muted">Last 12 weeks</p>
          </div>
          <dl className="text-right">
            <dt className="text-xs text-text-muted">Sessions</dt>
            <dd className="font-display text-xl font-semibold tabular-nums text-accent">
              847
            </dd>
          </dl>
        </header>

        <section aria-label="Weekly activity heatmap" className="flex-1 overflow-x-auto">
          <div className="flex gap-[3px] min-w-max">
            {Array.from({ length: WEEKS }, (_, week) => (
              <div key={week} className="flex flex-col gap-[3px]">
                {Array.from({ length: DAYS }, (_, day) => {
                  const level = activityLevel(week, day);
                  return (
                    <div
                      key={day}
                      title={`Week ${week + 1}, day ${day + 1}`}
                      className={`h-[11px] w-[11px] rounded-[2px] bg-accent ${levelOpacity[level]}`}
                    />
                  );
                })}
              </div>
            ))}
          </div>
        </section>

        <footer className="mt-4 flex items-center justify-end gap-1.5 text-[10px] text-text-muted">
          <span>Less</span>
          {levelOpacity.map((opacity, i) => (
            <div
              key={i}
              className={`h-[9px] w-[9px] rounded-[2px] bg-accent ${opacity}`}
            />
          ))}
          <span>More</span>
        </footer>
      </BentoCard>
    </motion.div>
  );
}
