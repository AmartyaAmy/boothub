import type { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function SiteLayout({
  children,
  overHero = false,
}: {
  children: ReactNode;
  overHero?: boolean;
}) {
  return (
    <div className="min-h-screen bg-background">
      <Navbar overHero={overHero} />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="dark-section pt-32 pb-16 md:pt-44 md:pb-24">
      <div className="mx-auto max-w-[1500px] px-5 md:px-10">
        <p className="eyebrow text-accent-hot">{eyebrow}</p>
        <h1 className="display mt-6 text-[13vw] leading-[0.85] text-bone md:text-[6.5rem]">{title}</h1>
        {intro ? <p className="mt-8 max-w-xl text-base text-bone/60">{intro}</p> : null}
      </div>
    </section>
  );
}
