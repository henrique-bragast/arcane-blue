// Text content lives in src/i18n/locales/*.json under services.items[].
// This file only stores static non-translatable icon names and ordering.

export interface ServiceMeta {
  icon: string
}

export const serviceMeta: ServiceMeta[] = [
  { icon: 'Code2' },
  { icon: 'Blocks' },
  { icon: 'Bot' },
  { icon: 'RefreshCw' },
]
