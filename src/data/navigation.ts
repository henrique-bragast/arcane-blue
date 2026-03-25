export interface NavLink {
  label: string
  href: string
}

export const navLinks: NavLink[] = [
  { label: 'Início', href: '/' },
  { label: 'Sobre', href: '/sobre' },
  { label: 'Serviços', href: '/servicos' },
  { label: 'Trabalhos', href: '/trabalhos' },
  { label: 'Contato', href: '/contato' },
]
