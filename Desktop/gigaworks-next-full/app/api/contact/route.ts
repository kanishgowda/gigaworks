import { NextResponse } from "next/server";
import { resend } from "@/lib/email";

export async function POST(req: Request) {
  const { name, email, message } = await req.json();
  if (!name || !email || !message)
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });

  try {
    await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL || "GigaWorks <onboarding@resend.dev>",
      to: process.env.CONTACT_TO_EMAIL || "gigaworks.in@gmail.com",
      subject: `New Inquiry from ${name}`,
      text: `Name: ${name}
Email: ${email}
Message:
${message}`,
    });
    return NextResponse.json({ ok: true });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
