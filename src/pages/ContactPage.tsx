import { PageLayout } from '@/components/layout/PageLayout'
import { Section } from '@/components/layout/Section'
import { SectionHeading } from '@/components/common/SectionHeading'

export function ContactPage() {
  return (
    <PageLayout>
      <Section>
        <SectionHeading
          eyebrow="Contato"
          title="Vamos conversar sobre <span class='text-accent'>seu projeto</span>"
          subtitle="Preencha o formulário e nosso time entrará em contato em até 24 horas."
        />
        <p className="text-text-secondary text-center max-w-2xl mx-auto">
          Formulário de contato em construção — em breve.
        </p>
      </Section>
    </PageLayout>
  )
}
