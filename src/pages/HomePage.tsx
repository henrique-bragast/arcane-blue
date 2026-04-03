import { PageLayout } from '@/components/layout/PageLayout'
import { Hero } from '@/components/home/Hero'
import { AboutSection } from '@/components/home/AboutSection'
import { ServicesPreview } from '@/components/home/ServicesPreview'
import { HomeCTA } from '@/components/home/HomeCTA'

export function HomePage() {
  return (
    <PageLayout>
      <Hero />
      <AboutSection />
      <ServicesPreview />
      <HomeCTA />
    </PageLayout>
  )
}
