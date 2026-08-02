import { Link } from "@tanstack/react-router";
import { byBrand } from "@/data/products";
import { Reveal } from "./Reveal";
import { IconArrow } from "./Icons";

const brands = [
  { name: "Adidas", slug: "adidas", line: "F50 · Predator", dark: true },
  { name: "Nike", slug: "nike", line: "Mercurial · Superfly", dark: false },
];

export function BrandGrid() {
  return (
    <section id="brands" className="mx-auto max-w-[1500px] scroll-mt-24 px-5 py-20 md:px-10 md:py-28">
      <Reveal className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="eyebrow text-muted-foreground">Shop by brand</p>
          <h2 className="display mt-4 text-[11vw] md:text-[4.5rem]">Pick your side.</h2>
        </div>
        <Link to="/shop" className="eyebrow flex items-center gap-3 pb-3 hover:text-accent-hot">
          All boots
          <span className="h-4 w-4">
            <IconArrow />
          </span>
        </Link>
      </Reveal>

      <div className="mt-12 grid gap-4 md:grid-cols-2 md:gap-6">
        {brands.map((b, i) => {
          const items = byBrand(b.slug);
          const hero = (items.find((p) => !p.limited) ?? items[0])!;
          return (
            <Reveal key={b.slug} delay={i * 120}>
              <Link
                to="/brand/$brand"
                params={{ brand: b.slug }}
                className={`group relative flex aspect-[4/3] flex-col justify-between overflow-hidden p-7 transition-transform duration-500 hover:-translate-y-1 md:p-10 ${
                  b.dark ? "bg-surface-dark text-bone" : "bg-white text-foreground"
                }`}
              >
                <img
                  src={hero.images[0]}
                  alt={`${b.name} football boots`}
                  loading="lazy"
                  className="absolute right-[-6%] bottom-[-4%] h-[72%] w-[72%] object-contain transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="relative">
                  <p className="display text-[13vw] leading-none md:text-[4.5rem]">{b.name}</p>
                  <p className={`eyebrow mt-3 ${b.dark ? "text-bone/50" : "text-muted-foreground"}`}>
                    {b.line}
                  </p>
                </div>
                <p className="eyebrow relative flex items-center gap-3">
                  {items.length} pairs
                  <span className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5">
                    <IconArrow />
                  </span>
                </p>
              </Link>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
