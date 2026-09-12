import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Testimonials from "@/components/Testimonials";

export const metadata: Metadata = {
  title: "Testimonios de confianza",
  description:
    "Opiniones reales de clientes de Cerrajería ServiPuerta en Santiago y la Región Metropolitana.",
  alternates: { canonical: "/testimonios-de-confianza" },
};

export default function TestimoniosPage() {
  return (
    <>
      <PageHero
        eyebrow="Testimonios"
        lines={["Confianza que se", "construye llamada a llamada."]}
        description="Estas son las opiniones reales de clientes que hemos atendido en Santiago y la Región Metropolitana."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <Testimonials />
      </section>
    </>
  );
}
