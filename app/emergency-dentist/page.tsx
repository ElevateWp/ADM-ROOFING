import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { CLINIC_INFO, EMERGENCY_CONDITIONS } from '@/lib/clinic-data';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import Button from '@/components/ui/Button';
import Accordion from '@/components/ui/Accordion';
import JsonLd from '@/components/ui/JsonLd';
import AnimateOnScroll from '@/components/motion/AnimateOnScroll';
import { createMetadata, generateFaqSchema } from '@/lib/seo';

export const metadata: Metadata = createMetadata({
  title: 'Emergency Roof Repairs',
  description:
    'For roof leaks or storm damage in Croydon, keep clear of unsafe areas and contact JS Roof Care Ltd on +44 7459 521011.',
  pathname: '/emergency-dentist/',
});

const EMERGENCY_FAQS = [
  {
    question: 'What should I do if my roof is leaking?',
    answer: 'Keep clear of unsafe areas and move belongings away from the water. Call our team on +44 7459 521011 to discuss an assessment.',
  },
  {
    question: 'Can you assess storm damage?',
    answer: 'Our team can assess visible roof damage, including loose tiles, leaks and damaged gutters, when the property can be accessed safely.',
  },
  {
    question: 'Can I climb onto the roof to check the damage?',
    answer: 'No. Do not climb onto a wet or damaged roof. Photograph visible damage from the ground only if it is safe to do so.',
  },
];

export default function EmergencyDentistPage() {
  return (
    <div className="flex flex-col w-full bg-paper">
      <JsonLd data={generateFaqSchema(EMERGENCY_FAQS)} />



      {/* SECTION 1: Emergency Roofing Introduction */}
      <section className="py-12 md:py-16 bg-paper border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <Breadcrumbs items={[{ name: 'Emergency Roof Repairs', path: '/emergency-dentist/' }]} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6 items-start">
            <div className="lg:col-span-8">
              <AnimateOnScroll animation="fade-right" duration={0.8}>
              <span className="font-body text-13 text-forest font-semibold block mb-2 uppercase tracking-wider">
                Emergency Roof Repairs
              </span>
              <h1 className="font-display text-33 sm:text-41 md:text-52 text-forest-ink leading-tight mb-4">
                Help for roof leaks and storm damage.
              </h1>
              <p className="font-body text-17 text-forest-ink/90 leading-relaxed mb-6 max-w-2xl">
                If your roof is leaking or damaged after a storm, keep clear of unsafe areas and call us to arrange an assessment.
              </p>

              {/* Direct Immediate Call Action */}
              <div className="flex flex-wrap items-center gap-4">
                <Button
                  href={`tel:${CLINIC_INFO.contact.emergencyPhone.replace(/[^0-9+]/g, '')}`}
                  variant="lime"
                  size="lg"
                  className="font-bold text-17"
                >
                  Call: {CLINIC_INFO.contact.emergencyPhone}
                </Button>
                <Button href="/book-appointment/" variant="ghost" size="lg">
                  Request an Assessment
                </Button>
              </div>
              </AnimateOnScroll>
            </div>

            <div className="lg:col-span-4 p-6 bg-forest text-paper">
              <AnimateOnScroll animation="fade-left" duration={0.8} delay={0.2}>
              <span className="font-body text-13 text-lime font-medium uppercase tracking-wider block mb-2">
                Croydon Service Area
              </span>
              <address className="not-italic font-body text-15 text-paper leading-relaxed mb-4">
                {CLINIC_INFO.name}
                <br />
                {CLINIC_INFO.primaryLocation.city}, {CLINIC_INFO.primaryLocation.country}
              </address>
              <div className="pt-3 border-t border-mist/20 text-13 text-paper/80 font-body">
                Serving Croydon and surrounding areas
              </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Roof Damage and Immediate Safety Steps */}
      <section className="py-16 md:py-24 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <AnimateOnScroll animation="fade-up" duration={0.8} className="mb-12">
            <span className="font-body text-13 text-forest-ink/60 block mb-2">
              Roof Damage and First Steps
            </span>
            <h2 className="font-display text-33 md:text-41 text-forest-ink">
              What to Do While You Wait for a Roof Assessment
            </h2>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {EMERGENCY_CONDITIONS.map((cond, idx) => (
              <AnimateOnScroll key={cond.id} animation="fade-up" delay={idx * 0.1}>
              <div
                className="p-8 border border-mist bg-paper flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <span className="font-display text-21 text-forest-ink">
                      {cond.title}
                    </span>
                    <span className="font-body text-13 text-forest font-semibold bg-mist/60 px-2.5 py-1">
                      {cond.urgency}
                    </span>
                  </div>

                  <div className="mb-4">
                    <span className="font-body text-13 text-forest-ink/60 uppercase tracking-wider block mb-1 font-medium">
                      Signs to Look For:
                    </span>
                    <ul className="space-y-1 font-body text-13 text-forest-ink/80">
                      {cond.symptoms.map((s, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-forest">•</span>
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 bg-mist/30 border-l-2 border-forest mb-4">
                    <span className="font-body text-13 text-forest font-semibold block mb-1">
                      Immediate Steps:
                    </span>
                    <ul className="space-y-1 font-body text-13 text-forest-ink/90">
                      {cond.immediateAction.map((act, i) => (
                        <li key={i}>• {act}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-mist text-13 font-body text-forest-ink/70">
                  <strong className="text-forest font-medium">Assessment:</strong> {cond.clinicTreatment}
                </div>
              </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: When to Seek Urgent Help */}
      <section className="py-16 md:py-24 border-b border-mist bg-paper">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <AnimateOnScroll animation="fade-up" duration={0.8} className="max-w-3xl mb-8">
            <span className="font-body text-13 text-forest-ink/60 block mb-2">
              Signs That Need Prompt Attention
            </span>
            <h2 className="font-display text-33 md:text-41 text-forest-ink mb-4">
              When Roof Damage Needs Prompt Attention
            </h2>
            <p className="font-body text-15 md:text-17 text-forest-ink/80 leading-relaxed">
              Active leaks, exposed roof areas or water near electrical fittings need care. Keep away from unsafe areas and arrange an assessment.
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <AnimateOnScroll animation="zoom-in" duration={0.8}><div className="p-6 bg-mist/30 border border-mist">
              <h3 className="font-display text-17 text-forest-ink mb-2">Sagging or Damaged Ceiling</h3>
              <p className="font-body text-13 text-forest-ink/70">
                A sagging ceiling may indicate water build-up or damage. Keep clear and do not push on the structure.
              </p>
            </div></AnimateOnScroll>
            <AnimateOnScroll animation="zoom-in" duration={0.8} delay={0.1}><div className="p-6 bg-mist/30 border border-mist">
              <h3 className="font-display text-17 text-forest-ink mb-2">Leak Near Electrical Fittings</h3>
              <p className="font-body text-13 text-forest-ink/70">
                Do not touch lights, sockets or wiring affected by water. Keep clear and contact a qualified professional.
              </p>
            </div></AnimateOnScroll>
            <AnimateOnScroll animation="zoom-in" duration={0.8} delay={0.2}><div className="p-6 bg-mist/30 border border-mist">
              <h3 className="font-display text-17 text-forest-ink mb-2">Tiles Displaced by Wind</h3>
              <p className="font-body text-13 text-forest-ink/70">
                Do not climb onto the roof to replace tiles. Photograph damage from the ground only if it is safe.
              </p>
            </div></AnimateOnScroll>
            <AnimateOnScroll animation="zoom-in" duration={0.8} delay={0.3}><div className="p-6 bg-mist/30 border border-mist">
              <h3 className="font-display text-17 text-forest-ink mb-2">Active Leak During Rain</h3>
              <p className="font-body text-13 text-forest-ink/70">
                Move belongings away and collect dripping water only if there is no electrical or structural risk.
              </p>
            </div></AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* SECTION 5: Emergency Repair Options */}
      <section className="py-16 md:py-24 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <AnimateOnScroll animation="fade-up" duration={0.8} className="mb-12">
            <span className="font-body text-13 text-forest-ink/60 block mb-2">
              Help After Roof Damage
            </span>
            <h2 className="font-display text-33 md:text-41 text-forest-ink">
              Issues We Can Assess
            </h2>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimateOnScroll animation="fade-up" duration={0.8}><div className="p-6 bg-paper border border-mist">
              <h3 className="font-display text-21 text-forest-ink mb-2">Roof Leak Repair</h3>
              <p className="font-body text-13 text-forest-ink/80 leading-relaxed mb-4">
                We assess visible water entry points and explain suitable repairs.
              </p>
              <Link href="/root-canal/" className="font-body text-13 text-forest underline">
                Learn About Leak Repairs →
              </Link>
            </div></AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" duration={0.8} delay={0.1}><div className="p-6 bg-paper border border-mist">
              <h3 className="font-display text-21 text-forest-ink mb-2">Roof Tile Replacement</h3>
              <p className="font-body text-13 text-forest-ink/80 leading-relaxed mb-4">
                We inspect displaced tiles and assess replacement options when roof access is safe.
              </p>
              <Link href="/dental-implants/" className="font-body text-13 text-forest underline">
                Learn About Roof Repairs →
              </Link>
            </div></AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" duration={0.8} delay={0.2}><div className="p-6 bg-paper border border-mist">
              <h3 className="font-display text-21 text-forest-ink mb-2">Roof Flashings and Sealing</h3>
              <p className="font-body text-13 text-forest-ink/80 leading-relaxed mb-4">
                We check roof joins and seals where water may be getting in.
              </p>
              <Link href="/contact/" className="font-body text-13 text-forest underline">
                Talk to Our Team →
              </Link>
            </div></AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* SECTION 6: Contact the Roofing Team */}
      <section className="py-16 md:py-24 border-b border-mist bg-forest text-paper">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8">
              <AnimateOnScroll animation="fade-right" duration={0.8}>
              <span className="font-body text-13 text-lime uppercase tracking-wider block mb-2 font-medium">
                Request an Assessment
              </span>
              <h2 className="font-display text-33 md:text-41 text-paper mb-4">
                Talk to Our Team About Roof Damage
              </h2>
              <p className="font-body text-17 text-paper/90 leading-relaxed mb-8 max-w-2xl">
                Call to request an assessment. Our team will confirm availability, access and the scope of work.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Button
                  href={`tel:${CLINIC_INFO.contact.emergencyPhone.replace(/[^0-9+]/g, '')}`}
                  variant="lime"
                  size="lg"
                  className="font-bold text-17"
                >
                  Call: {CLINIC_INFO.contact.emergencyPhone}
                </Button>
                <Button
                  href={`tel:${CLINIC_INFO.contact.phone.replace(/[^0-9+]/g, '')}`}
                  variant="ghost"
                  size="lg"
                  className="text-paper border-paper/30 hover:border-paper hover:bg-paper/10"
                >
                  Call Our Team
                </Button>
              </div>
              </AnimateOnScroll>
            </div>

            <div className="lg:col-span-4 p-6 bg-paper/10 border border-mist/20">
              <AnimateOnScroll animation="fade-left" duration={0.8} delay={0.2}>
              <span className="font-body text-13 text-lime block mb-2 font-medium">
                Service Area
              </span>
              <p className="font-body text-13 text-paper/80 leading-relaxed">
                We serve Croydon and surrounding areas. Call to check availability.
              </p>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: Service Area & Opening Hours */}
      <section className="py-16 md:py-24 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-6">
              <AnimateOnScroll animation="fade-right" duration={0.8}>
              <span className="font-body text-13 text-forest-ink/60 block mb-2">Service Area</span>
              <h2 className="font-display text-26 md:text-33 text-forest-ink mb-4">
                Service Area
              </h2>
              <address className="not-italic font-body text-15 text-forest-ink/80 leading-relaxed mb-4">
                {CLINIC_INFO.name}
                <br />
                {CLINIC_INFO.primaryLocation.city}, {CLINIC_INFO.primaryLocation.country}
              </address>
              <p className="font-body text-13 text-forest-ink/70">
                {CLINIC_INFO.primaryLocation.directions}
              </p>
              </AnimateOnScroll>
            </div>

            <div className="lg:col-span-6">
              <AnimateOnScroll animation="fade-left" duration={0.8} delay={0.2}>
              <span className="font-body text-13 text-forest-ink/60 block mb-2">Opening Hours</span>
              <div className="border border-mist divide-y divide-mist bg-paper font-body text-13">
                {CLINIC_INFO.schedule.length > 0 ? CLINIC_INFO.schedule.map((item) => (
                  <div key={item.day} className="p-3 flex justify-between">
                    <span>{item.day}</span>
                    <span className="tabular-nums">{item.hours}</span>
                  </div>
                )) : <p className="p-3">Please call to confirm current opening hours.</p>}
              </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: Frequently Asked Questions */}
      <section className="py-16 md:py-24 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <AnimateOnScroll animation="fade-right" duration={0.8}>
              <span className="font-body text-13 text-forest-ink/60 block mb-2">Frequently Asked Questions</span>
              <h2 className="font-display text-33 md:text-41 text-forest-ink mb-4">
                Emergency Roofing FAQs
              </h2>
              </AnimateOnScroll>
            </div>
            <div className="lg:col-span-7">
              <AnimateOnScroll animation="fade-left" duration={0.8} delay={0.2}>
              <Accordion items={EMERGENCY_FAQS} />
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10: Final Emergency Roofing CTA */}
      <section className="py-16 md:py-24 bg-forest text-paper">
        <div className="max-w-site mx-auto px-6 md:px-12 text-center flex flex-col items-center">
          <AnimateOnScroll animation="fade-up" duration={0.8} className="flex flex-col items-center">
          <h2 className="font-display text-33 md:text-41 text-paper mb-4">
            Never climb onto an unsafe roof.
          </h2>
          <p className="font-body text-15 md:text-17 text-paper/80 mb-8 max-w-xl">
            Our team can assess visible damage and explain the repair options for your roof.
          </p>
          <Button
            href={`tel:${CLINIC_INFO.contact.emergencyPhone.replace(/[^0-9+]/g, '')}`}
            variant="lime"
            size="lg"
            className="font-bold text-17"
          >
            Call: {CLINIC_INFO.contact.emergencyPhone}
          </Button>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
}
