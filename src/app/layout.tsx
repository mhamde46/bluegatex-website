import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { i18n, type Locale } from '@/lib/i18n/config';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { cn } from '@/lib/utils';

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export async function generateMetadata({
  params,
}: {
  params: { lang: Locale };
}): Promise<Metadata> {
  const lang = params.lang || i18n.defaultLocale;
  const dictionary = await getDictionary(lang);
  
  const metadataBase = new URL(`https://${dictionary.metadata.domain}`);

  return {
    title: dictionary.metadata.title,
    description: dictionary.metadata.description,
    metadataBase,
    icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon-16x16.png',
      apple: '/apple-touch-icon.png',
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: Locale };
}>) {
  const isArabic = params.lang === 'ar';
  const dictionary = await getDictionary(params.lang);

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "BlueGateX Ltd",
    "url": `https://${dictionary.metadata.domain}`,
    "logo": `https://${dictionary.metadata.domain}/logo.png`,
    "sameAs": [
      "https://x.com/bluegatex",
      "https://www.linkedin.com/company/bluegatex"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "info@bluegatex.co.uk",
      "contactType": "Customer Service"
    }
  };
  
  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "BlueGateX Website",
    "operatingSystem": "WEB",
    "applicationCategory": "BusinessApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "GBP"
    }
  };


  return (
    <html lang={params.lang} dir={isArabic ? 'rtl' : 'ltr'}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
        />
      </head>
      <body className={cn(isArabic ? 'font-arabic' : 'font-body')}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
