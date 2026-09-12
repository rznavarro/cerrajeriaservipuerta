import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import CallButton from "@/components/cta/CallButton";
import WhatsAppButton from "@/components/cta/WhatsAppButton";
import { BUSINESS, WA_MESSAGES } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contacto — Cerrajería a domicilio",
  description:
    "Contacta a Cerrajería ServiPuerta: teléfono, WhatsApp, correo y redes sociales. Atención 24/7 en Santiago y toda la Región Metropolitana.",
  alternates: { canonical: "/cerrajeria-a-domicilio" },
};

export default function ContactoPage() {
  return (
    <>
      <PageHero
        eyebrow="Contacto"
        lines={["Si es urgente,", "mejor llámanos."]}
        description="Para emergencias, el teléfono y WhatsApp son siempre más rápidos que un formulario. Úsalo para cotizaciones sin apuro."
        waMessage={WA_MESSAGES.contacto}
      />

      <section className="mx-auto grid max-w-5xl gap-12 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <h2 className="font-display text-xl font-extrabold uppercase tracking-tight text-paper">
            Contacto directo
          </h2>
          <ul className="mt-6 space-y-4 text-sm text-paper/75">
            <li>
              <span className="block text-xs font-bold uppercase tracking-widest text-paper/40">
                Teléfono / WhatsApp
              </span>
              <a href={BUSINESS.phoneHref} className="text-lg font-semibold text-paper hover:text-accent">
                {BUSINESS.phoneDisplay}
              </a>
            </li>
            <li>
              <span className="block text-xs font-bold uppercase tracking-widest text-paper/40">
                Correo
              </span>
              <a
                href={`mailto:${BUSINESS.email}`}
                className="text-lg font-semibold text-paper hover:text-accent"
              >
                {BUSINESS.email}
              </a>
            </li>
            <li>
              <span className="block text-xs font-bold uppercase tracking-widest text-paper/40">
                Horario
              </span>
              {BUSINESS.hours}
            </li>
            <li>
              <span className="block text-xs font-bold uppercase tracking-widest text-paper/40">
                Cobertura
              </span>
              Santiago y toda la Región Metropolitana
            </li>
            <li className="flex gap-4 pt-2">
              <a href={BUSINESS.facebookUrl} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
                Facebook
              </a>
              <a href={BUSINESS.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
                Instagram
              </a>
            </li>
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CallButton size="md" pulse />
            <WhatsAppButton size="md" message={WA_MESSAGES.contacto} />
          </div>
        </div>

        <div className="rounded-lg border border-line/70 bg-ink-900 p-6 sm:p-8">
          <h2 className="font-display text-xl font-extrabold uppercase tracking-tight text-paper">
            Escríbenos (no urgente)
          </h2>
          <p className="mt-2 text-sm text-paper/60">
            Completa el formulario y lo enviamos directo a nuestro WhatsApp.
          </p>
          <div className="mt-6">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
