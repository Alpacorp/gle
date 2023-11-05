import { ContactEmail } from "@/src/emails/ContactEmail";
import { OursEmail } from "@/src/emails/OursEmail";
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { CreateEmailOptions } from "resend/build/src/emails/interfaces";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);
const adminEmail = process.env.NEXT_PUBLIC_ADMIN_EMAIL ?? "";

export async function POST(request: Request) {
  const {
    fullname,
    subject,
    message,
    lang,
    destination,
    name,
    email,
    address,
    city,
    phone,
    department,
    cv,
    origin,
  } = await request.json();

  const validateDestination = () => {
    if (destination === "admin") {
      return adminEmail;
    } else {
      return [adminEmail, email];
    }
  };

  try {
    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: validateDestination(),
      subject:
        (lang === "es"
          ? "Correo de notificación de registro | Motivo: "
          : "Notification email from registration | Reason: ") + subject,
      react:
        origin === "contact"
          ? ContactEmail({
              fullname,
              destination,
              email,
              subject,
              message,
              lang,
            })
          : OursEmail({
              name,
              email,
              address,
              city,
              phone,
              department,
              cv,
              lang,
            }),
    } as CreateEmailOptions);

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
