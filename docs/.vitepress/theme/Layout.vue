<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import { useData, withBase } from 'vitepress'
import { computed } from 'vue'
import { categoryKey, categoryLabel } from '../categories'

const { frontmatter } = useData()

const categories = computed(() => {
  const raw = frontmatter.value.category
  const list = Array.isArray(raw) ? raw : raw ? [raw] : []
  return list
    .map((item) => String(item).trim())
    .filter(Boolean)
    .map((name) => {
      const key = categoryKey(name)
      return { key, label: categoryLabel(key) }
    })
})

const createdAt = computed(() => {
  const value = frontmatter.value.date
  if (!value) return ''
  if (value instanceof Date && !Number.isNaN(value.getTime())) {
    const y = value.getUTCFullYear()
    const m = String(value.getUTCMonth() + 1).padStart(2, '0')
    const d = String(value.getUTCDate()).padStart(2, '0')
    return `${y}-${m}-${d}`
  }
  return String(value).match(/\d{4}-\d{2}-\d{2}/)?.[0] ?? ''
})

const order = computed(() => {
  const value = frontmatter.value.order
  return typeof value === 'number' ? value : null
})

const visible = computed(() => categories.value.length > 0 || createdAt.value || order.value != null)
</script>

<template>
  <DefaultTheme.Layout>
    <template #doc-before>
      <div v-if="visible" class="article-meta">
        <span v-if="categories.length">
          分类
          <a
            v-for="item in categories"
            :key="item.key"
            :href="`${withBase('/category/')}#${item.key}`"
          >{{ item.label }}</a>
        </span>
        <span v-if="order != null">排序 {{ order }}</span>
        <span v-if="createdAt">创建于 {{ createdAt }}</span>
      </div>
    </template>
  </DefaultTheme.Layout>
</template>
