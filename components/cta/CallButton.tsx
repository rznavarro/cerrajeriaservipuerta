import clsx from "clsx";
import { BUSINESS } from "@/lib/site";

type Props = {
  size?: "lg" | "md" | "sm";
  className?: string;
  label?: string;
  pulse?: boolean;
};

const sizes = {
  lg: "px-8 py-5 text-lg sm:text-xl",
  md: "px-6 py-4 text-base",
  sm: "px-4 py-3 text-sm",
};

export default function CallButton({
  size = "md",
  className,
  label = "Llamar ahora",
  pulse = false,
}: Props) {
  return (
    <a
      href={BUSINESS.phoneHref}
      aria-label={`Llamar ahora a ${BUSINESS.name} al ${BUSINESS.phoneDisplay}`}
      className={clsx(
        "inline-flex items-center justify-center gap-3 rounded-md bg-accent font-display font-extrabold uppercase tracking-tight text-accent-ink transition-transform hover:scale-[1.02] hover:bg-accent-dark active:scale-[0.98]",
        pulse && "animate-pulse-cta",
        sizes[size],
        className
      )}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-[1.1em] w-[1.1em] shrink-0"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z" />
      </svg>
      <span>{label}</span>
    </a>
  );
}
