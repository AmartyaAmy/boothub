import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/SiteLayout";
import { IconInstagram, IconWhatsapp } from "@/components/Icons";
import { BootBadge } from "@/components/Logo";
import { INSTAGRAM_URL, PHONE_DISPLAY, PHONE_HREF } from "@/data/products";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact BootHub — Call or DM Us" },
      {
        name: "description",
        content:
          "Reach BootHub on +91 97599 90999, WhatsApp or Instagram @bootshub_1 for sizing help, order status and COD queries.",
      },
      { property: "og:title", content: "Contact BootHub" },
      {
        property: "og:description",
        content: "Call +91 97599 90999 or DM @bootshub_1 — we reply fast.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <SiteLayout>
      <section className="dark-section relative overflow-hidden pt-32 pb-24 md:pt-44 md:pb-32">
        <BootBadge className="pointer-events-none absolute -right-24 top-24 h-[55vh] opacity-[0.05]" invert />
        <div className="relative mx-auto max-w-[1100px] px-5 md:px-10">
          <div className="text-center">
            <p className="eyebrow text-accent-hot">Talk to us</p>
            <h1 className="display mt-6 text-[13vw] text-bone md:text-[6rem]">Straight through.</h1>
            <p className="mx-auto mt-7 max-w-lg text-base text-bone/60">
              Sizing doubts, order status, COD questions — a real person answers. Fastest reply is a
              DM.
            </p>
          </div>

          <div className="mt-16 grid gap-4 md:grid-cols-3">
            <a
              href={PHONE_HREF}
              className="border border-hairline-invert p-8 transition-colors hover:border-bone"
            >
              <p className="eyebrow text-bone/40">Call / tap to dial</p>
              <p className="mt-4 text-xl font-semibold text-bone tabular-nums">{PHONE_DISPLAY}</p>
              <p className="mt-2 text-sm text-bone/50">Mon–Sat, 10am–8pm IST</p>
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="border border-hairline-invert p-8 transition-colors hover:border-bone"
            >
              <span className="block h-6 w-6 text-bone">
                <IconInstagram />
              </span>
              <p className="mt-4 text-xl font-semibold text-bone">@bootshub_1</p>
              <p className="mt-2 text-sm text-bone/50">Contact us on Instagram</p>
            </a>
            <a
              href="https://wa.me/919759990999"
              target="_blank"
              rel="noreferrer noopener"
              className="border border-hairline-invert p-8 transition-colors hover:border-bone"
            >
              <span className="block h-6 w-6 text-bone">
                <IconWhatsapp />
              </span>
              <p className="mt-4 text-xl font-semibold text-bone">WhatsApp</p>
              <p className="mt-2 text-sm text-bone/50">Share your size, get a link</p>
            </a>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="mx-auto mt-20 max-w-xl"
          >
            <p className="eyebrow text-bone/40">Or leave a message</p>
            <div className="mt-7 space-y-6">
              <label className="block">
                <span className="text-xs text-bone/50">Name</span>
                <input
                  required
                  name="name"
                  className="mt-2 w-full border-b border-hairline-invert bg-transparent pb-3 text-bone outline-none transition-colors focus:border-bone"
                />
              </label>
              <label className="block">
                <span className="text-xs text-bone/50">Message</span>
                <textarea
                  required
                  name="message"
                  rows={4}
                  className="mt-2 w-full resize-none border-b border-hairline-invert bg-transparent pb-3 text-bone outline-none transition-colors focus:border-bone"
                />
              </label>
            </div>
            <button
              type="submit"
              className="mt-9 rounded-full bg-bone px-8 py-4 text-[11px] font-semibold tracking-[0.22em] text-ink transition-colors hover:bg-accent-hot hover:text-accent-hot-foreground"
            >
              {sent ? "MESSAGE NOTED — DM US TO RUSH IT" : "SEND MESSAGE"}
            </button>
          </form>
        </div>
      </section>
    </SiteLayout>
  );
}
