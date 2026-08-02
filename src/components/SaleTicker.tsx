const items = [
  "SALE LIVE — EVERY PAIR ₹6,999",
  "FREE SHIPPING PAN-INDIA",
  "COD AVAILABLE",
  "7-DAY RETURNS",
];

export function SaleTicker() {
  const strip = [...items, ...items, ...items, ...items];
  return (
    <div className="dark-section overflow-hidden border-y border-hairline-invert py-3.5">
      <div className="flex w-max animate-marquee">
        {[0, 1].map((dup) => (
          <ul key={dup} className="flex shrink-0 items-center">
            {strip.map((label, i) => (
              <li key={`${dup}-${i}`} className="flex items-center">
                <span
                  className={`eyebrow px-6 ${
                    label.startsWith("SALE") ? "text-accent-hot" : "text-bone/70"
                  }`}
                >
                  {label}
                </span>
                <span className="h-1 w-1 rotate-45 bg-bone/30" aria-hidden="true" />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
