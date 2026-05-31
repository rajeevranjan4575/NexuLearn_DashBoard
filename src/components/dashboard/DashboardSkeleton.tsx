import { Skeleton } from "@/components/ui/Skeleton";
import { BottomNav } from "@/components/layout/BottomNav";
import { Sidebar } from "@/components/layout/Sidebar";

export function DashboardSkeleton() {
  return (
    <div className="flex min-h-screen bg-bg-base">
      <Sidebar />

      <div className="flex min-h-screen flex-1 flex-col">
        <main className="flex-1 overflow-y-auto px-4 py-6 pb-24 md:px-6 md:py-8 md:pb-8 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-6 lg:grid-rows-[auto_1fr] lg:gap-5">
              <Skeleton className="min-h-[168px] rounded-2xl md:min-h-[192px] md:col-span-2 lg:col-span-4" />
              <Skeleton className="min-h-[280px] rounded-2xl md:col-span-2 lg:col-span-2 lg:row-span-2" />

              {Array.from({ length: 4 }).map((_, i) => (
                <Skeleton key={i} className="min-h-[148px] rounded-2xl lg:col-span-2" />
              ))}
            </div>
          </div>
        </main>
      </div>

      <BottomNav />
    </div>
  );
}
