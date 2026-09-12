import Link from "next/link";
import RevealText from "@/components/motion/RevealText";
import ScrollFade from "@/components/motion/ScrollFade";
import StatCounter from "@/components/motion/StatCounter";
import TrustMarquee from "@/components/motion/TrustMarquee";
import HeroGlow from "@/components/HeroGlow";
import ServiceCard from "@/components/ServiceCard";
import FaqAccordion from "@/components/FaqAccordion";
import CoverageList from "@/components/CoverageList";
import Testimonials from "@/components/Testimonials";
import CallButton from "@/components/cta/CallButton";
import WhatsAppButton from "@/components/cta/WhatsAppButton";
import {
  COMO_FUNCIONA,
  COMUNAS_RM,
  FAQ_ITEMS,
  MICRO_PRUEBAS,
  SERVICIOS,
  WA_MESSAGES,
} from "@/lib/site";
import {
  ClockIcon,
  FingerprintIcon,
  LockDigitalIcon,
  ReceiptIcon,
  ShieldIcon,
} from "@/components/icons/TechIcons";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="grain relative overflow-hidden bg-ink-950">
        <HeroGlow />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:py-32">
          <div className="max-w-3xl">
            <p className="mb-5 inline-flex items-center gap-2 rounded-md border border-accent/40 bg-accent/10 px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-accent">
              Urgencias 24 horas · Santiago y toda la RM
            </p>
            <RevealText
              as="h1"
              lines={["¿Quedaste fuera?", "Llegamos en menos de", "20 minutos."]}
              className="font-display text-5xl font-black uppercase leading-[0.95] tracking-tight text-paper sm:text-6xl lg:text-7xl"
            />
            <p className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-paper/70">
              Cerrajero a domicilio 24/7 en toda la Región Metropolitana.
              Apertura sin dañar tu puerta, técnicos certificados y
              especialistas en cerraduras digitales.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <CallButton size="lg" pulse label="Llamar ahora" />
              <WhatsAppButton
                size="lg"
                variant="outline"
                message={WA_MESSAGES.urgencia}
                label="WhatsApp"
              />
            </div>

            <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
              {MICRO_PRUEBAS.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-sm font-semibold text-paper/70"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <TrustMarquee />

      {/* Servicios */}
      <section id="servicios" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-widest text-accent">
            Servicios
          </p>
          <RevealText
            as="h2"
            lines={["Lo resolvemos", "en el momento."]}
            className="mt-3 font-display text-3xl font-extrabold uppercase leading-tight tracking-tight text-paper sm:text-4xl"
          />
        </div>
        <ScrollFade
          stagger
          className="mt-12 grid gap-6 md:grid-cols-3"
        >
          {SERVICIOS.map((servicio) => (
            <ServiceCard key={servicio.slug} servicio={servicio} />
          ))}
        </ScrollFade>
      </section>

      {/* Cómo funciona */}
      <section className="border-y border-line/60 bg-ink-900">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-widest text-accent">
              Cómo funciona
            </p>
            <RevealText
              as="h2"
              lines={["Sabes el precio", "antes de que lleguemos."]}
              className="mt-3 font-display text-3xl font-extrabold uppercase leading-tight tracking-tight text-paper sm:text-4xl"
            />
          </div>
          <ScrollFade
            stagger
            className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
          >
            {COMO_FUNCIONA.map((paso) => (
              <div key={paso.paso}>
                <span className="font-display text-5xl font-black text-accent/40">
                  {paso.paso}
                </span>
                <h3 className="mt-3 font-display text-lg font-extrabold uppercase tracking-tight text-paper">
                  {paso.titulo}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-paper/65">
                  {paso.detalle}
                </p>
              </div>
            ))}
          </ScrollFade>
        </div>
      </section>

      {/* Cerraduras digitales */}
      <section className="relative overflow-hidden bg-ink-950">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-2 lg:items-center">
          <ScrollFade>
            <div className="flex aspect-square max-w-md items-center justify-center rounded-lg border border-accent/30 bg-gradient-to-br from-ink-900 to-ink-950 p-16">
              <LockDigitalIcon className="h-full w-full text-accent" />
            </div>
          </ScrollFade>
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-accent">
              Producto premium
            </p>
            <RevealText
              as="h2"
              lines={["Cerraduras digitales", "Yale, EZVIZ y Smart Lock"]}
              className="mt-3 font-display text-3xl font-extrabold uppercase leading-tight tracking-tight text-paper sm:text-4xl"
            />
            <p className="mt-5 max-w-lg text-base leading-relaxed text-paper/70">
              Instalamos y configuramos cerraduras digitales de marcas
              reconocidas: acceso con huella, PIN, tarjeta o desde la app de
              tu celular. Ideal para casas, oficinas y propiedades en
              arriendo.
            </p>
            <div className="mt-6 flex flex-wrap gap-6">
              <div className="flex items-center gap-2 text-sm text-paper/70">
                <FingerprintIcon className="h-6 w-6 text-accent" /> Huella
                digital
              </div>
              <div className="flex items-center gap-2 text-sm text-paper/70">
                <ShieldIcon className="h-6 w-6 text-accent" /> PIN y tarjeta
              </div>
              <div className="flex items-center gap-2 text-sm text-paper/70">
                <ClockIcon className="h-6 w-6 text-accent" /> Control por app
              </div>
            </div>
            <WhatsAppButton
              size="lg"
              variant="solid"
              className="mt-8"
              message={WA_MESSAGES.cerraduraDigital}
              label="Cotizar mi cerradura digital"
            />
          </div>
        </div>
      </section>

      {/* Prueba social */}
      <section className="border-t border-line/60 bg-ink-900">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-widest text-accent">
              Confianza
            </p>
            <RevealText
              as="h2"
              lines={["Lo que dicen", "nuestros clientes."]}
              className="mt-3 font-display text-3xl font-extrabold uppercase leading-tight tracking-tight text-paper sm:text-4xl"
            />
          </div>
          <div className="mt-12">
            <Testimonials />
          </div>
        </div>
      </section>

      {/* Cobertura */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-widest text-accent">
            Cobertura
          </p>
          <RevealText
            as="h2"
            lines={["Cubrimos toda la", "Región Metropolitana."]}
            className="mt-3 font-display text-3xl font-extrabold uppercase leading-tight tracking-tight text-paper sm:text-4xl"
          />
        </div>
        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          <StatCounter value={20} suffix=" min" label="Tiempo de llegada" />
          <StatCounter value={COMUNAS_RM.length} label="Comunas cubiertas" />
          <StatCounter value={24} suffix="/7" label="Atención" />
        </div>
        <div className="mt-12">
          <CoverageList />
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-line/60 bg-ink-900">
        <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 sm:py-28">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-accent">
              Preguntas frecuentes
            </p>
            <RevealText
              as="h2"
              lines={["Lo que la gente", "nos pregunta más."]}
              className="mt-3 font-display text-3xl font-extrabold uppercase leading-tight tracking-tight text-paper sm:text-4xl"
              lineClassName="mx-auto"
            />
          </div>
          <div className="mt-12">
            <FaqAccordion items={FAQ_ITEMS.slice(0, 6)} />
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/cerrajero-a-domicilio"
              className="text-sm font-semibold text-accent underline-offset-4 hover:underline"
            >
              Ver todas las preguntas frecuentes →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="grain relative overflow-hidden bg-accent py-20 text-accent-ink sm:py-28">
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
          <p className="flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-widest">
            <ReceiptIcon className="h-5 w-5" /> Presupuesto antes de trabajar
          </p>
          <h2 className="mt-4 font-display text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-6xl">
            Llámanos ahora
          </h2>
          <a
            href="tel:+56955116728"
            className="mt-6 block font-display text-5xl font-black tracking-tight sm:text-7xl"
          >
            +56 9 5511 6728
          </a>
          <div className="mt-10 flex justify-center">
            <WhatsAppButton
              size="lg"
              variant="solid"
              className="!bg-ink-950 !text-paper hover:!bg-ink-900"
              message={WA_MESSAGES.urgencia}
              label="Escribir por WhatsApp"
            />
          </div>
        </div>
      </section>
    </>
  );
}
