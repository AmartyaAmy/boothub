import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { INSTAGRAM_URL } from "@/data/products";
import { Wordmark } from "./Logo";
import { IconInstagram } from "./Icons";
import { SaleBanner } from "./SaleBanner";

const links = [
  { label: "Shop", to: "/shop" },
  { label: "Brands", to: "/shop", hash: "brands" },
  { label: "Limited Edition", to: "/limited" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export function Navbar({ overHero = false }: { overHero?: boolean }) {
  const [scrolled, setScrolled] = useState(!overHero);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!overHero) return;
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [overHero]);

  const solid = scrolled || open;

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-colors duration-500"
      style={{
        backgroundColor: solid ? "color-mix(in oklab, var(--ink) 82%, transparent)" : "transparent",
        backdropFilter: solid ? "blur(18px) saturate(140%)" : "none",
        borderBottom: solid ? "1px solid var(--hairline-invert)" : "1px solid transparent",
      }}
    >
      <SaleBanner />
      <nav className="mx-auto flex h-16 max-w-[1500px] items-center justify-between px-5 md:h-20 md:px-10">
        <Link to="/" aria-label="BootHub home" className="shrink-0">
          <Wordmark className="h-3.5 md:h-4" invert />
        </Link>

        <ul className="hidden items-center gap-9 lg:flex">
          {links.map((l) => (
            <li key={l.label}>
              <Link
                to={l.to}
                {...(l.hash ? { hash: l.hash } : {})}
                className="eyebrow text-bone/65 transition-colors hover:text-bone"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="BootHub on Instagram"
            className="h-5 w-5 text-bone/70 transition-colors hover:text-bone"
          >
            <IconInstagram />
          </a>
          <Link
            to="/shop"
            className="hidden bg-bone px-5 py-2.5 text-[11px] font-semibold tracking-[0.2em] text-ink transition-colors hover:bg-accent-hot hover:text-accent-hot-foreground sm:block"
          >
            SHOP NOW
          </Link>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="flex h-8 w-8 flex-col items-end justify-center gap-1.5 lg:hidden"
          >
            <span
              className="block h-px w-6 bg-bone transition-transform"
              style={open ? { transform: "translateY(3px) rotate(6deg)" } : undefined}
            />
            <span
              className="block h-px w-4 bg-bone transition-all"
              style={open ? { width: "1.5rem", transform: "translateY(-3px) rotate(-6deg)" } : undefined}
            />
          </button>
        </div>
      </nav>

      {open ? (
        <ul className="border-t border-hairline-invert px-5 pb-6 lg:hidden">
          {links.map((l) => (
            <li key={l.label} className="border-b border-hairline-invert">
              <Link
                to={l.to}
                {...(l.hash ? { hash: l.hash } : {})}
                onClick={() => setOpen(false)}
                className="block py-4 text-lg font-semibold text-bone"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </header>
  );
}
