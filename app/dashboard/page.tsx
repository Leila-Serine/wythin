"use client";

import {
  BarChart3,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Flame,
  Heart,
  Home,
  ListTodo,
  Moon,
  Pin,
  Quote,
  RefreshCcw,
  Search,
  Settings,
  Sun,
  Target,
  Timer,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import { useState } from "react";
import BrandMark from "@/components/landing/BrandMark";

const sidebarItems = [
  { label: "Dashboard", icon: Home, active: true },
  { label: "Goals", icon: Target },
  { label: "Tasks", icon: ListTodo },
  { label: "Habits", icon: RefreshCcw },
  { label: "Focus", icon: Timer },
  { label: "Analytics", icon: BarChart3 },
  { label: "Settings", icon: Settings },
];

const tasks = [
  {
    title: "Refine Wythin dashboard layout",
    time: "Today",
    priority: "High",
  },
  {
    title: "Write project README structure",
    time: "Tomorrow",
    priority: "Medium",
  },
  {
    title: "Plan next app pages",
    time: "This week",
    priority: "Medium",
  },
];

const habits = [
  { label: "Code 2 hours", done: true },
  { label: "Morning reflection", done: true },
  { label: "Read 10 pages", done: false },
];

export default function DashboardPage() {
  const [isDark, setIsDark] = useState(false);

  const pageBackground = isDark
    ? "bg-[radial-gradient(circle_at_top_right,rgba(157,139,214,0.24),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(102,88,125,0.22),transparent_28%),linear-gradient(180deg,#0f0d13_0%,#15121c_100%)] text-[#F8F5F1]"
    : "bg-[radial-gradient(circle_at_top_right,rgba(229,210,254,0.30),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(205,193,226,0.22),transparent_26%),linear-gradient(180deg,#fcf8f8_0%,#f8f4fb_100%)] text-[var(--foreground)]";

  return (
    <main
      className={`min-h-screen transition-colors duration-500 ${pageBackground}`}
    >
      <div className="flex min-h-screen">
        <DashboardSidebar isDark={isDark} />

        <section className="flex-1 px-6 py-6 lg:px-10">
          <DashboardTopbar isDark={isDark} setIsDark={setIsDark} />

          <div className="mt-8 grid gap-6 lg:grid-cols-12">
            <div className="space-y-6 lg:col-span-8">
              <WelcomeCard isDark={isDark} />
              <TodayFocusCard isDark={isDark} />

              <div className="grid gap-6 md:grid-cols-2">
                <DailyProgressCard isDark={isDark} />
                <FocusSummaryCard isDark={isDark} />
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <TasksCard isDark={isDark} />
                <HabitsCard isDark={isDark} />
              </div>
            </div>

            <div className="space-y-6 lg:col-span-4">
              <QuoteCard isDark={isDark} />
              <WeeklyInsightCard isDark={isDark} />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

function DashboardSidebar({ isDark }: { isDark: boolean }) {
  return (
    <aside
      className={`hidden min-h-screen w-[280px] border-r px-5 py-6 backdrop-blur-xl transition-colors duration-500 lg:block ${
        isDark
          ? "border-white/10 bg-[#0c0b10]/70"
          : "border-[rgba(117,119,122,0.12)] bg-[linear-gradient(180deg,rgba(255,255,255,0.86)_0%,rgba(247,242,251,0.96)_100%)]"
      }`}
    >
      <div className="mb-10 flex items-center gap-3">
        <BrandMark size={42} rounded="rounded-full" />

        <div>
          <p className="font-display text-[28px] leading-none tracking-[-0.06em]">
            Wythin
          </p>

          <p
            className={
              isDark
                ? "mt-1 text-xs text-white/45"
                : "mt-1 text-xs text-[var(--text-muted)]"
            }
          >
            Growth workspace
          </p>
        </div>
      </div>

      <nav className="space-y-2">
        {sidebarItems.map((item) => {
          const Icon = item.icon;

          return (
            <a
              key={item.label}
              href="#"
              className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition ${
                item.active
                  ? isDark
                    ? "bg-[#9D8BD6]/20 text-[#E5D2FE] ring-1 ring-[#9D8BD6]/35"
                    : "bg-[var(--primary)] text-white shadow-lg shadow-black/10"
                  : isDark
                    ? "text-white/45 hover:bg-white/5 hover:text-white"
                    : "text-[var(--text-muted)] hover:bg-white/70 hover:text-[var(--foreground)]"
              }`}
            >
              <Icon size={18} />
              {item.label}

              {item.active && isDark && (
                <span className="ml-auto h-1.5 w-1.5 rounded-full bg-[#DCD5FF]" />
              )}
            </a>
          );
        })}
      </nav>

      <div
        className={`mt-10 rounded-3xl border p-5 shadow-[0_16px_40px_-30px_rgba(102,88,125,0.22)] ${
          isDark
            ? "border-white/10 bg-white/[0.035]"
            : "border-[var(--border-soft)] bg-[linear-gradient(180deg,rgba(255,255,255,0.88)_0%,rgba(244,237,251,0.96)_100%)]"
        }`}
      >
        <p
          className={`mb-2 text-xs font-semibold uppercase tracking-[0.18em] ${
            isDark ? "text-[#DCD5FF]" : "text-[var(--secondary)]"
          }`}
        >
          Streak
        </p>

        <div className="flex items-end gap-2">
          <span
            className={`text-3xl font-semibold ${
              isDark ? "text-[#C8A96A]" : ""
            }`}
          >
            12
          </span>

          <span
            className={
              isDark
                ? "pb-1 text-sm text-white/45"
                : "pb-1 text-sm text-[var(--text-muted)]"
            }
          >
            days
          </span>
        </div>

        {isDark && (
          <div className="mt-4 h-1.5 rounded-full bg-white/10">
            <div className="h-full w-[70%] rounded-full bg-[#C8A96A]" />
          </div>
        )}
      </div>
    </aside>
  );
}

function DashboardTopbar({
  isDark,
  setIsDark,
}: {
  isDark: boolean;
  setIsDark: (value: boolean) => void;
}) {
  return (
    <header className="flex items-center justify-between">
      <div>
        <p
          className={
            isDark
              ? "text-sm font-medium text-white/45"
              : "text-sm font-medium text-[var(--text-muted)]"
          }
        >
          Monday, July 19
        </p>

        <h1 className="font-display mt-2 text-[38px] leading-tight tracking-[-0.045em] sm:text-[46px] lg:text-[54px] xl:text-[60px]">
          Good morning, Leila.
        </h1>
      </div>

      <div className="hidden items-center gap-3 md:flex">
        <button
          type="button"
          className={`flex h-11 w-11 items-center justify-center rounded-full border shadow-sm transition ${
            isDark
              ? "border-white/10 bg-white/[0.04] text-white/60 hover:bg-white/[0.07]"
              : "border-[var(--border-soft)] bg-white/85 text-[var(--text-muted)] hover:bg-white"
          }`}
        >
          <Search size={18} />
        </button>

        <button
          type="button"
          onClick={() => setIsDark(!isDark)}
          className={`flex h-11 w-11 items-center justify-center rounded-full border shadow-sm transition ${
            isDark
              ? "border-white/10 bg-white/[0.04] text-[#C8A96A] hover:bg-white/[0.07]"
              : "border-[var(--border-soft)] bg-white/85 text-[var(--secondary)] hover:bg-white"
          }`}
          aria-label="Toggle theme"
        >
          {isDark ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        <button
          className={`rounded-2xl px-6 py-3 text-sm font-semibold shadow-lg transition hover:-translate-y-0.5 ${
            isDark
              ? "bg-[#9D8BD6] text-white shadow-[#9D8BD6]/25 hover:bg-[#8E7BCB]"
              : "bg-[var(--primary)] text-white shadow-black/10"
          }`}
        >
          Start Focus
        </button>
      </div>
    </header>
  );
}

function WelcomeCard({ isDark }: { isDark: boolean }) {
  return (
    <section
      className={`relative overflow-hidden rounded-[2rem] border p-8 shadow-[0_24px_70px_-34px_rgba(102,88,125,0.22)] transition-colors duration-500 md:p-10 ${
        isDark
          ? "border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.06)_0%,rgba(157,139,214,0.13)_100%)]"
          : "border-[rgba(117,119,122,0.12)] bg-[linear-gradient(135deg,rgba(255,255,255,0.92)_0%,rgba(246,240,252,0.98)_100%)]"
      }`}
    >
      <div
        className={`absolute right-0 top-0 h-72 w-72 rounded-full blur-3xl ${
          isDark ? "bg-[#9D8BD6]/22" : "bg-[var(--secondary-soft)]/45"
        }`}
      />

      <div
        className={`absolute -bottom-20 -left-20 h-56 w-56 rounded-full blur-3xl ${
          isDark ? "bg-[#4B425D]/24" : "bg-[var(--secondary-muted)]/20"
        }`}
      />

      <div className="relative z-10 max-w-2xl">
        <p
          className={`mb-4 text-sm font-semibold uppercase tracking-[0.22em] ${
            isDark ? "text-[#DCD5FF]" : "text-[var(--secondary)]"
          }`}
        >
          Today&apos;s Direction
        </p>

        <h2 className="font-display text-[38px] leading-tight tracking-[-0.04em] md:text-[52px]">
          Build with calm consistency.
        </h2>

        <p
          className={
            isDark
              ? "mt-5 max-w-xl text-lg leading-relaxed text-white/58"
              : "mt-5 max-w-xl text-lg leading-relaxed text-[var(--text-muted)]"
          }
        >
          Focus on one meaningful action today. Small progress still moves you
          forward.
        </p>
      </div>
    </section>
  );
}

function TodayFocusCard({ isDark }: { isDark: boolean }) {
  return (
    <section
      className={`rounded-[2rem] border p-7 shadow-[0_18px_60px_-36px_rgba(102,88,125,0.18)] ${
        isDark
          ? "border-white/10 bg-white/[0.035]"
          : "border-[rgba(117,119,122,0.12)] bg-[linear-gradient(180deg,rgba(255,255,255,0.72)_0%,rgba(245,239,252,0.92)_100%)]"
      }`}
    >
      <div className="mb-6 flex items-center justify-between gap-5">
        <div>
          <p
            className={`text-xs font-semibold uppercase tracking-[0.22em] ${
              isDark ? "text-[#8FBFA3]" : "text-[var(--secondary)]"
            }`}
          >
            Primary Focus
          </p>

          <h3 className="mt-2 text-2xl font-semibold">
            Design the first dashboard experience
          </h3>
        </div>

        <div
          className={`hidden rounded-full px-4 py-2 text-sm font-medium shadow-sm md:block ${
            isDark
              ? "bg-white/[0.06] text-white/65"
              : "bg-white/90 text-[var(--secondary)]"
          }`}
        >
          09:00 — 11:00
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <MiniMetric
          icon={Clock3}
          label="Focus time"
          value="2h planned"
          isDark={isDark}
        />

        <MiniMetric
          icon={Target}
          label="Linked goal"
          value="Build Wythin"
          isDark={isDark}
        />

        <MiniMetric
          icon={Flame}
          label="Energy"
          value="Deep work"
          isDark={isDark}
        />
      </div>
    </section>
  );
}

function MiniMetric({
  icon: Icon,
  label,
  value,
  isDark,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
  isDark: boolean;
}) {
  return (
    <div
      className={`rounded-3xl p-5 shadow-sm ${
        isDark ? "border border-white/10 bg-[#0f0d13]/60" : "bg-white/90"
      }`}
    >
      <Icon
        size={20}
        className={
          isDark
            ? "mb-4 text-[#DCD5FF]"
            : "mb-4 text-[var(--secondary)]"
        }
      />

      <p
        className={
          isDark
            ? "text-xs font-semibold uppercase tracking-[0.18em] text-white/40"
            : "text-xs font-semibold uppercase tracking-[0.18em] text-[var(--text-muted)]"
        }
      >
        {label}
      </p>

      <p className="mt-2 font-semibold">{value}</p>
    </div>
  );
}

function DailyProgressCard({ isDark }: { isDark: boolean }) {
  return (
    <section
      className={`rounded-[2rem] border p-6 shadow-[0_16px_50px_-30px_rgba(102,88,125,0.16)] ${
        isDark
          ? "border-white/10 bg-white/[0.035]"
          : "border-[rgba(117,119,122,0.12)] bg-[linear-gradient(180deg,rgba(255,255,255,0.90)_0%,rgba(247,242,251,0.98)_100%)]"
      }`}
    >
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-xl font-semibold">Daily Progress</h3>

        <TrendingUp
          size={20}
          className={isDark ? "text-[#DCD5FF]" : "text-[var(--secondary)]"}
        />
      </div>

      <div className="grid grid-cols-3 gap-3">
        <ProgressMiniBox
          value="3"
          label="tasks done"
          isDark={isDark}
          accent="sage"
        />

        <ProgressMiniBox
          value="2/3"
          label="habits"
          isDark={isDark}
          accent="mauve"
        />

        <ProgressMiniBox
          value="74%"
          label="progress"
          isDark={isDark}
          accent="champagne"
        />
      </div>

      <p
        className={
          isDark
            ? "mt-5 text-sm leading-relaxed text-white/55"
            : "mt-5 text-sm leading-relaxed text-[var(--text-muted)]"
        }
      >
        You are making steady progress today. Keep one clear priority in focus.
      </p>
    </section>
  );
}

function ProgressMiniBox({
  value,
  label,
  isDark,
  accent,
}: {
  value: string;
  label: string;
  isDark: boolean;
  accent: "sage" | "mauve" | "champagne";
}) {
  const accentColor = {
    sage: "#8FBFA3",
    mauve: "#E5D2FE",
    champagne: "#C8A96A",
  }[accent];

  return (
    <div
      className={
        isDark
          ? "rounded-2xl border border-white/10 bg-[#0f0d13]/60 p-4"
          : "rounded-2xl bg-white/80 p-4"
      }
    >
      <p
        className={
          isDark
            ? "text-2xl font-semibold"
            : "text-2xl font-semibold text-[var(--secondary)]"
        }
        style={isDark ? { color: accentColor } : undefined}
      >
        {value}
      </p>

      <p
        className={
          isDark
            ? "mt-1 text-xs text-white/42"
            : "mt-1 text-xs text-[var(--text-muted)]"
        }
      >
        {label}
      </p>
    </div>
  );
}

function FocusSummaryCard({ isDark }: { isDark: boolean }) {
  return (
    <section
      className={`rounded-[2rem] border p-7 shadow-[0_16px_50px_-30px_rgba(102,88,125,0.16)] ${
        isDark
          ? "border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.045),rgba(157,139,214,0.10))]"
          : "border-[rgba(117,119,122,0.12)] bg-[linear-gradient(180deg,rgba(255,255,255,0.90)_0%,rgba(247,242,251,0.98)_100%)]"
      }`}
    >
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-xl font-semibold">Focus Summary</h3>

        <CalendarDays
          size={20}
          className={isDark ? "text-[#DCD5FF]" : "text-[var(--secondary)]"}
        />
      </div>

      <div className="flex items-center justify-between">
        <div>
          <p
            className={
              isDark
                ? "font-display text-[48px] leading-none text-[#E5D2FE]"
                : "font-display text-[48px] leading-none"
            }
          >
            4h
          </p>

          <p
            className={
              isDark
                ? "mt-2 text-sm text-white/45"
                : "mt-2 text-sm text-[var(--text-muted)]"
            }
          >
            focused today
          </p>
        </div>

        <div
          className={`flex h-24 w-24 items-center justify-center rounded-full shadow-[0_16px_40px_-24px_rgba(102,88,125,0.35)] ${
            isDark
              ? "bg-[#9D8BD6]/16 ring-1 ring-[#DCD5FF]/20"
              : "bg-[var(--secondary-soft)]"
          }`}
        >
          <Timer
            size={32}
            className={isDark ? "text-[#DCD5FF]" : "text-[var(--secondary)]"}
          />
        </div>
      </div>
    </section>
  );
}

function TasksCard({ isDark }: { isDark: boolean }) {
  return (
    <section
      className={`rounded-[2rem] border p-6 shadow-[0_14px_45px_-34px_rgba(102,88,125,0.14)] ${
        isDark
          ? "border-white/10 bg-white/[0.035]"
          : "border-[var(--border-soft)] bg-white/88"
      }`}
    >
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-xl font-semibold">Priority Tasks</h3>

        <ListTodo
          size={20}
          className={isDark ? "text-[#DCD5FF]" : "text-[var(--secondary)]"}
        />
      </div>

      <div className="space-y-4">
        {tasks.map((task) => (
          <div
            key={task.title}
            className={
              isDark
                ? "rounded-2xl border border-white/10 bg-[#0f0d13]/60 p-4"
                : "rounded-2xl bg-[var(--surface-soft)]/80 p-4"
            }
          >
            <div className="flex items-start gap-3">
              <div
                className={`mt-1 h-4 w-4 rounded-full border ${
                  isDark
                    ? "border-[#DCD5FF]"
                    : "border-[var(--secondary)] bg-white"
                }`}
              />

              <div className="flex-1">
                <p className="font-medium">{task.title}</p>

                <div
                  className={
                    isDark
                      ? "mt-2 flex items-center gap-2 text-xs text-white/42"
                      : "mt-2 flex items-center gap-2 text-xs text-[var(--text-muted)]"
                  }
                >
                  <span>{task.time}</span>
                  <span>•</span>
                  <span>{task.priority}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function HabitsCard({ isDark }: { isDark: boolean }) {
  return (
    <section
      className={`rounded-[2rem] border p-6 shadow-[0_14px_45px_-34px_rgba(102,88,125,0.14)] ${
        isDark
          ? "border-white/10 bg-white/[0.035]"
          : "border-[var(--border-soft)] bg-white/88"
      }`}
    >
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-xl font-semibold">Today&apos;s Habits</h3>

        <RefreshCcw
          size={20}
          className={isDark ? "text-[#DCD5FF]" : "text-[var(--secondary)]"}
        />
      </div>

      <div className="space-y-4">
        {habits.map((habit) => (
          <div
            key={habit.label}
            className={
              isDark
                ? "flex items-center justify-between rounded-2xl border border-white/10 bg-[#0f0d13]/60 p-4"
                : "flex items-center justify-between rounded-2xl bg-[var(--surface-soft)]/80 p-4"
            }
          >
            <span className="font-medium">{habit.label}</span>

            <div
              className={`flex h-7 w-7 items-center justify-center rounded-full ${
                habit.done
                  ? isDark
                    ? "bg-[#8FBFA3] text-[#0f0d13]"
                    : "bg-[var(--secondary)] text-white"
                  : isDark
                    ? "border border-white/10 bg-white/[0.03]"
                    : "border border-[var(--border-soft)] bg-white"
              }`}
            >
              {habit.done && <CheckCircle2 size={16} />}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function QuoteCard({ isDark }: { isDark: boolean }) {
  return (
    <section
      className={`rounded-[2rem] border p-7 text-white shadow-[0_20px_60px_-30px_rgba(102,88,125,0.42)] ${
        isDark
          ? "border-white/10 bg-[linear-gradient(145deg,rgba(157,139,214,0.20)_0%,rgba(22,18,30,0.94)_100%)]"
          : "border-[rgba(117,119,122,0.12)] bg-[linear-gradient(145deg,var(--secondary)_0%,var(--violet-deep)_100%)]"
      }`}
    >
      <Quote size={24} className="mb-8 text-white/60" />

      <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-white/55">
        Quote of the Day
      </p>

      <p className="font-display text-[30px] leading-tight">
        “Small steps still move you forward.”
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <button className="flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-xs font-medium text-white transition hover:bg-white/25">
          <Heart size={14} />
          Like
        </button>

        <button className="flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-xs font-medium text-white transition hover:bg-white/25">
          <Pin size={14} />
          Pin
        </button>

        <button className="flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-xs font-medium text-white transition hover:bg-white/25">
          <RefreshCcw size={14} />
          New quote
        </button>
      </div>
    </section>
  );
}

function WeeklyInsightCard({ isDark }: { isDark: boolean }) {
  return (
    <section
      className={`rounded-[2rem] border p-7 shadow-[0_16px_50px_-30px_rgba(102,88,125,0.16)] ${
        isDark
          ? "border-white/10 bg-white/[0.035]"
          : "border-[rgba(117,119,122,0.12)] bg-[linear-gradient(180deg,rgba(255,255,255,0.90)_0%,rgba(247,242,251,0.98)_100%)]"
      }`}
    >
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-xl font-semibold">Weekly Insight</h3>

        <BarChart3
          size={20}
          className={isDark ? "text-[#DCD5FF]" : "text-[var(--secondary)]"}
        />
      </div>

      <div className="flex items-end gap-2">
        {[45, 62, 38, 74, 58, 82, 70].map((height, index) => (
          <div
            key={index}
            className={
              isDark
                ? "flex flex-1 items-end rounded-full bg-white/8"
                : "flex flex-1 items-end rounded-full bg-white/80"
            }
            style={{ height: "110px" }}
          >
            <div
              className={
                isDark
                  ? "w-full rounded-full bg-[#9D8BD6]"
                  : "w-full rounded-full bg-[var(--secondary)]/70"
              }
              style={{ height: `${height}%` }}
            />
          </div>
        ))}
      </div>

      <p
        className={
          isDark
            ? "mt-5 text-sm leading-relaxed text-white/55"
            : "mt-5 text-sm leading-relaxed text-[var(--text-muted)]"
        }
      >
        Your strongest focus days are usually in the middle of the week. Plan
        deep work sessions around that rhythm.
      </p>
    </section>
  );
}