"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X, Maximize2 } from "lucide-react";

interface ImageCarouselProps {
  images: string[];
}

export function ImageCarousel({ images }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  if (!images || images.length === 0) return null;

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Navegación por teclado para el modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isLightboxOpen) return;
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "Escape") setIsLightboxOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isLightboxOpen, images.length]);

  // Bloquear scroll de la página principal cuando el modal está abierto
  useEffect(() => {
    if (isLightboxOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isLightboxOpen]);

  // Variantes para la animación de la imagen principal (deslizamiento)
  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      zIndex: 0,
      x: dir < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  return (
    <>
      <section className="mt-12 md:mt-16 mb-8 w-full flex flex-col items-center">
        <div className="text-center mb-10">
          <h3 className="text-3xl font-bold text-foreground tracking-tight">
            Galería del Proyecto
          </h3>
          <p className="text-muted-foreground mt-2 font-medium">
            Explora la interfaz y experiencia de usuario del sistema.
          </p>
        </div>

        {/* VISOR PRINCIPAL (Preview en página) */}
        <div 
          className="relative w-full max-w-5xl aspect-video rounded-3xl overflow-hidden bg-muted shadow-2xl border border-border dark:bg-[#161616] dark:border-white/10 group cursor-pointer" 
          onClick={() => setIsLightboxOpen(true)}
        >
          <AnimatePresence initial={false} custom={direction}>
            <motion.img
              key={currentIndex}
              src={images[currentIndex]}
              alt={`Captura preview ${currentIndex + 1}`}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="absolute inset-0 w-full h-full object-cover"
              loading={currentIndex === 0 ? "eager" : "lazy"}
              decoding="async"
            />
          </AnimatePresence>
          
          {/* Overlay Hover para indicar expansión */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
            <div className="flex items-center gap-2 bg-white/10 text-white px-6 py-3 rounded-full backdrop-blur-md border border-white/20 shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <Maximize2 className="w-5 h-5" />
              <span className="font-medium tracking-wide">Abrir Galería Completa</span>
            </div>
          </div>

          {/* Indicador Inferior */}
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none">
            <p className="text-white text-sm font-medium">
              Captura {currentIndex + 1} de {images.length}
            </p>
          </div>
        </div>

        {/* CINTA DE MINIATURAS (Thumbnails) */}
        <div className="mt-8 w-full max-w-5xl">
          {/* Scrollbar nativa oculta con Tailwind arbitrario */}
          <div className="flex gap-4 overflow-x-auto py-4 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {images.map((img, index) => (
              <button
                key={index}
                onClick={(e) => { 
                  e.stopPropagation(); 
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index); 
                }}
                className={`relative flex-shrink-0 w-32 aspect-video rounded-xl overflow-hidden transition-all duration-300 snap-center
                  ${
                    currentIndex === index
                      ? "ring-2 ring-primary ring-offset-2 ring-offset-background opacity-100 scale-105"
                      : "opacity-40 hover:opacity-100"
                  }
                `}
              >
                <img
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHTBOX MODAL a pantalla completa */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/95 backdrop-blur-xl"
            onClick={() => setIsLightboxOpen(false)}
          >
            {/* Toolbar Superior */}
            <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center z-50">
              <div className="text-white/70 font-medium tracking-widest text-sm bg-black/50 px-4 py-2 rounded-full backdrop-blur-md">
                {currentIndex + 1} / {images.length}
              </div>
              <button
                onClick={() => setIsLightboxOpen(false)}
                className="p-3 bg-white/5 hover:bg-white/20 hover:scale-110 text-white rounded-full transition-all backdrop-blur-md border border-white/10"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Imagen Principal en Modal */}
            <div className="relative w-full h-[70vh] flex items-center justify-center px-4 md:px-16" onClick={(e) => e.stopPropagation()}>
              <AnimatePresence initial={false} custom={direction}>
                <motion.img
                  key={currentIndex}
                  src={images[currentIndex]}
                  alt={`Captura ${currentIndex + 1}`}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="absolute max-w-full max-h-full object-contain rounded-lg shadow-[0_0_50px_rgba(0,0,0,0.5)]"
                  decoding="async"
                />
              </AnimatePresence>

              {/* Controles de Navegación Modal */}
              <button
                onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-4 rounded-full bg-black/50 text-white hover:bg-white/10 hover:scale-110 transition-all backdrop-blur-md border border-white/10 group z-10"
              >
                <ChevronLeft className="w-8 h-8 group-hover:-translate-x-1 transition-transform" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); handleNext(); }}
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-4 rounded-full bg-black/50 text-white hover:bg-white/10 hover:scale-110 transition-all backdrop-blur-md border border-white/10 group z-10"
              >
                <ChevronRight className="w-8 h-8 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Miniaturas en Modal */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/80 to-transparent" onClick={(e) => e.stopPropagation()}>
              <div className="flex max-w-5xl mx-auto overflow-x-auto gap-4 pb-4 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setDirection(idx > currentIndex ? 1 : -1);
                      setCurrentIndex(idx);
                    }}
                    className={`relative flex-shrink-0 w-24 aspect-video md:w-32 rounded-lg overflow-hidden transition-all duration-300 snap-center
                      ${
                        idx === currentIndex
                          ? "ring-2 ring-indigo-500 ring-offset-2 ring-offset-black opacity-100 scale-105 shadow-xl"
                          : "opacity-40 hover:opacity-100 hover:scale-105"
                      }
                    `}
                  >
                    <img
                      src={img}
                      alt={`Thumbnail ${idx + 1}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
