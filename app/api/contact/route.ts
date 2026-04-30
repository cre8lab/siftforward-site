import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

function escapeHtml(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { name, email, message } = body as {
    name?: string;
    email?: string;
    message?: string;
  };

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    await resend.emails.send({
      from: "SiftForward <hello@siftforward.com>",
      to: "hello@siftforward.com",
      replyTo: email.trim(),
      subject: `New message from ${name.trim()}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px; color: #0F172A;">
          <div style="background: #14B8A6; padding: 24px 32px; border-radius: 12px 12px 0 0;">
            <p style="color: white; font-weight: 700; font-size: 18px; margin: 0;">SiftForward — New Contact</p>
          </div>
          <div style="background: #F8FAFC; padding: 32px; border-radius: 0 0 12px 12px; border: 1px solid #E2E8F0; border-top: none;">
            <p style="margin: 0 0 8px;"><strong>Name:</strong> ${escapeHtml(name.trim())}</p>
            <p style="margin: 0 0 20px;"><strong>Email:</strong> <a href="mailto:${escapeHtml(email.trim())}" style="color: #14B8A6;">${escapeHtml(email.trim())}</a></p>
            <p style="margin: 0 0 8px;"><strong>Message:</strong></p>
            <div style="background: white; border: 1px solid #E2E8F0; border-radius: 8px; padding: 16px; white-space: pre-wrap; font-size: 14px; color: #1E293B; line-height: 1.6;">${escapeHtml(message.trim())}</div>
            <p style="margin: 24px 0 0; font-size: 12px; color: #94a3b8;">Sent via siftforward.com/contact</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Resend error:", err);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
