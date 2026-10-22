import React from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import AnimateOnScroll from '@/components/motion/AnimateOnScroll';

export default function HomeFeaturedTreatments() {
  return (
    <section className="relative z-20 w-full bg-paper py-20 md:py-32 border-t border-mist overflow-hidden">
      <div className="max-w-site mx-auto px-6 md:px-12">
        <AnimateOnScroll animation="fade-up" duration={0.8} className="mb-16">
          <span className="font-body text-13 text-[#29212A] block mb-2 font-medium uppercase tracking-wider">Plumbing Services</span>
          <h2 className="font-display text-33 md:text-41 text-[#29212A]">Support for everyday plumbing needs</h2>
        </AnimateOnScroll>
        <div className="flex flex-col space-y-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <AnimateOnScroll animation="fade-right" duration={0.9} className="lg:col-span-6 order-2 lg:order-1">
              <span className="font-body text-13 text-[#29212A] uppercase tracking-wider block mb-2 font-medium">Plumbing repair</span>
              <h3 className="font-display text-26 md:text-33 text-[#29212A] mb-4">Discuss a plumbing issue</h3>
              <p className="font-body text-15 md:text-17 text-[#29212A]/80 leading-relaxed mb-6">Tell ADM Plumbing Services what is happening and ask about the repair work your property may need.</p>
              <div className="p-4 bg-[#FFF4F6] border-l-4 border-[#F0144A] mb-6 rounded-sm"><span className="font-body text-13 text-[#29212A]/80"><strong className="text-[#29212A] font-semibold">Before work begins:</strong> Discuss the scope, price and timing with the team.</span></div>
              <Button href="/plumbing-repairs/" variant="ghost" size="md">Explore plumbing repairs</Button>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-left" duration={0.9} className="lg:col-span-6 order-1 lg:order-2">
              <div className="relative aspect-[4/3] bg-mist overflow-hidden border border-mist shadow-sm"><Image src="/images/plumbing-repair.jpg" alt="Plumbing repair work" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover object-top" /></div>
            </AnimateOnScroll>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <AnimateOnScroll animation="fade-right" duration={0.9} className="lg:col-span-6"><div className="relative aspect-[4/3] bg-mist overflow-hidden border border-mist shadow-sm"><Image src="/images/plumbing-pipes.jpg" alt="Plumbing pipes" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" /></div></AnimateOnScroll>
            <AnimateOnScroll animation="fade-left" duration={0.9} className="lg:col-span-6">
              <span className="font-body text-13 text-[#29212A] uppercase tracking-wider block mb-2 font-medium">Hot water pipe repair</span>
              <h3 className="font-display text-26 md:text-33 text-[#29212A] mb-4">Hot water pipe repair options for your property</h3>
              <p className="font-body text-15 md:text-17 text-[#29212A]/80 leading-relaxed mb-6">Discuss a new hot water pipe, repair or maintenance and the materials that suit your building.</p>
              <div className="p-4 bg-[#FFF4F6] border-l-4 border-[#F0144A] mb-6 rounded-sm"><span className="font-body text-13 text-[#29212A]/80"><strong className="text-[#29212A] font-semibold">Discuss your needs:</strong> The team can talk through the work and next steps.</span></div>
              <Button href="/hot-water-pipe-repair/" variant="ghost" size="md">Explore hot water pipe</Button>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
