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

const service = SERVICES.find((s) => s.slug === 'braces')!;
const leadDentist = DENTISTS.find((d) => d.id === service.assignedDentistId) || DENTISTS[0];

export const metadata: Metadata = createMetadata({
  title: 'Roof Inspection and Preventive Maintenance',
  description:
    'Roof inspections across Croydon to identify visible wear and areas that may need attention.',
  pathname: '/braces/',
});

const BRACES_COMPARISON = [
  { type: 'Clay tiles', visibility: 'Visual check of tiles and joints', removability: 'Replacement based on fit and roof condition', comfort: 'Review of seals and finishing', bestFor: 'Broken, displaced or visibly worn tiles', adjustmentInterval: 'Timing agreed after inspection' },
  { type: 'Metal roofing', visibility: 'Check overlaps and fixings', removability: 'Localised repair depending on material condition', comfort: 'Review of joints, screws and finishes', bestFor: 'Water entry points or damaged sections', adjustmentInterval: 'Timing agreed after inspection' },
  { type: 'Flat roofing', visibility: 'Check seams, outlets and seals', removability: 'Solution selected for the surface', comfort: 'Review drainage and pooling areas', bestFor: 'Signs of damp or standing water', adjustmentInterval: 'Timing agreed after inspection' },
];

export default function BracesPage() {
  const procedureSchema = generateMedicalProcedureSchema(
    service.name,
    service.clinicalExplanation,
    '/braces/'
  );
  const faqSchema = generateFaqSchema(service.faqs);

  return (
    <div className="flex flex-col w-full bg-paper">
      <JsonLd data={[procedureSchema, faqSchema]} />

      {/* SECTION 1: Introduction */}
      <section className="py-16 md:py-24 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <Breadcrumbs items={[{ name: service.name, path: '/braces/' }]} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-8">
            <div className="lg:col-span-8">
              <AnimateOnScroll animation="fade-right" duration={0.8}>
                <span className="font-body text-13 text-forest-ink/60 block mb-3 uppercase tracking-wider font-medium">
                  Roof Inspections
                </span>
                <WordRevealH1 text="Preventive roof inspections to identify wear and vulnerable areas." />
                <div className="mt-8">
                  <ScrubbedParagraph text={service.shortDescription} />
                </div>

                <div className="flex flex-wrap items-center gap-4 mt-8">
                  <Button href="/book-appointment/" variant="forest" size="lg">
                    Request a roof assessment
                  </Button>
                  <Button href="#comparison" variant="ghost" size="lg">
                    Explore roof types
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
                    <span>Featured service</span>
                    <span className="font-medium text-forest">Residential roofing</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Inspection method</span>
                    <span className="font-medium text-forest">Visual roof inspection</span>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: What Are Braces? */}
      <section className="py-20 md:py-32 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <AnimateOnScroll animation="fade-right" duration={0.8}>
                <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
                  Roof Assessment
                </span>
                <h2 className="font-display text-33 md:text-41 text-forest-ink mb-6">
                  How Does a Roof Inspection Work?
                </h2>
                <p className="font-body text-15 md:text-17 text-forest-ink/90 leading-relaxed mb-6">
                  {service.clinicalExplanation}
                </p>
                <div className="p-4 bg-mist/40 border-l-2 border-forest">
                  <span className="font-body text-13 text-forest-ink/80">
                    We inspect tiles, joins, flashings and seals to recommend suitable roof repairs.
                  </span>
                </div>
              </AnimateOnScroll>
            </div>
            <div className="lg:col-span-6">
              <AnimateOnScroll animation="zoom-in" duration={0.8}>
                <div className="relative aspect-[4/3] bg-mist overflow-hidden border border-mist shadow-sm">
                  <Image
                    src="/images/jsroof-stock-15.jpg"
                    alt="Residential roof inspection"
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

      {/* SECTION 3: Who May Need Orthodontic Treatment? */}
      <section className="py-20 md:py-32 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <AnimateOnScroll animation="fade-up" duration={0.8}>
            <div className="mb-12">
              <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
                When to Arrange an Inspection
              </span>
              <h2 className="font-display text-33 md:text-41 text-forest-ink">
                Quais sinais indicam necessidade de reparo?
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

      {/* SECTION 4: Types of Braces (Comparison Table) */}
      <section id="comparison" className="py-20 md:py-32 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <AnimateOnScroll animation="fade-up" duration={0.8}>
            <div className="mb-12">
              <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
                Appliance Modalities
              </span>
              <h2 className="font-display text-33 md:text-41 text-forest-ink">
                Appliance comparison matrix
              </h2>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-up" duration={0.8} delay={0.15}>
            <div className="border border-mist overflow-x-auto bg-paper shadow-sm">
              <table className="w-full text-left font-body text-13 border-collapse min-w-[700px]">
                <thead>
                  <tr className="bg-mist/40 border-b border-mist text-forest-ink">
                    <th className="py-4 px-6 font-display text-17">Roof type</th>
                    <th className="py-4 px-6 font-medium">Visible condition and details</th>
                    <th className="py-4 px-6 font-medium">Possibilidade de reparo</th>
                    <th className="py-4 px-6 font-medium">When to Arrange an Inspection</th>
                    <th className="py-4 px-6 font-medium">Recommended review</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-mist">
                  {BRACES_COMPARISON.map((row) => (
                    <tr key={row.type} className="hover:bg-mist/20 transition-colors">
                      <td className="py-5 px-6 font-display text-17 text-forest font-medium">
                        {row.type}
                      </td>
                      <td className="py-5 px-6 text-forest-ink/80">{row.visibility}</td>
                      <td className="py-5 px-6 text-forest-ink/80">{row.removability}</td>
                      <td className="py-5 px-6 text-forest-ink/80">{row.bestFor}</td>
                      <td className="py-5 px-6 text-forest-ink/80">{row.adjustmentInterval}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* SECTION 5: Treatment Process */}
      <ProcedurePin
        steps={service.procedureSteps}
        title="Roof Repair Process"
        subtitle="Project stages"
      />

      {/* SECTION 6: Treatment Duration */}
      <section className="py-20 md:py-32 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <AnimateOnScroll animation="fade-up" duration={0.8}>
            <div className="max-w-3xl mb-12">
              <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
                Project stages
              </span>
              <h2 className="font-display text-33 md:text-41 text-forest-ink mb-4">
                Prazo estimado do reparo
              </h2>
              <p className="font-body text-15 md:text-17 text-forest-ink/80 leading-relaxed">
                Timing depends on the material, access and extent of the damage. Our team explains each stage after inspecting the roof.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <AnimateOnScroll animation="fade-up" delay={0.1}>
              <div className="p-6 bg-paper border border-mist h-full shadow-sm">
                <span className="font-display text-26 text-forest block mb-2">Inspection</span>
                <h3 className="font-display text-17 text-forest-ink mb-2">Roof Inspection</h3>
                <p className="font-body text-13 text-forest-ink/70">
                  We identify damaged tiles and assess which sections need adjustment or replacement.
                </p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-up" delay={0.2}>
              <div className="p-6 bg-paper border border-mist h-full shadow-sm">
                <span className="font-display text-26 text-forest block mb-2">Repair</span>
                <h3 className="font-display text-17 text-forest-ink mb-2">Repair dos pontos afetados</h3>
                <p className="font-body text-13 text-forest-ink/70">
                  We review seals, overlaps and finishes based on the type of roof.
                </p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-up" delay={0.3}>
              <div className="p-6 bg-paper border border-mist h-full shadow-sm">
                <span className="font-display text-26 text-forest block mb-2">Final review</span>
                <h3 className="font-display text-17 text-forest-ink mb-2">Review the finish</h3>
                <p className="font-body text-13 text-forest-ink/70">
                  A final review confirms the completed work and any maintenance guidance.
                </p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-up" delay={0.4}>
              <div className="p-6 bg-mist/40 border border-mist h-full shadow-sm">
                <span className="font-display text-26 text-forest block mb-2">Maintenance</span>
                <h3 className="font-display text-17 text-forest-ink mb-2">Preventive Maintenance</h3>
                <p className="font-body text-13 text-forest-ink/70">
                  Our team shares roof maintenance guidance after the repair.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* SECTION 7: Benefits */}
      <section className="py-20 md:py-32 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <AnimateOnScroll animation="fade-up" duration={0.8}>
            <div className="mb-12">
              <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
                Functional Value
              </span>
              <h2 className="font-display text-33 md:text-41 text-forest-ink">
                Benefits of Preventive Maintenance
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
                  <span className="font-body text-13 text-forest font-medium">roofing standard</span>
                </div>
              </AnimateOnScroll>
            ))}
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
                  Roofing Quote
                </span>
                <h2 className="font-display text-33 md:text-41 text-forest-ink mb-6">
                  roofing investment
                </h2>
                <div className="p-6 bg-paper border border-mist mb-6 shadow-sm">
                  <span className="font-body text-13 text-forest-ink/60 block mb-1">Full repair Range</span>
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

      {/* SECTION 9: Before & After */}
      <section className="py-20 md:py-32 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <AnimateOnScroll animation="fade-up" duration={0.8}>
            <div className="mb-12">
              <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
                Project example
              </span>
              <h2 className="font-display text-33 md:text-41 text-forest-ink mb-4">
                Illustrative roofing project example
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

      {/* SECTION 10: Frequently Asked Questions */}
      <section className="py-20 md:py-32 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <AnimateOnScroll animation="fade-right" duration={0.8}>
                <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
                  Homeowner Questions
                </span>
                <h2 className="font-display text-33 md:text-41 text-forest-ink mb-4">
                  roofing Frequently Asked Questions
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

      {/* SECTION 11: Appointment CTA */}
      <section className="py-20 md:py-28 bg-forest text-paper">
        <div className="max-w-site mx-auto px-6 md:px-12 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <AnimateOnScroll animation="fade-right" duration={0.8}>
            <div>
              <span className="font-body text-13 text-lime uppercase tracking-wider block mb-2 font-medium">
                Start Alignment
              </span>
              <h2 className="font-display text-33 md:text-41 text-paper">
                Request a Roof Inspection
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
