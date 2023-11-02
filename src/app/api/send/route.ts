import { NextResponse } from "next/server";
import { Resend } from "resend";

import contact from "@emails/contact";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function GET() {
  try {
    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "alejandro.palacios88@gmail.com",
      subject: "Hello world",
      react: "alejo palacios arevalo prod",
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
