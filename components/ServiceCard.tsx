import Link from "next/link";
import { DoorIcon, KeyIcon, LockDigitalIcon } from "@/components/icons/TechIcons";
import WhatsAppButton from "@/components/cta/WhatsAppButton";
import type { SERVICIOS } from "@/lib/site";

const ICONS = {
  door: DoorIcon,
  key: KeyIcon,
  "lock-digital": LockDigitalIcon,
} as const;

export default function ServiceCard({
  servicio,
}: {
  servicio: (typeof SERVICIOS)[number];
}) {
  const Icon = ICONS[servicio.icon];

  return (
    <div className="group flex h-full flex-col rounded-lg border border-line/70 bg-ink-900 p-7 transition-transform duration-300 hover:-translate-y-1.5 hover:border-accent/50">
      <Icon className="h-12 w-12 text-accent" />
      <h3 className="mt-6 font-display text-xl font-extrabold uppercase tracking-tight text-paper">
        {servicio.titulo}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-paper/65">
        {servicio.resumen}
      </p>
      <ul className="mt-5 space-y-2 text-sm text-paper/70">
        {servicio.puntos.map((p) => (
          <li key={p} className="flex gap-2">
            <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-accent" />
            {p}
          </li>
        ))}
      </ul>
      <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
        <WhatsAppButton
          size="sm"
          message={servicio.waMessage}
          label="Cotizar por WhatsApp"
        />
        <Link
          href="/cerrajero-en-santiago"
          className="text-sm font-semibold text-paper/60 underline-offset-4 hover:text-accent hover:underline"
        >
          Ver detalle
        </Link>
      </div>
    </div>
  );
}
