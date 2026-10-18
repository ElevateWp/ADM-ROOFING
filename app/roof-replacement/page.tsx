import type { Metadata } from 'next';
import ServiceLandingPage, { getServiceMetadata } from '@/components/sections/services/ServiceLandingPage';

export const metadata: Metadata = getServiceMetadata('roof-replacement');

export default function RefurbishmentsPage() {
  return <ServiceLandingPage slug="roof-replacement" />;
}
