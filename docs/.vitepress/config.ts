import { defineConfig } from 'vitepress'
import nav from './nav'
import sidebar from './sidebar'

/**
 * 发布到 https://<user>.github.io/blog/，对应 GitHub 仓库 blog。
 */
const base = '/blog/'

export default defineConfig({
  lang: 'zh-CN',
  title: 'Emilia Zhen 的博客',
  description: '简简单单记两笔',
  base,
  cleanUrls: true,
  head: [['link', { rel: 'icon', href: `${base}favicon.ico` }]],
  themeConfig: {
    logo: '/logo.png',
    siteTitle: 'Emilia Zhen',
    nav,
    sidebar,
    outline: {
      label: '本页目录',
      level: [2, 3],
    },
    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },
    sidebarMenuLabel: '文章目录',
    returnToTopLabel: '回到顶部',
    darkModeSwitchLabel: '外观',
    lightModeSwitchTitle: '切换到浅色',
    darkModeSwitchTitle: '切换到深色',
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索',
            buttonAriaLabel: '搜索',
          },
          modal: {
            noResultsText: '没有找到结果',
            resetButtonTitle: '清除',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭',
            },
          },
        },
      },
    },
    footer: {
      message: 'Emilia Zhen 的博客',
      copyright: 'Emilia Zhen',
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/emiliazhen' }],
    editLink: {
      pattern: 'https://github.com/emiliazhen/blog/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页',
    },
  },
  markdown: {
    theme: {
      light: 'github-light',
      dark: 'one-dark-pro',
    },
  },
})
