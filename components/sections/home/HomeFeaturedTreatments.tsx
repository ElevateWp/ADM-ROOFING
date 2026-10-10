import React from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import AnimateOnScroll from '@/components/motion/AnimateOnScroll';

export default function HomeFeaturedTreatments() {
  return (
    <section className="relative z-20 w-full bg-paper py-20 md:py-32 border-t border-mist overflow-hidden">
      <div className="max-w-site mx-auto px-6 md:px-12">
        <AnimateOnScroll animation="fade-up" duration={0.8} className="mb-16">
          <span className="font-body text-13 text-[#171717] block mb-2 font-medium uppercase tracking-wider">
            Serviços de reparo e manutenção de coberturas
          </span>
          <h2 className="font-display text-33 md:text-41 text-[#171717]">
            Reparos de telhados e manutenção preventiva
          </h2>
        </AnimateOnScroll>

        <div className="flex flex-col space-y-24">
          {/* Featured Case 1: Guided Dental Implantology & Immediate Load */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <AnimateOnScroll animation="fade-right" duration={0.9} className="lg:col-span-6 order-2 lg:order-1">
              <span className="font-body text-13 text-[#171717] uppercase tracking-wider block mb-2 font-medium">
                Reparo de telhados e infiltrações
              </span>
              <h3 className="font-display text-26 md:text-33 text-[#171717] mb-4">
                Reparo de telhado para conter infiltrações
              </h3>
              <p className="font-body text-15 md:text-17 text-[#171717]/80 leading-relaxed mb-6">
                Após a inspeção, a equipe identifica as telhas danificadas e apresenta o escopo e o prazo estimado para o reparo.
              </p>
              <div className="p-4 bg-[#F5F5F5] border-l-4 border-[#171717] mb-6 rounded-sm">
                <span className="font-body text-13 text-[#171717]/80">
                  <strong className="text-[#171717] font-semibold">Destaque:</strong> Inspeção do telhado e escopo de reparo combinados antes da execução.
                </span>
              </div>
              <Button href="/dental-implants/" variant="ghost" size="md">
                Saiba mais sobre reparos
              </Button>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-left" duration={0.9} className="lg:col-span-6 order-1 lg:order-2">
              <div className="relative aspect-[4/3] bg-mist overflow-hidden border border-mist shadow-sm">
                <Image
                  src="https://images.unsplash.com/photo-1726589004565-bedfba94d3a2?auto=format&fit=crop&w=1400&q=85"
                  alt="Imagem de banco ilustrativa de atendimento de telhados"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-top"
                />
              </div>
            </AnimateOnScroll>
          </div>

          {/* Featured Case 2: Orthodontics and Specialized Care */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <AnimateOnScroll animation="fade-right" duration={0.9} className="lg:col-span-6">
              <div className="relative aspect-[4/3] bg-mist overflow-hidden border border-mist shadow-sm">
                <Image
                  src="https://images.unsplash.com/photo-1643509867448-57001e0c333d?auto=format&fit=crop&w=1600&q=85"
                  alt="Imagem de banco ilustrativa de avaliação de telhados"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-left" duration={0.9} className="lg:col-span-6">
              <span className="font-body text-13 text-[#171717] uppercase tracking-wider block mb-2 font-medium">
                Inspeção e manutenção preventiva
              </span>
              <h3 className="font-display text-26 md:text-33 text-[#171717] mb-4">
                Inspeção atenta dos pontos de desgaste da cobertura
              </h3>
              <p className="font-body text-15 md:text-17 text-[#171717]/80 leading-relaxed mb-6">
                A inspeção ajuda a localizar sinais de desgaste e infiltração para definir as próximas etapas de manutenção.
              </p>
              <div className="p-4 bg-[#F5F5F5] border-l-4 border-[#171717] mb-6 rounded-sm">
                <span className="font-body text-13 text-[#171717]/80">
                  <strong className="text-[#171717] font-semibold">Resultado:</strong> Mais clareza sobre os pontos que precisam de atenção na cobertura.
                </span>
              </div>
              <Button href="/braces/" variant="ghost" size="md">
                Saiba mais sobre inspeção preventiva
              </Button>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
