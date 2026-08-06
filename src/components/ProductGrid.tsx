import { useMemo, useState } from "react";
import type { Brand, Ground, Product, Section } from "@/data/products";
import { BRANDS, GROUNDS_BY_SECTION, GROUND_LABELS, SECTIONS, SIZES } from "@/data/products";
import { ProductCard } from "./ProductCard";
import { Reveal } from "./Reveal";

const tab =
  "border px-4 py-2 text-[11px] font-semibold tracking-[0.18em] uppercase transition-colors";
const tabOn = "border-ink bg-ink text-bone";
const tabOff = "border-hairline text-muted-foreground hover:border-ink hover:text-foreground";

export function ProductGrid({
  items,
  showFilters = true,
  lockBrand,
}: {
  items: Product[];
  showFilters?: boolean;
  lockBrand?: Brand;
}) {
  const [size, setSize] = useState<number | null>(null);
  const [brand, setBrand] = useState<Brand | null>(lockBrand ?? null);
  const [section, setSection] = useState<Section | null>(null);
  const [ground, setGround] = useState<Ground | null>(null);

  const grounds = section ? GROUNDS_BY_SECTION[section] : (["FG", "AG", "SG", "TF"] as Ground[]);

  const visible = useMemo(
    () =>
      items.filter(
        (p) =>
          (!brand || p.brand === brand) &&
          (!section || p.section === section) &&
          (!ground || p.ground === ground),
      ),
    [items, brand, section, ground],
  );

  return (
    <section className="mx-auto max-w-[1500px] px-5 py-16 md:px-10 md:py-24">
      {showFilters ? (
        <div className="mb-10 space-y-5 border-b border-hairline pb-8">
          {!lockBrand ? (
            <div className="flex flex-wrap items-center gap-2">
              <span className="eyebrow mr-2 w-16 text-muted-foreground">Brand</span>
              <button
                type="button"
                onClick={() => setBrand(null)}
                className={`${tab} ${brand === null ? tabOn : tabOff}`}
              >
                All
              </button>
              {BRANDS.map((b) => (
                <button
                  key={b}
                  type="button"
                  onClick={() => setBrand(b)}
                  className={`${tab} ${brand === b ? tabOn : tabOff}`}
                >
                  {b}
                </button>
              ))}
            </div>
          ) : null}

          <div className="flex flex-wrap items-center gap-2">
            <span className="eyebrow mr-2 w-16 text-muted-foreground">Type</span>
            <button
              type="button"
              onClick={() => {
                setSection(null);
                setGround(null);
              }}
              className={`${tab} ${section === null ? tabOn : tabOff}`}
            >
              All
            </button>
            {SECTIONS.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => {
                  setSection(s);
                  setGround(null);
                }}
                className={`${tab} ${section === s ? tabOn : tabOff}`}
              >
                {s}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="eyebrow mr-2 w-16 text-muted-foreground">Ground</span>
            <button
              type="button"
              onClick={() => setGround(null)}
              className={`${tab} ${ground === null ? tabOn : tabOff}`}
            >
              All
            </button>
            {grounds.map((g) => (
              <button
                key={g}
                type="button"
                title={GROUND_LABELS[g]}
                onClick={() => setGround(g)}
                className={`${tab} ${ground === g ? tabOn : tabOff}`}
              >
                {g}
              </button>
            ))}
          </div>
        </div>
      ) : null}

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

      {visible.length === 0 ? (
        <p className="mt-16 text-center text-sm text-muted-foreground">
          No pairs in this category yet — new stock drops weekly. DM us for requests.
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
