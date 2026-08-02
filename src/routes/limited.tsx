import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { ProductCard } from "@/components/ProductCard";
import { Reveal } from "@/components/Reveal";
import { SaleTicker } from "@/components/SaleTicker";
import { InstagramCTA } from "@/components/InstagramCTA";
import { limitedProducts } from "@/data/products";

export const Route = createFileRoute("/limited")({
  head: () => ({
    meta: [
      { title: "Limited Edition Boots — Signature Packs | BootHub" },
      {
        name: "description",
        content:
          "Signature and named-pack releases: Messi, Bellingham, Mbappé, Beckham and more. Flat ₹6,999 while stock lasts.",
      },
      { property: "og:title", content: "Limited Edition — BootHub" },
      {
        property: "og:description",
        content: "Signature drops and special packs, flat ₹6,999. Gone when they're gone.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Limited,
});

function Limited() {
  return (
    <SiteLayout>
      <div className="dark-section">
        <section className="pt-32 pb-14 md:pt-44 md:pb-20">
          <div className="mx-auto max-w-[1500px] px-5 md:px-10">
            <p className="eyebrow text-accent-hot">The vault</p>
            <h1 className="display mt-6 max-w-3xl text-[13vw] text-bone md:text-[6.5rem]">
              Limited edition.
            </h1>
            <p className="mt-8 max-w-xl text-base text-bone/60">
              Player signatures and named packs — single-run stock, no restocks promised. Same flat
              ₹6,999, same COD and 7-day returns.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-[1500px] px-5 pb-24 md:px-10 md:pb-32">
          <div className="grid grid-cols-2 gap-x-5 gap-y-14 md:grid-cols-3 md:gap-x-8 lg:grid-cols-4">
            {limitedProducts.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 4) * 70}>
                <ProductCard product={p} dark />
              </Reveal>
            ))}
          </div>
        </section>
      </div>
      <SaleTicker />
      <InstagramCTA />
    </SiteLayout>
  );
}
