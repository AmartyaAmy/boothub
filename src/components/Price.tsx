import { PRICE } from "@/data/products";

const fmt = (n: number) => `₹${n.toLocaleString("en-IN")}`;

export function Price({ large = false }: { large?: boolean }) {
  return (
    <div className="flex flex-wrap items-baseline gap-x-2.5 gap-y-1.5">
      <span
        className={`${large ? "text-3xl" : "text-lg"} font-bold text-accent-hot tabular-nums tracking-tight`}
      >
        {fmt(PRICE)}
      </span>
      <span
        className={`rounded-sm bg-accent-hot px-1.5 py-0.5 font-display font-extrabold uppercase tracking-widest text-accent-hot-foreground shadow-sm ${
          large ? "text-[11px]" : "text-[10px]"
        }`}
      >
        SALE
      </span>
    </div>
  );
}
