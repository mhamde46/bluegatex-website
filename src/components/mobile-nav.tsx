'use client';

import * as React from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Logo } from './logo';
import type { Locale } from '@/lib/i18n/config';

interface MobileNavProps {
  lang: Locale;
  dict: any;
  navLinks: { href: string; key: string }[];
}

export function MobileNav({ lang, dict, navLinks }: MobileNavProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" className="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0 bg-background">
        <div className="flex items-center justify-between">
            <Logo lang={lang} />
            <Button variant="ghost" onClick={() => setIsOpen(false)} className="px-2">
                <X className="h-6 w-6" />
            </Button>
        </div>
        <div className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.key}
                href={`/${lang}/${link.href}`}
                className="text-lg"
                onClick={() => setIsOpen(false)}
              >
                {dict.navigation[link.key as keyof typeof dict.navigation]}
              </Link>
            ))}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
