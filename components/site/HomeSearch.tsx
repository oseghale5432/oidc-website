'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

// Keyword → page lookup for the "What do you need help with?" box.
const ROUTES: Array<[RegExp, string]> = [
  [/sew|toilet|vacuum|drain/i, '/utilities#sewage'],
  [/water|borehole/i, '/utilities#water'],
  [/waste|bin|debris|rubbish|refuse|trash/i, '/utilities#waste'],
  [/power|electric|light|ekedc|ipp|del|viathan|solar|generator/i, '/utilities#power'],
  [/internet|mtn|fibre|fiber|wifi|network|connect/i, '/utilities#connectivity'],
  [/venco|app|visitor|gate|access/i, '/utilities#venco'],
  [/permit|construct|build|contractor/i, '/building#approvals'],
  [/approv|design|concept|architect|regulat|setback|height/i, '/building'],
  [/plot|buy|invest|sale|price/i, '/properties-investment'],
  [/team|board|director|who|about|masterplan/i, '/about'],
  [/news|newsletter|blog|update/i, '/blog'],
  [/issue|report|fault|complain|repair|broken/i, '/utilities#facilities'],
];

export default function HomeSearch() {
  const router = useRouter();
  const [q, setQ] = useState('');

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const hit = ROUTES.find(([re]) => re.test(q));
    router.push(hit ? hit[1] : '/contact');
  };

  return (
    <form role="search" onSubmit={onSubmit} style={{ display: 'flex', flexWrap: 'wrap', gap: '0', maxWidth: '560px', marginTop: '8px' }}>
      <label htmlFor="q" style={{ width: '100%', fontSize: '15px', marginBottom: '8px', color: '#FFFFFF' }}>What do you need help with?</label>
      <input
        id="q"
        type="search"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="e.g. sewage connection, construction permit"
        style={{ flex: '1 1 280px', minWidth: '0', height: '52px', border: '2px solid #FFFFFF', borderRight: '0', padding: '0 16px', fontSize: '16px', fontFamily: 'inherit', boxSizing: 'border-box', background: '#FFFFFF', color: '#1B2228' }}
      />
      <button type="submit" style={{ height: '52px', padding: '0 24px', background: '#C9611F', color: '#FFFFFF', border: '2px solid #C9611F', fontSize: '16px', fontWeight: 700, fontFamily: 'inherit', cursor: 'pointer' }}>Search</button>
    </form>
  );
}
