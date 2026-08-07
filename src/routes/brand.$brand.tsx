import { createFileRoute, notFound } from "@tanstack/react-router";
import { PageHeader, SiteLayout } from "@/components/SiteLayout";
import { ProductGrid } from "@/components/ProductGrid";
import { SaleTicker } from "@/components/SaleTicker";
import { TrustBar } from "@/components/TrustBar";
import { modelsByBrand } from "@/data/products";

const BRANDS: Record<string, { name: string; line: string }> = {
  nike: { name: "Nike", line: "Mercurial speed silos built for the last yard." },
  adidas: { name: "Adidas", line: "F50 and Predator — control, or pure acceleration." },
  puma: { name: "Puma", line: "Future and Ultra — plush touch, brutal top speed." },
  mizuno: { name: "Mizuno", line: "Morelia Neo — Japanese kangaroo-leather touch." },
};

export const Route = createFileRoute("/brand/$brand")({
  loader: ({ params }) => {
    const key = params.brand.toLowerCase();
    if (!BRANDS[key]) throw notFound();
    return { key, ...BRANDS[key] };
  },
  head: ({ loaderData }) => {
    const name = loaderData?.name ?? "Boots";
    return {
      meta: [
        { title: `${name} Football Boots — Flat ₹6,999 | BootHub` },
        {
          name: "description",
          content: `Shop ${name} football boots at BootHub for a flat ₹6,999. Sizes UK 6-12, cash on delivery, free pan-India shipping, 7-day exchange.`,
        },
        { property: "og:title", content: `${name} Boots — BootHub` },
        {
          property: "og:description",
          content: `Every ${name} pair at a flat ₹6,999. Filter by size and order with COD.`,
        },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: BrandPage,
});

function BrandPage() {
  const { key, name, line } = Route.useLoaderData();
  return (
    <SiteLayout>
      <PageHeader eyebrow="Shop by brand" title={name} intro={line} />
      <SaleTicker />
      <ProductGrid items={modelsByBrand(key)} lockBrand={BRANDS[key]!.name as never} />
      <TrustBar />
    </SiteLayout>
  );
}
