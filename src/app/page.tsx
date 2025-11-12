'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/en');
  }, [router]);

  return (
    <div className="flex h-screen items-center justify-center bg-background">
      <p className="text-foreground">Redirecting...</p>
    </div>
  );
}
