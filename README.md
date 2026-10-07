# Emilia Zhen 的博客

VitePress 技术笔记。正文在 `docs/`，顶部菜单在 `docs/.vitepress/nav.ts`，左侧文章目录在 `docs/.vitepress/sidebar.ts`。

每篇文章顶部的 `category`、`order`、`date` 会显示在正文上方。`/category/` 按分类汇总，同一分类内按 `order` 排列。右侧「本页目录」是文内标题导航。

```bash
npm install
npm run docs:dev      # 本地预览
npm run docs:build    # 输出到 docs/.vitepress/dist
```
