import { useMemo, useState } from "react";
import type { Product } from "@/data/products";
import { SIZES } from "@/data/products";
import { ProductCard } from "./ProductCard";
import { Reveal } from "./Reveal";

export function ProductGrid({ items }: { items: Product[] }) {
  const [size, setSize] = useState<number | null>(null);
  const visible = useMemo(() => items, [items]);

  return (
    <section className="mx-auto max-w-[1500px] px-5 py-16 md:px-10 md:py-24">
      <div className="flex flex-wrap items-center justify-between gap-6 border-b border-hairline pb-6">
        <p className="eyebrow text-muted-foreground">{visible.length} pairs · UK 6–12</p>
        <div className="flex flex-wrap items-center gap-2">
          <span className="eyebrow mr-2 text-muted-foreground">Size</span>
          {SIZES.map((s) => (
            <button
              key={s}
              type="button"
              aria-pressed={size === s}
              onClick={() => setSize(size === s ? null : s)}
              className={`flex h-9 w-9 items-center justify-center border text-xs font-medium tabular-nums transition-colors ${
                size === s
                  ? "border-ink bg-ink text-bone"
                  : "border-hairline text-muted-foreground hover:border-ink hover:text-foreground"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {size ? (
        <p className="mt-6 text-sm text-muted-foreground">
          Every pair below is in stock in UK {size}.
        </p>
      ) : null}

      <div className="mt-12 grid grid-cols-2 gap-x-5 gap-y-14 md:grid-cols-3 md:gap-x-8 lg:grid-cols-4">
        {visible.map((p, i) => (
          <Reveal key={p.slug} delay={(i % 4) * 70}>
            <ProductCard product={p} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
