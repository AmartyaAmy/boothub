import { useEffect, useRef, useState } from "react";
import { IconChevron } from "./Icons";

type Props = {
  images: string[];
  alt: string;
  autoPlay?: boolean;
  interval?: number;
  eager?: boolean;
  className?: string;
};

export function ImageCarousel({
  images,
  alt,
  autoPlay = true,
  interval = 3800,
  eager = false,
  className = "",
}: Props) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchX = useRef<number | null>(null);
  const multi = images.length > 1;

  useEffect(() => {
    if (!multi || !autoPlay || paused) return;
    const t = window.setInterval(() => setIndex((i) => (i + 1) % images.length), interval);
    return () => window.clearInterval(t);
  }, [multi, autoPlay, paused, interval, images.length]);

  const go = (dir: number) => setIndex((i) => (i + dir + images.length) % images.length);

  return (
    <div
      className={`relative h-full w-full overflow-hidden ${className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={(e) => {
        touchX.current = e.touches[0]!.clientX;
      }}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const dx = e.changedTouches[0]!.clientX - touchX.current;
        if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
        touchX.current = null;
      }}
    >
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={i === 0 ? alt : `${alt} — view ${i + 1}`}
          loading={eager && i === 0 ? "eager" : "lazy"}
          className="absolute inset-0 h-full w-full object-contain transition-all duration-700 ease-out"
          style={{ opacity: i === index ? 1 : 0 }}
        />
      ))}

      {multi ? (
        <>
          <button
            type="button"
            aria-label="Previous image"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              go(-1);
            }}
            className="absolute top-1/2 left-2 hidden h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-background/70 p-1.5 text-foreground opacity-0 backdrop-blur transition group-hover:opacity-100 hover:bg-background md:flex"
          >
            <IconChevron />
          </button>
          <button
            type="button"
            aria-label="Next image"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              go(1);
            }}
            className="absolute top-1/2 right-2 hidden h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-background/70 p-1.5 text-foreground opacity-0 backdrop-blur transition group-hover:opacity-100 hover:bg-background md:flex"
          >
            <IconChevron dir="right" />
          </button>
          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
            {images.map((src, i) => (
              <button
                key={src}
                type="button"
                aria-label={`Go to image ${i + 1}`}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setIndex(i);
                }}
                className="h-1 w-5 transition-colors"
                style={{
                  backgroundColor:
                    i === index ? "var(--ink)" : "color-mix(in oklab, var(--ink) 22%, transparent)",
                }}
              />
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}
