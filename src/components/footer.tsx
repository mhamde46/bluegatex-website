import Link from 'next/link';
import { Logo } from './logo';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { Locale } from '@/lib/i18n/config';
import { Github, Twitter, Linkedin } from 'lucide-react';

export async function Footer({ lang }: { lang: Locale }) {
  const dict = await getDictionary(lang);

  const navLinks = [
    { href: 'about', key: 'about' },
    { href: 'services', key: 'services' },
    { href: 'portfolio', key: 'portfolio' },
    { href: 'industries', key: 'industries' },
    { href: 'blog', key: 'blog' },
  ];

  const legalLinks = [
    { href: 'privacy-policy', key: 'privacy' },
    { href: 'terms-of-service', key: 'terms' },
  ];

  const socialLinks = [
    { href: 'https://x.com/bluegatex', icon: Twitter, name: 'X (Twitter)' },
    { href: 'https://github.com/bluegatex', icon: Github, name: 'GitHub' },
    { href: 'https://linkedin.com/company/bluegatex', icon: Linkedin, name: 'LinkedIn' },
  ];

  return (
    <footer className="border-t border-border/40">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="space-y-4">
            <Logo lang={lang} />
            <p className="max-w-xs text-muted-foreground">{dict.footer.tagline}</p>
            <div className="text-sm text-muted-foreground">
                <p>BlueGateX Ltd</p>
                <p>Registered in the United Kingdom</p>
                <p>{dict.footer.companyNumber}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:col-span-2">
            <div>
              <h3 className="font-semibold text-white">{dict.navigation.services}</h3>
              <ul className="mt-4 space-y-2">
                {navLinks.map((link) => (
                  <li key={link.key}>
                    <Link href={`/${lang}/${link.href}`} className="text-muted-foreground hover:text-primary">
                      {dict.navigation[link.key as keyof typeof dict.navigation]}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white">Legal</h3>
              <ul className="mt-4 space-y-2">
                {legalLinks.map((link) => (
                  <li key={link.key}>
                    <Link href={`/${lang}/${link.href}`} className="text-muted-foreground hover:text-primary">
                      {dict.navigation[link.key as keyof typeof dict.navigation]}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white">{dict.footer.newsletter}</h3>
              <form className="mt-4 space-y-2">
                <Input type="email" placeholder={dict.footer.newsletterPlaceholder} className="max-w-xs" />
                <Button type="submit" variant="secondary" className="w-full max-w-xs">{dict.footer.newsletterButton}</Button>
              </form>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between border-t border-border/40 pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; 2025 BlueGateX Ltd. {dict.footer.rights}
          </p>
          <div className="mt-4 flex items-center space-x-4 sm:mt-0">
            {socialLinks.map((social) => (
              <Link key={social.name} href={social.href} className="text-muted-foreground hover:text-primary" target="_blank" rel="noopener noreferrer">
                <social.icon className="h-5 w-5" />
                <span className="sr-only">{social.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
