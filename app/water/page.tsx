import type { Metadata } from 'next';
import UtilityPage from '@/components/UtilityPage';

export const metadata: Metadata = { title: 'Water Utilities - Orange Island Lagos', description: 'Learn about the centralized clean water supply system on Orange Island Lagos.' };

export default function WaterPage() {
  return <UtilityPage name="Water" eyebrow="Centralised treatment and distribution for every home." headline="One network. One quality standard." introduction="Orange Island's water network delivers treated potable water through a coordinated system, supporting consistent quality, dependable distribution and responsible groundwater management." image="/images/water.jpeg" imageAlt="Water treatment infrastructure" facts={[["Primary system", "Central treatment plant"], ["Distribution", "Island-wide network"], ["Quality", "Centrally monitored"]]} sections={[
    { title: 'Treatment', description: 'Water is treated through a central plant before entering the island-wide distribution network.', points: ['Unified treatment standards', 'Coordinated quality monitoring'] },
    { title: 'Distribution', description: 'Every connected property receives supply through the same managed network.', points: ['Stable planned delivery', 'Central maintenance support'] },
    { title: 'Protection', description: 'Controlled extraction helps preserve the groundwater reserve and reclaimed land.', points: ['No private borehole variation', 'Responsible resource management'] },
  ]} noteTitle="Private boreholes" note="Private boreholes are not permitted. Uncontrolled extraction can reduce groundwater levels, affect the island's managed water balance and compromise the integrity of reclaimed land." ctaTitle="Need a water connection?" ctaText="Our facilities team can explain connection requirements and guide residents through onboarding." />;
}
