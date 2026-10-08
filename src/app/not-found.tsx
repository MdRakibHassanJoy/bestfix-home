import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="section-padding min-h-[60vh] flex items-center justify-center">
      <div className="text-center max-w-md">
        <span className="text-6xl font-display text-flame block mb-4">404</span>
        <h1 className="text-2xl font-display text-charred mb-3">
          Page not found
        </h1>
        <p className="text-sm text-iron leading-relaxed mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button href="/" variant="primary">
            Back to Home
          </Button>
          <Button href="/contact" variant="outline">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}
