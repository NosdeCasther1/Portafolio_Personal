import type { Metadata } from 'next';
import { getProjects } from '@/lib/mdx';
import ProjectsClient from './ProjectsClient';

export const metadata: Metadata = {
  title: 'Proyectos de desarrollo Full Stack',
  description: 'Proyectos de Edson Castillo desarrollados con Next.js, Laravel, TypeScript, React e inteligencia artificial.',
  alternates: {
    canonical: '/proyectos',
  },
  openGraph: {
    title: 'Proyectos de desarrollo Full Stack | Edson Castillo',
    description: 'Explora proyectos web creados con Next.js, Laravel, TypeScript, React e inteligencia artificial.',
    url: '/proyectos',
  },
};

export default async function ProyectosPage() {
  const projects = getProjects();

  return <ProjectsClient projects={projects} />;
}
