import { IconStar } from "./Icons";
import { Reveal } from "./Reveal";

const reviews = [
  { name: "Rahul M.", city: "Pune", quote: "Studs bite exactly like the ₹18k pair I borrowed. Half the money." },
  { name: "Aditya S.", city: "Kochi", quote: "Ordered COD on Sunday, played in them Wednesday. Fit was spot on." },
  { name: "Zaid K.", city: "Lucknow", quote: "The Predator FT feels locked in. Touch on turf is unreal." },
  { name: "Nikhil R.", city: "Guwahati", quote: "Swapped a size in two days, zero questions. That sold me." },
];

export function Testimonials() {
  return (
    <section className="mx-auto max-w-[1500px] px-5 py-20 md:px-10 md:py-28">
      <Reveal>
        <p className="eyebrow text-muted-foreground">From the pitch</p>
        <h2 className="display mt-4 max-w-2xl text-[11vw] md:text-[4.5rem]">
          4.8 average. 2,400+ pairs shipped.
        </h2>
      </Reveal>

      <ul className="mt-12 grid gap-px border border-hairline bg-hairline md:grid-cols-4">
        {reviews.map((r, i) => (
          <Reveal as="li" key={r.name} delay={i * 80} className="bg-background p-7 md:p-8">
            <div className="flex gap-1 text-accent-hot">
              {[0, 1, 2, 3, 4].map((s) => (
                <span key={s} className="h-3 w-3">
                  <IconStar />
                </span>
              ))}
            </div>
            <p className="mt-5 text-sm leading-relaxed text-foreground">{r.quote}</p>
            <p className="eyebrow mt-6 text-muted-foreground">
              {r.name} — {r.city}
            </p>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
