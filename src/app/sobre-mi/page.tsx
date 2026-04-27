"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { 
  User, 
  Briefcase, 
  Cpu, 
  GraduationCap, 
  Award,
  Calendar,
  MapPin,
  ExternalLink
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

// Componente para renderizar iconos de tecnología dinámicamente
const TechIcon = ({ iconKey, className }: { iconKey: string; className?: string }) => {
  const Icon = (SiIcons as Record<string, IconType>)[iconKey];
  if (!Icon) return <Cpu className={className} />;
  return <Icon className={className} />;
};

export default function AboutPage() {
  const fadeIn = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.4 }
  };

  return (
    <main className="max-w-6xl mx-auto py-16 px-6">
      {/* Header Minimalista */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">Dashboard de Perfil</h1>
        <p className="text-muted-foreground mt-2 text-lg">Explora mi trayectoria profesional, formación y habilidades técnicas.</p>
      </div>

      <Tabs defaultValue="sobre-mi" className="flex flex-col md:flex-row gap-12">
        {/* Columna de Navegación (Izquierda) */}
        <aside className="w-full md:w-64">
          <TabsList className="flex flex-row md:flex-col h-auto w-full bg-transparent overflow-x-auto md:overflow-visible justify-start md:space-y-1 border-b md:border-b-0 md:border-l-2 border-muted/50 p-0 no-scrollbar">
            <TabsTrigger 
              value="sobre-mi" 
              className="flex items-center gap-3 justify-start px-5 py-4 data-[state=active]:bg-primary/5 data-[state=active]:text-primary rounded-none md:rounded-r-xl border-b-2 md:border-b-0 md:border-l-2 border-transparent data-[state=active]:border-primary transition-all duration-300 whitespace-nowrap text-sm font-semibold tracking-wide uppercase"
            >
              <User className="w-4 h-4" />
              <span>Sobre Mí</span>
            </TabsTrigger>
            <TabsTrigger 
              value="experiencia" 
              className="flex items-center gap-3 justify-start px-5 py-4 data-[state=active]:bg-primary/5 data-[state=active]:text-primary rounded-none md:rounded-r-xl border-b-2 md:border-b-0 md:border-l-2 border-transparent data-[state=active]:border-primary transition-all duration-300 whitespace-nowrap text-sm font-semibold tracking-wide uppercase"
            >
              <Briefcase className="w-4 h-4" />
              <span>Experiencia</span>
            </TabsTrigger>
            <TabsTrigger 
              value="habilidades" 
              className="flex items-center gap-3 justify-start px-5 py-4 data-[state=active]:bg-primary/5 data-[state=active]:text-primary rounded-none md:rounded-r-xl border-b-2 md:border-b-0 md:border-l-2 border-transparent data-[state=active]:border-primary transition-all duration-300 whitespace-nowrap text-sm font-semibold tracking-wide uppercase"
            >
              <Cpu className="w-4 h-4" />
              <span>Habilidades</span>
            </TabsTrigger>
            <TabsTrigger 
              value="educacion" 
              className="flex items-center gap-3 justify-start px-5 py-4 data-[state=active]:bg-primary/5 data-[state=active]:text-primary rounded-none md:rounded-r-xl border-b-2 md:border-b-0 md:border-l-2 border-transparent data-[state=active]:border-primary transition-all duration-300 whitespace-nowrap text-sm font-semibold tracking-wide uppercase"
            >
              <GraduationCap className="w-4 h-4" />
              <span>Educación</span>
            </TabsTrigger>
            <TabsTrigger 
              value="desarrollo" 
              className="flex items-center gap-3 justify-start px-5 py-4 data-[state=active]:bg-primary/5 data-[state=active]:text-primary rounded-none md:rounded-r-xl border-b-2 md:border-b-0 md:border-l-2 border-transparent data-[state=active]:border-primary transition-all duration-300 whitespace-nowrap text-sm font-semibold tracking-wide uppercase"
            >
              <Award className="w-4 h-4" />
              <span>Certificados</span>
            </TabsTrigger>
          </TabsList>
        </aside>

        {/* Columna de Contenido (Derecha) */}
        <div className="flex-1 min-w-0">
          {/* SOBRE MÍ */}
          <TabsContent value="sobre-mi" className="mt-0 focus-visible:outline-none">
            <motion.div {...fadeIn} className="space-y-10">
              <div className="flex flex-col lg:flex-row gap-10 items-center lg:items-start text-center lg:text-left">
                <div className="relative w-40 h-40 md:w-56 md:h-56 flex-shrink-0">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl opacity-50"></div>
                  <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-muted-foreground/20 shadow-2xl">
                    <Image
                      src="/perfil.jpg"
                      alt="Foto de Perfil"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 160px, 224px"
                    />
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">Edson Castillo</h2>
                    <p className="text-primary font-medium text-lg uppercase tracking-wider">Ingeniero Full Stack & Especialista en IA</p>
                  </div>
                  <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">
                    Soy un Ingeniero en Sistemas apasionado por la convergencia entre el diseño elegante y el código robusto. Mi enfoque se centra en construir soluciones tecnológicas que no solo resuelvan problemas, sino que también cautiven a los usuarios.
                  </p>
                  <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">
                    Con experiencia en el sector financiero y el desarrollo de aplicaciones inteligentes impulsadas por IA, aporto una perspectiva equilibrada entre seguridad, escalabilidad y experiencia de usuario.
                  </p>
                  <div className="flex flex-wrap gap-4 pt-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span>Guatemala</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span>Disponible para proyectos</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </TabsContent>

          {/* EXPERIENCIA */}
          <TabsContent value="experiencia" className="mt-0 focus-visible:outline-none">
            <motion.div {...fadeIn} className="space-y-12">
              <div className="border-l-2 border-muted ml-3 space-y-10">
                {experienceData.map((item, index) => (
                  <div key={item.id} className="relative pl-8">
                    <div className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full border-2 border-background bg-primary shadow-sm"></div>
                    <div className="space-y-3">
                      <div>
                        <h3 className="text-xl font-bold text-foreground">{item.role}</h3>
                        <div className="flex items-center gap-2 text-primary font-medium">
                          <span>{item.company}</span>
                          <span className="text-muted-foreground/30">•</span>
                          <span className="text-sm text-muted-foreground">{item.period}</span>
                        </div>
                      </div>
                      <div className="text-muted-foreground leading-relaxed">
                        {Array.isArray(item.description) ? (
                          <ul className="space-y-2">
                            {item.description.map((desc, i) => (
                              <li key={i} className="flex gap-2">
                                <span className="text-primary mt-1.5 flex-shrink-0 h-1.5 w-1.5 rounded-full bg-primary/40" />
                                <span>{desc}</span>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p>{item.description}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </TabsContent>

          {/* HABILIDADES */}
          <TabsContent value="habilidades" className="mt-0 focus-visible:outline-none">
            <motion.div {...fadeIn} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((category) => (
                <Card key={category.category} className="border-muted bg-card/50">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg font-bold">{category.category}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-wrap gap-2">
                    {category.technologies.map((tech) => (
                      <Badge 
                        key={tech.name} 
                        variant="secondary" 
                        className="flex items-center gap-2 py-1.5 px-3 bg-muted/50 hover:bg-primary hover:text-primary-foreground transition-colors border-none"
                      >
                        <TechIcon iconKey={tech.iconKey} className="w-3.5 h-3.5" />
                        <span>{tech.name}</span>
                      </Badge>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </TabsContent>

          {/* EDUCACIÓN */}
          <TabsContent value="educacion" className="mt-0 focus-visible:outline-none">
            <motion.div {...fadeIn} className="space-y-4">
              {educationData.map((edu) => (
                <Card key={edu.id} className="border-muted bg-card/50 overflow-hidden group hover:border-primary/50 transition-colors">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{edu.degree}</CardTitle>
                      <CardDescription className="text-base">{edu.institution}</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground mb-3">
                      <Calendar className="w-4 h-4" />
                      <span>{edu.period}</span>
                    </div>
                    {edu.description && (
                      <p className="text-muted-foreground leading-relaxed">{edu.description}</p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </TabsContent>

          {/* DESARROLLO */}
          <TabsContent value="desarrollo" className="mt-0 focus-visible:outline-none">
            <motion.div {...fadeIn} className="grid grid-cols-1 gap-4">
              {certificationsData.map((cert) => (
                <Card key={cert.id} className="border-muted bg-card/50 group hover:border-primary/50 transition-colors">
                  <CardHeader className="flex flex-row items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                        <Award className="w-6 h-6" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{cert.title}</CardTitle>
                        <CardDescription>{cert.issuer} • {cert.date}</CardDescription>
                      </div>
                    </div>
                    {cert.link && (
                      <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </CardHeader>
                </Card>
              ))}
            </motion.div>
          </TabsContent>
        </div>
      </Tabs>
    </main>
  );
}
