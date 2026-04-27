"use client";

import { useActionState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { sendEmail, type FormState } from "@/actions/sendEmail";

const initialState: FormState = {
  success: false,
};

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(sendEmail, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  // Limpiar el formulario cuando se envía con éxito
  useEffect(() => {
    if (state?.success) {
      formRef.current?.reset();
    }
  }, [state?.success]);

  return (
    <form ref={formRef} action={formAction} className="space-y-5">
      {/* Honeypot field - Oculto para humanos, atractivo para bots */}
      <div style={{ display: "none" }} aria-hidden="true">
        <input 
          type="text" 
          name="honeypot" 
          tabIndex={-1} 
          autoComplete="off" 
        />
      </div>

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
          disabled={isPending}
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
          disabled={isPending}
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
          disabled={isPending}
        />
      </div>

      <Button 
        type="submit" 
        className="w-full text-base py-6" 
        disabled={isPending}
      >
        {isPending ? "Enviando..." : "Enviar Mensaje"}
      </Button>

      {state?.success && !isPending && (
        <p className="text-sm font-medium text-green-600 mt-2 animate-in fade-in slide-in-from-top-1">
          ¡Mensaje enviado con éxito! Me pondré en contacto contigo pronto.
        </p>
      )}

      {state?.error && !isPending && (
        <p className="text-sm font-medium text-red-600 mt-2 animate-in fade-in slide-in-from-top-1">
          {state.error}
        </p>
      )}
    </form>
  );
}
