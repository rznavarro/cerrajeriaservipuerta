import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ScrollFade from "@/components/motion/ScrollFade";
import FaqAccordion from "@/components/FaqAccordion";
import WhatsAppButton from "@/components/cta/WhatsAppButton";
import {
  FingerprintIcon,
  LockDigitalIcon,
  ShieldIcon,
  ClockIcon,
} from "@/components/icons/TechIcons";
import { WA_MESSAGES } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cerraduras digitales Yale, EZVIZ y Smart Lock",
  description:
    "Instalación y configuración de cerraduras digitales en Santiago y la Región Metropolitana: huella, PIN, tarjeta y app móvil. Marcas Yale, EZVIZ y Smart Lock.",
  alternates: { canonical: "/cerraduras-digitales" },
};

const BENEFICIOS = [
  {
    icon: FingerprintIcon,
    titulo: "Huella digital",
    detalle: "Abre sin llaves, con reconocimiento de huella para cada integrante de la casa u oficina.",
  },
  {
    icon: ShieldIcon,
    titulo: "PIN y tarjeta",
    detalle: "Clave numérica o tarjeta de proximidad como respaldo, con gestión de usuarios y accesos temporales.",
  },
  {
    icon: ClockIcon,
    titulo: "Control por app",
    detalle: "Abre, revisa el historial de accesos y recibe notificaciones desde el celular, estés donde estés.",
  },
];

const MARCAS = ["Yale", "EZVIZ", "Smart Lock"];

const FAQ_DIGITAL = [
  {
    pregunta: "¿Sirve para departamentos en arriendo?",
    respuesta:
      "Sí, es una de las aplicaciones más pedidas: permite dar acceso temporal a arrendatarios sin duplicar llaves físicas y revocar el acceso cuando termina el contrato.",
  },
  {
    pregunta: "¿Qué pasa si se corta la luz o se acaba la batería?",
    respuesta:
      "Las cerraduras digitales que instalamos funcionan con baterías reemplazables y avisan con anticipación cuando están bajas. Además, mantienen una entrada de respaldo con llave física.",
  },
  {
    pregunta: "¿Puedo dar acceso a varias personas?",
    respuesta:
      "Sí, configuramos múltiples huellas, PIN individuales o tarjetas, y puedes administrar quién tiene acceso desde la app.",
  },
  {
    pregunta: "¿Cuánto se demora la instalación?",
    respuesta:
      "La instalación y configuración completa se realiza en la misma visita, normalmente en menos de una hora dependiendo del modelo y la puerta.",
  },
];

export default function CerradurasDigitalesPage() {
  return (
    <>
      <PageHero
        eyebrow="Producto premium"
        lines={["Moderniza el acceso", "de tu casa u oficina."]}
        description="Instalamos y configuramos cerraduras digitales Yale, EZVIZ y Smart Lock: huella, PIN, tarjeta o control desde tu celular."
        waMessage={WA_MESSAGES.cerraduraDigital}
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {MARCAS.map((marca) => (
            <span
              key={marca}
              className="font-display text-xl font-extrabold uppercase tracking-tight text-paper/50"
            >
              {marca}
            </span>
          ))}
        </div>

        <ScrollFade
          stagger
          className="mt-16 grid gap-6 sm:grid-cols-3"
        >
          {BENEFICIOS.map((b) => (
            <div
              key={b.titulo}
              className="rounded-lg border border-line/70 bg-ink-900 p-7"
            >
              <b.icon className="h-10 w-10 text-accent" />
              <h3 className="mt-5 font-display text-lg font-extrabold uppercase tracking-tight text-paper">
                {b.titulo}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-paper/65">
                {b.detalle}
              </p>
            </div>
          ))}
        </ScrollFade>

        <ScrollFade className="mt-20 grid gap-10 rounded-lg border border-accent/30 bg-ink-900 p-8 sm:p-12 lg:grid-cols-2 lg:items-center">
          <div className="mx-auto flex aspect-square max-w-xs items-center justify-center rounded-lg bg-ink-950 p-14">
            <LockDigitalIcon className="h-full w-full text-accent" />
          </div>
          <div>
            <h2 className="font-display text-2xl font-extrabold uppercase tracking-tight text-paper sm:text-3xl">
              Cotiza tu cerradura digital
            </h2>
            <p className="mt-4 text-base leading-relaxed text-paper/70">
              Cuéntanos el modelo de puerta y la marca que te interesa, y te
              confirmamos disponibilidad, precio e instalación por
              WhatsApp.
            </p>
            <WhatsAppButton
              size="lg"
              variant="solid"
              className="mt-7"
              message={WA_MESSAGES.cerraduraDigital}
              label="Cotizar ahora"
            />
          </div>
        </ScrollFade>

        <div className="mt-24">
          <h2 className="text-center font-display text-2xl font-extrabold uppercase tracking-tight text-paper sm:text-3xl">
            Preguntas sobre cerraduras digitales
          </h2>
          <div className="mx-auto mt-10 max-w-3xl">
            <FaqAccordion items={FAQ_DIGITAL} />
          </div>
        </div>
      </section>
    </>
  );
}
