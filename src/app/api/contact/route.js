import { Resend } from 'resend'

export async function POST(request) {
  try {
    const { name, email, message, type } = await request.json()

    if (!message || !message.trim()) {
      return Response.json({ error: 'Message is required' }, { status: 400 })
    }

    const resend = new Resend(process.env.RESEND_API_KEY)

    await resend.emails.send({
      from: 'No More Later <onboarding@resend.dev>',
      to: process.env.NML_CONTACT_EMAIL,
      subject: type === 'suggestion'
        ? `New Suggestion from ${name || 'Anonymous'}`
        : `New Contact Message — No More Later`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:2rem">
          <h2 style="color:#0B0F19;margin-bottom:1rem">
            ${type === 'suggestion' ? 'New Suggestion' : 'New Message'} — No More Later
          </h2>
          <table style="width:100%;border-collapse:collapse">
            <tr>
              <td style="padding:0.5rem 0;color:#6B7280;font-size:0.85rem;width:80px">Name</td>
              <td style="padding:0.5rem 0;color:#111827;font-size:0.85rem">${name || 'Not provided'}</td>
            </tr>
            <tr>
              <td style="padding:0.5rem 0;color:#6B7280;font-size:0.85rem">Email</td>
              <td style="padding:0.5rem 0;color:#111827;font-size:0.85rem">${email || 'Not provided'}</td>
            </tr>
          </table>
          <div style="margin-top:1.5rem;padding:1.25rem;background:#F9FAFB;border-radius:8px;border-left:3px solid #FACC15">
            <p style="color:#374151;font-size:0.95rem;line-height:1.7;margin:0">${message}</p>
          </div>
          <p style="margin-top:2rem;font-size:0.75rem;color:#9CA3AF">
            Sent from nomorelater.com
          </p>
        </div>
      `,
    })

    return Response.json({ success: true })
  } catch (error) {
    console.error('Contact API error:', error)
    return Response.json({ error: 'Failed to send message' }, { status: 500 })
  }
}