import { PageShell } from '@/components/page-shell';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { Locale } from '@/lib/i18n/config';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Mail, Phone } from 'lucide-react';

export default async function Contact({ params: { lang } }: { params: { lang: Locale } }) {
  const dict = await getDictionary(lang);

  return (
    <PageShell>
      <div className="container py-16 md:py-24">
        <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl">{dict.contact.title}</h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">{dict.cta.description}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
            <Card className="bg-card">
              <CardHeader>
                <CardTitle>{dict.buttons.sendMessage}</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-white">{dict.contact.form.name}</label>
                    <Input id="name" placeholder={dict.contact.form.name} />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-white">{dict.contact.form.email}</label>
                    <Input id="email" type="email" placeholder={dict.contact.form.email} />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium text-white">{dict.contact.form.company}</label>
                    <Input id="company" placeholder={dict.contact.form.company} />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-white">{dict.contact.form.message}</label>
                    <Textarea id="message" placeholder={dict.contact.form.message} className="min-h-[150px]" />
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    {dict.buttons.sendMessage}
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-8">
                <Card className="bg-card">
                    <CardHeader>
                        <CardTitle>{dict.buttons.bookConsultation}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground mb-4">
                          {lang === 'ar' ? 'حدد وقتًا لمناقشة مشروعك مع خبرائنا.' : 'Schedule a time to discuss your project with our experts.'}
                        </p>
                        <Button className="w-full" size="lg">{dict.buttons.bookConsultation}</Button>
                    </CardContent>
                </Card>
                 <Card className="bg-card">
                    <CardHeader>
                        <CardTitle>{lang === 'ar' ? 'معلومات الاتصال' : 'Contact Information'}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex items-center gap-4">
                            <Mail className="h-6 w-6 text-primary" />
                            <a href={`mailto:${dict.cta.email}`} className="text-white hover:underline">{dict.cta.email}</a>
                        </div>
                         <div className="flex items-center gap-4">
                            <Phone className="h-6 w-6 text-primary" />
                            <span className="text-white">{lang === 'ar' ? 'قريبا' : 'Coming Soon'}</span>
                        </div>
                    </CardContent>
                </Card>
            </div>

        </div>
      </div>
    </PageShell>
  );
}
