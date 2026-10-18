import type { Metadata } from 'next';
import ServiceLandingPage, { getServiceMetadata } from '@/components/sections/services/ServiceLandingPage';

export const metadata: Metadata = getServiceMetadata('roof-repairs');

export default function RoofingLeanTosPage() {
  return <ServiceLandingPage slug="roof-repairs" />;
}
