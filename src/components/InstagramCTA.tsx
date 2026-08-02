import { INSTAGRAM_URL } from "@/data/products";
import { IconInstagram } from "./Icons";
import { Reveal } from "./Reveal";
import { BootBadge } from "./Logo";

export function InstagramCTA() {
  return (
    <section className="dark-section relative overflow-hidden">
      <BootBadge className="pointer-events-none absolute -left-20 -bottom-16 h-[60vh] opacity-[0.05]" invert />
      <div className="mx-auto max-w-[1500px] px-5 py-24 md:px-10 md:py-32">
        <Reveal className="relative max-w-2xl">
          <p className="eyebrow text-accent-hot">@bootshub_1</p>
          <h2 className="display mt-5 text-[12vw] text-bone md:text-[5rem]">
            Join the BootHub community.
          </h2>
          <p className="mt-7 text-base text-bone/60">
            Drop alerts, restocks and on-pitch clips first. 12.4K following the feed.
          </p>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer noopener"
            className="mt-9 inline-flex items-center gap-3 rounded-full bg-bone px-8 py-4 text-[11px] font-semibold tracking-[0.22em] text-ink transition-colors hover:bg-accent-hot hover:text-accent-hot-foreground"
          >
            <span className="h-4 w-4">
              <IconInstagram />
            </span>
            FOLLOW ON INSTAGRAM
          </a>
        </Reveal>
      </div>
    </section>
  );
}
