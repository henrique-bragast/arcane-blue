import { PageLayout } from '@/components/layout/PageLayout'
import { Section } from '@/components/layout/Section'
import { SectionHeading } from '@/components/common/SectionHeading'

export function WorkPage() {
  return (
    <PageLayout>
      <Section>
        <SectionHeading
          eyebrow="Trabalhos"
          title="Projetos que <span class='text-accent'>falam por si</span>"
          subtitle="Uma seleção dos projetos que entregamos para clientes líderes em seus mercados."
        />
        <p className="text-text-secondary text-center max-w-2xl mx-auto">
          Página em construção — portfólio completo em breve.
        </p>
      </Section>
    </PageLayout>
  )
}
