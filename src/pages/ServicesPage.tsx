import { PageLayout } from '@/components/layout/PageLayout'
import { Section } from '@/components/layout/Section'
import { SectionHeading } from '@/components/common/SectionHeading'

export function ServicesPage() {
  return (
    <PageLayout>
      <Section>
        <SectionHeading
          eyebrow="Serviços"
          title="O que podemos construir <span class='text-accent'>para você</span>"
          subtitle="Cobertura completa — do backend ao dado, da nuvem à segurança."
        />
        <p className="text-text-secondary text-center max-w-2xl mx-auto">
          Página em construção — detalhes completos de cada serviço em breve.
        </p>
      </Section>
    </PageLayout>
  )
}
