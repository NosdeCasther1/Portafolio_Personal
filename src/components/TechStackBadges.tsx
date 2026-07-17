"use client";

import { motion, Variants } from "framer-motion";

interface TechStackBadgesProps {
  tags?: string[];
}

const tagColors: Record<string, string> = {
  // Backends & Databases
  "PHP": "#777BB4",
  "Laravel": "#FF2D20",
  "MySQL": "#4479A1",
  "Google APIs": "#4285F4",
  "DomPDF": "#F15A24",
  "PostgreSQL": "#4169E1",
  "MongoDB": "#47A248",
  "Firebase": "#FFCA28",
  "SQLite": "#003B57",
  "SQL Server": "#CC292B",
  
  // Frontends & JS/TS
  "Next.js": "#6366F1", // Indigo glow for Next.js
  "TypeScript": "#3178C6",
  "JavaScript": "#F7DF1E",
  "React": "#61DAFB",
  "Inertia.js": "#9553E8",
  "Tailwind CSS": "#06B6D4",
  "Tailwind": "#06B6D4",
  "React Query": "#FF4154",
  "Shadcn": "#64748B",
  "Radix UI": "#3E63DD",
  "Recharts": "#3182BD",
  "TipTap": "#64748B",
  "HTML5": "#E34F26",
  "CSS3": "#1572B6",
  "HTML": "#E34F26",
  "CSS": "#1572B6",
  
  // Tools & QA
  "Cypress": "#49C39E",
  "Docker": "#2496ED",
  "Git": "#F05032",
  "GitHub": "#64748B",
  "WebSockets": "#E01E5A",
  "C++": "#00599C",
  "Python": "#3776AB",
  "Node.js": "#339933",
};

const defaultTechStack = [
  { name: "PHP", color: "#777BB4" },
  { name: "Laravel", color: "#FF2D20" },
  { name: "MySQL", color: "#4479A1" },
  { name: "Google APIs", color: "#4285F4" },
  { name: "DomPDF", color: "#F15A24" },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const badgeVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { type: "spring", stiffness: 400, damping: 25 }
  },
};

export default function TechStackBadges({ tags }: TechStackBadgesProps) {
  const stack = tags 
    ? tags.map(tag => ({ name: tag, color: tagColors[tag] || "#6366F1" }))
    : defaultTechStack;

  return (
    <div className="w-full mt-12 md:mt-16 pt-10 mb-2 border-t border-border">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-foreground tracking-tight">
          Stack Tecnológico
        </h3>
      </div>
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="flex flex-wrap justify-center items-center gap-4"
      >
        {stack.map((tech) => (
          <motion.div
            key={tech.name}
            variants={badgeVariants}
            whileHover="hover"
            initial="initial"
            className="relative group cursor-default"
          >
            {/* Elemento Badge */}
            <motion.div
              variants={{
                initial: {
                  boxShadow: "0 0 0px rgba(0,0,0,0)",
                },
                hover: {
                  scale: 1.05,
                  borderColor: tech.color,
                  color: tech.color,
                  boxShadow: `0 0 20px ${tech.color}50, inset 0 0 10px ${tech.color}20`,
                }
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="px-5 py-2.5 rounded-full border border-border bg-muted/40 text-muted-foreground backdrop-blur-sm font-semibold tracking-wide text-sm flex items-center justify-center transition-colors dark:bg-white/[0.03]"
            >
              {tech.name}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
