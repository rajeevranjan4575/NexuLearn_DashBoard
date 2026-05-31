# NexusLearn — Student Dashboard

A dark-mode learning dashboard built with Next.js App Router, Supabase, Tailwind CSS, and Framer Motion.

## Quick start

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Set up Supabase**

   - Create a free project at [supabase.com](https://supabase.com)
   - Open **SQL Editor** and run the contents of [`supabase/schema.sql`](./supabase/schema.sql)
   - Copy your project URL and anon key from **Settings → API**

3. **Configure environment**

   ```bash
   cp .env.local.example .env.local
   ```

   Fill in `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`.

4. **Run locally**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000).

## Architecture

| Layer | Details |
|---|---|
| Data | Server Components fetch courses via `@supabase/ssr` |
| Loading | `loading.tsx` + `<Suspense>` with pulsing skeletons |
| Errors | `error.tsx` boundary with retry |
| Animations | Framer Motion — staggered entrance, spring hovers, `layoutId` nav highlight |
| Layout | Semantic HTML (`nav`, `main`, `section`, `article`) |

## Responsive behavior

- **Desktop (>1024px):** Full sidebar + 6-column bento grid
- **Tablet (768–1024px):** Icon-only sidebar, 2-column grid
- **Mobile (<768px):** Bottom navigation, single-column stack

## Tech stack

Next.js · Supabase · Tailwind CSS · Framer Motion · Lucide React · TypeScript
