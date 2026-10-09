import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { SERVICES, DENTISTS } from '@/lib/clinic-data';
import WordRevealH1 from '@/components/motion/WordRevealH1';
import ScrubbedParagraph from '@/components/motion/ScrubbedParagraph';
import ProcedurePin from '@/components/sections/treatment/ProcedurePin';
import BeforeAfterSlider from '@/components/motion/BeforeAfterSlider';
import AnimateOnScroll from '@/components/motion/AnimateOnScroll';
import Accordion from '@/components/ui/Accordion';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import Button from '@/components/ui/Button';
import JsonLd from '@/components/ui/JsonLd';
import { createMetadata, generateMedicalProcedureSchema, generateFaqSchema } from '@/lib/seo';

const service = SERVICES.find((s) => s.slug === 'braces')!;
const leadDentist = DENTISTS.find((d) => d.id === service.assignedDentistId) || DENTISTS[0];

export const metadata: Metadata = createMetadata({
  title: 'Inspeção e manutenção preventiva',
  description:
    'Inspeção de telhados convencionais, estéticos e alinhadores com planejamento cuidadoso e atendimento humanizado.',
  pathname: '/braces/',
});

const BRACES_COMPARISON = [
  { type: 'Telhas cerâmicas', visibility: 'Avaliação visual de peças e encaixes', removability: 'Substituição conforme compatibilidade e estado da cobertura', comfort: 'Verificação de pontos de vedação e acabamento', bestFor: 'Telhas quebradas, deslocadas ou com desgaste visível', adjustmentInterval: 'Prazo definido após a inspeção' },
  { type: 'Telhas metálicas', visibility: 'Inspeção de sobreposições e fixações', removability: 'Reparo localizado conforme as condições do material', comfort: 'Revisão de juntas, parafusos e acabamentos', bestFor: 'Pontos de entrada de água ou peças danificadas', adjustmentInterval: 'Prazo definido após a inspeção' },
  { type: 'Cobertura plana', visibility: 'Avaliação de emendas, ralos e vedação', removability: 'Solução escolhida conforme a superfície', comfort: 'Inspeção de escoamento e pontos de acúmulo', bestFor: 'Sinais de umidade ou água acumulada', adjustmentInterval: 'Prazo definido após a inspeção' },
];

export default function BracesPage() {
  const procedureSchema = generateMedicalProcedureSchema(
    service.name,
    service.clinicalExplanation,
    '/braces/'
  );
  const faqSchema = generateFaqSchema(service.faqs);

  return (
    <div className="flex flex-col w-full bg-paper">
      <JsonLd data={[procedureSchema, faqSchema]} />

      {/* SECTION 1: Introduction */}
      <section className="py-16 md:py-24 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <Breadcrumbs items={[{ name: service.name, path: '/braces/' }]} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-8">
            <div className="lg:col-span-8">
              <AnimateOnScroll animation="fade-right" duration={0.8}>
                <span className="font-body text-13 text-forest-ink/60 block mb-3 uppercase tracking-wider font-medium">
                  Inspeção de telhados e coberturas
                </span>
                <WordRevealH1 text="Inspeção preventiva para identificar desgaste e pontos vulneráveis." />
                <div className="mt-8">
                  <ScrubbedParagraph text={service.shortDescription} />
                </div>

                <div className="flex flex-wrap items-center gap-4 mt-8">
                  <Button href="/book-appointment/" variant="forest" size="lg">
                    Solicitar avaliação do telhado
                  </Button>
                  <Button href="#comparison" variant="ghost" size="lg">
                    Conhecer tipos de cobertura
                  </Button>
                </div>
              </AnimateOnScroll>
            </div>

            <div className="lg:col-span-4 lg:pl-6 flex flex-col justify-end">
              <AnimateOnScroll animation="fade-left" duration={0.8} delay={0.2}>
                <div className="p-6 bg-paper border border-mist space-y-3 font-body text-13 text-forest-ink/80 shadow-sm">
                  <div className="flex justify-between border-b border-mist pb-2">
                    <span>Equipe responsável</span>
                    <Link href={`/dentists/${leadDentist.slug}/`} className="font-medium text-forest underline">
                      {leadDentist.name}
                    </Link>
                  </div>
                  <div className="flex justify-between border-b border-mist pb-2">
                    <span>Serviço em destaque</span>
                    <span className="font-medium text-forest">Dados demonstrativos</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Método de avaliação</span>
                    <span className="font-medium text-forest">Inspeção visual da cobertura</span>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: What Are Braces? */}
      <section className="py-20 md:py-32 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <AnimateOnScroll animation="fade-right" duration={0.8}>
                <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
                  Avaliação da cobertura
                </span>
                <h2 className="font-display text-33 md:text-41 text-forest-ink mb-6">
                  Como funciona a inspeção do telhado?
                </h2>
                <p className="font-body text-15 md:text-17 text-forest-ink/90 leading-relaxed mb-6">
                  {service.clinicalExplanation}
                </p>
                <div className="p-4 bg-mist/40 border-l-2 border-forest">
                  <span className="font-body text-13 text-forest-ink/80">
                    A inspeção verifica telhas, emendas, rufos e pontos de vedação para orientar o reparo adequado.
                  </span>
                </div>
              </AnimateOnScroll>
            </div>
            <div className="lg:col-span-6">
              <AnimateOnScroll animation="zoom-in" duration={0.8}>
                <div className="relative aspect-[4/3] bg-mist overflow-hidden border border-mist shadow-sm">
                  <Image
                    src="https://images.unsplash.com/photo-1763665814538-8ba04597286c?auto=format&fit=crop&w=1600&q=85"
                    alt="Telhado residencial para inspeção"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Who May Need Orthodontic Treatment? */}
      <section className="py-20 md:py-32 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <AnimateOnScroll animation="fade-up" duration={0.8}>
            <div className="mb-12">
              <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
                Quando solicitar uma inspeção
              </span>
              <h2 className="font-display text-33 md:text-41 text-forest-ink">
                Quais sinais indicam necessidade de reparo?
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.whoNeeds.map((item, idx) => (
              <AnimateOnScroll key={idx} animation="fade-up" delay={idx * 0.1}>
                <div className="p-6 bg-paper border border-mist flex items-start gap-4 h-full shadow-sm">
                  <span className="font-display text-21 text-forest flex-shrink-0">0{idx + 1}</span>
                  <p className="font-body text-15 text-forest-ink/80 leading-relaxed">{item}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: Types of Braces (Comparison Table) */}
      <section id="comparison" className="py-20 md:py-32 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <AnimateOnScroll animation="fade-up" duration={0.8}>
            <div className="mb-12">
              <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
                Appliance Modalities
              </span>
              <h2 className="font-display text-33 md:text-41 text-forest-ink">
                Appliance comparison matrix
              </h2>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-up" duration={0.8} delay={0.15}>
            <div className="border border-mist overflow-x-auto bg-paper shadow-sm">
              <table className="w-full text-left font-body text-13 border-collapse min-w-[700px]">
                <thead>
                  <tr className="bg-mist/40 border-b border-mist text-forest-ink">
                    <th className="py-4 px-6 font-display text-17">Tipo de cobertura</th>
                    <th className="py-4 px-6 font-medium">Acabamento e pontos visíveis</th>
                    <th className="py-4 px-6 font-medium">Possibilidade de reparo</th>
                    <th className="py-4 px-6 font-medium">Quando solicitar uma inspeção</th>
                    <th className="py-4 px-6 font-medium">Prazo de revisão</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-mist">
                  {BRACES_COMPARISON.map((row) => (
                    <tr key={row.type} className="hover:bg-mist/20 transition-colors">
                      <td className="py-5 px-6 font-display text-17 text-forest font-medium">
                        {row.type}
                      </td>
                      <td className="py-5 px-6 text-forest-ink/80">{row.visibility}</td>
                      <td className="py-5 px-6 text-forest-ink/80">{row.removability}</td>
                      <td className="py-5 px-6 text-forest-ink/80">{row.bestFor}</td>
                      <td className="py-5 px-6 text-forest-ink/80">{row.adjustmentInterval}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* SECTION 5: Treatment Process */}
      <ProcedurePin
        steps={service.procedureSteps}
        title="Etapas do reparo do telhado"
        subtitle="Etapas do serviço"
      />

      {/* SECTION 6: Treatment Duration */}
      <section className="py-20 md:py-32 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <AnimateOnScroll animation="fade-up" duration={0.8}>
            <div className="max-w-3xl mb-12">
              <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
                Etapas do serviço
              </span>
              <h2 className="font-display text-33 md:text-41 text-forest-ink mb-4">
                Prazo estimado do reparo
              </h2>
              <p className="font-body text-15 md:text-17 text-forest-ink/80 leading-relaxed">
                O prazo depende do material, do acesso e da extensão do dano. A equipe explica as etapas após inspecionar a cobertura.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <AnimateOnScroll animation="fade-up" delay={0.1}>
              <div className="p-6 bg-paper border border-mist h-full shadow-sm">
                <span className="font-display text-26 text-forest block mb-2">Inspeção</span>
                <h3 className="font-display text-17 text-forest-ink mb-2">Inspeção da cobertura</h3>
                <p className="font-body text-13 text-forest-ink/70">
                  As telhas danificadas são identificadas e a equipe avalia quais peças precisam de ajuste ou substituição.
                </p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-up" delay={0.2}>
              <div className="p-6 bg-paper border border-mist h-full shadow-sm">
                <span className="font-display text-26 text-forest block mb-2">Reparo</span>
                <h3 className="font-display text-17 text-forest-ink mb-2">Reparo dos pontos afetados</h3>
                <p className="font-body text-13 text-forest-ink/70">
                  Pontos de vedação, sobreposições e acabamentos são revisados conforme o tipo de cobertura.
                </p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-up" delay={0.3}>
              <div className="p-6 bg-paper border border-mist h-full shadow-sm">
                <span className="font-display text-26 text-forest block mb-2">Revisão</span>
                <h3 className="font-display text-17 text-forest-ink mb-2">Revisão do acabamento</h3>
                <p className="font-body text-13 text-forest-ink/70">
                  A revisão final confirma o serviço realizado e as orientações de manutenção.
                </p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-up" delay={0.4}>
              <div className="p-6 bg-mist/40 border border-mist h-full shadow-sm">
                <span className="font-display text-26 text-forest block mb-2">Manutenção</span>
                <h3 className="font-display text-17 text-forest-ink mb-2">Manutenção preventiva</h3>
                <p className="font-body text-13 text-forest-ink/70">
                  A equipe orienta sobre a manutenção da cobertura após concluir o reparo.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* SECTION 7: Benefits */}
      <section className="py-20 md:py-32 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <AnimateOnScroll animation="fade-up" duration={0.8}>
            <div className="mb-12">
              <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
                Functional Value
              </span>
              <h2 className="font-display text-33 md:text-41 text-forest-ink">
                Benefícios da manutenção preventiva
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.benefits.map((benefit, idx) => (
              <AnimateOnScroll key={idx} animation="fade-up" delay={idx * 0.1}>
                <div className="p-6 bg-paper border border-mist flex flex-col justify-between h-full shadow-sm">
                  <p className="font-body text-15 text-forest-ink/90 leading-relaxed mb-4">
                    {benefit}
                  </p>
                  <span className="font-body text-13 text-forest font-medium">roofing standard</span>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: Cost Information */}
      <section className="py-20 md:py-32 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <AnimateOnScroll animation="fade-right" duration={0.8}>
                <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
                  Orçamento do serviço
                </span>
                <h2 className="font-display text-33 md:text-41 text-forest-ink mb-6">
                  roofing investment
                </h2>
                <div className="p-6 bg-paper border border-mist mb-6 shadow-sm">
                  <span className="font-body text-13 text-forest-ink/60 block mb-1">Full repair Range</span>
                  <span className="font-display text-26 md:text-33 text-forest block mb-2">
                    {service.costTransparency.baseRange}
                  </span>
                  <p className="font-body text-13 text-forest-ink/70">
                    {service.costTransparency.note}
                  </p>
                </div>
              </AnimateOnScroll>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <AnimateOnScroll animation="fade-left" duration={0.8}>
                <div className="p-6 bg-mist/30 border border-mist shadow-sm">
                  <h3 className="font-display text-17 md:text-21 text-forest-ink mb-3">
                    Itens considerados no orçamento:
                  </h3>
                  <ul className="space-y-2 font-body text-13 text-forest-ink/80">
                    {service.costTransparency.whatIsIncluded.map((inc, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-forest">•</span>
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: Before & After */}
      <section className="py-20 md:py-32 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <AnimateOnScroll animation="fade-up" duration={0.8}>
            <div className="mb-12">
              <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
                técnica Case Record
              </span>
              <h2 className="font-display text-33 md:text-41 text-forest-ink mb-4">
                Exemplo ilustrativo de reparo de telhado
              </h2>
              <p className="font-body text-15 text-forest-ink/80 max-w-2xl">
                {service.beforeAfterCase.clinicalContext}
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="zoom-in" duration={0.8}>
            <div className="max-w-4xl mx-auto">
              <BeforeAfterSlider
                beforeImage={service.beforeAfterCase.beforeImage}
                afterImage={service.beforeAfterCase.afterImage}
                beforeLabel={service.beforeAfterCase.beforeLabel}
                afterLabel={service.beforeAfterCase.afterLabel}
                clinicalNote={`Timeframe: ${service.beforeAfterCase.timeframe}. Supervised by ${leadDentist.name}.`}
              />
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* SECTION 10: Dúvidas frequentes */}
      <section className="py-20 md:py-32 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <AnimateOnScroll animation="fade-right" duration={0.8}>
                <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
                  homeowner Questions
                </span>
                <h2 className="font-display text-33 md:text-41 text-forest-ink mb-4">
                  roofing Dúvidas frequentes
                </h2>
              </AnimateOnScroll>
            </div>
            <div className="lg:col-span-7">
              <AnimateOnScroll animation="fade-left" duration={0.8}>
                <Accordion items={service.faqs} />
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 11: Appointment CTA */}
      <section className="py-20 md:py-28 bg-forest text-paper">
        <div className="max-w-site mx-auto px-6 md:px-12 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <AnimateOnScroll animation="fade-right" duration={0.8}>
            <div>
              <span className="font-body text-13 text-lime uppercase tracking-wider block mb-2 font-medium">
                Start Alignment
              </span>
              <h2 className="font-display text-33 md:text-41 text-paper">
                Solicitar inspeção da cobertura
              </h2>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-left" duration={0.8} delay={0.2}>
            <Button href="/book-appointment/" variant="lime" size="lg">
              Solicitar avaliação
            </Button>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
}
