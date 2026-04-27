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
    category: "Frontend",
    technologies: [
      { name: "React 19", iconKey: "SiReact" },
      { name: "Next.js", iconKey: "SiNextdotjs" },
      { name: "TypeScript", iconKey: "SiTypescript" },
      { name: "Tailwind CSS", iconKey: "SiTailwindcss" },
      { name: "Framer Motion", iconKey: "SiFramer" },
      { name: "Zustand", iconKey: "SiZustand" },
      { name: "TanStack Query", iconKey: "SiReactquery" },
      { name: "Shadcn UI", iconKey: "SiShadcnui" },
    ],
  },
  {
    category: "Backend",
    technologies: [
      { name: "Node.js", iconKey: "SiNodedotjs" },
      { name: "Bun", iconKey: "SiBun" },
      { name: "PostgreSQL", iconKey: "SiPostgresql" },
      { name: "Prisma ORM", iconKey: "SiPrisma" },
      { name: "Drizzle ORM", iconKey: "SiDrizzle" },
      { name: "Supabase", iconKey: "SiSupabase" },
      { name: "Redis", iconKey: "SiRedis" },
      { name: "GraphQL", iconKey: "SiGraphql" },
    ],
  },
  {
    category: "DevOps & Testing",
    technologies: [
      { name: "Docker", iconKey: "SiDocker" },
      { name: "Vercel", iconKey: "SiVercel" },
      { name: "GitHub Actions", iconKey: "SiGithubactions" },
      { name: "Jest", iconKey: "SiJest" },
      { name: "Vitest", iconKey: "SiVitest" },
      { name: "Playwright", iconKey: "SiPlaywright" },
      { name: "AWS", iconKey: "SiAmazonwebservices" },
      { name: "Terraform", iconKey: "SiTerraform" },
    ],
  },
  {
    category: "Herramientas",
    technologies: [
      { name: "Git", iconKey: "SiGit" },
      { name: "GitHub", iconKey: "SiGithub" },
      { name: "Figma", iconKey: "SiFigma" },
      { name: "Postman", iconKey: "SiPostman" },
      { name: "VS Code", iconKey: "SiVisualstudiocode" },
      { name: "Neovim", iconKey: "SiNeovim" },
      { name: "Linux", iconKey: "SiLinux" },
    ],
  },
];

