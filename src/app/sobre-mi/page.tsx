"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { 
  User, 
  Briefcase, 
  Cpu, 
  GraduationCap, 
  Award,
  Calendar,
  MapPin,
  ExternalLink,
  ChevronRight
} from "lucide-react";
import { 
  experienceData, 
  educationData, 
  certificationsData 
} from "@/lib/data/experience";
import { skills } from "@/lib/data/skills";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import * as SiIcons from "react-icons/si";
import { IconType } from "react-icons";
import { cn } from "@/lib/utils";

// --- Tipado de Datos ---
const TAB_VALUES = ["sobre-mi", "experiencia", "habilidades", "educacion", "desarrollo"] as const;
type TabValue = (typeof TAB_VALUES)[number];

// --- Subcomponente: Iconos de Tecnología ---
const TechIcon = ({ iconKey, className }: { iconKey: string; className?: string }) => {
  const Icon = (SiIcons as Record<string, IconType>)[iconKey];
  if (!Icon) return <Cpu className={className} />;
  return <Icon className={className} />;
};

// --- Subcomponente: Barra de Progreso ---
const ReadingProgress = ({ visitedCount, total }: { visitedCount: number, total: number }) => {
  const percentage = (visitedCount / total) * 100;
  
  return (
    <div className="w-full h-1.5 bg-muted/30 rounded-full overflow-hidden mb-8">
      <motion.div 
        className="h-full bg-gradient-to-r from-primary/60 via-primary to-primary"
        initial={{ width: 0 }}
        animate={{ width: `${percentage}%` }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />
    </div>
  );
};

export default function AboutDashboard() {
  const [activeTab, setActiveTab] = useState<TabValue>("sobre-mi");
  const [visitedTabs, setVisitedTabs] = useState<Set<string>>(new Set(["sobre-mi"]));

  const handleTabChange = (value: string) => {
    const val = value as TabValue;
    setActiveTab(val);
    setVisitedTabs(prev => new Set(prev).add(val));
  };

  const fadeInContent = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -10 },
    transition: { duration: 0.4, ease: "easeOut" as const }
  };

  return (
    <main className="min-h-screen bg-background py-12 px-4 md:py-20">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Cabecera del Dashboard */}
        <header className="space-y-2 border-b border-muted pb-8">
          <div className="flex items-center gap-2 text-primary font-mono text-sm uppercase tracking-widest">
            <span className="w-8 h-px bg-primary/40" />
            Perfil Profesional
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-muted-foreground">
            Dashboard de Trayectoria
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Un desglose detallado de mi evolución técnica, experiencia en la industria y formación académica continua.
          </p>
        </header>

        <Tabs 
          defaultValue="sobre-mi" 
          value={activeTab}
          onValueChange={handleTabChange}
          className="flex flex-col md:flex-row gap-8 lg:gap-16"
        >
          {/* Navegación Vertical (Escritorio) / Horizontal (Móvil) */}
          <aside className="w-full md:w-72 flex-shrink-0">
            <TabsList className="flex flex-row md:flex-col h-auto w-full bg-transparent overflow-x-auto md:overflow-visible justify-start p-0 gap-1 no-scrollbar border-b md:border-b-0">
              {TAB_VALUES.map((tab) => (
                <TabsTrigger
                  key={tab}
                  value={tab}
                  className={cn(
                    "flex items-center gap-3 justify-start px-4 py-3.5 transition-all duration-300 relative group",
                    "text-muted-foreground data-[state=active]:text-primary data-[state=active]:bg-primary/5",
                    "md:border-l-2 border-transparent data-[state=active]:md:border-primary rounded-none md:rounded-r-lg",
                    "whitespace-nowrap font-medium text-sm capitalize tracking-wide"
                  )}
                >
                  {tab === "sobre-mi" && <User className="w-4 h-4" />}
                  {tab === "experiencia" && <Briefcase className="w-4 h-4" />}
                  {tab === "habilidades" && <Cpu className="w-4 h-4" />}
                  {tab === "educacion" && <GraduationCap className="w-4 h-4" />}
                  {tab === "desarrollo" && <Award className="w-4 h-4" />}
                  <span className="relative z-10">{tab.replace("-", " ")}</span>
                  <div className="absolute right-4 opacity-0 group-hover:opacity-100 md:block hidden transition-opacity">
                    <ChevronRight className="w-3 h-3" />
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>
          </aside>

          {/* Área de Contenido */}
          <section className="flex-1 min-w-0">
            {/* Barra de Progreso de Lectura */}
            <ReadingProgress visitedCount={visitedTabs.size} total={TAB_VALUES.length} />

            <AnimatePresence mode="wait">
              {/* SOBRE MÍ */}
              <TabsContent key="tab-sobre-mi" value="sobre-mi" className="mt-0 outline-none focus:ring-0">
                <motion.div key="sobre-mi" {...fadeInContent} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                  <div className="lg:col-span-4 flex justify-center lg:justify-start">
                    <div className="relative group">
                      <div className="absolute -inset-1 bg-gradient-to-tr from-primary to-primary-foreground rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                      <div className="relative aspect-square w-64 h-64 md:w-72 md:h-72 rounded-2xl overflow-hidden border-4 border-background shadow-2xl">
                        <Image
                          src="/perfil.jpg"
                          alt="Edson Castillo"
                          fill
                          className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                          priority
                        />
                      </div>
                    </div>
                  </div>
                  <div className="lg:col-span-8 space-y-6">
                    <div className="prose prose-slate dark:prose-invert max-w-none">
                      <h2 className="text-3xl font-bold text-foreground mb-4">Ingeniero Full Stack & Especialista en IA</h2>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        Soy un Ingeniero en Sistemas apasionado por la convergencia entre el diseño elegante y el código robusto. Mi enfoque se centra en construir soluciones tecnológicas que no solo resuelvan problemas, sino que también cautiven a los usuarios.
                      </p>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        Con amplia experiencia en el sector financiero y el desarrollo de aplicaciones inteligentes impulsadas por IA, aporto una perspectiva equilibrada entre seguridad, escalabilidad y experiencia de usuario. Mi objetivo es transformar ideas complejas en productos digitales intuitivos y eficientes.
                      </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                      <div className="flex items-center gap-3 p-4 rounded-xl bg-muted/30 border border-muted/50">
                        <MapPin className="w-5 h-5 text-primary" />
                        <div>
                          <p className="text-xs text-muted-foreground uppercase font-semibold">Ubicación</p>
                          <p className="text-sm font-medium">Guatemala, GT</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-4 rounded-xl bg-muted/30 border border-muted/50">
                        <Calendar className="w-5 h-5 text-primary" />
                        <div>
                          <p className="text-xs text-muted-foreground uppercase font-semibold">Estado</p>
                          <p className="text-sm font-medium">Disponible para Proyectos</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </TabsContent>

              {/* EXPERIENCIA */}
              <TabsContent key="tab-experiencia" value="experiencia" className="mt-0 outline-none">
                <motion.div key="experiencia" {...fadeInContent} className="relative pl-8 space-y-12 before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-gradient-to-b before:from-primary before:via-muted before:to-muted">
                  {experienceData.map((exp) => (
                    <div key={exp.id} className="relative">
                      <div className="absolute -left-[30px] top-1.5 w-5 h-5 rounded-full border-4 border-background bg-primary shadow-lg shadow-primary/20" />
                      <div className="space-y-3">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                          <Badge variant="outline" className="font-mono text-[10px] uppercase">{exp.period}</Badge>
                        </div>
                        <p className="text-primary font-semibold flex items-center gap-2">
                          {exp.company}
                        </p>
                        <div className="text-muted-foreground leading-relaxed space-y-3">
                          {Array.isArray(exp.description) ? (
                            <ul className="space-y-3">
                              {exp.description.map((item, i) => (
                                <li key={i} className="flex gap-3 text-sm">
                                  <span className="text-primary mt-1.5 block w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          ) : (
                            <p className="text-sm">{exp.description}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </TabsContent>

              {/* HABILIDADES */}
              <TabsContent key="tab-habilidades" value="habilidades" className="mt-0 outline-none">
                <motion.div key="habilidades" {...fadeInContent} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {skills.map((category) => (
                    <Card key={category.category} className="bg-card/40 border-muted/50 overflow-hidden">
                      <CardHeader className="pb-4 bg-muted/20">
                        <CardTitle className="text-md font-bold flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-primary" />
                          {category.category}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="flex flex-wrap gap-2 pt-6">
                        {category.technologies.map((tech) => (
                          <Badge 
                            key={tech.name} 
                            variant="secondary" 
                            className="flex items-center gap-2 py-2 px-3 bg-background hover:bg-primary hover:text-primary-foreground transition-all duration-300 border border-muted group"
                          >
                            <TechIcon iconKey={tech.iconKey} className="w-3.5 h-3.5 text-primary group-hover:text-primary-foreground" />
                            <span className="text-xs">{tech.name}</span>
                          </Badge>
                        ))}
                      </CardContent>
                    </Card>
                  ))}
                </motion.div>
              </TabsContent>

              {/* EDUCACIÓN */}
              <TabsContent key="tab-educacion" value="educacion" className="mt-0 outline-none">
                <motion.div key="educacion" {...fadeInContent} className="grid grid-cols-1 gap-6">
                  {educationData.map((edu) => (
                    <Card key={edu.id} className="group border-muted hover:border-primary/50 transition-all duration-300 bg-card/50">
                      <CardHeader className="flex flex-row items-center gap-6">
                        <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-500">
                          <GraduationCap className="w-8 h-8" />
                        </div>
                        <div className="flex-1 space-y-1">
                          <div className="flex justify-between items-start">
                            <CardTitle className="text-xl font-bold">{edu.degree}</CardTitle>
                            <span className="text-sm font-mono text-muted-foreground">{edu.period}</span>
                          </div>
                          <CardDescription className="text-base text-primary font-medium">{edu.institution}</CardDescription>
                        </div>
                      </CardHeader>
                      {edu.description && (
                        <CardContent>
                          <p className="text-muted-foreground leading-relaxed pl-20">{edu.description}</p>
                        </CardContent>
                      )}
                    </Card>
                  ))}
                </motion.div>
              </TabsContent>

              {/* DESARROLLO */}
              <TabsContent key="tab-desarrollo" value="desarrollo" className="mt-0 outline-none">
                <motion.div key="desarrollo" {...fadeInContent} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {certificationsData.map((cert) => (
                    <Card key={cert.id} className="border-muted hover:border-primary/50 transition-all duration-300 bg-card/40 flex flex-col justify-between">
                      <CardHeader className="space-y-4">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                          <Award className="w-5 h-5" />
                        </div>
                        <div className="space-y-1">
                          <CardTitle className="text-lg">{cert.title}</CardTitle>
                          <CardDescription className="flex items-center gap-2">
                            {cert.issuer} • <span className="font-mono text-xs">{cert.date}</span>
                          </CardDescription>
                        </div>
                      </CardHeader>
                      {cert.link && (
                        <CardContent className="pt-0">
                          <a 
                            href={cert.link} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="inline-flex items-center gap-2 text-sm text-primary hover:underline font-medium"
                          >
                            Ver Certificado <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        </CardContent>
                      )}
                    </Card>
                  ))}
                </motion.div>
              </TabsContent>
            </AnimatePresence>
          </section>
        </Tabs>
      </div>
    </main>
  );
}
