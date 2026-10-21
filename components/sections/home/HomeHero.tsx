import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Droplets, Hammer, Phone, Waves, Wrench } from 'lucide-react';
import { CLINIC_INFO } from '@/lib/clinic-data';

export default function HomeHero() {
  const phone = CLINIC_INFO.contact.phone;
  const phoneLink = `tel:${phone.replace(/[^0-9+]/g, '')}`;

  return (
    <section
      aria-label="G Sullivan Plumbing Pty Ltd"
      className="relative isolate mb-6 mt-2 flex min-h-[640px] w-full max-w-none shrink-0 items-center overflow-hidden rounded-3xl bg-[#101B10] text-white sm:mt-3 md:min-h-[700px]"
    >
      <Image
        src="/images/g-sullivan-hero.png"
        alt="G Sullivan work vehicles parked at a service site"
        fill
        priority
        sizes="(max-width: 768px) 100vw, 1480px"
        className="hero-image-motion object-cover object-[center_36%]"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-[#101B10]/95 via-[#101B10]/78 to-[#101B10]/38 md:via-[#101B10]/62 md:to-[#101B10]/10" />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#101B10]/55 via-[#101B10]/10 to-[#101B10]/20" />

      <div className="relative z-10 w-full px-6 pb-12 pt-28 sm:px-10 sm:pb-14 md:px-14 md:pb-16 md:pt-32 lg:px-[6.5%]">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center lg:gap-8">
        <div className="hero-fade-up max-w-[790px] lg:col-span-8">
          <p className="mb-5 flex items-center gap-3 font-body text-[11px] font-semibold uppercase tracking-[0.16em] text-[#55F044] sm:text-sm sm:tracking-[0.18em]">
            <span aria-hidden="true" className="h-[3px] w-12 shrink-0 bg-[#35D426] sm:w-16" />
            Plumbing services &amp; repairs
          </p>
          <h1 className="mb-5 max-w-[850px] font-display text-[clamp(2.9rem,6.6vw,6.6rem)] font-semibold leading-[0.94] tracking-[-0.06em] text-white">
            <span className="block">Plumbing help,</span>
            <span className="block text-[#35D426]">when you need it.</span>
          </h1>
          <p className="max-w-[650px] font-body text-base leading-relaxed text-white/75 sm:text-lg md:text-xl">
            From everyday plumbing and repairs to hot water and drainage, call to talk through the work you need.
          </p>

          <div className="hero-cta-enter mt-7 flex flex-wrap gap-3 sm:mt-9 sm:gap-4">
            <a
              href={phoneLink}
              className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-[#35D426] px-6 font-body text-sm font-semibold text-[#101B10] shadow-[0_8px_28px_rgba(0,0,0,0.22)] transition-colors hover:bg-[#55F044] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:min-h-16 sm:px-9 sm:text-base"
            >
              <Phone aria-hidden="true" size={17} strokeWidth={2.4} />
              Call us: {phone}
            </a>
            <Link
              href="/request-a-quote/"
              className="inline-flex min-h-14 items-center justify-center gap-4 rounded-full border border-white/45 bg-[#101B10]/25 px-6 font-body text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:border-[#55F044] hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:min-h-16 sm:px-9 sm:text-base"
            >
              Request a quote
              <ArrowRight aria-hidden="true" size={19} />
            </Link>
          </div>
        </div>

        <div className="hero-slide-in w-full max-w-[500px] rounded-[1.6rem] border border-white/20 bg-[#101B10]/80 p-5 shadow-[0_22px_80px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:p-7 lg:col-span-4 lg:col-start-9">
          <h2 className="mb-2 flex items-center gap-3 font-display text-xl font-semibold text-white sm:text-2xl">
            <Wrench aria-hidden="true" className="text-[#35D426]" size={26} strokeWidth={1.8} />
            Plumbing services
          </h2>
          <p className="mb-5 font-body text-sm leading-relaxed text-white/65 sm:text-base">Choose a service to find out more.</p>
          <div className="divide-y divide-white/15 border-t border-white/15">
            {[
              { label: 'General plumbing', href: '/general-plumbing/', Icon: Wrench },
              { label: 'Plumbing repairs', href: '/plumbing-repairs/', Icon: Hammer },
              { label: 'Hot water systems', href: '/hot-water-systems/', Icon: Droplets },
              { label: 'Blocked drains', href: '/blocked-drains/', Icon: Waves },
            ].map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group flex items-center justify-between gap-4 py-4 font-body text-sm font-medium text-white/90 transition-colors hover:text-[#55F044] sm:text-base"
              >
                <span className="flex items-center gap-4">
                  <service.Icon aria-hidden="true" size={23} strokeWidth={1.8} className="shrink-0 text-[#55F044]" />
                  {service.label}
                </span>
                <ArrowUpRight aria-hidden="true" size={19} className="text-white/55 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#55F044]" />
              </Link>
            ))}
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
