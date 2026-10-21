import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import TextureBackground from '@/components/layout/TextureBackground';
import AnimateOnScroll from '@/components/motion/AnimateOnScroll';
import WordRevealH1 from '@/components/motion/WordRevealH1';
import { createMetadata } from '@/lib/seo';

export const metadata: Metadata = createMetadata({
  title: 'Plumbing Services',
  description: 'Explore plumbing services from G Sullivan Plumbing Pty Ltd. Call 0422 475 273 to discuss your needs.',
  pathname: '/testimonials/',
});

const SERVICES = [
  { name: 'General Plumbing', detail: 'Discuss planned plumbing work or an issue that needs attention.' },
  { name: 'Plumbing Repairs', detail: 'Explain what is happening and ask about the repair work your property may need.' },
  { name: 'Hot Water & Drains', detail: 'Ask about hot water system plumbing or a blocked drain.' },
];

export default function TestimonialsPage() {
  return (
    <div className="flex w-full flex-col bg-paper">
      <section className="relative overflow-hidden border-b border-mist py-16 md:py-24">
        <TextureBackground variant="blog" className="opacity-20" />
        <div className="relative z-10 mx-auto max-w-site px-6 md:px-12">
          <Breadcrumbs items={[{ name: 'Services', path: '/testimonials/' }]} />
          <div className="mt-8 max-w-3xl">
            <AnimateOnScroll animation="fade-right" duration={0.8}>
              <span className="mb-3 block font-body text-13 font-medium uppercase tracking-wider text-forest-ink/60">G Sullivan Plumbing Pty Ltd</span>
              <WordRevealH1 text="Plumbing work for your property." />
              <p className="mt-6 max-w-2xl font-body text-17 leading-relaxed text-forest-ink/90 md:text-21">Call 0422 475 273 to discuss your plumbing needs and ask about availability.</p>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
      <section className="border-b border-mist bg-paper-secondary py-16 md:py-24">
        <div className="mx-auto max-w-site px-6 md:px-12">
          <div className="mb-10 flex flex-col gap-4 border-b border-mist pb-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="mb-2 block font-body text-13 font-medium uppercase tracking-wider text-forest-light">Plumbing services</span>
              <h2 className="font-display text-26 text-forest-ink md:text-33">Services you can ask about</h2>
            </div>
            <div className="border-l-2 border-greenAccent pl-4">
              <span className="block font-body text-13 font-medium uppercase tracking-wider text-forest-light">G Sullivan Plumbing Pty Ltd</span>
              <span className="mt-1 block font-body text-12 text-forest-light">0422 475 273</span>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service, index) => (
              <AnimateOnScroll key={service.name} animation="fade-up" delay={index * 0.08} duration={0.8}>
                <article className="h-full border border-mist bg-paper p-6 shadow-sm md:p-7">
                  <span className="mb-4 block font-body text-13 font-medium uppercase tracking-wider text-forest-light">G Sullivan Plumbing</span>
                  <h3 className="font-display text-21 text-forest-ink">{service.name}</h3>
                  <p className="mb-6 mt-4 font-body text-15 leading-relaxed text-forest-ink/85">{service.detail}</p>
                  <div className="border-t border-mist pt-4"><Link className="font-body text-13 font-semibold text-forest hover:underline" href="/services/">Explore services →</Link></div>
                </article>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-forest py-14 text-paper md:py-20">
        <div className="mx-auto flex max-w-site flex-col items-start justify-between gap-6 px-6 md:flex-row md:items-center md:px-12">
          <div><span className="mb-2 block font-body text-13 font-semibold uppercase tracking-wider text-paper/65">G Sullivan Plumbing Pty Ltd</span><h2 className="font-display text-26 md:text-33">Need plumbing work?</h2></div>
          <Link href="/request-a-quote/" className="inline-flex min-h-12 items-center justify-center border border-paper bg-paper px-6 font-body text-15 font-semibold text-forest transition-colors hover:bg-[#DDF5D8]">Discuss your project</Link>
        </div>
      </section>
    </div>
  );
}
