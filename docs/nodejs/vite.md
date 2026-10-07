---
title: vite
date: 2021-12-08
category: nodejs
icon: vite
---

## 搭建项目

### npm

```powershell
npm create vite@latest
```

### yarn

```powershell
yarn create vite
```

使用模板：`vue` / `vanilla` / `vanilla-ts` / `vue` / `vue-ts` / `react` / `react-ts` / `preact` / `preact-ts` / `lit` / `lit-ts` / `svelte` / `svelte-ts`

```powershell
npm create vite@latest my-vue-app --template vue
```

package.json

```json
  "scripts": {
    "dev": "vite --mode dev",
    "test": "vite --mode test",
    "release": "vite --mode release",
    "build": "vue-tsc --noEmit --skipLibCheck && vite build",
    "serve": "vite preview"
  },
```

tsconfig.json

```json
{
  "compilerOptions": {
    "target": "esnext",
    "useDefineForClassFields": true,
    "module": "esnext",
    "moduleResolution": "node",
    "strict": true,
    "jsx": "preserve",
    "sourceMap": true,
    "resolveJsonModule": true,
    "esModuleInterop": true,
    "lib": ["esnext", "dom"],
    "suppressImplicitAnyIndexErrors": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  },
  "include": ["src/**/*.ts", "src/**/*.d.ts", "src/**/*.tsx", "src/**/*.vue"],
  "exclude": ["node_modules"]
}
```

使用`vue2`需安装`vite-plugin-vue2`

```json
  "devDependencies": {
    "sass": "^1.48.0",
    "vite": "^2.7.2",
    "vue-template-compiler": "^2.6.11",
    "vite-plugin-vue2": "^1.9.2"
  },
```

## 浏览器兼容

vite.config.ts

```js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy'
const { resolve } = require('path')
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    legacy({
      targets: ['chrome 52'],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
      renderLegacyChunks: true,
      polyfills: [
        'es.symbol',
        'es.array.filter',
        'es.promise',
        'es.promise.finally',
        'es/map',
        'es/set',
        'es.array.for-each',
        'es.object.define-properties',
        'es.object.define-property',
        'es.object.get-own-property-descriptor',
        'es.object.get-own-property-descriptors',
        'es.object.keys',
        'es.object.to-string',
        'web.dom-collections.for-each',
        'esnext.global-this',
        'esnext.string.match-all',
      ],
    }),
  ],
  base: './',
  resolve: {
    alias: [{ find: '@', replacement: resolve(__dirname, 'src') }],
  },
  // 全局css
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/assets/styles/index.scss";`,
        charset: false,
      },
    },
  },
  server: {
    host: '0.0.0.0',
    port: 8088,
    https: false,
    cors: true,
    proxy: {
      '/api': {
        target: 'http://18ab-117-151-12-2.ngrok.io',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  build: {
    target: 'es2015',
    outDir: 'dist',
    assetsDir: 'assets',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        chunkFileNames: 'static/js/[name]-[hash].js',
        entryFileNames: 'static/js/[name]-[hash].js',
        // assetFileNames: (assetInfo: any) => {
        //   if (/\.css$/.test(assetInfo.name)) {
        //     return 'static/css/[name]-[hash][extname]'
        //   }
        //   return 'static/img/[name]-[hash][extname]'
        // },
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString()
          }
        },
      },
    },
    chunkSizeWarningLimit: 700,
  },
})
```
