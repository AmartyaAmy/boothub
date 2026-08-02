import { IconCash, IconIndia, IconReturn, IconShip } from "./Icons";
import { Reveal } from "./Reveal";

const items = [
  { Icon: IconCash, title: "Cash on Delivery", body: "Pay when the box lands." },
  { Icon: IconReturn, title: "7-Day Easy Exchange", body: "Wrong fit? Swap it free." },
  { Icon: IconShip, title: "Free Shipping", body: "No hidden charges. Ever." },
  { Icon: IconIndia, title: "Delivered Pan-India", body: "Metro to small town." },
];

export function TrustBar() {
  return (
    <section className="mx-auto max-w-[1500px] px-5 py-16 md:px-10 md:py-24">
      <ul className="grid grid-cols-2 gap-x-6 gap-y-12 border-t border-hairline pt-12 md:grid-cols-4 md:gap-x-12">
        {items.map(({ Icon, title, body }, i) => (
          <Reveal as="li" key={title} delay={i * 90}>
            <div className="h-7 w-7 text-foreground">
              <Icon />
            </div>
            <h3 className="mt-5 text-sm font-semibold tracking-tight">{title}</h3>
            <p className="mt-1.5 text-sm text-muted-foreground">{body}</p>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
