export default function PrivacyClient() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-teal-sovereign selection:text-cream-library max-w-3xl mx-auto p-6 md:p-12">
      <article className="space-y-6 text-sm leading-relaxed">
        <div>
          <h1 className="text-xl font-bold">DoubleThink Solutions, LLC</h1>
          <p className="text-muted-foreground italic">Last updated: 05/03/2026</p>
        </div>

        <p>
          This Privacy Policy for DoubleThink Solutions, LLC (“DoubleThink Solutions” and "we," "us," or
          "our"), describes how and why we may configure, collect, store, use, and/or share your personal
          information when you use our services, including when you visit our website at{" "}
          <a href="https://doublethinksolutions.com" className="underline hover:text-teal-sovereign transition-colors">
            https://doublethinksolutions.com
          </a>.
        </p>

        <ul className="list-disc pl-5 space-y-3">
          <li>
            <strong>Information We Collect:</strong> We only collect information you voluntarily provide to DoubleThink
            Solutions via our contact form, which may include your name, email addresses, and optional messages.
          </li>
          <li>
            <strong>How We Use It:</strong> To respond to inquiries. We will not sell your data.
          </li>
          <li>
            <strong>Sharing Data:</strong> We do not share or sell your personal information to third parties.
          </li>
          <li>
            <strong>Third-Party Services:</strong> We may use third-party service providers (e.g., analytics) that have access
            to your data only to perform tasks on our behalf and are obligated not to disclose it.
          </li>
          <li>
            <strong>Your Rights:</strong> You can contact us at{" "}
            <a href="mailto:contact@doublethinksolutions.com" className="underline hover:text-teal-sovereign transition-colors">
              contact@doublethinksolutions.com
            </a>{" "}
            to request access to or delete your data.
          </li>
          <li>
            <strong>Consent:</strong> By using our site, you consent to this policy. You also agree to only provide your name,
            email address, and relevant nonpersonal information to us.
          </li>
        </ul>
      </article>
    </div>
  );
}
