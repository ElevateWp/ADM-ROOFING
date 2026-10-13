import type { Metadata } from 'next';
import ServiceLandingPage, { getServiceMetadata } from '@/components/sections/services/ServiceLandingPage';

export const metadata: Metadata = getServiceMetadata('cosmetic-dentistry');

export default function RoofingLeanTosPage() {
  return <ServiceLandingPage slug="cosmetic-dentistry" />;
}
