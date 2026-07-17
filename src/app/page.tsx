"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import {
  Github,
  Linkedin,
  MessageCircle,
  Send,
  Mail,
  ArrowRight,
  User,
} from "lucide-react";
import {
  SiNextdotjs,
  SiTypescript,
  SiLaravel,
  SiGooglegemini,
  SiReact,
  SiGit,
  SiOpenai,
  SiClaude,
} from "react-icons/si";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/language-provider";

export default function Home() {
  const { language } = useLanguage();
  const copy = {
    es: {
      eyebrow: "Desarrollador Full Stack · IA",
      greeting: "Hola, soy",
      headline: "Construyo productos digitales con precisión.",
      description:
        "Egresado de Ingeniería en Sistemas. Especializado en TypeScript, Next.js y Laravel. Integro agentes de IA para transformar problemas complejos en soluciones escalables y de alto rendimiento.",
      projects: "Ver proyectos",
      about: "Sobre mí",
      imageAlt: "Edson Castillo, desarrollador Full Stack",
      codeFocus: "IA + producto",
    },
    en: {
      eyebrow: "Full Stack Developer · AI",
      greeting: "Hi, I'm",
      headline: "I build digital products with precision.",
      description:
        "Systems Engineering graduate specializing in TypeScript, Next.js, and Laravel. I integrate AI agents to turn complex problems into scalable, high-performance solutions.",
      projects: "View projects",
      about: "About me",
      imageAlt: "Edson Castillo, Full Stack developer",
      codeFocus: "AI + product",
    },
  }[language];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 22 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: "easeOut" },
    },
  };

  const stack = [
    { icon: SiNextdotjs, label: "Next.js", className: "" },
    { icon: SiTypescript, label: "TypeScript", className: "text-[#3178C6]" },
    { icon: SiReact, label: "React", className: "text-[#61DAFB]" },
    { icon: SiLaravel, label: "Laravel", className: "text-[#FF2D20]" },
    { icon: SiOpenai, label: "ChatGPT", className: "" },
    { icon: SiClaude, label: "Claude", className: "text-[#D97757]" },
    { icon: SiGooglegemini, label: "Gemini", className: "text-[#8E75C2]" },
    { icon: SiGit, label: "Git", className: "text-[#F05032]" },
  ];

  return (
    <main className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 tech-grid opacity-70" />
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-12%] left-[-8%] h-[42%] w-[42%] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-[8%] right-[-10%] h-[36%] w-[36%] rounded-full bg-primary/8 blur-[110px]" />
      </div>

      <section className="mx-auto grid min-h-[calc(100vh-80px)] w-full max-w-7xl items-center gap-12 px-6 py-14 lg:grid-cols-2 lg:gap-16 lg:py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          <motion.p
            variants={itemVariants}
            className="font-mono-label text-xs text-primary"
          >
            {copy.eyebrow}
          </motion.p>

          <motion.header variants={itemVariants} className="space-y-5">
            <h1 className="text-4xl font-bold leading-[1.08] text-foreground md:text-5xl lg:text-6xl">
              {copy.greeting}{" "}
              <span className="bg-gradient-to-r from-primary via-primary to-primary/70 bg-clip-text text-transparent">
                Edson
              </span>
              .
              <br />
              {copy.headline}
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {copy.description}
            </p>
          </motion.header>

          <motion.div
            variants={itemVariants}
            className="flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Button
              render={<Link href="/proyectos" />}
              nativeButton={false}
              size="lg"
              className="h-12 gap-2 rounded-lg px-7 text-base font-semibold shadow-lg shadow-primary/20 transition-all duration-300 hover:shadow-primary/30"
            >
              {copy.projects} <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              render={<Link href="/sobre-mi" />}
              nativeButton={false}
              variant="outline"
              size="lg"
              className="h-12 gap-2 rounded-lg px-7 text-base font-semibold"
            >
              {copy.about} <User className="h-4 w-4" />
            </Button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-2"
          >
            {stack.map(({ icon: Icon, label, className }) => (
              <div
                key={label}
                className="group flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
              >
                <Icon
                  className={`h-5 w-5 transition-transform duration-300 group-hover:scale-110 ${className}`}
                />
                <span className="font-mono text-[11px] font-medium uppercase tracking-wider">
                  {label}
                </span>
              </div>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex items-center gap-4 pt-1"
          >
            {[
              {
                href: "https://github.com/NosdeCasther1",
                icon: Github,
                label: "GitHub",
              },
              {
                href: "https://www.linkedin.com/in/edson-castillo",
                icon: Linkedin,
                label: "LinkedIn",
              },
              {
                href: "https://wa.me/50247170626",
                icon: MessageCircle,
                label: "WhatsApp",
              },
              {
                href: "https://t.me/+50247170626",
                icon: Send,
                label: "Telegram",
              },
              {
                href: "mailto:edsoncastilloh90@gmail.com",
                icon: Mail,
                label: "Email",
              },
            ].map(({ href, icon: Icon, label }) => (
              <Link
                key={label}
                href={href}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel={
                  href.startsWith("mailto:") ? undefined : "noopener noreferrer"
                }
                className="p-1.5 text-muted-foreground transition-all duration-200 hover:scale-110 hover:text-foreground"
                aria-label={label}
              >
                <Icon className="h-5 w-5" />
              </Link>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="absolute left-1/2 top-1/2 -z-10 h-[78%] w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/25 blur-3xl" />
          <div className="absolute left-1/2 top-1/2 -z-10 h-[62%] w-[62%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 blur-2xl" />

          <div className="relative aspect-square overflow-hidden rounded-full border border-primary/20 bg-background/40 shadow-[0_0_80px_-20px] shadow-primary/40">
            <Image
              src="/perfil-laptop.webp"
              alt={copy.imageAlt}
              fill
              sizes="(max-width: 1024px) 90vw, 480px"
              className="object-cover object-top"
              priority
            />
          </div>

          <motion.aside
            initial={{ opacity: 0, x: 24, y: 12 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55, ease: "easeOut" }}
            className="absolute -right-2 bottom-[12%] hidden w-[min(100%,240px)] rounded-xl border border-border/60 bg-background/85 p-4 font-mono text-[11px] shadow-xl backdrop-blur-md sm:block md:-right-4 lg:right-0"
            aria-hidden="true"
          >
            <div className="mb-3 flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-red-400/80" />
              <span className="h-2 w-2 rounded-full bg-amber-400/80" />
              <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
              <span className="ml-2 text-[10px] uppercase tracking-wider text-muted-foreground">
                developer.ts
              </span>
            </div>
            <pre className="leading-relaxed text-muted-foreground">
              <code>
                <span className="text-primary">const</span> edson = {"{"}
                {"\n"}
                {"  "}name:{" "}
                <span className="text-emerald-500 dark:text-emerald-400">
                  &quot;Edson Castillo&quot;
                </span>
                ,{"\n"}
                {"  "}role:{" "}
                <span className="text-emerald-500 dark:text-emerald-400">
                  &quot;Full Stack&quot;
                </span>
                ,{"\n"}
                {"  "}stack: [{" "}
                <span className="text-amber-600 dark:text-amber-400">
                  &quot;Next.js&quot;
                </span>
                ,{" "}
                <span className="text-amber-600 dark:text-amber-400">
                  &quot;Laravel&quot;
                </span>{" "}
                ],{"\n"}
                {"  "}focus:{" "}
                <span className="text-emerald-500 dark:text-emerald-400">
                  &quot;{copy.codeFocus}&quot;
                </span>
                ,{"\n"}
                {"}"};
              </code>
            </pre>
          </motion.aside>
        </motion.div>
      </section>
    </main>
  );
}
