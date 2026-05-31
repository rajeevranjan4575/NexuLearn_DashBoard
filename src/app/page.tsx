import { Suspense } from "react";
import { Dashboard } from "@/components/dashboard/Dashboard";
import { DashboardSkeleton } from "@/components/dashboard/DashboardSkeleton";
import { fetchCourses } from "@/lib/supabase/queries";

export const dynamic = "force-dynamic";

async function DashboardWithData() {
  const courses = await fetchCourses();
  return <Dashboard courses={courses} />;
}

export default function HomePage() {
  return (
    <Suspense fallback={<DashboardSkeleton />}>
      <DashboardWithData />
    </Suspense>
  );
}
