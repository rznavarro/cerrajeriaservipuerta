# METAPROMPT — Rediseño web: Cerrajería ServiPuerta (cerrajeriaservipuerta.cl)

> Pégalo completo en Claude Code / AI Studio como brief de construcción.

---

## 0. ROL

Actúas como diseñador y desarrollador senior especializado en sitios de **servicios de urgencia**. No estás haciendo una web bonita: estás haciendo una **máquina de llamadas**. Todo lo que no acerque al visitante a tocar "Llamar" o "WhatsApp" en menos de 5 segundos sobra.

---

## 1. CONTEXTO DEL NEGOCIO

**Cerrajería ServiPuerta** — cerrajería a domicilio 24/7 en Santiago, Región Metropolitana (Chile).

- **Promesa central:** llegada en menos de 20 minutos, apertura sin daños a la puerta.
- **Servicios:** apertura de puertas (casas, departamentos, oficinas, vehículos), cambio y reparación de cerraduras, instalación y configuración de **cerraduras digitales** (Smart Lock, EZVIZ, Yale — huella, PIN, tarjeta, app móvil).
- **Diferenciador real:** técnicos certificados + especialización en cerradura digital (esto es lo que sube el ticket; el resto es urgencia de bajo margen).
- **Cobertura:** toda la Región Metropolitana.
- **Contacto:** +56 9 5511 6728 · contacto@servipuerta.cl
- **WhatsApp:** `https://wa.me/56955116728`
- **Redes:** Facebook (`profile.php?id=61573322147769`), Instagram (`@cerrajeria_servipuerta`).
- **Tagline actual:** SEGURIDAD — CONFIANZA — TRANQUILIDAD.

### Las dos audiencias (y sus estados mentales)

| | **A. Emergencia** (80% del tráfico) | **B. Proyecto** (20%, ticket alto) |
|---|---|---|
| Situación | Quedó fuera de su casa/auto, de noche, con frío, en el celular | Quiere modernizar el acceso de su casa/oficina |
| Emoción | Ansiedad, prisa, desconfianza ("¿me van a estafar?") | Curiosidad, comparación, quiere ver antes de decidir |
| Qué necesita ver | Teléfono gigante, "llego en 20 min", "cubro tu comuna", "no daño la puerta" | Fotos reales de instalaciones, marcas, cómo funciona, cotización |
| Acción | Llamada telefónica AHORA | WhatsApp para cotizar |

**Regla de oro del diseño:** la audiencia A manda en el hero y en toda la navegación móvil. La audiencia B vive más abajo y en su propia página.

---

## 2. DIAGNÓSTICO DEL SITIO ACTUAL (qué corregir)

1. **Se ve armado en constructor genérico** (Hostinger/Zyro). No transmite "empresa técnica certificada", transmite "sitio de fin de semana" — y en un rubro donde abunda la estafa, eso cuesta llamadas.
2. **El hero no grita urgencia.** Un negocio 24/7 debe verse como un servicio de emergencia: el teléfono tiene que ser el elemento más grande de la pantalla, no un botón chico arriba.
3. **Cero prueba social en la portada.** Los testimonios están escondidos en una página aparte. Nadie va a hacer clic en "Testimonios" cuando está apurado en la calle; la confianza tiene que estar en el camino, no en un desvío.
4. **No hay evidencia del trabajo real.** No se ven fotos de instalaciones hechas, ni del equipo, ni de la camioneta/técnico. Un rostro real vale más que diez adjetivos.
5. **Falta la información que decide la llamada:** comunas cubiertas, qué pasa con el precio, cuánto se demora, si emite boleta, si hay garantía.
6. **En móvil no hay una barra fija de acción.** El 80% del tráfico de este rubro es móvil y con una sola mano.
7. **Sensación estática.** Nada se mueve, nada responde al scroll ni al hover; se siente un catálogo impreso.
8. **El logo en JPEG con fondo blanco** se ve pegado sobre el diseño. Va en versión limpia (fondo transparente).

---

## 3. DIRECCIÓN VISUAL

**Concepto:** *"Servicio de emergencia, no ferretería."* Referencia mental: la seriedad de un servicio de asistencia en ruta (tipo rescate/ambulancia) mezclada con la precisión de una marca de seguridad premium.

- **Paleta:** base oscura profunda (negro carbón / grafito `#0E0E10`, `#1A1A1E`), superficie clara para las secciones de contenido (`#F5F4F2`), y **un solo acento de urgencia** de alta saturación (ámbar/naranja señalética o rojo de emergencia) usado exclusivamente en CTAs y estados activos. Nada de arcoíris.
- **Tipografía:** sans geométrica de peso fuerte para titulares (Inter Tight / Archivo / Satoshi) en mayúsculas apretadas en los titulares clave; sans neutra legible para cuerpo. Números grandes (el teléfono, "20 min", "24/7") tratados como elemento gráfico, no como texto.
- **Fotografía:** solo imágenes reales del negocio. Si no existen, usar primeros planos técnicos de cerraduras, manos trabajando, detalle de mecanismos — **jamás** stock de gente sonriendo con un maletín.
- **Textura:** sutil grano/ruido en las zonas oscuras, líneas finas de separación, badges tipo etiqueta técnica. Bordes poco redondeados (2–6px): se lee sólido y profesional.
- **Movimiento:** todo el sitio con GSAP + ScrollTrigger + Lenis (smooth scroll). Reveals de texto por línea, contadores que suben (minutos de llegada, años de experiencia, servicios realizados), parallax leve en imágenes, hover con desplazamiento en tarjetas de servicio. **Un pulso permanente y sutil en el botón de llamada** — es lo único que puede llamar la atención sola.

---

## 4. ARQUITECTURA DEL SITIO

### Home (orden exacto)

1. **Barra superior de urgencia** (fija, delgada, acento): "URGENCIAS 24 HORAS — Santiago y toda la RM" + teléfono clicable.
2. **Hero.** Fondo oscuro con imagen/video de cerradura o técnico en terreno. Titular corto y directo ("¿Quedaste fuera? Llegamos en menos de 20 minutos."). Subtítulo con cobertura. **Dos botones enormes: LLAMAR AHORA (`tel:`) y WHATSAPP.** Debajo, tres micro-pruebas en línea: `Sin daños a tu puerta` · `Técnicos certificados` · `Atención 24/7, festivos incluidos`.
3. **Franja de confianza** (marquee lento): boleta/factura · presupuesto antes de trabajar · garantía por escrito · marcas que instalan (Yale, EZVIZ, Smart Lock).
4. **Servicios** — 3 tarjetas grandes con animación al scroll: Apertura de puertas · Cambio de cerraduras · Cerraduras digitales. Cada una con su propio CTA de WhatsApp con mensaje pre-escrito distinto.
5. **Cómo funciona** — 4 pasos numerados (Llamas → Confirmamos precio y tiempo → Llegamos → Abrimos sin dañar y pagas). Esto mata la objeción #1: *"¿cuánto me van a cobrar?"*.
6. **Cerraduras digitales** (bloque destacado, tono más premium) — el producto de ticket alto. Imagen grande, beneficios (huella, PIN, tarjeta, app), marcas, CTA "Cotizar mi cerradura digital".
7. **Prueba social** — testimonios reales en tarjetas, con nombre y comuna. Si hay reseñas de Google/Facebook, mostrarlas textuales con su fuente.
8. **Cobertura** — listado visible de comunas de la RM (bloque SEO real, no decorativo) + mapa.
9. **Preguntas frecuentes** — acordeón: precios, tiempo de llegada, daños, horario nocturno, formas de pago, garantía, autos.
10. **CTA final a pantalla completa** — fondo acento, teléfono gigantesco, WhatsApp secundario.
11. **Footer** — navegación, contacto, redes, horario, aviso "URGENCIAS 24 HORAS".

### Páginas internas (mantener las URLs actuales para no perder posicionamiento)

- `/cerrajero-en-santiago` — Servicios (detalle de cada servicio)
- `/cerraduras-digitales` — landing del producto premium
- `/nosotros` — equipo, certificación, historia, fotos reales
- `/testimonios-de-confianza` — todas las reseñas
- `/cerrajero-a-domicilio` — Preguntas frecuentes
- `/cerrajeria-a-domicilio` — Contacto

### Móvil (prioridad absoluta)

- **Barra fija inferior** siempre visible, dos mitades: `LLAMAR` | `WHATSAPP`. Nunca desaparece, en ninguna página, en ningún scroll.
- Menú hamburguesa con el teléfono destacado dentro.
- Todo el contenido crítico (promesa + botones) visible sin hacer un solo scroll.
- Objetivo de carga: LCP bajo 2s en 4G. El que está apurado no espera.

---

## 5. CONVERSIÓN, SEO Y GEO

**Conversión**
- Cada CTA de WhatsApp lleva mensaje pre-escrito distinto según el contexto (urgencia / cerradura digital / cotización), para que el cliente no tenga que pensar qué escribir.
- El teléfono aparece como `tel:` en al menos 5 puntos del recorrido.
- El formulario de contacto es secundario: el que tiene una urgencia no llena formularios. Validación en vivo y confirmación clara, pero nunca como acción principal.
- Cero pop-ups, cero chat automático que tape los botones.

**SEO local (es el canal de este negocio)**
- Title y meta description por página, con la estructura `servicio + comuna/ciudad`.
- Schema.org: `LocalBusiness` / `Locksmith` con `openingHours: 24/7`, `areaServed` (comunas de la RM), `telephone`, `geo`, `aggregateRating` si hay reseñas reales.
- `FAQPage` schema en el acordeón de preguntas.
- H1 único por página, jerarquía H2/H3 limpia, alt descriptivos en todas las imágenes ("instalación de cerradura digital Yale en departamento, Providencia").
- Sitemap.xml, robots.txt, canonical, favicon propio (ícono de llave sobre el color acento), OG image real.
- Bloque de comunas como texto indexable, no como imagen.

**GEO (búsqueda por IA)**
- Respuestas directas y autocontenidas en las FAQ: cada pregunta se responde en la primera frase, en lenguaje natural ("Sí, atendemos de madrugada. El recargo nocturno es...").
- Datos concretos y citables repartidos en el texto: tiempo de llegada, cobertura, marcas que instalan, años de experiencia, formas de pago.
- NAP (nombre, dirección, teléfono) idéntico en todo el sitio y coherente con Google Business Profile.

---

## 6. STACK Y REGLAS TÉCNICAS

- **Next.js (App Router) + TypeScript + Tailwind CSS**, gestionado con **pnpm**.
- **GSAP + ScrollTrigger** para animaciones, **Lenis** para smooth scroll. Respetar `prefers-reduced-motion`.
- Imágenes con `next/image`, formato moderno, lazy salvo el hero.
- Accesible: contraste AA, foco visible, navegación por teclado, `aria-label` en los botones de llamada.
- Dark mode no es necesario (el sitio ya es oscuro por diseño).
- Español de Chile. Teléfonos con formato `+56 9 XXXX XXXX`. Moneda CLP si se muestran precios.

### Reglas innegociables
1. **Solo contenido real.** Nada de testimonios inventados, cifras falsas, logos de clientes que no existen ni blog de relleno.
2. Si falta material (fotos de trabajos, reseñas, nombres del equipo), **listar explícitamente qué se necesita del cliente** en vez de rellenar con stock.
3. Mantener las URLs existentes. No romper el posicionamiento que ya tienen.
4. El botón de llamada nunca queda a más de un gesto de distancia, en ninguna pantalla.

---

## 7. ENTREGA ESPERADA

Sitio completo, responsive, desplegable en Vercel, con:
- Home + 6 páginas internas construidas.
- Barra fija móvil de llamada/WhatsApp funcionando.
- Animaciones GSAP implementadas (no un placeholder).
- Schema, metadatos y favicon configurados.
- Un listado final de **qué assets reales hay que pedirle al cliente** para reemplazar cualquier placeholder que haya quedado.
