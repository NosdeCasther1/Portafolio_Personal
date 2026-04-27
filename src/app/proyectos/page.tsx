import Link from 'next/link';
import { getProjects } from '@/lib/mdx';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

export const metadata = {
  title: 'Mis Proyectos | Portafolio',
  description: 'Explora mi colección de proyectos desarrollados con las últimas tecnologías.',
};

export default async function ProyectosPage() {
  const projects = getProjects();

  return (
    <main className="container mx-auto py-12 px-4 md:px-6">
      <div className="flex flex-col space-y-4 mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Proyectos
        </h1>
        <p className="text-xl text-muted-foreground">
          Una selección de trabajos donde he aplicado mis habilidades de arquitectura y desarrollo.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Link key={project.slug} href={`/proyectos/${project.slug}`} className="group">
            <Card className="h-full overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1 hover:border-primary/30 border-muted bg-card/50 backdrop-blur-sm">
              {project.image && (
                <div className="aspect-video w-full overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              )}
              <CardHeader>
                <div className="text-sm text-muted-foreground mb-2">
                  {new Date(project.date).toLocaleDateString('es-ES', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>
                <CardTitle className="group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="line-clamp-2">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags?.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-2 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {projects.length === 0 && (
        <div className="text-center py-20">
          <p className="text-muted-foreground">No se encontraron proyectos.</p>
        </div>
      )}
    </main>
  );
}
