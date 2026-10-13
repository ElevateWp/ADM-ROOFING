import React from 'react';
import Image from 'next/image';
import MediaParallax from '@/components/motion/MediaParallax';
import AnimateOnScroll from '@/components/motion/AnimateOnScroll';

const GALLERY_IMAGES = [
  { src: '/images/home-gallery/project-01.jpg', alt: 'Completed bathroom with a bath and glass shower enclosure' },
  { src: '/images/home-gallery/project-02.jpg', alt: 'Natural timber interior door with white trim' },
  { src: '/images/home-gallery/project-03.jpg', alt: 'Bathroom with walk-in shower, bath and heated towel rail' },
  { src: '/images/home-gallery/project-04.jpg', alt: 'Fitted kitchen with a central island and integrated appliances' },
  { src: '/images/home-gallery/project-05.jpg', alt: 'Downstairs cloakroom with a toilet and basin' },
  { src: '/images/home-gallery/project-06.jpg', alt: 'Bathroom bath beneath a window with grey stone-effect tiles' },
  { src: '/images/home-gallery/project-07.jpg', alt: 'A-Z Home Improvements work van' },
  { src: '/images/home-gallery/project-08.jpg', alt: 'Contemporary bathroom with fitted vanity and heated towel rail' },
  { src: '/images/home-gallery/project-09.jpg', alt: 'Bathroom with a bath, toilet and radiator' },
  { src: '/images/home-gallery/project-10.jpg', alt: 'Brick rear extension with glazed patio doors' },
  { src: '/images/home-gallery/project-11.jpg', alt: 'Brick side passage and timber garden gate' },
  { src: '/images/home-gallery/project-12.jpg', alt: 'Modern fitted grey kitchen with integrated appliances' },
  { src: '/images/home-gallery/project-13.jpg', alt: 'Hallway with skylight leading to a downstairs cloakroom' },
  { src: '/images/home-gallery/project-14.jpg', alt: 'House entrance and patio doors illuminated at night' },
];

export default function HomeGallery() {
  return (
    <section className="relative z-20 w-full bg-paper py-20 md:py-32 border-t border-mist overflow-hidden">
      <div className="max-w-site mx-auto px-6 md:px-12">
        <AnimateOnScroll animation="fade-up" duration={0.8} className="mb-16">
          <span className="font-body text-13 text-[#1749C9] block mb-2 font-medium uppercase tracking-wider">
            A-Z Home Improvements
          </span>
          <h2 className="font-display text-33 md:text-41 text-[#202A3C]">
            Home Improvement Inspiration
          </h2>
          <p className="mt-3 max-w-2xl font-body text-15 leading-relaxed text-forest-light">A selection of our home improvement projects. Contact us to discuss your own project.</p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch mb-6">
          {GALLERY_IMAGES.slice(0, 2).map((item, index) => (
            <AnimateOnScroll
              key={item.src}
              animation={index === 0 ? 'fade-right' : 'fade-down'}
              duration={0.85}
              className={`${index === 0 ? 'md:col-span-5' : 'md:col-span-7'} min-h-[300px] md:min-h-[420px] relative bg-[#F5F8F5] overflow-hidden border border-[#DCE3E8] shadow-sm`}
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
              className="aspect-[4/3] relative bg-[#F5F8F5] overflow-hidden border border-[#DCE3E8] shadow-sm"
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
