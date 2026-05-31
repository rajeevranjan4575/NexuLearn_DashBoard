"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { BottomNav } from "@/components/layout/BottomNav";
import { Sidebar } from "@/components/layout/Sidebar";
import { staggerContainer } from "@/lib/motion";

interface DashboardShellProps {
  children: ReactNode;
}

export function DashboardShell({ children }: DashboardShellProps) {
  return (
    <div className="flex min-h-screen bg-bg-base">
      <Sidebar />

      <div className="flex min-h-screen flex-1 flex-col">
        <motion.main
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="flex-1 overflow-y-auto px-4 py-6 pb-24 md:px-6 md:py-8 md:pb-8 lg:px-8"
        >
          {children}
        </motion.main>
      </div>

      <BottomNav />
    </div>
  );
}
