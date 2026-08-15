"use client";

import { useEffect, useState } from "react";
import { Counter } from "counterapi";

export default function ViewCounter() {
  const [count, setCount] = useState<number | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let mounted = true;

    const updateCounter = async () => {
      try {
        const counter = new Counter({
          workspace: "crashsystems-team-5092",
          accessToken: process.env.NEXT_PUBLIC_COUNTER_API_TOKEN,
          debug: false,
          timeout: 5000,
        });

        const result = await counter.up("first-counter-5092");
        
        // Типизация: у result есть поле data, внутри которого value
        if (mounted && result?.data?.value !== undefined) {
          setCount(result.data.value + 600);
        }
      } catch (err) {
        // Без 'any' — используем unknown и проверяем
        const message = err instanceof Error ? err.message : "Unknown error";
        console.warn("Counter error:", message);
        if (mounted) setError(true);
      }
    };

    updateCounter();

    return () => {
      mounted = false;
    };
  }, []);

  if (error || count === null) {
    return (
      <div className="flex items-center gap-2 px-3 py-2 border border-dashed border-[#8b5a2b]/30 rounded bg-[#f4e4bc]/50">
        <span className="text-[10px] uppercase tracking-widest text-[#8b5a2b]/50 font-serif">
          {/* Пусто */}
        </span>
      </div>
    );
  }

  return (
    <div className="group relative flex items-center gap-3 px-4 py-2.5 bg-[#ebe0c2]/60 border border-[#8b5a2b]/50 rounded-sm shadow-sm hover:bg-[#e6d9b8] transition-colors duration-300">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-6 bg-[#8b5a2b]/40 group-hover:bg-[#5c3a1e] transition-colors" />

      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-[#5c3a1e] opacity-80 group-hover:opacity-100 transition-opacity shrink-0"
      >
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
        <circle cx="12" cy="12" r="3" />
      </svg>

      <div className="flex flex-col leading-none">
        <span className="font-mono text-[20px] text-[#3e2723] tabular-nums tracking-tight">
          {count.toLocaleString("ru-RU")} просмотров
        </span>
      </div>

      <div className="ml-auto w-1.5 h-1.5 rounded-full bg-[#8b5a2b]/30 group-hover:bg-[#5c3a1e] transition-colors" />
    </div>
  );
}