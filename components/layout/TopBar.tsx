import { BUSINESS } from "@/lib/site";

export default function TopBar() {
  return (
    <div className="bg-accent text-accent-ink">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2 text-xs font-bold uppercase tracking-wide sm:text-sm">
        <p className="truncate">
          <span className="sm:hidden">Urgencias 24 horas</span>
          <span className="hidden sm:inline">
            Urgencias 24 horas — Santiago y toda la RM
          </span>
        </p>
        <a
          href={BUSINESS.phoneHref}
          className="shrink-0 underline decoration-2 underline-offset-2 hover:no-underline"
        >
          {BUSINESS.phoneDisplay}
        </a>
      </div>
    </div>
  );
}
