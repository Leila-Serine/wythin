import {
  BarChart3,
  CheckCircle2,
  Edit3,
  Flag,
  RefreshCcw,
  Sparkles,
  Sun,
  Timer,
  TrendingUp,
} from "lucide-react";

export const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Philosophy", href: "#philosophy" },
  { label: "Preview", href: "#preview" },
  { label: "Growth", href: "#growth" },
];

export const philosophyCards = [
  {
    title: "Clarity",
    label: "Direction",
    description:
      "Define what matters before the day begins. Less noise, more direction.",
    icon: Sun,
  },
  {
    title: "Discipline",
    label: "Consistency",
    description:
      "Build structure without pressure. Quiet systems for consistent progress.",
    icon: Sparkles,
  },
  {
    title: "Progress",
    label: "Momentum",
    description:
      "See the slow build. Small actions become visible transformation.",
    icon: TrendingUp,
  },
];

export const features = [
  {
    title: "Goals",
    subtitle: "Define your direction.",
    description:
      "Keep your long-term direction visible while moving through daily life.",
    icon: Flag,
    className: "md:col-span-2 md:row-span-2 bg-white",
    large: true,
  },
  {
    title: "Tasks",
    subtitle: "Turn intention into movement.",
    description: "Minimal task management designed for flow, not clutter.",
    icon: CheckCircle2,
    className: "md:col-span-2 bg-[var(--secondary-soft)]",
  },
  {
    title: "Habits",
    subtitle: "Build quiet discipline.",
    description:
      "Track repeated actions and build consistency through calm feedback.",
    icon: RefreshCcw,
    className: "md:col-span-2 bg-[var(--surface-soft)]",
  },
  {
    title: "Journal",
    subtitle: "Understand your patterns.",
    description: "Reflect without pressure.",
    icon: Edit3,
    className: "md:col-span-1 bg-[var(--surface-muted)]",
    compact: true,
  },
  {
    title: "Focus",
    subtitle: "Protect your attention.",
    description: "Enter deep work.",
    icon: Timer,
    className: "md:col-span-1 bg-[var(--secondary)] text-white",
    compact: true,
  },
  {
    title: "Analytics",
    subtitle: "See your growth clearly.",
    description:
      "Understand how your focus, habits and actions evolve over time.",
    icon: BarChart3,
    className: "md:col-span-2 bg-white",
  },
];