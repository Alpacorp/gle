import { NextResponse } from "next/server";
import { Resend } from "resend";
import { ContactEmail } from "@/src/emails/ContactEmail";
import { CreateEmailOptions } from "resend/build/src/emails/interfaces";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function GET() {
  try {
    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ["alejandro.palacios88@gmail.com"],
      subject: "Hello world",
      text: "Hello world",
      react: ContactEmail({
        fullName: "Alejandro Palacios Arévalo",
        email: "alejo@gmail.com",
        subject: "Solicitud",
        message: "Este es un mensaje de prueba",
        lang: "es",
      }),
    } as CreateEmailOptions);

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
