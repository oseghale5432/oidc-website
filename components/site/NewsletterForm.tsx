'use client';

import { useState } from 'react';

// Stores sign-ups as contact submissions (visible in /admin) until a mailing-list provider is connected.
export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [state, setState] = useState<'idle' | 'sending' | 'done' | 'error'>('idle');

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: 'Newsletter subscriber', email, message: '[Newsletter] Please add me to development updates, service notices and the newsletter.' }),
      });
      setState(res.ok ? 'done' : 'error');
      if (res.ok) setEmail('');
    } catch {
      setState('error');
    }
  };

  return (
    <form onSubmit={onSubmit} style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
      <label htmlFor="em" style={{ width: '100%', fontSize: '14px' }}>Email address</label>
      <input
        id="em"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ flex: '1 1 240px', minWidth: '0', height: '48px', border: '1px solid #8C8278', padding: '0 14px', fontSize: '16px', fontFamily: 'inherit', boxSizing: 'border-box', background: '#FFFFFF' }}
      />
      <button type="submit" disabled={state === 'sending'} style={{ height: '48px', padding: '0 22px', background: '#A9481A', color: '#FFFFFF', border: '0', fontWeight: 700, fontSize: '16px', fontFamily: 'inherit', cursor: 'pointer' }}>
        {state === 'sending' ? 'Subscribing…' : 'Subscribe'}
      </button>
      {state === 'done' && <p role="status" style={{ width: '100%', margin: '4px 0 0', fontSize: '14px', color: '#4A6A3C' }}>Thank you — you’re subscribed.</p>}
      {state === 'error' && <p role="alert" style={{ width: '100%', margin: '4px 0 0', fontSize: '14px', color: '#A9481A' }}>Something went wrong. Please try again.</p>}
    </form>
  );
}
