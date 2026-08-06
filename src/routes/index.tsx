import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Hero } from "@/components/Hero";
import { SaleTicker } from "@/components/SaleTicker";
import { BrandGrid } from "@/components/BrandGrid";
import { TrustBar } from "@/components/TrustBar";
import { ProductCard } from "@/components/ProductCard";
import { Testimonials } from "@/components/Testimonials";
import { InstagramCTA } from "@/components/InstagramCTA";
import { Reveal } from "@/components/Reveal";
import { IconArrow } from "@/components/Icons";
import { coreProducts, limitedProducts } from "@/data/products";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BootHub — Football Boots, Flat ₹6,999 | Nike · Adidas · Puma" },
      {
        name: "description",
        content:
          "Premium Nike, Adidas and Puma football boots at a flat ₹6,999. UK 6-12, cash on delivery, free pan-India shipping and 7-day exchange.",
      },
      { property: "og:title", content: "BootHub — Your Next Goal Starts Here" },
      {
        property: "og:description",
        content: "Elite Nike, Adidas and Puma boots, flat ₹6,999. COD, free shipping, 7-day exchange.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <SiteLayout overHero>
      <Hero />
      <SaleTicker />
      <BrandGrid />
      <TrustBar />

      <section className="mx-auto max-w-[1500px] px-5 pb-20 md:px-10 md:pb-28">
        <Reveal className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow text-muted-foreground">Best sellers</p>
            <h2 className="display mt-4 text-[11vw] md:text-[4.5rem]">The core eleven.</h2>
          </div>
          <Link to="/shop" className="eyebrow flex items-center gap-3 pb-3 hover:text-accent-hot">
            View all
            <span className="h-4 w-4">
              <IconArrow />
            </span>
          </Link>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-x-5 gap-y-14 md:grid-cols-3 md:gap-x-8 lg:grid-cols-4">
          {coreProducts.slice(0, 8).map((p, i) => (
            <Reveal key={p.slug} delay={(i % 4) * 80}>
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="dark-section py-20 md:py-32">
        <div className="mx-auto max-w-[1500px] px-5 md:px-10">
          <Reveal className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow text-accent-hot">Limited edition</p>
              <h2 className="display mt-4 max-w-xl text-[11vw] text-bone md:text-[4.5rem]">
                Signature drops. Gone when they're gone.
              </h2>
            </div>
            <Link
              to="/limited"
              className="eyebrow flex items-center gap-3 pb-3 text-bone/70 hover:text-accent-hot"
            >
              See the vault
              <span className="h-4 w-4">
                <IconArrow />
              </span>
            </Link>
          </Reveal>

          <div className="mt-14 grid grid-cols-2 gap-x-5 gap-y-14 md:grid-cols-3 md:gap-x-8 lg:grid-cols-4">
            {limitedProducts.slice(0, 8).map((p, i) => (
              <Reveal key={p.slug} delay={(i % 4) * 80}>
                <ProductCard product={p} dark />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <SaleTicker />
      <InstagramCTA />
    </SiteLayout>
  );
}
