import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ScrollFade from "@/components/motion/ScrollFade";
import WhatsAppButton from "@/components/cta/WhatsAppButton";
import { DoorIcon, KeyIcon, LockDigitalIcon } from "@/components/icons/TechIcons";
import { SERVICIOS } from "@/lib/site";

const ICONS = {
  door: DoorIcon,
  key: KeyIcon,
  "lock-digital": LockDigitalIcon,
} as const;

export const metadata: Metadata = {
  title: "Cerrajero en Santiago — Servicios 24/7",
  description:
    "Apertura de puertas, cambio de cerraduras y cerraduras digitales en Santiago y toda la Región Metropolitana. Técnicos certificados, llegada en menos de 20 minutos.",
  alternates: { canonical: "/cerrajero-en-santiago" },
};

export default function ServiciosPage() {
  return (
    <>
      <PageHero
        eyebrow="Servicios"
        lines={["Cerrajero en Santiago,", "para cada urgencia."]}
        description="Apertura de puertas, cambio de cerraduras y cerraduras digitales. Técnicos certificados, disponibles 24 horas en toda la Región Metropolitana."
      />

      <section className="mx-auto max-w-5xl space-y-16 px-4 py-16 sm:px-6 sm:py-24">
        {SERVICIOS.map((servicio, i) => {
          const Icon = ICONS[servicio.icon];
          return (
            <ScrollFade
              key={servicio.slug}
              className="grid gap-8 border-b border-line/60 pb-16 last:border-0 last:pb-0 lg:grid-cols-[auto_1fr] lg:items-start lg:gap-12"
            >
              <div
                className={`flex h-24 w-24 items-center justify-center rounded-lg border border-line/70 bg-ink-900 p-5 text-accent ${
                  i % 2 === 0 ? "" : "lg:order-2"
                }`}
              >
                <Icon className="h-full w-full" />
              </div>
              <div>
                <h2 className="font-display text-2xl font-extrabold uppercase tracking-tight text-paper sm:text-3xl">
                  {servicio.titulo}
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-paper/70">
                  {servicio.detalle}
                </p>
                <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                  {servicio.puntos.map((p) => (
                    <li
                      key={p}
                      className="flex items-center gap-2 text-sm text-paper/75"
                    >
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {p}
                    </li>
                  ))}
                </ul>
                <WhatsAppButton
                  size="md"
                  variant="solid"
                  className="mt-7"
                  message={servicio.waMessage}
                  label="Cotizar este servicio"
                />
              </div>
            </ScrollFade>
          );
        })}
      </section>
    </>
  );
}
