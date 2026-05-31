import type { Course } from "./types";
import { createClient } from "./server";

export async function fetchCourses(): Promise<Course[]> {
  if (
    !process.env.NEXT_PUBLIC_SUPABASE_URL ||
    !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  ) {
    throw new Error(
      "Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY in .env.local"
    );
  }

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  if (!url.startsWith("http://") && !url.startsWith("https://")) {
    throw new Error(
      "NEXT_PUBLIC_SUPABASE_URL must be your project URL (e.g. https://xxxxx.supabase.co), not an API key. Find it in Supabase → Settings → API → Project URL."
    );
  }

  const supabase = await createClient();

  const { data, error } = await supabase
    .from("courses")
    .select("*")
    .order("created_at", { ascending: true });

  if (error) {
    throw new Error(`Failed to load courses: ${error.message}`);
  }

  return data ?? [];
}
