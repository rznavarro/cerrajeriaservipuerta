# Assets reales pendientes — Cerrajería ServiPuerta

El sitio está construido y funcional con contenido 100% real (datos de
contacto, servicios, comunas, FAQ). Por la regla de "solo contenido real"
del brief, **no se inventaron** fotos, testimonios, cifras ni nombres de
equipo. Estas son las piezas que Cerrajería ServiPuerta debe entregar para
reemplazar los espacios que hoy están resueltos con ilustraciones técnicas
o estados honestos de "aún no disponible":

## 1. Fotografía real (prioridad alta)
- Fotos de trabajos terminados: apertura de puertas, cambio de cerraduras,
  instalación de cerraduras digitales (Yale, EZVIZ, Smart Lock).
- Fotos del/los técnico(s) en terreno (rostro real, uniformado si aplica).
- Foto de la camioneta o vehículo de servicio, si se usa uno con branding.
- 3–5 fotos horizontales para reemplazar los bloques ilustrados de:
  Hero, sección "Cerraduras digitales" y "Nosotros".
- Formato sugerido: JPG/WebP, mínimo 1600px de ancho, buena luz, sin marcas
  de agua de terceros.

## 2. Reseñas y prueba social
- Export o captura de reseñas reales de Google Business Profile o Facebook
  (nombre del cliente + comuna + texto de la reseña + fecha).
- Autorización explícita del cliente si se va a mostrar su nombre completo.
- Con esto se completa `lib/site.ts` → arreglo `TESTIMONIOS`, que hoy está
  vacío a propósito (ver `components/Testimonials.tsx`).

## 3. Equipo y empresa (`/nosotros`)
- Nombres y cargos del equipo (si quieren mostrarse) o al menos "N técnicos
  certificados en terreno".
- Certificaciones formales si existen (SEC, capacitación de marca Yale/EZVIZ,
  etc.) para citarlas con nombre real en vez de lenguaje genérico.
- Año de inicio de operaciones y cifras reales si se quieren mostrar como
  contador (años de experiencia, servicios realizados). Hoy solo se muestran
  las cifras que ya son verificables por el propio brief: tiempo de llegada
  (<20 min), comunas cubiertas (52, dato geográfico público) y 24/7.

## 4. Identidad visual
- Logo en versión vectorial o PNG con fondo transparente (el brief menciona
  que el logo actual es un JPEG con fondo blanco). Se usó un ícono de llave
  generado en SVG como favicon temporal (`app/icon.svg`, `app/apple-icon.tsx`)
  — reemplazar por el logo real cuando esté disponible.
- Guía de marca si existe (tipografía, colores) para validar que la paleta
  ámbar/carbón elegida sea consistente con materiales impresos u otras
  piezas ya en uso.

## 5. Datos operativos a confirmar
- Recargo nocturno exacto (la FAQ lo menciona en términos generales; si hay
  un monto o rango fijo, se puede citar directamente y mejora el SEO/GEO).
- Rango de precios referenciales por servicio, si quieren mostrarse
  (mejora conversión en la audiencia "proyecto").
- Dirección física, si existe una oficina/base (hoy el sitio solo declara
  cobertura regional, sin dirección puntual, en el schema `LocalBusiness`).

## 6. Dominio y despliegue
- Confirmar el dominio final de producción (se usó
  `https://www.cerrajeriaservipuerta.cl` como `SITE_URL` en `lib/site.ts`
  para metadatos, sitemap y Open Graph — actualizar si cambia).
- Cuenta de Google Search Console / Google Business Profile vinculada para
  verificar el sitio una vez publicado en Vercel.

---

Ninguno de estos puntos bloquea el lanzamiento: el sitio funciona,
convierte y es indexable sin ellos. Son mejoras de contenido que suben
directamente la tasa de llamadas (fotos y reseñas reales) y el
posicionamiento local (dirección, recargo nocturno, certificaciones).
