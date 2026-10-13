import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Star } from 'lucide-react';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import TextureBackground from '@/components/layout/TextureBackground';
import AnimateOnScroll from '@/components/motion/AnimateOnScroll';
import WordRevealH1 from '@/components/motion/WordRevealH1';
import { createMetadata } from '@/lib/seo';

export const metadata: Metadata = createMetadata({
  title: 'Customer Testimonials',
  description:
    'Read customer feedback about roof repairs, inspections and workmanship from JS Roof Care Ltd in Croydon.',
  pathname: '/testimonials/',
});

const TESTIMONIALS = [
  {
    name: 'Fiona Stoker',
    quote:
      'Excellent service! Having been let down by other companies I contacted JS Roof Care who responded within the hour.',
  },
  {
    name: 'Luke Griffith',
    quote:
      'They diagnosed the issue quickly, explained the fix clearly, and got the job done for a very fair price.',
  },
  {
    name: 'Google reviewer',
    quote: 'JS Roof Care Ltd provided top-quality workmanship and great customer service.',
  },
  {
    name: 'Google reviewer',
    quote: 'I would highly recommend them to anyone looking for roofing work, big or small.',
  },
  {
    name: 'Google reviewer',
    quote: 'The finished roof looks fantastic and the price was very competitive.',
  },
];

function ReviewStars() {
  return (
    <div className="flex gap-1 text-brand" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }, (_, index) => (
        <Star key={index} size={16} fill="currentColor" strokeWidth={1.5} />
      ))}
    </div>
  );
}

export default function TestimonialsPage() {
  return (
    <div className="flex w-full flex-col bg-paper">
      <section className="relative overflow-hidden border-b border-mist py-16 md:py-24">
        <TextureBackground variant="blog" className="opacity-20" />
        <div className="relative z-10 mx-auto max-w-site px-6 md:px-12">
          <Breadcrumbs items={[{ name: 'Testimonials', path: '/testimonials/' }]} />
          <div className="mt-8 max-w-3xl">
            <AnimateOnScroll animation="fade-right" duration={0.8}>
              <span className="mb-3 block font-body text-13 font-medium uppercase tracking-wider text-forest-ink/60">
                Google Reviews · 4.9 out of 5 · 62 reviews
              </span>
              <WordRevealH1 text="What our customers say." />
              <p className="mt-6 max-w-2xl font-body text-17 leading-relaxed text-forest-ink/90 md:text-21">
                A selection of feedback shared by customers of JS Roof Care Ltd.
              </p>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      <section className="border-b border-mist bg-paper-secondary py-16 md:py-24">
        <div className="mx-auto max-w-site px-6 md:px-12">
          <div className="mb-10 flex flex-col gap-4 border-b border-mist pb-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="mb-2 block font-body text-13 font-medium uppercase tracking-wider text-forest-light">
                Customer feedback
              </span>
              <h2 className="font-display text-26 text-forest-ink md:text-33">Reviews from our customers</h2>
            </div>
            <div className="flex items-center gap-3" aria-label="Rated 4.9 out of 5 based on 62 reviews">
              <span className="font-display text-33 text-forest-ink">4.9</span>
              <div>
                <ReviewStars />
                <span className="mt-1 block font-body text-12 text-forest-light">62 Google reviews</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.map((review, index) => (
              <AnimateOnScroll key={`${review.name}-${index}`} animation="fade-up" delay={index * 0.08} duration={0.8}>
                <article className="h-full border border-mist bg-paper p-6 shadow-sm md:p-7">
                  <ReviewStars />
                  <blockquote className="mb-6 mt-4 font-body text-15 leading-relaxed text-forest-ink/85">
                    “{review.quote}”
                  </blockquote>
                  <div className="flex items-center justify-between gap-3 border-t border-mist pt-4">
                    <span className="font-body text-13 font-semibold text-forest-ink">{review.name}</span>
                    <span className="font-body text-12 text-forest-light">Google review</span>
                  </div>
                </article>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-forest py-14 text-paper md:py-20">
        <div className="mx-auto flex max-w-site flex-col items-start justify-between gap-6 px-6 md:flex-row md:items-center md:px-12">
          <div>
            <span className="mb-2 block font-body text-13 font-semibold uppercase tracking-wider text-paper/65">
              JS Roof Care Ltd · Croydon
            </span>
            <h2 className="font-display text-26 md:text-33">Need help with your roof?</h2>
          </div>
          <Link
            href="/book-appointment/"
            className="inline-flex min-h-12 items-center justify-center border border-paper bg-paper px-6 font-body text-15 font-semibold text-forest transition-colors hover:bg-[#E5ECF2]"
          >
            Request a quote
          </Link>
        </div>
      </section>
    </div>
  );
}
