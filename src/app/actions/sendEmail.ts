"use server";

import { Resend } from "resend";
import { contactSchema, ContactFormData } from "@/lib/schemas";

/**
 * Server Action to send email via Resend API.
 * Implements server-side validation and security checks.
 */
export async function sendEmail(data: ContactFormData) {
  // 0. Ensure API Key exists
  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not defined");
    return {
      success: false,
      error: "Error de configuración en el servidor.",
    };
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  // 1. Validate data on the server (Critical for security)
  const result = contactSchema.safeParse(data);

  if (!result.success) {
    return {
      success: false,
      error: "Datos de formulario inválidos. Por favor, revisa los campos.",
    };
  }

  const { name, email, message, honeypot } = result.data;

  // 2. Basic Spam Protection: Check honeypot
  if (honeypot) {
    return {
      success: false,
      error: "Spam detectado.",
    };
  }

  try {
    // 3. Send email using Resend
    const { data: resendData, error: resendError } = await resend.emails.send({
      from: "Portafolio <onboarding@resend.dev>", // Replace with your verified domain
      to: ["tu-email@ejemplo.com"], // Your target email
      subject: `Nuevo mensaje de contacto de ${name}`,
      replyTo: email,
      text: `Nombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}`,
      // Optionally add HTML version
      html: `
        <div style="font-family: sans-serif; padding: 20px;">
          <h2>Nuevo mensaje de contacto</h2>
          <p><strong>Nombre:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <hr />
          <p><strong>Mensaje:</strong></p>
          <p>${message.replace(/\n/g, "<br>")}</p>
        </div>
      `,
    });

    if (resendError) {
      console.error("Resend error:", resendError);
      return { success: false, error: "Error al enviar el correo. Inténtalo más tarde." };
    }

    return {
      success: true,
      message: "¡Mensaje enviado con éxito! Me pondré en contacto contigo pronto.",
    };
  } catch (error) {
    console.error("Critical error in sendEmail action:", error);
    return {
      success: false,
      error: "Ocurrió un error inesperado. Por favor, inténtalo de nuevo.",
    };
  }
}
