export const SITE_URL = "https://www.cerrajeriaservipuerta.cl";

export const BUSINESS = {
  name: "Cerrajería ServiPuerta",
  legalName: "Cerrajería ServiPuerta",
  tagline: "SEGURIDAD · CONFIANZA · TRANQUILIDAD",
  phoneDisplay: "+56 9 5511 6728",
  phoneHref: "tel:+56955116728",
  whatsappNumber: "56955116728",
  email: "contacto@servipuerta.cl",
  facebookUrl: "https://www.facebook.com/profile.php?id=61573322147769",
  instagramUrl: "https://www.instagram.com/cerrajeria_servipuerta",
  instagramHandle: "@cerrajeria_servipuerta",
  addressRegion: "Región Metropolitana",
  addressCountry: "CL",
  arrivalPromise: "Menos de 20 minutos",
  hours: "Abierto 24 horas, los 7 días, festivos incluidos",
} as const;

export function waLink(message: string) {
  return `https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const WA_MESSAGES = {
  urgencia:
    "Hola, quedé afuera y necesito un cerrajero urgente. Mi dirección es: ",
  cerraduraDigital:
    "Hola, quiero cotizar la instalación de una cerradura digital.",
  cotizacion:
    "Hola, quiero pedir una cotización para un servicio de cerrajería.",
  aperturaPuertas: "Hola, necesito apertura de puerta con urgencia. Mi dirección es: ",
  cambioCerraduras: "Hola, quiero cambiar/reparar una cerradura. ¿Me pueden cotizar?",
  vehiculos: "Hola, necesito apertura de un vehículo. Mi dirección es: ",
  contacto: "Hola, tengo una consulta para Cerrajería ServiPuerta.",
} as const;

export const NAV_LINKS = [
  { href: "/cerrajero-en-santiago", label: "Servicios" },
  { href: "/cerraduras-digitales", label: "Cerraduras digitales" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/testimonios-de-confianza", label: "Testimonios" },
  { href: "/cerrajero-a-domicilio", label: "Preguntas frecuentes" },
  { href: "/cerrajeria-a-domicilio", label: "Contacto" },
] as const;

export const SERVICIOS = [
  {
    slug: "apertura-de-puertas",
    titulo: "Apertura de puertas",
    resumen:
      "Casas, departamentos, oficinas y vehículos. Técnica sin daño, sin perforar ni forzar la cerradura.",
    detalle:
      "Abrimos puertas de acceso principal, interiores, portones y vehículos usando técnicas de ganzuado y bombillo que no dañan la cerradura ni la puerta. Si la cerradura está muy deteriorada y no se puede recuperar, te lo decimos antes de intervenir y cotizamos el cambio en el momento.",
    puntos: [
      "Casas, departamentos y oficinas",
      "Portones y rejas",
      "Apertura de vehículos",
      "Diagnóstico antes de intervenir",
    ],
    waMessage: WA_MESSAGES.aperturaPuertas,
    icon: "door",
  },
  {
    slug: "cambio-de-cerraduras",
    titulo: "Cambio y reparación de cerraduras",
    resumen:
      "Cambiamos, reparamos y duplicamos llaves de cerraduras convencionales, multipunto y de seguridad.",
    detalle:
      "Reparamos mecanismos trabados, cambiamos cilindros y bombillos, e instalamos cerraduras nuevas de mayor seguridad. Trabajamos con cerraduras de pomo, embutidas, multipunto y de sobreponer. Boleta o factura en el momento.",
    puntos: [
      "Cambio de cilindro o cerradura completa",
      "Reparación de mecanismos trabados",
      "Cerraduras de seguridad multipunto",
      "Duplicado de llaves",
    ],
    waMessage: WA_MESSAGES.cambioCerraduras,
    icon: "key",
  },
  {
    slug: "cerraduras-digitales",
    titulo: "Cerraduras digitales",
    resumen:
      "Instalación y configuración de Smart Lock, EZVIZ y Yale: huella, PIN, tarjeta o app móvil.",
    detalle:
      "Modernizamos el acceso de tu casa u oficina con cerraduras digitales de marcas reconocidas. Instalamos, configuramos la app, agregamos usuarios y te dejamos funcionando con huella, clave numérica, tarjeta o control remoto desde el celular.",
    puntos: [
      "Marcas Yale, EZVIZ y Smart Lock",
      "Huella, PIN, tarjeta y app móvil",
      "Configuración de usuarios y accesos",
      "Ideal para oficinas y arriendos",
    ],
    waMessage: WA_MESSAGES.cerraduraDigital,
    icon: "lock-digital",
  },
] as const;

export const COMO_FUNCIONA = [
  {
    paso: "1",
    titulo: "Llamas o escribes",
    detalle: "Nos cuentas qué pasó y dónde estás. Atendemos las 24 horas.",
  },
  {
    paso: "2",
    titulo: "Confirmamos precio y tiempo",
    detalle: "Te damos un precio referencial y el tiempo estimado de llegada antes de movernos.",
  },
  {
    paso: "3",
    titulo: "Llegamos",
    detalle: "Técnico certificado en camino, en menos de 20 minutos dentro de la cobertura.",
  },
  {
    paso: "4",
    titulo: "Abrimos sin dañar y pagas",
    detalle: "Trabajo terminado, revisas el resultado y pagas. Boleta o factura disponible.",
  },
] as const;

export const CONFIANZA_ITEMS = [
  "Boleta o factura",
  "Presupuesto antes de trabajar",
  "Garantía por escrito",
  "Instalamos Yale",
  "Instalamos EZVIZ",
  "Instalamos Smart Lock",
  "Técnicos certificados",
  "Atención 24/7",
] as const;

export const MICRO_PRUEBAS = [
  "Sin daños a tu puerta",
  "Técnicos certificados",
  "Atención 24/7, festivos incluidos",
] as const;

// Comunas de la Región Metropolitana de Santiago, Chile (dato geográfico público).
export const COMUNAS_RM = [
  "Santiago Centro",
  "Providencia",
  "Las Condes",
  "Vitacura",
  "Lo Barnechea",
  "Ñuñoa",
  "La Reina",
  "Macul",
  "Peñalolén",
  "La Florida",
  "Puente Alto",
  "San Joaquín",
  "San Miguel",
  "La Cisterna",
  "El Bosque",
  "Pedro Aguirre Cerda",
  "Lo Espejo",
  "San Ramón",
  "La Granja",
  "La Pintana",
  "Independencia",
  "Recoleta",
  "Conchalí",
  "Huechuraba",
  "Quilicura",
  "Renca",
  "Quinta Normal",
  "Cerro Navia",
  "Lo Prado",
  "Estación Central",
  "Cerrillos",
  "Maipú",
  "Pudahuel",
  "San Bernardo",
  "Colina",
  "Lampa",
  "Til Til",
  "Melipilla",
  "Talagante",
  "Peñaflor",
  "Padre Hurtado",
  "El Monte",
  "Isla de Maipo",
  "Buin",
  "Paine",
  "San José de Maipo",
  "Pirque",
  "Calera de Tango",
  "Curacaví",
  "María Pinto",
  "San Pedro",
  "Alhué",
] as const;

// Sin reseñas reales cargadas todavía. No se inventan testimonios:
// cuando el cliente entregue reseñas verificadas (Google/Facebook) o
// autorización de clientes reales, se agregan aquí con nombre y comuna.
export const TESTIMONIOS: {
  nombre: string;
  comuna: string;
  texto: string;
  fuente?: string;
}[] = [];

export const FAQ_ITEMS = [
  {
    pregunta: "¿Cuánto cobran por la visita y la apertura?",
    respuesta:
      "El valor depende del tipo de cerradura y la hora del día. Te confirmamos el precio por teléfono o WhatsApp antes de enviar al técnico, y no se cobra nada hasta que aceptes el presupuesto.",
  },
  {
    pregunta: "¿Cuánto se demoran en llegar?",
    respuesta:
      "En comunas dentro de nuestra cobertura habitual, el técnico llega en menos de 20 minutos desde que se confirma el servicio. En comunas más alejadas de la Región Metropolitana el tiempo puede ser mayor; te lo indicamos al llamar.",
  },
  {
    pregunta: "¿Van a dañar mi puerta o cerradura?",
    respuesta:
      "No. Usamos técnicas de apertura sin daño (ganzuado, bombillo) siempre que la cerradura lo permita. Si el mecanismo ya está muy deteriorado y no se puede recuperar, te lo explicamos antes de intervenir y cotizamos el cambio.",
  },
  {
    pregunta: "¿Atienden de madrugada?",
    respuesta:
      "Sí, atendemos las 24 horas del día, los 7 días de la semana, incluyendo festivos. El horario nocturno puede tener un recargo, que te confirmamos antes de coordinar la visita.",
  },
  {
    pregunta: "¿Qué formas de pago aceptan?",
    respuesta:
      "Coordina la forma de pago directamente con el técnico al momento de la visita. Emitimos boleta o factura para todos los trabajos.",
  },
  {
    pregunta: "¿Dan garantía por el trabajo?",
    respuesta:
      "Sí, entregamos garantía por escrito sobre la cerradura instalada o reparada y sobre la mano de obra realizada.",
  },
  {
    pregunta: "¿Hacen apertura de autos?",
    respuesta:
      "Sí, realizamos apertura de vehículos sin dañar la carrocería ni el sistema de seguridad del auto.",
  },
  {
    pregunta: "¿Instalan cerraduras digitales en departamentos y oficinas?",
    respuesta:
      "Sí. Instalamos y configuramos cerraduras digitales Yale, EZVIZ y Smart Lock en departamentos, casas y oficinas, incluyendo huella, PIN, tarjeta y control por app móvil.",
  },
] as const;
