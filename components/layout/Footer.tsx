import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CLINIC_INFO, SERVICES, DENTISTS } from '@/lib/clinic-data';

export default function Footer() {
  return (
    <footer className="w-full bg-forest text-paper border-t border-mist/20 pt-16 md:pt-24 pb-12">
      <div className="max-w-site mx-auto px-6 md:px-12">
        {/* Top section: company summary and urgent roofing contact */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-mist/20">
          <div className="lg:col-span-6">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-paper rounded-xl p-2 flex items-center justify-center flex-shrink-0 shadow-md">
                <Image
                  src="/images/logo.png"
                  alt="JS Roof Care Ltd logo"
                  width={60}
                  height={60}
                  className="object-contain w-full h-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-24 md:text-30 font-medium leading-tight">
                  JS Roof Care Ltd
                </span>
                <span className="font-body text-13 text-paper/70 font-medium">
                  Roof repairs and replacements
                </span>
              </div>
            </div>
            <p className="font-body text-16 text-paper/80 leading-relaxed max-w-xl">
              Roof repairs, inspections and replacements in Croydon.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 text-13 text-paper/60">
              <span>+44 7459 521011</span>
            </div>
          </div>

          <div className="lg:col-span-6 lg:pl-12 flex flex-col justify-between">
            <div className="p-6 bg-paper/5 border border-mist/20 rounded-none shadow-sm">
              <span className="font-body text-13 text-lime block mb-2 font-semibold uppercase tracking-wider">
                Roofing help in Croydon
              </span>
              <p className="font-body text-15 text-paper/90 mb-4">
                Need a roof inspection, repair or replacement? Contact our team.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="tel:+447459521011"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-15 font-semibold text-lime hover:underline"
                >
                  Call: {CLINIC_INFO.contact.phone}
                </a>
                <Link
                  href="/book-appointment/"
                  className="font-body text-13 text-paper/80 underline underline-offset-4 hover:text-paper"
                >
                  Request a Quote
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Section: Complete Internal Linking Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 py-16 border-b border-mist/20">
          {/* Column 1: technical Treatments */}
          <div className="col-span-1">
            <span className="font-body text-13 text-paper/40 uppercase tracking-wider block mb-4 font-semibold">
              Services
            </span>
            <ul className="space-y-2.5 font-body text-15">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/${s.slug}/`}
                    className="text-paper/80 hover:text-lime transition-colors"
                  >
                    {s.navLabel}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: technical Team */}
          <div className="col-span-1">
            <span className="font-body text-13 text-paper/40 uppercase tracking-wider block mb-4 font-semibold">
              Our Team
            </span>
            <ul className="space-y-2.5 font-body text-15">
              <li>
                <Link href="/dentists/" className="text-paper/80 hover:text-lime transition-colors">
                  Meet the Roofing Team
                </Link>
              </li>
              {DENTISTS.map((d) => (
                <li key={d.slug}>
                  <Link
                    href={`/dentists/${d.slug}/`}
                    className="text-paper/80 hover:text-lime transition-colors"
                  >
                    {d.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: The company */}
          <div className="col-span-1">
            <span className="font-body text-13 text-paper/40 uppercase tracking-wider block mb-4 font-semibold">
              Company
            </span>
            <ul className="space-y-2.5 font-body text-15">
              <li>
                <Link href="/about/" className="text-paper/80 hover:text-lime transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/testimonials/" className="text-paper/80 hover:text-lime transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/blog/" className="text-paper/80 hover:text-lime transition-colors">
                  Roofing Advice
                </Link>
              </li>
              <li>
                <Link href="/book-appointment/" className="text-paper/80 hover:text-lime transition-colors">
                  Request a Quote
                </Link>
              </li>
              <li>
                <Link href="/contact/" className="text-paper/80 hover:text-lime transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/emergency-dentist/" className="text-paper/80 hover:text-lime transition-colors">
                  Emergency Roof Repairs
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="col-span-1 md:col-span-1 lg:col-span-2">
            <span className="font-body text-13 text-paper/40 uppercase tracking-wider block mb-4 font-semibold">
              Contact Details
            </span>
            <div className="space-y-3 font-body text-15 text-paper/80">
              <div>
                <span className="text-paper/50 block text-13">Phone:</span>
                <a
                  href="tel:+447459521011"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-lime transition-colors font-medium"
                >
                  {CLINIC_INFO.contact.phone}
                </a>
              </div>
              <div>
                <span className="text-paper/50 block text-13">Service area:</span>
                <address className="not-italic leading-relaxed text-13 text-paper/70">
                  {CLINIC_INFO.primaryLocation.directions}
                </address>
              </div>
              {CLINIC_INFO.contact.website && (
                <div>
                  <span className="text-paper/50 block text-13">Website:</span>
                  <a href={CLINIC_INFO.contact.website} className="hover:text-lime transition-colors" target="_blank" rel="noopener noreferrer">
                    jsroofcareltd.com
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Section: Legal & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 font-body text-13 text-paper/60">
          <div>
            © {new Date().getFullYear()} {CLINIC_INFO.legalName}. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Croydon, Greater London</span>
            <span>JS Roof Care Ltd</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
