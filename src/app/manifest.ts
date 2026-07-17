import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Portafolio de Edson Castillo",
    short_name: "Edson Castillo",
    description:
      "Portafolio profesional de Edson Castillo, desarrollador Full Stack especializado en Next.js, Laravel e IA.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#2563eb",
    lang: "es-GT",
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
