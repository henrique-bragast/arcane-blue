import { PageLayout } from '@/components/layout/PageLayout'
import { Hero } from '@/components/home/Hero'
import { StatsBar } from '@/components/home/StatsBar'
import { AboutSection } from '@/components/home/AboutSection'
import { ServicesPreview } from '@/components/home/ServicesPreview'
import { ProcessSection } from '@/components/home/ProcessSection'
import { WorkSection } from '@/components/home/WorkSection'
import { Testimonials } from '@/components/home/Testimonials'
import { HomeCTA } from '@/components/home/HomeCTA'

export function HomePage() {
  return (
    <PageLayout>
      <Hero />
      <StatsBar />
      <AboutSection />
      <ServicesPreview />
      <ProcessSection />
      <WorkSection />
      <Testimonials />
      <HomeCTA />
    </PageLayout>
  )
}
