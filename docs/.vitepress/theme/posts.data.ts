import { createContentLoader } from 'vitepress'
import { CATEGORY_ORDER, categoryFromUrl, categoryKey, categoryLabel } from '../categories'

export interface PostItem {
  title: string
  url: string
  date: string
  order: number | null
  categoryKey: string
  categoryLabel: string
}

export interface CategoryGroup {
  key: string
  label: string
  items: PostItem[]
}

const SKIP = new Set(['/', '/index', '/category/', '/category/index', '/portfolio'])

function formatDate(value: unknown) {
  if (!value) return ''
  if (value instanceof Date && !Number.isNaN(value.getTime())) {
    const y = value.getUTCFullYear()
    const m = String(value.getUTCMonth() + 1).padStart(2, '0')
    const d = String(value.getUTCDate()).padStart(2, '0')
    return `${y}-${m}-${d}`
  }
  return String(value).match(/\d{4}-\d{2}-\d{2}/)?.[0] ?? ''
}

function asCategories(value: unknown): string[] {
  if (Array.isArray(value)) return value.map((item) => String(item).trim()).filter(Boolean)
  if (typeof value === 'string' && value.trim()) return [value.trim()]
  return []
}

export default createContentLoader('**/*.md', {
  transform(pages): CategoryGroup[] {
    const grouped = new Map<string, PostItem[]>()

    for (const page of pages) {
      const url = page.url.replace(/\.html$/, '')
      if (SKIP.has(url) || SKIP.has(page.url)) continue

      const frontmatter = page.frontmatter
      const written = asCategories(frontmatter.category)
      const keys = written.length
        ? written.map(categoryKey)
        : [categoryFromUrl(url)].filter((key): key is string => Boolean(key))

      const order = typeof frontmatter.order === 'number' ? frontmatter.order : null
      const itemBase = {
        title: String(frontmatter.title || url),
        url,
        date: formatDate(frontmatter.date),
        order,
      }

      for (const key of keys) {
        const list = grouped.get(key) ?? []
        list.push({ ...itemBase, categoryKey: key, categoryLabel: categoryLabel(key) })
        grouped.set(key, list)
      }
    }

    const keys = [...grouped.keys()].sort((a, b) => {
      const ia = CATEGORY_ORDER.indexOf(a)
      const ib = CATEGORY_ORDER.indexOf(b)
      return (ia === -1 ? 999 : ia) - (ib === -1 ? 999 : ib) || a.localeCompare(b, 'zh')
    })

    return keys.map((key) => ({
      key,
      label: categoryLabel(key),
      items: (grouped.get(key) ?? []).sort((a, b) => {
        const byOrder = (a.order ?? 10000) - (b.order ?? 10000)
        if (byOrder) return byOrder
        const byDate = (a.date ? Date.parse(a.date) : Number.MAX_SAFE_INTEGER) - (b.date ? Date.parse(b.date) : Number.MAX_SAFE_INTEGER)
        if (byDate) return byDate
        return a.title.localeCompare(b.title, 'zh')
      }),
    }))
  },
})
