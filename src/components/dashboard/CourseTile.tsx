"use client";

import { motion } from "framer-motion";
import { BentoCard } from "@/components/ui/BentoCard";
import { ProgressBar } from "@/components/dashboard/ProgressBar";
import { resolveIcon } from "@/lib/icons";
import { spring, tileEnter } from "@/lib/motion";
import type { Course } from "@/lib/supabase/types";

interface CourseTileProps {
  course: Course;
  index: number;
}

const meshTints = [
  "from-accent/10 to-transparent",
  "from-accent-warm/8 to-transparent",
  "from-white/6 to-transparent",
  "from-accent/6 to-accent-warm/4",
];

export function CourseTile({ course, index }: CourseTileProps) {
  const Icon = resolveIcon(course.icon_name);
  const tint = meshTints[index % meshTints.length];
  const glow = index % 2 === 0 ? "teal" : "amber";

  return (
    <motion.div variants={tileEnter} transition={spring} className="lg:col-span-2">
      <BentoCard glow={glow} className="min-h-[148px] p-5">
        <div
          aria-hidden
          className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${tint} opacity-60`}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 80%, white 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="relative flex h-full flex-col justify-between gap-5">
          <div className="flex items-start justify-between gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border-subtle bg-bg-elevated/80">
              <Icon className="h-[18px] w-[18px] text-accent" aria-hidden />
            </span>
            <span className="font-display text-2xl font-semibold tabular-nums text-text-secondary">
              {course.progress}
              <span className="text-sm font-normal text-text-muted">%</span>
            </span>
          </div>

          <div>
            <h3 className="font-medium leading-snug text-text-primary">
              {course.title}
            </h3>
            <div className="mt-3">
              <ProgressBar
                value={course.progress}
                accent={index % 2 === 0 ? "teal" : "amber"}
              />
            </div>
          </div>
        </div>
      </BentoCard>
    </motion.div>
  );
}
