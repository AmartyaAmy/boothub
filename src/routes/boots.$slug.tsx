import { useState } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { ImageCarousel } from "@/components/ImageCarousel";
import { SizeChips } from "@/components/SizeChips";
import { Price } from "@/components/Price";
import { ProductCard } from "@/components/ProductCard";
import { Reveal } from "@/components/Reveal";
import { IconCash, IconIndia, IconReturn, IconShip } from "@/components/Icons";
import { INSTAGRAM_URL, getModel, models } from "@/data/products";

export const Route = createFileRoute("/boots/$slug")({
  loader: ({ params }) => {
    const model = getModel(params.slug);
    if (!model) throw notFound();
    return model;
  },
  head: ({ loaderData }) => {
    const title = loaderData ? `${loaderData.brand} ${loaderData.name}` : "Football Boots";
    const desc = `${title} at a flat ₹6,999 (MRP ₹10,999). UK 6-12, cash on delivery, free pan-India shipping, 7-day exchange.`;
    return {
      meta: [
        { title: `${title} | BootHub` },
        { name: "description", content: desc },
        { property: "og:title", content: `${title} — BootHub` },
        { property: "og:description", content: desc },
        { property: "og:type", content: "product" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ProductPage,
});

const specs = [
  ["Surface", "Firm ground (FG) — natural and hybrid pitches"],
  ["Upper", "Engineered synthetic skin with textured strike zone"],
  ["Fit", "Low-profile lockdown, true to size"],
  ["Soleplate", "Sprint-tuned stud pattern for quick release"],
  ["Weight", "Approx. 205g (UK 8)"],
];

const trust = [
  { Icon: IconCash, label: "Cash on delivery" },
  { Icon: IconReturn, label: "7-day exchange" },
  { Icon: IconShip, label: "Free shipping" },
  { Icon: IconIndia, label: "Pan-India" },
];

function ProductPage() {
  const model = Route.useLoaderData();
  const [variantIndex, setVariantIndex] = useState(0);
  const variant = model.variants[variantIndex] ?? model.variants[0]!;

  // index of the selected variant's first photo inside the combined gallery
  const jumpTo = model.variants
    .slice(0, variantIndex)
    .reduce((acc: number, v: { images: string[] }) => acc + v.images.length, 0);

  const related = models
    .filter((m) => m.slug !== model.slug && m.brand === model.brand && m.limited === model.limited)
    .slice(0, 4);

  return (
    <SiteLayout>
      <section className="dark-section pt-24 md:pt-28">
        <div className="mx-auto max-w-[1500px] px-5 pb-16 md:px-10 md:pb-24">
          <div className="group relative mx-auto aspect-square w-full max-w-[900px] bg-surface-darker md:aspect-[16/10]">
            <ImageCarousel
              images={model.images}
              alt={`${model.brand} ${model.name}`}
              eager
              startIndex={jumpTo}
            />
            <span className="absolute top-0 left-0 bg-accent-hot px-3 py-1.5 text-[11px] font-extrabold tracking-[0.16em] text-accent-hot-foreground shadow-[0_6px_16px_-4px_rgba(226,35,26,0.45)]">
              SALE
            </span>
            {model.limited ? (
              <span className="absolute top-0 right-0 bg-bone px-3 py-1.5 text-[10px] font-semibold tracking-[0.2em] text-ink">
                LIMITED
              </span>
            ) : null}
          </div>

          <div className="mt-12 grid gap-10 md:grid-cols-[1.1fr_1fr] md:gap-16">
            <div>
              <p className="eyebrow text-accent-hot">
                {model.brand}
                {model.limited ? " · Limited edition" : ""}
              </p>
              <h1 className="display mt-5 text-[11vw] text-bone md:text-[3.6rem]">{model.name}</h1>
              {variant.subtitle ? (
                <p className="mt-3 text-base text-bone/50">{variant.subtitle}</p>
              ) : null}

              {model.variants.length > 1 ? (
                <div className="mt-8">
                  <p className="eyebrow text-bone/45">
                    Colour / design — {model.variants.length} available
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {model.variants.map((v, i) => (
                      <button
                        key={v.slug}
                        type="button"
                        aria-pressed={i === variantIndex}
                        onClick={() => setVariantIndex(i)}
                        title={v.subtitle || v.name}
                        className={`h-16 w-16 overflow-hidden rounded-sm border transition-colors ${
                          i === variantIndex
                            ? "border-accent-hot"
                            : "border-hairline-invert hover:border-bone/60"
                        }`}
                      >
                        <img
                          src={v.images[0]}
                          alt={v.subtitle || v.name}
                          loading="lazy"
                          decoding="async"
                          className="h-full w-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              ) : null}

              <div className="mt-8 [&_span]:text-bone/45">
                <Price large />
              </div>

              <div className="mt-10">
                <p className="eyebrow text-bone/45">Select UK size</p>
                <div className="mt-4">
                  <SizeChips invert size="lg" />
                </div>
              </div>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 rounded-full bg-bone px-8 py-4 text-center text-[11px] font-semibold tracking-[0.22em] text-ink transition-colors hover:bg-accent-hot hover:text-accent-hot-foreground"
                >
                  BUY NOW ON INSTAGRAM
                </a>
              </div>
            </div>

            <div className="md:pt-6">
              <ul className="grid grid-cols-2 gap-5 border-t border-hairline-invert pt-8">
                {trust.map(({ Icon, label }) => (
                  <li key={label} className="flex items-center gap-3 text-sm text-bone/65">
                    <span className="h-5 w-5 shrink-0">
                      <Icon />
                    </span>
                    {label}
                  </li>
                ))}
              </ul>

              <dl className="mt-10 border-t border-hairline-invert">
                {specs.map(([k, v]) => (
                  <div key={k} className="flex gap-6 border-b border-hairline-invert py-3.5 text-sm">
                    <dt className="w-28 shrink-0 text-bone/40">{k}</dt>
                    <dd className="text-bone/75">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {related.length ? (
        <section className="mx-auto max-w-[1500px] px-5 py-20 md:px-10 md:py-28">
          <Reveal className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="display text-[10vw] md:text-[3.5rem]">More {model.brand}.</h2>
            <Link to="/shop" className="eyebrow pb-3 hover:text-accent-hot">
              All boots
            </Link>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 gap-x-5 gap-y-14 md:grid-cols-4 md:gap-x-8">
            {related.map((m, i) => (
              <Reveal key={m.slug} delay={i * 70}>
                <ProductCard model={m} />
              </Reveal>
            ))}
          </div>
        </section>
      ) : null}
    </SiteLayout>
  );
}
