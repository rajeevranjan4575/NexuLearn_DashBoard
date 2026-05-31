"use client";

import { AlertCircle, RefreshCw } from "lucide-react";
import { useEffect } from "react";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  const isTableMissing = error.message.includes("Could not find the table");
  const isConfigError =
    error.message.includes("NEXT_PUBLIC") ||
    error.message.includes("Invalid supabaseUrl") ||
    error.message.includes("must be your project URL");

  let message = error.message || "Something went wrong while fetching your courses.";
  if (isConfigError) {
    message =
      "Check .env.local: NEXT_PUBLIC_SUPABASE_URL should be https://YOUR-PROJECT.supabase.co (Project URL, not an API key). NEXT_PUBLIC_SUPABASE_ANON_KEY is the anon/public key from Settings → API.";
  } else if (isTableMissing) {
    message =
      "The courses table does not exist yet. Open Supabase → SQL Editor, paste the contents of supabase/schema.sql, and click Run. Then refresh this page.";
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-bg-base px-4">
      <section
        role="alert"
        className="w-full max-w-md rounded-2xl border border-border-subtle bg-bg-surface p-8 text-center"
      >
        <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10">
          <AlertCircle className="h-6 w-6 text-red-400" aria-hidden />
        </span>
        <h1 className="mt-4 font-display text-xl font-semibold text-text-primary">
          Couldn&apos;t load your dashboard
        </h1>
        <p className="mt-2 text-sm leading-relaxed text-text-secondary">
          {message}
        </p>
        <button
          type="button"
          onClick={reset}
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-accent-dim px-5 py-2.5 text-sm font-medium text-accent transition-opacity hover:opacity-80"
        >
          <RefreshCw className="h-4 w-4" aria-hidden />
          Try again
        </button>
      </section>
    </main>
  );
}
