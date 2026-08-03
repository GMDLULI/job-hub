import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY")
const BUSINESS_EMAIL = "phandapreneurbusinesshub@gmail.com"

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
      },
    })
  }

  try {
    const { name, email, subject, message } = await req.json()

    // 1 — Notify your business email
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Pandapreneur Contact <onboarding@resend.dev>",
        to: BUSINESS_EMAIL,
        subject: `New message: ${subject || "General Enquiry"} — from ${name}`,
        html: `
          <h2>New contact form submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject || "Not specified"}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
      }),
    })

    // 2 — Send auto-reply to the user
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Pandapreneur <onboarding@resend.dev>",
        to: email,
        subject: "We received your message — Pandapreneur",
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #333;">Hi ${name}, thanks for reaching out! 👋</h2>
            <p>We've received your message and our team will get back to you within one business day.</p>
            <p>Here's a copy of what you sent us:</p>
            <blockquote style="border-left: 3px solid #e5e7eb; padding-left: 16px; color: #6b7280;">
              <p><strong>Subject:</strong> ${subject || "General Enquiry"}</p>
              <p>${message}</p>
            </blockquote>
            <p>In the meantime, feel free to follow us on Instagram at <strong>@Pandapreneur_SA</strong>.</p>
            <p>Warm regards,<br/><strong>The Pandapreneur Team</strong></p>
          </div>
        `,
      }),
    })

    return new Response(JSON.stringify({ success: true }), {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })

  } catch (err) {
    return new Response(JSON.stringify({ error: String(err) }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
  }
})