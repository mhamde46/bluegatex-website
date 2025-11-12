import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { cn } from '@/lib/utils';
import { type Locale } from '@/lib/i18n/config';

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  const isArabic = params.lang === 'ar';
  
  return (
      <div className={cn("min-h-screen flex flex-col", isArabic ? "font-arabic" : "font-body")}>
        <Header lang={params.lang} />
        <main className="flex-1">{children}</main>
        <Footer lang={params.lang} />
      </div>
  );
}
