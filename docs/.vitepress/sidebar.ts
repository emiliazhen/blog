import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import type { DefaultTheme } from 'vitepress'

const docsDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')

function readMeta(filePath: string) {
  const raw = fs.readFileSync(filePath, 'utf8')
  const frontmatter = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/)?.[1] ?? ''
  const title = frontmatter.match(/^title:\s*(.+)$/m)?.[1]?.trim()
  const order = frontmatter.match(/^order:\s*(\d+)$/m)?.[1]
  const fileName = path.basename(filePath, '.md')
  return {
    title: title || fileName,
    order: order ? Number(order) : 10000,
    fileName,
  }
}

/** 对应原来 sidebar 里写成 structure 的目录：按 frontmatter.order 排序。 */
function structureSidebar(dir: string): DefaultTheme.SidebarItem[] {
  return fs
    .readdirSync(path.join(docsDir, dir))
    .filter((name) => name.endsWith('.md'))
    .map((name) => {
      const meta = readMeta(path.join(docsDir, dir, name))
      return {
        text: meta.title,
        link: `/${dir}/${meta.fileName}`,
        order: meta.order,
        fileName: meta.fileName,
      }
    })
    .sort((a, b) => a.order - b.order || a.fileName.localeCompare(b.fileName, 'zh'))
    .map(({ text, link }) => ({ text, link }))
}

const sidebar: DefaultTheme.Sidebar = {
  '/html/': structureSidebar('html'),
  '/css/': structureSidebar('css'),
  '/js/': [
    { text: 'js', link: '/js/js' },
    { text: '语句', link: '/js/语句' },
    { text: '数组', link: '/js/数组' },
    { text: '函数和作用域', link: '/js/函数和作用域' },
    { text: '对象', link: '/js/对象' },
    { text: '正则表达式', link: '/js/正则表达式' },
    { text: 'es6', link: '/js/es6' },
    { text: 'jQuery', link: '/js/jquery' },
    { text: 'ajax', link: '/js/ajax' },
    { text: 'js高级', link: '/js/js高级' },
    {
      text: 'typescript',
      collapsed: false,
      items: [
        { text: 'typescript', link: '/js/typescript/typescript' },
        { text: 'typescript声明文件', link: '/js/typescript/typescript声明文件' },
      ],
    },
  ],
  '/webApi/': structureSidebar('webApi'),
  '/webApp/': structureSidebar('webApp'),
  '/nodejs/': [
    { text: 'api', link: '/nodejs/api' },
    { text: 'express', link: '/nodejs/express' },
    { text: 'nest', link: '/nodejs/nest' },
    { text: 'npm', link: '/nodejs/npm' },
    {
      text: 'webpack',
      collapsed: false,
      items: [
        { text: 'webpack', link: '/nodejs/webpack/webpack' },
        { text: 'webpack高级配置', link: '/nodejs/webpack/webpack高级配置' },
        { text: 'webpack优化', link: '/nodejs/webpack/webpack优化' },
        { text: 'webpack原理', link: '/nodejs/webpack/webpack原理' },
      ],
    },
    { text: 'jest', link: '/nodejs/jest' },
    { text: 'vite', link: '/nodejs/vite' },
    { text: 'storybook', link: '/nodejs/storybook' },
  ],
  '/canvas/': [
    {
      text: 'canvas',
      collapsed: false,
      items: [
        { text: 'canvas', link: '/canvas/canvas' },
        { text: '绘制api', link: '/canvas/绘制api' },
      ],
    },
    { text: 'webGL', link: '/canvas/webGL' },
    {
      text: 'three.js',
      collapsed: false,
      items: [
        { text: 'three.js', link: '/canvas/threejs/threejs' },
        { text: '基本元素场景', link: '/canvas/threejs/基本元素场景' },
        { text: '基本元素几何体', link: '/canvas/threejs/基本元素几何体' },
        { text: '基本元素材质', link: '/canvas/threejs/基本元素材质' },
        { text: '基本元素光照', link: '/canvas/threejs/基本元素光照' },
        { text: '基本元素相机', link: '/canvas/threejs/基本元素相机' },
      ],
    },
    {
      text: 'cesium.js',
      collapsed: false,
      items: [
        { text: 'cesium.js', link: '/canvas/cesium/cesium' },
        { text: '实体', link: '/canvas/cesium/实体' },
        { text: '交互', link: '/canvas/cesium/交互' },
      ],
    },
  ],
  '/electron/': structureSidebar('electron'),
  '/vue/': [
    {
      text: 'Vue2',
      collapsed: false,
      items: [
        { text: '开始', link: '/vue/vue2/开始' },
        { text: '组件', link: '/vue/vue2/组件' },
        { text: '配置', link: '/vue/vue2/配置' },
        { text: '路由', link: '/vue/vue2/路由' },
        { text: '状态管理', link: '/vue/vue2/状态管理' },
      ],
    },
    { text: 'vue3', link: '/vue/vue3' },
    { text: 'nuxt', link: '/vue/nuxt' },
  ],
  '/react/': structureSidebar('react'),
  '/wechat/': structureSidebar('wechat'),
  '/php/': structureSidebar('php'),
  '/java/': structureSidebar('java'),
  '/python/': structureSidebar('python'),
  '/linux/': structureSidebar('linux'),
  '/flutter/': structureSidebar('flutter'),
  '/consolidate/': structureSidebar('consolidate'),
}

export default sidebar
