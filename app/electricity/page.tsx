import type { Metadata } from 'next';
import UtilityPage from '@/components/UtilityPage';

export const metadata: Metadata = {
  title: 'Electricity Utilities - Orange Island Lagos',
  description: 'Understand the electricity grid, IPP integration, standby generators, and solar advisory on Orange Island Lagos.',
};

export default function ElectricityPage() {
  return (
    <UtilityPage
      name="Electricity"
      eyebrow="Reliable power infrastructure with EKEDC supply, IPP integration, and emergency backup."
      headline="Electricity Supply & Resilience"
      introduction="The primary source of power on Orange Island is EKEDC, providing approximately 20 hours of electricity supply daily. To complement this, we have integrated with an Independent Power Producer (IPP) to enhance our energy resilience and long-term sustainability. Backup generators are also on standby for emergency situations. We strongly advise all residents to install solar connections in their homes as an additional and reliable alternative power source."
      image="/images/electricity.jpg"
      imageAlt="Electricity infrastructure on Orange Island"
      facts={[
        ['Primary Source', 'EKEDC (~20 Hours Daily)'],
        ['Resilience Partner', 'Independent Power Producer (IPP)'],
        ['Emergency Backup', 'Standby Generators'],
      ]}
      noteTitle="Solar Energy Advisory"
      note="We strongly advise all residents to install solar connections in their homes as an additional and reliable alternative power source."
      ctaTitle="Planning an electricity connection?"
      ctaText="Contact our facilities and utilities team for metering, connection onboarding, and service support."
    />
  );
}
