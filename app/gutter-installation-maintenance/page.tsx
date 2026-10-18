import type { Metadata } from 'next';
import ServiceLandingPage, { getServiceMetadata } from '@/components/sections/services/ServiceLandingPage';

export const metadata: Metadata = getServiceMetadata('gutter-installation-maintenance');

export default function KitchensBathroomsPage() {
  return <ServiceLandingPage slug="gutter-installation-maintenance" />;
}
