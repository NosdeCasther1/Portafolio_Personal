import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({ subsets: ["latin"] });

const baseUrl = "https://tu-portafolio.com"; // TODO: Cambiar por tu dominio real

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    template: '%s | Mi Portafolio',
    default: 'Mi Portafolio - Dev Senior',
  },
  description: "Portafolio profesional de un Desarrollador Senior especializado en Next.js, React y arquitecturas modernas.",
  openGraph: {
    title: "Mi Portafolio - Dev Senior",
    description: "Portafolio profesional de un Desarrollador Senior especializado en Next.js, React y arquitecturas modernas.",
    url: baseUrl,
    siteName: "Mi Portafolio",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mi Portafolio - Dev Senior",
    description: "Portafolio profesional de un Desarrollador Senior especializado en Next.js, React y arquitecturas modernas.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={cn("scroll-smooth", "font-sans", geist.variable)}>
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen pt-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
