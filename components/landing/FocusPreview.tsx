"use client";

import { Check, Pause, Play, RefreshCcw } from "lucide-react";
import { useEffect, useState } from "react";

const INITIAL_TIME = 25 * 60;

function formatTime(seconds: number) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
}

export default function FocusPreview() {
  const [timeLeft, setTimeLeft] = useState(INITIAL_TIME);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setTimeLeft((previousTime) => {
        if (previousTime <= 1) {
          return INITIAL_TIME;
        }

        return previousTime - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning]);

  function handleReset() {
    setTimeLeft(INITIAL_TIME);
    setIsRunning(true);
  }

  function handlePausePlay() {
    setIsRunning((currentValue) => !currentValue);
  }

  return (
    <section
      id="preview"
      className="overflow-hidden bg-[var(--background)] py-20 md:py-[120px]"
    >
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-14 px-6 md:gap-20 lg:flex-row lg:gap-[100px]">
        <div className="w-full flex-1">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-[var(--secondary)]">
            The Focus State
          </p>

          <h2 className="font-display mb-8 text-[42px] font-medium leading-tight tracking-[-0.04em] md:text-[64px]">
            Protect your attention.
          </h2>

          <p className="mb-10 text-lg leading-relaxed text-[var(--text-muted)] md:text-xl">
            A focused environment designed to reduce noise, protect attention,
            and help you enter deep work with calm structure.
          </p>

          <ul className="space-y-5 md:space-y-6">
            {[
              "Pomodoro, Deep Work, Chronometer and Countdown modes",
              "Soft focus states for intentional sessions",
              "Progress saved automatically after each session",
            ].map((item) => (
              <li key={item} className="flex items-start gap-4">
                <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--secondary-soft)] text-[var(--secondary)]">
                  <Check size={14} />
                </div>

                <span className="font-medium leading-relaxed text-[var(--foreground)]">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full flex-1">
          <div className="soft-glow premium-border relative mx-auto flex aspect-square w-full max-w-[300px] items-center justify-center rounded-[38px] bg-[var(--surface-soft)] p-5 transition hover:shadow-2xl sm:max-w-[360px] sm:p-7 md:max-w-xl md:rounded-[80px] md:p-12">
            <div className="absolute inset-6 animate-pulse rounded-[30px] border-2 border-[var(--secondary)]/10 sm:inset-8 sm:rounded-[42px] md:inset-12 md:rounded-[60px]" />

            <div className="absolute inset-12 rounded-full bg-[var(--secondary-soft)]/50 blur-3xl sm:inset-16 md:inset-24" />

            <div className="relative z-10 text-center">
              <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--text-muted)] opacity-60 sm:text-xs md:mb-8">
                {isRunning ? "Focusing · Strategy" : "Paused · Strategy"}
              </p>

              <span className="font-display text-[50px] leading-none tracking-[-0.06em] text-[var(--primary)] sm:text-[64px] md:text-[112px]">
                {formatTime(timeLeft)}
              </span>

              <div className="mt-8 flex justify-center gap-5 md:mt-16 md:gap-8">
                <button
                  type="button"
                  onClick={handlePausePlay}
                  aria-label={isRunning ? "Pause timer" : "Start timer"}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border-soft)] bg-white/40 text-[var(--foreground)] backdrop-blur transition hover:bg-white md:h-16 md:w-16"
                >
                  {isRunning ? <Pause size={22} /> : <Play size={22} />}
                </button>

                <button
                  type="button"
                  onClick={handleReset}
                  aria-label="Reset timer"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--secondary)] text-white transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[var(--secondary)]/20 md:h-16 md:w-16"
                >
                  <RefreshCcw size={22} />
                </button>
              </div>

              <p className="mt-6 text-[10px] font-medium uppercase tracking-[0.16em] text-[var(--text-muted)]/60 sm:text-xs md:mt-8">
                Live focus session
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}