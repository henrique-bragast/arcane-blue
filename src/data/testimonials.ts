export interface Testimonial {
  id: string
  quote: string
  author: string
  role: string
  company: string
  initials: string
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    quote: 'A Arcane Blue entregou uma plataforma que transformou completamente nossa operação. Velocidade, qualidade e comprometimento em cada etapa.',
    author: 'Ana Ribeiro',
    role: 'CTO',
    company: 'Nexus Finance',
    initials: 'AR',
  },
  {
    id: '2',
    quote: 'Profissionalismo inigualável. A infraestrutura que construíram para nós suporta milhões de transações por dia com zero incidentes críticos.',
    author: 'Carlos Mendes',
    role: 'VP de Tecnologia',
    company: 'Grupo Meridian',
    initials: 'CM',
  },
  {
    id: '3',
    quote: 'Finalmente uma empresa de tech que entende de negócio. Eles não entregam código — entregam resultado.',
    author: 'Fernanda Costa',
    role: 'CEO',
    company: 'Veritas Health',
    initials: 'FC',
  },
]
