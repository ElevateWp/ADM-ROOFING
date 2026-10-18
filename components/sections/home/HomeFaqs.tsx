import React from 'react';
import Accordion, { AccordionItem } from '@/components/ui/Accordion';
import JsonLd from '@/components/ui/JsonLd';
import { generateFaqSchema } from '@/lib/seo';
import AnimateOnScroll from '@/components/motion/AnimateOnScroll';
import { CLINIC_INFO } from '@/lib/clinic-data';

const HOME_FAQS: AccordionItem[] = [
  {
    question: 'What roofing services do you provide?',
    answer: 'Roof installation, repairs, replacement, restoration, inspections, guttering, shed work and custom roofing projects.',
    relatedLink: { href: '/services/', label: 'Explore our services →' },
  },
  {
    question: 'Do you cover my area?',
    answer: 'DJ Maintenance & Construction is based in Mount Gambier, South Australia. Contact the team to discuss your property.',
    relatedLink: { href: '/contact/', label: 'Contact our team →' },
  },
  {
    question: 'Can you help with guttering and sheds?',
    answer: 'Yes. The service range includes gutter installation and maintenance, shed installation, and shed repair and restoration.',
    relatedLink: { href: '/gutter-installation-maintenance/', label: 'Explore guttering →' },
  },
  {
    question: 'How do I request a quote?',
    answer: `Call us on ${CLINIC_INFO.contact.phone} or send a message through our quote request form.`,
    relatedLink: { href: '/request-a-quote/', label: 'Request a quote →' },
  },
  {
    question: 'Where is DJ Maintenance & Construction based?',
    answer: CLINIC_INFO.primaryLocation.directions,
    relatedLink: { href: '/contact/', label: 'Check our service area →' },
  },
];

export default function HomeFaqs() {
  return (
    <section className="relative z-20 w-full bg-paper py-20 md:py-32 border-t border-mist overflow-hidden">
      <JsonLd data={generateFaqSchema(HOME_FAQS)} />
      <div className="max-w-site mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <AnimateOnScroll animation="fade-right" duration={0.85} className="lg:col-span-5">
            <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
              Frequently Asked Questions
            </span>
            <h2 className="font-display text-33 md:text-41 text-forest-ink mb-6">
              Questions about your roofing project
            </h2>
            <p className="font-body text-15 md:text-17 text-forest-ink/80 leading-relaxed mb-6">
                Clear answers about roof work, quotes and our Mount Gambier location.
            </p>
            <div className="p-6 bg-mist/40 border border-mist">
              <span className="font-body text-13 text-forest font-medium block mb-1">
                Have another question?
              </span>
              <p className="font-body text-13 text-forest-ink/70 mb-3">
                Call or message our team and we will be happy to help.
              </p>
              <a
                href="tel:+61448752232"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-13 text-forest font-medium underline underline-offset-4"
              >
                Call our team
              </a>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-left" duration={0.85} className="lg:col-span-7">
            <Accordion items={HOME_FAQS} />
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
