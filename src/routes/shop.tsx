import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, SiteLayout } from "@/components/SiteLayout";
import { ProductGrid } from "@/components/ProductGrid";
import { BrandGrid } from "@/components/BrandGrid";
import { SaleTicker } from "@/components/SaleTicker";
import { TrustBar } from "@/components/TrustBar";
import { models } from "@/data/products";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop All Football Boots — Flat ₹6,999 | BootHub" },
      {
        name: "description",
        content:
          "Browse every Nike, Adidas and Puma boot at BootHub. One price: ₹6,999. Sizes UK 6-12, COD available, free shipping across India.",
      },
      { property: "og:title", content: "Shop All Boots — BootHub" },
      {
        property: "og:description",
        content: "26 elite pairs, one flat price of ₹6,999. Filter by size and brand.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Shop,
});

function Shop() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="The full rack"
        title="Every pair. One price."
        intro="Nike, Adidas and Puma elite silos, flat ₹6,999 in UK 6 to 12. Filter by brand, studs or turf, tap a pair for the full spec."
      />
      <SaleTicker />
      <ProductGrid items={models} />
      <BrandGrid />
      <TrustBar />
    </SiteLayout>
  );
}
