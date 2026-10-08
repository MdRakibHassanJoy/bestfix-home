import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, ShieldCheck, Award, Clock } from "lucide-react";
import { navLinks, footerQuickLinks } from "@/data/navigation";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate text-white pt-16 pb-24 md:pb-12 border-t border-white/10">
      <div className="section-container px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          <div className="space-y-4">
            <Link href="/" className="inline-block focus:outline-none">
              <Image
                src="/assets/brand/customer-logo-light.png"
                alt="BestFix Home"
                width={180}
                height={100}
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-gray-300 leading-relaxed">
              Nationwide residential property maintenance, emergency trade repairs, and high-end home renovations. Built on uncompromising trade craftsmanship.
            </p>
            <div className="text-xs text-gray-300 space-y-1.5 pt-1">
              <p className="flex items-center gap-2">
                <Award className="w-4 h-4 text-flame shrink-0" />
                <span>Fully Bonded &amp; Comprehensively Insured</span>
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-sky-400 shrink-0" />
                <span>1-Year Comprehensive Labor Guarantee</span>
              </p>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="font-body font-bold text-white text-xs mb-4 tracking-wider uppercase">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-300">
              {footerQuickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-flame transition-colors inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Service Lines */}
          <div>
            <h4 className="font-body font-bold text-white text-xs mb-4 tracking-wider uppercase">
              Core Services
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li>
                <Link href="/services/repairs" className="hover:text-flame transition-colors">
                  General Plumbing &amp; Electrical Repairs
                </Link>
              </li>
              <li>
                <Link href="/remodeling" className="hover:text-flame transition-colors">
                  Chef Kitchen Remodeling
                </Link>
              </li>
              <li>
                <Link href="/remodeling" className="hover:text-flame transition-colors">
                  Spa Master Bath Renovations
                </Link>
              </li>
              <li>
                <Link href="/services/interior" className="hover:text-flame transition-colors">
                  Carpentry &amp; Hardwood Flooring
                </Link>
              </li>
              <li>
                <Link href="/services/exterior" className="hover:text-flame transition-colors">
                  Exterior Painting &amp; Siding Maintenance
                </Link>
              </li>
              <li>
                <Link href="/services/landscaping" className="hover:text-flame transition-colors">
                  Architectural Decks &amp; Grounds Care
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Dispatch & Contact Info */}
          <div>
            <h4 className="font-body font-bold text-white text-xs mb-4 tracking-wider uppercase">
              National Dispatch Office
            </h4>
            <div className="text-sm text-gray-300 space-y-3">
              <div>
                <p className="text-xs text-gray-300 uppercase font-utility">24/7 National Dispatch Hotline</p>
                <a
                  href="tel:4842725220"
                  className="text-base font-bold text-white hover:text-flame transition-colors block mt-0.5"
                >
                  (484) 272-5220
                </a>
              </div>
              <div>
                <p className="text-xs text-gray-300 uppercase font-utility">Direct Inquiries</p>
                <a
                  href="mailto:info@bestfixhome.com"
                  className="hover:text-flame transition-colors block mt-0.5"
                >
                  info@bestfixhome.com
                </a>
              </div>
              <div>
                <p className="text-xs text-gray-300 uppercase font-utility">Headquarters &amp; Dispatch Hub</p>
                <p className="text-gray-300 text-xs mt-0.5 leading-relaxed">
                  405 State Highway 121, Suite A250<br />
                  Lewisville, TX 75067
                </p>
              </div>
              <div className="pt-1 text-xs text-gray-300">
                <p>Standard Hours: Mon–Fri 9:00 AM – 5:00 PM</p>
                <p className="text-flame font-semibold mt-0.5">Emergency Dispatch: 24/7/365</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-300">
          <p>&copy; {currentYear} BestFix Home. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/accessibility" className="hover:text-white transition-colors">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
