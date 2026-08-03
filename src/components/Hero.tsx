import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { products, PRICE } from "@/data/products";
import { MaskedMRP } from "@/components/MaskedMRP";
import { BootBadge } from "./Logo";

const DURATION = 4200;

const deck = [
  {
    kicker: "Sale live · Save 36%",
    headline: ["Your Next Goal", "Starts Here."],
    copy: "Elite silos. Flat ₹6,999. Nothing held back.",
    slug: "adidas-f50-elite-fg-celestial-victory-pack",
  },
  {
    kicker: "Firm Ground Series",
    headline: ["Precision.", "On Every Surface."],
    copy: "Predator and Mercurial builds made for the final third.",
    slug: "nike-mercurial-superfly-10-elite-kylian-mbapp",
  },
  {
    kicker: "Limited Edition",
    headline: ["Engineered to Perform.", "Priced to Move."],
    copy: "Signature packs, in stock while they last.",
    slug: "adidas-f50-messi-el-ltimo-tango",
  },
  {
    kicker: "Sale live · Flat ₹6,999",
    headline: ["Predator Instinct.", "Priced Flat."],
    copy: "Every Predator silo down from ₹10,999 — while stock lasts.",
    slug: "adidas-predator-elite-ft-fg",
  },
  {
    kicker: "Speed Pack",
    headline: ["Built For", "The First Step."],
    copy: "Mercurial and F50 speed frames, sale priced.",
    slug: "nike-zoom-mercurial-vapor-15-elite",
  },
  {
    kicker: "Signature Series",
    headline: ["Worn By Icons.", "Yours Today."],
    copy: "Bellingham, Beckham and Yamal editions — one flat price.",
    slug: "adidas-predator-elite-jude-bellingham",
  },
  {
    kicker: "Blueprint Pack",
    headline: ["Sharp Kit.", "Sharper Price."],
    copy: "Nike's Blueprint and Scary Good drops, in stock now.",
    slug: "nike-mercurial-vapor-16-elite-fg-blueprint-pack",
  },
];

const slides = deck.filter((s) => products.some((p) => p.slug === s.slug));
const fmt = (n: number) => `₹${n.toLocaleString("en-IN")}`;

export function Hero() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = window.setInterval(() => setI((v) => (v + 1) % slides.length), DURATION);
    return () => window.clearInterval(t);
  }, []);

  return (
    <section className="relative flex min-h-[100svh] flex-col overflow-hidden dark-section">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 80% at 78% 42%, color-mix(in oklab, var(--accent-hot) 20%, transparent) 0%, transparent 62%), radial-gradient(90% 70% at 8% 92%, color-mix(in oklab, var(--bone) 7%, transparent) 0%, transparent 66%)",
        }}
      />
      <BootBadge
        className="pointer-events-none absolute -right-24 bottom-0 h-[70vh] opacity-[0.045] md:-right-10"
        invert
      />

      <div className="relative grid flex-1 grid-cols-1 grid-rows-1">
      {slides.map((s, idx) => {
        const product = (products.find((p) => p.slug === s.slug) ?? products[0])!;
        const active = idx === i;
        return (
          <div
            key={s.slug}
            aria-hidden={!active}
            className="col-start-1 row-start-1 transition-opacity duration-1000 ease-out"
            style={{ opacity: active ? 1 : 0, pointerEvents: active ? "auto" : "none" }}
          >
            <div className="mx-auto grid h-full max-w-[1500px] grid-cols-1 items-center gap-6 px-5 pt-32 pb-10 md:grid-cols-[1.05fr_1fr] md:px-10 md:pt-28 md:pb-14">
              <div className="order-2 md:order-1">
                <p className="eyebrow inline-flex items-center gap-2 rounded-full border border-accent-hot/40 bg-accent-hot/10 px-3.5 py-1.5 text-accent-hot backdrop-blur-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-hot" />
                  {s.kicker}
                </p>
                <h1 className="display mt-5 text-[13vw] text-bone md:mt-7 md:text-[5.4rem] lg:text-[6.4rem]">
                  {s.headline[0]}
                  <br />
                  <span className="text-bone/45">{s.headline[1]}</span>
                </h1>
                <p className="mt-6 max-w-sm text-base text-bone/60 md:mt-7">{s.copy}</p>
                <div className="mt-6 flex items-baseline gap-3">
                  <span className="display text-3xl text-accent-hot tabular-nums md:text-4xl">
                    {fmt(PRICE)}
                  </span>
                  <MaskedMRP className="text-sm text-bone/45" />
                  <span className="eyebrow rounded-sm bg-accent-hot px-2 py-1 text-[10px] text-accent-hot-foreground">
                    Save 36%
                  </span>
                </div>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <Link
                    to="/shop"
                    className="rounded-full bg-bone px-8 py-4 text-[11px] font-semibold tracking-[0.22em] text-ink shadow-[0_18px_40px_-18px_rgba(255,255,255,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-hot hover:text-accent-hot-foreground"
                  >
                    SHOP THE SALE
                  </Link>
                  <Link
                    to="/boots/$slug"
                    params={{ slug: product.slug }}
                    className="rounded-full border border-hairline-invert px-8 py-4 text-[11px] font-semibold tracking-[0.22em] text-bone backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-bone"
                  >
                    VIEW THIS PAIR
                  </Link>
                </div>
              </div>

              <div className="order-1 flex h-[34svh] min-h-[220px] items-center justify-center md:order-2 md:h-[70vh]">
                <img
                  src={product.images[0]}
                  alt={`${product.brand} ${product.name}`}
                  loading={idx === 0 ? "eager" : "lazy"}
                  className="h-full w-full object-contain drop-shadow-[0_40px_60px_rgba(0,0,0,0.6)]"
                  style={{
                    transform: active
                      ? "scale(1.04) translateY(0) rotate(-1deg)"
                      : "scale(0.94) translateY(16px) rotate(-1deg)",
                    transition: "transform 4.6s cubic-bezier(0.22,1,0.36,1)",
                  }}
                />
              </div>
            </div>
          </div>
        );
      })}
      </div>

      <div
        aria-hidden="true"
        className="relative z-10 mx-auto flex w-full max-w-[1500px] items-center gap-2 px-5 pb-8 md:px-10"
      >
        {slides.map((s, idx) => (
          <span key={s.slug} className="h-[3px] flex-1 overflow-hidden bg-bone/20">
            <span
              className="block h-full bg-accent-hot"
              style={{
                width: idx === i ? "100%" : "0%",
                transition: idx === i ? `width ${DURATION}ms linear` : "none",
              }}
            />
          </span>
        ))}
      </div>
    </section>
  );
}
