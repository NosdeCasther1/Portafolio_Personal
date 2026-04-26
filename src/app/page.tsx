import { ContactForm } from "@/components/ContactForm"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center py-20 px-4 sm:px-6 lg:px-8">
      {/* Contenedor principal que limita el ancho */}
      <div className="w-full max-w-2xl space-y-12">
        
        {/* Sección de Encabezado */}
        <header className="space-y-4">
          <p className="text-sm font-semibold tracking-wider text-muted-foreground uppercase">
            Disponible para nuevos retos
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Hola, soy un desarrollador
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Especializado en la creación de interfaces de usuario excepcionales, combinando un diseño impecable con un rendimiento técnico de vanguardia. Transformo visiones complejas en experiencias digitales fluidas.
          </p>
        </header>

        {/* Sección del Formulario (Envuelta en una tarjeta) */}
        <section className="bg-card text-card-foreground border border-border rounded-xl p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-semibold mb-2">Hablemos de tu próximo proyecto</h2>
          <p className="text-muted-foreground mb-6">
            ¿Tienes una idea en mente? Envíame un mensaje y busquemos la mejor forma de colaborar.
          </p>

          <ContactForm />
        </section>
      </div>
    </main>
  )
}

