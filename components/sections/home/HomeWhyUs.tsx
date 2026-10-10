import React from 'react';
import Image from 'next/image';
import MediaParallax from '@/components/motion/MediaParallax';
import AnimateOnScroll from '@/components/motion/AnimateOnScroll';

const REASONS = [
  {
    title: 'Proteção da cobertura',
    description: 'Priorizamos avaliar o reparo localizado e a compatibilidade dos materiais com a cobertura existente.',
  },
  {
    title: 'Inspeção detalhada da cobertura',
    description: 'A equipe inspeciona os pontos visíveis de infiltração e combina o escopo antes de iniciar o reparo.',
  },
  {
    title: 'Atendimento transparente e seguro',
    description: 'O serviço é explicado com clareza e as medidas de acesso e segurança são combinadas previamente.',
  },
  {
    title: 'Ferramentas adequadas ao serviço',
    description: 'A equipe utiliza ferramentas adequadas ao tipo de cobertura e às condições de acesso do imóvel.',
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
                Nossa forma de trabalhar
              </span>
              <h2 className="font-display text-26 sm:text-33 md:text-41 text-forest-ink mb-8 md:mb-10 leading-tight">
                Por que escolher a empresa MAILSON REPAROS & MANUTENÇÕES LTDA
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

          {/* Stock photos shown for illustration */}
          <div className="lg:col-span-6">
            <AnimateOnScroll animation="fade-left" duration={0.85}>
              <div className="grid grid-cols-2 gap-3">
                {/* Main large image */}
                <div className="col-span-2 relative aspect-[16/10] bg-mist overflow-hidden border border-mist shadow-sm">
                  <MediaParallax speed={0.06} className="w-full h-full">
                    <Image
                      src="https://images.unsplash.com/photo-1634750009079-6bf7bede038b?auto=format&fit=crop&w=1600&q=85"
                      alt="Imagem de banco ilustrativa de atendimento de telhados"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </MediaParallax>
                  <div className="absolute bottom-3 left-3 bg-[#171717]/90 backdrop-blur-sm text-paper font-body text-12 px-3 py-1 font-medium">
                    Imagem ilustrativa · Atendimento de telhados
                  </div>
                </div>
                {/* Second interior image */}
                <div className="col-span-2 sm:col-span-1 relative aspect-square bg-mist overflow-hidden border border-mist shadow-sm">
                  <Image
                    src="https://images.unsplash.com/photo-1771479755055-6a305f50845e?auto=format&fit=crop&w=1600&q=85"
                    alt="Imagem de banco ilustrativa de avaliação de telhados"
                    fill
                    sizes="(max-width: 640px) 100vw, 25vw"
                    className="object-cover"
                  />
                </div>
                {/* Doctor portrait */}
                <div className="col-span-2 sm:col-span-1 relative aspect-square bg-[#F5F5F5] overflow-hidden border border-mist shadow-sm">
                  <Image
                    src="https://images.unsplash.com/photo-1760544137672-c22ce36ea818?auto=format&fit=crop&w=1600&q=85"
                    alt="Imagem de banco ilustrativa de atendimento a um Proprietário"
                    fill
                    sizes="(max-width: 640px) 100vw, 25vw"
                    className="object-cover object-top"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-[#171717]/80 text-paper font-body text-12 px-3 py-2 text-center">
                    Imagem ilustrativa · Atendimento
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
