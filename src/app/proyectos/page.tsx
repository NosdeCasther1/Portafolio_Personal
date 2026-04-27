import { getProjects } from '@/lib/mdx';
import ProjectsClient from './ProjectsClient';

export const metadata = {
  title: 'Mis Proyectos | Portafolio',
  description: 'Explora mi colección de proyectos desarrollados con las últimas tecnologías.',
};

export default async function ProyectosPage() {
  const projects = getProjects();

  return <ProjectsClient projects={projects} />;
}
