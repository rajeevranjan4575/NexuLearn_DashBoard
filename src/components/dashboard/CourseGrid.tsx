import type { Course } from "@/lib/supabase/types";
import { CourseTile } from "./CourseTile";

interface CourseGridProps {
  courses: Course[];
}

export function CourseGrid({ courses }: CourseGridProps) {
  if (courses.length === 0) {
    return (
      <section
        aria-label="Active courses"
        className="col-span-full flex min-h-[148px] items-center justify-center rounded-2xl border border-dashed border-border-subtle bg-bg-surface/50 p-8"
      >
        <p className="text-sm text-text-muted">No active courses yet.</p>
      </section>
    );
  }

  return (
    <>
      {courses.map((course, index) => (
        <CourseTile key={course.id} course={course} index={index} />
      ))}
    </>
  );
}
