import Link from 'next/link';

export function Logo({ lang = 'en' }: { lang?: string }) {
  return (
    <Link href={`/${lang}`} className="text-2xl font-bold text-white transition-colors hover:text-primary">
      BlueGate<span className="text-primary">X</span>
    </Link>
  );
}
