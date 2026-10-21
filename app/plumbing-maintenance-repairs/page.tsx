import type { Metadata } from 'next';
import ServiceLandingPage, { getServiceMetadata } from '@/components/sections/services/ServiceLandingPage';

export const metadata: Metadata = getServiceMetadata('plumbing-maintenance-repairs');

export default function ServicePage() {
  return <ServiceLandingPage slug="plumbing-maintenance-repairs" />;
}
