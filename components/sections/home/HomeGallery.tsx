import React from 'react';
import Image from 'next/image';
import MediaParallax from '@/components/motion/MediaParallax';
import AnimateOnScroll from '@/components/motion/AnimateOnScroll';

const GALLERY_IMAGES = [
  { src: '/images/roof-saffron-walden-1024x768-1.jpg', alt: 'Slate roof installation in progress' },
  { src: '/images/roofb3-1.jpg', alt: 'Tiled roof and gutter on a brick home' },
  { src: '/images/Michael.jpg', alt: 'Roof structure and underlay during replacement' },
  { src: '/images/m9.jpg', alt: 'Roof underlay and battens during a roofing project' },
  { src: '/images/m8.jpg', alt: 'Roofline and fascia on a residential property' },
  { src: '/images/m7.jpg', alt: 'Roofing work in progress' },
  { src: '/images/m6.jpg', alt: 'Roof underlay and battens ready for tiles' },
  { src: '/images/m5.jpg', alt: 'Roof repair in progress' },
  { src: '/images/m4.jpg', alt: 'Roof edge and timber detail' },
  { src: '/images/m3.jpg', alt: 'Roof timber repair detail' },
  { src: '/images/m2.jpg', alt: 'Roof underlay and timber battens' },
  { src: '/images/IMG-20181001-WA0056.jpg', alt: 'Finished flat roof covering' },
  { src: '/images/IMG-20181001-WA0042.jpg', alt: 'Roof tiles and skylights' },
  { src: '/images/IMG-20181001-WA0032.jpg', alt: 'Terracotta tiled roof' },
  { src: '/images/IMG-20181001-WA0014.jpg', alt: 'New slate roof installation' },
  { src: '/images/caslast.jpg', alt: 'Flat roof with skylight details' },
  { src: '/images/cas4.jpg', alt: 'Completed terracotta tiled roof' },
];

export default function HomeGallery() {
  return (
    <section className="relative z-20 w-full bg-paper py-20 md:py-32 border-t border-mist overflow-hidden">
      <div className="max-w-site mx-auto px-6 md:px-12">
        <AnimateOnScroll animation="fade-up" duration={0.8} className="mb-16">
          <span className="font-body text-13 text-[#E51B2B] block mb-2 font-medium uppercase tracking-wider">
            CJ Roofing Services Ltd
          </span>
          <h2 className="font-display text-33 md:text-41 text-[#1C1A1B]">
            Recent Roofing Projects
          </h2>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch mb-6">
          {GALLERY_IMAGES.slice(0, 2).map((item, index) => (
            <AnimateOnScroll
              key={item.src}
              animation={index === 0 ? 'fade-right' : 'fade-down'}
              duration={0.85}
              className={`${index === 0 ? 'md:col-span-5' : 'md:col-span-7'} min-h-[300px] md:min-h-[420px] relative bg-[#F7F7F7] overflow-hidden border border-[#E2DFE0] shadow-sm`}
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
              className="aspect-[4/3] relative bg-[#F7F7F7] overflow-hidden border border-[#E2DFE0] shadow-sm"
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
