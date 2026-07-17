"use client";

import { useEffect, useState } from "react";

export default function ViewCounter() {
  const [count, setCount] = useState<number | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let mounted = true;

    fetch("https://api.counterapi.dev/v1/zyryansk-mapp-2026/views/up")
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data) => {
        if (mounted) setCount(data.count ?? 0);
      })
      .catch((err) => {
        console.warn("Counter unavailable:", err.message);
        if (mounted) setError(true);
      });

    return () => {
      mounted = false;
    };
  }, []);

  if (error || count === null) {
    return (
      <div className="flex items-center gap-2 px-3 py-2 border border-dashed border-[#8b5a2b]/30 rounded bg-[#f4e4bc]/50">
        <span className="text-[10px] uppercase tracking-widest text-[#8b5a2b]/50 font-serif">
   
        </span>
      </div>
    );
  }

  return (
    <div className="group relative flex items-center gap-3 px-4 py-2.5 bg-[#ebe0c2]/60 border border-[#8b5a2b]/50 rounded-sm shadow-sm hover:bg-[#e6d9b8] transition-colors duration-300">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-6 bg-[#8b5a2b]/40 group-hover:bg-[#5c3a1e] transition-colors" />

      {/* Иконка глаза */}
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

      {/* Текст и цифра */}
      <div className="flex flex-col leading-none">
        <span className="font-mono text-[20px] text-[#3e2723] tabular-nums tracking-tight">
          {count.toLocaleString("ru-RU")} просмотров
        </span>
      </div>

      {/* Точка справа */}
      <div className="ml-auto w-1.5 h-1.5 rounded-full bg-[#8b5a2b]/30 group-hover:bg-[#5c3a1e] transition-colors" />
    </div>
  );
}