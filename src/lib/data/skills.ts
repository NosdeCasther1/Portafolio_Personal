export interface Technology {
  name: string;
  iconKey: string;
}

export interface SkillCategory {
  category: string;
  technologies: Technology[];
}

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
      { name: "Gemini API / Integración IA", iconKey: "SiGooglegemini" },
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
      { name: "Microsoft Azure", iconKey: "SiMicrosoftazure" },
      { name: "Google Cloud Platform", iconKey: "SiGooglecloud" },
    ],
  },
  {
    category: "Infraestructura, Redes & Seguridad",
    technologies: [
      { name: "LAN/WAN", iconKey: "SiCisco" },
      { name: "Mikrotik", iconKey: "SiMikrotik" },
      { name: "Ubiquiti", iconKey: "SiUbiquiti" },
      { name: "TP-Link", iconKey: "SiTplink" },
      { name: "Wireshark", iconKey: "SiWireshark" },
      { name: "Nmap", iconKey: "SiNmap" },
      { name: "Firewalls & VPNs", iconKey: "" },
      { name: "Hacking Ético (Wi-Fi)", iconKey: "SiKalilinux" },
      { name: "Linux (Terminal)", iconKey: "SiLinux" },
      { name: "Windows Server (AD)", iconKey: "SiWindows" },
    ],
  },
  {
    category: "Herramientas & Metodologías",
    technologies: [
      { name: "Git", iconKey: "SiGit" },
      { name: "GitHub", iconKey: "SiGithub" },
      { name: "Cypress", iconKey: "SiCypress" },
      { name: "Jest & Testing Library", iconKey: "SiTestinglibrary" },
      { name: "Scrum Certified", iconKey: "SiScrumalliance" },
      { name: "Visual Studio Code", iconKey: "SiVisualstudiocode" },
      { name: "Adobe Photoshop", iconKey: "SiAdobephotoshop" },
      { name: "Adobe Premiere", iconKey: "SiAdobepremierepro" },
    ],
  },
];


