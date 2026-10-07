---
title: webpack高级配置
date: 2017-12-18
category:
  - nodejs
  - webpack
icon: webpack
---

## html-withimg-loader

只需在`html`文件中正常引用图片即可，`webpack`会找到对应的资源进行打包并修改`html`中的引用路径
安装
添加 loader

```js
rules: [
  {
    test: /\.(jpg|png|gif)$/i,
    use: [
      {
        loader: 'url-loader',
        options: {
          limit: 5 * 1024,
          outputPath: 'images',
          name: '[name]-[hash:6].[ext]',
          esModule: false,
        },
      },
    ],
  },
  {
    test: /\.(htm|html)$/i,
    loader: 'html-withimg-loader',
  },
]
```

## 多页应用打包

修改入口出口配置，多入口无法对应一个固定出口，需将`filename`设为`[name]`变量，如果使用了`html`插件，需手动配置对应的`html`文件

```js
  entry: {
    main: './src/main.js',
    other: './src/other.js'
  },
  output: {
    path: path.join(__dirname,'./dist/'),
    filename: '[name].js',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      chunks: ['main']
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      chunks: ['main','other']
    }),
  ],
```

## 第三方库引入

安装`expose-loader`将库引入到全局作用域

```js
rules: [
  {
    test: require.resolve('jquery'),
    use: {
      loader: 'expose-loader',
      options: '$',
    },
  },
]
```

`require.resolve`获取模块的绝对路径

内置插件`webpack.ProvidePlugin`对每个模块的闭包空间注入一个变量，自动加载库到模块

```js
const webpack = require('webpack')
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ],
```

## 不同配置文件打包

抽取三个配置文件：`webpack.base.js`、`webpack.prod.js`、`webpack.dev.js`
安装`webpack-merge`

```js
const { merge } = require('webpack-merge')
const base = require('./webpack.base.js')
module.exports = merge(base, {
  mode: 'development',
  devServer: {
    open: true,
    port: 8090,
    hot: true,
    compress: true,
    // contentBase: './src'
  },
  devtool: 'eval-cheap-module-source-map',
})
```

更改指令

```json
  "scripts": {
    "dev": "webpack serve --config ./build/webpack.dev.js --compress --hot --open --port 8090",
    "build": "webpack --config ./build/webpack.prod.js",
    "startDist": "live-server ./dist"
  },
```

## 定义环境变量

```js
const { DefinePlugin } = require('webpack')
plugins: [
  new DefinePlugin({
    CURRENT_ENV: '"develop"',
  }),
]
```

在 js 中

```js
let url = 'http://192.168.2.12'
if (CURRENT_ENV === 'develop') {
  url = 'http://192.168.2.56'
} else if (CURRENT_ENV === 'production') {
  url = 'http://192.168.2.13'
}
```

使用`devServer`解决跨域

```js
devServer: {
    proxy: {
      '/api': {
        target: 'http://api.vikingship.xyz/api',
        ws: true,
        changOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
}
```

## HMR 热更新

需要对某个需求热更新，可以通过`module.hot.accept`方法进行文件监视

```js
if (module.hot) {
  module.hot.accept('./hotmodule.js', function () {
    console.log('hotmodule.js更新了')
    let str = require('./hotmodule.js')
    console.log(str)
  })
}
```
