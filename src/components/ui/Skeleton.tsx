interface SkeletonProps {
  className?: string;
}

export function Skeleton({ className = "" }: SkeletonProps) {
  return (
    <div
      aria-hidden
      className={`skeleton-pulse rounded-lg bg-bg-elevated ${className}`}
    />
  );
}
