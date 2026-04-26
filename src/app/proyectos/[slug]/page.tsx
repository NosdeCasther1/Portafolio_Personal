import { getProjectBySlug, getProjects } from '@/lib/mdx';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  
  try {
    const project = getProjectBySlug(slug);
    
    return {
      title: project.title,
      description: project.description,
      openGraph: {
        title: project.title,
        description: project.description,
        type: "article",
        publishedTime: project.date,
        images: project.image ? [{ url: project.image }] : [],
      },
    };
  } catch (error) {
    return {
      title: "Proyecto no encontrado",
      description: "El proyecto solicitado no existe o ha sido movido.",
    };
  }
}

export async function generateStaticParams() {
  const projects = getProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  let project;

  try {
    project = getProjectBySlug(slug);
  } catch (error) {
    notFound();
  }

  return (
    <article className="container mx-auto py-12 px-4 md:px-6 max-w-4xl">
      <Link href="/proyectos">
        <Button variant="ghost" className="mb-8 -ml-4 gap-2 text-muted-foreground hover:text-foreground">
          <ChevronLeft className="w-4 h-4" />
          Volver a proyectos
        </Button>
      </Link>

      <header className="mb-12">
        <div className="flex flex-col space-y-4">
          <div className="text-sm font-medium text-primary">
            {new Date(project.date).toLocaleDateString('es-ES', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {project.title}
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            {project.description}
          </p>
        </div>
        
        {project.image && (
          <div className="mt-10 rounded-2xl overflow-hidden border border-muted aspect-video shadow-2xl">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}
      </header>

      <div className="prose prose-lg dark:prose-invert mx-auto mt-8">
        <MDXRemote source={project.content} />
      </div>

      <footer className="mt-16 pt-8 border-t border-muted">
        <div className="flex flex-wrap gap-2">
          {project.tags?.map((tag) => (
            <span 
              key={tag} 
              className="px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </footer>
    </article>
  );
}
