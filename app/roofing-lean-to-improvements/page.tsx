import type { Metadata } from 'next';
import ServiceLandingPage, { getServiceMetadata } from '@/components/sections/services/ServiceLandingPage';

export const metadata: Metadata = getServiceMetadata('roofing-lean-to-improvements');

export default function RoofingLeanTosPage() {
  return <ServiceLandingPage slug="roofing-lean-to-improvements" />;
}
