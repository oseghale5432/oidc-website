import type { Metadata } from 'next';
import UtilityPage from '@/components/UtilityPage';

export const metadata: Metadata = { title: 'Sewage Management - Orange Island Lagos', description: 'Learn about the centralised vacuum sewage network on Orange Island Lagos.' };

export default function SewagePage() {
  return <UtilityPage name="Sewage Management" eyebrow="A central vacuum network designed for clean, efficient operation." headline="Wastewater management built into the island." introduction="Orange Island's central vacuum sewage network transports wastewater through sealed pipes under controlled pressure, helping contain odour, reduce leakage risk and simplify long-term maintenance." image="/images/sewage.jpg" imageAlt="Sewage management infrastructure" facts={[["System", "Central vacuum network"], ["Transport", "Sealed pipework"], ["Operation", "Centrally managed"]]} sections={[
    { title: 'Collection', description: 'Wastewater enters a closed network through property connection points.', points: ['Contained access points', 'Reduced exposed infrastructure'] },
    { title: 'Transport', description: 'Vacuum pressure moves wastewater efficiently through sealed underground pipes.', points: ['Reduced leakage risk', 'Improved odour control'] },
    { title: 'Management', description: 'Central oversight supports maintenance and reliable long-term operation.', points: ['Coordinated servicing', 'Purpose-built infrastructure'] },
  ]} noteTitle="Partner network" note="The vacuum sewage system is delivered in partnership with Aqseptance Group (Germany) and Roelag Environmental Services Ltd, supporting modern design and managed operation." ctaTitle="Need sewage connection support?" ctaText="Contact the facilities team for connection coordination, access requirements or service questions." />;
}
