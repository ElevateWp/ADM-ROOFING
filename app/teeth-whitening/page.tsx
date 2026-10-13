import type { Metadata } from 'next';
import ServiceLandingPage, { getServiceMetadata } from '@/components/sections/services/ServiceLandingPage';

export const metadata: Metadata = getServiceMetadata('teeth-whitening');

export default function KitchensBathroomsPage() {
  return <ServiceLandingPage slug="teeth-whitening" />;
}
