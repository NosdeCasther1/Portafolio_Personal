import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import "@/app/globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/theme-provider";
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
    <html lang="es" className={cn("scroll-smooth", "font-sans", geist.variable)} suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="min-h-screen pt-10">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
