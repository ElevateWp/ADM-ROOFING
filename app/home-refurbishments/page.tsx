import type { Metadata } from 'next';
import ServiceLandingPage, { getServiceMetadata } from '@/components/sections/services/ServiceLandingPage';

export const metadata: Metadata = getServiceMetadata('home-refurbishments');

export default function RefurbishmentsPage() {
  return <ServiceLandingPage slug="home-refurbishments" />;
}
