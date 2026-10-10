import React from 'react';
import Image from 'next/image';
import MediaParallax from '@/components/motion/MediaParallax';
import AnimateOnScroll from '@/components/motion/AnimateOnScroll';

const GALLERY_IMAGES = [
  { src: '/images/mailson-gallery-01.jpg', alt: 'Instalação de cobertura residencial' },
  { src: '/images/mailson-gallery-02.jpg', alt: 'Reparo de piso em andamento' },
  { src: '/images/mailson-gallery-03.jpg', alt: 'Preparação de ambiente para reforma' },
  { src: '/images/mailson-gallery-04.jpg', alt: 'Telhado de telhas cerâmicas' },
  { src: '/images/mailson-gallery-05.jpg', alt: 'Execução de piso em área externa' },
  { src: '/images/mailson-gallery-06.jpg', alt: 'Acabamento de banheiro' },
  { src: '/images/mailson-gallery-07.jpg', alt: 'Detalhe de serviço de acabamento' },
  { src: '/images/mailson-gallery-08.jpg', alt: 'Fachada de residência reformada' },
  { src: '/images/mailson-gallery-09.jpg', alt: 'Materiais para reparo de cobertura' },
  { src: '/images/mailson-gallery-10.jpg', alt: 'Ambiente interno após reforma' },
  { src: '/images/mailson-gallery-11.jpg', alt: 'Casa residencial e área externa' },
  { src: '/images/mailson-gallery-12.jpg', alt: 'Trabalho de reparo em parede interna' },
  { src: '/images/mailson-gallery-13.jpg', alt: 'Detalhe de telhado residencial' },
];

export default function HomeGallery() {
  return (
    <section className="relative z-20 w-full bg-paper py-20 md:py-32 border-t border-mist overflow-hidden">
      <div className="max-w-site mx-auto px-6 md:px-12">
        <AnimateOnScroll animation="fade-up" duration={0.8} className="mb-16">
          <span className="font-body text-13 text-[#E50914] block mb-2 font-medium uppercase tracking-wider">
            MAILSON REPAROS &amp; MANUTENÇÕES LTDA
          </span>
          <h2 className="font-display text-33 md:text-41 text-[#171717]">
            Trabalhos realizados
          </h2>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch mb-6">
          {GALLERY_IMAGES.slice(0, 2).map((item, index) => (
            <AnimateOnScroll
              key={item.src}
              animation={index === 0 ? 'fade-right' : 'fade-down'}
              duration={0.85}
              className={`${index === 0 ? 'md:col-span-5' : 'md:col-span-7'} min-h-[300px] md:min-h-[420px] relative bg-[#F5F5F5] overflow-hidden border border-[#DDDDDD] shadow-sm`}
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
              className="aspect-[4/3] relative bg-[#F5F5F5] overflow-hidden border border-[#DDDDDD] shadow-sm"
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
