import { PageShell } from '@/components/page-shell';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { Locale } from '@/lib/i18n/config';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, BookOpen, HeartPulse, Layers, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const industryIcons: { [key: string]: React.ElementType } = {
  "Fintech": Briefcase,
  "EdTech": BookOpen,
  "HealthTech": HeartPulse,
  "SaaS": Layers,
};

export default async function IndustriesPage({ params: { lang } }: { params: { lang: Locale } }) {
  const dict = await getDictionary(lang);

  return (
    <PageShell>
      <div className="container py-16 md:py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl">{dict.industries.title}</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            {dict.industries.description}
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {dict.industries.items.map((industry, index) => {
            const Icon = industryIcons[industry.name as keyof typeof industryIcons] || Briefcase;
            return (
              <Card key={index} className="bg-card/80 border-border/50 p-2 transition-all hover:border-primary hover:bg-card">
                 <CardHeader className="flex flex-row items-center gap-4">
                  <div className="rounded-lg bg-primary/10 p-4 text-primary">
                    <Icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-white text-2xl">{industry.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-base mb-4">{industry.description}</p>
                   <Link href={`/${lang}/services`} className="text-primary font-semibold inline-flex items-center gap-2">
                      {dict.buttons.learnMore} <ArrowRight className="h-4 w-4" />
                   </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </PageShell>
  );
}
