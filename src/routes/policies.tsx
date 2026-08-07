import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, SiteLayout } from "@/components/SiteLayout";
import { INSTAGRAM_URL } from "@/data/products";

export const Route = createFileRoute("/policies")({
  head: () => ({
    meta: [
      { title: "Exchanges, Shipping & Policies | BootHub" },
      {
        name: "description",
        content:
          "BootHub policies: 7-day exchanges, free pan-India shipping, cash on delivery, refunds, terms and privacy.",
      },
      { property: "og:title", content: "Policies — BootHub" },
      {
        property: "og:description",
        content: "7-day exchange, free shipping, COD, refunds, terms and privacy in plain language.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Policies,
});

const sections = [
  {
    id: "returns",
    title: "Exchanges",
    body: [
      "Seven days from delivery to exchange any pair, provided the studs are unused and the box is intact.",
      "Size swaps are free — one per order. Message us on Instagram or WhatsApp with your order name and the size you need.",
    ],
  },
  {
    id: "shipping",
    title: "Shipping",
    body: [
      "Free shipping to every serviceable pincode in India. No handling fee, no delivery charge, no COD surcharge.",
      "Dispatch within 24 hours on working days. Metros typically land in 2–4 days, the rest of India in 4–7.",
    ],
  },
  {
    id: "refunds",
    title: "Refund Policy",
    body: [
      "Approved refunds are issued to the original payment method within 5–7 working days of the pair reaching us.",
      "COD orders are refunded by UPI or bank transfer to the account you nominate.",
    ],
  },
  {
    id: "terms",
    title: "Terms & Privacy",
    body: [
      "Prices, sizes and availability are listed in good faith and can change without notice. Product photography shows the actual pair in stock.",
      "We collect only what an order needs — name, address, phone number — and never sell or rent it. We do not store card details.",
    ],
  },
];

function Policies() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="The fine print"
        title="No hidden anything."
        intro="Short policies, written the way we'd want them written."
      />
      <section className="mx-auto max-w-[900px] px-5 py-20 md:px-10 md:py-28">
        {sections.map((s) => (
          <div key={s.id} id={s.id} className="scroll-mt-28 border-t border-hairline py-12 first:border-t-0 first:pt-0">
            <h2 className="display text-[8vw] md:text-[2.6rem]">{s.title}</h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              {s.body.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
        ))}
        <p className="border-t border-hairline pt-12 text-sm text-muted-foreground">
          Questions? DM us{" "}
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-foreground hover:text-accent-hot"
          >
            @bootshub_1
          </a>
          .
        </p>
      </section>
    </SiteLayout>
  );
}
