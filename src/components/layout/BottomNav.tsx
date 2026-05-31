"use client";

import { motion } from "framer-motion";
import { BarChart3, BookOpen, Home, Settings } from "lucide-react";
import { useState } from "react";
import { spring } from "@/lib/motion";

const navItems = [
  { id: "home", label: "Home", icon: Home },
  { id: "courses", label: "Courses", icon: BookOpen },
  { id: "progress", label: "Progress", icon: BarChart3 },
  { id: "settings", label: "Settings", icon: Settings },
] as const;

export function BottomNav() {
  const [active, setActive] = useState("home");

  return (
    <nav
      aria-label="Mobile navigation"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-border-subtle bg-bg-surface/95 backdrop-blur-md md:hidden"
    >
      <ul className="flex items-stretch justify-around px-2 py-2" role="list">
        {navItems.map(({ id, label, icon: Icon }) => {
          const isActive = active === id;
          return (
            <li key={id} className="flex-1">
              <button
                type="button"
                onClick={() => setActive(id)}
                aria-current={isActive ? "page" : undefined}
                aria-label={label}
                className="relative flex w-full flex-col items-center gap-1 rounded-xl px-2 py-2 text-text-muted"
              >
                {isActive && (
                  <motion.span
                    layoutId="mobile-active-pill"
                    className="absolute inset-1 rounded-xl bg-bg-elevated"
                    transition={spring}
                  />
                )}
                <Icon
                  className={`relative z-10 h-5 w-5 ${isActive ? "text-accent" : ""}`}
                  aria-hidden
                />
                <span
                  className={`relative z-10 text-[10px] ${isActive ? "text-text-primary" : ""}`}
                >
                  {label}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
