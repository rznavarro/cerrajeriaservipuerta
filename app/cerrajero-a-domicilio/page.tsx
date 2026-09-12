import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import FaqAccordion from "@/components/FaqAccordion";
import JsonLd from "@/components/JsonLd";
import { faqSchema } from "@/lib/schema";
import { FAQ_ITEMS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Preguntas frecuentes — Cerrajero a domicilio",
  description:
    "Precios, tiempo de llegada, daños, horario nocturno, formas de pago y garantía del servicio de cerrajero a domicilio en Santiago.",
  alternates: { canonical: "/cerrajero-a-domicilio" },
};

export default function PreguntasFrecuentesPage() {
  return (
    <>
      <JsonLd data={faqSchema()} />
      <PageHero
        eyebrow="Preguntas frecuentes"
        lines={["Todo lo que necesitas", "saber antes de llamar."]}
        description="Precio, tiempo de llegada, daños, horario nocturno, formas de pago y garantía del servicio de cerrajero a domicilio."
      />

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
        <FaqAccordion items={FAQ_ITEMS} />
      </section>
    </>
  );
}
