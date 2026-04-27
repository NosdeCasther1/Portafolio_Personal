"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * Hero Section - Principal componente de la página de inicio.
 * Adaptado para Next.js App Router, Shadcn UI, Tailwind v4 y Framer Motion.
 */
export default function Home() {
  // Variantes para la animación en cascada
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
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
        className="w-full max-w-3xl text-center space-y-8"
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
        <motion.header variants={itemVariants} className="space-y-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground">
            Diseñando el futuro de la <br />
            <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
              web moderna
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed">
            Soy un desarrollador Frontend Senior especializado en crear experiencias digitales 
            excepcionales que combinan estética minimalista con ingeniería de alto rendimiento.
          </p>
        </motion.header>

        {/* Llamadas a la Acción (CTA) */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button render={<Link href="/proyectos" />} nativeButton={false} size="lg" className="rounded-full px-8 gap-2">
            Ver proyectos <ArrowRight className="w-4 h-4" />
          </Button>
          <Button render={<Link href="/sobre-mi" />} nativeButton={false} variant="outline" size="lg" className="rounded-full px-8 gap-2">
            Sobre mí <Download className="w-4 h-4" />
          </Button>
        </motion.div>

        {/* Iconos Sociales */}
        <motion.div variants={itemVariants} className="pt-8 flex items-center justify-center gap-6">
          <Link 
            href="https://github.com" 
            target="_blank" 
            className="p-2 text-muted-foreground hover:text-foreground transition-colors duration-200"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </Link>
          <Link 
            href="https://linkedin.com" 
            target="_blank" 
            className="p-2 text-muted-foreground hover:text-foreground transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </Link>
          <Link 
            href="https://twitter.com" 
            target="_blank" 
            className="p-2 text-muted-foreground hover:text-foreground transition-colors duration-200"
            aria-label="Twitter"
          >
            <Twitter className="w-6 h-6" />
          </Link>
          <Link 
            href="mailto:hola@tuemail.com" 
            className="p-2 text-muted-foreground hover:text-foreground transition-colors duration-200"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </Link>
        </motion.div>
      </motion.div>
    </main>
  );
}
