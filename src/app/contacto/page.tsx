"use client";

import { ContactForm } from "@/components/ContactForm";
import { motion } from "framer-motion";

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

        <div className="bg-card border border-border/40 rounded-xl p-6 md:p-8 shadow-sm backdrop-blur-sm">
          <ContactForm />
        </div>
      </motion.div>
    </main>
  );
}
