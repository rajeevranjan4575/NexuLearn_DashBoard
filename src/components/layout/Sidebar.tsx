"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  BookOpen,
  ChevronLeft,
  GraduationCap,
  Home,
  Settings,
} from "lucide-react";
import { useEffect, useState } from "react";
import { spring } from "@/lib/motion";

const navItems = [
  { id: "home", label: "Dashboard", icon: Home },
  { id: "courses", label: "Courses", icon: BookOpen },
  { id: "progress", label: "Progress", icon: BarChart3 },
  { id: "settings", label: "Settings", icon: Settings },
] as const;

interface SidebarProps {
  activeId?: string;
  onNavigate?: (id: string) => void;
}

export function Sidebar({ activeId = "home", onNavigate }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);
  const [active, setActive] = useState(activeId);

  useEffect(() => {
    const tablet = window.matchMedia("(min-width: 768px) and (max-width: 1023px)");
    const sync = () => setCollapsed(tablet.matches);
    sync();
    tablet.addEventListener("change", sync);
    return () => tablet.removeEventListener("change", sync);
  }, []);

  function handleNav(id: string) {
    setActive(id);
    onNavigate?.(id);
  }

  return (
    <motion.nav
      aria-label="Main navigation"
      animate={{ width: collapsed ? 72 : 220 }}
      transition={spring}
      className="relative hidden shrink-0 flex-col border-r border-border-subtle bg-bg-surface md:flex"
    >
      <header className="flex h-16 items-center gap-3 border-b border-border-subtle px-4">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-accent-dim">
          <GraduationCap className="h-[18px] w-[18px] text-accent" aria-hidden />
        </span>
        {!collapsed && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-display text-sm font-semibold tracking-tight text-text-primary"
          >
            NexusLearn
          </motion.span>
        )}
      </header>

      <ul className="flex flex-1 flex-col gap-1 p-3" role="list">
        {navItems.map(({ id, label, icon: Icon }) => {
          const isActive = active === id;
          return (
            <li key={id}>
              <button
                type="button"
                onClick={() => handleNav(id)}
                aria-current={isActive ? "page" : undefined}
                className="relative flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-text-secondary transition-colors hover:text-text-primary"
              >
                {isActive && (
                  <motion.span
                    layoutId="sidebar-active-pill"
                    className="absolute inset-0 rounded-xl bg-bg-elevated"
                    transition={spring}
                  />
                )}
                <Icon className="relative z-10 h-[18px] w-[18px] shrink-0" aria-hidden />
                {!collapsed && (
                  <span className="relative z-10 truncate">{label}</span>
                )}
              </button>
            </li>
          );
        })}
      </ul>

      <footer className="border-t border-border-subtle p-3">
        <button
          type="button"
          onClick={() => setCollapsed((c) => !c)}
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          className="flex w-full items-center justify-center rounded-xl px-3 py-2.5 text-text-muted transition-colors hover:bg-bg-elevated hover:text-text-primary"
        >
          <motion.span
            animate={{ rotate: collapsed ? 180 : 0 }}
            transition={spring}
          >
            <ChevronLeft className="h-[18px] w-[18px]" aria-hidden />
          </motion.span>
        </button>
      </footer>
    </motion.nav>
  );
}
