import { MetadataRoute } from 'next';
import { getProjects } from '@/lib/mdx';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://tu-portafolio.com"; // TODO: Cambiar por tu dominio real

  // Rutas estáticas
  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/proyectos`,
      lastModified: new Date(),
    },
  ];

  // Rutas dinámicas de proyectos
  const projects = getProjects();
  const projectRoutes = projects.map((project) => ({
    url: `${baseUrl}/proyectos/${project.slug}`,
    lastModified: new Date(project.date),
  }));

  return [...staticRoutes, ...projectRoutes];
}
