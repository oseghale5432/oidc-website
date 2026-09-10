import type { Metadata } from 'next';
import UtilityPage from '@/components/UtilityPage';

export const metadata: Metadata = {
  title: 'Water Utilities - Orange Island Lagos',
  description: 'Learn about the centralized clean water supply system on Orange Island Lagos.',
};

export default function WaterPage() {
  return (
    <UtilityPage
      name="Water"
      eyebrow="Central water treatment plant delivering clean, potable water 24/7."
      headline="Central Water Supply System"
      introduction="The water supply system on Orange Island features a central water treatment plant capable of delivering clean, potable water to all residents 24 hours a day, 7 days a week. All residents are required to connect directly to our central system. Please note that private boreholes are not permitted on the island."
      image="/images/water.jpeg"
      imageAlt="Water treatment infrastructure on Orange Island"
      facts={[
        ['Water Supply', '24 Hours / 7 Days a Week'],
        ['Treatment System', 'Central Treatment Plant'],
        ['Private Boreholes', 'Strictly Not Permitted'],
      ]}
      noteTitle="Private Boreholes"
      note="Please note that private boreholes are not permitted on the island. All residents are required to connect directly to our central system."
      ctaTitle="Need a water connection?"
      ctaText="Please contact our facilities team directly to coordinate your connection to the central water network."
    />
  );
}
