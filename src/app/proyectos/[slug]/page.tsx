import { getProjectBySlug, getProjects } from '@/lib/mdx';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ImageCarousel } from '@/components/ImageCarousel';
import PremiumFeatures from '@/components/PremiumFeatures';
import ProjectHero from '@/components/ProjectHero';
import TechStackBadges from '@/components/TechStackBadges';

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
    <article className="container mx-auto py-12 px-4 md:px-6 max-w-6xl">
      <Link href="/proyectos">
        <Button variant="ghost" className="mb-8 -ml-4 gap-2 text-muted-foreground hover:text-foreground">
          <ChevronLeft className="w-4 h-4" />
          Volver a proyectos
        </Button>
      </Link>

      <ProjectHero project={project} />

      <div className="prose prose-lg dark:prose-invert mx-auto">
        <MDXRemote 
          source={project.content} 
          components={{ 
            PremiumFeatures: (props) => <PremiumFeatures features={project.features} {...props} />,
            TechStackBadges: (props) => <TechStackBadges tags={project.tags} {...props} />
          }} 
        />
      </div>

      {project.images && project.images.length > 0 && (
        <ImageCarousel images={project.images} />
      )}
    </article>
  );
}
