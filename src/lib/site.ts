export const siteConfig = {
  name: "Edson Castillo",
  title: "Edson Castillo | Desarrollador Full Stack e IA",
  description:
    "Portafolio de Edson Castillo, desarrollador Full Stack y egresado de Ingeniería en Sistemas, especializado en Next.js, Laravel e inteligencia artificial.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
    "https://portafolio-personal-edson.vercel.app",
  email: "edsoncastilloh90@gmail.com",
  phone: "+50247170626",
  locale: "es_GT",
  links: {
    github: "https://github.com/NosdeCasther1",
    linkedin: "https://www.linkedin.com/in/edson-castillo",
    whatsapp: "https://wa.me/50247170626",
    telegram: "https://t.me/+50247170626",
  },
} as const;
