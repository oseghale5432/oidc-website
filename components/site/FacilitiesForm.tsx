'use client';

import { useState } from 'react';

const field = { height: '48px', border: '1px solid #8C8278', padding: '0 12px', fontSize: '16px', fontFamily: 'inherit', background: '#FFFFFF' } as const;
const label = { fontWeight: 700, fontSize: '15px' } as const;
const col = { display: 'flex', flexDirection: 'column', gap: '6px' } as const;

const TYPES = [
  'Sewage network connection',
  'Water connection',
  'Construction debris collection',
  'Power / electricity',
  'MTN connectivity',
  'Report an issue',
  'Other',
];

export default function FacilitiesForm() {
  const [f, setF] = useState({ name: '', plot: '', phone: '', type: TYPES[0], details: '' });
  const [state, setState] = useState<'idle' | 'sending' | 'done' | 'error'>('idle');
  const set = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setF((p) => ({ ...p, [k]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: f.name,
          phone: f.phone,
          message: `[Facilities request: ${f.type}]\nPlot number: ${f.plot || '—'}\n\n${f.details}`,
        }),
      });
      if (res.ok) {
        setState('done');
        setF({ name: '', plot: '', phone: '', type: TYPES[0], details: '' });
      } else setState('error');
    } catch {
      setState('error');
    }
  };

  return (
    <form onSubmit={onSubmit} style={{ flex: '1 1 520px', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '16px', background: '#FFFFFF', border: '1px solid #E5DED3', padding: '28px', boxSizing: 'border-box' }}>
      <div style={col}>
        <label htmlFor="n" style={label}>Full name</label>
        <input id="n" type="text" required value={f.name} onChange={set('name')} style={field} />
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
        <div style={{ flex: '1 1 200px', ...col }}>
          <label htmlFor="p" style={label}>Plot number</label>
          <input id="p" type="text" value={f.plot} onChange={set('plot')} style={field} />
        </div>
        <div style={{ flex: '1 1 200px', ...col }}>
          <label htmlFor="ph" style={label}>Phone</label>
          <input id="ph" type="tel" required value={f.phone} onChange={set('phone')} style={field} />
        </div>
      </div>
      <div style={col}>
        <label htmlFor="r" style={label}>Request type</label>
        <select id="r" value={f.type} onChange={set('type')} style={field}>
          {TYPES.map((t) => <option key={t}>{t}</option>)}
        </select>
      </div>
      <div style={col}>
        <label htmlFor="m" style={label}>Details</label>
        <textarea id="m" rows={4} required value={f.details} onChange={set('details')} style={{ border: '1px solid #8C8278', padding: '12px', fontSize: '16px', fontFamily: 'inherit' }} />
      </div>
      <button type="submit" disabled={state === 'sending'} style={{ alignSelf: 'flex-start', minHeight: '48px', padding: '0 24px', background: '#A9481A', color: '#FFFFFF', border: '0', fontWeight: 700, fontSize: '16px', fontFamily: 'inherit', cursor: 'pointer' }}>
        {state === 'sending' ? 'Sending…' : 'Send request'}
      </button>
      {state === 'done' && <p role="status" style={{ margin: 0, fontSize: '15px', color: '#4A6A3C', fontWeight: 700 }}>Thank you — the facilities team will be in touch.</p>}
      {state === 'error' && <p role="alert" style={{ margin: 0, fontSize: '15px', color: '#A9481A', fontWeight: 700 }}>Something went wrong. Please call +234 813 299 2279.</p>}
    </form>
  );
}
