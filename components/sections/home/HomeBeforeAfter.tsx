import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AnimateOnScroll from '@/components/motion/AnimateOnScroll';

export default function HomeBeforeAfter() {
  return (
    <section className="relative z-20 w-full bg-paper py-20 md:py-32 border-t border-mist overflow-hidden">
      <div className="max-w-site mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <AnimateOnScroll animation="fade-right" duration={0.85} className="lg:col-span-5">
            <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
              Serviços de reparo e manutenção de coberturas
            </span>
            <h2 className="font-display text-33 md:text-41 text-forest-ink mb-6">
              Cuidado de telhados para cada proteção
            </h2>
            <p className="font-body text-15 md:text-17 text-forest-ink/80 leading-relaxed mb-6">
              As fotos desta seção são imagens de banco usadas como referência visual para visitas técnicas e cuidados de telhados. Elas não representam clientes ou procedimentos realizados na empresa.
            </p>
            <Link
              href="/cosmetic-dentistry/"
              className="font-body text-15 text-forest font-medium hover:underline underline-offset-4"
            >
              Explore cosmetic home design →
            </Link>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-left" duration={0.85} className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative aspect-[4/3] bg-mist overflow-hidden border border-mist shadow-sm">
                <Image
                  src="https://images.unsplash.com/photo-1677031320827-61e5047ce0c6?auto=format&fit=crop&w=1600&q=85"
                  alt="Imagem de banco ilustrativa de uma Proprietário com sua telhadista"
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover"
                />
                <span className="absolute bottom-3 left-3 bg-[#081A40]/85 text-white font-body text-12 px-3 py-1">
                  Imagem ilustrativa
                </span>
              </div>
              <div className="relative aspect-[4/3] bg-mist overflow-hidden border border-mist shadow-sm">
                <Image
                  src="https://images.unsplash.com/photo-1600093652298-e57ee8aba769?auto=format&fit=crop&w=1600&q=85"
                  alt="Imagem de banco ilustrativa de atendimento de telhados"
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover"
                />
                <span className="absolute bottom-3 left-3 bg-[#081A40]/85 text-white font-body text-12 px-3 py-1">
                  Imagem ilustrativa
                </span>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}