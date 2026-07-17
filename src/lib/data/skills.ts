export interface Technology {
  name: string;
  iconKey: string;
}

export interface SkillCategory {
  category: string;
  technologies: Technology[];
}

export const aiAgentExperience: string[] = [
  "Diseñé un ecosistema multiplataforma (React Native + TypeScript) integrando la API de Google Gemini para procesamiento de lenguaje natural en tiempo real.",
  "Desarrollé e integré la lógica del asistente de IA \"Luz\" para atención vía WhatsApp Business (Meta Cloud API), automatizando respuestas y flujos de atención al cliente.",
  "Aplico Agent Skills y MCP en mi flujo de desarrollo diario para acelerar la construcción de productos digitales.",
];

export const skills: SkillCategory[] = [
  {
    category: "Desarrollo Web & Programación",
    technologies: [
      { name: "TypeScript (Avanzado)", iconKey: "SiTypescript" },
      { name: "JavaScript (ES6+)", iconKey: "SiJavascript" },
      { name: "PHP", iconKey: "SiPhp" },
      { name: "Next.js", iconKey: "SiNextdotjs" },
      { name: "React", iconKey: "SiReact" },
      { name: "Vue.js", iconKey: "SiVuedotjs" },
      { name: "Laravel", iconKey: "SiLaravel" },
      { name: "Inertia.js", iconKey: "SiInertia" },
      { name: "React Native / Expo", iconKey: "SiExpo" },
      { name: "Tailwind CSS", iconKey: "SiTailwindcss" },
      { name: "APIs RESTful & WebSockets", iconKey: "SiSocketdotio" },
    ],
  },
  {
    category: "IA, Agentes & Automatización",
    technologies: [
      { name: "ChatGPT / OpenAI", iconKey: "SiOpenai" },
      { name: "Claude (Anthropic)", iconKey: "SiClaude" },
      { name: "Codex", iconKey: "SiOpenai" },
      { name: "Google Gemini", iconKey: "SiGooglegemini" },
      { name: "Diseño y Desarrollo de Agentes de IA", iconKey: "" },
      { name: "Agent Skills", iconKey: "" },
      { name: "MCP (Model Context Protocol)", iconKey: "" },
      { name: "Automatización de Flujos con IA", iconKey: "" },
    ],
  },
  {
    category: "Bases de Datos & Cloud",
    technologies: [
      { name: "MySQL", iconKey: "SiMysql" },
      { name: "Relacionales (Diseño y Optimización)", iconKey: "" },
      { name: "Vercel (CI/CD)", iconKey: "SiVercel" },
      { name: "Render (Deployments)", iconKey: "SiRender" },
      { name: "Docker", iconKey: "SiDocker" },
      { name: "AWS (Conceptos Core)", iconKey: "" },
    ],
  },
  {
    category: "Infraestructura, Redes & Seguridad",
    technologies: [
      { name: "LAN/WAN", iconKey: "SiCisco" },
      { name: "Mikrotik", iconKey: "SiMikrotik" },
      { name: "Ubiquiti", iconKey: "SiUbiquiti" },
      { name: "TP-Link", iconKey: "SiTplink" },
      { name: "Firewalls & VPNs", iconKey: "" },
      { name: "Linux (Terminal)", iconKey: "SiLinux" },
      { name: "Windows Server (AD)", iconKey: "SiWindows" },
    ],
  },
  {
    category: "Herramientas & Metodologías",
    technologies: [
      { name: "Git", iconKey: "SiGit" },
      { name: "GitHub", iconKey: "SiGithub" },
      { name: "Scrum Certified", iconKey: "SiScrumalliance" },
      { name: "Visual Studio Code", iconKey: "SiVisualstudiocode" },
      { name: "Adobe Photoshop", iconKey: "SiAdobephotoshop" },
      { name: "Adobe Premiere", iconKey: "SiAdobepremierepro" },
    ],
  },
];
