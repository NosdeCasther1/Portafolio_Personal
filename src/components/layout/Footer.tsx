"use client";

import React from "react";
import Link from "next/link";
import { Github, Linkedin, Mail, MessageCircle, Send } from "lucide-react";
import { useLanguage } from "@/components/language-provider";

export const Footer = () => {
  const { language } = useLanguage();
  const copy = {
    es: {
      description:
        "Diseñando y construyendo experiencias digitales excepcionales con un enfoque en la calidad, la accesibilidad y el rendimiento.",
      navigation: "Navegación",
      links: [
        { label: "Inicio", href: "/" },
        { label: "Proyectos", href: "/proyectos" },
        { label: "Sobre Mí", href: "/sobre-mi" },
        { label: "Habilidades", href: "/habilidades" },
        { label: "Contacto", href: "/contacto" },
      ],
    },
    en: {
      description:
        "Designing and building exceptional digital experiences with a focus on quality, accessibility, and performance.",
      navigation: "Navigation",
      links: [
        { label: "Home", href: "/" },
        { label: "Projects", href: "/proyectos" },
        { label: "About Me", href: "/sobre-mi" },
        { label: "Skills", href: "/habilidades" },
        { label: "Contact", href: "/contacto" },
      ],
    },
  }[language];

  return (
    <footer className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 transition-colors">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white mb-4 block">
              Edson <span className="text-blue-600">Castillo</span>
            </Link>
            <p className="text-slate-600 dark:text-slate-400 max-w-sm leading-relaxed">
              {copy.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-6">
              {copy.navigation}
            </h4>
            <ul className="space-y-4">
              {copy.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-6">
              Social
            </h4>
            <div className="flex gap-4">
              {[
                { icon: Github, href: "https://github.com/NosdeCasther1", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/edson-castillo", label: "LinkedIn" },
                { icon: MessageCircle, href: "https://wa.me/50247170626", label: "WhatsApp" },
                { icon: Send, href: "https://t.me/+50247170626", label: "Telegram" },
                { icon: Mail, href: "mailto:edsoncastilloh90@gmail.com", label: "Email" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target={social.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={social.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-blue-600 hover:text-white transition-all"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
