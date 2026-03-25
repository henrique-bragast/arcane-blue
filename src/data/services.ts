// Text content lives in src/i18n/locales/*.json under services.items[]
// This file only holds static non-translatable data (icon names, order)

export interface ServiceMeta {
  icon: string
}

export const serviceMeta: ServiceMeta[] = [
  { icon: 'Code2'    },
  { icon: 'Cloud'    },
  { icon: 'Shield'   },
  { icon: 'BarChart3'},
]
