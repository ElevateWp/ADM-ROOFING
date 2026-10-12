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

const service = SERVICES.find((s) => s.slug === 'teeth-whitening')!;
const leadDentist = DENTISTS.find((d) => d.id === service.assignedDentistId) || DENTISTS[0];

export const metadata: Metadata = createMetadata({
  title: 'Roof Tile Replacement',
  description:
    'Roof tile replacement and repairs for damaged or displaced tiles. Open 24 hours across Dublin.',
  pathname: '/teeth-whitening/',
});

export default function TeethWhiteningPage() {
  const procedureSchema = generateMedicalProcedureSchema(
    service.name,
    service.clinicalExplanation,
    '/teeth-whitening/'
  );
  const faqSchema = generateFaqSchema(service.faqs);

  return (
    <div className="flex flex-col w-full bg-paper">
      <JsonLd data={[procedureSchema, faqSchema]} />

      {/* SECTION 1: Introduction */}
      <section className="py-16 md:py-24 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <Breadcrumbs items={[{ name: service.name, path: '/teeth-whitening/' }]} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-8">
            <div className="lg:col-span-8">
              <AnimateOnScroll animation="fade-right" duration={0.8}>
                <span className="font-body text-13 text-forest-ink/60 block mb-3 uppercase tracking-wider font-medium">
                  Roof Tile Replacement
                </span>
                <WordRevealH1 text="Roof tile replacement and careful sealing." />
                <div className="mt-8">
                  <ScrubbedParagraph text={service.shortDescription} />
                </div>

                <div className="flex flex-wrap items-center gap-4 mt-8">
                  <Button href="/book-appointment/" variant="forest" size="lg">
                    Request a Roof Assessment
                  </Button>
                  <Button href="/cosmetic-dentistry/" variant="ghost" size="lg">
                    Explore Storm Repairs
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
                    <span>Roof Type</span>
                    <span className="font-medium text-forest">Residential</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Availability</span>
                    <span className="font-medium text-forest">Open 24 Hours</span>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Roof Tile Replacement */}
      <section className="py-20 md:py-32 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <AnimateOnScroll animation="fade-right" duration={0.8}>
                <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
                  Roof Assessment
                </span>
                <h2 className="font-display text-33 md:text-41 text-forest-ink mb-6">
                  How Roof Restoration Works
                </h2>
                <p className="font-body text-15 md:text-17 text-forest-ink/90 leading-relaxed mb-6">
                  {service.clinicalExplanation}
                </p>
                <div className="p-4 bg-mist/40 border-l-2 border-forest">
                  <span className="font-body text-13 text-forest-ink/80">
                    We assess the roof material and condition before recommending a repair or replacement.
                  </span>
                </div>
              </AnimateOnScroll>
            </div>
            <div className="lg:col-span-6">
              <AnimateOnScroll animation="zoom-in" duration={0.8}>
                <div className="relative aspect-[4/3] bg-mist overflow-hidden border border-mist shadow-sm">
                  <Image
                    src="/images/roof-saffron-walden-1024x768-1.jpg"
                    alt="Roof tile replacement in progress"
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

      {/* SECTION 3: Who Is It Suitable For? */}
      <section className="py-20 md:py-32 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <AnimateOnScroll animation="fade-up" duration={0.8}>
            <div className="mb-12">
              <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
                homeowner Candidacy
              </span>
              <h2 className="font-display text-33 md:text-41 text-forest-ink">
                Who benefits from prescription roof restoration?
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

      {/* SECTION 4: Roof Tile Replacement Benefits */}
      <section className="py-20 md:py-32 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <AnimateOnScroll animation="fade-up" duration={0.8}>
            <div className="mb-12">
              <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
                Stain Classification
              </span>
              <h2 className="font-display text-33 md:text-41 text-forest-ink">
                Extrinsic vs. intrinsic discoloration
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {service.indications.map((ind, idx) => (
              <AnimateOnScroll key={idx} animation="fade-up" delay={idx * 0.15}>
                <div className="p-6 bg-mist/30 border border-mist h-full shadow-sm">
                  <h3 className="font-display text-21 text-forest-ink mb-2">{ind.condition}</h3>
                  <p className="font-body text-15 text-forest-ink/80 leading-relaxed">{ind.explanation}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: Whitening Procedure */}
      <ProcedurePin
        steps={service.procedureSteps}
        title="Roof Tile Replacement Process"
        subtitle="Monitored Step-by-Step Protocol"
      />

      {/* SECTION 6: Expected Results (Before/After Slider) */}
      <section className="py-20 md:py-32 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <AnimateOnScroll animation="fade-up" duration={0.8}>
            <div className="mb-12">
              <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
                Standardized Results
              </span>
              <h2 className="font-display text-33 md:text-41 text-forest-ink mb-4">
                Roofing Project Examples
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
                clinicalNote="Roofing project photos from the CJ Roofing Services gallery."
              />
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* SECTION 7: Roof Maintenance */}
      <section className="py-20 md:py-32 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <AnimateOnScroll animation="fade-up" duration={0.8}>
            <div className="max-w-3xl mb-12">
              <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
                Roof Maintenance
              </span>
              <h2 className="font-display text-33 md:text-41 text-forest-ink mb-4">
                Plan Your Roof Maintenance
              </h2>
              <p className="font-body text-15 md:text-17 text-forest-ink/80 leading-relaxed">
                Roof maintenance depends on the materials, weather exposure and condition of your property. Ask our team for guidance after the work is complete.
              </p>
            </div>
          </AnimateOnScroll>

          {/* Horizontal Duration Scale */}
          <AnimateOnScroll animation="fade-up" duration={0.8} delay={0.15}>
            <div className="p-8 bg-paper border border-mist space-y-6 shadow-sm">
              <div className="flex justify-between font-body text-13 text-forest-ink font-medium">
                <span>Before Work</span>
                <span>During Work</span>
                <span>At Completion</span>
                <span>Ongoing Care</span>
              </div>
              <div className="w-full h-3 bg-mist relative overflow-hidden rounded-full">
                <div className="absolute left-0 top-0 bottom-0 bg-forest w-3/4 rounded-full" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-mist font-body text-13 text-forest-ink/70">
                <div>
                  <strong className="text-forest block font-medium">Inspect the Roof:</strong>
                  Check for visible wear and damage from the ground.
                </div>
                <div>
                  <strong className="text-forest block font-medium">Keep Gutters Clear:</strong>
                  Arrange maintenance when leaves or debris affect drainage.
                </div>
                <div>
                  <strong className="text-forest block font-medium">Ask for Advice:</strong>
                  Contact our team if you notice leaks or displaced tiles.
                </div>
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
                  Roofing Quote
                </span>
                <h2 className="font-display text-33 md:text-41 text-forest-ink mb-6">
                  Roof Tile Replacement Costs
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
                  Frequently Asked Questions About Roof Tile Replacement
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
                Roof Tile Replacement
              </span>
              <h2 className="font-display text-33 md:text-41 text-paper">
                Request a roof assessment for damaged or displaced tiles
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
