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
    template: '%s | Edson Castillo',
    default: 'Edson Castillo | Full Stack Engineer | IA & Next.js',
  },
  description: "Portafolio profesional de Edson Castillo, Ingeniero Full Stack especializado en Next.js, Laravel e IA.",
  openGraph: {
    title: "Edson Castillo | Full Stack Engineer | IA & Next.js",
    description: "Portafolio profesional de Edson Castillo, Ingeniero Full Stack especializado en Next.js, Laravel e IA.",
    url: baseUrl,
    siteName: "Edson Castillo",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Edson Castillo | Full Stack Engineer | IA & Next.js",
    description: "Portafolio profesional de Edson Castillo, Ingeniero Full Stack especializado en Next.js, Laravel e IA.",
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
