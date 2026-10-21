import type { Metadata } from 'next';
import ServiceLandingPage, { getServiceMetadata } from '@/components/sections/services/ServiceLandingPage';

export const metadata: Metadata = getServiceMetadata('plumbing-repairs');

export default function PlumbingLeanTosPage() {
  return <ServiceLandingPage slug="plumbing-repairs" />;
}
