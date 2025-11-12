import { PageShell } from '@/components/page-shell';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { Locale } from '@/lib/i18n/config';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';

export default async function Blog({ params: { lang } }: { params: { lang: Locale } }) {
  const dict = await getDictionary(lang);
  
  const blogPosts = [
    {
      id: '1',
      title: 'The Future of Mobile App Development',
      excerpt: 'Exploring the latest trends and technologies shaping the future of mobile applications.',
      image: PlaceHolderImages.find(img => img.id === 'blog-cover-1'),
      category: 'Mobile Dev',
      date: 'October 26, 2025'
    },
    {
      id: '2',
      title: 'UI vs. UX: A Comprehensive Guide',
      excerpt: 'Understand the critical differences and synergies between User Interface and User Experience design.',
      image: PlaceHolderImages.find(img => img.id === 'blog-cover-3'),
      category: 'Design',
      date: 'October 22, 2025'
    },
    {
      id: '3',
      title: 'Scaling Your App with Serverless Architecture',
      excerpt: 'How to leverage serverless to build scalable, cost-effective, and robust applications.',
      image: PlaceHolderImages.find(img => img.id === 'blog-cover-2'),
      category: 'DevOps',
      date: 'October 18, 2025'
    }
  ];

  return (
    <PageShell>
      <div className="container py-16 md:py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl">{dict.navigation.blog}</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">Insights, trends, and stories from the BlueGateX team.</p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map(post => (
            <Card key={post.id} className="overflow-hidden bg-card border-border/50 flex flex-col">
              {post.image && (
                <Link href={`/${lang}/blog/${post.id}`} className="block">
                  <Image 
                    src={post.image.imageUrl} 
                    alt={post.title}
                    width={600}
                    height={400}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                    data-ai-hint={post.image.imageHint}
                  />
                </Link>
              )}
              <CardHeader>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <Badge variant="secondary">{post.category}</Badge>
                  <time dateTime={post.date}>{post.date}</time>
                </div>
                <CardTitle className="mt-2 text-white">
                  <Link href={`/${lang}/blog/${post.id}`} className="hover:text-primary transition-colors">
                    {post.title}
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{post.excerpt}</p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="link" className="px-0">
                  <Link href={`/${lang}/blog/${post.id}`}>Read More &rarr;</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
