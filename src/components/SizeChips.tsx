import { useState } from "react";
import { SIZES } from "@/data/products";

export function SizeChips({
  invert = false,
  size = "sm",
  onChange,
}: {
  invert?: boolean;
  size?: "sm" | "lg";
  onChange?: (value: number) => void;
}) {
  const [selected, setSelected] = useState<number | null>(null);
  const pad = size === "lg" ? "h-11 w-11 text-sm" : "h-7 w-7 text-[11px]";

  return (
    <div className="flex flex-wrap gap-1.5" role="group" aria-label="Select UK size">
      {SIZES.map((s) => {
        const active = selected === s;
        return (
          <button
            key={s}
            type="button"
            aria-pressed={active}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setSelected(s);
              onChange?.(s);
            }}
            className={[
              pad,
              "flex items-center justify-center border font-medium tabular-nums transition-colors",
              invert
                ? active
                  ? "border-bone bg-bone text-ink"
                  : "border-hairline-invert text-bone/70 hover:border-bone hover:text-bone"
                : active
                  ? "border-ink bg-ink text-bone"
                  : "border-hairline text-muted-foreground hover:border-ink hover:text-foreground",
            ].join(" ")}
          >
            {s}
          </button>
        );
      })}
    </div>
  );
}
