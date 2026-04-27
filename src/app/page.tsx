"use client";

import React from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, ArrowRight, User, Download } from "lucide-react";
import { SiNextdotjs, SiTypescript, SiLaravel, SiGooglegemini, SiScrumalliance } from "react-icons/si";
import { Button } from "@/components/ui/button";

/**
 * Hero Section - Principal componente de la página de inicio.
 * Adaptado para Next.js App Router, Shadcn UI, Tailwind v4 y Framer Motion.
 */
export default function Home() {
  // Variantes para la animación en cascada
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    },
  };

  return (
    <main className="relative flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-6 py-12 md:py-24 overflow-hidden">
      {/* Elementos decorativos de fondo (Opcional para extra "Premium") */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-10%] w-[30%] h-[30%] rounded-full bg-secondary/5 blur-[100px]" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-4xl text-center space-y-10"
      >
        {/* Badge de disponibilidad */}
        <motion.div variants={itemVariants} className="flex justify-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-background/50 backdrop-blur-sm shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
              Disponible para nuevos proyectos
            </span>
          </div>
        </motion.div>

        {/* Título Principal con Gradiente */}
        <motion.header variants={itemVariants} className="space-y-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
            Ingeniería de Software Full Stack <br />
            <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
              Potenciada por IA
            </span>
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed">
            Soy <span className="text-foreground font-semibold">Edson Castillo</span>, Ingeniero en Sistemas (Pensum Cerrado) especializado en TypeScript, Next.js y Laravel. 
            Optimizo el desarrollo de productos digitales mediante la integración de agentes de IA programados, 
            transformando problemas complejos en soluciones escalables y de alto rendimiento en tiempo récord.
          </p>
        </motion.header>

        {/* Llamadas a la Acción (CTA) */}
        <motion.div variants={itemVariants} className="space-y-10">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button render={<Link href="/proyectos" />} nativeButton={false} size="lg" className="rounded-full px-8 gap-2 h-12 text-base font-medium shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-300">
              Ver proyectos <ArrowRight className="w-4 h-4" />
            </Button>
            <Button render={<Link href="/sobre-mi" />} nativeButton={false} variant="secondary" size="lg" className="rounded-full px-8 gap-2 h-12 text-base font-medium bg-secondary/50 hover:bg-secondary/80 backdrop-blur-sm transition-all duration-300">
              Sobre mí <User className="w-4 h-4" />
            </Button>
            <Button 
              render={
                <a 
                  href="/cv.pdf" 
                  download="Edson_Castillo_CV.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                />
              } 
              nativeButton={false} 
              variant="outline" 
              size="lg" 
              className="rounded-full px-8 gap-2 h-12 text-base font-medium transition-all duration-300 border-primary/20 hover:border-primary/50"
            >
              Descargar CV <Download className="w-4 h-4" />
            </Button>
          </div>

          {/* Stack Principal Icons Row */}
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 pt-4 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            <div className="flex items-center gap-2 group">
              <SiNextdotjs className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
              <span className="text-xs font-semibold tracking-wide uppercase">Next.js</span>
            </div>
            <div className="flex items-center gap-2 group">
              <SiTypescript className="w-5 h-5 text-[#3178C6] transition-transform duration-300 group-hover:scale-110" />
              <span className="text-xs font-semibold tracking-wide uppercase">TypeScript</span>
            </div>
            <div className="flex items-center gap-2 group">
              <SiGooglegemini className="w-5 h-5 text-[#8E75C2] transition-transform duration-300 group-hover:scale-110" />
              <span className="text-xs font-semibold tracking-wide uppercase">IA (Gemini)</span>
            </div>
            <div className="flex items-center gap-2 group">
              <SiLaravel className="w-5 h-5 text-[#FF2D20] transition-transform duration-300 group-hover:scale-110" />
              <span className="text-xs font-semibold tracking-wide uppercase">Laravel</span>
            </div>
            <div className="flex items-center gap-2 group">
              <SiScrumalliance className="w-5 h-5 text-[#62AB37] transition-transform duration-300 group-hover:scale-110" />
              <span className="text-xs font-semibold tracking-wide uppercase">Scrum</span>
            </div>
          </div>
        </motion.div>

        {/* Iconos Sociales */}
        <motion.div variants={itemVariants} className="pt-4 flex items-center justify-center gap-6">
          <Link 
            href="https://github.com" 
            target="_blank" 
            className="p-2 text-muted-foreground hover:text-foreground transition-all duration-200 hover:scale-110"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </Link>
          <Link 
            href="https://linkedin.com" 
            target="_blank" 
            className="p-2 text-muted-foreground hover:text-foreground transition-all duration-200 hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </Link>
          <Link 
            href="https://twitter.com" 
            target="_blank" 
            className="p-2 text-muted-foreground hover:text-foreground transition-all duration-200 hover:scale-110"
            aria-label="Twitter"
          >
            <Twitter className="w-6 h-6" />
          </Link>
          <Link 
            href="mailto:hola@tuemail.com" 
            className="p-2 text-muted-foreground hover:text-foreground transition-all duration-200 hover:scale-110"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </Link>
        </motion.div>

      </motion.div>
    </main>
  );
}
