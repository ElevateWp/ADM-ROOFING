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
    'Read customer feedback about home extensions, conversions, bathrooms and renovation work by A-Z Home Improvements in South Croydon.',
  pathname: '/testimonials/',
});

const TESTIMONIALS = [
  {
    name: 'Jean McFarlane',
    quote: 'Nicholas renovated my house 12 years ago, and based on that experience I had no hesitation hiring him again for my bathroom renovation.',
  },
  {
    name: 'Joseph Wilde',
    quote: 'Nicholas was brilliantly communicative and proud of his work. He was honest in his appraisals, explained his decisions and kept me updated.',
  },
  {
    name: 'Michele Marrafino',
    quote: 'We had a garage converted into living space, a shower and utility room, as well as a new upstairs bathroom. Nic was exceptional.',
  },
  {
    name: 'Jane Gunyon',
    quote: 'I had a full bathroom refit by Nicholas and his team. They were reliable and trustworthy, and we are very pleased with the completed work.',
  },
  {
    name: 'Marianna Ritchie',
    quote: 'Couldn’t be happier. Beautiful work. Lovely people. Thank you.',
  },
  {
    name: 'Junesse Dizon',
    quote: 'Excellent experience from the initial quote to project completion. The team was punctual, well-organised, communicated clearly, and kept the site clean.',
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
                Customer feedback
              </span>
              <WordRevealH1 text="What our customers say." />
              <p className="mt-6 max-w-2xl font-body text-17 leading-relaxed text-forest-ink/90 md:text-21">
                A selection of feedback shared by customers of A-Z Home Improvements.
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
            <div className="border-l-2 border-greenAccent pl-4">
              <span className="block font-body text-13 font-medium uppercase tracking-wider text-forest-light">A-Z Home Improvements</span>
              <span className="mt-1 block font-body text-12 text-forest-light">South Croydon · Established 2002</span>
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
              A-Z Home Improvements · South Croydon
            </span>
            <h2 className="font-display text-26 md:text-33">Planning a home improvement project?</h2>
          </div>
          <Link
            href="/book-appointment/"
            className="inline-flex min-h-12 items-center justify-center border border-paper bg-paper px-6 font-body text-15 font-semibold text-forest transition-colors hover:bg-[#E5ECFF]"
          >
            Request a quote
          </Link>
        </div>
      </section>
    </div>
  );
}
