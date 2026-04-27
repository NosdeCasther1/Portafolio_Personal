import { Metadata } from "next";
import { skills } from "@/lib/data/skills";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import * as SiIcons from "react-icons/si";
import { IconType } from "react-icons";

export const metadata: Metadata = {
  title: "Habilidades | Portafolio Personal",
  description: "Explora mi stack tecnológico y las herramientas que utilizo para crear aplicaciones web de alto impacto.",
};

/**
 * Helper component to render technology icons from Simple Icons
 */
const TechIcon = ({ iconKey, className }: { iconKey: string; className?: string }) => {
  const Icon = (SiIcons as Record<string, IconType>)[iconKey];
  if (!Icon) return null;
  return <Icon className={className} />;
};

export default function HabilidadesPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto py-16 px-6 lg:py-24">
        {/* Header Section */}
        <header className="mb-16 space-y-4 text-left animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Habilidades y <span className="text-primary">Herramientas</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Como Desarrollador Senior, me enfoco en utilizar las mejores tecnologías para construir productos digitales escalables, performantes y con una experiencia de usuario excepcional.
          </p>
        </header>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((item, index) => (
            <Card 
              key={item.category} 
              className="group border-border/40 bg-card/50 backdrop-blur-sm transition-all duration-300 ease-in-out hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 hover:border-primary/30"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <CardTitle className="text-xl font-bold tracking-tight group-hover:text-primary transition-colors">
                  {item.category}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {item.technologies.map((tech) => (
                  <Badge 
                    key={tech.name} 
                    variant="secondary" 
                    className="flex items-center gap-2 px-2.5 py-1 text-xs font-semibold bg-secondary/50 text-secondary-foreground border-transparent transition-all hover:bg-primary hover:text-primary-foreground"
                  >
                    <TechIcon iconKey={tech.iconKey} className="size-4" />
                    <span>{tech.name}</span>
                  </Badge>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}

