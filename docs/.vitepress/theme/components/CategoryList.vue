<script setup lang="ts">
import { withBase } from 'vitepress'
import { data as groups } from '../posts.data'
</script>

<template>
  <div class="category-page">
    <h1>文章分类</h1>
    <p class="category-lead">按文章头信息里的分类汇总，同一分类内按 order 排序。</p>
    <nav class="category-jump" aria-label="分类">
      <a v-for="group in groups" :key="group.key" :href="`#${group.key}`">
        {{ group.label }}
        <span>{{ group.items.length }}</span>
      </a>
    </nav>
    <section v-for="group in groups" :id="group.key" :key="group.key" class="category-group">
      <h2>{{ group.label }}</h2>
      <ol>
        <li v-for="item in group.items" :key="item.url + item.categoryKey">
          <span v-if="item.order != null" class="order">{{ item.order }}</span>
          <a :href="withBase(item.url)">{{ item.title }}</a>
          <time v-if="item.date">{{ item.date }}</time>
        </li>
      </ol>
    </section>
  </div>
</template>

<style scoped>
.category-page {
  max-width: 880px;
  margin: 0 auto;
  padding: 32px 24px 64px;
}
.category-lead {
  color: var(--vp-c-text-2);
}
.category-jump {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 20px 0 8px;
}
.category-jump a {
  display: inline-flex;
  gap: 6px;
  align-items: center;
  padding: 4px 10px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 999px;
  font-size: 13px;
  color: var(--vp-c-text-1);
}
.category-jump a span {
  color: var(--vp-c-text-3);
}
.category-group {
  margin-top: 28px;
  scroll-margin-top: 80px;
}
.category-group h2 {
  margin: 0 0 12px;
  padding-bottom: 8px;
  border-bottom: 1px solid var(--vp-c-divider);
  font-size: 20px;
}
.category-group ol {
  list-style: none;
  margin: 0;
  padding: 0;
}
.category-group li {
  display: flex;
  align-items: baseline;
  gap: 12px;
  padding: 8px 0;
  border-bottom: 1px solid var(--vp-c-divider);
}
.order {
  width: 1.5rem;
  color: var(--vp-c-brand-1);
  font-variant-numeric: tabular-nums;
}
.category-group time {
  margin-left: auto;
  color: var(--vp-c-text-3);
  font-size: 13px;
}
</style>
