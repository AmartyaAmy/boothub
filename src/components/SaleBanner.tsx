import { Link } from "@tanstack/react-router";

export function SaleBanner() {
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
          Sale live — flat ₹6,999 <span className="opacity-60 line-through">XXXXX</span>
          <span className="hidden md:inline"> · save 36% on every pair</span>
        </span>
        <span className="eyebrow text-[10px] md:text-[11px]">Ends: soon</span>
      </div>
    </Link>
  );
}