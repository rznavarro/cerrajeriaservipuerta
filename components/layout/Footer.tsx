import Link from "next/link";
import { BUSINESS, NAV_LINKS } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-line/60 bg-ink-950 pb-24 pt-14 lg:pb-14">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-display text-xl font-extrabold uppercase tracking-tight text-paper">
            Servi<span className="text-accent">Puerta</span>
          </p>
          <p className="mt-3 max-w-xs text-sm text-paper/60">
            Cerrajería a domicilio 24/7 en Santiago y toda la Región
            Metropolitana. {BUSINESS.tagline}.
          </p>
          <p className="mt-4 inline-flex items-center gap-2 rounded-md border border-accent/40 bg-accent/10 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-accent">
            Urgencias 24 horas
          </p>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-paper/40">
            Navegación
          </p>
          <ul className="mt-4 space-y-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-paper/70 hover:text-accent"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-paper/40">
            Contacto
          </p>
          <ul className="mt-4 space-y-2 text-sm text-paper/70">
            <li>
              <a href={BUSINESS.phoneHref} className="hover:text-accent">
                {BUSINESS.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${BUSINESS.email}`}
                className="hover:text-accent"
              >
                {BUSINESS.email}
              </a>
            </li>
            <li>{BUSINESS.hours}</li>
            <li className="flex gap-4 pt-2">
              <a
                href={BUSINESS.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent"
              >
                Facebook
              </a>
              <a
                href={BUSINESS.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-line/40 px-4 pt-6 text-xs text-paper/40 sm:px-6">
        © {new Date().getFullYear()} {BUSINESS.name}. Todos los derechos
        reservados.
      </div>
    </footer>
  );
}
