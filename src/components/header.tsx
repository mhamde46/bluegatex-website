import Link from 'next/link';
import { Logo } from './logo';
import { LangSwitcher } from './lang-switcher';
import { Button } from './ui/button';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { Locale } from '@/lib/i18n/config';
import { MobileNav } from './mobile-nav';

const navLinks = [
  { href: 'services', key: 'services' },
  { href: 'portfolio', key: 'portfolio' },
  { href: 'industries', key: 'industries' },
  { href: 'about', key: 'about' },
  { href: 'blog', key: 'blog' },
  { href: 'contact', key: 'contact' },
];

export async function Header({ lang }: { lang: Locale }) {
  const dict = await getDictionary(lang);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Logo lang={lang} />
        </div>

        <div className="md:hidden">
          <MobileNav lang={lang} dict={dict} navLinks={navLinks} />
        </div>
        
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
             <nav className="hidden items-center space-x-6 text-sm font-medium md:flex">
                {navLinks.map((link) => (
                  <Link
                    key={link.key}
                    href={`/${lang}/${link.href}`}
                    className="transition-colors hover:text-primary"
                  >
                    {dict.navigation[link.key as keyof typeof dict.navigation]}
                  </Link>
                ))}
            </nav>
          </div>

          <div className="flex items-center space-x-2">
            <LangSwitcher />
            <Button asChild size="sm" className="hidden sm:inline-flex">
              <Link href={`/${lang}/contact`}>{dict.buttons.requestDemo}</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
