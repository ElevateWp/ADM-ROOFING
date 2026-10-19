import type { Metadata } from 'next';
import ServiceLandingPage, { getServiceMetadata } from '@/components/sections/services/ServiceLandingPage';

export const metadata: Metadata = getServiceMetadata('roofing-and-chimney-work');

export default function KitchensBathroomsPage() {
  return <ServiceLandingPage slug="roofing-and-chimney-work" />;
}
