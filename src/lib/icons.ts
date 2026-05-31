import {
  Atom,
  BookOpen,
  Brain,
  Code2,
  Cpu,
  Database,
  FlaskConical,
  Globe,
  Layers,
  LineChart,
  Palette,
  Rocket,
  Shield,
  Sparkles,
  Terminal,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Atom,
  BookOpen,
  Brain,
  Code2,
  Cpu,
  Database,
  FlaskConical,
  Globe,
  Layers,
  LineChart,
  Palette,
  Rocket,
  Shield,
  Sparkles,
  Terminal,
};

export function resolveIcon(name: string): LucideIcon {
  return iconMap[name] ?? BookOpen;
}
