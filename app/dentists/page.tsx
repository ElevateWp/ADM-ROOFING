import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import WordRevealH1 from '@/components/motion/WordRevealH1';
import ScrubbedParagraph from '@/components/motion/ScrubbedParagraph';
import AnimateOnScroll from '@/components/motion/AnimateOnScroll';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import Button from '@/components/ui/Button';
import DentistCard from '@/components/sections/dentists/DentistCard';
import { DENTISTS, SERVICES, CLINIC_INFO } from '@/lib/clinic-data';
import { createMetadata } from '@/lib/seo';

export const metadata: Metadata = createMetadata({
  title: 'Our Roofing Team',
  description:
    'Meet the CJ Roofing Services Ltd team. Our Dublin roofers bring over 10 years of experience to residential roofing work.',
  pathname: '/dentists/',
});

export default function DentistsPage() {
  return (
    <div className="flex flex-col w-full bg-paper">
      {/* SECTION 1: Introduction */}
      <section className="py-16 md:py-24 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <Breadcrumbs items={[{ name: 'Our Team', path: '/dentists/' }]} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-8">
            <div className="lg:col-span-8">
              <AnimateOnScroll animation="fade-right" duration={0.8}>
                <span className="font-body text-13 text-forest-ink/60 block mb-3 font-medium uppercase tracking-wider">
                  CJ Roofing Services Ltd
                </span>
                <WordRevealH1 text="Experienced roofers, ready to help." />
                <div className="mt-8">
                  <ScrubbedParagraph text="Our Dublin team specialises in roof replacements, repairs and maintenance for homes." />
                </div>
              </AnimateOnScroll>
            </div>

            <div className="lg:col-span-4 lg:pl-6 flex flex-col justify-end">
              <AnimateOnScroll animation="fade-left" duration={0.8} delay={0.2}>
                <div className="p-6 bg-paper border border-mist space-y-2 font-body text-13 text-forest-ink/80 shadow-sm">
                  <span className="font-medium text-forest block">Open 24 hours</span>
                  <p className="text-forest-ink/70">
                    Call us to discuss the roofing work you need.
                  </p>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Roofing Team */}
      <section className="py-20 md:py-32 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <AnimateOnScroll animation="fade-up" duration={0.8}>
            <div className="mb-16">
              <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
                Our Team
              </span>
              <h2 className="font-display text-33 md:text-41 text-forest-ink">
                Meet the Roofing Team
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto pb-8">
            {DENTISTS.map((dentist, idx) => (
              <DentistCard
                key={dentist.id}
                dentist={dentist}
                offsetY={false}
              />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: Areas of Expertise */}
      <section className="py-20 md:py-32 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <AnimateOnScroll animation="fade-up" duration={0.8}>
            <div className="mb-16">
              <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
                Business Experience
              </span>
              <h2 className="font-display text-33 md:text-41 text-forest-ink">
                Roofing Services
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimateOnScroll animation="fade-up" delay={0.1}>
              <div className="p-6 bg-paper border border-mist h-full flex flex-col justify-between hover:border-forest/40 transition-colors shadow-sm">
                <div>
                  <h3 className="font-display text-21 text-forest-ink mb-3">
                    Roof Repairs and Leaks
                  </h3>
                  <p className="font-body text-13 text-forest-ink/70 leading-relaxed mb-4">
                    We assess leaks, loose tiles and roof finishes to recommend suitable repairs.
                  </p>
                </div>
                <Link href="/dental-implants/" className="font-body text-13 text-forest font-medium hover:underline">
                  Explore Repairs →
                </Link>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={0.2}>
              <div className="p-6 bg-paper border border-mist h-full flex flex-col justify-between hover:border-forest/40 transition-colors shadow-sm">
                <div>
                  <h3 className="font-display text-21 text-forest-ink mb-3">
                    Residential Roofing
                  </h3>
                  <p className="font-body text-13 text-forest-ink/70 leading-relaxed mb-4">
                    Roofing services for homes across Dublin and surrounding areas.
                  </p>
                </div>
                <Link href="/contact/" className="font-body text-13 text-forest font-medium hover:underline">
                  Contact Our Team →
                </Link>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={0.3}>
              <div className="p-6 bg-paper border border-mist h-full flex flex-col justify-between hover:border-forest/40 transition-colors shadow-sm">
                <div>
                  <h3 className="font-display text-21 text-forest-ink mb-3">
                    Roof Inspection
                  </h3>
                  <p className="font-body text-13 text-forest-ink/70 leading-relaxed mb-4">
                    We inspect and repair tiles, flashings, gutters and roof seals.
                  </p>
                </div>
                <Link href="/braces/" className="font-body text-13 text-forest font-medium hover:underline">
                  Explore Roof Inspections →
                </Link>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={0.4}>
              <div className="p-6 bg-paper border border-mist h-full flex flex-col justify-between hover:border-forest/40 transition-colors shadow-sm">
                <div>
                  <h3 className="font-display text-21 text-forest-ink mb-3">
                    Roof Finishes and Repairs
                  </h3>
                  <p className="font-body text-13 text-forest-ink/70 leading-relaxed mb-4">
                    Roof tile replacement and repairs to seals and finishes.
                  </p>
                </div>
                <Link href="/cosmetic-dentistry/" className="font-body text-13 text-forest font-medium hover:underline">
                  Explore Storm Repairs →
                </Link>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* SECTION 4: Education & Qualifications */}
      <section className="py-20 md:py-32 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <AnimateOnScroll animation="fade-up" duration={0.8}>
            <div className="mb-16">
              <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
                Team Profile
              </span>
              <h2 className="font-display text-33 md:text-41 text-forest-ink">
                Experience and Specialties
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="divide-y divide-mist border-t border-b border-mist">
            {DENTISTS.map((d, idx) => (
              <AnimateOnScroll key={d.id} animation="fade-up" delay={idx * 0.15}>
                <div className="py-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  <div className="lg:col-span-4">
                    <h3 className="font-display text-21 md:text-26 text-forest-ink">
                      {d.name}
                    </h3>
                    <span className="font-body text-13 text-forest font-medium">{d.title}</span>
                  </div>
                  <div className="lg:col-span-8 space-y-2 font-body text-15 text-forest-ink/80">
                    {d.education.map((edu, eIdx) => (
                      <div key={eIdx} className="flex items-start gap-2">
                        <span className="text-forest mt-1">•</span>
                        <span>{edu}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: Our Approach */}
      <section className="py-20 md:py-32 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <AnimateOnScroll animation="fade-up" duration={0.8}>
            <div className="max-w-3xl">
              <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
                Our Commitment
              </span>
              <h2 className="font-display text-33 md:text-41 text-forest-ink mb-6">
                Careful Work, Clear Communication
              </h2>
              <p className="font-body text-17 md:text-21 text-forest-ink/90 leading-relaxed mb-8">
                We take care with every property, explain the work clearly and agree the repair plan with you before getting started.
              </p>
              <div className="p-6 bg-mist/40 border-l-2 border-forest shadow-sm">
                <span className="font-body text-15 text-forest-ink/80 block italic">
                  We take pride in our work and aim to make every new roof as strong and reliable as the original.
                </span>
                <span className="font-body text-13 text-forest block mt-2 font-medium">
                  — The CJ Roofing Team
                </span>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* SECTION 6: Roofing Services */}
      <section className="py-20 md:py-32 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <AnimateOnScroll animation="fade-up" duration={0.8}>
            <div className="mb-12">
              <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
                Our Services
              </span>
              <h2 className="font-display text-33 md:text-41 text-forest-ink">
                Roofing Services
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {SERVICES.map((s, idx) => (
              <AnimateOnScroll key={s.slug} animation="zoom-in" delay={idx * 0.05}>
                <Link
                  href={`/${s.slug}/`}
                  className="p-4 bg-paper border border-mist hover:border-forest transition-all flex flex-col justify-between h-32 hover:shadow-sm"
                >
                  <span className="font-display text-17 text-forest-ink leading-tight">
                    {s.navLabel}
                  </span>
                  <span className="font-body text-13 text-forest font-medium">
                    Learn More →
                  </span>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: Appointment CTA */}
      <section className="py-20 md:py-28 bg-forest text-paper">
        <div className="max-w-site mx-auto px-6 md:px-12 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <AnimateOnScroll animation="fade-right" duration={0.8}>
            <div>
              <span className="font-body text-13 text-lime uppercase tracking-wider block mb-2 font-medium">
                Request a Quote
              </span>
              <h2 className="font-display text-33 md:text-41 text-paper">
                Request a roof assessment from our team
              </h2>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-left" duration={0.8} delay={0.2}>
            <Button href="/book-appointment/" variant="lime" size="lg">
              Request a Quote
            </Button>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
}
