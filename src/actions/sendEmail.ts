"use server";

import { Resend } from "resend";
import { contactSchema } from "@/lib/schemas";

const resend = new Resend(process.env.RESEND_API_KEY);

export type FormState = {
  success: boolean;
  error?: string;
};

export async function sendEmail(prevState: FormState, formData: FormData): Promise<FormState> {
  // Artificial delay for UI testing
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const rawData = {
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
    honeypot: formData.get("honeypot"),
  };

  // Honeypot check
  if (rawData.honeypot && rawData.honeypot !== "") {
    console.warn("Honeypot filled, ignoring request.");
    return { success: true }; // Treat as success to the bot
  }

  // Zod Validation
  const validatedFields = contactSchema.safeParse(rawData);

  if (!validatedFields.success) {
    return {
      success: false,
      error: "Datos del formulario inválidos. Por favor, revisa los campos.",
    };
  }

  const { name, email, message } = validatedFields.data;

  try {
    const { error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: ["nosdecasther@gmail.com"], // Sustituir por el correo real en producción
      subject: `Nuevo mensaje de ${name}`,
      replyTo: email,
      text: `Nombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}`,
    });

    if (error) {
      console.error("Resend Error:", error);
      return { success: false, error: "Hubo un error al enviar el correo. Inténtalo de nuevo." };
    }

    return { success: true };
  } catch (err) {
    console.error("Unexpected Error:", err);
    return { success: false, error: "Ocurrió un error inesperado." };
  }
}
