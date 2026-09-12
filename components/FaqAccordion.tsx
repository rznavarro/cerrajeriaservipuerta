type FaqItem = { pregunta: string; respuesta: string };

export default function FaqAccordion({
  items,
}: {
  items: readonly FaqItem[];
}) {
  return (
    <div className="divide-y divide-line/60 rounded-lg border border-line/60 bg-ink-900">
      {items.map((item) => (
        <details key={item.pregunta} className="group px-5 py-4 sm:px-6">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-base font-bold text-paper sm:text-lg">
            {item.pregunta}
            <span
              aria-hidden="true"
              className="shrink-0 text-2xl leading-none text-accent transition-transform duration-300 group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <p className="mt-3 text-sm leading-relaxed text-paper/70 sm:text-base">
            {item.respuesta}
          </p>
        </details>
      ))}
    </div>
  );
}
