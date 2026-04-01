'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { DashboardSection } from '@/components/sections/dashboard-section';

export default function DashboardPage() {
  const router = useRouter();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const isAuth = localStorage.getItem('isAuthenticated');

    if (isAuth === 'true') {
      setReady(true);
    } else {
      router.replace('/login');
    }
  }, []);

  if (!ready) return null;

  return <DashboardSection />;
}