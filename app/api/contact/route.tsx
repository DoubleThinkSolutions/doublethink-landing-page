import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const getEmailTemplateToCompany = (name: string, email: string, message: string) => `
  <div>
    <h1>New Contact Form Submission</h1>
    <p>You have received a new message from your website contact form.</p>
    <ul>
      <li><strong>Name:</strong> ${name}</li>
      <li><strong>Email:</strong> ${email}</li>
    </ul>
    <h2>Message:</h2>
    <p>${message}</p>
  </div>
`;

const getConfirmationEmailTemplate = (name: string) => `
  <div>
    <h1>Thank you for contacting us, ${name}!</h1>
    <p>We have received your message and will get back to you as soon as possible.</p>
    <p>Best regards,</p>
    <p>Your Company Name</p>
  </div>
`;


const resend = new Resend(process.env.RESEND_API_KEY);
const companyEmail = process.env.COMPANY_EMAIL;
const fromEmail = process.env.FROM_EMAIL;

export async function POST(request: Request) {
  try {
    if (!companyEmail || !fromEmail) {
        console.error('Missing environment variables:', { companyEmail: !!companyEmail, fromEmail: !!fromEmail });
        return NextResponse.json({ error: 'Server configuration error. Please contact support.' }, { status: 500 });
    }

    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      console.error('Missing required fields:', { name: !!name, email: !!email, message: !!message });
      return NextResponse.json({ error: 'Missing required fields: name, email, and message are required.' }, { status: 400 });
    }

    // 1. Send email to your company
    const toCompany = await resend.emails.send({
      from: fromEmail,
      to: companyEmail,
      subject: `New Message from ${name} on your Website`,
      html: getEmailTemplateToCompany(name, email, message),
    });

    if (toCompany.error) {
        console.error('Failed to send email to company:', toCompany.error);
        return NextResponse.json({ error: 'Failed to send email. Please try again later.' }, { status: 500 });
    }

    // 2. Send confirmation email to the sender
    const toSender = await resend.emails.send({
        from: fromEmail,
        to: email,
        subject: 'We\'ve Received Your Message!',
        html: getConfirmationEmailTemplate(name),
    });

    if (toSender.error) {
        console.error('Failed to send confirmation email:', toSender.error);
        // Don't fail the request if confirmation email fails
        // The main email to company was sent successfully
    }

    return NextResponse.json({ message: 'Emails sent successfully!' }, { status: 200 });

  } catch (error) {
    console.error('Unexpected error in contact API:', error);
    return NextResponse.json({ error: 'Something went wrong. Please try again later.' }, { status: 500 });
  }
}
