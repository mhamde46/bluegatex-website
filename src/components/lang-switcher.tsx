'use client';

import { usePathname, useRouter } from 'next/navigation';
import { i18n } from '@/lib/i18n/config';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

export function LangSwitcher() {
  const pathname = usePathname();
  const router = useRouter();

  const currentLocale = pathname.split('/')[1];
  const otherLocale = i18n.locales.find((locale) => locale !== currentLocale);

  const redirectedPathName = () => {
    if (!pathname || !otherLocale) return '/';
    const segments = pathname.split('/');
    segments[1] = otherLocale;
    return segments.join('/');
  };

  const handleSwitch = () => {
    router.push(redirectedPathName());
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={handleSwitch}
      className="gap-2"
    >
      <Globe className="h-4 w-4" />
      <span className="uppercase">{otherLocale}</span>
    </Button>
  );
}
