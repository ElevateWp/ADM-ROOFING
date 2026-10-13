import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { SERVICES, DENTISTS } from '@/lib/clinic-data';
import WordRevealH1 from '@/components/motion/WordRevealH1';
import ScrubbedParagraph from '@/components/motion/ScrubbedParagraph';
import ProcedurePin from '@/components/sections/treatment/ProcedurePin';
import AnimateOnScroll from '@/components/motion/AnimateOnScroll';
import Accordion from '@/components/ui/Accordion';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import Button from '@/components/ui/Button';
import JsonLd from '@/components/ui/JsonLd';
import { createMetadata, generateMedicalProcedureSchema, generateFaqSchema } from '@/lib/seo';

const service = SERVICES.find((s) => s.slug === 'dental-cleaning')!;
const leadDentist = DENTISTS.find((d) => d.id === service.assignedDentistId) || DENTISTS[0];

export const metadata: Metadata = createMetadata({
  title: 'Flat roof installation and repairs',
  description:
    'Flat roof installation and repairs for durable, weather-resistant protection.',
  pathname: '/dental-cleaning/',
});

export default function DentalCleaningPage() {
  const procedureSchema = generateMedicalProcedureSchema(
    service.name,
    service.clinicalExplanation,
    '/dental-cleaning/'
  );
  const faqSchema = generateFaqSchema(service.faqs);

  return (
    <div className="flex flex-col w-full bg-paper">
      <JsonLd data={[procedureSchema, faqSchema]} />

      {/* SECTION 1: Introduction */}
      <section className="py-16 md:py-24 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <Breadcrumbs items={[{ name: service.name, path: '/dental-cleaning/' }]} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-8">
            <div className="lg:col-span-8">
              <AnimateOnScroll animation="fade-right" duration={0.8}>
                <span className="font-body text-13 text-forest-ink/60 block mb-3 uppercase tracking-wider font-medium">
                  Flat Roofing
                </span>
                <WordRevealH1 text="Flat roof installation and repairs for durable, weather-resistant protection." />
                <div className="mt-8">
                  <ScrubbedParagraph text={service.shortDescription} />
                </div>

                <div className="flex flex-wrap items-center gap-4 mt-8">
                  <Button href="/book-appointment/" variant="forest" size="lg">
                    Request a flat roof assessment
                  </Button>
                  <Button href="#procedure" variant="ghost" size="lg">
                    View the project stages
                  </Button>
                </div>
              </AnimateOnScroll>
            </div>

            <div className="lg:col-span-4 lg:pl-6 flex flex-col justify-end">
              <AnimateOnScroll animation="fade-left" duration={0.8} delay={0.2}>
                <div className="p-6 bg-paper border border-mist space-y-3 font-body text-13 text-forest-ink/80 shadow-sm">
                  <div className="flex justify-between border-b border-mist pb-2">
                    <span>Roof inspection</span>
                    <span className="font-medium text-forest">Roof assessment</span>
                  </div>
                  <div className="flex justify-between border-b border-mist pb-2">
                    <span>Service area</span>
                    <span className="font-medium text-forest">Croydon and surrounding areas</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Availability</span>
                    <span className="font-medium text-forest">Routine roof check</span>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: What Is Professional Dental Cleaning? */}
      <section className="py-20 md:py-32 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <AnimateOnScroll animation="fade-right" duration={0.8}>
                <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
                  Preventive Science
                </span>
                <h2 className="font-display text-33 md:text-41 text-forest-ink mb-6">
                  How does flat roof installation work?
                </h2>
                <p className="font-body text-15 md:text-17 text-forest-ink/90 leading-relaxed mb-6">
                  {service.clinicalExplanation}
                </p>
                <div className="p-4 bg-mist/40 border-l-2 border-forest">
                  <span className="font-body text-13 text-forest-ink/80">
                    We assess the existing surface, drainage and signs of water ingress before recommending preparation and materials.
                  </span>
                </div>
              </AnimateOnScroll>
            </div>
            <div className="lg:col-span-6">
              <AnimateOnScroll animation="zoom-in" duration={0.8}>
                <div className="relative aspect-[4/3] bg-mist overflow-hidden border border-mist shadow-sm">
                  <Image
                    src="/images/jsroof-stock-13.jpg"
                    alt="Flat roof installation in progress"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Why Dental Cleaning Is Important */}
      <section className="py-20 md:py-32 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <AnimateOnScroll animation="fade-up" duration={0.8}>
            <div className="mb-12">
              <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
                Roof Protection
              </span>
              <h2 className="font-display text-33 md:text-41 text-forest-ink">
                Flat Roofs and Water Drainage
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.benefits.map((benefit, idx) => (
              <AnimateOnScroll key={idx} animation="fade-up" delay={idx * 0.1}>
                <div className="p-6 bg-paper border border-mist flex flex-col justify-between h-full shadow-sm">
                  <p className="font-body text-15 text-forest-ink/90 leading-relaxed mb-4">
                    {benefit}
                  </p>
                  <span className="font-body text-13 text-forest font-medium">Project benefit</span>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: What Happens During Cleaning? (Procedure Pin) */}
      <div id="procedure">
        <ProcedurePin
          steps={service.procedureSteps}
          title="Flat Roof Project Stages"
          subtitle="A Four-Step Roofing Process"
        />
      </div>

      {/* SECTION 5: Plaque, Tartar & Gum Health */}
      <section className="py-20 md:py-32 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <AnimateOnScroll animation="fade-up" duration={0.8}>
            <div className="max-w-3xl mb-12">
              <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
                Flat Roofing
              </span>
              <h2 className="font-display text-33 md:text-41 text-forest-ink mb-4">
                Flat Roof Inspection and Preparation
              </h2>
              <p className="font-body text-15 md:text-17 text-forest-ink/80 leading-relaxed">
                Correct drainage and sound seals help protect flat roofs from water ingress.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimateOnScroll animation="fade-up" delay={0.1}>
              <div className="p-8 bg-mist/30 border border-mist h-full shadow-sm">
                <span className="font-display text-21 text-forest block mb-2">Stage 1: Assess the Surface</span>
                <p className="font-body text-13 text-forest-ink/80 leading-relaxed">
                  We inspect the existing roof surface and note any areas of wear.
                </p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-up" delay={0.2}>
              <div className="p-8 bg-mist/30 border border-mist h-full shadow-sm">
                <span className="font-display text-21 text-forest block mb-2">Stage 2: Review Drainage</span>
                <p className="font-body text-13 text-forest-ink/80 leading-relaxed">
                  We check outlets and water flow to identify visible pooling or blockages.
                </p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-up" delay={0.3}>
              <div className="p-8 bg-mist/30 border border-mist h-full shadow-sm">
                <span className="font-display text-21 text-forest block mb-2">Stage 3: Plan the Installation</span>
                <p className="font-body text-13 text-forest-ink/80 leading-relaxed">
                  The team explains suitable preparation, materials and next steps.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* SECTION 6: How Often Should You Get Cleaning? */}
      <section className="py-20 md:py-32 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <AnimateOnScroll animation="fade-up" duration={0.8}>
            <div className="max-w-3xl mb-12">
              <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
                Routine Roof Maintenance
              </span>
              <h2 className="font-display text-33 md:text-41 text-forest-ink mb-4">
                When to Arrange a Flat Roof Assessment
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimateOnScroll animation="fade-right" duration={0.8}>
              <div className="p-8 bg-paper border border-mist h-full shadow-sm">
                <span className="font-display text-26 text-forest block mb-2">Routine roof check</span>
                <h3 className="font-display text-21 text-forest-ink mb-2">Preventive check</h3>
                <p className="font-body text-15 text-forest-ink/80 leading-relaxed">
                  An assessment can help identify visible wear before it develops further.
                </p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-left" duration={0.8} delay={0.15}>
              <div className="p-8 bg-paper border border-mist h-full shadow-sm">
                <span className="font-display text-26 text-forest block mb-2">After Heavy Rain or Strong Winds</span>
                <h3 className="font-display text-21 text-forest-ink mb-2">Flat roof maintenance</h3>
                <p className="font-body text-15 text-forest-ink/80 leading-relaxed">
                  Water ingress or visible wear may need a closer assessment of the roof surface and drainage.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* SECTION 7: Aftercare */}
      <section className="py-20 md:py-32 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <AnimateOnScroll animation="fade-up" duration={0.8}>
            <div className="mb-12">
              <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
                After-Installation Care
              </span>
              <h2 className="font-display text-33 md:text-41 text-forest-ink">
                Flat Roof Maintenance
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimateOnScroll animation="fade-up" delay={0.1}>
              <div className="p-6 bg-paper border border-mist h-full shadow-sm">
                <h3 className="font-display text-17 md:text-21 text-forest-ink mb-2">Keep Drainage Clear</h3>
                <p className="font-body text-13 text-forest-ink/80 leading-relaxed">
                  Keep outlets clear and look for signs of standing water after rain.
                </p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-up" delay={0.2}>
              <div className="p-6 bg-paper border border-mist h-full shadow-sm">
                <h3 className="font-display text-17 md:text-21 text-forest-ink mb-2">Check Seals and Roof Edges</h3>
                <p className="font-body text-13 text-forest-ink/80 leading-relaxed">
                  Check visible roof edges and seals from the ground. Avoid accessing the roof without suitable equipment.
                </p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-up" delay={0.3}>
              <div className="p-6 bg-paper border border-mist h-full shadow-sm">
                <h3 className="font-display text-17 md:text-21 text-forest-ink mb-2">Inspect the Roof Surface</h3>
                <p className="font-body text-13 text-forest-ink/80 leading-relaxed">
                  Ask a roofing professional to assess cracks, blisters or other visible surface damage.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* SECTION 8: Cost Information */}
      <section className="py-20 md:py-32 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <AnimateOnScroll animation="fade-right" duration={0.8}>
                <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
                  Transparent Fees
                </span>
                <h2 className="font-display text-33 md:text-41 text-forest-ink mb-6">
                  Flat Roof Installation Costs
                </h2>
                <div className="p-6 bg-paper border border-mist mb-6 shadow-sm">
                  <span className="font-body text-13 text-forest-ink/60 block mb-1">Quote information</span>
                  <span className="font-display text-26 md:text-33 text-forest block mb-2">
                    {service.costTransparency.baseRange}
                  </span>
                  <p className="font-body text-13 text-forest-ink/70">
                    {service.costTransparency.note}
                  </p>
                </div>
              </AnimateOnScroll>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <AnimateOnScroll animation="fade-left" duration={0.8}>
                <div className="p-6 bg-mist/30 border border-mist shadow-sm">
                  <h3 className="font-display text-17 md:text-21 text-forest-ink mb-3">
                    Helpful details for a quote:
                  </h3>
                  <ul className="space-y-2 font-body text-13 text-forest-ink/80">
                    {service.costTransparency.whatIsIncluded.map((inc, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-forest">•</span>
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: Frequently Asked Questions */}
      <section className="py-20 md:py-32 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <AnimateOnScroll animation="fade-right" duration={0.8}>
                <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
                  Homeowner Questions
                </span>
                <h2 className="font-display text-33 md:text-41 text-forest-ink mb-4">
                  Flat Roof FAQs
                </h2>
              </AnimateOnScroll>
            </div>
            <div className="lg:col-span-7">
              <AnimateOnScroll animation="fade-left" duration={0.8}>
                <Accordion items={service.faqs} />
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10: Appointment CTA */}
      <section className="py-20 md:py-28 bg-forest text-paper">
        <div className="max-w-site mx-auto px-6 md:px-12 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <AnimateOnScroll animation="fade-right" duration={0.8}>
            <div>
              <span className="font-body text-13 text-lime uppercase tracking-wider block mb-2 font-medium">
                Roof Protection
              </span>
              <h2 className="font-display text-33 md:text-41 text-paper">
                Request a flat roof assessment
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
