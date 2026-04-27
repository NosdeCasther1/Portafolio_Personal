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
      "Plataforma de Consulta Psicológica con IA: Diseñé y desplegué una aplicación web utilizando TypeScript y Next.js, integrando la API de Google Gemini para el procesamiento de lenguaje natural en tiempo real.",
      "Sistema de Gestión de Membresías: Desarrollé una aplicación Full Stack con PHP y MySQL para la administración automatizada de datos, optimizando el control de ingresos y la generación de reportes estadísticos.",
      "Optimización de Interfaz: Implementé animaciones avanzadas y transiciones fluidas mediante Framer Motion, logrando un producto digital con estándares modernos de UX/UI.",
      "Arquitectura de Datos: Construí e integré APIs RESTful para la comunicación eficiente entre módulos de backend y frontend."
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


