import { MRP, PRICE } from "@/data/products";

const fmt = (n: number) => `₹${n.toLocaleString("en-IN")}`;

export function Price({ large = false }: { large?: boolean }) {
  return (
    <div className="flex items-baseline gap-2.5">
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
    </div>
  );
}
