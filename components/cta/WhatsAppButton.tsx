import clsx from "clsx";
import { waLink } from "@/lib/site";

type Props = {
  size?: "lg" | "md" | "sm";
  className?: string;
  label?: string;
  message: string;
  variant?: "solid" | "outline";
};

const sizes = {
  lg: "px-8 py-5 text-lg sm:text-xl",
  md: "px-6 py-4 text-base",
  sm: "px-4 py-3 text-sm",
};

export default function WhatsAppButton({
  size = "md",
  className,
  label = "WhatsApp",
  message,
  variant = "outline",
}: Props) {
  return (
    <a
      href={waLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Escribir por WhatsApp: ${label}`}
      className={clsx(
        "inline-flex items-center justify-center gap-3 rounded-md font-display font-extrabold uppercase tracking-tight transition-transform hover:scale-[1.02] active:scale-[0.98]",
        variant === "solid"
          ? "bg-paper text-ink-950 hover:bg-paper-dim"
          : "border-2 border-paper/30 text-paper hover:border-paper/70",
        sizes[size],
        className
      )}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-[1.1em] w-[1.1em] shrink-0"
        fill="currentColor"
      >
        <path d="M17.6 6.32A8.86 8.86 0 0 0 3.2 16.8L2 22l5.36-1.16a8.86 8.86 0 0 0 4.25 1.08h.01c4.9 0 8.87-3.97 8.87-8.87a8.8 8.8 0 0 0-2.9-6.73Zm-6 13.6h-.01a7.4 7.4 0 0 1-3.76-1.03l-.27-.16-2.8.73.75-2.73-.18-.28a7.36 7.36 0 0 1-1.13-3.93 7.4 7.4 0 1 1 7.4 7.4Zm4.06-5.54c-.22-.11-1.3-.64-1.5-.72-.2-.07-.35-.11-.5.11-.15.22-.57.72-.7.87-.13.15-.26.17-.48.06a6.1 6.1 0 0 1-1.79-1.1 6.7 6.7 0 0 1-1.24-1.54c-.13-.22-.01-.34.1-.45.1-.1.22-.26.33-.39.11-.13.15-.22.22-.37.07-.15.04-.28-.02-.39-.06-.11-.5-1.2-.68-1.65-.18-.43-.36-.37-.5-.38h-.43c-.15 0-.39.06-.59.28-.2.22-.77.75-.77 1.83s.79 2.12.9 2.27c.11.15 1.56 2.38 3.78 3.34.53.23.94.36 1.26.47.53.17 1.01.14 1.39.09.42-.06 1.3-.53 1.49-1.05.18-.51.18-.95.13-1.05-.05-.1-.2-.15-.42-.26Z" />
      </svg>
      <span>{label}</span>
    </a>
  );
}
