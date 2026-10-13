import React from 'react';
import Image from 'next/image';
import MediaParallax from '@/components/motion/MediaParallax';
import AnimateOnScroll from '@/components/motion/AnimateOnScroll';

const REASONS = [
  {
    title: 'Workmanship with care',
    description: 'Customers highlight careful workmanship, pride in the finish and attention to detail.',
  },
  {
    title: 'Clear communication',
    description: 'Nicholas explains decisions, talks through choices and keeps customers updated from quote to completion.',
  },
  {
    title: 'Reliable and considerate',
    description: 'Reviews describe a punctual, organised team that is considerate of the home and leaves the site tidy.',
  },
  {
    title: 'Projects across the home',
    description: 'From kitchens and bathrooms to extensions, conversions and full refurbishments, we discuss the work as one coordinated project.',
  },
];

export default function HomeWhyUs() {
  return (
    <section className="relative z-20 w-full bg-paper py-16 md:py-24 lg:py-32 overflow-hidden border-t border-mist">
      <div className="max-w-site mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Columns 1–6: Left-Aligned Editorial Reasons List */}
          <div className="lg:col-span-6">
            <AnimateOnScroll animation="fade-right" duration={0.85}>
              <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
                Our Approach
              </span>
              <h2 className="font-display text-26 sm:text-33 md:text-41 text-forest-ink mb-8 md:mb-10 leading-tight">
                Why Choose A-Z Home Improvements
              </h2>

              <div className="divide-y divide-mist">
                {REASONS.map((reason, idx) => (
                  <AnimateOnScroll
                    key={reason.title}
                    animation="fade-up"
                    delay={idx * 0.1}
                    className="py-5 sm:py-6 first:pt-0 last:pb-0"
                  >
                    <h3 className="font-display text-17 sm:text-21 text-forest-ink mb-2">
                      {reason.title}
                    </h3>
                    <p className="font-body text-15 text-forest-ink/80 leading-relaxed">
                      {reason.description}
                    </p>
                  </AnimateOnScroll>
                ))}
              </div>
            </AnimateOnScroll>
          </div>

          {/* Residential property imagery */}
          <div className="lg:col-span-6">
            <AnimateOnScroll animation="fade-left" duration={0.85}>
              <div className="grid grid-cols-2 gap-3">
                {/* Main large image */}
                <div className="col-span-2 relative aspect-[16/10] bg-mist overflow-hidden border border-mist shadow-sm">
                  <MediaParallax speed={0.06} className="w-full h-full">
                    <Image
                    src="/images/jsroof-stock-02.jpg"
                    alt="Residential property"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </MediaParallax>
                  <div className="absolute bottom-3 left-3 bg-[#202A3C]/90 backdrop-blur-sm text-paper font-body text-12 px-3 py-1 font-medium">
                    Home improvements
                  </div>
                </div>
                {/* Additional residential imagery */}
                <div className="col-span-2 sm:col-span-1 relative aspect-square bg-mist overflow-hidden border border-mist shadow-sm">
                  <Image
                    src="/images/jsroof-stock-03.jpg"
                    alt="Brick residential home"
                    fill
                    sizes="(max-width: 640px) 100vw, 25vw"
                    className="object-cover"
                  />
                </div>
                {/* Residential property detail */}
                <div className="col-span-2 sm:col-span-1 relative aspect-square bg-[#F5F8F5] overflow-hidden border border-mist shadow-sm">
                  <Image
                    src="/images/jsroof-stock-04.jpg"
                    alt="Traditional pitched roof on a home"
                    fill
                    sizes="(max-width: 640px) 100vw, 25vw"
                    className="object-cover object-top"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-[#202A3C]/80 text-paper font-body text-12 px-3 py-2 text-center">
                    South Croydon homes
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
