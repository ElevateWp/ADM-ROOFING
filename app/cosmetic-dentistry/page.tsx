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

const service = SERVICES.find((s) => s.slug === 'cosmetic-dentistry')!;
const leadDentist = DENTISTS.find((d) => d.id === service.assignedDentistId) || DENTISTS[0];

export const metadata: Metadata = createMetadata({
  title: 'Roof Repairs and Finishing',
  description:
    'Assessment of roof tiles, flashings and seals after rain or wind damage in our service area.',
  pathname: '/cosmetic-dentistry/',
});

export default function CosmeticDentistryPage() {
  const procedureSchema = generateMedicalProcedureSchema(
    service.name,
    service.clinicalExplanation,
    '/cosmetic-dentistry/'
  );
  const faqSchema = generateFaqSchema(service.faqs);

  return (
    <div className="flex flex-col w-full bg-paper">
      <JsonLd data={[procedureSchema, faqSchema]} />

      {/* SECTION 1: Introduction */}
      <section className="py-16 md:py-24 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <Breadcrumbs items={[{ name: service.name, path: '/cosmetic-dentistry/' }]} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-8">
            <div className="lg:col-span-8">
              <AnimateOnScroll animation="fade-right" duration={0.8}>
                <span className="font-body text-13 text-forest-ink/60 block mb-3 uppercase tracking-wider font-medium">
                  Roof repairs and finishing
                </span>
                <WordRevealH1 text="Targeted repairs after rain or wind damage." />
                <div className="mt-8">
                  <ScrubbedParagraph text={service.shortDescription} />
                </div>

                <div className="flex flex-wrap items-center gap-4 mt-8">
                  <Button href="/book-appointment/" variant="forest" size="lg">
                    Request a roof assessment
                  </Button>
                  <Button href="#before-after" variant="ghost" size="lg">
                    View documented outcomes
                  </Button>
                </div>
              </AnimateOnScroll>
            </div>

            <div className="lg:col-span-4 lg:pl-6 flex flex-col justify-end">
              <AnimateOnScroll animation="fade-left" duration={0.8} delay={0.2}>
                <div className="p-6 bg-paper border border-mist space-y-3 font-body text-13 text-forest-ink/80 shadow-sm">
                  <div className="flex justify-between border-b border-mist pb-2">
                    <span>Our Team</span>
                    <Link href={`/dentists/${leadDentist.slug}/`} className="font-medium text-forest underline">
                      {leadDentist.name}
                    </Link>
                  </div>
                  <div className="flex justify-between border-b border-mist pb-2">
                    <span>Roof repair materials</span>
                    <span className="font-medium text-forest">Materials selected for the roof</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Roofing materials</span>
                    <span className="font-medium text-forest">Compatible roofing materials</span>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Cosmetic Dental Treatments */}
      <section className="py-20 md:py-32 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <AnimateOnScroll animation="fade-up" duration={0.8}>
            <div className="mb-12">
              <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
                Project stages
              </span>
              <h2 className="font-display text-33 md:text-41 text-forest-ink">
                Roof Repair Options
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {service.indications.map((ind, idx) => (
              <AnimateOnScroll key={idx} animation="fade-up" delay={idx * 0.15}>
                <div className="p-8 bg-paper border border-mist flex flex-col justify-between h-full shadow-sm">
                  <div>
                    <span className="font-body text-13 text-forest font-medium block mb-2">
                      Project 0{idx + 1}
                    </span>
                    <h3 className="font-display text-21 md:text-26 text-forest-ink mb-3">
                      {ind.condition}
                    </h3>
                    <p className="font-body text-15 text-forest-ink/80 leading-relaxed mb-6">
                      {ind.explanation}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-mist text-13 text-forest-ink/60">
                    Assessment based on roof material and design
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: Smile Assessment */}
      <section className="py-20 md:py-32 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <AnimateOnScroll animation="fade-right" duration={0.8}>
                <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
                  Roof Inspection
                </span>
                <h2 className="font-display text-33 md:text-41 text-forest-ink mb-6">
                  How We Assess a Roof
                </h2>
                <p className="font-body text-15 md:text-17 text-forest-ink/90 leading-relaxed mb-6">
                  We inspect tiles, joints, flashings and visible leak points. Our team explains the recommended options and scope before work begins.
                </p>
                <div className="p-4 bg-mist/40 border-l-2 border-forest">
                  <span className="font-body text-13 text-forest-ink/80">
                    We assess the roof type and explain repair options before work begins.
                  </span>
                </div>
              </AnimateOnScroll>
            </div>
            <div className="lg:col-span-6">
              <AnimateOnScroll animation="zoom-in" duration={0.8}>
                <div className="relative aspect-[4/3] bg-mist overflow-hidden border border-mist shadow-sm">
                  <Image
                    src="/images/jsroof-stock-14.jpg"
                    alt="Roof inspection"
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

      {/* SECTION 4: Treatment Options */}
      <section className="py-20 md:py-32 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <AnimateOnScroll animation="fade-up" duration={0.8}>
            <div className="mb-12">
              <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
                Roofing materials
              </span>
              <h2 className="font-display text-33 md:text-41 text-forest-ink">
                Choosing Roofing Materials
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimateOnScroll animation="fade-right" duration={0.8}>
              <div className="p-8 bg-paper border border-mist h-full shadow-sm">
                <span className="font-display text-26 text-forest block mb-2">Clay tile repairs</span>
                <h3 className="font-display text-21 text-forest-ink mb-3">Finishing and Sealing</h3>
                <p className="font-body text-15 text-forest-ink/80 leading-relaxed">
                  The finish is selected after checking the material, affected area and roof condition.
                </p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-left" duration={0.8} delay={0.15}>
              <div className="p-8 bg-paper border border-mist h-full shadow-sm">
                <span className="font-display text-26 text-forest block mb-2">Metal roof repairs</span>
                <h3 className="font-display text-21 text-forest-ink mb-3">Sealing and Finishing</h3>
                <p className="font-body text-15 text-forest-ink/80 leading-relaxed">
                  Repair materials should suit the existing roof and are specified after inspection.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* SECTION 5: Before & After */}
      <section id="before-after" className="py-20 md:py-32 border-b border-mist bg-paper">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <AnimateOnScroll animation="fade-up" duration={0.8}>
            <div className="mb-12">
              <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
                Roofing Reference Images
              </span>
              <h2 className="font-display text-33 md:text-41 text-forest-ink mb-4">
                Roof repair examples
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

      {/* SECTION 6: Benefits & Expectations */}
      <section className="py-20 md:py-32 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <AnimateOnScroll animation="fade-up" duration={0.8}>
            <div className="mb-12">
              <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
                Practical Considerations
              </span>
              <h2 className="font-display text-33 md:text-41 text-forest-ink">
                Repair Quality and Longevity
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
                  <span className="font-body text-13 text-forest font-medium">Service consideration</span>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: Dentist Expertise */}
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
              <div className="lg:col-span-9">
                <span className="font-body text-13 text-forest block mb-1 font-medium uppercase tracking-wider">
                  Meet the Roofing Team
                </span>
                <h3 className="font-display text-26 md:text-33 text-forest-ink mb-2">
                  {leadDentist.name}
                </h3>
                <p className="font-body text-15 text-forest-ink/80 leading-relaxed mb-6">
                  {leadDentist.bio}
                </p>
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
                  Roof repair costs
                </h2>
                <div className="p-6 bg-paper border border-mist mb-6 shadow-sm">
                  <span className="font-body text-13 text-forest-ink/60 block mb-1">Roofing quote</span>
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
                  Cosmetic Frequently Asked Questions
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
                Protect Your Roof
              </span>
              <h2 className="font-display text-33 md:text-41 text-paper">
                Request a Roof Assessment
              </h2>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-left" duration={0.8} delay={0.2}>
            <Button href="/book-appointment/" variant="lime" size="lg">
              Request an assessment
            </Button>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
}
