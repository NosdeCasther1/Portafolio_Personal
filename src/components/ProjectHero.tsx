"use client";

import { motion, Variants } from "framer-motion";
import { Github, ExternalLink, Calendar as CalendarIcon } from "lucide-react";

interface ProjectHeroProps {
  project: {
    title: string;
    description: string;
    image?: string;
    github?: string;
    demo?: string;
    date: string;
  };
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function ProjectHero({ project }: ProjectHeroProps) {
  // Formatear la fecha
  const formattedDate = new Date(project.date).toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
  });

  return (
    <header className="relative min-h-[60vh] flex items-center justify-center overflow-hidden py-12 md:py-20 mb-12 rounded-[2.5rem] bg-black/20 border border-white/5 shadow-2xl backdrop-blur-sm">
      {/* Grid Radial Background para textura sutil */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <div className="px-6 md:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* COLUMNA IZQUIERDA: Textos y CTAs */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6 text-left"
          >
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-500/10 px-3 py-1 text-sm font-medium text-indigo-400 ring-1 ring-inset ring-indigo-500/20 mb-4">
                <CalendarIcon className="w-4 h-4" /> Lanzamiento {formattedDate}
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-2 leading-tight">
                {project.title}
              </h1>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="text-lg text-slate-400 leading-relaxed max-w-xl">
                {project.description}
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-4">
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-indigo-600 px-6 py-3 font-medium text-white shadow-[0_0_20px_rgba(79,70,229,0.3)] transition-all hover:bg-indigo-500 hover:shadow-[0_0_30px_rgba(79,70,229,0.5)] hover:-translate-y-0.5"
                >
                  <span>Visitar Demo</span>
                  <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              )}
              
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white/5 px-6 py-3 font-medium text-white ring-1 ring-white/10 transition-all hover:bg-white/10 hover:-translate-y-0.5"
                >
                  <Github className="w-4 h-4" />
                  <span>Ver Código</span>
                </a>
              )}
            </motion.div>
          </motion.div>

          {/* COLUMNA DERECHA: Mockup de la Aplicación */}
          {project.image && (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative w-full perspective-1000"
            >
              {/* Contenedor del efecto GLOW */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-gradient-to-tr from-indigo-600/20 to-purple-500/20 blur-3xl rounded-full -z-10 pointer-events-none" />

              {/* Imagen con animación de flotación */}
              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#161616] shadow-2xl aspect-video group"
              >
                <img
                  src={project.image}
                  alt={`Mockup de ${project.title}`}
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  decoding="async"
                  fetchPriority="high"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none" />
              </motion.div>
            </motion.div>
          )}

        </div>
      </div>
    </header>
  );
}
