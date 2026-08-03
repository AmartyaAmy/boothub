import { Link } from "@tanstack/react-router";
import { INSTAGRAM_URL, PHONE_DISPLAY, PHONE_HREF } from "@/data/products";
import { Wordmark } from "./Logo";
import { IconInstagram, IconWhatsapp } from "./Icons";

const cols = [
  {
    title: "Shop",
    links: [
      { label: "All Boots", to: "/shop" },
      { label: "Nike", to: "/brand/$brand", params: { brand: "nike" } },
      { label: "Adidas", to: "/brand/$brand", params: { brand: "adidas" } },
      { label: "Limited Edition", to: "/limited" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", to: "/about" },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    title: "Policies",
    links: [
      { label: "Exchanges", to: "/policies", hash: "returns" },
      { label: "Refund Policy", to: "/policies", hash: "refunds" },
      { label: "Shipping", to: "/policies", hash: "shipping" },
      { label: "Terms & Privacy", to: "/policies", hash: "terms" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="dark-section">
      <div className="mx-auto max-w-[1500px] px-5 py-16 md:px-10 md:py-24">
        <div className="grid gap-14 md:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <Wordmark className="h-4" invert />
            <p className="mt-6 max-w-xs text-sm text-bone/55">
              Engineered to perform. Priced to move. Every pair flat{" "}
              <span className="text-accent-hot">₹6,999</span> — COD, free pan-India shipping, 7-day
              exchange.
            </p>
            <div className="mt-7 flex items-center gap-4">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="BootHub on Instagram"
                className="h-6 w-6 text-bone/60 transition-colors hover:text-bone"
              >
                <IconInstagram />
              </a>
              <a
                href="https://wa.me/919759990999"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="BootHub on WhatsApp"
                className="h-6 w-6 text-bone/60 transition-colors hover:text-bone"
              >
                <IconWhatsapp />
              </a>
            </div>
            <a
              href={PHONE_HREF}
              className="mt-7 block text-sm font-semibold text-bone tabular-nums hover:text-accent-hot"
            >
              {PHONE_DISPLAY}
            </a>
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <h3 className="eyebrow text-bone/40">{col.title}</h3>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      {...("params" in l ? { params: l.params as never } : {})}
                      {...("hash" in l ? { hash: l.hash as string } : {})}
                      className="text-sm text-bone/65 transition-colors hover:text-bone"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-hairline-invert pt-8 text-xs text-bone/40 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} BootHub. All rights reserved.</p>
          <p className="text-[10px] text-bone/30">Built by Socialyt and co.</p>
        </div>
      </div>
    </footer>
  );
}
