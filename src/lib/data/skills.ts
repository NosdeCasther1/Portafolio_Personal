export interface SkillCategory {
  category: string;
  technologies: string[];
}

export const skills: SkillCategory[] = [
  {
    category: "Frontend",
    technologies: [
      "React 19",
      "Next.js (App Router)",
      "TypeScript",
      "Tailwind CSS v4",
      "Framer Motion",
      "Zustand",
      "TanStack Query",
      "Shadcn UI",
      "NextUI",
    ],
  },
  {
    category: "Backend",
    technologies: [
      "Node.js",
      "Bun",
      "PostgreSQL",
      "Prisma ORM",
      "Drizzle ORM",
      "Supabase",
      "Redis",
      "REST & GraphQL",
      "Next-Auth / Auth.js",
    ],
  },
  {
    category: "DevOps & Testing",
    technologies: [
      "Docker",
      "Vercel",
      "GitHub Actions (CI/CD)",
      "Jest",
      "Vitest",
      "Playwright",
      "AWS (S3/Lambda)",
      "Terraform",
    ],
  },
  {
    category: "Herramientas & Soft Skills",
    technologies: [
      "Git & GitHub",
      "Figma",
      "Postman",
      "Neovim/VS Code",
      "SEO & Core Web Vitals",
      "Agile / Scrum",
      "Technical Mentoring",
    ],
  },
];
