import type { Metadata } from 'next';
import ServiceLandingPage, { getServiceMetadata } from '@/components/sections/services/ServiceLandingPage';

export const metadata: Metadata = getServiceMetadata('chimney-repairs');

export default function ExtensionsPage() {
  return <ServiceLandingPage slug="chimney-repairs" />;
}
