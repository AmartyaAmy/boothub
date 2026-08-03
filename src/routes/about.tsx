import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, SiteLayout } from "@/components/SiteLayout";
import { TrustBar } from "@/components/TrustBar";
import { SaleTicker } from "@/components/SaleTicker";
import { InstagramCTA } from "@/components/InstagramCTA";
import { Reveal } from "@/components/Reveal";
import { products } from "@/data/products";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About BootHub — Elite Boots, One Honest Price" },
      {
        name: "description",
        content:
          "BootHub sells elite Nike and Adidas football boots at a flat ₹6,999 with COD, free pan-India shipping and 7-day exchange. Here's how and why.",
      },
      { property: "og:title", content: "About BootHub" },
      {
        property: "og:description",
        content: "Elite football boots at one honest price — ₹6,999, shipped free across India.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

const stats = [
  ["2,400+", "Pairs shipped"],
  ["4.8", "Average rating"],
  ["26", "Silos in stock"],
  ["₹6,999", "Every single pair"],
];

function About() {
  const hero = products[products.length - 1]!;
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="About"
        title="One price. No theatre."
        intro="We buy elite silos deep and sell them flat. No festival pricing, no fake countdowns — the boot on the pitch matters more than the sticker."
      />
      <SaleTicker />

      <section className="mx-auto max-w-[1500px] px-5 py-20 md:px-10 md:py-28">
        <div className="grid gap-14 md:grid-cols-2 md:gap-20">
          <Reveal>
            <h2 className="display text-[10vw] md:text-[3.4rem]">Built for players, not collectors.</h2>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                BootHub started in a college changing room where half the squad played in boots a
                size too big because the right pair cost a month's rent.
              </p>
              <p>
                Today we run a tight rack — F50, Predator, Mercurial, Superfly — in UK 6 to 12, all
                at ₹6,999. Cash on delivery, because trust runs both ways. Seven days to change your
                mind, because fit is personal.
              </p>
              <p>
                Every pair ships free anywhere in India. No handling fee at checkout, no surprise at
                the door.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120} className="bg-white">
            <img
              src={hero.images[0]}
              alt={`${hero.brand} ${hero.name}`}
              loading="lazy"
              className="h-full w-full object-contain p-8"
            />
          </Reveal>
        </div>

        <ul className="mt-20 grid grid-cols-2 gap-px border border-hairline bg-hairline md:grid-cols-4">
          {stats.map(([value, label], i) => (
            <Reveal as="li" key={label} delay={i * 80} className="bg-background p-8">
              <p className={`display text-4xl md:text-5xl ${value.includes("₹6,999") ? "text-accent-hot" : ""}`}>
                {value}
              </p>
              <p className="eyebrow mt-3 text-muted-foreground">{label}</p>
            </Reveal>
          ))}
        </ul>
      </section>

      <TrustBar />
      <InstagramCTA />
    </SiteLayout>
  );
}
