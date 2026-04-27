import { experienceData } from "@/lib/data/experience";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre Mí | Portafolio",
  description: "Conoce más sobre mi experiencia profesional, habilidades y trayectoria en el desarrollo de software.",
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      {/* Sección 1: Biografía */}
      <section className="mb-16">
        <h1 className="text-4xl font-bold mb-6 tracking-tight">Sobre Mí</h1>
        <div className="space-y-5 text-muted-foreground text-lg leading-relaxed">
          <p>
            Soy un apasionado desarrollador de software con un enfoque especial en el ecosistema frontend. Mi objetivo es construir interfaces de usuario no solo visualmente atractivas, sino también altamente funcionales, accesibles y optimizadas. Creo firmemente que una buena arquitectura es la base para cualquier producto digital exitoso.
          </p>
          <p>
            A lo largo de mi trayectoria, he trabajado con diversas tecnologías, adoptando siempre las mejores prácticas del desarrollo moderno. Me motiva resolver problemas complejos mediante código limpio y mantenible, siempre con el usuario final en mente. Cuando no estoy programando, disfruto explorando nuevas herramientas, contribuyendo a la comunidad open-source y aprendiendo continuamente.
          </p>
        </div>
      </section>

      {/* Sección 2: Línea de Tiempo */}
      <section>
        <h2 className="text-3xl font-semibold mb-8 tracking-tight">Experiencia y Trayectoria</h2>
        
        <div className="ml-2 sm:ml-4 border-l-2 border-muted">
          {experienceData.map((item) => (
            <div key={item.id} className="relative pl-8 pb-12 last:pb-0">
              {/* Nodo de la línea de tiempo */}
              <span className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-primary ring-4 ring-background" />
              
              {/* Contenido principal del ítem */}
              <div className="flex flex-col gap-1.5 mb-3">
                <h3 className="text-xl font-bold flex flex-wrap items-center gap-3">
                  {item.role}
                  <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-secondary text-secondary-foreground">
                    {item.type}
                  </span>
                </h3>
                
                <div className="flex flex-wrap items-center gap-2 text-base">
                  <span className="font-semibold text-foreground">{item.company}</span>
                  <span className="text-muted-foreground hidden sm:inline">•</span>
                  <span className="text-muted-foreground text-sm font-medium">{item.period}</span>
                </div>
              </div>
              
              {/* Descripción */}
              <div className="text-muted-foreground text-base leading-relaxed">
                {Array.isArray(item.description) ? (
                  <ul className="list-disc ml-5 space-y-2 marker:text-muted-foreground/70">
                    {item.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                ) : (
                  <p>{item.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
