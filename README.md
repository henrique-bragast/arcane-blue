# Arcane Blue — UI

Website institucional da [Arcane Blue](https://arcaneblue.com.br), empresa de engenharia de software especializada em sistemas de produção.

## Stack

- **React 19** + **TypeScript**
- **Vite 6** — bundler e dev server
- **Tailwind CSS 4** — estilização
- **Framer Motion** — animações
- **React Router 7** — roteamento
- **i18next** — internacionalização (EN, PT, ES)
- **Lucide React** — ícones

## Estrutura

```
src/
├── components/
│   ├── common/       # ScrollReveal, GradientText, AnimatedCounter...
│   ├── home/         # Seções da home (Hero, Process, Work...)
│   ├── layout/       # Navbar, Footer, PageLayout, Section
│   └── ui/           # Button, Card, Badge
├── data/             # Dados estáticos (services, stats, testimonials...)
├── i18n/
│   ├── index.ts
│   └── locales/      # en.json, pt.json, es.json
├── pages/            # HomePage, ServicesPage, WorkPage, ContactPage...
├── router/           # Definição de rotas
└── lib/              # Utilitários (cn, animations, constants)
```

## Primeiros passos

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview
```

## Internacionalização

Os textos do site são gerenciados em `src/i18n/locales/`. Cada idioma tem seu próprio arquivo JSON com a mesma estrutura de chaves.

Para adicionar um novo idioma, crie o arquivo correspondente em `locales/` e registre-o em `src/i18n/index.ts`.

## Lint

```bash
npm run lint
```
