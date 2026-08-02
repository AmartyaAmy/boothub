import wordmark from "@/assets/boothub-wordmark.png";
import badge from "@/assets/boothub-badge.png";

export function Wordmark({ className = "h-4", invert = false }: { className?: string; invert?: boolean }) {
  return (
    <img
      src={wordmark}
      alt="BootHub"
      width={1536}
      height={512}
      className={`w-auto ${className} ${invert ? "invert" : ""}`}
    />
  );
}

export function BootBadge({ className = "h-24", invert = false }: { className?: string; invert?: boolean }) {
  return (
    <img
      src={badge}
      alt="BootHub boot badge"
      width={1024}
      height={768}
      loading="lazy"
      className={`w-auto ${className} ${invert ? "invert" : ""}`}
    />
  );
}
