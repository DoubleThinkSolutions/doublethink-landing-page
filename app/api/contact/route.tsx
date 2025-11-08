import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import * as React from 'react';

interface EmailTemplateToCompanyProps {
  name: string;
  email: string;
  message: string;
}

const EmailTemplateToCompany: React.FC<Readonly<EmailTemplateToCompanyProps>> = ({ name, email, message }) => (
  <div>
    <h1>New Contact Form Submission</h1>
    <p>You have received a new message from your website contact form.</p>
    <ul>
      <li><strong>Name:</strong> {name}</li>
      <li><strong>Email:</strong> {email}</li>
    </ul>
    <h2>Message:</h2>
    <p>{message}</p>
  </div>
);

interface ConfirmationEmailTemplateProps {
    name: string;
}

const ConfirmationEmailTemplate: React.FC<Readonly<ConfirmationEmailTemplateProps>> = ({ name }) => (
    <div>
        <h1>Thank you for contacting us, {name}!</h1>
        <p>We have received your message and will get back to you as soon as possible.</p>
        <p>Best regards,</p>
        <p>Your Company Name</p>
    </div>
);


const resend = new Resend(process.env.RESEND_API_KEY);
const companyEmail = process.env.COMPANY_EMAIL;
const fromEmail = process.env.FROM_EMAIL;

export async function POST(request: Request) {
  try {
    if (!companyEmail || !fromEmail) {
        throw new Error('Missing environment variables for email functionality.');
    }

    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // 1. Send email to your company
    const toCompany = await resend.emails.send({
      from: fromEmail,
      to: companyEmail,
      subject: `New Message from ${name} on your Website`,
      react: <EmailTemplateToCompany name={name} email={email} message={message} />,
    });

    // 2. Send confirmation email to the sender
    const toSender = await resend.emails.send({
        from: fromEmail,
        to: email,
        subject: 'We\'ve Received Your Message!',
        react: <ConfirmationEmailTemplate name={name} />,
    });


    if (toCompany.error || toSender.error) {
        console.error({ toCompanyError: toCompany.error, toSenderError: toSender.error });
        throw new Error('Failed to send one or more emails.');
    }

    return NextResponse.json({ message: 'Emails sent successfully!' }, { status: 200 });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Something went wrong.' }, { status: 500 });
  }
}
