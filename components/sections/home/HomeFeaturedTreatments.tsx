import React from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import AnimateOnScroll from '@/components/motion/AnimateOnScroll';

export default function HomeFeaturedTreatments() {
  return (
    <section className="relative z-20 w-full bg-paper py-20 md:py-32 border-t border-mist overflow-hidden">
      <div className="max-w-site mx-auto px-6 md:px-12">
        <AnimateOnScroll animation="fade-up" duration={0.8} className="mb-16">
          <span className="font-body text-13 text-[#202A3C] block mb-2 font-medium uppercase tracking-wider">
            Extensions, Conversions and Refurbishments
          </span>
          <h2 className="font-display text-33 md:text-41 text-[#202A3C]">
            Home projects shaped around you
          </h2>
        </AnimateOnScroll>

        <div className="flex flex-col space-y-24">
          {/* Featured work: residential improvements */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <AnimateOnScroll animation="fade-right" duration={0.9} className="lg:col-span-6 order-2 lg:order-1">
              <span className="font-body text-13 text-[#202A3C] uppercase tracking-wider block mb-2 font-medium">
                Extensions and additions
              </span>
              <h3 className="font-display text-26 md:text-33 text-[#202A3C] mb-4">
                Make room for the way you live
              </h3>
              <p className="font-body text-15 md:text-17 text-[#202A3C]/80 leading-relaxed mb-6">
                We discuss the way you want the space to work, explain the project scope and plan the details with you.
              </p>
              <div className="p-4 bg-[#F5F8F5] border-l-4 border-[#202A3C] mb-6 rounded-sm">
                <span className="font-body text-13 text-[#202A3C]/80">
                <strong className="text-[#202A3C] font-semibold">Our approach:</strong> We discuss your plans and agree the work with you before starting.
                </span>
              </div>
              <Button href="/dental-implants/" variant="ghost" size="md">
                Explore Extensions
              </Button>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-left" duration={0.9} className="lg:col-span-6 order-1 lg:order-2">
              <div className="relative aspect-[4/3] bg-mist overflow-hidden border border-mist shadow-sm">
                <Image
                  src="/images/jsroof-stock-06.jpg"
                  alt="Home improvement reference image"
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
                  src="/images/jsroof-stock-07.jpg"
                  alt="Residential home reference image"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-left" duration={0.9} className="lg:col-span-6">
              <span className="font-body text-13 text-[#202A3C] uppercase tracking-wider block mb-2 font-medium">
                Kitchens and bathrooms
              </span>
              <h3 className="font-display text-26 md:text-33 text-[#202A3C] mb-4">
                Refresh the rooms you use every day
              </h3>
              <p className="font-body text-15 md:text-17 text-[#202A3C]/80 leading-relaxed mb-6">
                From a kitchen redevelopment to a complete bathroom refit, we plan the details and finishing with you.
              </p>
              <div className="p-4 bg-[#F5F8F5] border-l-4 border-[#202A3C] mb-6 rounded-sm">
                <span className="font-body text-13 text-[#202A3C]/80">
                  <strong className="text-[#202A3C] font-semibold">A clear plan:</strong> Agree the scope, materials and timing before work begins.
                </span>
              </div>
              <Button href="/teeth-whitening/" variant="ghost" size="md">
                Explore Kitchens and Bathrooms
              </Button>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
