/** 分类页分组顺序，与原来博客首页的分类入口一致。 */
export const CATEGORY_ORDER = [
  'html',
  'css',
  'js',
  'webapi',
  'nodejs',
  'canvas',
  'three.js',
  'cesium.js',
  'vue',
  'nuxt',
  'react',
  'webapp',
  'electron',
  'wechat',
  'flutter',
  'php',
  'java',
  'python',
  'linux',
  '巩固',
  '配置',
  '错题集',
]

const LABELS: Record<string, string> = {
  html: 'HTML',
  css: 'CSS',
  js: 'JS',
  webapi: 'WebAPI',
  nodejs: 'Node',
  canvas: 'Canvas',
  'three.js': 'Three.js',
  'cesium.js': 'Cesium.js',
  vue: 'Vue',
  nuxt: 'Nuxt',
  react: 'React',
  webapp: 'Web 移动端',
  electron: 'Electron',
  wechat: 'WeChat',
  flutter: 'Flutter',
  php: 'PHP',
  java: 'Java',
  python: 'Python',
  linux: 'Linux',
  巩固: '巩固',
  配置: '配置',
  错题集: '错题集',
}

const DIR_CATEGORY: Record<string, string> = {
  html: 'html',
  css: 'css',
  js: 'js',
  webApi: 'webapi',
  nodejs: 'nodejs',
  canvas: 'canvas',
  vue: 'vue',
  react: 'react',
  webApp: 'webapp',
  electron: 'electron',
  wechat: 'wechat',
  flutter: 'flutter',
  php: 'php',
  java: 'java',
  python: 'python',
  linux: 'linux',
  consolidate: '巩固',
  config: '配置',
  bugs: '错题集',
}

export function categoryKey(name: string) {
  const key = name.trim().toLowerCase()
  if (key === 'node') return 'nodejs'
  return key
}

export function categoryLabel(key: string) {
  return LABELS[key] || key
}

/** 正文没有写 category 时，用目录归类，避免 three.js / 巩固 这类文章从分类页消失。 */
export function categoryFromUrl(url: string): string | null {
  const parts = url.replace(/\.html$/, '').split('/').filter(Boolean)
  if (parts[0] === 'canvas' && parts[1] === 'threejs') return 'three.js'
  if (parts[0] === 'canvas' && parts[1] === 'cesium') return 'cesium.js'
  if (!parts[0]) return null
  return DIR_CATEGORY[parts[0]] ?? null
}
