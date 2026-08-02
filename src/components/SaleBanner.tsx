import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";

function useCountdown() {
  const [left, setLeft] = useState<string | null>(null);
  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const end = new Date(now);
      end.setHours(23, 59, 59, 999);
      const diff = Math.max(0, end.getTime() - now.getTime());
      const h = Math.floor(diff / 3.6e6);
      const m = Math.floor((diff % 3.6e6) / 6e4);
      const s = Math.floor((diff % 6e4) / 1000);
      const pad = (n: number) => String(n).padStart(2, "0");
      setLeft(`${pad(h)}:${pad(m)}:${pad(s)}`);
    };
    tick();
    const t = window.setInterval(tick, 1000);
    return () => window.clearInterval(t);
  }, []);
  return left;
}

export function SaleBanner() {
  const left = useCountdown();
  return (
    <Link
      to="/shop"
      className="block bg-accent-hot text-accent-hot-foreground"
      aria-label="Shop the sale"
    >
      <div className="mx-auto flex max-w-[1500px] items-center justify-center gap-3 px-5 py-2 md:px-10">
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-current opacity-70" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-current" />
        </span>
        <span className="eyebrow text-[10px] md:text-[11px]">
          Sale live — flat ₹6,999 <span className="opacity-60 line-through">₹10,999</span>
          <span className="hidden md:inline"> · save 36% on every pair</span>
        </span>
        {left ? (
          <span className="eyebrow text-[10px] tabular-nums md:text-[11px]">Ends in {left}</span>
        ) : null}
      </div>
    </Link>
  );
}