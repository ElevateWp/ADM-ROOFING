import type { Metadata } from 'next';
import ServiceLandingPage, { getServiceMetadata } from '@/components/sections/services/ServiceLandingPage';

export const metadata: Metadata = getServiceMetadata('dental-implants');

export default function ExtensionsPage() {
  return <ServiceLandingPage slug="dental-implants" />;
}
