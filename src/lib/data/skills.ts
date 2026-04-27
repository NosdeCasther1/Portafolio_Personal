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
      { name: "Java", iconKey: "SiJava" },
      { name: "C++", iconKey: "SiCplusplus" },
      { name: "HTML5", iconKey: "SiHtml5" },
      { name: "CSS3", iconKey: "SiCss3" },
      { name: "Next.js", iconKey: "SiNextdotjs" },
      { name: "React", iconKey: "SiReact" },
      { name: "Laravel", iconKey: "SiLaravel" },
      { name: "Bootstrap", iconKey: "SiBootstrap" },
      { name: "Framer Motion", iconKey: "SiFramer" },
      { name: "APIs RESTful", iconKey: "" },
      { name: "Gemini API", iconKey: "SiGooglegemini" },
      { name: "SOAP", iconKey: "" },
    ],
  },
  {
    category: "Bases de Datos & Cloud",
    technologies: [
      { name: "MySQL", iconKey: "SiMysql" },
      { name: "Relacionales (Diseño)", iconKey: "" },
      { name: "Vercel (CI/CD)", iconKey: "SiVercel" },
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
      { name: "Docker", iconKey: "SiDocker" },
      { name: "Scrum Certified", iconKey: "SiScrumalliance" },
      { name: "Visual Studio Code", iconKey: "SiVisualstudiocode" },
      { name: "Adobe Photoshop", iconKey: "SiAdobephotoshop" },
      { name: "Adobe Premiere", iconKey: "SiAdobepremierepro" },
    ],
  },
];


