# Emilia Zhen 的博客

VitePress 技术笔记。正文在 `docs/`，顶部菜单在 `docs/.vitepress/nav.ts`，左侧文章目录在 `docs/.vitepress/sidebar.ts`。

每篇文章顶部的 `category`、`order`、`date` 会显示在正文上方。`/category/` 按分类汇总，同一分类内按 `order` 排列。右侧「本页目录」是文内标题导航。

```bash
npm install
npm run docs:dev      # 本地预览
npm run docs:build    # 输出到 docs/.vitepress/dist
```

## 部署到 GitHub Pages

推送到 `main` 后，GitHub Actions 会构建并把静态文件推到**同一个仓库**的 `gh-pages` 分支。

仓库建好后，到 Settings → Pages：

- Source：Deploy from a branch
- Branch：`gh-pages`，目录 `/(root)`

站点 `base` 是 `/blog/`，对应仓库 `blog`，页面地址是 `https://<用户名>.github.io/blog/`。

也可以在本机执行 `powershell -ExecutionPolicy Bypass -File .\deploy.ps1`，效果相同：构建后强制推到 origin 的 `gh-pages`。

### 私有库能不能用同一仓库的 gh-pages

GitHub Free 不能。免费账号的 GitHub Pages 只接受**公开仓库**，私有库即使有 `gh-pages` 分支也不会发布站点。

GitHub Pro、Team、Enterprise 可以：同一个私有库用 `gh-pages` 发布，源码保持私有，但**站点地址是公开的**，知道链接的人都能看。

免费账号就用一个公开库，配合这个 `gh-pages` 分支即可。
