import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import CategoryList from './components/CategoryList.vue'
import './custom.css'
import type { Theme } from 'vitepress'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component('CategoryList', CategoryList)
  },
} satisfies Theme
