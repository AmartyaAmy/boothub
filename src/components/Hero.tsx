import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { products } from "@/data/products";
import { BootBadge } from "./Logo";
import { IconChevron } from "./Icons";

const slides = [
  {
    kicker: "New Season Drop",
    headline: ["Your Next Goal", "Starts Here."],
    copy: "Elite silos. Flat ₹6,999. Nothing held back.",
    slug: "adidas-f50-elite-fg-celestial-victory-pack",
  },
  {
    kicker: "Firm Ground Series",
    headline: ["Precision.", "On Every Surface."],
    copy: "Predator and Mercurial builds made for the final third.",
    slug: "nike-mercurial-superfly-10-elite-kylian-mbappe",
  },
  {
    kicker: "Limited Edition",
    headline: ["Engineered to Perform.", "Priced to Move."],
    copy: "Signature packs, in stock while they last.",
    slug: "adidas-f50-messi-el-ultimo-tango",
  },
];

export function Hero() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = window.setInterval(() => setI((v) => (v + 1) % slides.length), 5000);
    return () => window.clearInterval(t);
  }, [paused]);

  const go = (d: number) => setI((v) => (v + d + slides.length) % slides.length);

  return (
    <section
      className="relative min-h-[100svh] overflow-hidden dark-section"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <BootBadge
        className="pointer-events-none absolute -right-24 bottom-0 h-[70vh] opacity-[0.045] md:-right-10"
        invert
      />

      {slides.map((s, idx) => {
        const product = (products.find((p) => p.slug === s.slug) ?? products[0])!;
        const active = idx === i;
        return (
          <div
            key={s.slug}
            aria-hidden={!active}
            className="absolute inset-0 transition-opacity duration-1000 ease-out"
            style={{ opacity: active ? 1 : 0, pointerEvents: active ? "auto" : "none" }}
          >
            <div className="mx-auto grid h-full max-w-[1500px] grid-cols-1 items-center gap-6 px-5 pt-28 pb-24 md:grid-cols-[1.05fr_1fr] md:px-10 md:pt-24 md:pb-16">
              <div className="order-2 md:order-1">
                <p className="eyebrow text-accent-hot">{s.kicker}</p>
                <h1 className="display mt-5 text-[14vw] text-bone md:mt-7 md:text-[5.6rem] lg:text-[6.6rem]">
                  {s.headline[0]}
                  <br />
                  <span className="text-bone/45">{s.headline[1]}</span>
                </h1>
                <p className="mt-6 max-w-sm text-base text-bone/60 md:mt-8">{s.copy}</p>
                <div className="mt-9 flex flex-wrap items-center gap-3">
                  <Link
                    to="/shop"
                    className="rounded-full bg-bone px-8 py-4 text-[11px] font-semibold tracking-[0.22em] text-ink transition-colors hover:bg-accent-hot hover:text-accent-hot-foreground"
                  >
                    SHOP THE DROP
                  </Link>
                  <Link
                    to="/boots/$slug"
                    params={{ slug: product.slug }}
                    className="rounded-full border border-hairline-invert px-8 py-4 text-[11px] font-semibold tracking-[0.22em] text-bone transition-colors hover:border-bone"
                  >
                    VIEW THIS PAIR
                  </Link>
                </div>
              </div>

              <div className="order-1 flex h-[38svh] items-center justify-center md:order-2 md:h-[74vh]">
                <img
                  src={product.images[0]}
                  alt={`${product.brand} ${product.name}`}
                  loading={idx === 0 ? "eager" : "lazy"}
                  className="h-full w-full object-contain drop-shadow-[0_40px_60px_rgba(0,0,0,0.6)]"
                  style={{
                    transform: active ? "scale(1) translateY(0)" : "scale(0.96) translateY(12px)",
                    transition: "transform 1.2s cubic-bezier(0.22,1,0.36,1)",
                  }}
                />
              </div>
            </div>
          </div>
        );
      })}

      <div className="absolute inset-x-0 bottom-6 z-10 mx-auto flex max-w-[1500px] items-center justify-between px-5 md:px-10">
        <div className="flex items-center gap-2">
          {slides.map((s, idx) => (
            <button
              key={s.slug}
              type="button"
              aria-label={`Show slide ${idx + 1}`}
              onClick={() => setI(idx)}
              className="h-1 w-10 transition-colors"
              style={{
                backgroundColor: idx === i ? "var(--bone)" : "color-mix(in oklab, var(--bone) 25%, transparent)",
              }}
            />
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Previous slide"
            onClick={() => go(-1)}
            className="h-9 w-9 rounded-full border border-hairline-invert p-2 text-bone/70 transition-colors hover:border-bone hover:text-bone"
          >
            <IconChevron />
          </button>
          <button
            type="button"
            aria-label="Next slide"
            onClick={() => go(1)}
            className="h-9 w-9 rounded-full border border-hairline-invert p-2 text-bone/70 transition-colors hover:border-bone hover:text-bone"
          >
            <IconChevron dir="right" />
          </button>
        </div>
      </div>
    </section>
  );
}
