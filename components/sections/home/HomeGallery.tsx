import React from 'react';
import Image from 'next/image';
import MediaParallax from '@/components/motion/MediaParallax';
import AnimateOnScroll from '@/components/motion/AnimateOnScroll';

const GALLERY_IMAGES = [
  { src: '/images/jsroof-stock-01.jpg', alt: 'Roofers installing tiles on a residential roof' },
  { src: '/images/jsroof-stock-02.jpg', alt: 'A row of homes with pitched shingle roofs' },
  { src: '/images/jsroof-stock-03.jpg', alt: 'Traditional stone homes with slate roofs' },
  { src: '/images/jsroof-stock-04.jpg', alt: 'Stone cottage with a slate roof and chimney' },
  { src: '/images/jsroof-stock-05.jpg', alt: 'Slate roof and chimney on a UK stone building' },
  { src: '/images/jsroof-stock-06.jpg', alt: 'A contractor repairing a tiled roof' },
  { src: '/images/jsroof-stock-07.jpg', alt: 'Country cottage with a pitched roof' },
  { src: '/images/jsroof-stock-08.jpg', alt: 'Stone house and pitched roof in a garden setting' },
  { src: '/images/jsroof-stock-09.jpg', alt: 'Brick cottage with a tiled roof and dormers' },
  { src: '/images/jsroof-stock-10.jpg', alt: 'Cottage roof with twin chimneys' },
  { src: '/images/jsroof-stock-11.jpg', alt: 'Traditional brick cottage roofline' },
  { src: '/images/jsroof-stock-12.jpg', alt: 'White cottage with a moss-covered tiled roof' },
  { src: '/images/jsroof-stock-13.jpg', alt: 'Terraced homes with brick chimneys and tiled roofs' },
  { src: '/images/jsroof-stock-14.jpg', alt: 'Snow-covered roofs on a residential street' },
  { src: '/images/jsroof-stock-15.jpg', alt: 'Terracotta rooftops across a European town' },
  { src: '/images/jsroof-stock-16.jpg', alt: 'A cluster of white homes with red roofs' },
  { src: '/images/jsroof-stock-17.jpg', alt: 'Weathered rooftops across a hillside neighbourhood' },
];

export default function HomeGallery() {
  return (
    <section className="relative z-20 w-full bg-paper py-20 md:py-32 border-t border-mist overflow-hidden">
      <div className="max-w-site mx-auto px-6 md:px-12">
        <AnimateOnScroll animation="fade-up" duration={0.8} className="mb-16">
          <span className="font-body text-13 text-[#1D344A] block mb-2 font-medium uppercase tracking-wider">
            JS Roof Care Ltd
          </span>
          <h2 className="font-display text-33 md:text-41 text-[#1C2D3D]">
            Roofing Gallery
          </h2>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch mb-6">
          {GALLERY_IMAGES.slice(0, 2).map((item, index) => (
            <AnimateOnScroll
              key={item.src}
              animation={index === 0 ? 'fade-right' : 'fade-down'}
              duration={0.85}
              className={`${index === 0 ? 'md:col-span-5' : 'md:col-span-7'} min-h-[300px] md:min-h-[420px] relative bg-[#F7F7F3] overflow-hidden border border-[#DCE2E7] shadow-sm`}
            >
              <MediaParallax speed={index === 0 ? 0.06 : 0.08} className="w-full h-full">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </MediaParallax>
            </AnimateOnScroll>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {GALLERY_IMAGES.slice(2).map((item, index) => (
            <AnimateOnScroll
              key={item.src}
              animation="zoom-in"
              duration={0.8}
              delay={(index % 3) * 0.1}
              className="aspect-[4/3] relative bg-[#F7F7F3] overflow-hidden border border-[#DCE2E7] shadow-sm"
            >
              <MediaParallax speed={0.05 + (index % 3) * 0.01} className="w-full h-full">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </MediaParallax>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
