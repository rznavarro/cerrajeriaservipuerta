import { BUSINESS, TESTIMONIOS } from "@/lib/site";
import ScrollFade from "@/components/motion/ScrollFade";

export default function Testimonials() {
  if (TESTIMONIOS.length === 0) {
    return (
      <ScrollFade className="rounded-lg border border-dashed border-line bg-ink-900 p-8 text-center sm:p-12">
        <p className="font-display text-lg font-extrabold uppercase tracking-tight text-paper sm:text-xl">
          Reseñas verificadas, en camino
        </p>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-paper/65 sm:text-base">
          Aquí vas a ver las opiniones reales de clientes de Santiago y la
          Región Metropolitana, con nombre y comuna. Mientras las cargamos,
          puedes revisar nuestras reseñas directamente en Google o
          Facebook.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
          <a
            href={BUSINESS.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-accent underline-offset-4 hover:underline"
          >
            Ver Facebook →
          </a>
          <a
            href={BUSINESS.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-accent underline-offset-4 hover:underline"
          >
            Ver Instagram →
          </a>
        </div>
      </ScrollFade>
    );
  }

  return (
    <ScrollFade stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {TESTIMONIOS.map((t) => (
        <blockquote
          key={`${t.nombre}-${t.comuna}`}
          className="rounded-lg border border-line/70 bg-ink-900 p-6"
        >
          <p className="text-sm leading-relaxed text-paper/80">
            &ldquo;{t.texto}&rdquo;
          </p>
          <footer className="mt-4 text-sm font-semibold text-paper">
            {t.nombre}{" "}
            <span className="font-normal text-paper/50">· {t.comuna}</span>
          </footer>
        </blockquote>
      ))}
    </ScrollFade>
  );
}
