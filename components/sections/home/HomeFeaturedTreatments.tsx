import React from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import AnimateOnScroll from '@/components/motion/AnimateOnScroll';

export default function HomeFeaturedTreatments() {
  return (
    <section className="relative z-20 w-full bg-paper py-20 md:py-32 border-t border-mist overflow-hidden">
      <div className="max-w-site mx-auto px-6 md:px-12">
        <AnimateOnScroll animation="fade-up" duration={0.8} className="mb-16">
          <span className="font-body text-13 text-[#20232A] block mb-2 font-medium uppercase tracking-wider">Roof Repairs & Chimney Repairs</span>
          <h2 className="font-display text-33 md:text-41 text-[#20232A]">Careful work on your roof and chimney</h2>
        </AnimateOnScroll>
        <div className="flex flex-col space-y-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <AnimateOnScroll animation="fade-right" duration={0.9} className="lg:col-span-6 order-2 lg:order-1">
              <span className="font-body text-13 text-[#20232A] uppercase tracking-wider block mb-2 font-medium">Roof repairs</span>
              <h3 className="font-display text-26 md:text-33 text-[#20232A] mb-4">Address leaks and roof damage</h3>
              <p className="font-body text-15 md:text-17 text-[#20232A]/80 leading-relaxed mb-6">From storm damage to everyday wear, Pete and the team explain repairs needed and share photos of the work completed.</p>
              <div className="p-4 bg-[#F4F6FC] border-l-4 border-[#20232A] mb-6 rounded-sm"><span className="font-body text-13 text-[#20232A]/80"><strong className="text-[#20232A] font-semibold">Discuss your project:</strong> The work, materials and timing are agreed with you before starting.</span></div>
              <Button href="/roof-repairs/" variant="ghost" size="md">Explore Roof Repairs</Button>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-left" duration={0.9} className="lg:col-span-6 order-1 lg:order-2">
              <div className="relative aspect-[4/3] bg-mist overflow-hidden border border-mist shadow-sm"><Image src="/images/jsroof-stock-06.jpg" alt="Illustrative roof repair" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover object-top" /></div>
            </AnimateOnScroll>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <AnimateOnScroll animation="fade-right" duration={0.9} className="lg:col-span-6"><div className="relative aspect-[4/3] bg-mist overflow-hidden border border-mist shadow-sm"><Image src="/images/jsroof-stock-07.jpg" alt="Illustrative residential roofing" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" /></div></AnimateOnScroll>
            <AnimateOnScroll animation="fade-left" duration={0.9} className="lg:col-span-6">
              <span className="font-body text-13 text-[#20232A] uppercase tracking-wider block mb-2 font-medium">Chimney repairs</span>
              <h3 className="font-display text-26 md:text-33 text-[#20232A] mb-4">Careful chimney repair work</h3>
              <p className="font-body text-15 md:text-17 text-[#20232A]/80 leading-relaxed mb-6">Customers praise the attentive care and quality of work on extensive chimney repairs.</p>
              <div className="p-4 bg-[#F4F6FC] border-l-4 border-[#20232A] mb-6 rounded-sm"><span className="font-body text-13 text-[#20232A]/80"><strong className="text-[#20232A] font-semibold">Customer feedback:</strong> Professional service and quality workmanship.</span></div>
              <Button href="/roofing-work/" variant="ghost" size="md">Explore Roofing Work</Button>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
