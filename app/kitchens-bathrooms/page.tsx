import type { Metadata } from 'next';
import ServiceLandingPage, { getServiceMetadata } from '@/components/sections/services/ServiceLandingPage';

export const metadata: Metadata = getServiceMetadata('kitchens-bathrooms');

export default function KitchensBathroomsPage() {
  return <ServiceLandingPage slug="kitchens-bathrooms" />;
}
