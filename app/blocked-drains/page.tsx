import type { Metadata } from 'next';
import ServiceLandingPage, { getServiceMetadata } from '@/components/sections/services/ServiceLandingPage';

export const metadata: Metadata = getServiceMetadata('blocked-drains');

export default function ExtensionsPage() {
  return <ServiceLandingPage slug="blocked-drains" />;
}
