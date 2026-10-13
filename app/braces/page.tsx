import type { Metadata } from 'next';
import ServiceLandingPage, { getServiceMetadata } from '@/components/sections/services/ServiceLandingPage';

export const metadata: Metadata = getServiceMetadata('braces');

export default function LoftExtensionsPage() {
  return <ServiceLandingPage slug="braces" />;
}
