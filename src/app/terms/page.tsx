import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "BestFix Home terms of service. Review the terms governing your use of our website and services.",
};

export default function TermsPage() {
  return (
    <section className="bg-cloud section-padding">
      <div className="section-container max-w-3xl prose prose-sm dark:prose-invert">
        <h1 className="text-3xl font-display text-charred">Terms of Service</h1>
        <p className="text-xs text-iron">Last updated: October 2024</p>

        <h2>Agreement to Terms</h2>
        <p>By accessing or using the BestFix Home website, you agree to be bound by these terms. If you do not agree, please do not use our site.</p>

        <h2>Services</h2>
        <p>BestFix Home provides residential property maintenance, repair, and remodeling services. All estimates are non-binding until a written agreement is signed by both parties. Pricing, availability, and scope are subject to change based on on-site assessment.</p>

        <h2>Estimates and Pricing</h2>
        <p>Online estimate requests are not contracts. A final price is provided after we assess the project in person. Payment terms, including retainers and milestone payments, are outlined in the project agreement.</p>

        <h2>User Submissions</h2>
        <p>By submitting information through our contact or estimate forms, you grant BestFix Home permission to use that information to respond to your inquiry and provide services. You represent that the information you provide is accurate.</p>

        <h2>Limitation of Liability</h2>
        <p>BestFix Home is not liable for damages arising from use of this website, including errors, omissions, or interruptions. Our liability for any service-related claim is limited to the amount paid for the specific service in question.</p>

        <h2>Intellectual Property</h2>
        <p>All content on this website — including text, images, logos, and design — is the property of BestFix Home and may not be reproduced without written permission.</p>

        <h2>Governing Law</h2>
        <p>These terms are governed by the laws of the State of Texas. Any disputes will be resolved in the courts of Denton County, Texas.</p>

        <h2>Changes to Terms</h2>
        <p>We may update these terms from time to time. Continued use of the site constitutes acceptance of the revised terms.</p>

        <h2>Contact</h2>
        <p>BestFix Home<br />405 State Highway 121, Suite A250<br />Lewisville, TX 75067<br /><a href="mailto:info@bestfixhome.com">info@bestfixhome.com</a><br /><a href="tel:4842725220">(484) 272-5220</a></p>
      </div>
    </section>
  );
}
