import type { Metadata } from 'next';
import ServiceLandingPage, { getServiceMetadata } from '@/components/sections/services/ServiceLandingPage';

export const metadata: Metadata = getServiceMetadata('dental-cleaning');

export default function RefurbishmentsPage() {
  return <ServiceLandingPage slug="dental-cleaning" />;
}
