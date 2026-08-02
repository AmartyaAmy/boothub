import { MRP, PRICE } from "@/data/products";

const fmt = (n: number) => `₹${n.toLocaleString("en-IN")}`;

export function Price({ large = false }: { large?: boolean }) {
  return (
    <div className="flex flex-wrap items-baseline gap-x-2.5 gap-y-1.5">
      <span
        className={`${large ? "text-3xl" : "text-base"} font-semibold text-accent-hot tabular-nums`}
      >
        {fmt(PRICE)}
      </span>
      <span
        className={`${large ? "text-base" : "text-xs"} text-muted-foreground line-through tabular-nums`}
      >
        {fmt(MRP)}
      </span>
      <span
        className={`eyebrow rounded-sm bg-accent-hot/10 px-1.5 py-0.5 text-accent-hot ${
          large ? "text-[10px]" : "text-[9px]"
        }`}
      >
        Sale · 36% off
      </span>
    </div>
  );
}
