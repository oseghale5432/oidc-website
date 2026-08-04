import type { Metadata } from 'next';
import UtilityPage from '@/components/UtilityPage';

export const metadata: Metadata = { title: 'Waste Collection - Orange Island Lagos', description: 'Weekly domestic waste collection and dedicated industrial waste services on Orange Island Lagos.' };

export default function WasteCollectionPage() {
  return <UtilityPage name="Waste Collection" eyebrow="A coordinated weekly service for a clean community." headline="Simple, reliable Thursday collection." introduction="Waste collection takes place every Thursday. Residents are required to ensure their waste bins are placed at a central, easily accessible point for pickup." image="/images/waste.jpg" imageAlt="Waste collection service" facts={[["Collection day", "Every Thursday"], ["Pickup point", "Central and accessible"], ["Special waste", "By arrangement"]]} sections={[
    { title: 'Prepare', description: 'Secure regular household waste inside a suitable bin before collection.', points: ['Keep waste contained', 'Do not include building debris'] },
    { title: 'Position', description: 'Place the bin at a central point that collection personnel can easily access.', points: ['Keep the route unobstructed', 'Make the bin clearly visible'] },
    { title: 'Collection', description: 'The facilities team completes the scheduled community pickup every Thursday.', points: ['Weekly coordinated service', 'Return bins after pickup'] },
  ]} noteTitle="Building and industrial waste" note="For building waste, construction debris or other industrial waste, contact the facilities team directly to arrange a dedicated collection. These materials should not be placed with regular household waste." ctaTitle="Need a dedicated collection?" ctaText="Speak with the facilities team to arrange access and timing for construction or industrial waste." />;
}
