# Arcane Blue UI

Corporate website for Arcane Blue, a software engineering company. Built with React 19 + TypeScript + Vite.

## Commands

```bash
npm run dev      # Dev server
npm run build    # TypeScript check + Vite production build
npm run lint     # ESLint
npm run preview  # Preview production build
```

## Stack

- **React 19** + **TypeScript 5.7** (strict mode)
- **Vite 6** + **Tailwind CSS 4**
- **Framer Motion 11** — animations
- **React Router 7** — SPA routing
- **i18next** — EN, PT, ES translations
- **Lucide React** — icons
- **clsx + tailwind-merge** via `cn()` utility

## Project Structure

```
src/
├── components/
│   ├── common/    # Reusable: ScrollReveal, AnimatedCounter, GradientText, BlurBlob, LanguageSwitcher, ScrollToTopButton
│   ├── home/      # Home page sections: Hero, AboutSection, ServicesPreview, HomeCTA
│   ├── layout/    # Navbar, Footer, PageLayout, Section
│   └── ui/        # Primitives: Button, Card, Badge
├── pages/         # Page components (HomePage, AboutPage, ServicesPage, WorkPage, ContactPage, NotFoundPage)
├── router/        # React Router config
├── data/          # Static metadata (e.g. services.ts — non-translatable content)
├── i18n/          # Translation files: en.json, pt.json, es.json
└── lib/           # Utilities: cn(), animation variants, constants
```

Path alias: `@/*` → `./src/*`

## Key Conventions

**Styling:** Use the `cn()` utility for merging Tailwind classes. Custom tokens include `accent`, `elevated`, `border-strong`, `text-primary`. Variant-based component styling (Button has `primary`, `ghost`, `outline` variants).

**Animations:** Use predefined Framer Motion variants from `@/lib/animations` (`fadeUp`, `fadeIn`, `fadeLeft`, `fadeRight`, `scaleIn`, `stagger`, `staggerFast`). Wrap content in `<ScrollReveal>` for scroll-triggered animations.

**i18n:** All UI text goes in `src/i18n/{en,pt,es}.json`. Icons and non-translatable metadata stay in `src/data/`. Never hardcode user-facing strings in components.

**TypeScript:** Strict mode enabled — no unused locals/parameters. Use type imports (`import type`) for library types.
