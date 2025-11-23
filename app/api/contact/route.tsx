import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Helper to clean up the Form Type for the subject line
const formatFormType = (type: string) => {
  switch (type) {
    case 'contributor': return 'Contributor Waitlist';
    case 'enterprise': return 'Enterprise Inquiry';
    default: return 'General Contact';
  }
};

const getEmailTemplateToCompany = (name: string, email: string, message: string, formType: string, source: string, company?: string | null) => `
  <div>
    <h1>New Submission: ${formatFormType(formType)}</h1>
    <p>You have received a new submission from your website.</p>
    <ul>
      <li><strong>Name:</strong> ${name}</li>
      <li><strong>Email:</strong> ${email}</li>
      <li><strong>Submission Type:</strong> ${formatFormType(formType)}</li>
      <li><string>Source Page:</strong> ${source}</li>
      ${company ? `<li><strong>Company:</strong> ${company}</li>` : ''}
    </ul>
    <h2>Message / Details:</h2>
    <p>${message ? message : '<em>No message provided.</em>'}</p>
  </div>
`;

const getConfirmationEmailTemplate = (name: string, formType: string) => `
  <div>
    <h1>Thanks for connecting, ${name}!</h1>
    <p>We have received your ${formType === 'contributor' ? 'request to join the waitlist' : 'message'}.</p>
    <p>We will review your information and get back to you shortly.</p>
    <p>Best regards,</p>
    <p>DoubleThink Solutions</p>
  </div>
`;


const resend = new Resend(process.env.RESEND_API_KEY);
const companyEmail = process.env.COMPANY_EMAIL;
const fromEmail = process.env.FROM_EMAIL;

export async function POST(request: Request) {
  try {
    if (!companyEmail || !fromEmail) {
        console.error('Missing environment variables');
        return NextResponse.json({ error: 'Server configuration error.' }, { status: 500 });
    }

    const { name, company, email, message, formType, source } = await request.json();

    // VALIDATION: Message is now optional only if formType is 'contributor'
    // But generally, we just check Name and Email.
    if (!name || !email) {
      return NextResponse.json({ error: 'Name and email are required.' }, { status: 400 });
    }

    // 1. Send email to your company (The "Manual List Building" email)
    const subjectLine = `[${formatFormType(formType)}] New Submission from ${name}`;
    
    const toCompany = await resend.emails.send({
      from: fromEmail,
      to: companyEmail,
      subject: subjectLine,
      html: getEmailTemplateToCompany(name, email, message, formType, source, company),
    });

    if (toCompany.error) {
        console.error('Failed to send email to company:', toCompany.error);
        return NextResponse.json({ error: 'Failed to send email. Please try again later.' }, { status: 500 });
    }

    // 2. Send confirmation email to the sender
    const toSender = await resend.emails.send({
        from: fromEmail,
        to: email,
        subject: 'We received your submission',
        html: getConfirmationEmailTemplate(name, formType),
    });

    return NextResponse.json({ message: 'Emails sent successfully!' }, { status: 200 });

  } catch (error) {
    console.error('Unexpected error in contact API:', error);
    return NextResponse.json({ error: 'Something went wrong. Please try again later.' }, { status: 500 });
  }
}
