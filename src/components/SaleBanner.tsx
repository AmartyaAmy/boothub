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
        <span className="font-display text-[11px] font-extrabold uppercase tracking-[0.18em] md:text-xs">
          Sale live — flat{" "}
          <span className="rounded-sm bg-accent-hot-foreground px-1 py-0.5 text-accent-hot">
            ₹6,999
          </span>
        </span>
        <span className="rounded-sm bg-accent-hot-foreground px-1.5 py-0.5 text-[10px] font-extrabold uppercase tracking-widest text-accent-hot md:text-[11px]">
          Ends soon
        </span>
      </div>
    </Link>
  );
}