import type { Metadata } from 'next';
import UtilityPage from '@/components/UtilityPage';

export const metadata: Metadata = {
  title: 'Sewage Management - Orange Island Lagos',
  description: 'Learn about the state-of-the-art centralised vacuum sewage system on Orange Island Lagos.',
};

export default function SewagePage() {
  return (
    <UtilityPage
      name="Sewage Management"
      eyebrow="State-of-the-art centralised vacuum system designed for clean, efficient wastewater management."
      headline="Centralised Vacuum Sewage System"
      introduction="Our sewage management system features a state-of-the-art centralised vacuum system, designed to efficiently handle all wastewater across the island. We are currently facilitating connections from residents' internal sewage systems to the central vacuum network. Please reach out to our facilities team to coordinate your connection."
      image="/images/sewage.jpg"
      imageAlt="Sewage management infrastructure on Orange Island"
      facts={[
        ['System Type', 'Centralised Vacuum Network'],
        ['Coverage', 'Island-wide Wastewater'],
        ['Connection Status', 'Facilitating Resident Connections'],
      ]}
      noteTitle="Coordinating Your Connection"
      note="We are currently facilitating connections from residents' internal sewage systems to the central vacuum network. Please reach out to our facilities team to coordinate your connection."
      ctaTitle="Need sewage connection support?"
      ctaText="Contact our facilities team directly to coordinate connection timing, technical requirements, or service questions."
    />
  );
}
