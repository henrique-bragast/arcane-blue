import { PageLayout } from '@/components/layout/PageLayout'
import { Section } from '@/components/layout/Section'
import { SectionHeading } from '@/components/common/SectionHeading'

export function AboutPage() {
  return (
    <PageLayout>
      <Section>
        <SectionHeading
          eyebrow="Sobre nós"
          title="Quem é a <span class='text-accent'>Arcane Blue</span>"
          subtitle="Uma empresa fundada para resolver os problemas mais complexos de tecnologia com precisão e elegância."
        />
        <p className="text-text-secondary text-center max-w-2xl mx-auto">
          Página em construção — em breve com timeline, equipe e valores.
        </p>
      </Section>
    </PageLayout>
  )
}
