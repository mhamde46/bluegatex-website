import { PageShell } from '@/components/page-shell';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { Locale } from '@/lib/i18n/config';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export default async function Portfolio({ params: { lang } }: { params: { lang: Locale } }) {
  const dict = await getDictionary(lang);

  const projects = [
    { 
      id: "layra-wallet",
      title: dict.products.items[0].name, 
      category: "Fintech", 
      image: PlaceHolderImages.find(img => img.id === 'portfolio-fintech'),
      description: dict.products.items[0].description
    },
    { 
      id: "invoice-ai",
      title: dict.products.items[1].name, 
      category: "SaaS", 
      image: PlaceHolderImages.find(img => img.id === 'portfolio-web-1'),
      description: dict.products.items[1].description
    },
    { 
      id: "muhtaj-platform",
      title: dict.products.items[2].name, 
      category: "Mobile", 
      image: PlaceHolderImages.find(img => img.id === 'portfolio-marketplace'),
      description: dict.products.items[2].description
    }
  ];

  return (
    <PageShell>
      <div className="container py-16 md:py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl">{dict.navigation.portfolio}</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            {lang === 'ar' ? 'لقد ساعدنا عملاء رائعين على تحويل أفكارهم إلى واقع. إليك بعض أعمالنا المفضلة.' : 'We\'ve helped amazing clients turn their ideas into reality. Here’s some of our favorite work.'}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map(project => (
            <Card key={project.id} className="group overflow-hidden bg-card border-border/50">
              {project.image && (
                <div className="overflow-hidden">
                  <Image 
                    src={project.image.imageUrl} 
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint={project.image.imageHint}
                  />
                </div>
              )}
              <div className="p-6">
                <Badge variant="secondary">{project.category}</Badge>
                <CardTitle className="mt-4 text-white text-xl">{project.title}</CardTitle>
                <CardContent className="px-0 pt-2 pb-4">
                  <p className="text-muted-foreground">{project.description}</p>
                </CardContent>
                <Button asChild variant="outline">
                    <Link href="#">{dict.buttons.viewCaseStudies}</Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
