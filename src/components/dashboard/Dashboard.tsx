"use client";

import { ActivityTile } from "@/components/dashboard/ActivityTile";
import { CourseGrid } from "@/components/dashboard/CourseGrid";
import { HeroTile } from "@/components/dashboard/HeroTile";
import { DashboardShell } from "@/components/layout/DashboardShell";
import type { Course } from "@/lib/supabase/types";

interface DashboardProps {
  courses: Course[];
}

export function Dashboard({ courses }: DashboardProps) {
  return (
    <DashboardShell>
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-6 lg:grid-rows-[auto_1fr] lg:gap-5">
          <section
            aria-label="Overview"
            className="md:col-span-2 lg:col-span-4 lg:row-start-1"
          >
            <HeroTile name="Rajeev Ranjan" streak={12} />
          </section>

          <section
            aria-label="Activity overview"
            className="md:col-span-2 lg:col-span-2 lg:row-span-2 lg:row-start-1"
          >
            <ActivityTile />
          </section>

          <section
            aria-label="Active courses"
            className="contents md:col-span-2 lg:col-span-4 lg:row-start-2"
          >
            <CourseGrid courses={courses} />
          </section>
        </div>
      </div>
    </DashboardShell>
  );
}
