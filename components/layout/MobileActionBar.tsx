import { BUSINESS, WA_MESSAGES, waLink } from "@/lib/site";

export default function MobileActionBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 border-t border-line/60 bg-ink-950/95 backdrop-blur lg:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <a
        href={BUSINESS.phoneHref}
        aria-label={`Llamar ahora a ${BUSINESS.phoneDisplay}`}
        className="flex items-center justify-center gap-2 bg-accent py-4 font-display text-sm font-extrabold uppercase tracking-wide text-accent-ink"
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z" />
        </svg>
        Llamar
      </a>
      <a
        href={waLink(WA_MESSAGES.urgencia)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Escribir por WhatsApp"
        className="flex items-center justify-center gap-2 bg-paper py-4 font-display text-sm font-extrabold uppercase tracking-wide text-ink-950"
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="currentColor"
        >
          <path d="M17.6 6.32A8.86 8.86 0 0 0 3.2 16.8L2 22l5.36-1.16a8.86 8.86 0 0 0 4.25 1.08h.01c4.9 0 8.87-3.97 8.87-8.87a8.8 8.8 0 0 0-2.9-6.73Zm-6 13.6h-.01a7.4 7.4 0 0 1-3.76-1.03l-.27-.16-2.8.73.75-2.73-.18-.28a7.36 7.36 0 0 1-1.13-3.93 7.4 7.4 0 1 1 7.4 7.4Z" />
        </svg>
        WhatsApp
      </a>
    </div>
  );
}
