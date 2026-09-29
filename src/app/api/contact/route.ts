import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Champs manquants." }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Mayssa" <${process.env.GMAIL_USER}>`,
      to: "mayssajrah12@gmail.com",
      replyTo: email,
      subject: `📩 Nouveau message de ${name} — Portfolio`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f8fafc; border-radius: 12px; overflow: hidden;">
          <div style="background: linear-gradient(135deg, #3B82F6, #22D3EE); padding: 32px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">Nouveau message de contact</h1>
          </div>
          <div style="padding: 32px; background: white;">
            <p style="color: #64748b; margin: 0 0 24px;">Vous avez reçu un nouveau message depuis votre portfolio.</p>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 16px; background: #f1f5f9; border-radius: 8px 8px 0 0; font-weight: bold; color: #1e3a8a; width: 120px;">Nom</td>
                <td style="padding: 12px 16px; background: #f8fafc;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 12px 16px; background: #f1f5f9; font-weight: bold; color: #1e3a8a;">Email</td>
                <td style="padding: 12px 16px;"><a href="mailto:${email}" style="color: #3B82F6;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 12px 16px; background: #f1f5f9; border-radius: 0 0 8px 8px; font-weight: bold; color: #1e3a8a; vertical-align: top;">Message</td>
                <td style="padding: 12px 16px; background: #f8fafc; white-space: pre-wrap;">${message}</td>
              </tr>
            </table>
            <div style="margin-top: 24px; padding: 16px; background: #eff6ff; border-radius: 8px; border-left: 4px solid #3B82F6;">
              <p style="margin: 0; color: #1e3a8a; font-size: 14px;">
                💡 Répondez directement à cet email pour contacter <strong>${name}</strong>.
              </p>
            </div>
          </div>
          <div style="padding: 16px; text-align: center; background: #f1f5f9; color: #94a3b8; font-size: 12px;">
            Portfolio de Mayssa Jrah — SEO & Marketing Digital
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Nodemailer error:", error);
    return NextResponse.json({ error: "Erreur lors de l'envoi." }, { status: 500 });
  }
}
