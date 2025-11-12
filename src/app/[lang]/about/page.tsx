import { PageShell } from '@/components/page-shell';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { Locale } from '@/lib/i18n/config';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, Users, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default async function About({ params: { lang } }: { params: { lang: Locale } }) {
  const dict = await getDictionary(lang);
  const teamImage = PlaceHolderImages.find(img => img.id === 'blog-cover-1');

  return (
    <PageShell>
      <div className="container py-16 md:py-24">
        {/* Mission */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl">{dict.about.title}</h1>
          <p className="mt-4 max-w-2xl mx-auto text-2xl text-primary font-semibold">
            {dict.about.mission}
          </p>
           <p className="mt-6 text-lg text-muted-foreground">{dict.about.description}</p>
           <p className="mt-4 text-sm font-semibold text-primary">{dict.about.location}</p>
        </div>
        
        {/* Image */}
        {teamImage && (
          <div className="my-12 aspect-video max-w-4xl mx-auto overflow-hidden rounded-2xl">
            <Image 
              src={teamImage.imageUrl} 
              alt="Team at BlueGateX" 
              width={1200}
              height={675}
              className="w-full h-full object-cover"
              data-ai-hint={teamImage.imageHint}
            />
          </div>
        )}

        {/* Why Choose Us */}
        <div className="max-w-5xl mx-auto mt-16">
          <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl text-center mb-12">{dict.whyUs.title}</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {dict.whyUs.points.map((point, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground flex-shrink-0">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{point.title}</h3>
                  <p className="text-muted-foreground mt-1">{point.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
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
