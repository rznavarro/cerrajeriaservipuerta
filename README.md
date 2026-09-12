# Cerrajería ServiPuerta

Sitio web de Cerrajería ServiPuerta (cerrajería a domicilio 24/7, Santiago
y Región Metropolitana), construido con Next.js (App Router) + TypeScript +
Tailwind CSS, con animaciones GSAP/ScrollTrigger y smooth scroll con Lenis.

## Desarrollo

```bash
pnpm install
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000).

```bash
pnpm build   # build de producción
pnpm start   # sirve el build de producción
pnpm lint    # eslint
```

## Estructura

- `app/` — páginas (App Router): home + 6 páginas internas, `sitemap.ts`,
  `robots.ts`, favicon/OG generados con `next/og`.
- `components/` — layout (`TopBar`, `Header`, `MobileActionBar`, `Footer`),
  CTAs (`CallButton`, `WhatsAppButton`), animación (`RevealText`,
  `ScrollFade`, `StatCounter`, `TrustMarquee`) y secciones de contenido.
- `lib/site.ts` — todos los datos reales del negocio (contacto, servicios,
  comunas, FAQ). Editar aquí para actualizar contenido del sitio.
- `lib/schema.ts` — JSON-LD (`LocalBusiness`/`Locksmith`, `FAQPage`).

## Contenido pendiente del cliente

Ver [`ASSETS-NEEDED.md`](./ASSETS-NEEDED.md): fotos reales, reseñas
verificadas, datos de equipo y logo en formato transparente. El sitio
funciona y convierte sin ellos; son mejoras de contenido, no bloqueos.

## Despliegue

Pensado para desplegar en [Vercel](https://vercel.com/new). Antes de
publicar, actualizar `SITE_URL` en `lib/site.ts` si el dominio final
cambia.
