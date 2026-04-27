"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ThemeToggle";

const navLinks = [
  { name: "Inicio", href: "/" },
  { name: "Proyectos", href: "/proyectos" },
  { name: "Habilidades", href: "/habilidades" },
  { name: "Contacto", href: "/contacto" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-primary-foreground group-hover:rotate-12 transition-transform duration-300">
            <Rocket size={20} />
          </div>
          <span className="text-xl font-bold tracking-tight text-foreground">
            Portafolio<span className="text-primary">.</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-8 mr-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </div>
          
          <div className="flex items-center gap-3 border-l border-border/40 pl-6">
            <ThemeToggle />
            <Link href="/contacto">
              <button suppressHydrationWarning className="bg-primary text-primary-foreground px-5 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition-all active:scale-95">
                Hablemos
              </button>
            </Link>
          </div>
        </div>

        {/* Mobile Toggle & ThemeToggle */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
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
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Link href="/contacto" onClick={() => setIsOpen(false)}>
                <button suppressHydrationWarning className="bg-primary text-primary-foreground w-full py-3 rounded-xl font-semibold mt-2 active:scale-95 transition-transform">
                  Hablemos
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
