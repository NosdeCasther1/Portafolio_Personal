"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { contactSchema, ContactFormData } from "@/lib/schemas";
import { sendEmail } from "@/app/actions/sendEmail";
import { cn } from "@/lib/utils";

export const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setResult(null);

    try {
      const response = await sendEmail(data);
      
      if (response.success) {
        setResult({ success: true, message: response.message! });
        reset();
      } else {
        setResult({ success: false, message: response.error! });
      }
    } catch (error) {
      setResult({ success: false, message: "Ocurrió un fallo de conexión." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto p-8 bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800">
      <h2 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">Envíame un mensaje</h2>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Honeypot field (hidden from users) */}
        <input type="text" {...register("honeypot")} className="hidden" tabIndex={-1} autoComplete="off" />

        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Nombre</label>
          <input
            {...register("name")}
            className={cn(
              "w-full px-4 py-3 rounded-xl border bg-slate-50 dark:bg-slate-950 transition-all focus:ring-2 focus:ring-blue-500 outline-none",
              errors.name ? "border-red-500" : "border-slate-200 dark:border-slate-800"
            )}
            placeholder="Tu nombre"
          />
          {errors.name && <p className="text-xs text-red-500 font-medium">{errors.name.message}</p>}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Email</label>
          <input
            {...register("email")}
            type="email"
            className={cn(
              "w-full px-4 py-3 rounded-xl border bg-slate-50 dark:bg-slate-950 transition-all focus:ring-2 focus:ring-blue-500 outline-none",
              errors.email ? "border-red-500" : "border-slate-200 dark:border-slate-800"
            )}
            placeholder="email@ejemplo.com"
          />
          {errors.email && <p className="text-xs text-red-500 font-medium">{errors.email.message}</p>}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Mensaje</label>
          <textarea
            {...register("message")}
            rows={5}
            className={cn(
              "w-full px-4 py-3 rounded-xl border bg-slate-50 dark:bg-slate-950 transition-all focus:ring-2 focus:ring-blue-500 outline-none resize-none",
              errors.message ? "border-red-500" : "border-slate-200 dark:border-slate-800"
            )}
            placeholder="¿En qué puedo ayudarte?"
          />
          {errors.message && <p className="text-xs text-red-500 font-medium">{errors.message.message}</p>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="animate-spin" size={20} />
              Enviando...
            </>
          ) : (
            <>
              <Send size={20} />
              Enviar Mensaje
            </>
          )}
        </button>

        {/* Status Messages */}
        {result && (
          <div
            className={cn(
              "p-4 rounded-xl flex items-start gap-3 transition-all animate-in fade-in slide-in-from-top-2",
              result.success ? "bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400" : "bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-400"
            )}
          >
            {result.success ? <CheckCircle2 size={20} /> : <AlertCircle size={20} />}
            <p className="text-sm font-medium">{result.message}</p>
          </div>
        )}
      </form>
    </div>
  );
};
