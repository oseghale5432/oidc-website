'use client';

import { usePathname } from 'next/navigation';
import Header from './Header';

export default function GlobalHeader() {
  const pathname = usePathname();

  // The homepage uses HeroNav instead of Header
  if (pathname === '/') {
    return null;
  }

  return <Header />;
}
