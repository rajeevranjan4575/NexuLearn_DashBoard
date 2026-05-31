-- Run this in your Supabase SQL Editor (Dashboard → SQL → New query)

create table if not exists public.courses (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  progress integer not null check (progress >= 0 and progress <= 100),
  icon_name text not null,
  created_at timestamptz not null default now()
);

alter table public.courses enable row level security;

create policy "Allow public read access"
  on public.courses
  for select
  to anon, authenticated
  using (true);

insert into public.courses (title, progress, icon_name) values
  ('Advanced React Patterns', 75, 'Layers'),
  ('Systems Design Fundamentals', 42, 'Cpu'),
  ('Machine Learning Basics', 18, 'Brain'),
  ('Web Security Essentials', 91, 'Shield');
