import type { Metadata } from 'next';
import ServiceLandingPage, { getServiceMetadata } from '@/components/sections/services/ServiceLandingPage';
export const metadata: Metadata = getServiceMetadata('emergency-roof-repairs');
export default function EmergencyRoofRepairsPage() { return <ServiceLandingPage slug="emergency-roof-repairs" />; }
