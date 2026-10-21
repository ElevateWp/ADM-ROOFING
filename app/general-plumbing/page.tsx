import type { Metadata } from 'next';
import ServiceLandingPage, { getServiceMetadata } from '@/components/sections/services/ServiceLandingPage';

export const metadata: Metadata = getServiceMetadata('general-plumbing');

export default function RefurbishmentsPage() {
  return <ServiceLandingPage slug="general-plumbing" />;
}
