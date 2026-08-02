type P = { className?: string };

const base = "h-full w-full";
const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.25,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function IconCash({ className = base }: P) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <g {...stroke}>
        <path d="M2 8h28v16H2z" />
        <path d="M16 12.5 19.5 16 16 19.5 12.5 16z" />
        <path d="M6 12v8M26 12v8" />
      </g>
    </svg>
  );
}

export function IconReturn({ className = base }: P) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <g {...stroke}>
        <path d="M4 16a12 12 0 1 0 3.6-8.6" />
        <path d="M4 4v6h6" />
        <path d="M16 11v5l4 2" />
      </g>
    </svg>
  );
}

export function IconShip({ className = base }: P) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <g {...stroke}>
        <path d="M2 21h13V9H2z" />
        <path d="M15 13h8l5 5v3h-13z" />
        <circle cx="9" cy="24" r="2.5" />
        <circle cx="23" cy="24" r="2.5" />
      </g>
    </svg>
  );
}

export function IconIndia({ className = base }: P) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <g {...stroke}>
        <path d="M16 29s9-9.6 9-16.2A9 9 0 0 0 7 12.8C7 19.4 16 29 16 29z" />
        <circle cx="16" cy="12.5" r="3.2" />
      </g>
    </svg>
  );
}

export function IconInstagram({ className = base }: P) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <g {...stroke}>
        <rect x="4" y="4" width="24" height="24" rx="7" />
        <circle cx="16" cy="16" r="6" />
        <path d="M23 8.6h.01" strokeWidth={2.5} />
      </g>
    </svg>
  );
}

export function IconWhatsapp({ className = base }: P) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <g {...stroke}>
        <path d="M4.5 27.5l1.8-5.6A11.6 11.6 0 1 1 16 27.6c-1.9 0-3.7-.45-5.3-1.25z" />
        <path d="M12 12.4c.4 3.6 3.2 6.4 6.8 6.9.9.1 1.6-.7 1.5-1.6l-.1-.9-2.6-.6-1.1 1.2a8.4 8.4 0 0 1-3-3l1.2-1.1-.6-2.6-.9-.1c-.9-.1-1.7.6-1.6 1.5z" />
      </g>
    </svg>
  );
}

export function IconArrow({ className = base }: P) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <g {...stroke} strokeWidth={1.6}>
        <path d="M5 16h22" />
        <path d="M20 9l7 7-7 7" />
      </g>
    </svg>
  );
}

export function IconChevron({ className = base, dir = "left" }: P & { dir?: "left" | "right" }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      aria-hidden="true"
      style={dir === "right" ? { transform: "rotate(180deg)" } : undefined}
    >
      <g {...stroke} strokeWidth={1.8}>
        <path d="M19 7l-9 9 9 9" />
      </g>
    </svg>
  );
}

export function IconStar({ className = base }: P) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <path fill="currentColor" d="M16 3l3.9 8.4 9.1 1.1-6.7 6.3 1.7 9.2L16 23.6 7.9 28l1.8-9.2L3 12.5l9.1-1.1z" />
    </svg>
  );
}
