---
title: npm
date: 2017-11-10
category: nodejs
icon: npm
---

## 设置镜像

```powershell
yarn config set registry https://mirrors.huaweicloud.com/repository/npm/
yarn config set disturl https://mirrors.huaweicloud.com/nodejs/
yarn config set electron_mirror https://mirrors.huaweicloud.com/electron/

npm config set registry https://registry.npmmirror.com/
npm config set disturl https://npm.taobao.org/dist
npm config set electron_mirror https://npm.taobao.org/mirrors/electron/
```

## 设置代理

```powershell
npm config set proxy=http://127.0.0.1:1080
npm config set registry=http://registry.npmjs.org
```

关于 https
上面设置使用了 http 开头的源，因此不需要设置 https_proxy 否则需要

```powershell
npm config set https-proxy http://server:port
```

取消

```powershell
npm config delete proxy
npm config delete https=proxy
```

## 清缓存

```powershell
npm cache verify
npm cache clean --force
```

## husky

在`package.json`中插入，在每次 `gitCommit` 前会执行命令

```json
  "husky": {
    "hooks": {
      "pre-commit": "npm run test:nowatch && npm run lint"
    }
  },
```

## 本地测试 npm 包

1. 在项目`npm link` 生成短链接
2. 在测试项目`npm link 短连接`

## 发包到 npm

1. 配置 package.json

```json
  "name": "emm-design",
  "version": "0.1.2",
  "description": "React components library",
  "author": "Emilia Zhen",
  "private": false,
  "main": "dist/index.js",
  "module": "dist/index.js",
  "types": "dist/index.d.ts",
  "license": "MIT",
  "keywords": [
    "Component",
    "UI",
    "React"
  ],
  "homepage": "https://emiliazhen.github.io/doc-emm-design",
  "repository": {
    "type": "git",
    "url": "https://github.com/emiliazhen/doc-emm-design"
  },
  "files": [
    "dist"
  ],
```

2. 将非必依赖移至开发依赖，限制版本

```json
  "peerDependencies": {
    "react": ">=16.8.0",
    "react-dom": ">=16.8.0"
  },
```

3. 添加命令

```json
"clean": "rimraf ./dist",
"build": "npm run clean && npm run build-ts && npm run build-css",
"test:nowatch": "cross-env CI=true react-scripts test",
"prepublishOnly": "npm run test:nowatch && npm run lint && npm run build"
"build-ts": "tsc -p tsconfig.build.json",
"build-css": "node-sass ./src/styles/index.scss ./dist/index.css",
```

4. npm 源切至未镜像，验证当前 npm 账号后 publish

```powershell
npm whoami
npm publish
```
