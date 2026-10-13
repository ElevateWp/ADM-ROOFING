import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { SERVICES, DENTISTS } from '@/lib/clinic-data';
import WordRevealH1 from '@/components/motion/WordRevealH1';
import ScrubbedParagraph from '@/components/motion/ScrubbedParagraph';
import ProcedurePin from '@/components/sections/treatment/ProcedurePin';
import BeforeAfterSlider from '@/components/motion/BeforeAfterSlider';
import AnimateOnScroll from '@/components/motion/AnimateOnScroll';
import Accordion from '@/components/ui/Accordion';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import Button from '@/components/ui/Button';
import JsonLd from '@/components/ui/JsonLd';
import { createMetadata, generateMedicalProcedureSchema, generateFaqSchema } from '@/lib/seo';

const service = SERVICES.find((s) => s.slug === 'dental-implants')!;
const leadDentist = DENTISTS.find((d) => d.id === service.assignedDentistId) || DENTISTS[0];

export const metadata: Metadata = createMetadata({
  title: 'Roof Repairs and Leak Detection',
  description:
    'Roof repairs and leak detection to help protect your home.',
  pathname: '/dental-implants/',
});

export default function DentalImplantsPage() {
  const procedureSchema = generateMedicalProcedureSchema(
    service.name,
    service.clinicalExplanation,
    '/dental-implants/'
  );
  const faqSchema = generateFaqSchema(service.faqs);

  return (
    <div className="flex flex-col w-full bg-paper">
      <JsonLd data={[procedureSchema, faqSchema]} />

      {/* SECTION 1: Hero / Introduction */}
      <section className="py-16 md:py-24 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <Breadcrumbs items={[{ name: service.name, path: '/dental-implants/' }]} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-8">
            <div className="lg:col-span-8">
              <AnimateOnScroll animation="fade-right" duration={0.8}>
                <span className="font-body text-13 text-forest-ink/60 block mb-3 uppercase tracking-wider font-medium">
                  Roof Repairs and Replacements
                </span>
                <WordRevealH1 text="Roof repairs to help protect your home." />
                <div className="mt-8">
                  <ScrubbedParagraph text={service.shortDescription} />
                </div>

                <div className="flex flex-wrap items-center gap-4 mt-8">
                  <Button href="/book-appointment/" variant="forest" size="lg">
                    Request a Roof Inspection
                  </Button>
                  <Button href="#procedure" variant="ghost" size="lg">
                    View Service Stages
                  </Button>
                </div>
              </AnimateOnScroll>
            </div>

            <div className="lg:col-span-4 lg:pl-6 flex flex-col justify-end">
              <AnimateOnScroll animation="fade-left" duration={0.8} delay={0.2}>
                <div className="p-6 bg-paper border border-mist space-y-3 font-body text-13 text-forest-ink/80 shadow-sm">
                  <div className="flex justify-between border-b border-mist pb-2">
                    <span>Roofing Team</span>
                    <Link href={`/dentists/${leadDentist.slug}/`} className="font-medium text-forest underline">
                      {leadDentist.name}
                    </Link>
                  </div>
                  <div className="flex justify-between border-b border-mist pb-2">
                    <span>Experience</span>
                    <span className="font-medium text-forest">10+ Years</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Availability</span>
                    <span className="font-medium text-forest">Call to confirm availability</span>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Roof Repairs */}
      <section className="py-20 md:py-32 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <AnimateOnScroll animation="fade-right" duration={0.8}>
                <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
                  Roof Assessment
                </span>
                <h2 className="font-display text-33 md:text-41 text-forest-ink mb-6">
                  How Do Roof Repairs Work?
                </h2>
                <p className="font-body text-15 md:text-17 text-forest-ink/90 leading-relaxed mb-6">
                  {service.clinicalExplanation}
                </p>
                <div className="p-4 bg-mist/40 border-l-2 border-forest">
                  <span className="font-body text-13 text-forest-ink/80">
                    We plan repairs around the affected area, existing roof tiles and materials.
                  </span>
                </div>
              </AnimateOnScroll>
            </div>
            <div className="lg:col-span-6">
              <AnimateOnScroll animation="zoom-in" duration={0.8}>
                <div className="relative aspect-[4/3] bg-mist overflow-hidden border border-mist shadow-sm">
                  <Image
                    src="/images/jsroof-stock-10.jpg"
                    alt="Roof tiles and sealing points"
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

      {/* SECTION 3: Signs You May Need a Roof Repair */}
      <section className="py-20 md:py-32 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <AnimateOnScroll animation="fade-up" duration={0.8}>
            <div className="mb-12">
              <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
                Signs to Look For
              </span>
              <h2 className="font-display text-33 md:text-41 text-forest-ink">
                When Should I Arrange a Roof Repair?
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.whoNeeds.map((item, idx) => (
              <AnimateOnScroll key={idx} animation="fade-up" delay={idx * 0.1}>
                <div className="p-6 bg-paper border border-mist flex items-start gap-4 h-full shadow-sm">
                  <span className="font-display text-21 text-forest flex-shrink-0">0{idx + 1}</span>
                  <p className="font-body text-15 text-forest-ink/80 leading-relaxed">{item}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: Benefits */}
      <section className="py-20 md:py-32 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <AnimateOnScroll animation="fade-up" duration={0.8}>
            <div className="mb-12">
              <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
                Roofing Benefits
              </span>
              <h2 className="font-display text-33 md:text-41 text-forest-ink">
                Roofing Benefits
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.benefits.map((benefit, idx) => (
              <AnimateOnScroll key={idx} animation="fade-up" delay={idx * 0.1}>
                <div className="p-6 bg-mist/30 border border-mist flex flex-col justify-between h-full shadow-sm">
                  <p className="font-body text-15 text-forest-ink/90 leading-relaxed mb-4">
                    {benefit}
                  </p>
                  <span className="font-body text-13 text-forest font-medium">Agreed in advance</span>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: Roof Repair Process */}
      <div id="procedure">
        <ProcedurePin
          steps={service.procedureSteps}
          title="Roof Repair Process"
          subtitle="Roof Repair Stages"
        />
      </div>

      {/* SECTION 6: Types / Options */}
      <section className="py-20 md:py-32 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <AnimateOnScroll animation="fade-up" duration={0.8}>
            <div className="mb-12">
              <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
                Repair Options
              </span>
              <h2 className="font-display text-33 md:text-41 text-forest-ink">
                Repair Options
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {service.indications.map((ind, idx) => (
              <AnimateOnScroll key={idx} animation="fade-up" delay={idx * 0.15}>
                <div className="p-8 bg-paper border border-mist flex flex-col justify-between h-full shadow-sm">
                  <div>
                    <span className="font-body text-13 text-forest font-medium block mb-2">
                      Configuration 0{idx + 1}
                    </span>
                    <h3 className="font-display text-21 md:text-26 text-forest-ink mb-3">
                      {ind.condition}
                    </h3>
                    <p className="font-body text-15 text-forest-ink/80 leading-relaxed mb-6">
                      {ind.explanation}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-mist text-13 text-forest-ink/60">
                    Repair options depend on the roof type and condition.
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: Recovery & Aftercare */}
      <section className="py-20 md:py-32 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <AnimateOnScroll animation="fade-up" duration={0.8}>
            <div className="max-w-3xl mb-12">
              <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
                After the Repair
              </span>
              <h2 className="font-display text-33 md:text-41 text-forest-ink mb-4">
                Timing and After-Care
              </h2>
              <p className="font-body text-15 md:text-17 text-forest-ink/80 leading-relaxed">
                Timing depends on the damage, materials and roof access. Our team will explain the next steps after assessing the property.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="divide-y divide-mist border-t border-b border-mist">
            {service.recoveryTimeline.map((rec, idx) => (
              <AnimateOnScroll key={idx} animation="fade-up" delay={idx * 0.1}>
                <div className="py-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  <div className="lg:col-span-3">
                    <span className="font-display text-21 text-forest">{rec.period}</span>
                  </div>
                  <div className="lg:col-span-4">
                    <span className="font-body text-13 text-forest-ink/60 block mb-1">What to Expect:</span>
                    <p className="font-body text-15 text-forest-ink/80">{rec.expectedSensations}</p>
                  </div>
                  <div className="lg:col-span-5">
                    <span className="font-body text-13 text-forest-ink/60 block mb-1">Guidance:</span>
                    <p className="font-body text-15 text-forest-ink/80">{rec.careProtocol}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: Cost / Pricing Information */}
      <section className="py-20 md:py-32 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <AnimateOnScroll animation="fade-right" duration={0.8}>
                <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
                  Clear Quotes
                </span>
                <h2 className="font-display text-33 md:text-41 text-forest-ink mb-6">
                  How Much Does a Roof Repair Cost?
                </h2>
                <div className="p-6 bg-paper border border-mist mb-6 shadow-sm">
                  <span className="font-body text-13 text-forest-ink/60 block mb-1">Typical Quote</span>
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
                    Items included in your quote:
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

              <AnimateOnScroll animation="fade-left" duration={0.8} delay={0.15}>
                <div className="p-6 bg-paper border border-mist shadow-sm">
                  <h3 className="font-display text-17 md:text-21 text-forest-ink mb-3">
                    Factors that affect your quote:
                  </h3>
                  <ul className="space-y-2 font-body text-13 text-forest-ink/80">
                    {service.costTransparency.factors.map((fac, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-forest">•</span>
                        <span>{fac}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: Before & After */}
      <section className="py-20 md:py-32 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <AnimateOnScroll animation="fade-up" duration={0.8}>
            <div className="mb-12">
              <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
                Roofing Reference Images
              </span>
              <h2 className="font-display text-33 md:text-41 text-forest-ink mb-4">
                Residential Roof Styles
              </h2>
              <p className="font-body text-15 text-forest-ink/80 max-w-2xl">
                {service.beforeAfterCase.clinicalContext}
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="zoom-in" duration={0.8}>
            <div className="max-w-4xl mx-auto">
              <BeforeAfterSlider
                beforeImage={service.beforeAfterCase.beforeImage}
                afterImage={service.beforeAfterCase.afterImage}
                beforeLabel={service.beforeAfterCase.beforeLabel}
                afterLabel={service.beforeAfterCase.afterLabel}
                clinicalNote="Illustrative stock images. Actual work depends on a roof assessment."
              />
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* SECTION 10: Roofing Team */}
      <section className="py-20 md:py-32 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <AnimateOnScroll animation="fade-up" duration={0.8}>
            <div className="p-8 md:p-12 bg-paper border border-mist grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-sm">
              <div className="lg:col-span-3">
                <div className="relative aspect-square bg-mist overflow-hidden border border-mist">
                  <Image
                    src={leadDentist.image}
                    alt={leadDentist.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 25vw"
                    className="object-cover object-top"
                  />
                </div>
              </div>
              <div className="lg:col-span-9 flex flex-col justify-between">
                <div>
                  <span className="font-body text-13 text-forest block mb-1 font-medium uppercase tracking-wider">
                    Roofing Team
                  </span>
                  <h3 className="font-display text-26 md:text-33 text-forest-ink mb-2">
                    {leadDentist.name}
                  </h3>
                  <span className="font-body text-15 text-forest-ink/70 block mb-4">
                    {leadDentist.title} • {leadDentist.qualifications}
                  </span>
                  <p className="font-body text-15 text-forest-ink/80 leading-relaxed mb-6">
                    {leadDentist.bio}
                  </p>
                </div>
                <Link
                  href={`/dentists/${leadDentist.slug}/`}
                  className="font-body text-15 text-forest font-medium underline underline-offset-4"
                >
                  Meet the Team →
                </Link>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* SECTION 11: Frequently Asked Questions */}
      <section className="py-20 md:py-32 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <AnimateOnScroll animation="fade-right" duration={0.8}>
                <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
                  Homeowner Questions
                </span>
                <h2 className="font-display text-33 md:text-41 text-forest-ink mb-4">
                  Frequently Asked Questions About Roof Repairs
                </h2>
                <p className="font-body text-15 text-forest-ink/80">
                  Learn about roof assessments, materials, timing and maintenance.
                </p>
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

      {/* SECTION 12: Appointment CTA */}
      <section className="py-20 md:py-28 bg-forest text-paper">
        <div className="max-w-site mx-auto px-6 md:px-12 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <AnimateOnScroll animation="fade-right" duration={0.8}>
            <div>
              <span className="font-body text-13 text-lime uppercase tracking-wider block mb-2 font-medium">
                Next Steps
              </span>
              <h2 className="font-display text-33 md:text-41 text-paper">
                Request a roof assessment
              </h2>
              <p className="font-body text-15 text-paper/80 mt-2 max-w-xl">
                Our team will discuss the roof condition and the recommended work.
              </p>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-left" duration={0.8} delay={0.2}>
            <div className="flex flex-wrap items-center gap-4">
              <Button href="/book-appointment/" variant="lime" size="lg">
                Request a Quote
              </Button>
              <Button href="/contact/" variant="ghost" size="lg" className="text-paper border-paper/30 hover:border-paper hover:bg-paper/10">
                Contact Our Team
              </Button>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
}
