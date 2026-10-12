import React from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import AnimateOnScroll from '@/components/motion/AnimateOnScroll';

export default function HomeFeaturedTreatments() {
  return (
    <section className="relative z-20 w-full bg-paper py-20 md:py-32 border-t border-mist overflow-hidden">
      <div className="max-w-site mx-auto px-6 md:px-12">
        <AnimateOnScroll animation="fade-up" duration={0.8} className="mb-16">
          <span className="font-body text-13 text-[#1C1A1B] block mb-2 font-medium uppercase tracking-wider">
            Roof Replacement and Maintenance
          </span>
          <h2 className="font-display text-33 md:text-41 text-[#1C1A1B]">
            Roofing Services for Every Home
          </h2>
        </AnimateOnScroll>

        <div className="flex flex-col space-y-24">
          {/* Featured project 1: roof repair */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <AnimateOnScroll animation="fade-right" duration={0.9} className="lg:col-span-6 order-2 lg:order-1">
              <span className="font-body text-13 text-[#1C1A1B] uppercase tracking-wider block mb-2 font-medium">
                Roof Repairs and Leak Detection
              </span>
              <h3 className="font-display text-26 md:text-33 text-[#1C1A1B] mb-4">
                Find and Repair Roof Leaks
              </h3>
              <p className="font-body text-15 md:text-17 text-[#1C1A1B]/80 leading-relaxed mb-6">
                After inspecting the roof, our team explains the recommended repairs and estimated timing.
              </p>
              <div className="p-4 bg-[#F7F7F7] border-l-4 border-[#1C1A1B] mb-6 rounded-sm">
                <span className="font-body text-13 text-[#1C1A1B]/80">
                  <strong className="text-[#1C1A1B] font-semibold">Our approach:</strong> We agree the repair scope with you before starting work.
                </span>
              </div>
              <Button href="/dental-implants/" variant="ghost" size="md">
                Explore Roof Repairs
              </Button>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-left" duration={0.9} className="lg:col-span-6 order-1 lg:order-2">
              <div className="relative aspect-[4/3] bg-mist overflow-hidden border border-mist shadow-sm">
                <Image
                  src="/images/roof-saffron-walden-1024x768-1.jpg"
                  alt="Slate roof installation in progress"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-top"
                />
              </div>
            </AnimateOnScroll>
          </div>

          {/* Featured project 2: preventive maintenance */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <AnimateOnScroll animation="fade-right" duration={0.9} className="lg:col-span-6">
              <div className="relative aspect-[4/3] bg-mist overflow-hidden border border-mist shadow-sm">
                <Image
                  src="/images/m6.jpg"
                  alt="Roof underlay and battens ready for tiles"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-left" duration={0.9} className="lg:col-span-6">
              <span className="font-body text-13 text-[#1C1A1B] uppercase tracking-wider block mb-2 font-medium">
                Roof Inspections and Maintenance
              </span>
              <h3 className="font-display text-26 md:text-33 text-[#1C1A1B] mb-4">
                Find Wear Before It Becomes a Bigger Problem
              </h3>
              <p className="font-body text-15 md:text-17 text-[#1C1A1B]/80 leading-relaxed mb-6">
                An inspection can identify visible wear and leaks and help plan the next maintenance steps.
              </p>
              <div className="p-4 bg-[#F7F7F7] border-l-4 border-[#1C1A1B] mb-6 rounded-sm">
                <span className="font-body text-13 text-[#1C1A1B]/80">
                  <strong className="text-[#1C1A1B] font-semibold">A clear plan:</strong> Know which parts of the roof need attention.
                </span>
              </div>
              <Button href="/braces/" variant="ghost" size="md">
                Explore Roof Inspections
              </Button>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
