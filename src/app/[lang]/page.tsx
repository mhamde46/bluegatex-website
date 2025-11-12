import { Locale } from '@/lib/i18n/config';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { Star, Code, PenTool, Cloud, Rocket, CheckCircle2, ShieldCheck, TrendingUp, Cpu, Users, Layers, Briefcase, Bot, BookOpen, HeartPulse } from 'lucide-react';
import Link from 'next/link';
import { PageShell } from '@/components/page-shell';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AnimateOnScroll } from '@/components/animate-on-scroll';

const serviceIcons: { [key: string]: React.ElementType } = {
  "fintech-solutions": ShieldCheck,
  "saas-development": Layers,
  "mobile-web-apps": Code,
  "backend-apis": Cloud,
  "ai-automation": Bot,
  "ui-ux-design": PenTool,
};

const industryIcons: { [key: string]: React.ElementType } = {
  "fintech": Briefcase,
  "edtech": BookOpen,
  "healthtech": HeartPulse,
  "saas": Layers,
};

export default async function Home({ params: { lang } }: { params: { lang: Locale } }) {
  const dict = await getDictionary(lang);

  return (
    <PageShell>
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden py-24 md:py-32 lg:py-40">
        <div className="absolute inset-0 bg-gradient-to-br from-background to-card opacity-80"></div>
        <div className="container relative z-10 text-center">
          <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl animate-fade-in-up">
            {dict.hero.headline.split('.').map((line, index) => (
              <span key={index} className="block">{line.trim()}{index < dict.hero.headline.split('.').length - 2 ? '.' : ''}</span>
            ))}
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground md:text-xl animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            {dict.hero.subtext}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            <Button asChild size="lg">
              <Link href={`/${lang}/contact`}>{dict.buttons.requestDemo}</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href={`/${lang}/portfolio`}>{dict.buttons.viewOurWork}</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* About Section */}
       <AnimateOnScroll>
        <section className="py-16 md:py-24">
            <div className="container text-center max-w-4xl">
                <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl mb-6">{dict.navigation.about}</h2>
                <p className="text-xl text-muted-foreground mb-4">{dict.about.mission}</p>
                <p className="text-lg text-muted-foreground">{dict.about.description}</p>
                <p className="mt-4 text-sm font-semibold text-primary">{dict.about.location}</p>
            </div>
        </section>
      </AnimateOnScroll>


      {/* Core Services */}
      <AnimateOnScroll>
        <section className="py-16 md:py-24 bg-card">
            <div className="container">
            <div className="text-center">
                <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl">{dict.services.title}</h2>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {dict.services.items.map((service, index) => {
                const Icon = serviceIcons[service.id as keyof typeof serviceIcons] || Code;
                return (
                    <Card key={index} className="bg-background/50 border-border/50 transition-all duration-300 hover:scale-105 hover:border-primary hover:shadow-2xl">
                    <CardHeader className="flex flex-row items-center gap-4">
                        <div className="rounded-lg bg-primary/10 p-3 text-primary">
                        <Icon className="h-6 w-6" />
                        </div>
                        <CardTitle className="text-white">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">{service.description}</p>
                    </CardContent>
                    </Card>
                );
                })}
            </div>
            </div>
        </section>
      </AnimateOnScroll>

      {/* Fintech Focus */}
      <AnimateOnScroll>
        <section className="py-16 md:py-24">
            <div className="container">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl">{dict.fintech.title}</h2>
                    <p className="mt-4 text-lg text-muted-foreground">{dict.fintech.description}</p>
                </div>
                <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {dict.fintech.specialties.map((item, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <div className="rounded-full bg-primary/10 p-4 text-primary mb-4">
                                <ShieldCheck className="h-8 w-8" />
                            </div>
                            <h3 className="font-semibold text-white">{item}</h3>
                        </div>
                    ))}
                </div>
                <div className="mt-16">
                    <h3 className="text-center text-xl font-semibold text-white mb-8">{dict.partners.title}</h3>
                    <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
                        {dict.partners.logos.map((logo, index) => (
                            <span key={index} className="text-2xl font-bold text-muted-foreground grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all">{logo}</span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
      </AnimateOnScroll>

      {/* Our Products */}
      <AnimateOnScroll>
        <section className="py-16 md:py-24 bg-card">
            <div className="container">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl">{dict.products.title}</h2>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {dict.products.items.map((product, index) => (
                    <Card key={index} className="bg-background/50 border-border/50 p-6 text-center flex flex-col items-center transition-all duration-300 hover:scale-105 hover:border-primary hover:shadow-2xl">
                        <div className="rounded-lg bg-primary/10 p-4 text-primary mb-4">
                            <Layers className="h-8 w-8" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
                        <p className="text-muted-foreground flex-grow">{product.description}</p>
                        {product.isComingSoon && <Badge variant="secondary" className="mt-4">{dict.products.comingSoon}</Badge>}
                    </Card>
                ))}
            </div>
            </div>
        </section>
      </AnimateOnScroll>


      {/* Why Choose Us */}
      <AnimateOnScroll>
        <section className="py-16 md:py-24">
            <div className="container">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl">{dict.whyUs.title}</h2>
            </div>
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
        </section>
      </AnimateOnScroll>
      
      {/* Industries */}
      <AnimateOnScroll>
        <section className="py-16 md:py-24 bg-card">
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl">{dict.industries.title}</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">{dict.industries.description}</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {dict.industries.items.map((industry, index) => {
                        const Icon = industryIcons[industry.id as keyof typeof industryIcons] || Briefcase;
                        return (
                            <Link key={index} href={`/${lang}/industries`} className="group">
                                <Card className="bg-background/50 border-border/50 text-center p-6 transition-all duration-300 group-hover:border-primary group-hover:scale-105 group-hover:shadow-2xl">
                                    <div className="flex justify-center mb-4">
                                        <div className="rounded-full bg-primary/10 p-4 text-primary">
                                            <Icon className="h-8 w-8"/>
                                        </div>

                                    </div>
                                    <h3 className="text-xl font-semibold text-white">{industry.name}</h3>
                                </Card>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </section>
      </AnimateOnScroll>

       {/* CTA Section */}
      <AnimateOnScroll>
        <section className="py-24 md:py-32">
            <div className="container text-center max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl">{dict.cta.title}</h2>
            <p className="mt-4 text-lg text-muted-foreground">{dict.cta.description}</p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                <Button asChild size="lg">
                    <Link href={`/${lang}/contact`}>{dict.buttons.bookConsultation}</Link>
                </Button>
                <Button asChild size="lg" variant="ghost">
                    <a href={`mailto:${dict.cta.email}`}>{dict.cta.email}</a>
                </Button>
            </div>
            </div>
        </section>
      </AnimateOnScroll>
      
    </PageShell>
  );
}
