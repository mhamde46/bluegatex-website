import { PageShell } from '@/components/page-shell';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { Locale } from '@/lib/i18n/config';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, PenTool, Cloud, Layers, Bot, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const serviceIcons: { [key: string]: React.ElementType } = {
  "Fintech Solutions": ShieldCheck,
  "SaaS Development": Layers,
  "Mobile & Web Apps": Code,
  "Backend & APIs": Cloud,
  "AI & Automation": Bot,
  "UI/UX Design": PenTool,
};

export default async function Services({ params: { lang } }: { params: { lang: Locale } }) {
  const dict = await getDictionary(lang);

  return (
    <PageShell>
      <div className="container py-16 md:py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl">{dict.services.title}</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
             {lang === 'ar' ? 'من الفكرة إلى الإطلاق، نقدم مجموعة كاملة من الخدمات لإحياء منتجك الرقمي.' : 'From idea to launch, we offer a complete suite of services to bring your digital product to life.'}
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {dict.services.items.map((service, index) => {
            const Icon = serviceIcons[service.title as keyof typeof serviceIcons] || Code;
            return (
              <Card key={index} className="bg-card/80 border-border/50 flex flex-col">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="rounded-lg bg-primary/10 p-4 text-primary">
                    <Icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-white text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground text-lg">{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
         <div className="text-center mt-24">
            <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl">{dict.cta.title}</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">{dict.cta.description}</p>
            <div className="mt-8">
              <Button asChild size="lg">
                <Link href={`/${lang}/contact`}>{dict.buttons.bookConsultation}</Link>
              </Button>
            </div>
        </div>
      </div>
    </PageShell>
  );
}
