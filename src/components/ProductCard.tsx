import { Link } from "@tanstack/react-router";
import type { Product } from "@/data/products";
import { ImageCarousel } from "./ImageCarousel";
import { SizeChips } from "./SizeChips";
import { Price } from "./Price";

export function ProductCard({ product, dark = false }: { product: Product; dark?: boolean }) {
  return (
    <Link
      to="/boots/$slug"
      params={{ slug: product.slug }}
      className="group block"
      aria-label={`${product.brand} ${product.name}`}
    >
      <div
        className={`relative aspect-[4/5] overflow-hidden transition-transform duration-500 ease-out group-hover:-translate-y-1 ${
          dark ? "bg-surface-darker" : "bg-white"
        }`}
      >
        <div className="absolute inset-0 scale-100 transition-transform duration-700 ease-out group-hover:scale-[1.05]">
          <ImageCarousel images={product.images} alt={`${product.brand} ${product.name}`} />
        </div>

        <span className="absolute top-0 left-0 bg-accent-hot px-2 py-1 text-[10px] font-semibold tracking-[0.18em] text-accent-hot-foreground">
          -36%
        </span>
        {product.limited ? (
          <span
            className={`absolute top-0 right-0 px-2 py-1 text-[10px] font-semibold tracking-[0.18em] ${
              dark ? "bg-bone text-ink" : "bg-ink text-bone"
            }`}
          >
            LIMITED
          </span>
        ) : null}

        <span
          className={`absolute inset-x-0 bottom-0 translate-y-full py-2.5 text-center text-[11px] font-semibold tracking-[0.2em] transition-transform duration-300 group-hover:translate-y-0 ${
            dark ? "bg-bone text-ink" : "bg-ink text-bone"
          }`}
        >
          VIEW
        </span>
      </div>

      <div className="pt-4">
        <p className="eyebrow text-muted-foreground">{product.brand}</p>
        <h3 className={`mt-1.5 text-sm font-semibold ${dark ? "text-bone" : "text-foreground"}`}>
          {product.name}
          {product.subtitle ? (
            <span className={dark ? "text-bone/50" : "text-muted-foreground"}> · {product.subtitle}</span>
          ) : null}
        </h3>
        <div className="mt-3">
          <SizeChips invert={dark} />
        </div>
        <div className="mt-3">
          <Price />
        </div>
      </div>
    </Link>
  );
}
