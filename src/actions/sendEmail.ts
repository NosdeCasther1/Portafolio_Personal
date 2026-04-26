"use server";

import { Resend } from "resend";
import { contactSchema } from "@/lib/schemas";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  // Validación con Zod
  const validatedFields = contactSchema.safeParse({
    name,
    email,
    message,
  });

  if (!validatedFields.success) {
    return {
      error: "Datos del formulario inválidos. Por favor, revisa los campos.",
    };
  }

  const { name: validatedName, email: validatedEmail, message: validatedMessage } = validatedFields.data;

  try {
    const { data, error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: ["delivered@resend.dev"], // Reemplazar con tu dirección de correo para pruebas
      subject: `Nuevo mensaje de contacto de ${validatedName}`,
      replyTo: validatedEmail,
      text: `Nombre: ${validatedName}\nEmail: ${validatedEmail}\n\nMensaje:\n${validatedMessage}`,
    });

    if (error) {
      console.error("Resend Error:", error);
      return { error: "Hubo un error al enviar el correo. Inténtalo de nuevo más tarde." };
    }

    return { success: true, message: "¡Mensaje enviado con éxito! Me pondré en contacto contigo pronto." };
  } catch (err) {
    console.error("Server Action Error:", err);
    return { error: "Ocurrió un error inesperado. Por favor, inténtalo de nuevo." };
  }
}
