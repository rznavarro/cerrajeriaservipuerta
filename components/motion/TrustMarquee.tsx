import { CONFIANZA_ITEMS } from "@/lib/site";

export default function TrustMarquee() {
  const items = [...CONFIANZA_ITEMS, ...CONFIANZA_ITEMS];

  return (
    <div className="overflow-hidden border-y border-line/60 bg-ink-900 py-3">
      <div className="flex w-max animate-marquee gap-10 motion-reduce:animate-none">
        {items.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-2 whitespace-nowrap text-sm font-semibold uppercase tracking-wide text-paper/70"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
