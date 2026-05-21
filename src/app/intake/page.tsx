'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

import { BodyPathWidgetModal } from '@/components/bodypath/BodyPathWidgetModal';

/** Deep link: full-screen modal intake (same widget as homepage overlay). */
export default function IntakePage() {
  const router = useRouter();

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <BodyPathWidgetModal
      open
      sourcePage="/intake"
      onClose={() => router.push('/')}
    />
  );
}
