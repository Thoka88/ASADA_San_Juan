import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ASADA San Juan de Dios | Agua para nuestra comunidad",
  description:
    "Servicio comunitario de agua potable. Consulte su recibo en línea de forma rápida y segura.",
  applicationName: "ASADA San Juan de Dios",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "ASADA San Juan de Dios | Agua para nuestra comunidad",
    description: "Protegemos nuestro recurso hídrico en Barú, Pérez Zeledón.",
    locale: "es_CR",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
