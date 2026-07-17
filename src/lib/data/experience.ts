export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string | string[];
  type: 'Trabajo' | 'Educación';
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  description?: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  link?: string;
}

export const experienceData: Experience[] = [
  {
    id: "exp-1",
    role: "Desarrollador Full Stack",
    company: "Proyectos Independientes",
    period: "2021 – Presente",
    description: [
      "Control de Ventas Live: Desarrollé una SPA de e-commerce en tiempo real utilizando Laravel, React, Inertia.js y WebSockets para la gestión instantánea de inventario durante transmisiones en vivo.",
      "OptiBill ISP: Implementé una plataforma integral con arquitectura Headless (Next.js y Laravel), optimizando consultas SQL complejas para reducir tiempos de respuesta en bases de datos de alto volumen.",
      "App Multiplataforma con IA: Construí una aplicación móvil con React Native y Expo que integra servicios de inteligencia artificial para la transcripción estructurada de voz a texto.",
      "Plataforma de Consulta Psicológica con IA: Diseñé una aplicación web interactiva empleando TypeScript y la API de Google Gemini para procesamiento de lenguaje natural en tiempo real.",
      "Agentes y Automatización con IA: Diseño e integración de flujos con ChatGPT, Claude y Codex para automatización, creación de agentes, Agent Skills y servidores MCP.",
      "Desarrollo Full Stack y Calidad: Creación de sistemas de administración como el Sistema Eclesiástico (PHP/MySQL) y diseño de suites de pruebas E2E automatizadas con Cypress."
    ],
    type: "Trabajo"
  },
  {
    id: "exp-2",
    role: "Ejecutivo de Negocios",
    company: "Banco Industrial",
    period: "Abr. 2021 – Nov. 2021",
    description: [
      "Gestión de Carteras: Lideré la administración de carteras de clientes empresariales, manejando información financiera sensible bajo estrictos protocolos de confidencialidad.",
      "Logro de Metas: Fui reconocido institucionalmente por la excelente colocación y activación de productos financieros corporativos durante el ciclo 2021.",
      "Análisis de Datos: Procesé y analicé documentación legal y financiera para garantizar la viabilidad de negocios corporativos de alto nivel."
    ],
    type: "Trabajo"
  },
  {
    id: "exp-3",
    role: "Asesor Comercial",
    company: "Interconsumo, S.A.",
    period: "Nov. 2016 – Abr. 2021",
    description: [
      "Análisis de Riesgo: Evalué perfiles crediticios mediante el análisis de grandes volúmenes de datos, asegurando el cumplimiento de las políticas de riesgo de la institución.",
      "Desempeño de Ventas: Cumplí consistentemente con las metas comerciales mensuales, recibiendo múltiples felicitaciones por dedicación y excelencia operativa.",
      "Protección de Información: Garanticé la integridad de la información de los clientes, adoptando las mejores prácticas de seguridad de datos corporativos."
    ],
    type: "Trabajo"
  },
  {
    id: "exp-4",
    role: "Técnico de Redes y Soporte TI",
    company: "Cybercast",
    period: "2005 – 2016",
    description: [
      "Administración de Infraestructura: Diseñé y administré redes LAN/WAN utilizando tecnologías de punta como Mikrotik y Ubiquiti.",
      "Seguridad Perimetral: Implementé políticas de acceso y configuración de firewalls para proteger la red de clientes residenciales y empresariales.",
      "Soporte Integral: Proporcioné diagnóstico y reparación técnica de hardware y software, manteniendo una operatividad de red superior al 95%."
    ],
    type: "Trabajo"
  }
];

export const educationData: Education[] = [
  {
    id: "edu-1",
    degree: "Ingeniería en Sistemas (Cierre de Pensum)",
    institution: "Universidad Mariano Gálvez de Guatemala",
    period: "2019 – 2024",
    description: "Especialización en arquitectura de software y gestión de proyectos tecnológicos."
  }
];

export const certificationsData: Certification[] = [
  {
    id: "cert-1",
    title: "Scrum Foundation Professional Certificate (SFPC)",
    issuer: "CertiProf",
    date: "2023"
  },
  {
    id: "cert-2",
    title: "Especialización en Frontend Moderno",
    issuer: "Autodidacta / Cursos Pro",
    date: "2022"
  }
];


