import type { Metadata } from 'next';
import ServiceLandingPage, { getServiceMetadata } from '@/components/sections/services/ServiceLandingPage';
export const metadata: Metadata = getServiceMetadata('shed-repairs-restoration');
export default function ShedRepairsPage() { return <ServiceLandingPage slug="shed-repairs-restoration" />; }
