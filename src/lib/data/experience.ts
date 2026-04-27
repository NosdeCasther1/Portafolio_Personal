export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string | string[];
  type: 'Trabajo' | 'Educación';
}

export const experienceData: Experience[] = [
  {
    id: "exp-1",
    role: "Frontend Developer Senior",
    company: "Tech Innovators Inc.",
    period: "2021 - Presente",
    description: [
      "Desarrollo y mantenimiento de aplicaciones web escalables de alto rendimiento utilizando React y Next.js.",
      "Implementación de arquitecturas frontend modernas y optimización del rendimiento, logrando reducir el tiempo de carga inicial en un 35%.",
      "Mentoría a desarrolladores junior y colaboración estrecha con equipos de diseño UI/UX para asegurar la mejor experiencia de usuario."
    ],
    type: "Trabajo"
  },
  {
    id: "exp-2",
    role: "UI/UX Developer",
    company: "Creative Digital Agency",
    period: "2018 - 2021",
    description: "Creación de interfaces de usuario interactivas y responsivas. Migración exitosa de un sistema monolítico legado a una arquitectura basada en componentes con React, mejorando significativamente la mantenibilidad del código y la velocidad de desarrollo.",
    type: "Trabajo"
  },
  {
    id: "edu-1",
    role: "Ingeniería en Software",
    company: "Universidad Tecnológica",
    period: "2014 - 2018",
    description: "Especialización en desarrollo web y arquitectura de software. Proyecto de grado enfocado en la creación de aplicaciones web progresivas (PWA) para zonas con baja conectividad.",
    type: "Educación"
  }
];
