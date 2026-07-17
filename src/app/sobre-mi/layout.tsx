import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre mí",
  description:
    "Conoce la trayectoria, experiencia, formación y habilidades de Edson Castillo, egresado de Ingeniería en Sistemas y desarrollador Full Stack.",
  alternates: {
    canonical: "/sobre-mi",
  },
  openGraph: {
    title: "Sobre Edson Castillo | Desarrollador Full Stack",
    description:
      "Trayectoria profesional, experiencia, formación y habilidades en desarrollo Full Stack e inteligencia artificial.",
    url: "/sobre-mi",
  },
};

export default function SobreMiLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
