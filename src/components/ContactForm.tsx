"use client";

import { useState, useTransition } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { sendEmail } from "@/actions/sendEmail";

export function ContactForm() {
  const [isPending, startTransition] = useTransition();
  const [state, setState] = useState<{
    success?: boolean;
    message?: string;
    error?: string;
  }>({});

  const handleSubmit = async (formData: FormData) => {
    setState({}); // Limpiar estados previos
    
    startTransition(async () => {
      const result = await sendEmail(formData);
      
      if (result.success) {
        setState({ success: true, message: result.message });
        // Opcional: resetear el formulario si es necesario
        // Pero FormData se maneja automáticamente en la mayoría de los casos si usamos action
      } else {
        setState({ error: result.error });
      }
    });
  };

  return (
    <form action={handleSubmit} className="space-y-5">
      <div className="space-y-2">
        <label htmlFor="name" className="text-sm font-medium">
          Nombre Completo
        </label>
        <Input 
          id="name" 
          name="name" 
          placeholder="Ej. John Doe" 
          required 
          minLength={2}
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium">
          Correo Electrónico
        </label>
        <Input 
          id="email" 
          name="email" 
          type="email" 
          placeholder="tu@email.com" 
          required 
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium">
          ¿En qué puedo ayudarte?
        </label>
        <Textarea
          id="message"
          name="message"
          placeholder="Cuéntame un poco sobre tu proyecto..."
          className="min-h-[120px] resize-y"
          required
          minLength={10}
        />
      </div>

      <Button 
        type="submit" 
        className="w-full text-base py-6" 
        disabled={isPending}
      >
        {isPending ? "Enviando..." : "Enviar Mensaje"}
      </Button>

      {state.success && (
        <p className="text-sm font-medium text-green-600 mt-2">
          {state.message}
        </p>
      )}

      {state.error && (
        <p className="text-sm font-medium text-red-600 mt-2">
          {state.error}
        </p>
      )}
    </form>
  );
}
