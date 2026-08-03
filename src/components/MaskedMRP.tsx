import { cn } from "@/lib/utils";

export function MaskedMRP({ className }: { className?: string }) {
  return (
    <span className={cn("line-through tabular-nums decoration-1", className)}>
      ₹XXXXX
    </span>
  );
}
