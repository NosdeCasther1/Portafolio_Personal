import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contacta a Edson Castillo para proyectos de desarrollo web Full Stack, Next.js, Laravel e integraciones con inteligencia artificial.",
  alternates: {
    canonical: "/contacto",
  },
  openGraph: {
    title: "Contacto | Edson Castillo",
    description:
      "Hablemos sobre tu próximo proyecto de desarrollo web, automatización o inteligencia artificial.",
    url: "/contacto",
  },
};

export default function ContactoLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
