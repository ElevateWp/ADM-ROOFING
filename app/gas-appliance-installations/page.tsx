import type { Metadata } from 'next';
import ServiceLandingPage, { getServiceMetadata } from '@/components/sections/services/ServiceLandingPage';

export const metadata: Metadata = getServiceMetadata('gas-appliance-installations');

export default function ServicePage() {
  return <ServiceLandingPage slug="gas-appliance-installations" />;
}
