import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { contactFormSchema } from '@/lib/validations/contact';
import { CONTACT_CONFIG } from '@/lib/config/contact';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate the incoming data
    const parsed = contactFormSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Invalid form data', details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const { name, email, subject, message } = parsed.data;

    const { data, error } = await resend.emails.send({
      from: CONTACT_CONFIG.RESEND_FROM,
      to: [CONTACT_CONFIG.CONTACT_EMAIL],
      replyTo: email,
      subject: `New Contact: ${subject}`,
      html: `
        <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #fafafa; border-radius: 12px; overflow: hidden;">
          <div style="background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%); padding: 32px 24px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 600; letter-spacing: -0.5px;">
              New Contact Form Submission
            </h1>
            <p style="color: rgba(255,255,255,0.7); margin: 8px 0 0; font-size: 14px;">
              DS Renders &mdash; Portfolio Website
            </p>
          </div>
          
          <div style="padding: 32px 24px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #888; font-size: 13px; text-transform: uppercase; letter-spacing: 1px; width: 100px; vertical-align: top;">
                  From
                </td>
                <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #1a1a2e; font-size: 15px; font-weight: 500;">
                  ${name}
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #888; font-size: 13px; text-transform: uppercase; letter-spacing: 1px; vertical-align: top;">
                  Email
                </td>
                <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #1a1a2e; font-size: 15px;">
                  <a href="mailto:${email}" style="color: #0f3460; text-decoration: none;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #888; font-size: 13px; text-transform: uppercase; letter-spacing: 1px; vertical-align: top;">
                  Subject
                </td>
                <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #1a1a2e; font-size: 15px; font-weight: 500;">
                  ${subject}
                </td>
              </tr>
              <tr>
                <td style="padding: 16px 0 0; color: #888; font-size: 13px; text-transform: uppercase; letter-spacing: 1px; vertical-align: top;">
                  Message
                </td>
                <td style="padding: 16px 0 0; color: #1a1a2e; font-size: 15px; line-height: 1.6;">
                  ${message.replace(/\n/g, '<br />')}
                </td>
              </tr>
            </table>
          </div>
          
          <div style="padding: 16px 24px; background: #f0f0f0; text-align: center;">
            <p style="margin: 0; color: #999; font-size: 12px;">
              Sent from your portfolio contact form &bull; ${new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (err) {
    // Network-level failures only
    console.error('API route error:', err);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
