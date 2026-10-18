import type { Metadata } from 'next';
import ServiceLandingPage, { getServiceMetadata } from '@/components/sections/services/ServiceLandingPage';
export const metadata: Metadata = getServiceMetadata('custom-roofing-projects');
export default function CustomRoofingPage() { return <ServiceLandingPage slug="custom-roofing-projects" />; }
