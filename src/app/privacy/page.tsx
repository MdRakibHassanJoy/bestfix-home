import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "BestFix Home privacy policy. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <section className="bg-cloud section-padding">
      <div className="section-container max-w-3xl prose prose-sm dark:prose-invert">
        <h1 className="text-3xl font-display text-charred">Privacy Policy</h1>
        <p className="text-xs text-iron">Last updated: October 2024</p>

        <h2>Information We Collect</h2>
        <p>When you request an estimate or contact us, we may collect your name, phone number, email address, mailing address, zip code, and project details including photos you upload.</p>

        <h2>How We Use Your Information</h2>
        <p>We use the information you provide to respond to your estimate requests, communicate about your project, schedule services, and send follow-up correspondence. We do not sell, rent, or share your personal information with third parties for marketing purposes.</p>

        <h2>Photos You Upload</h2>
        <p>Photos submitted through our estimate form are used solely to assess your project. They are not published, shared, or used for marketing without your written consent.</p>

        <h2>Cookies and Analytics</h2>
        <p>Our website may use cookies and analytics tools to understand how visitors use the site. These tools collect anonymous, aggregated data. You can disable cookies in your browser settings.</p>

        <h2>Data Security</h2>
        <p>We take reasonable measures to protect your information from unauthorized access. However, no method of electronic transmission or storage is completely secure.</p>

        <h2>Your Rights</h2>
        <p>You may request access to, correction of, or deletion of your personal information by contacting us at <a href="mailto:info@bestfixhome.com">info@bestfixhome.com</a> or calling <a href="tel:4842725220">(484) 272-5220</a>.</p>

        <h2>Changes to This Policy</h2>
        <p>We may update this policy from time to time. Changes will be posted on this page with a revised date.</p>

        <h2>Contact</h2>
        <p>BestFix Home<br />405 State Highway 121, Suite A250<br />Lewisville, TX 75067<br /><a href="mailto:info@bestfixhome.com">info@bestfixhome.com</a><br /><a href="tel:4842725220">(484) 272-5220</a></p>
      </div>
    </section>
  );
}
