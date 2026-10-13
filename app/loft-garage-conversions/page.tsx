import type { Metadata } from 'next';
import ServiceLandingPage, { getServiceMetadata } from '@/components/sections/services/ServiceLandingPage';

export const metadata: Metadata = getServiceMetadata('loft-garage-conversions');

export default function ConversionsPage() {
  return <ServiceLandingPage slug="loft-garage-conversions" />;
}
