import type { Metadata } from 'next';
import UtilityPage from '@/components/UtilityPage';

export const metadata: Metadata = {
  title: 'Waste Collection - Orange Island Lagos',
  description: 'Weekly domestic waste collection and dedicated industrial waste services on Orange Island Lagos.',
};

export default function WasteCollectionPage() {
  return (
    <UtilityPage
      name="Waste Collection"
      eyebrow="Coordinated weekly service and dedicated industrial waste collection."
      headline="Island Waste Collection Service"
      introduction="Waste collection takes place every Thursday. Residents are required to ensure their waste bins are placed at a central, easily accessible point for pickup. For building waste, construction debris, or other industrial waste, please contact our facilities team directly to arrange a dedicated collection."
      image="/images/waste.jpg"
      imageAlt="Waste collection service on Orange Island"
      facts={[
        ['Collection Day', 'Every Thursday'],
        ['Pickup Location', 'Central, Easily Accessible Point'],
        ['Industrial / Debris', 'Dedicated Collection on Request'],
      ]}
      noteTitle="Building & Industrial Waste"
      note="For building waste, construction debris, or other industrial waste, please contact our facilities team directly to arrange a dedicated collection."
      ctaTitle="Need a dedicated collection?"
      ctaText="Speak with our facilities team directly to arrange dedicated timing and access for building waste or industrial debris."
    />
  );
}
