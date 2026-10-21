import type { Metadata } from 'next';
import ServiceLandingPage, { getServiceMetadata } from '@/components/sections/services/ServiceLandingPage';

export const metadata: Metadata = getServiceMetadata('hot-water-systems');

export default function KitchensBathroomsPage() {
  return <ServiceLandingPage slug="hot-water-systems" />;
}
