import type { Metadata } from 'next';
import UtilityPage from '@/components/UtilityPage';

export const metadata: Metadata = { title: 'Electricity Utilities - Orange Island Lagos', description: 'Understand the electricity grid and energy mix on Orange Island Lagos.' };

export default function ElectricityPage() {
  return <UtilityPage name="Electricity" eyebrow="Reliable power infrastructure with backup readiness." headline="Power planned for reliability and growth." introduction="Orange Island connects residents to EKEDC supply, supported by dedicated backup capacity and a solar-ready strategy that creates a practical path toward cleaner, more resilient energy." image="/images/electricity.jpg" imageAlt="Electricity infrastructure on Orange Island" facts={[["Primary source", "EKEDC grid"], ["Backup", "Standby generators"], ["Future ready", "Solar strategy"]]} sections={[
    { title: 'Grid supply', description: 'The primary electricity supply is provided through planned EKEDC distribution.', points: ['Coordinated island distribution', 'Managed resident connections'] },
    { title: 'Backup capacity', description: 'Dedicated standby generation supports continuity during interruptions to local supply.', points: ['Layered power resilience', 'Faster service recovery'] },
    { title: 'Energy transition', description: 'The network is designed to accommodate future solar and cleaner energy solutions.', points: ['Solar-ready planning', 'Long-term efficiency'] },
  ]} noteTitle="Resident support" note="Residents receive guidance for meter connections, service requests and energy efficiency. Connection work should be coordinated with the utilities team before occupation." ctaTitle="Planning an electricity connection?" ctaText="Contact the utilities team for metering, onboarding and service-support information." />;
}
