import type { Metadata } from "next";
import { Archivo, Inter } from "next/font/google";
import "./globals.css";
import { BUSINESS, SITE_URL } from "@/lib/site";
import { localBusinessSchema } from "@/lib/schema";
import JsonLd from "@/components/JsonLd";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import TopBar from "@/components/layout/TopBar";
import Header from "@/components/layout/Header";
import MobileActionBar from "@/components/layout/MobileActionBar";
import Footer from "@/components/layout/Footer";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${BUSINESS.name} — Cerrajero 24 horas en Santiago y la RM`,
    template: `%s — ${BUSINESS.name}`,
  },
  description:
    "Cerrajería a domicilio 24/7 en Santiago y toda la Región Metropolitana. Llegamos en menos de 20 minutos, abrimos sin dañar tu puerta e instalamos cerraduras digitales Yale, EZVIZ y Smart Lock.",
  keywords: [
    "cerrajero Santiago",
    "cerrajero a domicilio",
    "cerrajería 24 horas",
    "cerradura digital Santiago",
    "apertura de puertas Santiago",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: SITE_URL,
    siteName: BUSINESS.name,
    title: `${BUSINESS.name} — Cerrajero 24 horas en Santiago y la RM`,
    description:
      "Llegamos en menos de 20 minutos. Apertura sin daños, cambio de cerraduras y cerraduras digitales Yale, EZVIZ y Smart Lock.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es-CL"
      className={`${archivo.variable} ${inter.variable} h-full`}
    >
      <body className="flex min-h-full flex-col bg-ink-950 pb-16 text-paper lg:pb-0">
        <JsonLd data={localBusinessSchema()} />
        <SmoothScrollProvider>
          <TopBar />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <MobileActionBar />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
