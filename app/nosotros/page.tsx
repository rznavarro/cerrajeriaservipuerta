import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ScrollFade from "@/components/motion/ScrollFade";
import { ClockIcon, ReceiptIcon, ShieldIcon } from "@/components/icons/TechIcons";
import { BUSINESS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Conoce a Cerrajería ServiPuerta: técnicos certificados especializados en cerrajería de urgencia y cerraduras digitales en Santiago y la Región Metropolitana.",
  alternates: { canonical: "/nosotros" },
};

const COMPROMISOS = [
  {
    icon: ShieldIcon,
    titulo: "Técnicos certificados",
    detalle:
      "Cada técnico que enviamos está capacitado en apertura sin daño, cambio de cerraduras y en la instalación de cerraduras digitales Yale, EZVIZ y Smart Lock.",
  },
  {
    icon: ClockIcon,
    titulo: "Disponibilidad real 24/7",
    detalle:
      "Atendemos de día, de noche y en festivos, con el mismo estándar de servicio y el mismo compromiso de llegada en menos de 20 minutos.",
  },
  {
    icon: ReceiptIcon,
    titulo: "Transparencia primero",
    detalle:
      "Confirmamos el precio antes de intervenir y entregamos boleta o factura y garantía por escrito por cada trabajo realizado.",
  },
];

export default function NosotrosPage() {
  return (
    <>
      <PageHero
        eyebrow="Nosotros"
        lines={["Especialistas en acceso,", "no ferretería de barrio."]}
        description="Cerrajería ServiPuerta nace para atender emergencias de acceso en Santiago con el estándar de un servicio técnico serio: certificación, transparencia y especialización en cerraduras digitales."
      />

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24">
        <ScrollFade stagger className="grid gap-6 sm:grid-cols-3">
          {COMPROMISOS.map((c) => (
            <div
              key={c.titulo}
              className="rounded-lg border border-line/70 bg-ink-900 p-7"
            >
              <c.icon className="h-10 w-10 text-accent" />
              <h2 className="mt-5 font-display text-lg font-extrabold uppercase tracking-tight text-paper">
                {c.titulo}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-paper/65">
                {c.detalle}
              </p>
            </div>
          ))}
        </ScrollFade>

        <ScrollFade className="mt-16 rounded-lg border border-dashed border-line bg-ink-900 p-8 text-center sm:p-12">
          <p className="font-display text-lg font-extrabold uppercase tracking-tight text-paper">
            Fotos del equipo, próximamente
          </p>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-paper/65">
            Aquí vas a conocer al equipo técnico que te atiende: fotos
            reales del personal, la camioneta de servicio y trabajos
            realizados. Esta sección se completa con material real que nos
            entregue el cliente — sin fotos de stock.
          </p>
        </ScrollFade>

        <div className="mt-16 text-center">
          <p className="text-sm text-paper/60">
            ¿Tienes una emergencia ahora?{" "}
            <a href={BUSINESS.phoneHref} className="font-semibold text-accent hover:underline">
              Llámanos al {BUSINESS.phoneDisplay}
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
