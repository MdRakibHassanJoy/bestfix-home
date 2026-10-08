import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description: "BestFix Home is committed to making our website accessible to all visitors. Learn about our efforts and how to report issues.",
};

export default function AccessibilityPage() {
  return (
    <section className="bg-cloud section-padding">
      <div className="section-container max-w-3xl prose prose-sm dark:prose-invert">
        <h1 className="text-3xl font-display text-charred">Accessibility Statement</h1>
        <p className="text-xs text-iron">Last updated: October 2024</p>

        <h2>Our Commitment</h2>
        <p>BestFix Home is committed to ensuring that our website is accessible to people with disabilities. We strive to meet or exceed WCAG 2.1 Level AA guidelines.</p>

        <h2>What We Do</h2>
        <ul>
          <li>Provide text alternatives for images and non-text content</li>
          <li>Ensure sufficient color contrast between text and backgrounds</li>
          <li>Make all interactive elements keyboard accessible</li>
          <li>Use semantic HTML and ARIA attributes for screen readers</li>
          <li>Support browser zoom up to 200% without loss of content</li>
          <li>Respect reduced motion preferences</li>
          <li>Provide a skip-to-content link for keyboard users</li>
          <li>Ensure forms have clear labels and error messages</li>
        </ul>

        <h2>Known Limitations</h2>
        <p>While we work to ensure accessibility across the site, some areas may not yet be fully optimized. We continuously review and improve our site. If you encounter any barriers, please let us know.</p>

        <h2>Feedback and Contact</h2>
        <p>If you experience any accessibility issues or have suggestions for improvement, please contact us:</p>
        <ul>
          <li>Email: <a href="mailto:info@bestfixhome.com">info@bestfixhome.com</a></li>
          <li>Phone: <a href="tel:4842725220">(484) 272-5220</a></li>
          <li>Mail: BestFix Home, 405 State Highway 121, Suite A250, Lewisville, TX 75067</li>
        </ul>
        <p>We aim to respond to accessibility feedback within 5 business days.</p>

        <h2>Third-Party Content</h2>
        <p>Our site may link to third-party websites or embed third-party content that we do not control. We are not responsible for the accessibility of external content.</p>
      </div>
    </section>
  );
}
