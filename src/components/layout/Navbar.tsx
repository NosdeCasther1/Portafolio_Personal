"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Languages, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useLanguage } from "@/components/language-provider";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, toggleLanguage } = useLanguage();

  const copy = {
    es: {
      nav: [
        { name: "Inicio", href: "/" },
        { name: "Proyectos", href: "/proyectos" },
        { name: "Sobre Mí", href: "/sobre-mi" },
        { name: "Contacto", href: "/contacto" },
      ],
      contact: "Hablemos",
      switchLabel: "Cambiar idioma a inglés",
    },
    en: {
      nav: [
        { name: "Home", href: "/" },
        { name: "Projects", href: "/proyectos" },
        { name: "About Me", href: "/sobre-mi" },
        { name: "Contact", href: "/contacto" },
      ],
      contact: "Let's talk",
      switchLabel: "Switch language to Spanish",
    },
  }[language];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "sticky top-0 w-full z-50 transition-all duration-300",
        "bg-background/80 backdrop-blur-md border-b border-border/40",
        scrolled ? "py-3 shadow-sm" : "py-5"
      )}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative w-10 h-10 overflow-hidden rounded-full border-2 border-primary/40 shadow-sm transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/perfil.webp"
              alt="Foto de Edson Castillo"
              fill
              sizes="40px"
              className="object-cover"
              priority
            />
          </div>
          <span className="text-xl font-bold tracking-tight text-foreground">
            Edson{" "}
            <span className="text-primary">Castillo</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-8 mr-4">
            {copy.nav.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="font-mono text-xs font-medium uppercase tracking-wider text-muted-foreground transition-colors duration-200 hover:text-primary"
              >
                {link.name}
              </Link>
            ))}
          </div>
          
          <div className="flex items-center gap-3 border-l border-border/40 pl-6">
            <ThemeToggle />
            <button
              type="button"
              onClick={toggleLanguage}
              aria-label={copy.switchLabel}
              title={copy.switchLabel}
              className="flex h-9 items-center gap-1.5 rounded-lg border border-border/60 px-2.5 font-mono text-xs font-semibold text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
            >
              <Languages className="h-4 w-4" />
              {language === "es" ? "EN" : "ES"}
            </button>
            <Link
              href="/contacto"
              className="bg-primary text-primary-foreground px-5 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition-all active:scale-95"
            >
              {copy.contact}
            </Link>
          </div>
        </div>

        {/* Mobile Toggle & ThemeToggle */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={toggleLanguage}
            aria-label={copy.switchLabel}
            title={copy.switchLabel}
            className="flex h-9 items-center gap-1.5 rounded-lg border border-border/60 px-2.5 font-mono text-xs font-semibold text-muted-foreground"
          >
            <Languages className="h-4 w-4" />
            {language === "es" ? "EN" : "ES"}
          </button>
          <button
            suppressHydrationWarning
            className="text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-lg border-b border-border/40 overflow-hidden"
          >
            <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
              {copy.nav.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/contacto"
                onClick={() => setIsOpen(false)}
                className="bg-primary text-primary-foreground w-full py-3 rounded-xl font-semibold mt-2 text-center active:scale-95 transition-transform"
              >
                {copy.contact}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
