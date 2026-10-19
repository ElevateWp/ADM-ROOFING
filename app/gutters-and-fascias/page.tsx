import type { Metadata } from 'next';
import ServiceLandingPage, { getServiceMetadata } from '@/components/sections/services/ServiceLandingPage';

export const metadata: Metadata = getServiceMetadata('gutters-and-fascias');

export default function KitchensBathroomsPage() {
  return <ServiceLandingPage slug="gutters-and-fascias" />;
}
