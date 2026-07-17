"use client";

import { ContactForm } from "@/components/ContactForm";
import { motion } from "framer-motion";
import { MessageCircle, Send } from "lucide-react";

export default function ContactoPage() {
  return (
    <main className="max-w-2xl mx-auto py-20 px-4 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="space-y-4 mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Pongámonos en <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">contacto</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-lg mx-auto">
            ¿Tienes una idea, un proyecto o simplemente quieres saludar? 
            Me encantaría saber de ti. Completa el formulario y te responderé lo antes posible.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <a
            href="https://wa.me/50247170626?text=Hola%20Edson%2C%20vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20contactarte."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-xl border border-green-500/20 bg-green-500/5 p-4 transition-all hover:-translate-y-1 hover:border-green-500/40 hover:bg-green-500/10"
          >
            <span className="flex size-11 items-center justify-center rounded-full bg-green-500 text-white">
              <MessageCircle className="size-5" />
            </span>
            <span>
              <span className="block font-semibold">WhatsApp</span>
              <span className="text-sm text-muted-foreground">+502 4717 0626</span>
            </span>
          </a>

          <a
            href="https://t.me/+50247170626"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-xl border border-sky-500/20 bg-sky-500/5 p-4 transition-all hover:-translate-y-1 hover:border-sky-500/40 hover:bg-sky-500/10"
          >
            <span className="flex size-11 items-center justify-center rounded-full bg-sky-500 text-white">
              <Send className="size-5" />
            </span>
            <span>
              <span className="block font-semibold">Telegram</span>
              <span className="text-sm text-muted-foreground">+502 4717 0626</span>
            </span>
          </a>
        </div>

        <div className="bg-card border border-border/40 rounded-xl p-6 md:p-8 shadow-sm backdrop-blur-sm">
          <ContactForm />
        </div>
      </motion.div>
    </main>
  );
}
