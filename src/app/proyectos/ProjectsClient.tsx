'use client';

import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Project } from '@/lib/mdx';

interface ProjectsClientProps {
  projects: Project[];
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export default function ProjectsClient({ projects }: ProjectsClientProps) {
  return (
    <main className="container mx-auto py-12 px-4 md:px-6">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col space-y-4 mb-12"
      >
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/60">
          Proyectos
        </h1>
        <p className="text-xl text-muted-foreground max-w-[800px]">
          Una selección de trabajos donde he aplicado mis habilidades de arquitectura y desarrollo, enfocados en la calidad y el rendimiento.
        </p>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {projects.map((project) => (
          <motion.div key={project.slug} variants={itemVariants}>
            <Link href={`/proyectos/${project.slug}`} className="group block h-full">
              <Card className="h-full flex flex-col overflow-hidden border-muted bg-card/50 backdrop-blur-sm hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 group-hover:border-primary/20">
                {project.image && (
                  <div className="w-full aspect-video overflow-hidden rounded-t-xl bg-muted/50 relative">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                )}
                
                <div className="flex-grow flex flex-col justify-between p-6">
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                        {new Date(project.date).toLocaleDateString('es-ES', {
                          year: 'numeric',
                          month: 'short'
                        })}
                      </span>
                      <ArrowUpRight className="w-5 h-5 text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-muted-foreground line-clamp-3 text-sm mb-6 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags?.map((tag) => (
                      <span 
                        key={tag} 
                        className="px-3 py-1 text-[10px] font-semibold uppercase tracking-tight rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {projects.length === 0 && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-20"
        >
          <p className="text-muted-foreground">No se encontraron proyectos en este momento.</p>
        </motion.div>
      )}
    </main>
  );
}
