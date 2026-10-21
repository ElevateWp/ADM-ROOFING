import type { Metadata } from 'next';
import ServiceLandingPage, { getServiceMetadata } from '@/components/sections/services/ServiceLandingPage';

export const metadata: Metadata = getServiceMetadata('hot-water-service-maintenance-installations');

export default function ServicePage() {
  return <ServiceLandingPage slug="hot-water-service-maintenance-installations" />;
}
